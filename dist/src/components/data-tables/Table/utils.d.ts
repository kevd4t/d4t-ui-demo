import { ITableColumn } from '../../';
import { ITablePagination } from './types';
export interface DataToFormat {
    __typename?: string;
    count: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    page: number;
    docs: any[];
}
export declare const formatPagination: (dataToFormat: DataToFormat) => ITablePagination;
export declare const initialPagination: {
    limit: number;
    page: number;
};
export declare const generateUUID: () => any;
export declare const insertColumn: (newColumn: ITableColumn<any>, originalColumn: ITableColumn<any>[]) => ITableColumn<any>[];
