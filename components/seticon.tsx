import { SetProps } from "@/types";

export const SetIcon = ({ id, name, series, releaseDate, cardCount, imageUrl }: SetProps) => {
    return (
        <div className="set-icon bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
            {imageUrl && (
                <div className="mb-4 flex justify-center">
                    <img src={imageUrl} alt={name} className="h-32 object-contain" />
                </div>
            )}
            <h3 className="font-bold text-xl mb-2 text-gray-900">{name}</h3>
            <div className="text-sm text-gray-500 space-y-1 mt-auto">
                <p><span className="font-medium text-gray-700">Series:</span> {series}</p>
                <p><span className="font-medium text-gray-700">Release Date:</span> {releaseDate}</p>
                <p><span className="font-medium text-gray-700">Card Count:</span> {cardCount}</p>
            </div>
        </div>
    );
}