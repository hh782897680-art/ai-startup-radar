export type MatcherProfileId =
  | "content"
  | "tool-builder"
  | "automation"
  | "enterprise"
  | "local-ai"
  | "learner";

export type MatcherAnswers = {
  technical: "none" | "guided" | "basic" | "experienced";
  time: "under-30" | "one-hour" | "two-three" | "over-three";
  interest: "content" | "website" | "automation" | "enterprise" | "local-ai";
  budget: "zero" | "under-100" | "operating" | "long-term";
  strength: "writing" | "scouting" | "technical" | "sales" | "industry";
  goal: "audience" | "website" | "service" | "long-term" | "learn";
};

export type MatcherQuestion = {
  key: keyof MatcherAnswers;
  title: string;
  description: string;
  options: Array<{
    value: MatcherAnswers[keyof MatcherAnswers];
    label: string;
    note: string;
  }>;
};

export type MatcherLink = {
  href: string;
  title: string;
  description: string;
};

export type MatcherDirection = {
  title: string;
  description: string;
  href: string;
};

export type MatcherProfile = {
  id: MatcherProfileId;
  code: string;
  title: string;
  shortTitle: string;
  summary: string;
  reasons: string[];
  directions: MatcherDirection[];
  avoid: string[];
  learnFirst: string[];
  links: MatcherLink[];
  plan: string[];
};

export const matcherQuestions: MatcherQuestion[] = [
  {
    key: "technical",
    title: "你的技术基础？",
    description: "按你现在能独立完成的程度选择，不按计划中的能力选择。",
    options: [
      { value: "none", label: "完全不会代码", note: "更适合内容、调研和低门槛工具" },
      { value: "guided", label: "会一点点，能跟着教程操作", note: "可以完成安装、配置和模板修改" },
      { value: "basic", label: "会做简单网页或脚本", note: "可以尝试工具站和自动化原型" },
      { value: "experienced", label: "有完整开发经验", note: "可以承担产品、部署和深度集成" },
    ],
  },
  {
    key: "time",
    title: "你每天能投入多少时间？",
    description: "选择可以连续坚持至少四周的投入，不选偶尔的峰值。",
    options: [
      { value: "under-30", label: "30 分钟以内", note: "优先短反馈、低维护的方向" },
      { value: "one-hour", label: "1 小时左右", note: "适合内容、学习或单点验证" },
      { value: "two-three", label: "2-3 小时", note: "可以推进一个完整最小闭环" },
      { value: "over-three", label: "3 小时以上", note: "可以做持续开发或客户交付" },
    ],
  },
  {
    key: "interest",
    title: "你更想做哪类事情？",
    description: "兴趣会影响你是否愿意持续迭代，优先选择真正愿意长期做的事。",
    options: [
      { value: "content", label: "发内容 / 做账号", note: "工具测评、项目拆解和学习内容" },
      { value: "website", label: "做网站 / 工具站", note: "生成器、计算器和垂直小工具" },
      { value: "automation", label: "做自动化流程", note: "连接信息、表格、邮件和工作流" },
      { value: "enterprise", label: "做企业服务", note: "围绕真实业务交付解决方案" },
      { value: "local-ai", label: "折腾本地 AI / 开源项目", note: "模型、部署、语音和私有知识库" },
    ],
  },
  {
    key: "budget",
    title: "你的预算？",
    description: "这里只考虑首轮验证预算，不代表后续一定需要持续投入。",
    options: [
      { value: "zero", label: "尽量 0 成本", note: "优先使用免费工具和已有平台" },
      { value: "under-100", label: "每月 100 元以内", note: "可承担域名或少量工具费用" },
      { value: "operating", label: "可以承担 API / 服务器成本", note: "可以验证在线工具和自动化服务" },
      { value: "long-term", label: "可以投入更多做长期项目", note: "适合持续产品或企业交付" },
    ],
  },
  {
    key: "strength",
    title: "你更擅长什么？",
    description: "优先利用已经拥有的优势，比从零补齐所有能力更容易得到反馈。",
    options: [
      { value: "writing", label: "写内容", note: "能解释、整理和持续输出" },
      { value: "scouting", label: "找工具和信息差", note: "擅长发现新产品和新用法" },
      { value: "technical", label: "技术折腾", note: "愿意安装、调试和解决问题" },
      { value: "sales", label: "销售沟通", note: "能访谈、演示和推动合作" },
      { value: "industry", label: "某个行业经验", note: "理解具体流程、角色和痛点" },
    ],
  },
  {
    key: "goal",
    title: "你当前最想要的结果？",
    description: "选择未来 30 天最希望看到的结果，而不是最终的人生目标。",
    options: [
      { value: "audience", label: "快速发内容吸粉", note: "先建立选题和稳定输出机制" },
      { value: "website", label: "做一个能上线的小网站", note: "先获得真实访问和使用反馈" },
      { value: "service", label: "做一个可接单的服务", note: "先验证客户是否愿意继续沟通" },
      { value: "long-term", label: "做一个长期可积累的项目", note: "沉淀产品、数据、内容或客户关系" },
      { value: "learn", label: "先系统学习 AI", note: "先建立概念地图和实战基础" },
    ],
  },
];

export const matcherProfiles: MatcherProfile[] = [
  {
    id: "content",
    code: "A",
    title: "内容型机会探索者",
    shortTitle: "内容型",
    summary: "你更适合先用内容、信息整理和公开反馈建立机会雷达，再决定是否把高频需求做成产品。",
    reasons: [
      "内容方向能较快获得选题、阅读和用户提问反馈。",
      "不需要先开发完整产品，可以边学习边验证真实需求。",
      "持续拆解工具和项目，会沉淀自己的细分领域判断力。",
    ],
    directions: [
      {
        title: "AI 工具测评与对比",
        description: "围绕一个具体人群，持续比较工具的真实使用成本和适用场景。",
        href: "/blog",
      },
      {
        title: "开源项目拆解",
        description: "把复杂项目翻译成普通人能理解的用途、门槛和商业化可能。",
        href: "/projects",
      },
      {
        title: "AI 学习路线内容",
        description: "按问题组织提示词、RAG、Agent 和本地 AI 的学习内容。",
        href: "/learn",
      },
    ],
    avoid: [
      "一开始同时运营多个平台，导致无法形成稳定栏目。",
      "只追热点和工具发布，不记录真实体验与用户问题。",
      "在没有受众反馈前开发复杂内容平台或付费系统。",
    ],
    learnFirst: ["提示词任务结构", "工具对比方法", "内容选题验证", "基础数据复盘"],
    links: [
      { href: "/learn", title: "AI 实战学习地图", description: "建立从概念到项目的学习顺序。" },
      { href: "/glossary/prompt-engineering", title: "提示词工程是什么", description: "让内容任务和输出标准更稳定。" },
      { href: "/projects", title: "AI 项目库", description: "寻找可以持续拆解的真实方向。" },
    ],
    plan: [
      "选择一个具体受众，例如独立开发者、AI 工具博主或小商家。",
      "从项目库选择 3 个同类工具，记录功能、价格、门槛和真实限制。",
      "发布一篇“适合谁、不适合谁”的对比内容，不做夸张结论。",
      "收集评论、私信和搜索词中的真实问题，整理成问题清单。",
      "围绕最高频问题制作一个短教程或操作清单。",
      "邀请 3 位目标用户阅读或试用，记录他们没看懂和最想要的内容。",
      "复盘哪类问题获得真实互动，确定下周唯一的内容栏目。",
    ],
  },
  {
    id: "tool-builder",
    code: "B",
    title: "工具站型独立开发者",
    shortTitle: "工具站型",
    summary: "你适合把一个明确、重复的小任务做成网页工具，用搜索或社群反馈验证是否值得持续开发。",
    reasons: [
      "你更关注能上线、能使用的具体产出，而不是只阅读概念。",
      "工具站适合从单页和单功能开始，开发范围容易控制。",
      "真实访问、使用次数和留资比主观判断更容易帮助你迭代。",
    ],
    directions: [
      {
        title: "AI 小工具站",
        description: "解决一个窄任务，例如标题优化、资料整理或脚本生成。",
        href: "/projects",
      },
      {
        title: "计算器或生成器",
        description: "把明确输入转换成可使用的结果，适合搜索需求验证。",
        href: "/projects/ai-niche-calculator-builder",
      },
      {
        title: "Prompt 工作台",
        description: "围绕固定人群提供模板、变量和结构化输出。",
        href: "/glossary/prompt-engineering",
      },
    ],
    avoid: [
      "第一版就做登录、团队协作、复杂后台和付费系统。",
      "只因为关键词有流量就做工具，没有确认用户是否需要结果。",
      "同时开发多个小工具，导致每个工具都没有真实使用数据。",
    ],
    learnFirst: ["提示词结构", "单页产品设计", "基础 SEO", "用户行为与反馈记录"],
    links: [
      { href: "/projects", title: "AI 项目库", description: "筛选适合做成工具站的项目方向。" },
      { href: "/learn", title: "AI 实战学习地图", description: "补齐应用原理和项目验证能力。" },
      { href: "/tutorials", title: "AI 实战教程", description: "先跑通一个可操作的最小闭环。" },
    ],
    plan: [
      "选择一个可以用一句话描述的高频任务，不做通用 AI 平台。",
      "访谈 3 位目标用户，确认他们现在如何完成任务、最慢的步骤是什么。",
      "画出输入、处理、输出三个环节，只保留一个核心结果。",
      "用静态页面或最小脚本做出可演示版本，不接复杂账号系统。",
      "让 5 位目标用户完成一次真实任务，记录中断位置和结果满意度。",
      "发布一个场景案例页，通过搜索、社群或直接邀请获得首批访问。",
      "根据使用次数、完成率和继续使用意愿决定迭代、缩小或停止。",
    ],
  },
  {
    id: "automation",
    code: "C",
    title: "自动化流程玩家",
    shortTitle: "自动化型",
    summary: "你适合把重复的信息搬运、整理和通知流程连接起来，先从自己每天都在做的任务开始。",
    reasons: [
      "自动化的价值容易用节省时间、减少遗漏和处理频次衡量。",
      "工作流可以逐步增加节点，不需要第一天就做完整系统。",
      "你可以先服务自己，再把稳定流程复制给相似团队。",
    ],
    directions: [
      {
        title: "AI 新闻总结流程",
        description: "聚合来源、去重、总结并推送到飞书、邮箱或表格。",
        href: "/glossary/agent",
      },
      {
        title: "资料自动整理",
        description: "把表单、网页或文档内容分类、提取并生成固定格式。",
        href: "/tutorials",
      },
      {
        title: "业务通知自动化",
        description: "连接邮箱、表格和团队协作工具，减少人工转发。",
        href: "/projects/dify",
      },
    ],
    avoid: [
      "为了展示复杂度堆叠过多节点，却没有明确节省什么。",
      "让自动化直接执行付款、删除或对外发送而没有人工确认。",
      "没有错误日志和失败提醒，就把流程交给真实业务使用。",
    ],
    learnFirst: ["工作流与 Agent 的区别", "工具调用", "结构化输出", "失败处理与人工确认"],
    links: [
      { href: "/glossary/agent", title: "AI Agent 是什么", description: "分清工作流、工具调用和自由规划。" },
      { href: "/tutorials", title: "AI 实战教程", description: "选择一个最小闭环开始操作。" },
      { href: "/projects", title: "AI 项目库", description: "查看 Dify、Flowise 等工作流方向。" },
    ],
    plan: [
      "记录一天中重复三次以上的信息整理、复制或通知任务。",
      "选择一个输入稳定、结果明确、失败风险低的流程。",
      "画出触发、处理、输出和人工确认四个环节。",
      "用现有自动化工具跑通手动触发版本，先不追求完全无人值守。",
      "准备 10 条真实样本，记录成功、失败和需要人工修改的情况。",
      "增加失败提醒和人工确认节点，计算实际节省时间。",
      "整理成一页流程说明，找一个相似用户验证是否愿意使用或付费配置。",
    ],
  },
  {
    id: "enterprise",
    code: "D",
    title: "企业服务型执行者",
    shortTitle: "企业服务型",
    summary: "你适合从行业资料、客户沟通和具体流程切入，先交付一个能衡量效果的小型企业场景。",
    reasons: [
      "企业服务的关键不是模型多新，而是是否理解真实流程和责任边界。",
      "行业经验或沟通能力能帮助你获得资料、反馈和试点机会。",
      "先卖诊断、试点或部署服务，比直接做通用 SaaS 更容易验证需求。",
    ],
    directions: [
      {
        title: "RAG 企业知识库",
        description: "围绕制度、说明书或行业资料做可引用的问答试点。",
        href: "/tutorials/rag-knowledge-base",
      },
      {
        title: "AI 客服与资料问答",
        description: "从高频问题、工单分流和回复草稿开始验证。",
        href: "/projects/dify",
      },
      {
        title: "内部流程改造",
        description: "选择一个部门的重复流程，先做小范围提效。",
        href: "/glossary/agent",
      },
    ],
    avoid: [
      "没有真实业务资料就承诺准确率和自动化效果。",
      "第一版覆盖多个部门、多个系统和复杂权限。",
      "忽略数据授权、引用来源和人工复核要求。",
    ],
    learnFirst: ["RAG 最小闭环", "Embedding 与检索", "企业数据权限", "试点指标设计"],
    links: [
      { href: "/glossary/rag", title: "RAG 是什么", description: "理解企业知识问答的核心流程。" },
      { href: "/glossary/embedding", title: "Embedding 是什么", description: "理解语义检索和普通搜索的区别。" },
      { href: "/tutorials/rag-knowledge-base", title: "RAG 知识库教程", description: "用真实文档验证最小问答闭环。" },
    ],
    plan: [
      "选择一个你能接触到的行业和一个资料密集的具体岗位。",
      "访谈 3 位业务人员，记录高频问题、查找耗时和错误成本。",
      "收集 5-20 份经过授权的脱敏资料，准备 10 个标准问题。",
      "使用现成工具建立最小知识库，要求答案附带来源。",
      "让业务人员盲测问题，记录正确、部分正确和无法回答的比例。",
      "整理一份试点报告，说明适用范围、风险和下一步成本。",
      "用报告确认客户是否愿意继续提供资料、扩大试点或购买实施服务。",
    ],
  },
  {
    id: "local-ai",
    code: "E",
    title: "本地 AI 折腾型玩家",
    shortTitle: "本地 AI 型",
    summary: "你适合从本机模型、开源界面和语音工作流入手，把部署过程沉淀成教程、模板或服务。",
    reasons: [
      "本地 AI 需要耐心处理模型、设备和部署问题，技术兴趣很重要。",
      "开源项目提供了可操作的起点，适合用真实设备比较效果和门槛。",
      "部署记录、故障清单和中文教程本身也能成为可交付资产。",
    ],
    directions: [
      {
        title: "Ollama + Open WebUI",
        description: "先跑通本地模型和聊天界面，再理解知识库接入。",
        href: "/tutorials/local-llm-with-ollama",
      },
      {
        title: "本地语音与虚拟人",
        description: "组合 ASR、TTS 和形象驱动，验证具体内容或服务场景。",
        href: "/learn#stage-5",
      },
      {
        title: "私有本地知识库",
        description: "围绕隐私资料做离线或私有环境问答。",
        href: "/projects/open-webui",
      },
    ],
    avoid: [
      "只追求最大模型，不记录设备是否能稳定运行。",
      "把本地运行等同于绝对安全，忽略权限、日志和接口暴露。",
      "同时安装大量项目，却没有跑通一个可以复现的完整流程。",
    ],
    learnFirst: ["Ollama 基础", "模型大小与设备资源", "本地接口", "RAG 与语音链路"],
    links: [
      { href: "/glossary/ollama", title: "Ollama 是什么", description: "理解本地模型工具的用途与限制。" },
      { href: "/tutorials/local-llm-with-ollama", title: "Ollama 入门教程", description: "先完成本机模型的最小闭环。" },
      { href: "/projects", title: "开源 AI 项目库", description: "查看 Open WebUI、AnythingLLM 等方向。" },
    ],
    plan: [
      "记录电脑系统、芯片、内存和可用磁盘空间。",
      "按官方文档安装 Ollama，选择一个较小模型完成首次对话。",
      "测试 5 个中文问题，记录速度、内存占用和回答质量。",
      "接入 Open WebUI 或同类界面，保存完整安装步骤与故障记录。",
      "选择聊天、知识库或语音中的一个场景，不同时展开多个方向。",
      "邀请一位非技术用户按文档复现，记录无法理解的步骤。",
      "整理成可重复教程或部署清单，再判断是否值得做服务或工具。",
    ],
  },
  {
    id: "learner",
    code: "F",
    title: "AI 学习打基础型",
    shortTitle: "学习基础型",
    summary: "你现在最需要的不是马上选一个复杂项目，而是建立概念地图，并完成一两个可操作的小实验。",
    reasons: [
      "先分清提示词、RAG、Agent 和本地模型，能减少盲目收藏工具。",
      "系统学习不等于只看资料，每个阶段都应该连接一个小产出。",
      "基础稳定后再选择项目，更容易判断自己的兴趣和能力缺口。",
    ],
    directions: [
      {
        title: "AI 学习地图",
        description: "按认识 AI、会用 AI、理解应用、Agent 和项目实战推进。",
        href: "/learn",
      },
      {
        title: "核心术语入门",
        description: "先理解 Prompt、RAG、Agent、Embedding 和 Ollama。",
        href: "/glossary",
      },
      {
        title: "一个最小实战教程",
        description: "选择本地模型或 RAG 知识库，完成一次真实操作。",
        href: "/tutorials",
      },
    ],
    avoid: [
      "同时学习几十个工具和课程，却没有任何可演示产出。",
      "因为不会代码就跳过概念理解和项目验证。",
      "把学习进度等同于项目可行性或收益可能。",
    ],
    learnFirst: ["LLM 与 Token", "提示词结构", "RAG 与 Agent 的区别", "一个实战闭环"],
    links: [
      { href: "/learn", title: "AI 实战学习地图", description: "找到当前阶段和下一步行动。" },
      { href: "/glossary", title: "AI 术语库", description: "用普通人能理解的语言补概念。" },
      { href: "/tutorials", title: "AI 实战教程", description: "把概念连接到一次真实操作。" },
    ],
    plan: [
      "打开学习地图，判断自己处于认识 AI、会用 AI 还是理解应用阶段。",
      "学习 LLM、Token、Prompt 和 Context Window，并各写一句自己的解释。",
      "用结构化提示词完成一个真实任务，记录输入和结果差异。",
      "阅读 RAG、Agent 和 Ollama 词条，写出三者分别解决什么问题。",
      "从教程区选择一个最小实验，不要求一次掌握全部技术。",
      "把实验过程整理成步骤、问题和结果，确认自己更喜欢内容、工具还是部署。",
      "根据实际体验重新测试机会匹配器，只选择一个方向继续四周。",
    ],
  },
];

type ScoreMap = Record<MatcherProfileId, number>;

const emptyScores = (): ScoreMap => ({
  content: 0,
  "tool-builder": 0,
  automation: 0,
  enterprise: 0,
  "local-ai": 0,
  learner: 0,
});

const optionWeights: {
  [Key in keyof MatcherAnswers]: Record<MatcherAnswers[Key], Partial<ScoreMap>>;
} = {
  technical: {
    none: { content: 3, learner: 5, enterprise: 1 },
    guided: { content: 2, learner: 3, automation: 2, "local-ai": 2, "tool-builder": 1 },
    basic: { "tool-builder": 5, automation: 4, "local-ai": 3, enterprise: 2 },
    experienced: { "tool-builder": 5, "local-ai": 5, automation: 4, enterprise: 4 },
  },
  time: {
    "under-30": { content: 4, learner: 4 },
    "one-hour": { content: 3, learner: 3, "tool-builder": 1, automation: 1 },
    "two-three": { "tool-builder": 4, automation: 4, enterprise: 3, "local-ai": 3 },
    "over-three": { "tool-builder": 4, enterprise: 4, "local-ai": 4, automation: 3 },
  },
  interest: {
    content: { content: 8, learner: 1 },
    website: { "tool-builder": 8, content: 1 },
    automation: { automation: 8, enterprise: 2 },
    enterprise: { enterprise: 8, automation: 2 },
    "local-ai": { "local-ai": 8, learner: 1 },
  },
  budget: {
    zero: { content: 4, learner: 4, "tool-builder": 1 },
    "under-100": { content: 3, learner: 2, "tool-builder": 2, automation: 1 },
    operating: { "tool-builder": 4, automation: 4, enterprise: 3, "local-ai": 3 },
    "long-term": { enterprise: 5, "local-ai": 4, "tool-builder": 4, automation: 3 },
  },
  strength: {
    writing: { content: 8, learner: 2 },
    scouting: { content: 5, "tool-builder": 2, learner: 2, "local-ai": 1 },
    technical: { "local-ai": 6, "tool-builder": 5, automation: 5 },
    sales: { enterprise: 8, content: 1 },
    industry: { enterprise: 8, automation: 2, content: 1 },
  },
  goal: {
    audience: { content: 9 },
    website: { "tool-builder": 9 },
    service: { enterprise: 9, automation: 3 },
    "long-term": { "tool-builder": 4, enterprise: 4, "local-ai": 4, automation: 3, content: 1 },
    learn: { learner: 10 },
  },
};

function addWeights(scores: ScoreMap, weights: Partial<ScoreMap>) {
  for (const [profileId, value] of Object.entries(weights) as Array<[MatcherProfileId, number]>) {
    scores[profileId] += value;
  }
}

export type MatcherRankedProfile = {
  profile: MatcherProfile;
  rawScore: number;
  matchScore: number;
};

export function rankMatcherProfiles(answers: MatcherAnswers): MatcherRankedProfile[] {
  const scores = emptyScores();

  for (const key of Object.keys(answers) as Array<keyof MatcherAnswers>) {
    const answer = answers[key];
    const weights = optionWeights[key][answer as never] as Partial<ScoreMap>;
    addWeights(scores, weights);
  }

  const lowTechnical = answers.technical === "none" || answers.technical === "guided";
  const technicalReady = answers.technical === "basic" || answers.technical === "experienced";

  if (lowTechnical && (answers.interest === "content" || answers.goal === "audience")) {
    scores.content += 5;
  }
  if (technicalReady && (answers.interest === "website" || answers.goal === "website")) {
    scores["tool-builder"] += 5;
  }
  if (answers.interest === "automation" && answers.technical !== "none") {
    scores.automation += 5;
  }
  if (
    (answers.strength === "sales" || answers.strength === "industry") &&
    answers.goal === "service"
  ) {
    scores.enterprise += 6;
  }
  if (answers.interest === "local-ai" && answers.strength === "technical") {
    scores["local-ai"] += 6;
  }
  if (answers.goal === "learn" && lowTechnical) {
    scores.learner += 6;
  }

  return matcherProfiles
    .map((profile) => ({
      profile,
      rawScore: scores[profile.id],
      matchScore: Math.min(96, 58 + scores[profile.id]),
    }))
    .sort((a, b) => b.rawScore - a.rawScore);
}

export function getAnswerLabel<Key extends keyof MatcherAnswers>(
  key: Key,
  value: MatcherAnswers[Key],
): string {
  const question = matcherQuestions.find((item) => item.key === key);
  return question?.options.find((option) => option.value === value)?.label ?? value;
}

export function buildMatcherCopyText(
  profile: MatcherProfile,
  secondary: MatcherProfile,
  answers: MatcherAnswers,
): string {
  return [
    `AI机会匹配器结果：${profile.title}`,
    `次推荐：${secondary.title}`,
    "",
    `我的基础：${getAnswerLabel("technical", answers.technical)}`,
    `每日时间：${getAnswerLabel("time", answers.time)}`,
    `兴趣方向：${getAnswerLabel("interest", answers.interest)}`,
    `当前目标：${getAnswerLabel("goal", answers.goal)}`,
    "",
    "推荐方向：",
    ...profile.directions.map((item, index) => `${index + 1}. ${item.title}：${item.description}`),
    "",
    "7 天行动计划：",
    ...profile.plan.map((item, index) => `第 ${index + 1} 天：${item}`),
    "",
    "测试结果仅用于项目方向参考，不构成收益承诺。",
  ].join("\n");
}
