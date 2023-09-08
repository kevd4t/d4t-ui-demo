/// <reference types="react" />
import { TableSubmit } from './types';
interface TableSearchProps {
    onSubmitTable: TableSubmit;
    loading: boolean;
}
export declare const TableSearch: ({ onSubmitTable, loading }: TableSearchProps) => JSX.Element;
export {};
