/* Monta HD 帮助中心 —— 路由、目录、搜索、主题 */
(function () {
  "use strict";

  var W = window.WIKI;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* 拍平目录，方便上一篇/下一篇和搜索 */
  var flat = [];
  W.nav.forEach(function (g) {
    g.items.forEach(function (it) {
      flat.push({ id: it.id, title: it.title, group: g.group });
    });
  });
  var pageMap = {};
  flat.forEach(function (it) { pageMap[it.id] = it; });

  /* ── 主题 ─────────────────────────────────────────── */
  var root = document.documentElement;
  var storageKey = "montahd-wiki-theme";

  function applyTheme(t) {
    if (t === "light" || t === "dark") {
      root.setAttribute("data-theme", t);
    } else {
      root.removeAttribute("data-theme");
    }
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#fbfbfc" : "#0a0c10");
  }

  function currentTheme() {
    var t = localStorage.getItem(storageKey);
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  var themeBtn = $("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "light" ? "dark" : "light";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
      updateThemeIcon(next);
    });
  }
  function updateThemeIcon(t) {
    if (!themeBtn) return;
    themeBtn.innerHTML = t === "light"
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/></svg>';
    themeBtn.setAttribute("aria-label", t === "light" ? "切换到深色" : "切换到浅色");
  }
  updateThemeIcon(currentTheme());

  /* ── 导航 ─────────────────────────────────────────── */
  function renderNav() {
    var nav = $("#nav");
    if (!nav) return;
    nav.innerHTML = W.nav.map(function (g) {
      return '<div class="nav-group"><div class="nav-group-title">' + esc(g.group) + "</div>" +
        g.items.map(function (it) {
          return '<a class="nav-link" data-id="' + it.id + '" href="#/' + it.id + '">' + esc(it.title) + "</a>";
        }).join("") + "</div>";
    }).join("");
  }

  function setActiveNav(id) {
    $$(".nav-link").forEach(function (a) {
      var on = a.getAttribute("data-id") === id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var active = $(".nav-link.active");
    if (active && window.innerWidth <= 860) {
      active.scrollIntoView({ block: "center" });
    }
  }

  /* ── 渲染页面 ─────────────────────────────────────── */
  function render(id) {
    var page = W.pages[id];
    if (!page) {
      location.hash = "#/intro";
      return;
    }
    var meta = pageMap[id] || { title: page.title, group: "" };
    document.title = id === "intro"
      ? W.site.name + " " + W.site.title
      : page.title + " · " + W.site.name + " " + W.site.title;

    var idx = flat.findIndex(function (x) { return x.id === id; });
    var prev = idx > 0 ? flat[idx - 1] : null;
    var next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

    var pager = '<div class="pager">' +
      (prev ? '<a class="pager-card prev" href="#/' + prev.id + '"><div class="pager-dir">← 上一篇</div><div class="pager-title">' + esc(prev.title) + "</div></a>" : "<span></span>") +
      (next ? '<a class="pager-card next" href="#/' + next.id + '"><div class="pager-dir">下一篇 →</div><div class="pager-title">' + esc(next.title) + "</div></a>" : "<span></span>") +
      "</div>";

    var footer = '<div class="site-footer"><span>' + esc(W.site.name) + " " + esc(W.site.title) +
      " · 文档版本 " + esc(W.site.version) + "</span><span><a href=\"" + W.site.telegram + "\" target=\"_blank\" rel=\"noopener\">Telegram 交流群</a> · <a href=\"" + W.site.controlCenter + "\" target=\"_blank\" rel=\"noopener\">控制中心</a></span></div>";

    var content = $("#content");
    var head = id === "intro" ? "" :
      '<div class="page-head">' +
      (meta.group ? '<div class="eyebrow">' + esc(meta.group) + "</div>" : "") +
      '<h1 class="page-title">' + esc(page.title) + "</h1>" +
      (page.desc ? '<p class="page-desc">' + esc(page.desc) + "</p>" : "") +
      "</div>";
    content.innerHTML = head +
      '<article class="doc">' + page.body + "</article>" +
      pager + footer;

    // 表格统一包一层横向滚动容器，窄屏不挤压列宽
    $$(".doc table").forEach(function (t) {
      if (t.parentElement && t.parentElement.classList.contains("table-wrap")) return;
      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });

    setActiveNav(id);
    buildToc();
    var de = document.documentElement;
    de.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    de.style.scrollBehavior = "";
    closeDrawer();
  }

  /* ── 右侧目录 ─────────────────────────────────────── */
  var spy = null;
  function buildToc() {
    var toc = $("#toc");
    if (!toc) return;
    var heads = $$(".doc h2, .doc h3");
    if (heads.length < 2) { toc.innerHTML = ""; return; }
    toc.innerHTML = '<div class="toc-title">本页内容</div>' + heads.map(function (h, i) {
      if (!h.id) h.id = "sec-" + i;
      return '<a href="javascript:void(0)" data-target="' + h.id + '" class="' + (h.tagName === "H3" ? "lv3" : "lv2") + '">' + esc(h.textContent) + "</a>";
    }).join("");

    $$("#toc a").forEach(function (a) {
      a.addEventListener("click", function () {
        var el = document.getElementById(a.getAttribute("data-target"));
        if (el) {
          var y = el.getBoundingClientRect().top + window.scrollY - 76;
          window.scrollTo({ top: y, behavior: "smooth" });
          history.replaceState(null, "", "#/" + currentId() + "~" + a.getAttribute("data-target"));
        }
      });
    });

    if (spy) spy.disconnect();
    var links = {};
    $$("#toc a").forEach(function (a) { links[a.getAttribute("data-target")] = a; });
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$("#toc a.active").forEach(function (a) { a.classList.remove("active"); });
        var a = links[en.target.id];
        if (a) a.classList.add("active");
      });
    }, { rootMargin: "-72px 0px -68% 0px", threshold: 0 });
    heads.forEach(function (h) { spy.observe(h); });
    $$("#toc a").forEach(function (a) { a.classList.remove("active"); });
    if ($$("#toc a").length) $$("#toc a")[0].classList.add("active");
  }

  /* ── 路由 ─────────────────────────────────────────── */
  function currentId() {
    var raw = location.hash.replace(/^#\/?/, "");
    var id = raw.split("~")[0];
    return W.pages[id] ? id : "intro";
  }

  function route() {
    var id = currentId();
    var anchor = location.hash.split("~")[1];
    render(id);
    if (anchor) {
      var el = document.getElementById(anchor);
      if (el) {
        setTimeout(function () {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
        }, 60);
      }
    }
  }

  window.addEventListener("hashchange", route);

  /* ── 搜索 ─────────────────────────────────────────── */
  function plain(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  var index = flat.map(function (it) {
    var p = W.pages[it.id] || {};
    return {
      id: it.id,
      title: p.title || it.title,
      group: it.group,
      text: plain((p.desc || "") + " " + (p.body || "")),
    };
  });

  function score(item, terms) {
    var t = item.title.toLowerCase();
    var body = item.text.toLowerCase();
    var s = 0;
    for (var i = 0; i < terms.length; i++) {
      var q = terms[i];
      if (!q) continue;
      if (t.indexOf(q) > -1) s += 8;
      else if (body.indexOf(q) > -1) s += 3;
      else return 0;
      var n = body.split(q).length - 1;
      s += Math.min(n, 6) * 0.4;
    }
    return s;
  }

  function snippet(item, q) {
    var i = item.text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return item.text.slice(0, 56) + "…";
    var start = Math.max(0, i - 24);
    var s = item.text.slice(start, start + 72);
    return (start > 0 ? "…" : "") + s + "…";
  }

  function initSearch(input, box) {
    if (!input || !box) return;
    var items = [];
    var cursor = -1;

    function close() { box.classList.remove("open"); items = []; cursor = -1; }

    function paint(q) {
      if (!q) { close(); return; }
      var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      var res = index.map(function (it) { return { it: it, s: score(it, terms) }; })
        .filter(function (r) { return r.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, 8);
      if (!res.length) {
        box.innerHTML = '<div class="sr-empty">没有找到「' + esc(q) + "」，换个关键词试试。</div>";
      } else {
        var rx = new RegExp("(" + terms.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")", "gi");
        box.innerHTML = res.map(function (r) {
          var sn = snippet(r.it, terms[0]).replace(rx, "<mark>$1</mark>");
          return '<a class="sr-item" href="#/' + r.it.id + '"><div class="sr-title">' +
            esc(r.it.title).replace(rx, "<mark>$1</mark>") +
            '</div><div class="sr-meta">' + esc(r.it.group) + " · " + sn + "</div></a>";
        }).join("");
      }
      items = $$(".sr-item", box);
      cursor = -1;
      box.classList.add("open");
    }

    var timer = null;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      var v = input.value.trim();
      timer = setTimeout(function () { paint(v); }, 90);
    });
    input.addEventListener("focus", function () { if (input.value.trim()) paint(input.value.trim()); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { close(); input.blur(); return; }
      if (!items.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        cursor = (cursor + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items.forEach(function (el, i) { el.classList.toggle("active", i === cursor); });
        items[cursor].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && cursor >= 0) {
        items[cursor].click();
        input.value = "";
        close();
      }
    });
    document.addEventListener("click", function (e) {
      if (!box.contains(e.target) && e.target !== input) close();
    });
    $$(".sr-item", box).forEach(function (a) {
      a.addEventListener("click", function () { input.value = ""; close(); });
    });
    // 结果由外部点击进入，这里补一次链接点击监听
    box.addEventListener("click", function (e) {
      if (e.target.closest(".sr-item")) { input.value = ""; close(); }
    });
  }

  initSearch($("#searchInput"), $("#searchResults"));
  initSearch($("#mSearchInput"), $("#mSearchResults"));

  document.addEventListener("keydown", function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    var typing = tag === "INPUT" || tag === "TEXTAREA";
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      var input = window.innerWidth <= 860 ? $("#mSearchInput") : $("#searchInput");
      if (input) { input.focus(); input.select(); }
    } else if (e.key === "/" && !typing) {
      e.preventDefault();
      var i2 = window.innerWidth <= 860 ? $("#mSearchInput") : $("#searchInput");
      if (i2) i2.focus();
    } else if (e.key === "Escape") {
      closeDrawer();
    }
  });

  /* ── 移动端抽屉 ───────────────────────────────────── */
  var sidebar = $("#sidebar");
  var overlay = $("#overlay");

  function openDrawer() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    if (overlay) overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
  var menuBtn = $("#menuBtn");
  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  var closeBtn = $("#drawerClose");
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) closeDrawer();
  });

  /* ── 复制按钮 ─────────────────────────────────────── */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copy]");
    if (!btn) return;
    var el = $(btn.getAttribute("data-copy"));
    if (!el) return;
    var text = el.textContent.trim();
    var done = function () {
      var old = btn.textContent;
      btn.textContent = "已复制";
      setTimeout(function () { btn.textContent = old; }, 1400);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  });

  function fallbackCopy(text, cb) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); cb(); } catch (err) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ── 启动 ─────────────────────────────────────────── */
  renderNav();
  applyTheme(localStorage.getItem(storageKey) || null);
  updateThemeIcon(currentTheme());
  route();
})();
