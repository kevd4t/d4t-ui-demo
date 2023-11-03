import type { ITablePagination, ITableColumn, ITableSubmit, ITableDynamicFilter } from "./types";
import { Dispatch, SetStateAction } from "react";
interface CustomTableProps<DataSchema> {
    data: DataSchema[];
    pagination: ITablePagination;
    columns: ITableColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: ITableSubmit;
    setSelectItem?: Dispatch<SetStateAction<any>>;
    filters?: ITableDynamicFilter<DataSchema>[];
    limitOfMultiSelect?: number;
    setMultiItemsSelected?: Dispatch<SetStateAction<any[]>>;
    multiItemsSelected?: any[];
}
export declare function D4TTable<DataSchema>(props: CustomTableProps<DataSchema>): JSX.Element;
export {};
