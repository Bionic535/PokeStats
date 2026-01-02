import { CardProps } from "@/types";

export const CardIcon = ({ id, name, setName, cardNumber, rarity, imageUrl }: CardProps) => {
    return (
        <div className="card-icon">
            {imageUrl && <img src={imageUrl} alt={name}></img>}
            <h3>{name}</h3>
            <p>Set: {setName}</p>
            <p>Card Number: {cardNumber}</p>
            <p>Rarity: {rarity}</p>
        </div>
    );
}