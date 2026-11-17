/* ============================================================
   Nancy设计铺 — 应用逻辑
   视图切换 + 卡片数据渲染 + 作品集/知识库筛选 + 项目详情
   ============================================================ */

/* ---------- 数据 ---------- */
const homeWorks = [
  { id: "dentium-app", title: "登腾 APP", meta: "UI 设计 · 2026-11-17", cover: "image/dt/cover.webp" },
  { id: "camellia", title: "山茶花护肤品牌视觉", meta: "品牌视觉 · 2026-11-08" },
  { id: "lightmeal", title: "轻食点单小程序 UI", meta: "UI设计 · 2026-10-26" },
  { id: "citywalk", title: "城市漫步插画系列", meta: "插画绘制 · 2026-10-12" },
  { id: "studio-site", title: "独立工作室官网设计", meta: "网页设计 · 2026-09-30" },
  { id: "music-festival", title: "城市之声音乐节主视觉", meta: "海报设计 · 2026-09-18" },
];

const homeNotes = [
  { title: "从零搭建设计系统（上篇）", meta: "设计方法论 · 2026-11-05" },
  { title: "Figma 组件复用的 6 个技巧", meta: "效率工具 · 2026-10-28" },
  { title: "配色方法论：60-30-10 法则", meta: "配色思路 · 2026-10-20" },
  { title: "Banner 排版最易忽略的 5 个细节", meta: "版式设计 · 2026-10-11" },
  { title: "个人作品集网站的搭建思路", meta: "网站搭建 · 2026-09-27" },
  { title: "设计交付前的自查清单", meta: "工作流程 · 2026-09-15" },
];

const homeTools = [
  { title: "Figma", desc: "在线协作 UI 设计工具", glyph: "F" },
  { title: "Photoshop", desc: "专业图像处理与合成", glyph: "Ps" },
  { title: "Illustrator", desc: "矢量插画与 Logo 绘制", glyph: "Ai" },
  { title: "即时设计", desc: "国产云端 UI 设计平台", glyph: "即" },
  { title: "iconfont", desc: "海量图标素材库", glyph: "i" },
  { title: "Coolors", desc: "快速生成配色方案", glyph: "C" },
];

const portfolio = [
  { id: "dentium-app", title: "登腾 APP", cat: "UI 设计", meta: "UI 设计 · 2026-11-17", cover: "image/dt/cover.webp" },
  { id: "camellia", title: "山茶花护肤品牌视觉", cat: "品牌视觉", meta: "品牌视觉 · 2026-11-08" },
  { id: "lightmeal", title: "轻食点单小程序 UI", cat: "UI 设计", meta: "UI 设计 · 2026-10-26" },
  { id: "citywalk", title: "城市漫步插画系列", cat: "插画绘制", meta: "插画绘制 · 2026-10-12" },
  { id: "studio-site", title: "独立工作室官网设计", cat: "网页设计", meta: "网页设计 · 2026-09-30" },
  { id: "music-festival", title: "城市之声音乐节主视觉", cat: "海报设计", meta: "海报设计 · 2026-09-18" },
  { id: "icon-library", title: "线性图标库 200+", cat: "图标设计", meta: "图标设计 · 2026-09-02" },
  { id: "tea-package", title: "茶饮品牌包装 redesign", cat: "品牌视觉", meta: "品牌视觉 · 2026-08-21" },
  { id: "fitness-app", title: "健身 App 改版设计", cat: "UI 设计", meta: "UI 设计 · 2026-08-05" },
  { id: "charity-book", title: "公益插画绘本", cat: "插画绘制", meta: "插画绘制 · 2026-07-19" },
];

/* 有真实素材的项目详情。新增项目只要在这里补一条数据即可。 */
const projectDetails = {
  "dentium-app": {
    title: "登腾 APP",
    tagline: "面向牙科领域的医患综合服务平台，用清爽的绿色视觉语言串联咨询、商城、教育与内容社区。",
    cover: "image/dt/cover.webp",
    meta: [
      ["客户", "登腾 Dentium"],
      ["角色", "UI 设计 · 交互设计"],
      ["年份", "2026"],
      ["分类", "UI 设计"],
    ],
    overview: [
      "登腾 APP（Dentium）是一款集合患者咨询端与医生端的牙科综合服务软件，覆盖找诊所、问医生、产品追溯、牙科知识、商城与在线课程等模块。项目以数据共享为线索整合牙科领域资源，让医患双方的信息流转更及时、更准确。",
      "视觉上以品牌绿为主色，搭配大圆角、轻渐变与插画化图形，呼应「方便 / 快捷 / 信赖 / 靠谱」的产品气质。从产品框架、字体与色彩规范到全部核心页面，建立了一套可复用的界面语言。",
    ],
    // 封面排第一位，其余按图片序号 18 → 31 依次排列
    images: [
      "image/dt/cover.webp",
      "image/dt/18.webp",
      "image/dt/19.webp",
      "image/dt/20.webp",
      "image/dt/21.webp",
      "image/dt/22.webp",
      "image/dt/23.webp",
      "image/dt/24.webp",
      "image/dt/25.webp",
      "image/dt/26.webp",
      "image/dt/27.webp",
      "image/dt/28.webp",
      "image/dt/29.webp",
      "image/dt/30.webp",
      "image/dt/31.webp",
    ],
  },
};

const kbArticles = [
  { title: "如何建立一套可复用的设计系统", excerpt: "从 token 到组件库的完整路径，让团队协作不再各自为战。", cat: "设计方法论" },
  { title: "Figma 变量进阶：主题切换实战", excerpt: "用 variables 实现明暗主题与多品牌的一键切换。", cat: "工具技巧" },
  { title: "2026 设计工具趋势观察", excerpt: "AI 辅助设计正在重塑从灵感到交付的链路。", cat: "行业观察" },
  { title: "拆解一个高转化落地页的结构", excerpt: "信息层级与视觉动线是如何影响转化的。", cat: "案例拆解" },
  { title: "《设计中的设计》重读笔记", excerpt: "关于「无亦所有」的东方设计观再思考。", cat: "读书笔记" },
  { title: "配色不靠灵感：一套理性流程", excerpt: "用色板约束与对比度规则代替反复试错。", cat: "设计方法论" },
];

/* ---------- 渲染 ---------- */
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

/* 作品卡片：有封面就显示真实图片，有详情数据就进独立详情页 */
function projectCard(item) {
  const nav = projectDetails[item.id]
    ? `data-nav="portfolio-detail-project" data-project="${item.id}"`
    : 'data-nav="portfolio-detail"';
  const thumb = item.cover
    ? `<img src="${item.cover}" alt="${item.title} 封面" loading="lazy">`
    : "";
  return el(`
    <div class="card" data-cat="${item.cat}" ${nav}>
      <div class="thumb">${thumb}</div>
      <div class="body">
        <div class="c-title">${item.title}</div>
        <div class="c-meta">${item.meta}</div>
      </div>
    </div>`);
}

function renderHomeWorks() {
  const wrap = document.getElementById("home-works");
  homeWorks.forEach((w) => wrap.appendChild(projectCard(w)));
}

function renderHomeNotes() {
  const wrap = document.getElementById("home-notes");
  homeNotes.forEach((n) => {
    wrap.appendChild(el(`
      <div class="card note" data-nav="kb-detail">
        <div class="thumb"></div>
        <div class="body">
          <div class="c-title">${n.title}</div>
          <div class="c-meta">${n.meta}</div>
        </div>
      </div>`));
  });
}

function renderHomeTools() {
  const wrap = document.getElementById("home-tools");
  homeTools.forEach((t) => {
    wrap.appendChild(el(`
      <div class="tool-card">
        <div class="tool-ico">${t.glyph}</div>
        <div class="c-title">${t.title}</div>
        <div class="c-meta">${t.desc}</div>
      </div>`));
  });
}

function renderPortfolio(filter = "all") {
  const wrap = document.getElementById("portfolio-grid");
  wrap.innerHTML = "";
  portfolio
    .filter((p) => filter === "all" || p.cat === filter)
    .forEach((p) => wrap.appendChild(projectCard(p)));
}

function renderKB(filter = "all", keyword = "") {
  const wrap = document.getElementById("kb-grid");
  wrap.innerHTML = "";
  kbArticles
    .filter((a) => (filter === "all" || a.cat === filter))
    .filter((a) => {
      if (!keyword) return true;
      const k = keyword.toLowerCase();
      return a.title.toLowerCase().includes(k) || a.excerpt.toLowerCase().includes(k);
    })
    .forEach((a) => {
      wrap.appendChild(el(`
        <div class="kb-card" data-cat="${a.cat}" data-nav="kb-detail">
          <div class="c-title">${a.title}</div>
          <div class="c-excerpt">${a.excerpt}</div>
        </div>`));
    });
}

/* ---------- 项目详情 ---------- */
function renderProjectDetail(id) {
  const d = projectDetails[id];
  const root = document.getElementById("project-detail");
  if (!d || !root) return;

  const metaHtml = d.meta
    .map(([label, value]) => `<div class="meta-cell"><div class="m-label">${label}</div><div class="m-value">${value}</div></div>`)
    .join("");
  const overviewHtml = d.overview.map((text) => `<p class="para">${text}</p>`).join("");
  const galleryHtml = d.images
    .map((src, i) => `<img src="${src}" alt="${d.title} 展示图 ${i + 1}" ${i === 0 ? "" : 'loading="lazy"'} data-zoom>`)
    .join("");

  root.innerHTML = `
    <div class="back-link" data-nav="portfolio">← 返回作品集</div>
    <div class="detail-title">${d.title}</div>
    <div class="detail-tagline">${d.tagline}</div>
    <div class="cover cover-image"><img src="${d.cover}" alt="${d.title} 封面"></div>
    <div class="meta-row">${metaHtml}</div>
    <div class="block-title">项目概述</div>
    ${overviewHtml}
    <div class="block-title">视觉呈现</div>
    <div class="gallery project-gallery">${galleryHtml}</div>
    <div class="next-project" data-nav="portfolio">
      <div class="np-label">更多作品 →</div>
      <div class="np-title">返回作品集继续浏览</div>
    </div>
  `;
}

/* ---------- 图片预览 ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("open");
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImg.removeAttribute("src");
}

/* ---------- 视图切换 ---------- */
function switchView(name) {
  const isPortfolioDetail = name.startsWith("portfolio-detail");
  document.querySelectorAll(".view").forEach((v) => {
    v.classList.toggle("active", v.getAttribute("data-view") === name);
  });
  document.querySelectorAll(".nav-item").forEach((n) => {
    const key = n.getAttribute("data-nav");
    n.classList.toggle("active", key === name || (isPortfolioDetail && key === "portfolio"));
  });
  document.querySelector(".content").scrollTo({ top: 0 });
}

document.addEventListener("click", (e) => {
  // 图片放大 / 关闭
  const zoomable = e.target.closest("[data-zoom]");
  if (zoomable) {
    openLightbox(zoomable.getAttribute("src"));
    return;
  }
  if (e.target.closest("#lightbox")) {
    closeLightbox();
    return;
  }

  const navEl = e.target.closest("[data-nav]");
  if (navEl) {
    const name = navEl.getAttribute("data-nav");
    const pid = navEl.getAttribute("data-project");
    if (name === "portfolio-detail-project" && pid) renderProjectDetail(pid);
    switchView(name);
    return;
  }
  // 作品集筛选
  const chip = e.target.closest("#portfolio-chips .pill");
  if (chip) {
    document.querySelectorAll("#portfolio-chips .pill").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    renderPortfolio(chip.getAttribute("data-cat"));
    return;
  }
  // 知识库筛选
  const kbChip = e.target.closest("#kb-chips .pill");
  if (kbChip) {
    document.querySelectorAll("#kb-chips .pill").forEach((c) => c.classList.remove("active"));
    kbChip.classList.add("active");
    const kw = document.getElementById("kb-search").value.trim();
    renderKB(kbChip.getAttribute("data-cat"), kw);
    return;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

document.getElementById("kb-search")?.addEventListener("input", (e) => {
  const active = document.querySelector("#kb-chips .pill.active");
  renderKB(active ? active.getAttribute("data-cat") : "all", e.target.value.trim());
});

document.getElementById("load-more")?.addEventListener("click", () => {
  alert("已展示全部作品～");
});
document.getElementById("kb-subscribe")?.addEventListener("click", () => {
  alert("感谢订阅！有新文章时会第一时间通知你。");
});
document.getElementById("contact-send")?.addEventListener("click", () => {
  alert("消息已记录，我会尽快回复你，谢谢！");
});

/* ---------- 初始化 ---------- */
renderHomeWorks();
renderHomeNotes();
renderHomeTools();
renderPortfolio();
renderKB();
