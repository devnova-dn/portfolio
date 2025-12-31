import { ExternalLink, Github, ChefHat, Sparkles, ShoppingBag } from "lucide-react";

export default function ProjectSection() {
  
  const projects = [
    {
      title: "GourmetHub - Premium Food E-Commerce Platform",
      category: "E-Commerce",
      gitUrl: "https://github.com/devnova-dn/Food_Delivery_Project",
      url: "https://food-delivery-project1.vercel.app",
      imageUrl: "/projects/food.png",
      desc: "A comprehensive, production-ready e-commerce website for food products built with Next.js 14, MongoDB Atlas, and Tailwind CSS. This application includes a full-featured customer interface and a powerful admin dashboard.",
      tags: ["Next.js 14", "MongoDB", "Tailwind CSS"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: <ShoppingBag className="w-full h-full text-white/90" />
    },
    {
      title: "Lessence Parfums",
      category: "Luxury Retail",
      gitUrl: "https://github.com/Oumaima-El-Badraouy/L-ESSENCE",
      url: "https://l-essence-pi.vercel.app/",
      imageUrl: "/projects/parfums.png",
      desc: "A luxurious, high-end perfume e-commerce website featuring a sophisticated 'Dark Luxury' design aesthetic with gold accents, smooth animations, and a shopping cart integrated with WhatsApp ordering.",
      tags: ["React", "Tailwind CSS", "WhatsApp API"],
      gradient: "from-amber-400 via-yellow-500 to-orange-600",
      icon: <Sparkles className="w-full h-full text-white/90" />
    },
    {
      title: "DishDiscovery - Smart Recipe Finder",
      category: "Web Application",
      gitUrl: "https://github.com/devnova-dn/Recipes_Project",
      url: "https://recipes-project-vert.vercel.app/",
      imageUrl: "/projects/recipe.png",
      desc: "A modern Vue 3-based smart recipe application that matches dishes to ingredients you already have. Features intelligent matching algorithms, multi-language support (4 languages), advanced filters, and a modern glassmorphism dark UI.",
      tags: ["Vue 3", "Pinia", "Tailwind CSS", "Vite"],
      gradient: "from-cyan-600 via-blue-600 to-purple-700",
      icon: <ChefHat className="w-full h-full text-white/90" />
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] opacity-40 pointer-events-none" />

          <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
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
                
                {/* The Image */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay for Hover (Desktop Only) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px] lg:group-hover:flex md:hidden">
                   
                   {/* View Live Link */}
                   <a 
                     href={project.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" 
                     aria-label="View Live"
                   >
                     <ExternalLink size={20} />
                   </a>

                   {/* View Code Link */}
                   <a 
                     href={project.gitUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 bg-white/20 text-white backdrop-blur-md rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all border border-white/10" 
                     aria-label="View Code"
                   >
                     <Github size={20} />
                   </a>

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
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-muted/60 border border-border rounded-md text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile & Tablet Action Buttons (Visible on screens smaller than Desktop) */}
                <div className="flex gap-3 mt-auto lg:hidden">
                   <a 
                     href={project.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                   >
                     <ExternalLink size={16} /> Live Site
                   </a>
                   <a 
                     href={project.gitUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 py-2.5 px-4 rounded-lg bg-secondary text-secondary-foreground border border-border text-sm font-semibold flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
                   >
                     <Github size={16} /> Code
                   </a>
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