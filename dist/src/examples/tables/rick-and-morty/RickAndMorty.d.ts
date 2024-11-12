import { ITableColumn } from '../../../components/data-tables/Table/types';
import { ICharacter } from './ICharacters';
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}
export interface Location {
    name: string;
    url: string;
}
export declare const characterColumns: ITableColumn<ICharacter>[];
