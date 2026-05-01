import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const ListingCard = ({
  id,
  title,
  imageUrl,
  category,
  tags,
  price,
}: {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  tags: string[];
  price: string;
}) => {
  return (
    <Link to={`/listings/${id}`}>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-square" />
        <img
          src={imageUrl}
          alt={title}
          className="relative z-20 w-full aspect-square object-cover"
        />
        <CardHeader>
          <p className="text-sm text-gray-500">{category}</p>
          <CardTitle className="truncate">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">${price}</p>
          <div>
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} className="mr-2 mt-2">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
