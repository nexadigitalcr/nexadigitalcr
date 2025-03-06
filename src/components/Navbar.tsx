
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Logo</div>
        <Button variant="outline" className="glass-effect text-white flex items-center gap-2">
          <LogIn className="h-4 w-4" />
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
