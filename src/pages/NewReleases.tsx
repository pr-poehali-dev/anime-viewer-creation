
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnimeCard from "@/components/AnimeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { newReleases } from "@/data/animeData";

const NewReleases = () => {
  const [selectedSeason, setSelectedSeason] = useState("Зима 2023");
  
  const seasons = ["Зима 2023", "Осень 2022", "Лето 2022", "Весна 2022"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Новинки аниме</h1>
          <p className="text-muted-foreground">
            Последние и предстоящие релизы аниме сезона
          </p>
        </header>
        
        {/* Баннер текущего сезона */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <img 
            src="/placeholder.svg" 
            alt="Новый сезон аниме" 
            className="w-full h-full object-cover"
          />
          <div className="absolute left-8 bottom-8 z-20 max-w-xl">
            <Badge variant="secondary" className="mb-3 px-3 py-1">Сезон</Badge>
            <h2 className="text-3xl font-bold text-white mb-2">Зима 2023</h2>
            <p className="text-white/90 mb-6">
              Откройте для себя новейшие аниме-релизы текущего сезона
            </p>
            <Button variant="default">Смотреть сезон</Button>
          </div>
        </div>
        
        {/* Выбор сезона */}
        <div className="flex items-center mb-8 overflow-x-auto pb-2">
          <div className="flex items-center text-primary mr-4">
            <Calendar size={18} className="mr-2" />
            <span>Сезон:</span>
          </div>
          {seasons.map(season => (
            <Button
              key={season}
              variant={selectedSeason === season ? "default" : "outline"}
              className="mr-2 whitespace-nowrap"
              onClick={() => setSelectedSeason(season)}
            >
              {season}
            </Button>
          ))}
        </div>
        
        {/* Табы по дням недели */}
        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="monday">Понедельник</TabsTrigger>
            <TabsTrigger value="tuesday">Вторник</TabsTrigger>
            <TabsTrigger value="wednesday">Среда</TabsTrigger>
            <TabsTrigger value="thursday">Четверг</TabsTrigger>
            <TabsTrigger value="friday">Пятница</TabsTrigger>
            <TabsTrigger value="saturday">Суббота</TabsTrigger>
            <TabsTrigger value="sunday">Воскресенье</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
          </TabsContent>
          
          {/* Заполнители для остальных дней недели */}
          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
            <TabsContent key={day} value={day}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {/* Показываем только часть аниме для примера */}
                {newReleases.slice(0, 3).map((anime) => (
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
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Предстоящие релизы */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Предстоящие релизы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newReleases.slice(0, 3).map((anime, index) => (
              <div key={index} className="flex bg-card rounded-lg overflow-hidden border">
                <img 
                  src={anime.image || "/placeholder.svg"} 
                  alt={anime.title} 
                  className="w-24 h-32 object-cover"
                />
                <div className="p-4 flex flex-col">
                  <h3 className="font-semibold line-clamp-1">{anime.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {anime.genres.slice(0, 2).map((genre) => (
                      <Badge key={genre} variant="secondary" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Badge variant="outline" className="text-xs">
                      Выйдет 25 декабря
                    </Badge>
                  </div>
                </div>
              </div>
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

export default NewReleases;
