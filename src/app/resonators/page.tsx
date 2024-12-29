"use client";
import HeroDetail from "@/components/HeroDetail";
import SelectionGrid from "@/components/SelectionGrid";
import { useResonators } from "../hooks/useResonators";

const ResonatorPage: React.FC = () => {
  const { data: resonatorData, isLoading, isError, error } = useResonators();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="h-screen relative bg-black">
      <HeroDetail />
      {/* Kirimkan data yang diperlukan ke SelectionGrid */}
      <SelectionGrid
        data={resonatorData?.map((resonator) => ({
          source: resonator.icon,
          title: resonator.name,
          description: resonator.birthPlace,
          attribute: resonator.attribute
        })) || []}
      />
    </div>
  );
};

export default ResonatorPage;
