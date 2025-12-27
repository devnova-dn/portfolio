import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../providers/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        relative 
        h-10 w-10 
        rounded-full 
        border-border/50 
        bg-background/50 
        hover:bg-accent 
        hover:border-primary 
        hover:shadow-[0_0_15px_rgba(42,198,158,0.3)] 
        transition-all duration-300
      "
    >
      {/* Sun Icon - Visible in Light Mode */}
      <Sun 
        className="
          h-[1.2rem] w-[1.2rem] 
          rotate-0 scale-100 
          transition-all duration-500 
          dark:-rotate-90 dark:scale-0 
          text-orange-500 
        " 
      />
      
      {/* Moon Icon - Visible in Dark Mode */}
      <Moon 
        className="
          absolute 
          h-[1.2rem] w-[1.2rem] 
          rotate-90 scale-0 
          transition-all duration-500 
          dark:rotate-0 dark:scale-100 
          text-primary 
          drop-shadow-[0_0_5px_rgba(42,198,158,0.5)]
        " 
      />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}