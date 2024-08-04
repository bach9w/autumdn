import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MyRIDE";
export const size = {
  width: 1000,
  height: 630,
};

export const contentType = "image/jpg";

import { fetchQuery } from "convex/nextjs";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

export default async function Image({
  params,
}: {
  params: { slug: Id<"availableCars"> };
}) {
  const cars = await fetchQuery(api.listAuctions.getLiveById, {
    id: params.slug,
  });

  return new ImageResponse(
    (
      <div tw="text-6xl bg-white w-full h-full flex flex-col items-center justify-center">
        <img
          src={`${url}${cars?.images?.map((img) => img.url)[0]}`}
          alt="img"
        />

        <div tw="w-full absolute bg-red-700 bottom-0 flex text-white font-bold uppercase justify-between">
          {cars?.modelId}
        </div>

        <div tw="w-full h-20 absolute bg-red-700 top-0 flex text-white justify-end items-center">
          {cars?.vin} ЛВ.
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
