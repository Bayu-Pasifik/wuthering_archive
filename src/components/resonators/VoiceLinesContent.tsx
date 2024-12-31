import React, { useState } from 'react';
import { X,Volume2, VolumeX } from 'lucide-react';
import { useVoiceLinesResonators } from '../../app/hooks/useDetailResonator'; // Adjust the import path as needed
import { VoiceLinesDetail } from '@/app/types/voicelinesResonator';



interface VoiceLineSection {
  title: string;
  requirement?: string;
  detail?: string;
  audio?: string;
  details?: VoiceLinesDetail[];
}



interface VoiceLinesProps {
  name: string;
}

const VoiceLines: React.FC<VoiceLinesProps> = ({ name }) => {
  const { data, isLoading, error } = useVoiceLinesResonators(name);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-600">Loading voice lines...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-red-600">Error loading voice lines: {error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-600">No voice lines data available</p>
        </div>
      </div>
    );
  }

  

  const AudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
    const [isError, setIsError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(null);
  
    const handlePlay = () => {
      if (!audioInstance) {
        const audio = new Audio(`/api/proxyAudio?url=${encodeURIComponent(audioUrl)}`);
        setAudioInstance(audio);
  
        audio.onerror = () => {
          setIsError(true);
        };
  
        audio.onplay = () => {
          setIsPlaying(true);
        };
  
        audio.onended = () => {
          setIsPlaying(false);
        };
  
        audio.play().catch((error) => {
          console.error('Audio playback failed:', error);
          setIsError(true);
        });
      } else {
        audioInstance.play();
      }
    };
  
    const handlePause = () => {
      if (audioInstance) {
        audioInstance.pause();
        setIsPlaying(false);
      }
    };
  
    const handleStop = () => {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0; // Reset playback to the start
        setIsPlaying(false);
      }
    };
  
    if (isError) {
      return (
        <div className="flex items-center gap-2 text-red-500">
          <VolumeX className="w-5 h-5" />
          <span className="text-sm">Audio unavailable</span>
        </div>
      );
    }
  
    return (
      <div className="flex items-center gap-2">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            <Volume2 className="w-5 h-5" />
            <span className="text-sm">Play</span>
          </button>
        ) : (
          <>
            <button
              onClick={handlePause}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-600"
            >
              <Volume2 className="w-5 h-5" />
              <span className="text-sm">Pause</span>
            </button>
            <button
              onClick={handleStop}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 hover:bg-red-200 text-red-600"
            >
              <X className="w-5 h-5" />
              <span className="text-sm">Stop</span>
            </button>
          </>
        )}
      </div>
    );
  };
  
  

const renderAudioControl = (audioUrl: string) => {
  if (audioUrl.startsWith('https')) {
    return <AudioPlayer audioUrl={audioUrl} />;
  }
  return (
    <div className="flex items-center justify-center">
      <X className="text-red-500 w-6 h-6" />
    </div>
  );
};

  const renderVoiceLineSection = (section: VoiceLineSection) => {
    if (Array.isArray(section.details)) {
      return section.details.map((detail, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-2">{detail.text}</p>
          {renderAudioControl(detail.audio)}
        </div>
      ));
    }

    return (
      <div className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-gray-900">{section.title}</h4>
            {section.requirement && (
              <p className="text-sm text-gray-500">Required: {section.requirement}</p>
            )}
          </div>
        </div>
        {section.detail && <p className="text-gray-700 mb-2">{section.detail}</p>}
        {section.audio && renderAudioControl(section.audio)}
      </div>
    );
  };

  return (

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{name} Voice Lines</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">General Voice Lines</h3>
            {data.general_voice_lines.map((line, index) => (
              <div key={index}>
                {renderVoiceLineSection(line)}
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Combat Voice Lines</h3>
            {data.combat_voice_lines.map((section, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">{section.title}</h4>
                {renderVoiceLineSection(section)}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default VoiceLines;