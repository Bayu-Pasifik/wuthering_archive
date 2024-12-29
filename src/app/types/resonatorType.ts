export type Resonator = {
    icon:       string;
    name:       string;
    rarity:     Rarity;
    attribute:  string;
    weapon:     string;
    birthPlace: string;
    class:      string;
    release:    Release;
}

export type Rarity = {
    icon:  string;
    title: string;
}

export type Release = {
    version: string;
    date:    Date;
}
