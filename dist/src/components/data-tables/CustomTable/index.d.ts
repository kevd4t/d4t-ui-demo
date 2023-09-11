/// <reference types="react" />
import type { TablePagination as ITablePagination, TableColumn, TableSubmit } from './types';
interface CustomTableProps<DataSchema> {
    data: DataSchema[] | [];
    pagination: ITablePagination;
    columns: TableColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: TableSubmit;
}
export declare function CustomTable<DataSchema>(props: CustomTableProps<DataSchema>): JSX.Element;
export {};
