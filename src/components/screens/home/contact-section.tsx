import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      value: "devnova.dn@gmail.com",
      href: "mailto:devnova.dn@gmail.com",
      target: "_self"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "+212 618 519 687",
      href: "https://wa.me/212618519687"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Casablanca, Morocco",
      href: "#",
      target: "_self"
    },
  ];

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ fullName: "", email: "", subject: "", message: "" });
    
    let isValid = true;

    // Validation Logic
    if(!fullNameRef.current?.value){
        isValid = false;
        setErrors((prev)=> ({...prev, fullName: "Full Name input is required"}));
    }
    if(!emailRef.current?.value){
        isValid = false;
        setErrors((prev)=> ({...prev, email: "Email input is required"}));
    }
    if(!subjectRef.current?.value){
        isValid = false;
        setErrors((prev)=> ({...prev, subject: "Subject input is required"})); // Fixed key typo
    }
    if(!messageRef.current?.value){
        isValid = false;
        setErrors((prev)=> ({...prev, message: "Message input is required"})); // Fixed key typo
    }

    if(isValid){
        // ⚠️ REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        const serviceID = "service_ie7msbw"; 
        const templateID = "template_pynghje";
        const publicKey = "m3ezGsZI5c0A_dorG";

        const templateParams = {
            name: fullNameRef.current?.value,
            email: emailRef.current?.value,
            subject: subjectRef.current?.value,
            message: messageRef.current?.value,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message Sent Successfully!");
                
                // Clear inputs
                if(fullNameRef.current) fullNameRef.current.value = "";
                if(emailRef.current) emailRef.current.value = "";
                if(subjectRef.current) subjectRef.current.value = "";
                if(messageRef.current) messageRef.current.value = "";
            }, (err) => {
                console.log('FAILED...', err);
                alert("Failed to send message, please try again.");
            });
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-background">
      
      {/* Background Elements */}
      {/* Fixed class typo: bg-linear-to-r -> bg-gradient-to-r, w-125 -> w-32 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Contact Us
          </div>
          {/* Fixed typo: bg-linear-to-r -> bg-gradient-to-r */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Your <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-500">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch with our team to start of conversation.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info (4/12) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
              {/* Subtle Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-background/50 transition-colors group/link cursor-pointer"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-base text-foreground font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Extra CTA Card */}
            <div className="p-6 rounded-3xl bg-linear-to-br from-primary/10 to-transparent border border-primary/20">
              <h4 className="font-bold text-foreground mb-2">Need immediate help?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available 24/7 for critical technical assistance.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (8/12) */}
          <div className="lg:col-span-8">
            <form onSubmit={sendEmail} className="p-8 md:p-10 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Full Name</label>
                  <input 
                    ref={fullNameRef}
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-background/50 border focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 ${errors.fullName ? "border-red-500" : "border-border"}`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email Address</label>
                  <input 
                    ref={emailRef}
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-background/50 border focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 ${errors.email ? "border-red-500" : "border-border"}`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium text-foreground ml-1">Subject</label>
                <input 
                  ref={subjectRef}
                  type="text" 
                  id="subject" 
                  placeholder="Project Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-background/50 border focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 ${errors.subject ? "border-red-500" : "border-border"}`}
                />
                {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
              </div>

              {/* Message Input */}
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                <textarea 
                  ref={messageRef}
                  id="message" 
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={`w-full px-4 py-3 rounded-xl bg-background/50 border focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 resize-none ${errors.message ? "border-red-500" : "border-border"}`}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(42,198,158,0.4)] flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}