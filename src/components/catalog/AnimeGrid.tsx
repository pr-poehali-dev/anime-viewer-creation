
import AnimeCard from "@/components/AnimeCard";
import { AnimeDataType } from "@/types/anime";
import { Button } from "@/components/ui/button";

type AnimeGridProps = {
  animeList: AnimeDataType[];
  showPagination?: boolean;
};

const AnimeGrid = ({ animeList, showPagination = false }: AnimeGridProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animeList.length > 0 ? (
          animeList.map((anime) => (
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

      {showPagination && animeList.length > 8 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="mx-2">Предыдущая</Button>
          <Button variant="outline" className="mx-2">1</Button>
          <Button variant="default" className="mx-2">2</Button>
          <Button variant="outline" className="mx-2">3</Button>
          <Button variant="outline" className="mx-2">Следующая</Button>
        </div>
      )}
    </>
  );
};

export default AnimeGrid;
