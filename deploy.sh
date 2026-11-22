#!/bin/sh
# 构建 dist 并部署到 Cloudflare Workers（静态资源）
# 用法：./deploy.sh            只构建
#       ./deploy.sh --deploy   构建后发布
set -eu
cd "$(dirname "$0")"

VER=$(date +%Y%m%d-%H%M)
echo "→ 资源版本：$VER"

rm -rf dist
mkdir -p dist/assets
cp index.html robots.txt dist/
# 只改产物里的版本号，源码保持干净
sed -i "s/?v=[0-9A-Za-z._-]*/?v=$VER/g" dist/index.html
cp dist/index.html dist/404.html
cp assets/style.css assets/app.js assets/content.js dist/assets/
[ -f CNAME ] && cp CNAME dist/ || true

echo "→ 产物："
find dist -type f -maxdepth 2 -exec ls -lh {} \; | awk '{print "  " $9 "  " $5}'

if [ "${1:-}" = "--deploy" ]; then
  echo "→ 发布到 Cloudflare Workers"
  npx --yes wrangler@latest deploy
fi
