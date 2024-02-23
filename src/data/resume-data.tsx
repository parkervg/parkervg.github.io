import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, GoogleScholarIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Parker Glenn",
  initials: "PG",
  location: "Somerville, MA",
  locationLink: "https://www.google.com/maps/place/Somerville",
  about:
    "Data Scientist working in NLP",
  summary:
    "Hi! My name is Parker Glenn. I'm a Data Scientist exploring all things language & tech. I'm currently very interested in methods combining symbolic reasoning with LLMs, constrained decoding, and database systems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/44219290?s=400&u=9ac7aa2539d25838682467b44ffd37a1e95c886f&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "parkervg5@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/parkervg",
        icon: GitHubIcon,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=UH8IP5QAAAAJ&hl=en",
        icon: GoogleScholarIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parker-glenn5/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/parkglenn55",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Brandeis University",
      degree: "M.S. in Computational Linguistics",
      start: "2020",
      end: "2022",
    },
    {
      school: "University of California, Santa Barbara",
      degree: "B.A. in Linguistics, Concentration in Speech and Language Technology",
      start: "2018",
      end: "2020",
    }
  ],
  work: [
    {
      company: "Fidelity Investments",
      link: "https://www.fidelity.com/",
      badges: [],
      title: "Data Scientist",
      // logo: ParabolLogo,
      start: "2022",
      end: "",
      description:
        "Led team's first peer-reviewed publication. Improve contextual understanding of customer service virtual assistant. Fine-tune large language models (LLMs) on Amazon SageMaker. Leverage constrained generation for tasks such as semantic parsing and query rewriting.",
    },
    {
      company: "Workhuman",
      link: "https://www.workhuman.com/",
      badges: [],
      title: "NLP Intern",
      // logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Led Workhuman's first peer-reviewed publication. Created system for information extraction and temporally-dependent topic modeling with Gensim and Pandas, winning an internal Customer Strategy innovation competition,",
    },
    {
      company: "Brandeis University",
      link: "https://www.brandeis.edu/",
      badges: [],
      title: "Graduate Research Assistant",
      // logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description:
        "Researched affordance extraction and multimodal NLU under Prof. James Pustejovsky. Designed and deployed Mechanical Turk annotation task for pairing actions to images.",
    },
    {
      company: "Briq",
      link: "https://briq.com/",
      badges: [],
      title: "Data Science Intern → Junior Software Engineer",
      logo: NSNLogo,
      start: "2019",
      end: "2020",
      description: "Created and managed Python microservices deployed in Kubernetes with Docker. Developed semantic search build on ElasticSearch.",
    },
  ],
  skills: [
    "Python",
      "SQL",
      "Bash",
      "PyTorch",
      "SageMaker",
      "FastAPI",
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)"
  ],
  projects: [
    {
      title: "BlendSQL",
      techStack: [
          "📝 Research Paper",
        "Python",
          "sqlglot",
          "guidance",
          "pyparsing"
      ],
      description: "A unified dialect for orchestrating SQLite logic and LLM reasoning.",
      logo: ConsultlyLogo,
      link: {
        // label: "BlendSQL",
        href: "https://parkervg.github.io/blendsql/",
      },
    },
    {
      title: "DestT5",
      techStack: ["📝 Research Paper", "PyTorch"],
      description:
        "Interactive semantic parsing with T5. Accepted at NLP4ConvAI, ACL 2023.",
      logo: MonitoLogo,
      link: {
        // label: "destt5.com",
        href: "https://aclanthology.org/2023.nlp4convai-1.3/",
      },
    },
    {
      title: "Discourse Referent Prediction",
      techStack: ["PyTorch", "FastAPI", "Docker"],
      description:
        "Generative RNN with dynamic entity representations. Performs coreference, and predicts the next mentioned noun phrase in a narrative.",
      logo: JarockiMeLogo,
      link: {
        // label: "github.com",
        href: "https://parkervg.github.io/discourse-referent-demo/?",
      },
    },
    {
      title: "Evolving Parity Solutions",
      techStack: ["numpy", "numba", "multiprocessing"],
      description:
        "Using evolutionary algorithms to create bit-string rules for one-dimensional cellular automata.",
      logo: Minimal,
      link: {
        // label: "useminimal.com",
        href: "https://github.com/parkervg/parity-evolution?",
      },
    },
    {
      title: "Reducing Embedding Dimensionality with SHAP",
      techStack: ["📝 Research Paper"],
      description:
        "An early research project exploring the dimensions of static word embeddings and their impact on downstream classification tasks.",
      logo: BarepapersLogo,
      link: {
        // label: "barepapers.com",
        href: "https://github.com/parkervg/shap-dim-reduction/blob/master/shap_dim_reduction.pdf",
      },
    }
  ],
} as const;
