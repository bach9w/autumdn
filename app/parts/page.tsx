import { Card, CardContent, CardHeader } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import parts from "./parts.json";
const Page = () => {
  return (
    <div>
      <div className="h-full w-full text-center text-white">
        Части за автомобили (втора употреба)
        <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-3">
          {parts.map((part) => (
            <Card key={part.id}>
              <CardHeader>{part.name}</CardHeader>
              <CardContent>
                <div>
                  <img
                    src={part.base_image.path}
                    alt={part.name}
                    className="aspect-square h-full w-full"
                  />
                </div>
                <div className="mt-2 flex w-full justify-between">
                  <Badge>{part.price.amount} ЛВ</Badge>
                  <Badge>{part.is_new ? "НОВ" : "ВТОРА УПОТРЕБА"}</Badge>

                  <Badge className="bg-orange-500 shadow-md shadow-black drop-shadow-sm">
                    Получи информация
                  </Badge>
                  <Badge className="bg-red-500 shadow-md shadow-black drop-shadow-sm">
                    Позвъни сега
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
