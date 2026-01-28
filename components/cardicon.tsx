import { CardProps } from "@/types";

export const CardIcon = ({ id, name, setName, cardNumber, rarity, imageUrl }: CardProps) => {
    return (
        <div className="card-icon bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
            <div className="p-4 bg-gray-50 flex justify-center items-center">
                 {imageUrl && <img src={imageUrl} alt={name} className="w-full object-contain rounded shadow-sm" />}
            </div>
            <div className="p-4 border-t border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 text-center">{name}</h3>
                <div className="text-sm text-gray-500 space-y-1">
                     <p className="flex justify-between"><span>Set:</span> <span className="font-medium text-gray-900">{setName}</span></p>
                     <p className="flex justify-between"><span>No:</span> <span className="font-medium text-gray-900">{cardNumber}</span></p>
                     <p className="flex justify-between"><span>Rarity:</span> <span className="font-medium text-gray-900">{rarity}</span></p>
                </div>
            </div>
        </div>
    );
}