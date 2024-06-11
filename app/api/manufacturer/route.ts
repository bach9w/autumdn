import { NextResponse } from "next/server";

export async function GET(request: Request) {
 

  const headers = {
    "x-api-key": "a48f8f672e29bd479c652f76f100bcf4", // Поставете вашия API ключ тук
  };

  const url = new URL("https://import-motor.com/api/manufacturers");

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
