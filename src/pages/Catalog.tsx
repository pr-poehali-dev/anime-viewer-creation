
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnimeCard from "@/components/AnimeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { popularAnime, newReleases } from "@/data/animeData";

// Объединяем данные для каталога
const allAnime = [...popularAnime, ...newReleases];

// Получаем уникальные жанры
const allGenres = [...new Set(allAnime.flatMap(anime => anime.genres))];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [ratingRange, setRatingRange] = useState([0, 10]);
  
  // Фильтрация аниме
  const filteredAnime = allAnime.filter(anime => {
    // Фильтр по поиску
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Фильтр по жанрам
    const matchesGenres = selectedGenres.length === 0 || 
      selectedGenres.some(genre => anime.genres.includes(genre));
    
    // Фильтр по рейтингу
    const matchesRating = anime.rating >= ratingRange[0] && anime.rating <= ratingRange[1];
    
    return matchesSearch && matchesGenres && matchesRating;
  });

  // Обработчик выбора жанра
  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) 
        : [...prev, genre]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Каталог аниме</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Боковая панель с фильтрами */}
          <div className="bg-card rounded-lg p-6 border h-fit">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Filter size={20} /> Фильтры
            </h2>
            
            <div className="space-y-6">
              {/* Поиск */}
              <div>
                <label className="text-sm font-medium mb-2 block">Поиск</label>
                <div className="relative">
                  <Input
                    placeholder="Поиск аниме..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              
              {/* Жанры */}
              <div>
                <label className="text-sm font-medium mb-2 block">Жанры</label>
                <div className="flex flex-wrap gap-2">
                  {allGenres.map(genre => (
                    <Badge 
                      key={genre}
                      variant={selectedGenres.includes(genre) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleGenre(genre)}
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Рейтинг */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Рейтинг: {ratingRange[0]} - {ratingRange[1]}
                </label>
                <Slider
                  defaultValue={[0, 10]}
                  max={10}
                  step={0.1}
                  value={ratingRange}
                  onValueChange={setRatingRange}
                  className="my-4"
                />
              </div>
              
              {/* Сортировка */}
              <div>
                <label className="text-sm font-medium mb-2 block">Сортировка</label>
                <Select defaultValue="rating-desc">
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите сортировку" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating-desc">По рейтингу (высокий)</SelectItem>
                    <SelectItem value="rating-asc">По рейтингу (низкий)</SelectItem>
                    <SelectItem value="name-asc">По названию (А-Я)</SelectItem>
                    <SelectItem value="name-desc">По названию (Я-А)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">Применить фильтры</Button>
            </div>
          </div>
          
          {/* Основной контент */}
          <div>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="series">Сериалы</TabsTrigger>
                <TabsTrigger value="movies">Фильмы</TabsTrigger>
                <TabsTrigger value="ova">OVA</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredAnime.length > 0 ? (
                    filteredAnime.map((anime) => (
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
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">Аниме не найдено. Попробуйте изменить параметры поиска.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Остальные вкладки будут иметь аналогичную структуру */}
              {["series", "movies", "ova"].map((tab) => (
                <TabsContent key={tab} value={tab} className="pt-4">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Этот раздел находится в разработке.</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            {filteredAnime.length > 8 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-2">Предыдущая</Button>
                <Button variant="outline" className="mx-2">1</Button>
                <Button variant="default" className="mx-2">2</Button>
                <Button variant="outline" className="mx-2">3</Button>
                <Button variant="outline" className="mx-2">Следующая</Button>
              </div>
            )}
          </div>
        </div>
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

export default Catalog;
