
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimeCard from "@/components/AnimeCard";
import Navbar from "@/components/Navbar";
import { popularAnime, newReleases } from "@/data/animeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        {/* Главный баннер */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <img 
            src="/placeholder.svg" 
            alt="Популярное аниме" 
            className="w-full h-full object-cover"
          />
          <div className="absolute left-8 bottom-8 z-20 max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4">Смотрите лучшее аниме онлайн</h1>
            <p className="text-white/90 mb-6">
              Огромная коллекция аниме в отличном качестве с русской озвучкой и субтитрами
            </p>
            <Button size="lg">Начать смотреть</Button>
          </div>
        </div>
        
        {/* Популярное аниме */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Популярное аниме</h2>
            <Link to="/catalog" className="text-primary hover:underline">
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {popularAnime.map((anime) => (
              <AnimeCard
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image}
                rating={anime.rating}
                genres={anime.genres}
                episodeCount={anime.episodeCount}
                onClick={() => console.log(`Clicked on anime: ${anime.title}`)}
              />
            ))}
          </div>
        </section>
        
        {/* Новые релизы */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Новые релизы</h2>
            <Link to="/new" className="text-primary hover:underline">
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newReleases.map((anime) => (
              <AnimeCard
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image}
                rating={anime.rating}
                genres={anime.genres}
                episodeCount={anime.episodeCount}
                onClick={() => console.log(`Clicked on anime: ${anime.title}`)}
              />
            ))}
          </div>
        </section>
      </main>
      
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
    </div>
  );
};

export default Index;
