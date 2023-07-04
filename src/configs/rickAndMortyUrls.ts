import { IRickAndMortyUrls } from '../interfaces';

const rickAndMortyUrls:IRickAndMortyUrls = {
    characters: 'character',
    character: (id:string) => `character/${id}`,
};

export { rickAndMortyUrls };
