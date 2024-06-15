"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  id: string;
  name: string;
};

export const ComboBoxResponsive = ({
  model,
  data,
  disabled,
  setSelected,
}: {
  model: string;
  data: any;
  disabled?: boolean;
  setSelected: (status: Status | null) => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null,
  );

  React.useEffect(() => {
    setSelected(selectedStatus);
  }, [selectedStatus]);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant="outline"
            className="w-full justify-start"
          >
            {selectedStatus ? <>{selectedStatus.name}</> : <>{model}</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <StatusList
            model={model}
            data={data}
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          className="w-full justify-start"
        >
          {selectedStatus ? <>{selectedStatus.name}</> : <>{model}</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            model={model}
            data={data}
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

function StatusList({
  setOpen,
  setSelectedStatus,
  data,
  model,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
  data: Status[];
  model: string;
}) {
  return (
    <Command>
      <CommandInput placeholder={`${model} търсене...`} />
      <CommandList>
        <CommandEmpty>Няма намерени резултати.</CommandEmpty>
        <CommandGroup>
          {data &&
            data.map((status) => (
              <CommandItem
                key={status.name}
                value={status.name}
                onSelect={(value: any) => {
                  setSelectedStatus(
                    data.find((priority) => priority.name === value) || null,
                  );
                  setOpen(false);
                }}
              >
                {status.name}
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
