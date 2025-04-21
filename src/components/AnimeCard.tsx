
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
  genres: string[];
  episodeCount: number;
  onClick?: () => void;
}

const AnimeCard = ({
  title,
  image,
  rating,
  genres,
  episodeCount,
  onClick,
}: AnimeCardProps) => {
  return (
    <Card 
      className="cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full"
        />
        <Badge 
          className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm" 
          variant="default"
        >
          ★ {rating.toFixed(1)}
        </Badge>
      </div>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg mb-2 line-clamp-1">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {genres.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 px-4 pb-4">
        <span className="text-xs text-muted-foreground">
          {episodeCount} серий
        </span>
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;
