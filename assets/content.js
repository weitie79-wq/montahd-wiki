/* Monta HD 帮助中心 —— 内容源
 * 改文案只需要改这个文件：nav 是左侧目录，pages 是正文。
 * 正文用 HTML 片段；加 id 的 h2/h3 会自动出现在右侧目录。
 */
window.WIKI = {
  site: {
    name: "Monta HD",
    title: "帮助中心",
    version: "2026.11",
    controlCenter: "https://montahd.com",
    telegram: "https://t.me/MontaHD1",
    email: "xon@mail.montahd.com",
  },

  nav: [
    {
      group: "开始使用",
      items: [
        { id: "intro", title: "认识 Monta HD" },
        { id: "register", title: "注册账号" },
        { id: "login", title: "登录与找回密码" },
        { id: "first-play", title: "第一次播放" },
      ],
    },
    {
      group: "客户端",
      items: [
        { id: "clients", title: "客户端怎么选" },
        { id: "add-server", title: "添加服务器" },
        { id: "playback", title: "播放与画质" },
      ],
    },
    {
      group: "使用技巧",
      items: [
        { id: "request", title: "求片机器人" },
        { id: "subtitle", title: "字幕" },
        { id: "network", title: "网络与卡顿" },
        { id: "devices", title: "多设备与播放记录" },
      ],
    },
    {
      group: "账号与支持",
      items: [
        { id: "account", title: "账号安全" },
        { id: "rules", title: "使用规范" },
        { id: "faq", title: "常见问题" },
        { id: "contact", title: "联系与反馈" },
      ],
    },
  ],

  pages: {
    intro: {
      title: "认识 Monta HD",
      desc: "一个私有部署的家庭影音库：账号在网页端管理，看片用你习惯的播放器。",
      body: `
<div class="hero">
  <h1>你的私人影院，<br>从 <em>Monta HD</em> 开始。</h1>
  <p>Monta HD 是由站点维护的私有影视媒体服务。片库、海报与简介由服务端统一整理，你只需要一个账号和一台设备，就能在手机、平板、电视或电脑上接着看。</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="#/register">注册账号</a>
    <a class="btn" href="#/first-play">第一次播放</a>
    <a class="btn" href="#/clients">选择客户端</a>
  </div>
  <div class="hero-meta">
    <span><b>控制中心</b> montahd.com</span>
    <span><b>交流群</b> t.me/MontaHD1</span>
    <span><b>仅限授权用户</b></span>
  </div>
</div>

<h2 id="what">它由三部分组成</h2>
<table>
  <thead><tr><th>入口</th><th>做什么</th></tr></thead>
  <tbody>
    <tr><td><strong>控制中心</strong><br><span style="color:var(--muted)">montahd.com</span></td><td>注册、登录、查看账号与到期时间、获取服务器地址和客户端配置。所有账号相关的操作都在这里。</td></tr>
    <tr><td><strong>播放器客户端</strong></td><td>真正用来看片的地方。Monta HD 兼容 Emby 协议，手机、平板、电视、电脑上都有成熟客户端可选。</td></tr>
    <tr><td><strong>帮助中心</strong><br><span style="color:var(--muted)">就是本页</span></td><td>注册、登录、配置客户端、排错。遇到问题先在这里搜关键词。</td></tr>
  </tbody>
</table>

<h2 id="features">你能得到什么</h2>
<ul>
  <li><strong>整理好的片库</strong>：电影、剧集、动漫自动分类，海报、评分、简介、演职员信息齐全。</li>
  <li><strong>原盘级画质</strong>：支持 4K、HDR / 杜比视界与多声道音轨，按你的带宽自动或手动选择码率。</li>
  <li><strong>跨设备续播</strong>：在客厅电视看到一半，回卧室用平板接着看，进度自动同步。</li>
  <li><strong>字幕友好</strong>：内封字幕、外挂字幕、客户端在线字幕搜索都能用。</li>
</ul>

<h2 id="before">开始之前</h2>
<div class="callout callout-note">
  <p>Monta HD 是<strong>邀请制</strong>服务，需要注册码才能创建账号；注册码在 Telegram 交流群内发放。没有账号时，客户端连上也看不到任何内容。</p>
</div>
<ul>
  <li>一个 <strong>Telegram 账号</strong>（注册时要填 Telegram 数字 ID）。</li>
  <li>一个<strong>注册码</strong>（群内获取，有有效期，以群公告为准）。</li>
  <li>一台要观看的设备，以及建议 20 Mbps 以上的网络。</li>
</ul>

<h2 id="next">接下来</h2>
<div class="cards">
  <a class="card" href="#/register">
    <div class="card-title">还没有账号</div>
    <div class="card-desc">准备好 Telegram 数字 ID 和注册码，三分钟完成注册。</div>
  </a>
  <a class="card" href="#/login">
    <div class="card-title">已有账号</div>
    <div class="card-desc">登录控制中心，或找回忘记的密码。</div>
  </a>
  <a class="card" href="#/add-server">
    <div class="card-title">客户端连不上</div>
    <div class="card-desc">服务器地址、端口、账号密码应该怎么填。</div>
  </a>
  <a class="card" href="#/request">
    <div class="card-title">片库没有想看的</div>
    <div class="card-desc">把片名发给求片机器人，下载入库后自动出现在片库。</div>
  </a>
</div>
`,
    },

    register: {
      title: "注册账号",
      desc: "需要 Telegram 数字 ID 与注册码。邮箱注册通道已经关闭。",
      body: `
<h2 id="prepare">准备两样东西</h2>
<table>
  <thead><tr><th>材料</th><th>怎么获取</th></tr></thead>
  <tbody>
    <tr><td><strong>Telegram 数字 ID</strong></td><td>在 Telegram 里找 <code>@userinfobot</code>，发送任意消息，它会回复一串<strong>纯数字</strong>（例如 <code>123456789</code>）。注意不是 <code>@你的用户名</code>。</td></tr>
    <tr><td><strong>注册码</strong></td><td>在交流群 <a href="https://t.me/MontaHD1" target="_blank" rel="noopener">t.me/MontaHD1</a> 获取或按公告自助领取。注册码有有效期和使用次数限制，过期请重新获取。</td></tr>
  </tbody>
</table>

<h2 id="steps">注册步骤</h2>
<ol class="steps">
  <li><b>打开控制中心</b><span>浏览器访问 <a href="https://montahd.com" target="_blank" rel="noopener">montahd.com</a>，点登录框下方的「立即注册」。</span></li>
  <li><b>填写账号信息</b><span>依次填写 Telegram 数字 ID、账号名、登录密码、确认密码、注册码。账号名一旦注册不可更改，建议用英文或数字。</span></li>
  <li><b>提交并登录</b><span>注册成功后回到登录页，用刚设置的账号名和密码登录，即可看到服务器地址与账号信息。</span></li>
</ol>

<div class="callout callout-note">
  <p><strong>邮箱注册已关闭。</strong>页面上若出现「邮箱注册已关闭，请使用其他方式注册」，说明当前只能走 Telegram ID + 注册码的方式。</p>
</div>

<h2 id="errors">常见报错</h2>
<table>
  <thead><tr><th>提示</th><th>原因与处理</th></tr></thead>
  <tbody>
    <tr><td>注册码无效 / 已使用</td><td>注册码过期、被他人使用或输错字符。回群里重新获取，注意区分大小写与易混字符（0/O、1/l）。</td></tr>
    <tr><td>注册码已过期</td><td>注册码有有效期，向群管理重新申请。</td></tr>
    <tr><td>Telegram ID 格式不正确</td><td>只填数字，不要带 @、链接或空格。</td></tr>
    <tr><td>账号名已存在</td><td>换一个账号名。支持字母、数字与下划线，长度以页面提示为准。</td></tr>
    <tr><td>两次密码不一致</td><td>确认密码需与登录密码完全一致，注意输入法全角/半角。</td></tr>
  </tbody>
</table>

<h2 id="after">注册之后</h2>
<p>登录控制中心即可看到账号状态、到期时间与服务器地址。接着按「<a href="#/first-play">第一次播放</a>」配置客户端。建议顺手把账号密码记在密码管理器里，并绑定好 Telegram，方便后续找回。</p>
`,
    },

    login: {
      title: "登录与找回密码",
      desc: "控制中心支持账号密码与 Telegram 两种登录方式。",
      body: `
<h2 id="ways">两种登录方式</h2>
<h3>账号密码登录</h3>
<p>在 <a href="https://montahd.com" target="_blank" rel="noopener">montahd.com</a> 输入注册时设置的账号名与密码。账号名不是邮箱，也不是 Telegram 昵称。</p>

<h3>Telegram 登录</h3>
<p>登录框上方的「Telegram」标签页会调起 Telegram 授权。适合不想记密码、或已在客户端登录过的设备。授权使用的是你的 Telegram 身份，仍需账号本身有效。</p>

<div class="callout callout-tip">
  <p>播放器客户端里登录的是<strong>同一套账号密码</strong>，不是 Telegram 授权。客户端通常只支持用户名 + 密码。</p>
</div>

<h2 id="forgot">忘记密码</h2>
<ol>
  <li>在登录页点「忘记密码？」。</li>
  <li>按页面提示验证身份（通常是 Telegram 或注册邮箱）。</li>
  <li>设置新密码后，用新密码重新登录控制中心与所有客户端。</li>
</ol>
<p>如果收不到验证消息、或页面提示账号不存在，请带上<strong>账号名</strong>和<strong>Telegram 数字 ID</strong>到群里找管理处理。为保护账号，管理可能会要求你证明对该 Telegram 账号的所有权。</p>

<h2 id="cant-login">登录不上时的排查顺序</h2>
<ol>
  <li><strong>确认账号名</strong>：大小写敏感，注意首尾空格。</li>
  <li><strong>确认密码</strong>：检查输入法是否处于全角模式，或 Caps Lock 是否打开。</li>
  <li><strong>确认账号状态</strong>：到期、被停用或额度用尽时，登录会失败或登录后无内容，以群公告为准。</li>
  <li><strong>换网络试一次</strong>：部分公司网络会拦截授权回调。</li>
  <li>仍然不行，按「<a href="#/contact">联系与反馈</a>」提供信息。</li>
</ol>

<h2 id="security-tip">登录后的第一件事</h2>
<p>控制中心里能看到账号的到期时间、会员等级与可用线路。建议先确认到期时间，再把播放地址保存下来，避免每次添加客户端都要重新查。</p>
`,
    },
  },
};

/* ── 第二批：播放流程与客户端 ───────────────────────── */

Object.assign(window.WIKI.pages, {
  "first-play": {
    title: "第一次播放",
    desc: "四步：装客户端 → 填服务器地址 → 登录 → 选片。",
    body: `
<h2 id="flow">完整流程</h2>
<ol class="steps">
  <li><b>装一个客户端</b><span>手机、平板、电视或电脑，从「<a href="#/clients">客户端怎么选</a>」里挑一个。苹果设备推荐 SenPlayer 或 Infuse。</span></li>
  <li><b>拿到服务器地址</b><span>登录 <a href="https://montahd.com" target="_blank" rel="noopener">montahd.com</a>，在账号与线路信息里查看站点提供的播放地址（形如 <code>https://…</code>）。以页面显示为准，不要照抄网上流传的旧地址。</span></li>
  <li><b>在客户端里添加服务器</b><span>选择 Emby 类型，粘贴地址，填入与网页端相同的账号名和密码。控制中心若提供「一键导入」按钮，直接点它会更省事。</span></li>
  <li><b>选片播放</b><span>进入片库，挑一部片子点播放。第一次播放会加载一会儿元数据和字幕，属于正常现象。</span></li>
</ol>

<h2 id="address">服务器地址长什么样</h2>
<p>通常是一个以 <code>https://</code> 开头的域名。客户端里如果分开填「主机」和「端口」，主机填域名（不带 https://），端口留空或填 <code>443</code>，并打开「使用 SSL / HTTPS」。</p>
<div class="callout callout-warn">
  <p>地址属于账号配置的一部分，请勿公开发布到论坛或群相册。地址变更时以控制中心与群公告为准。</p>
</div>

<h2 id="oneclick">一键导入（可选）</h2>
<p>部分客户端支持通过链接直接写入服务器配置。控制中心如提供「一键导入 SenPlayer / Infuse」按钮，点一下会唤起对应 App 并自动填写地址、账号和密码，省去手输。若没有反应：</p>
<ul>
  <li>确认手机上已安装对应客户端；</li>
  <li>确认是在手机浏览器里点击，而不是在微信等内置浏览器；</li>
  <li>仍无反应就改用手动添加。</li>
</ul>

<h2 id="check">播放成功的样子</h2>
<p>能看到海报墙、点开有简介与剧集列表、进度条能拖动，就说明一切正常。此时可以顺手做两件事：在设置里打开「自动播放下一集」，以及把常用设备加入收藏，下次直接接着看。</p>
`,
  },

  clients: {
    title: "客户端怎么选",
    desc: "Monta HD 兼容 Emby 协议，主流平台的成熟播放器都能用。",
    body: `
<h2 id="table">按平台推荐</h2>
<table>
  <thead><tr><th>平台</th><th>推荐</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>iPhone / iPad</td><td><strong>SenPlayer</strong><br>Infuse · VidHub · Fileball</td><td>SenPlayer 对 Emby 支持完整、字幕与音轨切换方便；Infuse 画质与格式兼容性最好，但订阅价格较高。</td></tr>
    <tr><td>Apple TV</td><td><strong>SenPlayer</strong><br>Infuse</td><td>电视端优先选支持遥控器操作与杜比视界的客户端，播放原盘更稳。</td></tr>
    <tr><td>Android 手机 / 平板</td><td><strong>Yamby</strong><br>Emby 官方客户端</td><td>Yamby 针对 Emby 做了优化，支持直连与转码切换。</td></tr>
    <tr><td>Android TV / 电视盒子</td><td><strong>Emby for Android TV</strong><br>Yamby TV 版</td><td>注意电视端对 HEVC、AV1 的硬解能力，老盒子看 4K 可能会卡。</td></tr>
    <tr><td>Windows / macOS</td><td>浏览器网页播放<br>Emby Theater · Infuse (macOS)</td><td>电脑上直接用浏览器最省事；追求原盘画质与 HDR 时用桌面客户端。</td></tr>
  </tbody>
</table>

<h2 id="emby">为什么是 Emby 客户端</h2>
<p>Monta HD 的播放接口与 Emby 兼容，所以任何支持「添加 Emby 服务器」的 App 都能接入，不必等官方出 App。选客户端时看三点：</p>
<ul>
  <li><strong>能不能直连</strong>：原盘、4K、HDR 片源只有直连才能保证画质；</li>
  <li><strong>字幕是否好用</strong>：内封字幕识别、外挂字幕加载、在线搜索；</li>
  <li><strong>是否在白名单内</strong>：站点按客户端标识做白名单管理，极小众或改包的客户端可能被拒绝，报错通常是「客户端不受支持」。</li>
</ul>

<h2 id="avoid">不太建议的选择</h2>
<ul>
  <li><strong>手机自带播放器 / 文件管理器</strong>：无法识别 Emby 协议，只能当下载器用，而本服务不支持下载。</li>
  <li><strong>来路不明的聚合 App</strong>：可能要求你填入账号密码并上传到第三方服务器，存在账号泄露风险。</li>
</ul>

<div class="callout callout-tip">
  <p>不确定选哪个？先在手机上装 SenPlayer 试一晚，能正常直连播放再考虑给电视配客户端。多数人的第二台设备最终都选的同一款。</p>
</div>
`,
  },

  "add-server": {
    title: "添加服务器",
    desc: "地址、端口、账号密码分别填什么，以及连不上时怎么查。",
    body: `
<h2 id="fields">各字段怎么填</h2>
<table>
  <thead><tr><th>字段</th><th>填什么</th></tr></thead>
  <tbody>
    <tr><td>服务器类型</td><td><strong>Emby</strong>（不要选 Jellyfin 或 Plex）</td></tr>
    <tr><td>名称</td><td>随意，例如「Monta HD 客厅」</td></tr>
    <tr><td>地址 / 主机</td><td>控制中心显示的服务器域名。有的客户端要求不带 <code>https://</code>，只填域名。</td></tr>
    <tr><td>端口</td><td>一般留空；需要填时用 <code>443</code></td></tr>
    <tr><td>HTTPS / SSL</td><td>打开</td></tr>
    <tr><td>用户名 / 密码</td><td>与控制中心登录一致；密码区分大小写</td></tr>
  </tbody>
</table>

<h2 id="manual">手动添加的完整步骤</h2>
<ol>
  <li>打开客户端的「添加服务器」或「+」。</li>
  <li>类型选 Emby，名称随便写。</li>
  <li>粘贴服务器地址。若客户端把协议、主机、端口拆成三栏，按上表填写。</li>
  <li>输入账号密码，点连接。首次连接会拉取片库，片库大时可能需要几十秒。</li>
  <li>连上后建议在客户端设置里打开「直接播放 / Direct Play」，减少服务端转码。</li>
</ol>

<h2 id="trouble">连不上时</h2>
<h3>提示无法连接服务器 / 超时</h3>
<ul>
  <li>地址是否带多余的空格、结尾斜杠；</li>
  <li>是否误填了控制中心地址而不是播放服务器地址；</li>
  <li>换 Wi-Fi 与移动网络各试一次，排除本地网络拦截；</li>
  <li>关闭 VPN、代理或「网络加速」再试。</li>
</ul>

<h3>提示证书错误 / 不安全连接</h3>
<p>说明客户端没有走 HTTPS。检查是否开启了 SSL 选项，或地址前是否漏了 <code>https://</code>。不要选择「忽略证书错误」长期使用。</p>

<h3>能连上但提示账号无效</h3>
<p>账号密码错误，或账号已到期。先在网页端确认能登录；网页端也登不上，按「<a href="#/login">登录与找回密码</a>」处理。</p>

<div class="callout callout-note">
  <p>一个账号可以登录多台设备，但同时播放数量以账号权限为准。超出限制时，客户端通常表现为「播放失败」或直接被服务端断开。</p>
</div>
`,
  },

  playback: {
    title: "播放与画质",
    desc: "直连、转码、码率与 HDR：看懂这几个词就不会选错。",
    body: `
<h2 id="direct">直连与转码</h2>
<table>
  <thead><tr><th>方式</th><th>含义</th><th>什么时候用</th></tr></thead>
  <tbody>
    <tr><td><strong>直连 Direct Play</strong></td><td>把原始文件原样传给客户端，服务端不做任何处理</td><td>带宽足够、客户端能解码该格式。画质最好，服务端压力最小</td></tr>
    <tr><td><strong>转码 Transcode</strong></td><td>服务端实时把视频/音频转成客户端能播的格式</td><td>带宽不足、设备不支持该编码、或需要烧录字幕时</td></tr>
  </tbody>
</table>
<p>转码会占用服务端 CPU/GPU，画质也有损失。能直连就直连：在客户端设置里把「直接播放」「Direct Stream」打开，并允许 HEVC / HDR 直通。</p>

<h2 id="bitrate">码率与带宽</h2>
<table>
  <thead><tr><th>片源</th><th>大致码率</th><th>建议带宽</th></tr></thead>
  <tbody>
    <tr><td>1080p 普通剧集</td><td>4 – 10 Mbps</td><td>20 Mbps 以上</td></tr>
    <tr><td>1080p 高码 / 蓝光</td><td>15 – 25 Mbps</td><td>50 Mbps 以上</td></tr>
    <tr><td>4K HDR</td><td>40 – 80 Mbps</td><td>100 Mbps 以上，建议有线</td></tr>
    <tr><td>4K 原盘 Remux</td><td>80 Mbps 以上</td><td>千兆局域网 / 500 Mbps 宽带</td></tr>
  </tbody>
</table>
<p>实际能否流畅播放还取决于线路质量与晚高峰拥塞。移动网络下建议把播放码率限制在 8 – 15 Mbps。</p>

<h2 id="hdr">HDR 与杜比视界</h2>
<ul>
  <li>电视支持 HDR 且客户端支持直通时，画面会明显更通透；</li>
  <li>手机或显示器不支持 HDR 时，让客户端做色调映射（tone mapping），否则画面会发灰；</li>
  <li>杜比视界片源需要整条链路支持，任何一环不支持都会回落到 HDR10 或 SDR。</li>
</ul>

<h2 id="audio">音轨选择</h2>
<p>客户端里可以切换音轨。设备只有立体声时选 AAC / 立体声轨，避免选了 TrueHD / DTS-HD 却听不到声音；有回音壁或功放时再选原声音轨并开启直通。</p>

<div class="callout callout-tip">
  <p>卡顿先别急着换客户端：把码率从「原画」降到 20 Mbps 试一分钟，如果立刻流畅，就是带宽问题，不是片源或账号问题。</p>
</div>
`,
  },
});

/* ── 第三批：技巧、账号、FAQ ───────────────────────── */

Object.assign(window.WIKI.pages, {
  subtitle: {
    title: "字幕",
    desc: "内封、外挂、在线搜索，以及乱码和不同步的处理。",
    body: `
<h2 id="types">三种字幕来源</h2>
<table>
  <thead><tr><th>类型</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td><strong>内封字幕</strong></td><td>封装在视频文件里，播放时在字幕菜单直接选轨道，最稳定。</td></tr>
    <tr><td><strong>外挂字幕</strong></td><td>与视频同目录的 <code>.srt</code> / <code>.ass</code> 文件，服务端会自动匹配并列出。</td></tr>
    <tr><td><strong>在线字幕</strong></td><td>客户端内置的字幕搜索（如 OpenSubtitles）。适合冷门片，质量参差。</td></tr>
  </tbody>
</table>

<h2 id="switch">切换与样式</h2>
<ul>
  <li>播放界面点字幕图标，选择「中文（简体）」轨道；</li>
  <li>没有中文字幕时，先看有没有「简体 / 繁体 / CHS / CHT」标记的轨道，再考虑外挂；</li>
  <li>字号、颜色、描边一般在客户端播放设置里调，服务端不控制样式。</li>
</ul>

<h2 id="garbled">字幕乱码</h2>
<p>乱码几乎都是编码问题：老字幕文件常用 GBK，客户端按 UTF-8 解码就会变成「锟斤拷」。处理方式：</p>
<ul>
  <li>在客户端的字幕设置里把编码改成 <code>GBK</code> 或 <code>Auto</code>；</li>
  <li>下载字幕文件后用文本编辑器另存为 UTF-8；</li>
  <li>换一条字幕轨道，内封字幕一般不会乱码。</li>
</ul>

<h2 id="sync">字幕不同步</h2>
<p>先确认字幕版本与片源版本匹配（蓝光版和 WEB 版时间轴不同）。客户端的字幕菜单里通常有「字幕延迟 / 偏移」，以 0.5 秒为步长调整，正数延后、负数提前。整段偏移一致就调偏移；如果越到后面差得越多，说明帧率不匹配，换字幕更快。</p>

<div class="callout callout-note">
  <p>ASS 特效字幕（字幕组做的带样式、定位字幕）需要客户端支持 libass。部分电视端会退化成纯文本显示，属于客户端能力差异，不是片源问题。</p>
</div>
`,
  },

  network: {
    title: "网络与卡顿",
    desc: "按这个顺序排查，八成问题在第一、二步就能定位。",
    body: `
<h2 id="checklist">排查清单</h2>
<ol class="steps">
  <li><b>先降码率试 30 秒</b><span>把播放码率从「原画」降到 20 Mbps。立刻流畅 → 带宽或线路问题；仍然卡 → 继续往下看。</span></li>
  <li><b>换一台设备 / 换一个网络</b><span>同一 Wi-Fi 下换手机，或手机切 5G。用来区分是设备解码问题还是网络问题。</span></li>
  <li><b>关掉代理与加速器</b><span>VPN、Clash、公司代理都会让长连接不稳定，表现为播几分钟断一次。</span></li>
  <li><b>看是不是特定片源</b><span>只有 4K 原盘卡，其他正常 → 带宽或设备解码能力不足，属正常现象。</span></li>
  <li><b>反馈</b><span>把片名、时间、客户端版本一起发到群里，方便对照服务端日志。</span></li>
</ol>

<h2 id="peak">为什么晚上更卡</h2>
<p>晚高峰（20:00 – 24:00）国际出口与本地宽带都会拥塞，同样的片源白天能直连、晚上只能转码。这不是账号问题，也不是「被限速」。这个时段看高码率片源，建议主动把码率限制在 15 – 25 Mbps。</p>

<h2 id="wifi">Wi-Fi 还是网线</h2>
<ul>
  <li>4K 原盘：优先网线，或 Wi-Fi 6 且 5 GHz 频段、信号满格；</li>
  <li>2.4 GHz 实测通常只有 30 – 80 Mbps，看 1080p 够用，看 4K 会缓冲；</li>
  <li>电视与路由器隔墙时，先测速再判断，别直接怪服务端。</li>
</ul>

<h2 id="proxy">关于代理</h2>
<p>如果直连速度不理想，可以尝试更换网络环境，但不建议在播放链路上叠加多层代理：每一层都可能带来额外的延迟与断流。使用代理时，确保客户端走的是全局或规则命中的同一条线路。</p>

<h2 id="appletv">Apple TV 的线路模块</h2>
<p>如果 Apple TV 通过 Surge / Egern / Loon / Shadowrocket / Stash 这类工具联网，可以在控制中心的「导入到 Apple TV」里选择<strong>播放地址</strong>和对应客户端，生成一个模块地址（<code>.sgmodule</code> 等），再粘贴到该 App 的「模块 / 安装模块」中安装。换线路时重新生成即可，旧的可以在同一页解除绑定。</p>
<div class="callout callout-note">
  <p>模块只是把线路配置写入代理工具，播放仍然需要单独的播放器客户端。两者不要混淆。</p>
</div>
`,
  },

  devices: {
    title: "多设备与播放记录",
    desc: "一个账号多端登录，进度自动同步；同时播放数取决于账号权限。",
    body: `
<h2 id="multi">多设备登录</h2>
<p>同一个账号可以在手机、平板、电视、电脑上分别登录，片库与观看记录共用。控制中心会列出已绑定的 Apple TV 设备，发现陌生设备时可以解除绑定，并立即修改密码。</p>

<div class="callout callout-note">
  <p>可同时播放的设备数量由账号权限决定，超出时后开始的播放会被拒绝。需要更多并发，按群公告申请升级。</p>
</div>

<h2 id="resume">续播是怎么工作的</h2>
<ul>
  <li>播放进度由服务端记录，退出播放器后几秒内同步；</li>
  <li>换设备打开同一部片，会提示「从 12:34 继续播放」；</li>
  <li>不同客户端的进度上报时机不同，极端情况下会有几十秒误差；</li>
  <li>「继续观看」列表按最近播放排序，看完的条目会自动移出。</li>
</ul>

<h2 id="newdevice">换新设备</h2>
<ol>
  <li>在新设备安装同一款客户端；</li>
  <li>添加服务器（地址不变），用同一账号登录；</li>
  <li>片库与进度会自动拉取，无需迁移数据；</li>
  <li>旧设备不再使用时，可在控制中心移除该设备，或直接退出登录。</li>
</ol>

<h2 id="nosync">记录不同步</h2>
<p>先确认两端登录的是同一个账号（不是家人账号），再检查客户端是否开启了「同步播放进度」。仍然不同步时，让客户端完全退出后重进，或在播放界面手动拖动一下进度条触发上报。</p>
`,
  },

  account: {
    title: "账号安全",
    desc: "账号只属于你一个人。共享、转售是被封停的最常见原因。",
    body: `
<h2 id="password">密码</h2>
<ul>
  <li>使用独立的密码，不要与邮箱、社交账号相同；</li>
  <li>建议存进密码管理器，或使用系统钥匙串；</li>
  <li>怀疑泄露时，立即在控制中心修改密码，所有客户端需重新登录。</li>
</ul>

<h2 id="share">不要共享账号</h2>
<p>账号绑定的是个人身份。把账号密码发给朋友、在群里公开、或挂到合租平台上，都会导致异地多设备同时登录，触发风控并被停用。停用后片库、进度都无法恢复。</p>

<h2 id="telegram">Telegram 绑定</h2>
<p>注册时填写的 Telegram 数字 ID 是找回账号、接收通知的依据。换 Telegram 账号后请及时在群里说明，由管理协助更新，否则可能无法通过验证。</p>

<h2 id="expiry">到期与续费</h2>
<p>控制中心会显示账号到期时间。到期前建议提前续费，避免播放中途被断开。续费方式、价格与优惠以群公告为准，不要向任何私聊索要「内部折扣」的人付款。</p>

<div class="callout callout-warn">
  <p>管理不会主动私聊向你索要密码、验证码或要求远程控制你的设备。遇到此类消息，直接在群里核实。</p>
</div>

<h2 id="abnormal">发现异常</h2>
<ul>
  <li>控制中心出现不认识的登录设备；</li>
  <li>播放记录里出现自己没看过的片子；</li>
  <li>账号突然无法登录或提示停用。</li>
</ul>
<p>出现以上情况，立即改密码并联系管理，说明账号名、发现时间与异常表现。</p>
`,
  },

  rules: {
    title: "使用规范",
    desc: "这是一份私有影音服务，请把它当作自己家的书房，而不是公开影院。",
    body: `
<h2 id="allowed">可以做的</h2>
<ul>
  <li>在个人与家庭范围内观看片库内容；</li>
  <li>在自己的多台设备上登录同一个账号；</li>
  <li>向管理反馈片源问题、求片、报告播放故障。</li>
</ul>

<h2 id="forbidden">不可以做的</h2>
<ul>
  <li><strong>转售、出租、共享账号</strong>，或在任何平台出售「车位」；</li>
  <li><strong>公开传播播放地址、直链或账号配置</strong>；</li>
  <li><strong>批量下载、录制、抓取片库</strong>，或用脚本高频请求接口；</li>
  <li>使用改包客户端、伪造客户端标识绕过白名单；</li>
  <li>将内容用于商业放映、二次分发或任何盈利行为。</li>
</ul>

<h2 id="penalty">违规处理</h2>
<p>发现上述行为，站点可暂停或永久停用账号，且不退还剩余费用。造成服务资源异常消耗的，会先限速再停用。处理结果以群公告与管理通知为准。</p>

<h2 id="copyright">关于内容</h2>
<p>片库内容由站点整理，仅用于授权用户的私人观看。请勿下载后另行传播。若权利方有异议，可通过「<a href="#/contact">联系与反馈</a>」中的邮箱联系处理。</p>

<div class="callout callout-note">
  <p>规范会随服务调整更新，最新版本以 Telegram 群公告为准。继续使用即视为接受当时有效的规范。</p>
</div>
`,
  },

  faq: {
    title: "常见问题",
    desc: "先在这里搜关键词；没有答案再去群里问。",
    body: `
<h2 id="q-register">注册与账号</h2>

<h3 id="q-code">注册码提示无效或已过期</h3>
<p>注册码有有效期和使用次数，过期、被他人先用、或输错字符都会失败。回 <a href="https://t.me/MontaHD1" target="_blank" rel="noopener">交流群</a> 重新获取，注意 <code>0/O</code>、<code>1/l</code> 这类易混字符。</p>

<h3 id="q-tgid">不知道自己的 Telegram 数字 ID</h3>
<p>在 Telegram 搜索 <code>@userinfobot</code>，点开始，它会直接回复一串数字。那不是手机号，也不是用户名。</p>

<h3 id="q-forgot">忘记密码，邮箱也收不到验证码</h3>
<p>邮箱注册通道已关闭，验证一般走 Telegram。收不到时到群里找管理，提供账号名与 Telegram 数字 ID，不要公开发送密码。</p>

<h3 id="q-expire">账号到期了怎么办</h3>
<p>在控制中心查看到期时间，按群公告的续费方式操作。到期后账号会被停用，续费后自动恢复，播放记录通常保留。</p>

<h2 id="q-play">播放与客户端</h2>

<h3 id="q-connect">客户端提示无法连接服务器</h3>
<p>九成是地址或端口填错：确认地址来自控制中心、没有多余空格、SSL 已打开、端口为 443。仍不行时换网络测试，详见「<a href="#/add-server">添加服务器</a>」。</p>

<h3 id="q-empty">能登录，但片库是空的</h3>
<p>先下拉刷新片库；再确认账号状态正常（到期/停用会看不到内容）；最后检查客户端是否选错了服务器配置。新账号首次同步可能需要几十秒。</p>

<h3 id="q-stuck">播放一直转圈</h3>
<p>把码率降到 20 Mbps 试 30 秒。流畅了就是带宽问题；仍转圈就换设备或换网络，排除客户端解码问题。排查顺序见「<a href="#/network">网络与卡顿</a>」。</p>

<h3 id="q-client">提示客户端不受支持</h3>
<p>站点对客户端标识做白名单管理。改用推荐列表里的客户端（SenPlayer、Infuse、Yamby、Emby 官方），不要用改包版或来路不明的聚合 App。</p>

<h3 id="q-subtitle">字幕乱码 / 不同步</h3>
<p>乱码改编码为 GBK 或 Auto；不同步用字幕偏移按 0.5 秒微调。详见「<a href="#/subtitle">字幕</a>」。</p>

<h3 id="q-download">可以下载或离线缓存吗</h3>
<p>站点未提供下载与离线缓存功能，客户端里的下载按钮即使能点也可能失败。请勿使用第三方工具抓取片库或批量缓存。</p>

<h3 id="q-device">换手机后要重新配置吗</h3>
<p>要重新安装客户端并登录，但片库与播放记录都在服务端，登录后自动恢复。旧设备建议在控制中心移除。</p>

<h2 id="q-request">求片</h2>

<h3 id="q-req">怎么求片库里没有的片子</h3>
<p>在 Telegram 私聊 <a href="https://t.me/montahdai_bot" target="_blank" rel="noopener">@montahdai_bot</a>，发片名或 TMDB / 豆瓣链接，选中条目后确认订阅即可。完整流程见「<a href="#/request">求片机器人</a>」。</p>

<h3 id="q-reqtime">求完多久能看</h3>
<p>热门片几十分钟，冷门片可能几小时到一天；没有源就会一直停在搜索中。超过一天建议换版本重求。</p>

<h2 id="q-other">其他</h2>

<h3 id="q-slow">为什么同一部片别人不卡，我卡</h3>
<p>与本地带宽、Wi-Fi 质量、设备解码能力、所在地区线路都有关。先按「网络与卡顿」自查，再把片名、时间、客户端版本发给管理。</p>

<h3 id="q-report">怎么反馈问题最快</h3>
<p>用「<a href="#/contact">联系与反馈</a>」里的模板，一次把账号名、时间、片名、客户端、错误原文给全，比反复问「在吗」快得多。</p>
`,
  },

  contact: {
    title: "联系与反馈",
    desc: "群里问使用问题，邮箱处理账号与版权事务。",
    body: `
<h2 id="channels">两个渠道</h2>
<table>
  <thead><tr><th>渠道</th><th>适合</th></tr></thead>
  <tbody>
    <tr><td><strong>Telegram 交流群</strong><br><a href="https://t.me/MontaHD1" target="_blank" rel="noopener">t.me/MontaHD1</a></td><td>注册码、公告、续费、播放故障、求片。响应最快。</td></tr>
    <tr><td><strong>邮箱</strong><br><a href="mailto:xon@mail.montahd.com">xon@mail.montahd.com</a></td><td>账号申诉、隐私与版权事务、不适合公开讨论的问题。</td></tr>
    <tr><td><strong>求片机器人</strong><br><a href="https://t.me/montahdai_bot" target="_blank" rel="noopener">@montahdai_bot</a></td><td>求片与订阅进度。只处理片源请求，账号问题仍走上面两个渠道。</td></tr>
  </tbody>
</table>

<h2 id="template">报障模板</h2>
<p>复制下面这段，填好再发，能省掉一半来回：</p>
<div class="copyline">
  <span id="tpl">账号名：____　时间：____（如 11-23 21:30）　片名：____　客户端：____（名称+版本）　设备与系统：____　网络：Wi-Fi/5G　现象：____（错误原文或截图）</span>
  <button data-copy="#tpl">复制</button>
</div>

<h2 id="tips">提问前先做三件事</h2>
<ol>
  <li>在本站右上角搜一下关键词（例如「卡顿」「字幕」「注册码」）；</li>
  <li>确认网页端能正常登录，排除账号本身的问题；</li>
  <li>重启客户端再试一次，并记下错误提示的原文。</li>
</ol>

<h2 id="security">安全提醒</h2>
<div class="callout callout-warn">
  <p>管理不会私聊索要密码或验证码，也不会让你把账号借给「技术人员」测试。所有涉及账号的操作，都在 montahd.com 或群公告指定的渠道完成。</p>
</div>

<h2 id="hours">响应时间</h2>
<p>群内问题通常当天回复；邮箱事务 1 – 2 个工作日内处理。节假日与晚高峰可能延后，请勿重复刷屏。</p>
`,
  },
});

/* ── 求片机器人 ───────────────────────────────────── */

Object.assign(window.WIKI.pages, {
  request: {
    title: "求片机器人",
    desc: "片库里没有的片子，发给 @montahdai_bot，它会去找资源、下载并入库。",
    body: `
<h2 id="what">它能做什么</h2>
<p><a href="https://t.me/montahdai_bot" target="_blank" rel="noopener">@montahdai_bot</a> 是站点配套的 Telegram 求片助手：你告诉它想看什么，它去资源站找，找到后自动下载、整理、刮削，最后出现在片库里。</p>

<table>
  <thead><tr><th>可以做</th><th>做不到</th></tr></thead>
  <tbody>
    <tr><td>按片名、年份或链接搜索电影 / 剧集 / 动漫 / 综艺</td><td>下载到你自己的手机、电脑或网盘（只入库到站点）</td></tr>
    <tr><td>订阅后自动下载、刮削并出现在片库</td><td>指定某个版本（REMUX、某字幕组、国语配音）</td></tr>
    <tr><td>推送进度与完成通知</td><td>求院线偷拍、付费台录制等违规内容</td></tr>
  </tbody>
</table>

<div class="callout callout-note">
  <p>求片用的是站点自己的资源和带宽，不额外收费。能不能找到取决于资源站有没有源，<strong>不保证 100% 命中</strong>，也不保证 4K 或原盘。</p>
</div>

<h2 id="start">第一次使用</h2>
<ol class="steps">
  <li><b>打开机器人</b><span>在 Telegram 搜索 <code>@montahdai_bot</code>，点「开始 / START」。在群里也可以直接 @ 它，但私聊更清爽，通知也不会打扰别人。</span></li>
  <li><b>把片名发过去</b><span>中文名、英文名都可以，带上年份更准：<code>沙丘 2021</code>、<code>Dune 2021</code>。剧集请注明季数。</span></li>
  <li><b>在结果里选条目</b><span>机器人会列出候选（海报、年份、类型）。点正确的那一个——同名翻拍很多，别只看片名。</span></li>
  <li><b>确认订阅</b><span>按提示选清晰度、季集范围，收到「已订阅 / 已加入队列」即可。之后不用守着，入库会推送通知。</span></li>
</ol>

<h2 id="better">让搜索结果更准</h2>
<ul>
  <li><strong>原名 + 年份</strong>最稳：<code>Interstellar 2014</code> 比「星际穿越」命中率高；</li>
  <li><strong>剧集写清季集</strong>：<code>怒呛人生 S01</code>，只要某一集就写 <code>S01E03</code>；</li>
  <li><strong>冷门片直接发链接</strong>：TMDB（<code>themoviedb.org/movie/…</code>）或豆瓣条目链接，机器人能直接识别条目；</li>
  <li><strong>一次一部</strong>：连续刷十几条容易被当成刷屏，也更容易挑错版本。</li>
</ul>

<h2 id="after">订阅之后</h2>
<table>
  <thead><tr><th>阶段</th><th>你会看到</th></tr></thead>
  <tbody>
    <tr><td>搜索资源</td><td>提示已开始搜索；冷门片可能几分钟到几小时</td></tr>
    <tr><td>下载 / 转存</td><td>进度可查；速度取决于源站与文件大小</td></tr>
    <tr><td>入库刮削</td><td>下载完成后自动整理、刮削，片库下拉刷新即可看到</td></tr>
    <tr><td>失败</td><td>提示无可用资源或下载失败，换一个版本或过几天再求</td></tr>
  </tbody>
</table>

<h2 id="manage">管理订阅</h2>
<p>机器人对话里通常有「我的订阅 / 任务」按钮或菜单，可以查看进度、取消还没开始的任务。已经下载完成的条目会留在片库，取消订阅不会删除已入库的文件。</p>

<div class="callout callout-warn">
  <p>求错版本时越早取消越好。已经开始下载的任务即使取消，也可能留下半成品，需要管理清理。</p>
</div>

<h2 id="rules">几条约定</h2>
<ul>
  <li>只求自己会看的片，不要把机器人当成片库巡检工具；</li>
  <li>不要求违规内容（院线偷拍、付费台录制、成人内容等），一律不受理；</li>
  <li>不在群里刷屏催促，进度以机器人回复为准；</li>
  <li>求片不额外收费，也不会延长账号有效期。</li>
</ul>

<h2 id="faq">常见问题</h2>

<h3 id="q-noresponse">发了片名没反应</h3>
<p>先确认是在和 <a href="https://t.me/montahdai_bot" target="_blank" rel="noopener">@montahdai_bot</a> 私聊，而不是在群里对空气说话；再发一次 <code>/start</code> 唤醒。仍然没有回复，可能是机器人正在维护，到群里问一声。</p>

<h3 id="q-notfound">搜不到想要的片</h3>
<p>换英文原名、加年份、去掉副标题再试；冷门片直接发 TMDB / 豆瓣链接。资源站确实没有源的，机器人也变不出来。</p>

<h3 id="q-howlong">多久能在片库看到</h3>
<p>热门片通常几十分钟；冷门片、原盘、老剧可能几小时到一天。超过一天没有动静，多半是没源，换个版本重求。</p>

<h3 id="q-wrong">求错了版本怎么办</h3>
<p>在「我的订阅 / 任务」里取消尚未开始的任务，再按正确条目重新求。已经入库的错误版本，请联系管理删除。</p>

<h3 id="q-tv">能求剧集、动漫、综艺吗</h3>
<p>可以。剧集注明季数；动漫注明语言或字幕组偏好会更准；综艺按「节目名 + 年份 + 期数」发。</p>
`,
  },
});
