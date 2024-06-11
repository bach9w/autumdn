import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
   


  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4", // Поставете вашия API ключ тук
  };

  const vin = params.slug;
  
  if (!vin) {
    return NextResponse.json(
      { error: "VIN is required" },
      { status: 400 }
    );
  }

  // URL за API заявката
  const url = new URL(`https://import-motor.com/api/search-vin/${vin}`);

  try {
    // Изпращане на заявката до API-то
    const response = await fetch(url.toString(), { headers });

    // Проверка дали отговорът е успешен
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status }
      );
    }

    // Парсиране на JSON данните от отговора
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Обработка на грешки
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
