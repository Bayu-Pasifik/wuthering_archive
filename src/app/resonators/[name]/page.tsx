'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useDetailResonators } from '@/app/hooks/useDetailResonator';
import Image from 'next/image';

export default function ResonatorDetail() {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'backstory' | 'combat' | 'voicelines'>('overview');
  const { name } = useParams<{ name: string }>();
  const paramName = name || "";

  const { data: resonator, isLoading, isError, error } = useDetailResonators(paramName);
  
  if(isLoading) return <div>Loading...</div>;
  if(isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Main Image */}
          <div className="w-full md:w-1/3">
            <Image 
              width={1000}
              height={1000} 
              src={resonator?.images[0]?.url || '/placeholder.png'} 
              alt={resonator?.name || 'Resonator'} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Basic Info */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-white">{resonator?.name.replace(/_/g, ' ')}</h1>
              <img src={resonator?.rarity.icon} alt={resonator?.rarity.name} className="h-6" />
            </div>
            
            <p className="text-gray-300 text-xl mb-4">{resonator?.nickname}</p>
            
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2">
                <img src={resonator?.attribute.icon} alt={resonator?.attribute.name} className="h-6" />
                <span className="text-white">{resonator?.attribute.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={resonator?.weapon.icon} alt={resonator?.weapon.name} className="h-6" />
                <span className="text-white">{resonator?.weapon.name}</span>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-200 italic">{resonator?.introduction}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'gallery' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Gallery
        </button>
        <button
          onClick={() => setActiveTab('backstory')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'backstory' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Backstory
        </button>
        <button
          onClick={() => setActiveTab('combat')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'combat' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Combat
        </button>
        <button
          onClick={() => setActiveTab('voicelines')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'voicelines' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Voice Lines
        </button>
      </div>

      {/* Content Section */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-lg p-6 shadow-lg space-y-8">
          {/* Basic Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <dl className="space-y-2">
                <div>
                  <dt className="font-semibold">Gender</dt>
                  <dd>{resonator?.gender}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Birthday</dt>
                  <dd>{resonator?.birthdate}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Birthplace</dt>
                  <dd>{resonator?.birthPlace}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Affiliation</dt>
                  <dd>{resonator?.affiliation}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Release Date</dt>
                  <dd>{resonator?.release_Date}</dd>
                </div>
              </dl>
              <div>
                <h3 className="font-semibold mb-2">Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {resonator?.roles.map((role) => (
                    <span key={role} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {role}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Quote</h3>
                  <p className="italic text-gray-600">{resonator?.quotes}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Voice Actors */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Voice Actors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(resonator!.voice_Actors).map(([key, actor]) => (
                <div key={key} className="border rounded-lg p-4">
                  <p className="font-semibold">{actor.language}</p>
                  <p>{actor.name} {actor.kanji_name && `(${actor.kanji_name})`}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Official Names */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Official Names</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resonator?.officialName.map((name) => (
                <div key={name.country} className="border rounded-lg p-3">
                  <p className="font-semibold">{name.country}</p>
                  <p>{name.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resonator?.skills.map((skill) => (
                <div key={skill.skillName} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <img src={skill.skillImage} alt={skill.skillName} className="w-12 h-12" />
                    <div>
                      <h3 className="font-semibold">{skill.skillName}</h3>
                      <p className="text-sm text-gray-600">{skill.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-gray-500">Gallery content will be loaded here...</p>
        </div>
      )}

      {activeTab === 'backstory' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-gray-500">Backstory content will be loaded here...</p>
        </div>
      )}

      {activeTab === 'combat' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-gray-500">Combat information will be loaded here...</p>
        </div>
      )}

      {activeTab === 'voicelines' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-gray-500">Voice lines will be loaded here...</p>
        </div>
      )}
    </div>
  );
}