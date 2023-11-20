import type { IListPagination, IListColumn, IListSubmit, IListDynamicFilter } from "./types";
import { Dispatch, SetStateAction } from "react";
interface CustomTableProps<DataSchema> {
    data: DataSchema[];
    pagination: IListPagination;
    columns: IListColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: IListSubmit;
    setSelectItem?: Dispatch<SetStateAction<any>>;
    filters?: IListDynamicFilter<DataSchema>[];
    limitOfMultiSelect?: number;
    setMultiItemsSelected?: Dispatch<SetStateAction<any[]>>;
    multiItemsSelected?: any[];
}
export declare function D4TCardsList<DataSchema>(props: CustomTableProps<DataSchema>): JSX.Element;
export {};
