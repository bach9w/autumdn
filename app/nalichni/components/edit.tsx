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
import { api } from "@convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

const Edit = ({ car }: { car: any }) => {
  const [price, setPrice] = useState<any>();
  const update = useMutation(api.cars.editAvailableCar);
  const saveChanges = () => {
    update({ id: car._id, vin: price });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="uppercase">Промени</Button>{" "}
      </AlertDialogTrigger>
      <AlertDialogContent className="h-full w-full border-none text-white">
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
          <div>
            <Label>Нова цена: {price} лв.</Label>
            <Input
              onChange={(e) => setPrice(e.currentTarget.value)}
              className="text-black"
              placeholder={`${car?.vin} лв.`}
            />
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
