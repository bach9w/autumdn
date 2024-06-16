import { Badge } from "@components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@components/ui/card";
import { Label } from "@components/ui/label";

const Video360 = ({ video }: { video: any }) => {
  return (
    <>
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle>
            <Badge>360 Video</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-10 h-full w-full">
            <iframe
              src={video}
              className="h-[400px] w-full border-4 border-black p-2 sm:h-[600px]"
              allowFullScreen
              title="360 view"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Label>Разгледайте 3D автомобила</Label>
        </CardFooter>
      </Card>
    </>
  );
};

export default Video360;
