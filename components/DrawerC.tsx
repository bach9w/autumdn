"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="relative top-[1100px] z-30 h-[100px] w-full bg-orange-700 uppercase text-white xl:top-[900px]"
              variant="outline"
            >
              Намерете желания автомобил, бързо и лесно.
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Налични: - аукциони API</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="h-[100px] w-full bg-orange-700 uppercase text-white xl:hidden"
              variant="outline"
            >
              Намерете желания автомобил, бързо и лесно.
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Налични: - аукциони API</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="h-[100px] w-full bg-orange-700 uppercase text-white"
          variant="outline"
        >
          Не открихте това, което търсехте <br /> опитайте пак или проверете
          всички <br />
          аукциони от днес
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Налични: - аукциони API </DrawerTitle>
          <DrawerDescription>
            Намерете желания автомобил, бързо и лесно.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start justify-center gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Всички марки</Label>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Всички модели</Label>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Година от</Label>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Година до</Label>
      </div>
      <Button type="submit">Търси в USA</Button>
    </form>
  );
}
export default DrawerDialogDemo;
