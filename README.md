# Monta HD 帮助中心

Monta HD 的公开文档站：注册、登录、客户端配置、求片机器人、字幕、排错与账号规范。
纯静态、零依赖、深色优先，可直接部署到 Cloudflare Workers / Pages 或任意静态托管。

- 在线预览：<https://weitie79-wq.github.io/montahd-wiki/>
- 仓库：<https://github.com/weitie79-wq/montahd-wiki>

```
montahd-wiki/
├── index.html          页面骨架（顶栏、侧栏、正文容器）
├── assets/
│   ├── content.js      ★ 全部文案在这里（导航 + 正文）
│   ├── app.js          路由、目录、搜索、主题
│   └── style.css       设计令牌与布局
├── robots.txt
├── wrangler.toml       Cloudflare Workers 静态资源配置
├── deploy.sh           构建 dist（可选发布）
└── README.md
```

## 改内容

只改 `assets/content.js`：

1. `nav` 决定左侧目录（分组 + 条目），`pages` 的 key 就是 URL 里的 id，例如 `#/register`。
2. 每个页面 `{ title, desc, body }`，`body` 直接写 HTML 片段。
3. `h2` / `h3` 带 `id` 会自动出现在右侧「本页内容」；没有 id 也会自动补。
4. 站内链接用 `#/页面id`；外链记得加 `target="_blank" rel="noopener"`。
5. 提示块：`<div class="callout callout-note">…</div>`，另有 `callout-tip`、`callout-warn`。

> 注意：`content.js` 用反引号模板字符串包裹正文，正文里不要再出现反引号；HTML 里需要写 `` ` `` 时用 `&#96;`。正文中的 `${` 也会被当成插值，需要写成 `\${`。

改完**务必**把 `index.html` 里三处 `?v=...` 改成新版本号（`deploy.sh` 会自动做），否则浏览器可能继续用缓存。

## 本地预览

```sh
cd montahd-wiki
python3 -m http.server 8080
# 打开 http://127.0.0.1:8080
```

也可以直接在 Minis 里用 `minis://workspace/montahd-wiki/index.html` 预览。

## 部署

### GitHub Pages（已配置）

推到 `main` 即自动部署：`.github/workflows/pages.yml` 会执行 `./deploy.sh` 并把 `dist/` 发布到
<https://weitie79-wq.github.io/montahd-wiki/>。`deploy.sh` 同时生成 `404.html`，
访问不存在的路径也会回到首页，不会出现 GitHub 的 404 页面。

### Cloudflare Workers（与 montahd.com 同栈）

```sh
./deploy.sh            # 只构建出 dist/
./deploy.sh --deploy   # 构建并 wrangler deploy
```

首次发布前 `npx wrangler login`。发布后在 Cloudflare 控制台给 Worker 加自定义域名，例如
`wiki.montahd.com`（DNS 加一条 CNAME 指向 Worker，橙云可用）。

`wrangler.toml` 使用 `[assets]` 模式，`not_found_handling = "single-page-application"`，
所以任意路径都会回到 `index.html`，不会 404。

### 挂在主域的 /wiki 下

如果希望地址是 `https://montahd.com/wiki` 而不是子域名：

- 主站是 Cloudflare Worker：在该 Worker 前面加一条路由规则，把 `/wiki/*` 转发到本 Worker；
- 主站是 Nginx：把 `dist/` 放到某个目录，`location /wiki/ { alias /path/dist/; try_files $uri $uri/ /wiki/index.html; }`。
- 注意 `index.html` 里全部是相对路径（`assets/...`），挂在子目录下无需改代码。

## 设计

- 品牌色：`#0B0D11` 底 / `#FFB020` 主色 / `#F7F8FA` 文字，Montserrat + 苹方回落；
- 深色为默认，跟随系统，右上角可手动切换并记忆；
- 三栏：左侧目录、中间正文（768px 上限）、右侧本页目录；≤1180px 收起右栏，≤860px 目录变抽屉；
- 搜索为纯前端索引（标题权重 8、正文 3），支持 `⌘K` / `/` 聚焦、上下键选择、回车跳转；
- 无任何外部字体、CDN 或第三方脚本，断网也能完整渲染。

## 自定义域名

目标：`https://wiki.montahd.com`

1. Cloudflare DNS 添加记录：`CNAME` / 名称 `wiki` / 目标 `weitie79-wq.github.io` / **仅 DNS**（灰云，先别开代理）；
2. 仓库 Settings → Pages → Custom domain 填 `wiki.montahd.com` 并保存；
3. 等 DNS 检查通过后勾选 Enforce HTTPS。

也可以在仓库根目录放一个内容为 `wiki.montahd.com` 的 `CNAME` 文件，效果相同——但**必须等 DNS 记录生效后再放**，
否则 `github.io` 地址会立刻 301 到还没解析的域名。

## License

代码与文档以 [MIT](LICENSE) 发布；Monta HD 名称、标识、片库内容与站点规则不在授权范围内。

## 内容维护提醒

- 站点规则、价格、并发数等以后台与群公告为准，文中统一写「以群公告为准」，避免文档过期；
- 播放地址不写死在文档里，统一写「以控制中心显示为准」；
- 客户端名单（SenPlayer / Infuse / VidHub / Fileball / Yamby / Emby 官方）与服务端白名单保持一致；
- 邮箱、群链接集中在 `content.js` 顶部的 `site` 对象里，改一处即可。
