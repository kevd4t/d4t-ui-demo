/// <reference types="react" />
import { IListSubmit } from "./types";
interface TableSearchProps {
    onSubmitTable: IListSubmit;
    loading: boolean;
}
export declare const TableSearch: ({ onSubmitTable, loading }: TableSearchProps) => JSX.Element;
export {};
