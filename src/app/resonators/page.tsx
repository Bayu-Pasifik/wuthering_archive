'use client'
import HeroDetail from "@/components/HeroDetail";
import SelectionGrid from "@/components/SelectionGrid";
import { useResonators } from "../hooks/useResonators";

const ResonatorPage: React.FC = () => {
  const {
    data: resonatorData,
    isLoading,
    isError,
    error,
  } = useResonators();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  // Map the data to match the required props for SelectionCard
  const formattedData = resonatorData!.map((resonator) => ({
    source: resonator.images.fullBody, // assuming the image URL is stored in imageUrl
    title: resonator.name, // assuming the name is stored in name
    description: resonator.introduction, // assuming the description is in description
    link: `/resonators/${resonator.id}`, // assuming you use id for routing
  }));

  return (
    <div className="h-screen relative bg-black">
      <HeroDetail />
      <SelectionGrid data={formattedData!} />
    </div>
  );
};

export default ResonatorPage;
