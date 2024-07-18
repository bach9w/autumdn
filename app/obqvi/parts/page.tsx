"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

const Parts = () => {
  const parts = useQuery(api.parts.getParts);
  const deletePart = useMutation(api.parts.deletePart);
  return (
    <div className="mt-4 flex h-full min-h-screen items-center justify-center p-2">
      <Card className="m-2">
        <CardHeader>
          <CardTitle className="flex w-full justify-between">
            Части
            <Link href="/obqvi/parts/dobavi">
              <Button>Добави</Button>
            </Link>
          </CardTitle>
          <CardDescription>Всички части за автомобили</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">снимка</span>
                </TableHead>
                <TableHead>Име</TableHead>
                <TableHead className="hidden md:table-cell">
                  Наличност
                </TableHead>

                <TableHead>Цена</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parts &&
                parts.map((part) => (
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={part.base_image[0].path}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{part.name}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline">
                        {part.is_in_stock ? "Да " : "Не"}
                      </Badge>
                    </TableCell>

                    <TableCell>{part.formatted_price}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Действия</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Link href={`/obqvi/parts/${part._id}`}>
                              Промени
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              deletePart({
                                id: part._id,
                              });
                            }}
                          >
                            Изтрий
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Показване <strong>1-10</strong> от <strong>{parts?.length}</strong>{" "}
            части
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Parts;
