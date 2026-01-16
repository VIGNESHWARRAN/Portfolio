import { Github, Linkedin, Code, Terminal, Users, Mic, Trophy, FileText, ExternalLink } from "lucide-react";

export const siteConfig = {
    name: "Vigneshwarran S",
    title: "AI Engineer & Researcher",
    description: "Former Co-op Intern at AlgoUniversity. Active @ LeetCode & Codechef. Specializing in Agentic AI, Computer Vision, and Scalable Systems.",
    email: "vigneshwarran0@gmail.com",

    navItems: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        // { name: "Research", href: "/research" },
        { name: "Leadership", href: "/leadership" },
        { name: "Certificates", href: "/certificates" },
        { name: "Resume", href: "/resume.pdf" },
    ],

    socials: [
        { name: "GitHub", href: "https://github.com/VIGNESHWARRAN", icon: <Github className="w-5 h-5" /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/vigneshwarran-s-82084b287/", icon: <Linkedin className="w-5 h-5" /> },
        { name: "LeetCode", href: "https://leetcode.com/u/Vigneshwarran_S/", icon: <Code className="w-5 h-5" /> },
        { name: "CodeChef", href: "https://www.codechef.com/users/vigneshwarran", icon: <Terminal className="w-5 h-5" /> },
    ],

    // --- HOME PAGE STATS (With Links) ---
    stats: [
        {
            label: "LeetCode solved",
            value: "215",
            icon: <Code size={16} />,
            link: "https://leetcode.com/u/Vigneshwarran_S/"
        },
        {
            label: "Coding Competitions",
            value: "1 Win",
            icon: <Trophy size={16} />,
            link: "https://github.com/VIGNESHWARRAN"
        },
        // { 
        //   label: "Research", 
        //   value: "0 Papers", 
        //   icon: <FileText size={16} />,
        //   link: "/research"
        // },
        {
            label: "Codechef Rating",
            value: "1372",
            icon: <Terminal size={16} />,
            link: "https://www.codechef.com/users/vigneshwarran"
        },
    ],
    // --- CERTIFICATES & ACHIEVEMENTS DATA ---
    certificates: [
        // 1. COMPETITION WINNING
        {
            title: "Winner - Code in the Dark",
            issuer: "Amrita Vishwa Vidyapeetham",
            date: "2023",
            type: "Competition Winning",
            desc: "Secured 2nd place (₹1,500 prize) in a national blind CSS/Frontend coding competition, outperforming 150+ participants.",
            link: "" 
        },
        // 2. COMPETITION PARTICIPATION
        {
            title: "Walmart Sparkathon 2025",
            issuer: "Walmart",
            date: "2025",
            type: "Competition Participation",
            desc: "Developed an AI-powered E-Commerce app with Reverse Image Search (CLIP) and Voice capabilities.",
            link: "https://github.com/DotDev262/Sparkathon"
        },
        {
            title: "Zoho Cliqtrix 2025",
            issuer: "Zoho Corporation",
            date: "Dec 2025",
            type: "Competition Participation",
            desc: "Built 'Xinance', a custom Zoho Cliq extension for expense management automation.",
            link: "https://github.com/sanjjey/Zoho_Cliqtrix"
        },
        {
            title: "Visa Code Your Way",
            issuer: "Visa",
            date: "2026",
            type: "Competition Participation",
            desc: "Submitted 'InsightFlow', an agentic AI solution for payment reporting analysis.",
            link: "https://github.com/DotDev262/Sparkathon"
        },
        // 3. COURSE COMPLETION
        {
            title: "AWS Cloud Engineer Certification",
            issuer: "Amrita CIR",
            date: "Completed",
            type: "Course Completion",
            desc: "Comprehensive training on AWS services, cloud infrastructure, and deployment strategies.",
            link: ""
        },
        {
            title: "Theory of Computation",
            issuer: "NPTEL",
            date: "Completed",
            type: "Course Completion",
            desc: "Gained deep understanding of computational models, automata theory, and algorithms.",
            link: ""
        }
    ],
    featuredProjects: [
        {
            title: "CareSight",
            desc: "Adaptive AI agent for elderly monitoring using LangGraph and Pathway engine.",
            tech: ["LangGraph", "Agentic AI", "Pathway"],
            link: "https://github.com/VIGNESHWARRAN/CareSight"
        },
        {
            title: "Online Judge Platform",
            desc: "Scalable coding evaluation system with secure Docker execution environments.",
            tech: ["System Design", "Docker", "AWS"],
            link: "https://github.com/VIGNESHWARRAN/Online_Judge"
        }
    ],

    currentFocus: "Agentic Workflows & Multispectral Document Analysis.",

    focusAreas: [
        { title: "Agentic AI", desc: "LangGraph & Pathway Agents" },
        { title: "Systems", desc: "Docker & Cloud Native" },
        { title: "Vision", desc: "ResNet-UNet Architectures" }
    ],

    timeline: [
        {
            year: "2025",
            title: "Software Engineer Co-Op",
            company: "AlgoUniversity",
            desc: "Summer 2025. Focusing on backend engineering and system design."
        },
        {
            year: "2025",
            title: "Hackathon Project",
            company: "Zoho Cliqtrix",
            desc: "Developed a custom integration app for the Zoho ecosystem."
        },
        {
            year: "2025",
            title: "Runner - Code in the Dark",
            company: "Amrita Vishwa Vidyapeetham",
            desc: "Secured 2nd place (₹1,500 prize) in a national blind-duo coding competition."
        },
    ],

    // --- LEADERSHIP & EVENTS (Multiple Links Supported) ---
    leadership: [
        {
            id: "hack-dec",
            role: "Lead Organizer (Neuronix Club)",
            event: "Hack-A-Ruckus 2025",
            year: "December 18-19, 2025",
            description: "Organized the flagship technical showdown with 1000+ registrations and 250,000+ Unstop impressions. Featured 'FIASCO(DE)' and 'Random Compile' challenges. Managed the selection of Top 30 offline teams and a Top 10 finale backed by 2IIM sponsorship and a ₹20,000 prize pool.",
            icon: <Users className="w-6 h-6 text-primary" />,

            // NEW: Array of links
            links: [
                { label: "LinkedIn Post by college", url: "https://www.linkedin.com/posts/amrita-vishwa-vidyapeetham-chennai-campus-885674259_amritauniversity-amrita-chennai-activity-7409141239452774400-QVl0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW24tgBes-_0wcGuMw42MQcYhWgL9IkEHg" },
                { label: "LinkedIn Post by Me", url: "https://www.linkedin.com/posts/vigneshwarran-s-82084b287_hack-a-ruckus-20-fiascode-20-a-nationwide-activity-7408822212587102208-PJzv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW24tgBes-_0wcGuMw42MQcYhWgL9IkEHg" },
                { label: "Unstop Report", url: "https://unstop.com/college-fests/hack-a-ruckus-amrita-vishwa-vidyapeetham-avv-chennai-384553" }
            ],

            images: [
                { src: "/hack_dec1.jpg", caption: "Hack-A-Ruckus 2025 Launch" },
                { src: "/hack_dec2.jpg", caption: "FIASCO(DE) Challenge" },
                { src: "/hack_dec3.jpg", caption: "Finale Prize Distribution" }
            ]
        },
        {
            id: "mike",
            role: "Core Volunteer",
            event: "MIKE Conference (10th Edition)",
            year: "December 2025",
            description: "Core volunteer for the 10th International Conference on Mining Intelligence and Knowledge Exploration. Facilitated the 5-day event featuring global delegates, Springer LNAI proceedings, and Pre-Conference Workshops on Agentic AI.",
            icon: <Mic className="w-6 h-6 text-secondary" />,

            links: [
                { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/amrita-vishwa-vidyapeetham-chennai-campus-885674259_amritauniversity-amrita-chennai-activity-7404838537470140416-URmY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW24tgBes-_0wcGuMw42MQcYhWgL9IkEHg" }
            ],

            images: [
                { src: "/mike1.jpg", caption: "Conference Delegates" },
                { src: "/mike2.jpg", caption: "Keynote Session" }
            ]
        },
        {
            id: "hack-mar",
            role: "Organizer",
            event: "Hack-a-Ruckus 1.0",
            year: "March 2025",
            description: "Launched the inaugural edition of Hack-a-Ruckus, establishing a unique brand of 'unusual coding' events. Successfully attracted 500+ participants for events like FIASCOde and Random(Compile), setting a new benchmark for technical events at Amrita Chennai.",
            icon: <Users className="w-6 h-6 text-primary" />,

            links: [
                { label: "Unstop Report", url: "https://unstop.com/college-fests/hack-a-ruckus-amrita-vishwa-vidyapeetham-avv-chennai-326109" },
                { label: "LinkedIn Post by Me", url: "https://www.linkedin.com/posts/vigneshwarran-s-82084b287_hackaruckus-neuronix-codingchallenge-activity-7304193252994256898-OfrW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW24tgBes-_0wcGuMw42MQcYhWgL9IkEHg" },

            ],

            images: [
                { src: "/hack_mar1.jpg", caption: "Event Team" },
                { src: "/hack_mar2.jpg", caption: "Coding Phase" },
                { src: "/hack_mar3.jpg", caption: "Event Instructions" }
            ]
        }
    ],

    projects: [
        {
            title: "Online Judge Platform",
            desc: "A secure, cloud-native coding evaluation platform handling Docker-based execution.",
            tech: ["MERN Stack", "Docker", "AWS"],
            link: "https://github.com/VIGNESHWARRAN/Online_Judge"
        },
        {
            title: "E-Commerce Customer App (Sparkathon)",
            desc: "AI-powered retail app built with Flutter & FastAPI. Implemented reverse image search (CLIP), dynamic AI voice support (Vapi/n8n), and NFC wallet payments.",
            tech: ["Flutter", "FastAPI", "CLIP Model", "n8n"],
            link: "https://github.com/DotDev262/Sparkathon"
        },
        {
            title: "CareSight",
            desc: "Adaptive AI agent for elderly monitoring using LangGraph.",
            tech: ["LangGraph", "GenAI", "Healthcare"],
            link: "https://github.com/VIGNESHWARRAN/CareSight"
        },
        {
            title: "Zoho Cliqtrix App",
            desc: "Automation app for Zoho ecosystem built during the Cliqtrix hackathon.",
            tech: ["Zoho Deluge", "Automation"],
            link: "https://github.com/sanjjey/Zoho_Cliqtrix"
        }
    ]
};