import { ExternalLink, Github, Code2, Zap, Smartphone, BarChart3 } from "lucide-react";

export default function ProjectSection() {
  
  const projects = [
      {
      title: "Nexus Dashboard",
      category: "FinTech",
      desc: "A high-performance real-time analytics dashboard for financial data visualization with complex charts.",
      tags: ["React", "TypeScript", "Tailwind"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: <BarChart3 className="w-full h-full text-white/90" />
    },
    {
      title: "GreenGrocer App",
      category: "E-Commerce",
      desc: "A full-stack mobile-first e-commerce platform featuring cart management, payment gateways, and live tracking.",
      tags: ["Next.js", "Stripe", "Node.js"],
      gradient: "from-emerald-400 to-green-600",
      icon: <Smartphone className="w-full h-full text-white/90" />
    },
    {
      title: "DevNova AI Suite",
      category: "AI Tool",
      desc: "Internal tool for code generation and automated testing using LLM integration, boosting developer velocity.",
      tags: ["Python", "OpenAI", "FastAPI"],
      gradient: "from-cyan-500 to-blue-600",
      icon: <Zap className="w-full h-full text-white/90" />
    },
    {
      title: "EcoTrack SaaS",
      category: "Sustainability",
      desc: "A carbon footprint tracking platform for enterprises, helping them meet sustainability goals.",
      tags: ["Vue.js", "Firebase", "D3.js"],
      gradient: "from-teal-400 to-emerald-700",
      icon: <Code2 className="w-full h-full text-white/90" />
    },
    {
      title: "MediCare Portal",
      category: "Healthcare",
      desc: "Secure patient management system with appointment scheduling and medical history tracking.",
      tags: ["Laravel", "MySQL", "React"],
      gradient: "from-red-400 to-rose-600",
      icon: <Code2 className="w-full h-full text-white/90" />
    },
    {
      title: "CryptoExchange",
      category: "Crypto",
      desc: "A decentralized cryptocurrency exchange interface with real-time websocket updates.",
      tags: ["Solidity", "Web3.js", "React"],
      gradient: "from-orange-400 to-amber-600",
      icon: <Zap className="w-full h-full text-white/90" />
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-background">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="relative flex flex-col items-center justify-end mb-20 gap-12 md:gap-24 w-full">
      
          

          {/* Decorative Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] opacity-40 pointer-events-none" />

          {/* Centered Content */}
          <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
            
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Portfolio
            </div> */}
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                    Our <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-500">Projects</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A showcase of complex algorithms translated into <span className="text-foreground font-bold"> seamless, user-centric</span> digital experiences.
                </p>
            </div>
          </div>  
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/5"
            >
              
              {/* Project Image / Preview Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110">
                   <div className="w-20 h-20 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10">
                      {project.icon}
                   </div>
                </div>

                {/* Overlay Links on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                   <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" aria-label="View Live">
                     <ExternalLink size={20} />
                   </button>
                   <button className="p-3 bg-white/20 text-white backdrop-blur-md rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all border border-white/10" aria-label="View Code">
                     <Github size={20} />
                   </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-muted/60 border border-border rounded-md text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden text-center">
          <a href="https://github.com/devnova-dn" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
            View Github <Github size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}