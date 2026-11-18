// ページ遷移アニメーション（キーフレームは Base.astro のグローバルCSSに定義）
// 古いページは静かに消え、新しいページは少し浮き上がりながらフェードイン
const out = { name: 'hive-page-out', duration: '0.3s', easing: 'cubic-bezier(.4,0,.2,1)', fillMode: 'both' };
const inn = { name: 'hive-fade-in', duration: '0.5s', easing: 'cubic-bezier(.2,.7,.2,1)', fillMode: 'both' };
export const pageFade = {
  forwards: { old: out, new: inn },
  backwards: { old: out, new: inn },
};
