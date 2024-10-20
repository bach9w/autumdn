import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "@components/loading";
import {
  MoveLeft,
  MoveRight,
  SlidersHorizontal,
  SlidersIcon,
} from "lucide-react";
import NewCard from "../components/NewCard";
const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Similiar = ({ manufacturer }: { manufacturer: any }) => {
  useEffect(() => {
    document.body.style.overflow = "scroll";
  }, []);

  const [loading, setLoading] = useState(false);

  const { data, error, isLoading } = useSWR(
    `/api/searchNumber?manufacturer=${manufacturer}&per_page=10`,
    fetcher,
  );

  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;
  return (
    <div className="mt-4 min-h-screen border-none bg-white/0 text-[17px] text-white md:text-xl">
      <h1>Сходни предложения</h1>
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-4">
        {data && data.data.map((car: any) => <NewCard card={car} />)}
      </div>
    </div>
  );
};

export default Similiar;
