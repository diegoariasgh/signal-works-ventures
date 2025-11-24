import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen w-full flex bg-background">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <main className="w-full">
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <CTA />
            <Footer />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;