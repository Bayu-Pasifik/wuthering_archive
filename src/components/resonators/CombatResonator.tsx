import React from 'react';
import Image from 'next/image';
import { useCombatResonators } from '@/app/hooks/useDetailResonator';

const CombatContent =  ({ name }: { name: string }) => {
    const { data:combat, isLoading, isError, error } = useCombatResonators(name);
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.message}</div>;
  
    if (!combat) return <div>No data available</div>;
    console.log(combat.img_forte);
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
        {/* Header Section */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <Image
            width={1000}
            height={1000}
            src={combat?.img_forte}
            alt={`${combat?.name} Forte Gauge`}
            className="w-auto h-16 object-contain"
          />
        </div>
  
        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instruction</h2>
          <p className="mb-4">{combat?.instruction}</p>
          <ul className="list-disc list-inside pl-4">
            {combat?.additional_instruction.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Skills Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {combat?.forte_skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-700 rounded-md flex items-start gap-4"
              >
                <Image
                  width={1000}
                  height={1000}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                  <p className="text-sm text-gray-300 italic mb-2">
                    {skill.type}
                  </p>
                  <p className="text-sm text-gray-100">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CombatContent;
