/// <reference types="react" />
import type { ITablePagination, ITableColumn, ITableSubmit } from './types';
interface CustomTableProps<DataSchema> {
    data: DataSchema[];
    pagination: ITablePagination;
    columns: ITableColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: ITableSubmit;
}
export declare function CustomTable<DataSchema>(props: CustomTableProps<DataSchema>): JSX.Element;
export {};
