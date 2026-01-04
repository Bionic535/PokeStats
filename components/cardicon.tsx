import { CardProps } from "@/types";

export const CardIcon = ({ id, name, setName, cardNumber, rarity, imageUrl }: CardProps) => {
    return (
        <div className="card-icon border-black border-4 rounded-xl p-1 w-full">
            {imageUrl && <img src={imageUrl} alt={name} className="block w-full"></img>}
            <div className="mt-2 break-words text-center">
                <h3 className="font-bold leading-tight">{name}</h3>
                <p className="text-sm">Set: {setName}</p>
                <p className="text-sm">Card Number: {cardNumber}</p>
                <p className="text-sm">Rarity: {rarity}</p>
            </div>
        </div>
    );
}