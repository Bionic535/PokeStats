"use client";
import { mockData } from "../mockdata";
import { SetIcon } from "@/components/seticon";
import { useState, useEffect } from "react";
import { SetResponse, SetProps } from "@/types";

import Link from "next/link";

export default function CardSetPage() {
  const [sets, setSets] = useState<SetResponse<SetProps>>();

  useEffect(() => {
    //call sets api
    async function getSets() {
      const res = await fetch("/api/sets");
      if (!res.ok) throw new Error("Failed to fetch sets");

      const data = await res.json();
      console.log(data);
      setSets(data);
    }
    getSets();
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Card Sets</h2>
      <p className="text-lg mb-6">
        Discover different card sets and their features in our extensive database.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sets?.data?.map((set) => (
          <Link key={set.id} href={`/sets/${set.id}`} className="block h-full">
            <SetIcon 
              {...set}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}