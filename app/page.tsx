"use client";
import { ComponentExample } from "@/components/component-example";
import { SetIcon } from "@/components/seticon";
import { mockData, MockCards } from "./mockdata";
import Link from "next/link";
import { CardIcon } from "@/components/cardicon";
import { useState, useEffect } from "react";
import { ApiResponse } from "@/types";

export default function Page() {
  const [cards, setCards] = useState<ApiResponse>();

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
    <>
      <main className="container mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Recent Sets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockData.data.map((set) => (
              <Link key={set.id} href={`/sets/${set.id}`}>
                <SetIcon {...set} />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Recent Cards
          </h2>
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
        </section>
      </main>
    </>
  );
}
