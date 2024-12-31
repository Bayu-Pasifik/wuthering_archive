export type VoiceLines = {
    url:                 string;
    name:                string;
    general_voice_lines: GeneralVoiceLine[];
    combat_voice_lines:  CombatVoiceLine[];
}

export type CombatVoiceLine = {
    title:   string;
    details: VoiceLinesDetail[];
}

export type VoiceLinesDetail = {
    text:  string;
    audio: string;
}

export type GeneralVoiceLine = {
    title:       string;
    requirement: string;
    detail:      string;
    audio:       string;
}
