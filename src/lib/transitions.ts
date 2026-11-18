// ページ遷移アニメーション（キーフレームは Base.astro のグローバルCSSに定義）
// 新しいページが中央から六角形に広がって現れ、古いページは少し沈んで消える
const out = { name: 'hive-page-out', duration: '0.45s', easing: 'cubic-bezier(.4,0,.2,1)', fillMode: 'both' };
const inn = { name: 'hive-hex-in', duration: '0.75s', easing: 'cubic-bezier(.7,0,.2,1)', fillMode: 'both' };
export const hexReveal = {
  forwards: { old: out, new: inn },
  backwards: { old: out, new: inn },
};
