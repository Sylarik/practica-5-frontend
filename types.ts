export type FilmType = {
    id: string,
    brand: string,
    name: string,
    iso: number,
    formatThirtyFive: boolean,
    formatOneTwenty: boolean,
    color: boolean,
    process: string,
    staticImageUrl: string,
    description: string,
    customDescription: string[],
    keyFeatures: Feature[],
    dateAdded: string,
    __v: number,
}

export type Feature = {
    _id: string,
    feature: string,
}


export type Project = {
    id: string;
    name: string;
    films: FilmType[]
}
