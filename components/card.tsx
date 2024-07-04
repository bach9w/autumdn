import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardMain() {
  return (
    <Card className="w-full overflow-hidden rounded-lg border-none bg-card text-card-foreground shadow-lg">
      <div className="relative">
        <img
          src="/placeholder.svg"
          alt="Car Image"
          width={600}
          height={300}
          className="h-[300px] w-full object-cover"
        />
        <div className="bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-end justify-between">
            <div className="text-white">
              <h3 className="text-2xl font-bold">Acme Roadster</h3>
              <p className="text-sm">2023 | 25,000 mi</p>
            </div>
            <div className="text-2xl font-bold text-white">$45,999</div>
          </div>
        </div>
      </div>
      <CardContent className="space-y-4 p-6">
        <p>
          The Acme Roadster is a sleek and powerful sports car that combines
          style and performance. With its turbocharged engine and responsive
          handling, it's the perfect choice for the driving enthusiast.
        </p>
        <div className="flex justify-between">
          <Button variant="outline">Learn More</Button>
          <Button>Schedule Test Drive</Button>
        </div>
      </CardContent>
    </Card>
  );
}
