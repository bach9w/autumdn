import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const minutes = searchParams.get("minutes") || "10";
  const model = searchParams.get("model");
  const per_page = searchParams.get("per_page") || "100";
  const status = searchParams.get("status") || "3";
  const condition = searchParams.get("condition") || "0";
  const sale_date = searchParams.get("sale_date_in_days") || "7";
  const page = searchParams.get("page") || "1";

  const manufacturer = searchParams.get("manufacturer");

  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4", // Поставете вашия API ключ тук
  };

  const url = new URL("https://carstat.dev/api/cars");
  url.searchParams.append("minutes", minutes);
  url.searchParams.append("per_page", per_page);
  url.searchParams.append("sale_date_in_days", sale_date);
  url.searchParams.append("condition", condition);
  url.searchParams.append("status", status);
  url.searchParams.append("page", page);

  if (manufacturer) url.searchParams.append("manufacturer_id", manufacturer);
  if (model) url.searchParams.append("model_id", model);

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
