import { ArrowRight, Sparkles } from "lucide-react";
import ScrollIntoView from "react-scroll-into-view";

export default function HomeScreen() {
  
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-background text-foreground overflow-hidden">
      
      {/* Ambient Background Gradients - Updated to Primary Green */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Glow - Moved slightly off-screen to bleed in without needing padding */}
        <div className="absolute -top-20 -left-20 w-125 h-125 bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
        
        {/* Bottom Right Glow */}
        <div className="absolute -bottom-20 -right-20 w-150 h-150 bg-emerald-500/10 rounded-full blur-[120px]" />
        
        {/* Center Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyYzY5ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 z-0 pointer-events-none" />

      {/* Main Content - Centered Vertically & Horizontally */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Hero Section */}
        <div className="space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 shadow-[0_0_15px_rgba(42,198,158,0.1)] animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Innovative IT Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="bg-linear-to-r from-primary via-emerald-400 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
              Transform Your
            </span>
            <br />
            <span className="text-foreground">Digital Future</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build cutting-edge software solutions that drive innovation and accelerate your business growth
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            
            {/* Primary Button */}
            <ScrollIntoView selector='#contact' className="group cursor-pointer relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg flex items-center gap-2 overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(42,198,158,0.4)]">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              {/* Button inner shine effect */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </ScrollIntoView>

            {/* Secondary Button */}
            <ScrollIntoView selector="#projects" className="px-8 py-4 cursor-pointer bg-background/50 backdrop-blur-sm rounded-lg font-semibold text-lg border border-primary/30 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
              View Our Work
            </ScrollIntoView>

          </div>
        </div>
      </div>
    </section>
  );
}