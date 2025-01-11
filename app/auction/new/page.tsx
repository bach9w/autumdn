"use client";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
export default function VehicleListing() {
  const [name, setName] = useState();

  return (
    <div className="container mx-auto bg-white p-4 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery Section */}
        <div className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0524/47fffdb423a5406fbc43d42c28c3952b_hrs.jpg"
              alt="Ford F-150 2019"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0524/47fffdb423a5406fbc43d42c28c3952b_hrs.jpg"
                alt="Ford F-150 side view"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              whileHover={{
                scale: 2,
              }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0524/47fffdb423a5406fbc43d42c28c3952b_hrs.jpg"
                alt="Ford F-150 rear view"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0524/47fffdb423a5406fbc43d42c28c3952b_hrs.jpg"
                alt="Ford F-150 VIN"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Ford F-150 XLT</h1>
            <div className="mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-black">USA / SUN VALLEY</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">2019</Badge>
            <Badge variant="secondary">83,555 km</Badge>
            <Badge variant="secondary">Automatic</Badge>
            <Badge variant="secondary">Gasoline</Badge>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black">ТЕКУЩО НАДДАВАНЕ</p>
                  <p className="text-2xl font-bold text-black">12,493 лв.</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      1д 18ч 34м
                    </span>
                  </div>
                  <Badge className="mt-1" variant="destructive">
                    Аукцион на живо
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Button size="lg" variant="default">
              <Phone className="mr-2 h-4 w-4" />
              ЗА ВРЪЗКА
            </Button>
            <Button size="lg" variant="destructive">
              КУПИ СЕГА - 27,555 лв.
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="bg-white p-2 text-xl font-semibold text-black">
              СЪСТОЯНИЕ НА АВТОМОБИЛА
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">VIN</p>
                <p className="font-mono">1FM5K8AB1NGC22183</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ID</p>
                <p className="font-mono">8095949</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ДВИГАТЕЛ</p>
                <p>3.3L 6-cylinder</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Airbags</p>
                <p>Intact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
