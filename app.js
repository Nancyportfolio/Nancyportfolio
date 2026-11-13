/* ============================================================
   Nancy设计铺 — 应用逻辑
   视图切换 + 卡片数据渲染 + 作品集/知识库筛选
   ============================================================ */

/* ---------- 数据 ---------- */
const homeWorks = [
  { title: "山茶花护肤品牌视觉", meta: "品牌视觉 · 2026-11-08" },
  { title: "轻食点单小程序 UI", meta: "UI设计 · 2026-10-26" },
  { title: "城市漫步插画系列", meta: "插画绘制 · 2026-10-12" },
  { title: "独立工作室官网设计", meta: "网页设计 · 2026-09-30" },
  { title: "城市之声音乐节主视觉", meta: "海报设计 · 2026-09-18" },
  { title: "线性图标库 200+", meta: "图标设计 · 2026-09-02" },
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
  { title: "山茶花护肤品牌视觉", cat: "品牌视觉", meta: "品牌视觉 · 2026-11-08" },
  { title: "轻食点单小程序 UI", cat: "UI 设计", meta: "UI 设计 · 2026-10-26" },
  { title: "城市漫步插画系列", cat: "插画绘制", meta: "插画绘制 · 2026-10-12" },
  { title: "独立工作室官网设计", cat: "网页设计", meta: "网页设计 · 2026-09-30" },
  { title: "城市之声音乐节主视觉", cat: "海报设计", meta: "海报设计 · 2026-09-18" },
  { title: "线性图标库 200+", cat: "图标设计", meta: "图标设计 · 2026-09-02" },
  { title: "茶饮品牌包装 redesign", cat: "品牌视觉", meta: "品牌视觉 · 2026-08-21" },
  { title: "健身 App 改版设计", cat: "UI 设计", meta: "UI 设计 · 2026-08-05" },
  { title: "公益插画绘本", cat: "插画绘制", meta: "插画绘制 · 2026-07-19" },
];

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

function renderHomeWorks() {
  const wrap = document.getElementById("home-works");
  homeWorks.forEach((w) => {
    wrap.appendChild(el(`
      <div class="card" data-nav="portfolio-detail">
        <div class="thumb"></div>
        <div class="body">
          <div class="c-title">${w.title}</div>
          <div class="c-meta">${w.meta}</div>
        </div>
      </div>`));
  });
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
    .forEach((p) => {
      wrap.appendChild(el(`
        <div class="card" data-cat="${p.cat}" data-nav="portfolio-detail">
          <div class="thumb"></div>
          <div class="body">
            <div class="c-title">${p.title}</div>
            <div class="c-meta">${p.meta}</div>
          </div>
        </div>`));
    });
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

/* ---------- 视图切换 ---------- */
function switchView(name) {
  document.querySelectorAll(".view").forEach((v) => {
    v.classList.toggle("active", v.getAttribute("data-view") === name);
  });
  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.toggle("active", n.getAttribute("data-nav") === name);
  });
  document.querySelector(".content").scrollTo({ top: 0 });
}

document.addEventListener("click", (e) => {
  const navEl = e.target.closest("[data-nav]");
  if (navEl) {
    switchView(navEl.getAttribute("data-nav"));
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
