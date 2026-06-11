export type GlossarySlug =
  | "rag"
  | "agent"
  | "ollama"
  | "prompt-engineering"
  | "embedding";

export type TutorialSlug = "local-llm-with-ollama" | "rag-knowledge-base";

export type LearningLink = {
  href: string;
  title: string;
  description: string;
  label: string;
};

export type LearningStage = {
  id: string;
  stage: string;
  title: string;
  summary: string;
  why: string;
  topics: string[];
  opportunities: string[];
  next: LearningLink;
};

export const learningStages: LearningStage[] = [
  {
    id: "stage-1",
    stage: "阶段 01",
    title: "认识 AI",
    summary: "先理解 LLM、Token、Prompt 和上下文窗口，不需要先学数学或训练模型。",
    why: "这些概念决定了 AI 能读多少内容、为什么会答错，以及你该怎样给它任务。",
    topics: ["LLM", "Token", "Prompt", "Context Window"],
    opportunities: ["AI 工具测评", "提示词模板", "垂直场景内容", "AI 入门服务"],
    next: {
      href: "/glossary/prompt-engineering",
      title: "先学提示词工程",
      description: "用结构化方式把任务说清楚。",
      label: "进入第一课",
    },
  },
  {
    id: "stage-2",
    stage: "阶段 02",
    title: "会用 AI",
    summary: "把 AI 用到写作、搜索、办公和资料整理中，形成可重复的工作方法。",
    why: "只有把一次对话变成稳定流程，AI 才能真正节省时间，并成为可交付的服务。",
    topics: ["提示词", "AI 写作", "AI 搜索", "AI 办公"],
    opportunities: ["内容工作流", "行业模板包", "研究助手", "企业内训"],
    next: {
      href: "/projects/ai-youtube-shorts-script-generator",
      title: "看一个内容工具项目",
      description: "理解提示词如何连接到真实产品。",
      label: "查看项目",
    },
  },
  {
    id: "stage-3",
    stage: "阶段 03",
    title: "理解 AI 应用",
    summary: "理解 RAG、Embedding、向量数据库和函数调用，知道应用怎样连接私有资料与外部工具。",
    why: "大多数企业 AI 项目不是重新训练模型，而是让模型找到正确资料并接入现有业务。",
    topics: ["RAG", "Embedding", "Vector Database", "Function Calling"],
    opportunities: ["企业知识库", "PDF 问答", "行业资料助手", "智能客服"],
    next: {
      href: "/tutorials/rag-knowledge-base",
      title: "跑通 RAG 最小闭环",
      description: "先用现成工具理解文档问答流程。",
      label: "开始教程",
    },
  },
  {
    id: "stage-4",
    stage: "阶段 04",
    title: "学会 AI Agent",
    summary: "让 AI 不只回答问题，还能调用工具、拆分任务并执行工作流。",
    why: "Agent 的价值不在于更像人，而在于能连接邮件、表格、搜索和企业流程完成任务。",
    topics: ["工具调用", "工作流", "自动化", "MCP"],
    opportunities: ["AI 客服", "新闻整理", "报告生成", "流程助手"],
    next: {
      href: "/glossary/agent",
      title: "理解 AI Agent",
      description: "分清聊天机器人、工作流和 Agent。",
      label: "查看概念",
    },
  },
  {
    id: "stage-5",
    stage: "阶段 05",
    title: "做 AI 项目",
    summary: "选择一个具体人群和高频问题，用 7 天做出能演示、能访谈、能验证的最小版本。",
    why: "学会概念不等于项目成立。真实反馈、使用频次和付费意愿才决定是否继续投入。",
    topics: ["知识库", "客服", "内容工具", "本地助手"],
    opportunities: ["垂直 SaaS", "部署服务", "模板产品", "顾问与培训"],
    next: {
      href: "/projects",
      title: "选择一个项目验证",
      description: "按门槛、竞争和商业化潜力筛选方向。",
      label: "进入项目库",
    },
  },
];

export const learningAudiences = [
  { title: "AI 小白", description: "先建立概念地图，不被工具名称和技术术语带着走。" },
  { title: "内容创作者", description: "把提示词、搜索和自动化变成稳定的内容生产流程。" },
  { title: "独立开发者", description: "理解 RAG、Agent 与本地模型，缩短项目选型时间。" },
  { title: "中小企业老板", description: "先判断哪些流程适合 AI，再决定采购、外包或自建。" },
  { title: "想做 AI 副业的人", description: "从小服务和最小验证开始，不用先做完整平台。" },
];

export type GlossaryCatalogTerm = {
  name: string;
  explanation: string;
  projectUse: string;
  href: string;
  hasDetail: boolean;
};

export type GlossaryCategory = {
  title: string;
  description: string;
  terms: GlossaryCatalogTerm[];
};

export const glossaryCategories: GlossaryCategory[] = [
  {
    title: "基础概念",
    description: "先理解模型怎样接收、处理和输出信息。",
    terms: [
      {
        name: "LLM",
        explanation: "能理解和生成文字的大语言模型，是多数生成式 AI 应用的核心。",
        projectUse: "聊天助手、内容工具、知识问答",
        href: "/learn#stage-1",
        hasDetail: false,
      },
      {
        name: "Token",
        explanation: "模型处理文字时使用的基本单位，会影响上下文长度和调用成本。",
        projectUse: "成本估算、长文处理、模型选型",
        href: "/learn#stage-1",
        hasDetail: false,
      },
      {
        name: "Prompt",
        explanation: "你交给 AI 的任务说明、背景、约束和输出要求。",
        projectUse: "写作、分析、客服、自动化",
        href: "/glossary/prompt-engineering",
        hasDetail: true,
      },
      {
        name: "Context Window",
        explanation: "模型一次能参考的信息范围，不等于它会永久记住所有内容。",
        projectUse: "长文总结、对话记忆、资料问答",
        href: "/learn#stage-1",
        hasDetail: false,
      },
    ],
  },
  {
    title: "应用技术",
    description: "让模型连接资料、检索系统和业务工具。",
    terms: [
      {
        name: "RAG",
        explanation: "让 AI 先从指定资料中检索相关内容，再根据资料回答。",
        projectUse: "企业知识库、PDF 问答、客服",
        href: "/glossary/rag",
        hasDetail: true,
      },
      {
        name: "Embedding",
        explanation: "把文字转换成可比较语义相似度的数字表示。",
        projectUse: "文档检索、推荐、相似问题匹配",
        href: "/glossary/embedding",
        hasDetail: true,
      },
      {
        name: "Vector Database",
        explanation: "专门保存和查找向量的数据系统，常用于语义检索。",
        projectUse: "知识库、商品推荐、内容搜索",
        href: "/learn#stage-3",
        hasDetail: false,
      },
      {
        name: "Function Calling",
        explanation: "让模型按规定格式选择并调用你提供的函数或接口。",
        projectUse: "查订单、发通知、创建工单",
        href: "/glossary/agent",
        hasDetail: false,
      },
    ],
  },
  {
    title: "Agent 方向",
    description: "从一次回答升级到能执行步骤和调用工具的系统。",
    terms: [
      {
        name: "AI Agent",
        explanation: "能根据目标规划步骤、调用工具并返回结果的 AI 助手。",
        projectUse: "邮件助手、报告生成、企业流程",
        href: "/glossary/agent",
        hasDetail: true,
      },
      {
        name: "Workflow",
        explanation: "把多个固定步骤连接起来，适合稳定、可预测的业务流程。",
        projectUse: "内容流水线、线索分发、客服分流",
        href: "/learn#stage-4",
        hasDetail: false,
      },
      {
        name: "MCP",
        explanation: "一种让 AI 应用以统一方式连接数据和工具的开放协议。",
        projectUse: "工具集成、桌面助手、开发者产品",
        href: "/learn#stage-4",
        hasDetail: false,
      },
      {
        name: "Tool Calling",
        explanation: "模型根据任务选择搜索、数据库、邮件等外部工具。",
        projectUse: "自动化助手、客服、数据查询",
        href: "/glossary/agent",
        hasDetail: false,
      },
    ],
  },
  {
    title: "本地 AI",
    description: "在自己的电脑或私有环境中运行和管理模型。",
    terms: [
      {
        name: "Ollama",
        explanation: "帮助你在 Mac、Windows 或 Linux 上下载并运行本地模型。",
        projectUse: "本地聊天、私有知识库、离线助手",
        href: "/glossary/ollama",
        hasDetail: true,
      },
      {
        name: "LM Studio",
        explanation: "带图形界面的本地模型管理与测试工具。",
        projectUse: "模型试用、本地 API、原型验证",
        href: "/tutorials/local-llm-with-ollama",
        hasDetail: false,
      },
      {
        name: "本地模型",
        explanation: "模型文件和推理过程主要运行在自己的设备上。",
        projectUse: "隐私场景、离线使用、低频测试",
        href: "/tutorials/local-llm-with-ollama",
        hasDetail: false,
      },
      {
        name: "GPU / CPU",
        explanation: "运行模型所依赖的计算硬件，会直接影响速度和可运行模型大小。",
        projectUse: "设备评估、部署报价、性能优化",
        href: "/glossary/ollama",
        hasDetail: false,
      },
    ],
  },
  {
    title: "多模态",
    description: "让 AI 处理文字之外的声音、图片和视频。",
    terms: [
      {
        name: "ASR",
        explanation: "把语音转换成文字，例如会议转写和字幕生成。",
        projectUse: "会议纪要、字幕、客服质检",
        href: "/learn#stage-5",
        hasDetail: false,
      },
      {
        name: "TTS",
        explanation: "把文字合成为语音，可用于配音和语音助手。",
        projectUse: "虚拟主播、有声内容、语音客服",
        href: "/learn#stage-5",
        hasDetail: false,
      },
      {
        name: "Whisper",
        explanation: "常见的开源语音识别模型，适合转写和字幕场景。",
        projectUse: "播客整理、视频字幕、访谈转写",
        href: "/learn#stage-5",
        hasDetail: false,
      },
      {
        name: "Vision",
        explanation: "让模型理解图片、截图、图表或视频画面中的信息。",
        projectUse: "图片分析、质检、视觉问答",
        href: "/learn#stage-5",
        hasDetail: false,
      },
    ],
  },
];

export type GlossaryDetail = {
  slug: GlossarySlug;
  title: string;
  seoTitle: string;
  seoDescription: string;
  oneLine: string;
  plainLanguage: string[];
  solves: string[];
  coreParts?: { title: string; description: string }[];
  strengths?: string[];
  limitations?: string[];
  projectIdeas: string[];
  notFor: string[];
  examples?: { title: string; content: string }[];
  nextSteps: LearningLink[];
  projectSlugs: string[];
};

export const glossaryDetails: GlossaryDetail[] = [
  {
    slug: "rag",
    title: "RAG 是什么",
    seoTitle: "RAG 是什么｜普通人也能看懂的 AI 知识库原理",
    seoDescription: "用小白语言解释 RAG、向量数据库、Embedding 和 AI知识库问答，拆解它适合做哪些 AI 项目。",
    oneLine: "让 AI 先查资料，再根据找到的资料回答问题。",
    plainLanguage: [
      "普通聊天模型像一个读过很多书、但不一定看过你公司资料的人。RAG 会在回答前，先从你指定的文档里找出最相关的几段内容。",
      "找到资料后，系统把问题和资料一起交给模型。模型不是凭空猜，而是尽量围绕这些内容组织答案。",
      "RAG 不等于把文档永久训练进模型。它更像给模型配了一个会搜索的资料柜，资料更新后可以重新索引。",
    ],
    solves: [
      "模型不了解企业内部制度、产品手册和私有文档。",
      "直接把整份长文交给模型，容易超出上下文并增加成本。",
      "用户希望答案带出处，能回到原文继续核对。",
      "知识经常更新，不适合每次都重新训练模型。",
    ],
    coreParts: [
      { title: "准备与切分文档", description: "把 PDF、网页或文档拆成大小合适、语义完整的小段。" },
      { title: "生成 Embedding", description: "把问题和文档片段转成可比较语义相似度的数字。" },
      { title: "向量检索", description: "从资料库中找出最接近当前问题的内容片段。" },
      { title: "让 LLM 回答", description: "把检索结果作为参考资料，并要求模型说明依据。" },
    ],
    projectIdeas: ["企业文档问答", "PDF 知识库", "法务、金融或制造资料助手", "客服机器人", "本地知识库"],
    notFor: [
      "资料本身混乱、过期，却希望系统自动得到准确答案的人。",
      "没有明确知识范围，只想做一个什么都能回答的通用机器人。",
      "无法接受人工评测、权限管理和持续维护的团队。",
    ],
    nextSteps: [
      {
        href: "/glossary/embedding",
        title: "Embedding 是什么",
        description: "理解语义检索为什么能找到意思相近的内容。",
        label: "继续学概念",
      },
      {
        href: "/tutorials/rag-knowledge-base",
        title: "RAG 知识库入门教程",
        description: "用七个步骤跑通最小文档问答闭环。",
        label: "开始实战",
      },
      {
        href: "/glossary/ollama",
        title: "Ollama 是什么",
        description: "了解怎样把本地模型接到知识库场景。",
        label: "了解本地 AI",
      },
    ],
    projectSlugs: ["ragflow", "anythingllm", "open-webui"],
  },
  {
    slug: "agent",
    title: "AI Agent 是什么",
    seoTitle: "AI Agent 是什么｜从聊天机器人到会干活的 AI 助手",
    seoDescription: "解释 AI Agent、工具调用、工作流和自动化任务，适合想理解 AI Agent 项目机会的新手。",
    oneLine: "不只是聊天，而是能根据目标调用工具、执行步骤并交付结果。",
    plainLanguage: [
      "ChatBot 的核心是回答。Agent 的核心是完成任务：它可能先搜索资料，再读取表格，最后生成报告并交给你确认。",
      "普通人可以把 Agent 理解成一个会使用数字工具的助理，但它仍需要明确权限、任务边界和失败处理。",
      "并不是步骤越自由越好。稳定业务通常更适合固定工作流，只在需要判断的环节交给模型。",
    ],
    solves: [
      "任务需要在多个工具之间复制、整理和转交信息。",
      "重复工作包含少量判断，无法只靠传统规则自动化。",
      "用户需要最终结果，而不是一段建议或一篇回答。",
      "团队希望把搜索、邮件、表格和内部系统连接起来。",
    ],
    coreParts: [
      { title: "LLM", description: "理解目标、判断下一步，并生成工具需要的参数。" },
      { title: "工具调用", description: "连接搜索、数据库、邮件、日历或业务接口。" },
      { title: "任务规划", description: "把较大的目标拆成可执行步骤，并根据结果调整。" },
      { title: "记忆", description: "保留当前任务状态或经过授权的历史偏好。" },
      { title: "工作流", description: "限制执行顺序、权限和失败后的处理方式。" },
    ],
    projectIdeas: ["AI 客服", "自动整理新闻", "自动回复邮件草稿", "自动生成报告", "企业流程助手"],
    notFor: [
      "任务本身没有明确完成标准，只希望 Agent 自由发挥。",
      "涉及付款、删除或对外发送，却没有人工确认机制。",
      "希望一次搭建后永远不维护工具权限和接口的人。",
    ],
    nextSteps: [
      {
        href: "/glossary/prompt-engineering",
        title: "提示词工程是什么",
        description: "先学会定义目标、约束和输出格式。",
        label: "补基础",
      },
      {
        href: "/projects/dify",
        title: "Dify 项目拆解",
        description: "看可视化工作流怎样连接到企业交付。",
        label: "查看项目",
      },
      {
        href: "/tutorials",
        title: "AI 实战教程",
        description: "从一个可控的小闭环开始。",
        label: "选择教程",
      },
    ],
    projectSlugs: ["dify", "flowise", "open-webui"],
  },
  {
    slug: "ollama",
    title: "Ollama 是什么",
    seoTitle: "Ollama 是什么｜本地运行大模型的新手入门",
    seoDescription: "解释 Ollama、本地大模型、Mac/Windows 本地部署和适合普通人的 AI 项目场景。",
    oneLine: "一个帮助你在自己电脑上下载、运行和调用大模型的工具。",
    plainLanguage: [
      "云端聊天工具把模型运行在服务商的服务器上。Ollama 则把模型文件下载到本机，并提供命令行和本地接口供其他应用使用。",
      "它降低了本地模型试用门槛，但不代表任何电脑都能流畅运行大模型。模型大小、内存和芯片都会影响体验。",
      "Ollama 更适合学习、原型和隐私敏感的小范围场景。企业正式部署还需要考虑权限、备份、监控和运维。",
    ],
    solves: [
      "希望在本机测试开源模型，不把每次对话发到第三方云端。",
      "需要离线演示或在网络不稳定环境中使用基础模型能力。",
      "开发者要用统一的本地接口测试聊天、RAG 或 Agent 原型。",
    ],
    strengths: ["资料和模型主要保留在本机", "低频测试没有按次 API 费用", "可离线运行", "方便比较多个开源模型"],
    limitations: ["电脑性能直接影响速度", "模型越大越吃内存和存储", "中文效果取决于模型", "部署和故障排查仍有门槛"],
    projectIdeas: ["本地知识库", "AI 桌面助手", "AI 虚拟主播", "私有客服助手"],
    notFor: [
      "设备内存有限，却希望直接运行超大模型的人。",
      "需要大量用户同时访问，但没有服务器运维能力的团队。",
      "只想获得最好效果，不愿比较模型和调整部署的人。",
    ],
    nextSteps: [
      {
        href: "/tutorials/local-llm-with-ollama",
        title: "用 Ollama 本地运行大模型",
        description: "按准备、安装、选模型和测试四步跑通。",
        label: "开始教程",
      },
      {
        href: "/tutorials/rag-knowledge-base",
        title: "连接到本地知识库",
        description: "理解本地模型怎样参与文档问答。",
        label: "继续实战",
      },
      {
        href: "/projects/open-webui",
        title: "Open WebUI 项目拆解",
        description: "查看本地模型界面与企业部署机会。",
        label: "查看项目",
      },
    ],
    projectSlugs: ["open-webui", "anythingllm"],
  },
  {
    slug: "prompt-engineering",
    title: "提示词工程是什么",
    seoTitle: "提示词工程是什么｜普通人如何写出更好 AI 指令",
    seoDescription: "解释 Prompt Engineering 的核心方法、常见模板和在 AI 写作、工具调用、项目验证中的应用。",
    oneLine: "提示词不是玄学，而是把任务、背景、约束和结果标准表达清楚。",
    plainLanguage: [
      "AI 不知道你脑中的目标。只说“帮我写一个文案”，它只能猜受众、渠道、语气和长度。",
      "好的提示词不是越长越好，而是让模型知道要为谁解决什么问题、不能做什么、最后按什么格式交付。",
      "如果任务会重复，应该把提示词变成模板，并用真实案例持续检查输出质量。",
    ],
    solves: [
      "同一个任务每次输出风格和结构都不稳定。",
      "模型回答看起来正确，却不符合真实业务限制。",
      "团队成员各自使用 AI，无法复用有效方法。",
      "Agent 或工作流需要稳定、可解析的结构化输出。",
    ],
    coreParts: [
      { title: "角色", description: "说明模型以什么视角工作，但不要用角色代替真实要求。" },
      { title: "目标", description: "写清楚最终要完成的任务和判断成功的标准。" },
      { title: "背景", description: "提供受众、产品、渠道和现有资料。" },
      { title: "约束", description: "明确长度、禁用表达、事实边界和风险要求。" },
      { title: "输出格式", description: "规定表格、列表、JSON 或固定段落结构。" },
      { title: "示例", description: "用少量好例子告诉模型什么结果可以接受。" },
    ],
    projectIdeas: ["X 文案与短视频脚本", "AI 项目分析", "网页内容生成", "用户调研整理", "客服回复草稿"],
    notFor: [
      "希望一个提示词在所有模型、所有场景中永远有效的人。",
      "没有事实资料，却要求模型生成可靠行业结论的人。",
      "把提示词包装成收益保证或不可验证秘诀的人。",
    ],
    examples: [
      {
        title: "写 X 文案",
        content: "目标：把下面的产品更新改写成 3 条中文 X 帖子。受众：独立开发者。约束：每条只讲一个变化，不夸大效果。输出：正文 + 一句可验证的行动建议。",
      },
      {
        title: "分析 AI 项目",
        content: "基于我提供的用户访谈，列出高频痛点、当前替代方案和付费信号。没有证据的判断标记为“待验证”，最后给出一个 7 天最小实验。",
      },
      {
        title: "做用户调研",
        content: "为小型电商卖家设计 8 个开放式访谈问题。不要推销产品，重点了解现有流程、耗时、失败成本和是否为替代方案付过费。",
      },
    ],
    nextSteps: [
      {
        href: "/learn#stage-2",
        title: "进入会用 AI 阶段",
        description: "把一次提示词变成可重复的工作方法。",
        label: "继续学习",
      },
      {
        href: "/projects/ai-youtube-shorts-script-generator",
        title: "短视频脚本项目",
        description: "看提示词如何连接高频内容场景。",
        label: "查看项目",
      },
      {
        href: "/glossary/agent",
        title: "AI Agent 是什么",
        description: "理解提示词在工具调用和工作流中的作用。",
        label: "学习进阶",
      },
    ],
    projectSlugs: ["ai-youtube-shorts-script-generator", "ai-seo-brief-generator", "dify"],
  },
  {
    slug: "embedding",
    title: "Embedding 是什么",
    seoTitle: "Embedding 是什么｜RAG 和向量数据库背后的核心概念",
    seoDescription: "用小白语言解释 Embedding、语义搜索、向量数据库和 AI 知识库的关系。",
    oneLine: "把文字变成一组数字，让系统能比较两段内容在意思上有多接近。",
    plainLanguage: [
      "电脑很难直接判断“怎么退款”和“退货后多久返钱”意思相近。Embedding 会把两句话转换成数字位置，让相似含义在数学空间里更接近。",
      "用户提问时，系统也会生成一个 Embedding，再去向量数据库里寻找距离最近的文档片段。",
      "Embedding 负责找资料，不负责写最终答案。RAG 通常把它找到的内容再交给 LLM 组织回答。",
    ],
    solves: [
      "用户用词和文档关键词不同，普通关键词搜索找不到结果。",
      "需要从大量文本中快速找到语义相近的段落。",
      "需要做相似问题匹配、内容推荐或重复内容检测。",
    ],
    coreParts: [
      { title: "普通搜索", description: "更依赖字面关键词，适合型号、编号和精确名称。" },
      { title: "语义搜索", description: "关注表达的意思，适合自然语言问题和近义表达。" },
      { title: "组合使用", description: "真实项目常把关键词、语义检索和业务筛选条件一起使用。" },
    ],
    projectIdeas: ["文档检索", "相似问题匹配", "商品推荐", "企业知识库"],
    notFor: [
      "只需要精确查找订单号、身份证号或固定编码的场景。",
      "数据量很小，用普通搜索就能稳定解决的问题。",
      "希望只靠 Embedding 自动消除模型幻觉的团队。",
    ],
    nextSteps: [
      {
        href: "/glossary/rag",
        title: "RAG 是什么",
        description: "把语义检索连接到完整知识库流程。",
        label: "继续学习",
      },
      {
        href: "/tutorials/rag-knowledge-base",
        title: "RAG 知识库入门教程",
        description: "理解切分、检索和生成的最小闭环。",
        label: "开始实战",
      },
      {
        href: "/projects/ragflow",
        title: "RAGFlow 项目拆解",
        description: "查看复杂文档问答的项目机会。",
        label: "查看项目",
      },
    ],
    projectSlugs: ["ragflow", "anythingllm"],
  },
];

export type TutorialCard = {
  title: string;
  description: string;
  href: string;
  category: string;
  difficulty: string;
  audience: string;
  outcome: string;
  relatedProject: string;
};

export const tutorialCards: TutorialCard[] = [
  {
    title: "用 Ollama 本地运行大模型",
    description: "从设备准备、安装到选择小模型，先在自己的电脑上跑通一次对话。",
    href: "/tutorials/local-llm-with-ollama",
    category: "本地 AI",
    difficulty: "小白入门",
    audience: "想体验本地模型的人",
    outcome: "完成一次本地模型对话",
    relatedProject: "Open WebUI",
  },
  {
    title: "RAG 知识库入门教程",
    description: "不急着写代码，先理解文档切分、检索、引用和回答的完整流程。",
    href: "/tutorials/rag-knowledge-base",
    category: "RAG 知识库",
    difficulty: "小白入门",
    audience: "企业资料多、想做问答的人",
    outcome: "验证一个文档问答场景",
    relatedProject: "RAGFlow",
  },
  {
    title: "用 AI 自动生成短视频脚本",
    description: "从一个垂直主题开始，建立开场、正文和行动建议的提示词模板。",
    href: "/projects/ai-youtube-shorts-script-generator",
    category: "内容生成",
    difficulty: "小白入门",
    audience: "短视频和内容创作者",
    outcome: "做出可连续测试的脚本模板",
    relatedProject: "AI Shorts Script Generator",
  },
  {
    title: "用 AI 做项目验证",
    description: "把用户访谈、竞品记录和 7 天实验放进同一套验证框架。",
    href: "/templates/ai-project-validation-template",
    category: "AI 工具站",
    difficulty: "小白入门",
    audience: "独立开发者和副业探索者",
    outcome: "完成一份项目验证记录",
    relatedProject: "AI 项目库",
  },
];

export type TutorialDetail = {
  slug: TutorialSlug;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  audience: string[];
  preparation: string[];
  steps: { title: string; description: string; note?: string }[];
  commonProblems: { title: string; solution: string }[];
  nextProjects: LearningLink[];
  caution: string;
};

export const tutorialDetails: TutorialDetail[] = [
  {
    slug: "local-llm-with-ollama",
    title: "用 Ollama 本地运行大模型",
    seoTitle: "用 Ollama 本地运行大模型｜Mac 和 Windows 新手入门",
    seoDescription: "小白友好的 Ollama 本地大模型入门教程，解释安装思路、模型选择、常见问题和适合做的 AI 项目。",
    summary: "这份教程的目标不是追求最大模型，而是先完成“安装工具、选择小模型、发出第一条消息”的最小闭环。",
    audience: ["想在 Mac 或 Windows 上体验本地模型的人", "关注隐私或离线使用的人", "准备做本地知识库原型的独立开发者"],
    preparation: [
      "确认操作系统和剩余磁盘空间，模型文件通常需要额外存储。",
      "了解设备内存。内存越有限，越应该从参数更小、量化程度更高的模型开始。",
      "接受本地效果和速度可能不如成熟云端产品，第一步只验证能否稳定运行。",
    ],
    steps: [
      {
        title: "安装 Ollama",
        description: "进入 Ollama 官方网站，选择对应操作系统的安装方式。安装入口和系统要求可能更新，应以官方文档为准。",
      },
      {
        title: "选择一个小模型",
        description: "先看官方模型库中的大小、语言说明和设备要求。第一次不要盲目下载最大模型，先跑通再比较效果。",
      },
      {
        title: "运行模型",
        description: "基础思路是使用 `ollama run <model-name>` 启动模型。模型名称请从当前官方模型库复制，不要依赖过时教程。",
        note: "下载时间取决于模型大小和网络。运行前先确认磁盘空间。",
      },
      {
        title: "测试是否成功",
        description: "先问一个短问题，再测试一段中文总结。能稳定返回内容，就完成了第一个本地闭环。",
      },
      {
        title: "记录设备与模型表现",
        description: "记录首字等待时间、回答速度、中文效果和内存占用，为下一次选型留下依据。",
      },
    ],
    commonProblems: [
      { title: "速度很慢", solution: "换更小的模型、减少上下文长度，并关闭占用大量内存的其他应用。" },
      { title: "模型太大", solution: "删除暂时不用的模型，优先选择更小或更高量化版本。" },
      { title: "中文效果一般", solution: "比较模型说明和社区评测，用自己的真实问题测试，不只看英文榜单。" },
      { title: "端口占用", solution: "先确认是否已有 Ollama 或其他本地服务运行，再按官方排错文档调整。" },
    ],
    nextProjects: [
      {
        href: "/projects/open-webui",
        title: "本地聊天界面",
        description: "把模型接到 Open WebUI，理解可交付界面与权限需求。",
        label: "查看项目",
      },
      {
        href: "/tutorials/rag-knowledge-base",
        title: "本地知识库",
        description: "让模型围绕指定文档回答，而不是只依靠通用知识。",
        label: "继续教程",
      },
      {
        href: "/projects/anythingllm",
        title: "企业资料助手",
        description: "查看中小团队知识库的最小交付路径。",
        label: "查看机会",
      },
    ],
    caution: "本地运行不自动等于绝对安全。仍需管理文件权限、日志、模型来源和对外开放的接口。",
  },
  {
    slug: "rag-knowledge-base",
    title: "RAG 知识库入门教程",
    seoTitle: "RAG知识库入门教程｜普通人如何理解和验证 AI 文档问答",
    seoDescription: "解释 RAG 知识库的最小实现路径，帮助普通人理解 PDF问答、企业资料助手和本地知识库项目。",
    summary: "第一版不要求你写代码。先用一小组真实文档和问题，验证系统能否找到正确资料、给出引用并减少人工查找时间。",
    audience: ["需要整理公司制度或产品资料的团队", "想做 PDF 问答或行业助手的人", "准备评估 AnythingLLM、RAGFlow 或 Open WebUI 的人"],
    preparation: [
      "选择 5-20 份结构相对清晰、允许用于测试的文档。",
      "写出 10 个业务人员真实会问的问题，并准备可核对的标准答案。",
      "先定义成功标准，例如答案正确、引用来源可打开、平均查找时间下降。",
    ],
    steps: [
      { title: "1. 准备文档", description: "优先使用最新、结构清楚的制度、说明书或 FAQ，不要一开始导入整个网盘。" },
      { title: "2. 切分文本", description: "把长文拆成语义完整的小段。过大不容易命中，过小又会失去上下文。" },
      { title: "3. 生成 Embedding", description: "把文档片段转换成可比较语义相似度的数字表示。" },
      { title: "4. 存入向量数据库", description: "保存向量、原文和来源信息，方便后续按问题检索。" },
      { title: "5. 用户提问", description: "把自然语言问题转换成检索请求，而不是直接让模型凭记忆回答。" },
      { title: "6. 检索相关内容", description: "找出最接近问题的几个片段，并根据权限、时间或文档类型过滤。" },
      { title: "7. 交给 LLM 回答", description: "要求模型只根据找到的资料回答，信息不足时明确说不知道，并附上来源。" },
    ],
    commonProblems: [
      { title: "文档质量差", solution: "先删除过期、重复和扫描失败的资料，再讨论模型效果。" },
      { title: "切分不合理", solution: "围绕标题、段落和业务单元切分，用评测问题反复检查命中内容。" },
      { title: "模型幻觉", solution: "限制回答依据，要求引用来源，并允许系统在资料不足时拒答。" },
      { title: "没有引用来源", solution: "保留原文、页码或文档链接，把可追溯性作为上线条件。" },
      { title: "私有数据安全", solution: "明确谁能上传、检索和导出资料，测试时先使用脱敏数据。" },
    ],
    nextProjects: [
      {
        href: "/projects/anythingllm",
        title: "AnythingLLM",
        description: "适合快速理解本地工作区和文档问答。",
        label: "查看项目",
      },
      {
        href: "/projects/ragflow",
        title: "RAGFlow",
        description: "适合进一步研究复杂文档解析与效果优化。",
        label: "查看项目",
      },
      {
        href: "/projects/open-webui",
        title: "Open WebUI",
        description: "适合理解模型、界面和知识库的组合方式。",
        label: "查看项目",
      },
    ],
    caution: "仅为项目方向分析，不构成收益承诺。涉及企业私有资料时，应先确认数据授权、访问权限和合规要求。",
  },
];

export function getGlossaryDetail(slug: string): GlossaryDetail | undefined {
  return glossaryDetails.find((item) => item.slug === slug);
}

export function getTutorialDetail(slug: string): TutorialDetail | undefined {
  return tutorialDetails.find((item) => item.slug === slug);
}

type ProjectLearningInput = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  relatedConcepts?: string[];
  relatedTutorials?: string[];
  learningLevel?: string;
};

const conceptLinks = new Map<string, LearningLink>(
  glossaryDetails.map((item) => [
    item.slug,
    {
      href: `/glossary/${item.slug}`,
      title: item.title,
      description: item.oneLine,
      label: "学习概念",
    },
  ]),
);

const tutorialLinks = new Map<string, LearningLink>(
  tutorialDetails.map((item) => [
    item.slug,
    {
      href: `/tutorials/${item.slug}`,
      title: item.title,
      description: item.summary,
      label: "进入教程",
    },
  ]),
);

export function getProjectLearningLinks(project: ProjectLearningInput): {
  level: string;
  links: LearningLink[];
} {
  const text = `${project.name} ${project.category} ${project.summary}`.toLowerCase();
  const conceptSlugs = [...(project.relatedConcepts ?? [])];
  const tutorialSlugs = [...(project.relatedTutorials ?? [])];

  if (conceptSlugs.length === 0) {
    if (/rag|知识库|文档|open webui|anythingllm/.test(text)) {
      conceptSlugs.push("rag", "embedding", "ollama");
      tutorialSlugs.push("rag-knowledge-base");
    } else if (/agent|工作流|自动化|dify|flowise/.test(text)) {
      conceptSlugs.push("agent", "prompt-engineering");
    } else if (/内容|seo|短视频|电商|创作者/.test(text)) {
      conceptSlugs.push("prompt-engineering");
    } else {
      conceptSlugs.push("prompt-engineering", "rag", "agent");
    }
  }

  const links = [
    ...conceptSlugs.map((slug) => conceptLinks.get(slug)),
    ...tutorialSlugs.map((slug) => tutorialLinks.get(slug)),
  ].filter((link): link is LearningLink => Boolean(link));

  const uniqueLinks = [...new Map(links.map((link) => [link.href, link])).values()].slice(0, 4);

  if (uniqueLinks.length < 3) {
    uniqueLinks.push({
      href: "/learn",
      title: "AI 实战学习地图",
      description: "从基础概念到项目验证，找到当前最适合的下一步。",
      label: "查看学习路径",
    });
  }

  return {
    level: project.learningLevel ?? (text.match(/ragflow|comfyui/) ? "需要技术基础" : "小白入门"),
    links: uniqueLinks,
  };
}
