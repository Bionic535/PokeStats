import { mockData } from "@/app/mockdata";
import { SetProps } from "@/types";

export default async function Set({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const setData = mockData.data.find((set) => set.id === id);
  if (!setData) {
    return <div className="container mx-auto py-8">Set not found.</div>;
  }
  const setDetails: SetProps = {
    id: setData.id,
    name: setData.name,
    series: setData.series,
    releaseDate: setData.releaseDate,
    cardCount: setData.cardCount,
    imageUrl: setData.imageUrl,
  };
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="md:flex items-center p-8">
          {setDetails.imageUrl && (
            <div className="md:shrink-0 mb-4 md:mb-0 md:mr-6">
              <img 
                className="h-24 w-24 object-contain" 
                src={setDetails.imageUrl} 
                alt={setDetails.name} 
              />
            </div>
          )}
          <div className="flex-1">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {setDetails.series}
            </div>
            <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">
              {setDetails.name}
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
              <div>
                <span className="font-semibold block">Release Date:</span>
                {setDetails.releaseDate}
              </div>
              <div>
                <span className="font-semibold block">Total Cards:</span>
                {setDetails.cardCount}
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-400 font-mono">ID: {setDetails.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}