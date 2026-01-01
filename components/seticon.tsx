import { SetProps } from "@/types";

export const SetIcon = ({ id, name, series, releaseDate, cardCount, imageUrl }: SetProps) => {
    return (
        <div className="set-icon border-black border-4 rounded-xl p-4">
            {imageUrl && <img src={imageUrl} alt={name}></img>}
            <h3>{name}</h3>
            <p>Series: {series}</p>
            <p>Release Date: {releaseDate}</p>
            <p>Card Count: {cardCount}</p>
        </div>
    );
}