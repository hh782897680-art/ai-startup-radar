export const navItems = [
  { label: "首页", href: "/" },
  { label: "AI项目库", href: "#" },
  { label: "GitHub分析器", href: "/github-analyzer" },
  { label: "创业灵感", href: "#" },
  { label: "建站方案", href: "#" },
  { label: "推广文案", href: "#" },
  { label: "AI工具", href: "#" },
  { label: "排行榜", href: "#" },
];

export const heroStats = [
  { icon: "Radar", value: "10,328+", label: "收录AI项目" },
  { icon: "Sparkles", value: "2,560+", label: "AI工具" },
  { icon: "Users", value: "18,732+", label: "创业者正在使用" },
  { icon: "Star", value: "99.2%", label: "用户好评" },
];

export const heroTags = ["项目发现", "商业分析", "AI建站方案"];

export const heroPreviewMetrics = [
  { label: "商业化潜力", value: "高" },
  { label: "SEO潜力", value: "8.7" },
  { label: "竞争指数", value: "4.1" },
  { label: "适合小白", value: "是" },
];

export const heroPreviewProjects = [
  { name: "Open WebUI", score: "9.3" },
  { name: "Dify", score: "9.1" },
  { name: "RAGFlow", score: "8.7" },
];

export const featureCards = [
  {
    title: "GitHub项目分析器",
    description: "输入GitHub链接，AI帮你判断商业化潜力、竞争度和SEO机会",
    button: "立即分析",
    icon: "Radar",
    iconBg: "from-indigo-500 to-violet-500",
    href: "/github-analyzer",
  },
  {
    title: "AI创业灵感生成器",
    description: "根据技能、预算和兴趣，生成适合你的AI项目点子",
    button: "生成灵感",
    icon: "Sparkles",
    iconBg: "from-fuchsia-500 to-indigo-500",
  },
  {
    title: "AI建站方案生成器",
    description: "一键生成网站结构、页面规划、功能模块和开发指令",
    button: "生成方案",
    icon: "LayoutGrid",
    iconBg: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI推广文案生成器",
    description: "生成小红书、X、TG、SEO文章和产品介绍文案",
    button: "生成文案",
    icon: "Rocket",
    iconBg: "from-violet-500 to-indigo-500",
  },
];

export const opportunities = [
  {
    rank: 1,
    name: "MemGPT",
    description: "让AI拥有长期记忆的开源框架",
    category: "AI Agent",
    heat: "1.2k",
    score: "9.2",
  },
  {
    rank: 2,
    name: "Dify",
    description: "开源LLM应用开发平台",
    category: "开发工具",
    heat: "986",
    score: "8.8",
  },
  {
    rank: 3,
    name: "PhotoMaker",
    description: "AI图片生成和编辑工具",
    category: "图像生成",
    heat: "842",
    score: "8.6",
  },
  {
    rank: 4,
    name: "LangChain",
    description: "构建LLM应用的开发框架",
    category: "开发框架",
    heat: "756",
    score: "8.5",
  },
  {
    rank: 5,
    name: "RAGFlow",
    description: "高质量RAG知识库引擎",
    category: "AI应用",
    heat: "632",
    score: "8.3",
  },
];

export const analyzerTags = [
  "vercel/ai",
  "langchain-ai/langchain",
  "microsoft/autogen",
  "mem0ai/mem0",
];

export const analyzerMetrics = [
  { label: "商业化潜力", value: "9.2/10", level: "高" },
  { label: "竞争指数", value: "4.1/10", level: "较低" },
  { label: "SEO潜力", value: "8.7/10", level: "较高" },
  { label: "中文市场机会", value: "高", level: "强烈推荐" },
];

export const rankingTabs = ["赚钱指数", "搜索热度", "小白友好"];

export const rankingItems = [
  { name: "Open WebUI", score: "9.6" },
  { name: "Dify", score: "9.3" },
  { name: "MemGPT", score: "8.9" },
  { name: "RAGFlow", score: "8.7" },
  { name: "AutoGen", score: "8.5" },
];

export const hotProjects = [
  {
    name: "Auto-GPT",
    summary: "自主运行的AI Agent",
    category: "AI Agent",
    rating: "8.4",
    stars: "12.3k",
    beginner: "一般",
    short: "A",
  },
  {
    name: "BabyAGI",
    summary: "任务驱动AI Agent",
    category: "AI Agent",
    rating: "8.1",
    stars: "9.8k",
    beginner: "友好",
    short: "B",
  },
  {
    name: "OpenWebUI",
    summary: "开源AI聊天界面",
    category: "AI应用",
    rating: "8.7",
    stars: "8.7k",
    beginner: "友好",
    short: "O",
  },
  {
    name: "Flowise",
    summary: "可视化AI Agent构建器",
    category: "开发工具",
    rating: "8.6",
    stars: "6.2k",
    beginner: "友好",
    short: "F",
  },
  {
    name: "AnythingLLM",
    summary: "本地知识库问答系统",
    category: "知识库",
    rating: "8.5",
    stars: "5.9k",
    beginner: "一般",
    short: "A",
  },
  {
    name: "Stable Diffusion",
    summary: "开源AI绘画工具",
    category: "图像生成",
    rating: "8.8",
    stars: "15.2k",
    beginner: "进阶",
    short: "S",
  },
];

export const tools = [
  {
    name: "ChatGPT",
    type: "AI对话助手",
    availability: "需魔法",
    chinese: "支持中文",
    pricing: "付费",
    scenario: "内容创作 / 研究分析",
    short: "C",
  },
  {
    name: "Claude",
    type: "长文本AI助手",
    availability: "需魔法",
    chinese: "支持中文",
    pricing: "付费",
    scenario: "文档总结 / 写作辅助",
    short: "C",
  },
  {
    name: "Gemini",
    type: "Google AI助手",
    availability: "需魔法",
    chinese: "支持中文",
    pricing: "免费",
    scenario: "多模态问答",
    short: "G",
  },
  {
    name: "Cursor",
    type: "AI编程工具",
    availability: "需魔法",
    chinese: "支持中文",
    pricing: "付费",
    scenario: "代码生成 / 工程提效",
    short: "C",
  },
  {
    name: "Perplexity",
    type: "AI搜索工具",
    availability: "需魔法",
    chinese: "支持中文",
    pricing: "免费",
    scenario: "信息检索 / 事实核查",
    short: "P",
  },
  {
    name: "Notion AI",
    type: "AI办公助手",
    availability: "需魔法",
    chinese: "支持中文",
    pricing: "付费",
    scenario: "文档协作 / 会议整理",
    short: "N",
  },
  {
    name: "Kimi",
    type: "长文本AI助手",
    availability: "国内可用",
    chinese: "支持中文",
    pricing: "免费",
    scenario: "长文阅读 / 报告解析",
    short: "K",
  },
  {
    name: "豆包",
    type: "中文AI助手",
    availability: "国内可用",
    chinese: "支持中文",
    pricing: "免费",
    scenario: "日常问答 / 创意灵感",
    short: "豆",
  },
];

export const articles = [
  {
    title: "深度解析：为什么 Dify 适合中文创业者做 AI 应用平台？",
    summary: "从功能、部署难度和商业化路径分析 Dify 的机会。",
    date: "2026-05-29",
    reads: "3.2k",
    tag: "项目解读",
  },
  {
    title: "RAGFlow 商业化潜力分析：能否成为下一个知识库工具？",
    summary: "拆解 RAGFlow 在企业知识库和中文市场的落地空间。",
    date: "2026-05-28",
    reads: "2.8k",
    tag: "商业分析",
  },
  {
    title: "如何用 AI 工具 16 小时搭建一个项目网站？",
    summary: "从想法、页面、部署到推广，完整拆解AI建站流程。",
    date: "2026-05-27",
    reads: "4.7k",
    tag: "实战教程",
  },
];

export const resources = [
  {
    title: "AI项目变现指南",
    description: "梳理订阅制、项目交付、模板售卖等主流变现路径。",
    icon: "ChartArea",
  },
  {
    title: "独立开发者工具包",
    description: "覆盖开发、部署、监控、增长的一站式高频工具清单。",
    icon: "Wrench",
  },
  {
    title: "SEO关键词库",
    description: "聚焦 AI 创业赛道的关键词分层，直接用于内容布局。",
    icon: "Search",
  },
  {
    title: "项目发布平台清单",
    description: "适合冷启动的发布渠道和执行节奏建议，减少试错成本。",
    icon: "Rocket",
  },
];

export const testimonials = [
  {
    name: "张同学",
    text: "通过项目分析器，我找到了更清晰的AI项目方向。",
  },
  {
    name: "李同学",
    text: "建站方案生成器帮我节省了大量产品规划时间。",
  },
  {
    name: "王同学",
    text: "推广文案生成器让我的内容创作效率提升很多。",
  },
  {
    name: "陈同学",
    text: "每天来这里找灵感，已经启动了多个AI项目。",
  },
];

export const footerColumns = [
  {
    title: "产品",
    links: ["AI项目库", "GitHub分析器", "建站方案", "推广文案"],
  },
  {
    title: "资源",
    links: ["创业指南", "工具导航", "项目排行榜", "最新解读"],
  },
  {
    title: "关于我们",
    links: ["关于本站", "联系我们", "加入我们", "隐私政策"],
  },
  {
    title: "关注我们",
    links: ["X", "Telegram", "GitHub", "邮件"],
  },
];
