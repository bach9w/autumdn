import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const manufacturer = searchParams.get("manufacturer");
  const model = searchParams.get("model");
  const generation = searchParams.get("generation");
  const from_year = searchParams.get("from_year");
  const to_year = searchParams.get("to_year");
  const status = "3";
  const condition = "0";
  const buy_now = "1";

  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4", // Поставете вашия API ключ тук
  };

  const url = new URL("https://carstat.dev/api/cars");

  if (condition) url.searchParams.set("condition", condition);

  if (manufacturer) url.searchParams.set("manufacturer_id", manufacturer);
  if (generation) url.searchParams.set("generation_id", generation);
  if (model) url.searchParams.set("model_id", model);
  if (buy_now) url.searchParams.set("buy_now", buy_now);
  if (status) url.searchParams.set("status", status);
  if (from_year) url.searchParams.set("from_year", from_year);
  if (to_year) url.searchParams.set("to_year", to_year);

  try {
    const response = await fetch(url.toString(), {
      headers: headers,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
