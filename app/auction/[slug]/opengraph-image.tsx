import { fetchCarDetails } from "@app/api/cars";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MyRIDE";
export const size = {
  width: 1000,
  height: 630,
};

export const contentType = "image/jpg";

function priceBGN(price: number): any {
  if (price !== 0) {
    const changed = price * 1.792846 + 10000;
    return <b>{Number(changed.toFixed(0)).toLocaleString("bg-BG")} ЛВ.</b>;
  } else {
    return <b>ЗАПОЧНИ НАДДАВАНЕТО</b>;
  }
}

export default async function Image({ params }: { params: { slug: string } }) {
  const cars = await fetchCarDetails(params.slug);

  return new ImageResponse(
    (
      <div tw="text-6xl bg-white w-full h-full flex flex-col items-center justify-center">
        <img
          src={cars.data.lots[cars.data.lots.length - 1].images.normal[0]}
          alt="img"
        />

        <div tw="w-full absolute bg-red-700 bottom-0 flex text-white font-bold uppercase justify-between">
          {cars.data.title}
        </div>

        <div tw="w-full h-20 absolute bg-red-700 top-0 flex text-white justify-end items-center">
          {priceBGN(cars.data.lots[cars.data.lots.length - 1].buy_now)}
        </div>
        <img
          src="https://myride.bg/_next/image?url=%2Fmyride_logo.jpg&w=384&q=75"
          width={200}
          height={200}
          tw="absolute left-0 top-0"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
