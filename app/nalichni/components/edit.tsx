import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Switch } from "@components/ui/switch";
import { api } from "@convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

const Edit = ({ car }: { car: any }) => {
  const [price, setPrice] = useState<any>(car?.vin);

  const [status, setStatus] = useState<any>(`${car?.is_sold}`);
  const update = useMutation(api.cars.editAvailableCar);

  const saveChanges = () => {
    update({ id: car._id, vin: price, is_sold: status });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="uppercase">Промени</Button>{" "}
      </AlertDialogTrigger>
      <AlertDialogContent className="h-full border-none bg-red-500 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {car?.manufacturerId} / {car?.modelId}
          </AlertDialogTitle>

          <AlertDialogDescription>
            Тези действия не могат да бъдат отменени.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogDescription>
          Въведете нови данни за {car?.manufacturerId} / {car?.modelId}.
          <div className="space-y-4">
            <Label>Нова цена: {price} лв.</Label>
            <Input
              onChange={(e) => setPrice(e.currentTarget.value)}
              className="text-[17px] text-black"
              placeholder={`${car?.vin} лв.`}
            />
            <div className="flex w-full flex-col items-center justify-center space-y-4">
              <Label>Състояние</Label>
              <div className="flex w-full items-center justify-center gap-6">
                Продадено
                {status}
                <Switch
                  checked={status}
                  onCheckedChange={(e) => setStatus(!status)}
                />
                Непродадено
              </div>
            </div>
          </div>
        </AlertDialogDescription>

        <AlertDialogFooter>
          <AlertDialogCancel className="text-black">Затвори</AlertDialogCancel>
          <AlertDialogAction>Свали обявата</AlertDialogAction>

          <AlertDialogAction onClick={saveChanges}>Запази</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Edit;
