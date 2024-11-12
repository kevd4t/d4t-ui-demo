import { ITableSubmit } from '../../../components/data-tables/Table/types';
import { ICharacters } from './ICharacters';
export declare const useGetCharacters: () => {
    characters: ICharacters;
    loadingCharacters: boolean;
    onSubmitCharactersTable: ITableSubmit;
};
