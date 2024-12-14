export type Resonators = {
    id:                          number;
    name:                        string;
    nickname:                    string;
    attributes:                  string;
    weapon:                      string;
    rarity:                      string;
    class:                       string;
    combat_Role:                 string[];
    gender:                      string;
    birthdate:                   string;
    birthPlace:                  string;
    affiliation:                 string;
    quotes:                      string;
    about:                       string;
    introduction:                string;
    release_Date:                string;
    voice_Actors:                VoiceActor[];
    source:                      string;
    images:                      Images;
    developer_Notes:             DeveloperNotes;
    resonance_Evaluation_Report: OverclockDiagnosis;
    overclock_Diagnosis:         OverclockDiagnosis;
    character_stories:           CharacterStory[];
}

export type CharacterStory = {
    unlock:  string;
    title:   string;
    content: string;
}

export type DeveloperNotes = {
    notes_1: OverclockDiagnosis;
    notes_2: OverclockDiagnosis;
    notes_3: OverclockDiagnosis;
    notes_4: OverclockDiagnosis;
    notes_5: OverclockDiagnosis;
    notes_6: OverclockDiagnosis;
}

export type OverclockDiagnosis = {
    title:   string;
    content: string;
}

export type Images = {
    fullBody:       string;
    characterSheet: string;
    profile:        string;
    splash_art:     string;
}

export type VoiceActor = {
    language:    string;
    name:        string;
    kanji_name?: string;
}
