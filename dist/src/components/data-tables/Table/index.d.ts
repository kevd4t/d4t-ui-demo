import type { ITablePagination, ITableColumn, ITableSubmit } from './types';
import { Dispatch, SetStateAction } from 'react';
interface CustomTableProps<DataSchema> {
    data: DataSchema[];
    pagination: ITablePagination;
    columns: ITableColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: ITableSubmit;
    setSelectItem: Dispatch<SetStateAction<any>>;
}
export declare function DataTable<DataSchema>(props: CustomTableProps<DataSchema>): JSX.Element;
export {};
