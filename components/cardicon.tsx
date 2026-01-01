import { CardProps } from "@/types";

export const CardIcon = ({ id, name, setName, cardNumber, rarity }: CardProps) => {
    return (
        <div className="card-icon">
            <h3>{name}</h3>
            <p>Set: {setName}</p>
            <p>Card Number: {cardNumber}</p>
            <p>Rarity: {rarity}</p>
        </div>
    );
}