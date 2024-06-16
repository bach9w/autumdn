import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const minutes = searchParams.get("minutes") || "";
  const per_page = searchParams.get("per_page") || "10";
  const status = searchParams.get("status") || "";
  const sale_date = searchParams.get("sale_date_in_days") || "";
  const condition = searchParams.get("condition") || "";
  const fuel_type = searchParams.get("fuel");
  const year = searchParams.get("year");
  const manufacturer = searchParams.get("manufacturer");
  const model = searchParams.get("model");
  const page = searchParams.get("page");

  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4", // Поставете вашия API ключ тук
  };

  const url = new URL("https://carstat.dev/api/cars");
  url.searchParams.set("minutes", minutes);
  url.searchParams.set("per_page", per_page);

  if (condition) url.searchParams.set("condition", condition);
  if (sale_date) url.searchParams.set("sale_date_in_days", sale_date);
  if (fuel_type) url.searchParams.set("fuel_type", fuel_type);
  if (year) url.searchParams.set("year", year);
  if (manufacturer) url.searchParams.set("manufacturer_id", manufacturer);
  if (model) url.searchParams.set("model_id", model);
  if (page) url.searchParams.set("page", page);

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
