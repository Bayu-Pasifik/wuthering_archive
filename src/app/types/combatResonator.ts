export type Combat = {
    name:                   string;
    img_forte:              string;
    instruction:            string;
    additional_instruction: string[];
    forte_skills:           ForteSkill[];
}

export type ForteSkill = {
    name:        string;
    type:        string;
    icon:        string;
    description: string;
}
