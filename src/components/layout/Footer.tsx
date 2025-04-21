
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card mt-12 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍥</span>
              <span className="font-bold text-xl">АнимеПоиск</span>
            </div>
            <p className="text-muted-foreground mt-2">© 2023 АнимеПоиск. Все права защищены.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
            <Link to="/new" className="hover:text-primary transition-colors">Новинки</Link>
            <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
