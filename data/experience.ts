export const portfolioData = {
  name: "Pramod Vadiraja",
  role: "Senior AI Engineer",
  summary: "Specializing in the design and scaling of autonomous AI agents, RAG pipelines, and LLMOps. Founding member of AI teams with a focus on bridging applied research and production-grade system architecture.",
  
  skills: [
    { 
      category: "Agentic AI & LLMs", 
      items: ["LangGraph", "LangChain", "Autonomous Agents", "Multi-Agent Systems", "MCP", "RAG"] 
    },
    { 
      category: "AI Infrastructure & Ops", 
      items: ["Docker", "Terraform", "AWS (ECS, SQS, Lambda)", "GCP", "CI/CD", "Vector DBs (Qdrant, Pinecone)"] 
    },
    { 
      category: "Backend & Engineering", 
      items: ["FastAPI", "Python", "Asynchronous Programming", "PostgreSQL", "Redis", "Distributed Systems"] 
    },
    { 
      category: "Research & ML", 
      items: ["PyTorch", "NLP", "Fine-tuning (DeepSpeed/FSDP)", "Computer Vision", "Knowledge Graphs"] 
    }
  ],

  education: [
    {
      school: "University of Kaiserslautern",
      degree: "M.Sc. in Computer Science (Intelligent Systems)",
      period: "2018 – 2021",
      grade: "GPA: 1.7"
    },
    {
      school: "Visvesvaraya Technological University",
      degree: "Bachelor of Computer Science",
      period: "2011 – 2015",
      grade: "GPA: 1.7 (78%)"
    }
  ]
};

export const publications = [
  {
    title: "Convolutional Autoencoder Based Textile Defect Detection Under Unconstrained Setting",
    publisher: "Springer, Cham",
    year: "2021",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-89134-3_11" 
  },
  {
    title: "Effects of Counting Seconds in the Mind while Reading",
    publisher: "UbiComp 2021, ACM",
    year: "2021",
    link: "https://dl.acm.org/doi/10.1145/3460418.3479373"
  },
  {
    title: "Text Summary Augmentation for Intelligent Reading Assistant",
    publisher: "AHs'21: Augmented Humans Conference",
    year: "2021",
    link: "https://dl.acm.org/doi/10.1145/3450741.3450742"
  }
];

export const workExperience = [
  {
    company: "Master School Institute of Technology",
    role: "AI Engineering Instructor",
    period: "Feb 2026 – Present",
    description: "Delivering live coding sessions on advanced AI topics including LLMs, RAGs, Agents, and LLMOps.",
    tech: ["LLMs", "RAG", "Agents", "LLMOps"]
  },
  {
    company: "Ordio",
    role: "Senior AI Engineer",
    period: "June 2025 – Present",
    description: "Founding member of the AI team for a personnel management platform. Developed end-to-end AI agents for workspace management with advanced planning and tool-use capabilities.",
    tech: ["LangGraph", "LangChain", "FastAPI", "AWS", "Terraform"]
  },
  {
    company: "Dimension",
    role: "AI Engineer",
    period: "July 2024 – June 2025",
    description: "Developed multi-agent collaboration frameworks and search/retrieval tasks with LangChain and LangGraph. Built validation frameworks for LLM responses and load testing.",
    tech: ["Qdrant", "VLLM", "NATS", "Python", "GCP"]
  },
  {
    company: "Hyde GmbH",
    role: "Senior AI Engineer",
    period: "June 2023 – July 2024",
    description: "Built asynchronous ML/NLP pipelines for web scraping and data preprocessing. Enabled RAG with vector databases and engineered extensible APIs for modular prompt management.",
    tech: ["Python", "PyTorch", "SageMaker", "Redis", "Qdrant"]
  },
  {
    company: "Fraunhofer IAIS",
    role: "NLP Research Engineer",
    period: "Dec 2021 – May 2023",
    description: "Developed GPT-3-based triple verbalization for Knowledge Graphs, reducing processing time by ~50%. Contributed to the OpenGPT-X project for EU-region LLMs.",
    tech: ["Python", "Knowledge Graphs", "Kubernetes", "PyTorch"]
  },
  {
    company: "Sprinklr",
    role: "Senior Product Engineer",
    period: "July 2015 – Aug 2018",
    description: "Prototyped a data enrichment system boosting lead collection efficiency by ~4x. Led migration of legacy Perl scripts to scalable class models.",
    tech: ["Java", "Spring MVC", "MongoDB", "ElasticSearch"]
  }
];

export const unifiedTimeline = [
  {
    type: "work",
    company: "Master School Institute of Technology",
    role: "AI Engineering Instructor",
    period: "Feb 2026 – Present",
    description: "Delivering live coding sessions on advanced AI topics including LLMs, RAGs, Agents, and LLMOps.",
    tech: ["LLMs", "RAG", "Agents", "LLMOps"]
  },
  {
    type: "work",
    company: "Ordio",
    role: "Senior AI Engineer (Founding Member)",
    period: "June 2025 – Present",
    description: "Architected end-to-end AI agents with planning and tool-use capabilities for personnel management.",
    tech: ["LangGraph", "LangChain", "FastAPI", "AWS", "Terraform"]
  },
  {
    type: "work",
    company: "Dimension",
    role: "AI Engineer",
    period: "July 2024 – June 2025",
    description: "Developed multi-agent collaboration frameworks and search/retrieval tasks. Built validation frameworks for LLM responses.",
    tech: ["Qdrant", "VLLM", "NATS", "Python", "GCP"]
  },
  {
    type: "work",
    company: "Hyde GmbH",
    role: "Senior AI Engineer",
    period: "June 2023 – July 2024",
    description: "Built asynchronous ML/NLP pipelines and engineered extensible APIs for modular prompt management.",
    tech: ["Python", "PyTorch", "SageMaker", "Redis", "Qdrant"]
  },
  {
    type: "work",
    company: "Fraunhofer IAIS",
    role: "NLP Research Engineer",
    period: "Dec 2021 – May 2023",
    description: "Developed GPT-3-based triple verbalization for Knowledge Graphs, reducing processing time by ~50%.",
    tech: ["Python", "Knowledge Graphs", "Kubernetes", "PyTorch"]
  },
  {
    type: "edu",
    company: "University of Kaiserslautern",
    role: "M.Sc. Computer Science (Intelligent Systems)",
    period: "Oct 2018 – Nov 2021",
    description: "Specialized in Intelligent Systems with a focus on Deep Learning and NLP.",
    tech: ["GPA: 1.7", "Germany"]
  },
  {
    type: "work",
    company: "Sprinklr",
    role: "Senior Product Engineer",
    period: "July 2015 – Aug 2018",
    description: "Prototyped a data enrichment system boosting lead collection efficiency by ~4x.",
    tech: ["Java", "Spring MVC", "MongoDB", "ElasticSearch"]
  }
];