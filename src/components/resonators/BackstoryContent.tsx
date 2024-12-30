import React, { useState } from "react";
import Image from "next/image";
import { useBackstoryResonators } from "@/app/hooks/useDetailResonator";

type ExpandedSections = {
  introduction: boolean;
  personality: boolean;
  reports: boolean;
  stories: boolean;
};
type SectionKey = keyof ExpandedSections;
const BackstoryContent = ({ name }: { name: string }) => {
  const { data: backstory } = useBackstoryResonators(name);
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    introduction: false,
    personality: false,
    reports: false,
    stories: false,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
      {/* Official Introduction Card */}
      <div className="border rounded-lg shadow-sm">
        <button
          onClick={() => toggleSection("introduction")}
          className="w-full flex justify-between items-center p-4 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Official Introduction</h2>
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSections.introduction ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {expandedSections.introduction && (
          <div className="p-4 border-t bg-gray-50">
            <p className="text-gray-700 leading-relaxed">
              {backstory?.official_introduction}
            </p>
          </div>
        )}
      </div>

      {/* Personality Card */}
      <div className="border rounded-lg shadow-sm">
        <button
          onClick={() => toggleSection("personality")}
          className="w-full flex justify-between items-center p-4 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Appearance & Personality</h2>
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSections.personality ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {expandedSections.personality && (
          <div className="p-4 border-t bg-gray-50">
            <p className="text-gray-700 leading-relaxed">
              {backstory?.personality}
            </p>
          </div>
        )}
      </div>

      {/* Reports Card */}
      <div className="border rounded-lg shadow-sm">
        <button
          onClick={() => toggleSection("reports")}
          className="w-full flex justify-between items-center p-4 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Reports</h2>
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSections.reports ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {expandedSections.reports && (
          <div className="p-4 border-t bg-gray-50 space-y-4">
            {backstory?.report?.map((report, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2 capitalize">
                  {report.title.replace(/_/g, " ")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {report.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Character Stories Card */}
      <div className="border rounded-lg shadow-sm">
        <button
          onClick={() => toggleSection("stories")}
          className="w-full flex justify-between items-center p-4 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Character Stories</h2>
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSections.stories ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {expandedSections.stories && (
          <div className="p-4 border-t bg-gray-50 space-y-4">
            {backstory?.character_stories?.map((story, index) => (
              <div key={index} className="border rounded p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{story.title}</h3>
                  <span className="text-sm text-gray-500">
                    {story.unlock_at}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cherished Items */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Cherished Items</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {backstory?.cherised_items?.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">
                    {item.unlock_at}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackstoryContent;
