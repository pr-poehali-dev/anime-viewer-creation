
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Filter, Search } from "lucide-react";

type CatalogFiltersProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
  ratingRange: number[];
  setRatingRange: (range: number[]) => void;
  allGenres: string[];
};

const CatalogFilters = ({
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
  ratingRange,
  setRatingRange,
  allGenres
}: CatalogFiltersProps) => {
  // Обработчик выбора жанра
  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) 
        : [...prev, genre]
    );
  };

  return (
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
  );
};

export default CatalogFilters;
