
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-card border-b shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">🍥</span>
          <span className="font-bold text-xl">АнимеПоиск</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link to="/new" className="hover:text-primary transition-colors">
            Новинки
          </Link>
        </div>
        
        <div className="relative w-full max-w-xs">
          <Input
            type="search"
            placeholder="Поиск аниме..."
            className="pl-10"
          />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/register">
            <Button variant="default" className="ml-4">
              <User size={18} className="mr-2" /> Регистрация
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
