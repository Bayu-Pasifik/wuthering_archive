import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: string) => void;
  onSearch: (term: string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  const filterGroups = [
    {
      id: "rarity",
      filters: [
        { id: "all", label: "All", icon: "✳️" },
        { id: "4-star", label: "4★", icon: "4⭐" },
        { id: "5-star", label: "5★", icon: "5⭐" },
      ],
    },
    {
      id: "elements",
      filters: [
        { id: "all", icon: "✳️" },
        { id: "Aero", label: "Aero", icon: "/images/icons/Aero_icon.webp" },
        { id: "Fusion", label: "Fusion", icon: "/images/icons/Fusion_icon.webp" },
        { id: "Glacio", label: "Glacio", icon: "/images/icons/Glacio_icon.webp" },
        { id: "Spectro", label: "Spectro", icon: "/images/icons/Spectro_icon.webp" },
        { id: "Havoc", label: "Havoc", icon: "/images/icons/Havoc_icon.webp" },
        { id: "Electro", label: "Electro", icon: "/images/icons/Electro_icon.webp" },
        { id: "", label: "Unknown", icon: "❓" },
      ],
    },
    {
      id: "weapons",
      filters: [
        { id: "all", icon: "✳️" },
        { id: "Sword", label: "Sword", icon: "/images/icons/Skill_Sword.webp" },
        { id: "Pistols", label: "Pistol", icon: "/images/icons/Skill_Pistols.webp" },
        { id: "Rectifier", label: "Rectifier", icon: "/images/icons/Skill_Rectifier.webp" },
        { id: "Broadblade", label: "Broadblade", icon: "/images/icons/Skill_Broadblade.webp" },
        { id: "Gauntlets", label: "Gauntlets", icon: "/images/icons/Skill_Gauntlets.webp" },
      ],
    },
  ];

  const isImagePath = (icon: string) => icon.includes('/');

  return (
    <div className="w-full p-4">
      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <div className="flex items-center bg-gray-800 rounded-md w-full max-w-xs">
          <input
            type="text"
            placeholder="Search characters..."
            className="bg-transparent text-gray-300 px-3 py-2 w-full outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="px-3 text-gray-400 hover:text-gray-200"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filter Groups */}
      <div className="flex flex-wrap gap-4 mt-10">
        {filterGroups.map((group) => (
          <div key={group.id} className="flex flex-wrap gap-2">
            {group.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className="min-w-[70px] h-[40px] flex items-center justify-center bg-slate-500 hover:bg-slate-600 rounded-md transition-colors"
                title={filter.label}
              >
                {isImagePath(filter.icon) ? (
                  <img
                    src={filter.icon}
                    alt={filter.label || ''}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-white text-lg">{filter.icon}</span>
                )}
              </button>
            ))}
            {group.id !== "weapons" && (
              <div className="w-px h-[40px] mx-2 hidden sm:block" />
            )}
          </div>
        ))}

        {/* Reset Button */}
        <button
          onClick={() => onFilterChange("all")}
          className="min-w-[80px] h-[40px] flex items-center justify-center bg-red-700 hover:bg-red-800 rounded-md transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;