import { Info, Briefcase, MessageSquare, Phone, Calendar } from "lucide-react";
import signalWorksLogo from "@/assets/signalworks-logo-new.png";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "About", url: "#about", icon: Info, id: "about" },
  { title: "Services", url: "#services", icon: Briefcase, id: "services" },
  { title: "Testimonials", url: "#testimonials", icon: MessageSquare, id: "testimonials" },
  { title: "Contact", url: "#contact", icon: Phone, id: "contact" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const activeSection = useActiveSection();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <img 
              src={signalWorksLogo} 
              alt="Signal Works Logo" 
              className="h-8 w-auto"
            />
          )}
          {isCollapsed && (
            <img 
              src={signalWorksLogo} 
              alt="Signal Works Logo" 
              className="h-6 w-6 mx-auto"
            />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      tooltip={isCollapsed ? item.title : undefined}
                    >
                      <a 
                        href={item.url}
                        className="signal-transition"
                      >
                        <item.icon className={isActive ? "text-electric" : ""} />
                        {!isCollapsed && <span>{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border">
        {!isCollapsed ? (
          <Button variant="signal" size="sm" className="w-full" asChild>
            <a href="https://zcal.co/diegoarias/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </a>
          </Button>
        ) : (
          <Button variant="signal" size="icon" className="w-10 h-10 mx-auto" asChild>
            <a href="https://zcal.co/diegoarias/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
            </a>
          </Button>
        )}
        <div className="mt-4">
          <SidebarTrigger className="w-full" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
