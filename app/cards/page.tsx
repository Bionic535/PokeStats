import { MockCards } from "../mockdata";
import { CardIcon } from "@/components/cardicon";
import Link from "next/link";
export default function Cards() {
    return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Card Sets</h2>
      <p className="text-lg mb-6">
        Discover different card sets and their features in our extensive database.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MockCards.data.map((card) => (
          <Link key={card.id} href={`/cards/${card.id}`} className="block">
            <CardIcon 
              {...card}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}