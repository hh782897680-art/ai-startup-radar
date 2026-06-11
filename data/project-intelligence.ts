export type PricingBand = {
  starter: string;
  service: string;
  premium: string;
};

export type ProjectIntelligence = {
  slug: string;
  seoKeywords: string[];
  competitors: string[];
  pricing: PricingBand;
  validationTemplate: string[];
  relatedConcepts?: string[];
  relatedTutorials?: string[];
  learningLevel?: "小白入门" | "进阶实战" | "需要技术基础";
};

export const projectIntelligence: ProjectIntelligence[] = [
  {
    slug: "open-webui",
    relatedConcepts: ["ollama", "rag", "agent"],
    relatedTutorials: ["local-llm-with-ollama", "rag-knowledge-base"],
    learningLevel: "进阶实战",
    seoKeywords: ["Open WebUI 本地部署", "企业私有化 AI 知识库", "本地大模型聊天界面", "Open WebUI 中文教程"],
    competitors: ["AnythingLLM", "Dify Chatflow", "LibreChat", "企业自研聊天门户"],
    pricing: {
      starter: "个人/小团队部署文档包：¥99-¥299",
      service: "标准私有化部署服务：¥3,000-¥12,000/次",
      premium: "企业知识库运维与模型接入：¥2,000-¥8,000/月",
    },
    validationTemplate: [
      "目标客户：找 5 个有内部资料问答需求的中小企业负责人。",
      "验证问题：他们是否已经在用 ChatGPT、飞书知识库或企业微信文档解决问题。",
      "最小承诺：愿意给出测试资料并预约一次部署演示。",
      "成交信号：愿意为部署、权限、运维和员工培训单独付费。",
    ],
  },
  {
    slug: "dify",
    relatedConcepts: ["agent", "prompt-engineering"],
    relatedTutorials: [],
    learningLevel: "进阶实战",
    seoKeywords: ["Dify 工作流模板", "Dify AI 客服", "Dify 企业自动化", "Dify 私有化部署"],
    competitors: ["Coze", "Flowise", "Langflow", "企业低代码自动化平台"],
    pricing: {
      starter: "单个工作流模板包：¥49-¥199",
      service: "行业 AI 客服/线索分流交付：¥2,000-¥15,000/个场景",
      premium: "多部门工作流托管与迭代：¥1,500-¥6,000/月",
    },
    validationTemplate: [
      "目标客户：先找客服、销售或运营团队，而不是泛泛找老板。",
      "验证问题：每周有多少重复问答、线索分拣或资料整理工作。",
      "最小承诺：允许你用 50 条历史问题做一个 48 小时 demo。",
      "成交信号：团队愿意继续提供真实数据并要求接入现有流程。",
    ],
  },
  {
    slug: "ragflow",
    relatedConcepts: ["rag", "embedding"],
    relatedTutorials: ["rag-knowledge-base"],
    learningLevel: "需要技术基础",
    seoKeywords: ["RAGFlow 知识库问答", "企业 RAG 文档解析", "PDF 知识库问答", "RAG 准确率优化"],
    competitors: ["Dify Knowledge", "LlamaIndex", "LangChain RAG", "传统企业搜索系统"],
    pricing: {
      starter: "RAG 效果评测报告：¥499-¥1,999",
      service: "行业文档知识库 PoC：¥8,000-¥30,000/次",
      premium: "准确率优化与监控服务：¥5,000-¥20,000/月",
    },
    validationTemplate: [
      "目标客户：优先找法务、制造、金融、培训等文档密集团队。",
      "验证问题：现有搜索是否能回答复杂 PDF、表格和制度文件问题。",
      "最小承诺：客户愿意提供脱敏文档和 20 个标准问题。",
      "成交信号：业务团队愿意用命中率报告推动预算申请。",
    ],
  },
  {
    slug: "comfyui",
    relatedConcepts: ["prompt-engineering"],
    relatedTutorials: [],
    learningLevel: "需要技术基础",
    seoKeywords: ["ComfyUI 工作流", "AI 电商主图生成", "ComfyUI 电商素材", "AI 图片批量生成流程"],
    competitors: ["Midjourney", "Stable Diffusion WebUI", "Canva AI", "电商设计外包团队"],
    pricing: {
      starter: "单套工作流模板：¥39-¥199",
      service: "电商视觉工作流定制：¥1,500-¥8,000/套",
      premium: "视觉自动化训练营/企业内训：¥499-¥9,800/期",
    },
    validationTemplate: [
      "目标客户：找有高频上新需求的电商卖家或设计团队。",
      "验证问题：他们每周需要多少主图、详情图、封面图。",
      "最小承诺：愿意提供 10 个 SKU 让你做前后对比图。",
      "成交信号：客户愿意为风格一致、批量出图和可复用流程付费。",
    ],
  },
  {
    slug: "flowise",
    relatedConcepts: ["agent", "prompt-engineering"],
    relatedTutorials: [],
    learningLevel: "进阶实战",
    seoKeywords: ["Flowise 实战", "低代码 LLM 工作流", "AI 销售线索助手", "Flowise 企业部署"],
    competitors: ["Dify", "Langflow", "Zapier AI", "Make 自动化流程"],
    pricing: {
      starter: "轻量流程模板：¥49-¥199",
      service: "单场景流程交付：¥1,500-¥10,000/个",
      premium: "流程维护和数据看板：¥1,000-¥5,000/月",
    },
    validationTemplate: [
      "目标客户：找有线索分拣、FAQ、资料整理需求的小团队。",
      "验证问题：目前流程靠谁手工处理、每周耗时多少。",
      "最小承诺：给你 30 条真实输入样本做流程测试。",
      "成交信号：客户希望把流程接到表单、CRM 或企业微信。",
    ],
  },
  {
    slug: "anythingllm",
    relatedConcepts: ["rag", "embedding", "ollama"],
    relatedTutorials: ["rag-knowledge-base", "local-llm-with-ollama"],
    learningLevel: "小白入门",
    seoKeywords: ["AnythingLLM 本地知识库", "本地文档问答工具", "中小企业知识库 AI", "私有知识库搭建"],
    competitors: ["Open WebUI", "Dify Knowledge", "Notion AI", "企业网盘搜索"],
    pricing: {
      starter: "小团队部署清单：¥49-¥199",
      service: "50 份文档以内知识库搭建：¥2,000-¥8,000/次",
      premium: "资料整理与知识库维护：¥1,500-¥6,000/月",
    },
    validationTemplate: [
      "目标客户：找资料分散、重复问答多的咨询、培训或运营团队。",
      "验证问题：员工找资料平均要问几个人、耗时多久。",
      "最小承诺：客户提供 20-50 份常用文档做试点。",
      "成交信号：试点后团队要求扩展文档范围或加入权限管理。",
    ],
  },
  {
    slug: "ai-shopify-seo-assistant",
    seoKeywords: ["Shopify SEO 优化工具", "AI 商品描述生成", "Shopify meta description", "跨境独立站 SEO"],
    competitors: ["Plug In SEO", "Yoast SEO for Shopify", "Jasper", "人工 SEO 代运营"],
    pricing: {
      starter: "单店铺 SEO 体检报告：¥99-¥399",
      service: "20-100 个 SKU 优化服务：¥1,000-¥6,000/批",
      premium: "店铺 SEO 月度订阅：¥299-¥1,999/月",
    },
    validationTemplate: [
      "目标客户：找有 20 个以上 SKU 且自然流量低的 Shopify 商家。",
      "验证问题：他们是否每次上新都要手写标题、描述和 meta。",
      "最小承诺：允许你优化 10 个低流量商品页做对比。",
      "成交信号：商家愿意按 SKU 数或月度优化包付费。",
    ],
  },
  {
    slug: "ai-etsy-listing-optimizer",
    seoKeywords: ["Etsy listing 优化", "Etsy 标签生成器", "AI Etsy 标题优化", "Etsy SEO 工具"],
    competitors: ["Marmalead", "eRank", "Alura", "人工跨境店铺诊断"],
    pricing: {
      starter: "单个 listing 诊断：¥19-¥59",
      service: "店铺 30 条 listing 优化：¥599-¥2,999/批",
      premium: "Etsy 运营模板订阅：¥99-¥399/月",
    },
    validationTemplate: [
      "目标客户：找已经上架但曝光不稳定的 Etsy 小卖家。",
      "验证问题：他们是否知道标题、标签和描述的关键词逻辑。",
      "最小承诺：愿意让你重写 5 条 listing 并追踪一周。",
      "成交信号：卖家愿意继续批量优化或购买模板包。",
    ],
  },
  {
    slug: "ai-local-business-review-responder",
    seoKeywords: ["Google 点评回复助手", "本地商家口碑管理", "AI 评论回复", "餐厅差评回复模板"],
    competitors: ["Podium", "Birdeye", "人工代运营", "Google Business Profile 后台"],
    pricing: {
      starter: "单门店回复模板包：¥49-¥199",
      service: "门店点评代运营：¥499-¥2,000/月/店",
      premium: "连锁门店口碑管理：¥3,000-¥20,000/月",
    },
    validationTemplate: [
      "目标客户：找餐饮、医美、培训、本地服务等点评密集门店。",
      "验证问题：谁负责回复评论，负评多久处理一次。",
      "最小承诺：试用 20 条历史评论生成回复草稿。",
      "成交信号：门店愿意按月购买回复、提醒和负评处理服务。",
    ],
  },
  {
    slug: "ai-youtube-shorts-script-generator",
    seoKeywords: ["YouTube Shorts 脚本生成器", "AI 短视频脚本", "短视频开场钩子", "YouTube Shorts 选题"],
    competitors: ["VidIQ", "TubeBuddy", "Jasper", "人工编导脚本服务"],
    pricing: {
      starter: "脚本模板包：¥29-¥99",
      service: "垂类账号脚本月包：¥499-¥3,000/月",
      premium: "团队协作版工具订阅：¥99-¥499/月/席位",
    },
    validationTemplate: [
      "目标客户：找连续更新但选题吃力的短视频创作者。",
      "验证问题：每天卡在选题、开场还是脚本结构。",
      "最小承诺：连续 7 天使用你的脚本并标记采用情况。",
      "成交信号：创作者愿意购买垂类脚本库或月度选题服务。",
    ],
  },
  {
    slug: "ai-seo-brief-generator",
    seoKeywords: ["SEO Brief 生成器", "AI 内容大纲工具", "SEO 写作 brief", "内容团队 AI 工具"],
    competitors: ["Surfer SEO", "Clearscope", "Frase", "人工 SEO 策略顾问"],
    pricing: {
      starter: "单个关键词 brief：¥9-¥29",
      service: "内容团队关键词包：¥999-¥5,000/批",
      premium: "SEO brief SaaS 订阅：¥99-¥699/月",
    },
    validationTemplate: [
      "目标客户：找每月稳定产出内容的 SEO 团队或独立站运营。",
      "验证问题：写作前是否有统一 brief，返工率高不高。",
      "最小承诺：用 10 个关键词生成 brief 并让写手评分。",
      "成交信号：团队要求导出、协作、品牌语气和行业模板。",
    ],
  },
  {
    slug: "ai-niche-calculator-builder",
    seoKeywords: ["细分计算器工具站", "AI 生成计算器", "SEO 工具站项目", "niche calculator ideas"],
    competitors: ["传统单页计算器站", "表格模板", "Airtable/Notion 工具", "外包小工具开发"],
    pricing: {
      starter: "单个计算器模板：¥29-¥199",
      service: "细分工具站搭建：¥1,500-¥8,000/个",
      premium: "工具站组合包与 SEO 运营：¥2,000-¥12,000/月",
    },
    validationTemplate: [
      "目标客户：找有细分流量需求的站长、机构或服务商。",
      "验证问题：这个计算结果是否能直接带来咨询、报价或购买决策。",
      "最小承诺：3 天上线一个单页工具并观察搜索/社群点击。",
      "成交信号：用户愿意留下邮箱、提交需求或购买高级模板。",
    ],
  },
];
