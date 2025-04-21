
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import CatalogTabs from "@/components/catalog/CatalogTabs";
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Каталог аниме</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Боковая панель с фильтрами */}
          <CatalogFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            ratingRange={ratingRange}
            setRatingRange={setRatingRange}
            allGenres={allGenres}
          />
          
          {/* Основной контент */}
          <div>
            <CatalogTabs filteredAnime={filteredAnime} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
