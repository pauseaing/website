import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content');
const badPrefixes = ['/src/assets/', '../../src/assets/'];
const exts = new Set(['.md', '.mdx']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (entry.isFile() && exts.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function exists(filePath) {
  try {
    const info = await stat(filePath);
    return info.isFile();
  } catch {
    return false;
  }
}

function getFrontmatter(content) {
  if (!content.startsWith('---')) return '';
  const end = content.indexOf('\n---', 3);
  if (end === -1) return '';
  return content.slice(0, end + 4);
}

async function main() {
  const files = await walk(contentRoot);
  const errors = [];

  for (const file of files) {
    const content = await readFile(file, 'utf8');
    const frontmatter = getFrontmatter(content);
    if (!frontmatter) continue;

    const relFile = path.relative(root, file).replaceAll('\\\\', '/');
    const lines = frontmatter.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('heroImage:') && !trimmed.startsWith('photo:')) continue;

      const value = trimmed.split(':').slice(1).join(':').trim().replace(/^['\"]|['\"]$/g, '');

      if (badPrefixes.some((prefix) => value.startsWith(prefix))) {
        errors.push(`${relFile}: invalid asset path '${value}'. Use '../../assets/<file>'`);
        continue;
      }

      if (value.startsWith('../../assets/')) {
        const fileDir = path.dirname(file);
        const resolved = path.resolve(fileDir, value);
        if (!(await exists(resolved))) {
          errors.push(`${relFile}: referenced asset not found '${value}'`);
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error('Invalid content image paths detected:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log('Content image path validation passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
