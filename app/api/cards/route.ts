import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    const key = "cards";
    const cached = await redis.get(key);
    if (cached) {
      console.log("cached");
      return NextResponse.json(JSON.parse(cached));
    }
    console.log("fetching data");
    const response = await fetch(
      'https://www.pokemonpricetracker.com/api/v2/cards?setId=&set=&search=&rarity=&minPrice=20&printing=&includeHistory=true&includeEbay=true&includeBoth=true&days=3&sortOrder=asc&limit=3',
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );
    console.log("data fetched");

    if (!response.ok) {
      throw new Error(
        `External API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    // Store in Redis
    await redis.set(key, JSON.stringify(data), "EX", 86400);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in GET /api/cards:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
