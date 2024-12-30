// types/resonator.ts
export interface VoiceActor {
    language: string;
    name: string;
    kanji_name: string;
  }
  
  export interface Image {
    name: string;
    url: string;
  }
  
  export interface Skill {
    category: string;
    skillName: string;
    skillImage: string;
    skillLink: string;
  }
  
  export interface OfficialName {
    country: string;
    name: string;
  }
  
  export interface Resonator {
    name: string;
    nickname: string;
    attribute: {
      name: string;
      icon: string;
    };
    weapon: {
      name: string;
      icon: string;
    };
    rarity: {
      name: string;
      icon: string;
    };
    roles: string[];
    class: string;
    gender: string;
    birthdate: string;
    birthPlace: string;
    affiliation: string;
    quotes: string;
    introduction: string;
    release_Date: string;
    sigil: string;
    specialDish: string;
    voice_Actors: {
      english: VoiceActor;
      chinese: VoiceActor;
      japanese: VoiceActor;
      korean: VoiceActor;
    };
    images: Image[];
    skills: Skill[];
    officialName: OfficialName[];
  }