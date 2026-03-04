"use client";
import { MockCards } from "../mockdata";
import { CardIcon } from "@/components/cardicon";
import { CardResponse, CardProps } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState<CardResponse<CardProps>>();

  useEffect(() => {
    //call cards api
    async function getCards() {
      const res = await fetch("/api/cards");
      if (!res.ok) throw new Error("Failed to fetch cards");

      const data = await res.json();
      console.log(data);
      setCards(data);
    }
    getCards();
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Card Sets</h2>
      <p className="text-lg mb-6">
        Discover different card sets and their features in our extensive
        database.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards?.data?.map((card) => (
          <Link
            key={card.id}
            href={`/cards/${card.id}`}
            className="block h-full"
          >
            <CardIcon {...card} />
          </Link>
        ))}
      </div>
    </div>
  );
}
