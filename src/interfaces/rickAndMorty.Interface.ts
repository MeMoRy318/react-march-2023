export interface IRickAndMortyUrls {
    characters: string
    character: (id: string) => string
}

export interface IRickAndMortyResponse<T> extends IRickAndMortyInfo{
    results:T
}
export interface IRickAndMortyInfo {

    info: {
        count:number
        next:string
        pages: number
        prev: number
    }
}
export interface ICharacter {
    id: number
    name: string
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    type: string
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
}
