/// <reference types="react" />
import { ITableSubmit } from './types';
interface TableSearchProps {
    onSubmitTable: ITableSubmit;
    loading: boolean;
}
export declare const TableSearch: ({ onSubmitTable, loading }: TableSearchProps) => JSX.Element;
export {};
