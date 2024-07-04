import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Badge } from "@components/ui/badge";

import { Button } from "@components/ui/button";
const storageLink = "https://wandering-bison-612.convex.site";
function Image({ storageId }: { storageId: string }) {
  // e.g. https://happy-animal-123.convex.site/getImage?storageId=456
  const getImageUrl = new URL(`${storageLink}/getImage`);
  getImageUrl.searchParams.set("storageId", storageId);

  return <img src={getImageUrl.href} height="300px" width="300px" />;
}

const CarCard = ({ car }: { car: any }) => {
  return (
    <div className="container">
      <Card className="box m-0 my-2 h-full overflow-hidden border-none p-0 shadow-md shadow-black">
        <CardHeader>
          <div className="flex w-full justify-between text-white">
            <div className="flex">
              {car.vin && (
                <Badge className="flex items-center justify-center rounded-md">
                  VIN - {car.vin}
                </Badge>
              )}
            </div>
          </div>

          <CardTitle>
            <div className="mt-2 flex w-full justify-between">
              <div className="flex flex-col text-black">
                <p>{car.manufacturerId && car.manufacturerId}</p>
                {car.modelId && car.modelId}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {car.images && (
            <Carousel key={car.images.url}>
              <CarouselContent>
                {car.images.map((image: any) => (
                  <CarouselItem className="flex h-full w-full items-center justify-center">
                    <Image storageId={image.url} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
          {car.fuel} / {car.transmission} / {car.airbags ? "Да" : "Не"} /{" "}
          {car.keys ? "Да" : "Не"} / {car.km} km
        </CardContent>
        <CardDescription className="mb-2 flex w-full items-center justify-center">
          <Button>Получи информация</Button>
        </CardDescription>
      </Card>
    </div>
  );
};

export default CarCard;
