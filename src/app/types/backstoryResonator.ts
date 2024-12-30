export type Backstory = {
    source:                string;
    name:                  string;
    official_introduction: string;
    personality:           string;
    report:                Report[];
    character_stories:     CharacterStory[];
    cherised_items:        CherisedItem[];
}

export type CharacterStory = {
    title:     string;
    unlock_at: string;
    story:     string;
}

export type CherisedItem = {
    title:       string;
    unlock_at:   string;
    description: string;
    image:       string;
}

export type Report = {
    title:   string;
    content: string;
}
