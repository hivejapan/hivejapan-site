import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guest = z.object({
  name: z.string(),
  photo: z.string().optional(), // プロフィール写真
  titles: z.array(z.string()).default([]), // 肩書き（1行ずつ）
  bio: z.array(z.string()).default([]), // 経歴（段落ごと）
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    // ---- カード表示用（トップの一覧・各ページ下部の「ほかの開催」） ----
    kind: z.enum(['summit', 'regional', 'report']).optional(),
    order: z.number().default(0), // 大きいほど前に並ぶ
    label: z.string().optional(), // カードの短い名前
    tagline: z.string().optional(), // カードとページ上部に出るテーマ
    date: z.string().optional(),
    place: z.string().optional(),
    thumb: z.string().optional(), // カードとページ上部の写真

    // ---- 開催ページの中身（上から順に表示） ----
    concept: z.boolean().default(false), // 「集え、未来を創る志士たちよ。」の共通文を出すか
    about: z.object({
      heading: z.string(), // 例: HIVE JAPAN Summit 2025とは
      theme: z.string().optional(), // テーマ（見出しの下に大きく）
      text: z.array(z.string()).default([]), // 説明文（段落ごと）
    }).optional(),
    report: z.object({ href: z.string(), title: z.string(), author: z.string(), lead: z.string() }).optional(),
    guests: z.array(guest).default([]),
    panel: z.string().optional(), // パネルディスカッションテーマ
    schedule: z.string().optional(),
    venue: z.object({
      name: z.string(),
      url: z.string().optional(),
      address: z.string().optional(),
      photos: z.array(z.string()).default([]), // 会場の宣材写真
    }).optional(),
    press: z.array(z.object({ image: z.string(), url: z.string(), label: z.string() })).default([]),
    photos: z.array(z.string()).default([]), // 開催期間中の写真

    // ---- レポート用 ----
    author: z.object({ name: z.string(), photo: z.string().optional(), bio: z.string(), links: z.array(z.object({ label: z.string(), url: z.string() })).default([]) }).optional(),
    backTo: z.object({ href: z.string(), label: z.string() }).optional(),
  }),
});
export const collections = { pages };
