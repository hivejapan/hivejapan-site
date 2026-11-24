// 一覧・サムネイル用：幅800px版（public/images/w800/、scripts/resize-images.sh で生成）があれば srcset を返す
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function srcset(src?: string): string | undefined {
  if (!src || !/^\/images\/[^/]+\.jpe?g$/i.test(src)) return undefined;
  const small = src.replace('/images/', '/images/w800/');
  if (!existsSync(join(process.cwd(), 'public', small))) return undefined;
  return `${small} 800w, ${src} 1600w`;
}
