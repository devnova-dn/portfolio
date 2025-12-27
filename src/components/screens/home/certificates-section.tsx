import { ExternalLink, Award } from "lucide-react";

export default function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "Issued 2024",
      image: "/certificates/js1.png", // Replace with your image path
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-500/10"
    },
    {
      id: 2,
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "Issued 2024",
      image: "/certificates/js2.png", // Replace with your image path
      color: "text-orange-500",
      gradient: "from-orange-500/20 to-red-500/10"
    },
    {
      id: 3,
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "Issued 2024",
      image: "/certificates/py1.png", // Replace with your image path
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/10"
    },
    {
      id: 4,
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "Issued 2024",
      image: "/certificates/py2.png", // Replace with your image path
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/10"
    },
  ];

  return (
    <section id="certificates" className="relative py-24 md:py-32 overflow-hidden bg-background">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cisco <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-500">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Officially recognized credentials from Cisco Networking Academy validating our proficiency in JavaScript and Python.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative flex flex-col bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/5"
            >
              
              {/* Certificate Image Area */}
              <div className="relative aspect-video w-full bg-muted overflow-hidden border-b border-border/30">
                {/* Placeholder gradient if image fails or loads */}
                <div className={`absolute inset-0 bg-linear-to-br ${cert.gradient}`} />
                
                {/* Actual Image */}
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Verify Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <a 
                     href={cert.image} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                   >
                     <ExternalLink size={16} />
                     View Certificate
                   </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between mb-4">
                   {/* Icon Badge */}
                   <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                     <Award size={24} />
                   </div>
                   <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border/50">
                     {cert.date}
                   </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
                   <span className="text-xs text-muted-foreground">Verified Credential</span>
                   <a 
                     href={cert.image}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                   >
                     Full Size <ExternalLink size={14} />
                   </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}