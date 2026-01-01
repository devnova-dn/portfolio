import Footer from '@/components/layouts/footer';
import NavBar from '@/components/layouts/navbar';
import AboutSection from '@/components/screens/home/about-section';
import ProjectSection from '@/components/screens/home/projects-section'; // ✅ Added Import

import HomeScreen from '@/components/screens/home/home-section'; 
import { useRef } from 'react';
import ContactSection from '@/components/screens/home/contact-section';
// import CertificatesSection from '@/components/screens/home/certificates-section';

export default function HomePage() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    // const certificatesRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const navElements = [
        { path: "/", element: "Home", ref: homeRef },
        { path: "/about", element: "About", ref: aboutRef },
        { path: "/projects", element: "Projects", ref: projectsRef },
        // { path: "/certificates", element: "Certificates", ref: certificatesRef },
        { path: "/contact", element: "Contact", ref: contactRef },
    ];

  return (
    // Main wrapper: relative, full width
    <main className='relative w-full min-h-screen bg-background text-foreground overflow-x-hidden'>
        
        {/* Fixed Navbar (takes up no space in the layout flow) */}
        <NavBar navElements={navElements} />

        {/* Home Section: Exact viewport height, no padding */}
        <div ref={homeRef} id='home' className='h-screen w-screen relative'>
            <HomeScreen/>
        </div>

        {/* Other Sections */}
        <div ref={aboutRef} id='about' className="relative z-10">
            <AboutSection/>
        </div>

        {/* ✅ Added Project Section */}
        <div ref={projectsRef} id='projects' className="relative z-10">
            <ProjectSection/>
        </div>

        {/* <div ref={certificatesRef} id='certificates' className='relative z-10'>
          <CertificatesSection/>
        </div> */}

        <div ref={contactRef} id='contact' className="relative z-10">
            <ContactSection/>
        </div>

        <Footer/>
    </main>
  );
}