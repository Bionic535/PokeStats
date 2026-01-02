export interface CardProps {
    id: string;
    name: string;
    setName: string;
    cardNumber: string;
    rarity: string;
    imageUrl?: string;
}

export interface SetProps {
    id: string;
    name: string;
    series: string;
    releaseDate: string;
    cardCount: number;
    imageUrl?: string;
}