import { MockCards } from "@/app/mockdata";
import { CardProps } from "@/types";

export default async function Card({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const card = MockCards.data.find((card) => card.id === id);
    if (!card) {
        return <div className="container mx-auto py-8">Card not found.</div>;
    }
    const CardDetails: CardProps = {
        id: card.id,
        name: card.name,
        setName: card.setName,
        cardNumber: card.cardNumber,
        rarity: card.rarity,
        imageUrl: card.imageUrl,
    }




    return (
        <div>
            <p>{CardDetails.id}</p>
            <p>{CardDetails.name}</p>
            <p>{CardDetails.setName}</p>
            <p>{CardDetails.cardNumber}</p>
            <p>{CardDetails.rarity}</p>
            <img src={CardDetails.imageUrl} alt={CardDetails.name} />
        </div>
    );

}