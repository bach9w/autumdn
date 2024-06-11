import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const minutes = searchParams.get("minutes") || "10";
  const per_page = searchParams.get("per_page") || "100";
  const status = searchParams.get("status") || "3";
  const sale_date = searchParams.get("sale_date_in_days") || "7";
  const condition = searchParams.get("condition") || "0";
  const fuel_type = searchParams.get("fuel");
  const year = searchParams.get("year");
  const manufacturer = searchParams.get("manufacturer");
  const model = searchParams.get("model");

  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4", // Поставете вашия API ключ тук
  };

  const url = new URL("https://import-motor.com/api/cars");
  url.searchParams.append("minutes", minutes);
  url.searchParams.append("per_page", per_page);

  url.searchParams.append("condition", condition);
  url.searchParams.append("sale_date_in_days", sale_date);
  if (fuel_type) url.searchParams.append("fuel_type", fuel_type);
  if (year) url.searchParams.append("year", year);
  if (manufacturer) url.searchParams.append("manufacturer_id", manufacturer);
  if (model) url.searchParams.append("model", model);

  try {
    const response = await fetch(url, {
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
