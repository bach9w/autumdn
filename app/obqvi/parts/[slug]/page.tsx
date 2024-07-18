"use client";

import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Textarea } from "@components/ui/textarea";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { slug: Id<"parts"> } }) => {
  const part = useQuery(api.parts.getPartById, { id: params.slug });
  const [information, setInformation] = useState<any>(part?.information);
  const [price, setPrice] = useState<any>(part?.formatted_price);
  const [isStock, setIsStock] = useState<boolean>(part?.is_in_stock);
  const update = useMutation(api.parts.updatePart);

  useEffect(() => {
    if (part) {
      setInformation(part?.information);
      setPrice(part?.formatted_price);
      setIsStock(part?.is_in_stock);
    }
  }, [part]);

  const router = useRouter();

  return (
    <div className="min-h-screen p-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-black">{part?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <img
              alt="Product image"
              className="h-64 w-full rounded-md object-cover"
              src={part?.base_image[0].path}
            />
          </div>
          <div>
            <Label>Информация</Label>

            <Textarea
              onChange={(e) => {
                setInformation(e.target.value);
              }}
              value={information ? information : part?.information}
            />

            <Label>Цена</Label>
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price || part?.formatted_price}
            />
            <Label>Наличност</Label>
            <Select
              onValueChange={(value) => {
                setIsStock(value === "true" ? true : false);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={part?.is_in_stock || isStock ? "Да" : "Не"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Да</SelectItem>
                <SelectItem value="false">Не</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex w-full justify-between">
          <Button
            onClick={() => {
              update({
                id: params.slug,
                price: price,
                information: information,
                is_in_stock: isStock,
              });
              router.push("/obqvi/parts");
            }}
          >
            Запази промените
          </Button>
          <Button>Върни се назад</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
