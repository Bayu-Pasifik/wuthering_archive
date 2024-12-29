import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
        { id: "Aero", label: "Aero", icon: "🌪️" },
        { id: "Fusion", label: "Fusion", icon: "🔥" },
        { id: "Glacio", label: "Glacio", icon: "❄️" },
        { id: "Spectro", label: "Spectro", icon: "🌟" },
        { id: "Havoc", label: "Havoc", icon: "🌀" },
        { id: "Electro", label: "Electro", icon: "⚡️" },
        { id: "", label: "Unknown", icon: "❓" },
      ],
    },
    {
      id: "weapons",
      filters: [
        { id: "all", icon: "✳️" },
        { id: "Sword", label: "Sword", icon: "⚔️" },
        { id: "Pistols", label: "Pistol", icon: "🔫" },
        { id: "Rectifier", label: "Rectifier", icon: "🔥" },
        { id: "Broadblade", label: "Broadblade", icon: "🗡️" },
        { id: "Gauntlets", label: "Gauntlets", icon: "🥾" },
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-900 p-4">
      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <div className="flex items-center bg-gray-800 rounded-md w-full max-w-xs">
          <input
            type="text"
            placeholder="Search characters..."
            className="bg-transparent text-gray-300 px-3 py-2 w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="px-3 text-gray-400 hover:text-gray-200"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filter Groups */}
      <div className="flex flex-wrap gap-4">
        {filterGroups.map((group) => (
          <div key={group.id} className="flex flex-wrap gap-2">
            {group.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className="min-w-[40px] h-[40px] flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
              >
                <span className="text-white text-lg">{filter.icon}</span>
              </button>
            ))}
            {group.id !== "weapons" && (
              <div className="w-px h-[40px] bg-gray-700 mx-2 hidden sm:block" />
            )}
          </div>
        ))}

        {/* Reset Button */}
        <button
          onClick={() => onFilterChange("all")}
          className="min-w-[40px] h-[40px] flex items-center justify-center bg-red-700 rounded-md transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
