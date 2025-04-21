
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimeGrid from "./AnimeGrid";
import { AnimeDataType } from "@/types/anime";

type CatalogTabsProps = {
  filteredAnime: AnimeDataType[];
};

const CatalogTabs = ({ filteredAnime }: CatalogTabsProps) => {
  return (
    <Tabs defaultValue="all" className="mb-8">
      <TabsList>
        <TabsTrigger value="all">Все</TabsTrigger>
        <TabsTrigger value="series">Сериалы</TabsTrigger>
        <TabsTrigger value="movies">Фильмы</TabsTrigger>
        <TabsTrigger value="ova">OVA</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="pt-4">
        <AnimeGrid animeList={filteredAnime} showPagination={true} />
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
  );
};

export default CatalogTabs;
