import { Code2, RefreshCw } from "lucide-react";
import ScrollIntoView from "react-scroll-into-view";

export default function AboutSection() {
  const services = [
    {
      id: 1,
      icon: <Code2 className="w-10 h-10" />,
      title: "Web Development",
      desc: "We craft scalable, high-performance web applications using the latest technologies like React, Next.js, and Node.js to elevate your online presence.",
      bgGradient: "from-blue-500/70 to-cyan-500/10",
    },
    {
      id: 2,
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Digital Transformation",
      desc: "We help modern businesses transition from legacy systems to modern digital ecosystems, streamlining operations and unlocking new growth opportunities.",
      bgGradient: "from-emerald-500/40 to-green-500/10",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-background">
      
      {/* Static Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Background Floating Binary/Particles (Static) */}
      <div className="absolute top-20 left-10 text-6xl font-bold text-primary/5 font-mono select-none">01</div>
      <div className="absolute bottom-20 right-10 text-8xl font-bold text-primary/5 font-mono select-none">10</div>
      <div className="absolute top-1/2 left-1/4 text-4xl font-bold text-primary/5 font-mono select-none">+</div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Creative Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50">
              Digital Evolution
            </span>
            {/* Decorative underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DevNova isn't just building software. We are engineering the infrastructure of tomorrow.
          </p>
        </div>

        {/* Zig-Zag Service Layout */}
        <div className="space-y-12 md:space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                relative group
                flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              
              {/* Visual / Icon Side */}
              <div className="w-full md:w-5/12 flex justify-center md:justify-start relative">
                {/* Background Glow Blob */}
                <div className={`absolute inset-0 bg-linear-to-r ${service.bgGradient} rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                
                {/* The "Card" containing the icon */}
                <div className="relative w-full aspect-square max-w-[320px] bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {/* Inner Gradient Border */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  
                  {/* Icon Container - Fixed text color to 'text-white' so it is visible */}
                  <div className={`
                    p-6 rounded-2xl  bg-linear-to-br ${service.bgGradient} border border-white/10 shadow-lg
                    text-white
                  `}>
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Text Content Side */}
              <div className="w-full md:w-6/12 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.desc}
                </p>
                
                {/* Connecting Line (Desktop only) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full -z-10 h-px bg-linear-to-r from-transparent via-border to-transparent" />
              </div>

            </div>
          ))}
        </div>

        {/* Creative CTA Banner */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-emerald-500/20 to-primary/20 blur-xl transition-all duration-700" />
          <div className="relative overflow-hidden rounded-3xl bg-background border border-primary/20 p-10 md:p-12 text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent" />
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Something <span className="text-primary">Impossible</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Partner with DevNova to launch your next big idea. We handle the code, you handle the vision.
            </p>
            
            <ScrollIntoView selector="#contact" className="relative inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(42,198,158,0.5)]">
              Start a Project
            </ScrollIntoView>
          </div>
        </div>

      </div>
    </section>
  );
}