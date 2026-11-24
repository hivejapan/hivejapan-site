#!/bin/sh
# public/images/*.jpg から一覧・サムネイル用の幅800px版を public/images/w800/ に作る（既存はスキップ）
# 使い方: sh scripts/resize-images.sh   （ImageMagick が必要）
cd "$(dirname "$0")/../public/images" || exit 1
mkdir -p w800
for f in *.jpg *.jpeg *.JPG; do
  [ -f "$f" ] || continue
  [ -f "w800/$f" ] && continue
  convert "$f" -auto-orient -resize '800x800>' -strip -interlace Plane -quality 78 "w800/$f"
done
