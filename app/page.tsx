import { ComponentExample } from "@/components/component-example";
import { SetIcon } from "@/components/seticon"
import { mockData, MockCards } from "./mockdata"
import Link from "next/link";
import { CardIcon } from "@/components/cardicon";
export default async function Page() {
return (
  <>
    <h2>Recent Sets</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockData.data.map((set) => (
        <Link key={set.id} href={`/sets/${set.id}`}>
          <SetIcon 
            {...set}
          />
        </Link>
      ))}
    </div>
    <h2>Recent Cards</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {MockCards.data.map((card) => (
        <Link key={card.id} href={`/cards/${card.id}`} className="block">
          <CardIcon 
            {...card}
          />
        </Link>
      ))}
    </div>
  </>
);
}