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
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@components/ui/accordion";

import { Badge } from "@components/ui/badge";

import { Button } from "@components/ui/button";
import { AccordionItem } from "@radix-ui/react-accordion";

interface CarProps {
  airbags: boolean;
  body_type: any;
  color: any;
  drive_wheel: any;
  engine: any;
  fuel: any;
  images: any;
  keys: boolean;
  km: any;
  manufacturerId: any;
  modelId: any;
  transmission: any;
  vin: any;
  year: any;
}

const storageLink = "https://wandering-bison-612.convex.site";
function Image({ storageId }: { storageId: string }) {
  // e.g. https://happy-animal-123.convex.site/getImage?storageId=456
  const getImageUrl = new URL(`${storageLink}/getImage`);
  getImageUrl.searchParams.set("storageId", storageId);

  return <img height={500} src={getImageUrl.href} />;
}

export function CardMain({ car }: { car: CarProps }) {
  return (
    <Card className="w-full overflow-hidden rounded-lg border-none bg-card text-card-foreground shadow-lg">
      <div className="">
        <div className="bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-end justify-between">
            <div className="text-white">
              <h3 className="text-2xl font-bold">
                {car.manufacturerId}/{car.modelId}
              </h3>
              <p className="text-sm">
                {car.year} | {car.km} km
              </p>
            </div>
            <div className="text-2xl font-bold text-white">{car?.vin} ЛВ.</div>
          </div>
        </div>
      </div>
      <Carousel>
        <CarouselContent>
          {car.images.map((image: any) => (
            <CarouselItem>
              <Image storageId={image.url} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CardContent className="space-y-4 p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Допълнителна информация</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4 text-center uppercase">
                <div>
                  <h4 className="text-sm font-medium">Ключове</h4>
                  {car.keys && <Badge variant="destructive">Да</Badge>}
                </div>
                <div>
                  <h4 className="text-sm font-medium">Airbags</h4>
                  {car.airbags && <Badge variant="destructive">Да</Badge>}
                </div>
                <div>
                  <h4 className="text-sm font-medium">Тип</h4>
                  <p className="uppercase">{car.body_type}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Цвят</h4>
                  <p>{car.color}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Гориво</h4>
                  <p>{car.fuel}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Трансмисия</h4>
                  <p>{car.transmission}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Двигател</h4>
                  <p>{car.engine}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex w-full justify-between gap-2">
          <Button variant="outline" className="border-none bg-orange-700">
            Получи информация
          </Button>
          <Button>Направи запитване</Button>
        </div>
      </CardContent>
    </Card>
  );
}
