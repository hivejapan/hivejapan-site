import { getCollection } from 'astro:content';

export type Program = {
  id: string;
  kind: 'summit' | 'regional' | 'report';
  href: string;
  label: string;
  tagline?: string;
  date?: string;
  place?: string;
  participants?: string;
  thumb?: string;
  external?: boolean;
  order: number;
};

export const KIND_LABEL = {
  summit: 'HIVE JAPAN SUMMIT',
  regional: 'Regional Summit',
  report: 'Report',
} as const;

// Markdown ページになっていない外部ページ（必要ならここに足す）
const externals: Program[] = [
  {
    id: 'fukuoka',
    kind: 'regional',
    href: 'https://hivejapaninfo.github.io/hive_fukuoka_2026/index.html',
    label: 'HIVE FUKUOKA',
    tagline: '交差点の街・福岡に「漬かる」',
    date: '2026.5.16–5.17',
    place: '福岡・福岡市ほか',
    thumb: '/images/hive-fukuoka.jpg',
    external: true,
    order: 202605,
  },
];

export async function getPrograms(): Promise<Program[]> {
  const pages = await getCollection('pages');
  const list: Program[] = pages
    .filter((p) => p.data.kind)
    .map((p) => ({
      id: p.id,
      kind: p.data.kind!,
      href: `/${p.id}/`,
      label: p.data.label ?? p.data.title,
      tagline: p.data.tagline,
      date: p.data.date,
      place: p.data.place,
      participants: p.data.participants,
      thumb: p.data.thumb ?? p.data.photos[0],
      order: p.data.order,
    }));
  return [...list, ...externals].sort((a, b) => b.order - a.order);
}
