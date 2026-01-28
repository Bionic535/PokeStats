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
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-50 p-8 flex items-center justify-center">
                        {CardDetails.imageUrl ? (
                            <img 
                                src={CardDetails.imageUrl} 
                                alt={CardDetails.name} 
                                className="w-full h-auto object-contain rounded-lg shadow-md max-h-[400px]" 
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                                No Image
                            </div>
                        )}
                    </div>
                    <div className="md:w-2/3 p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold mb-1">
                            {CardDetails.setName}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">{CardDetails.name}</h1>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="block text-sm font-medium text-gray-500 mb-1">Card Number</span>
                                <span className="text-lg font-semibold text-gray-900">{CardDetails.cardNumber}</span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="block text-sm font-medium text-gray-500 mb-1">Rarity</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                    {CardDetails.rarity}
                                </span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 col-span-1 sm:col-span-2">
                                <span className="block text-sm font-medium text-gray-500 mb-1">Card ID</span>
                                <span className="font-mono text-gray-700">{CardDetails.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}