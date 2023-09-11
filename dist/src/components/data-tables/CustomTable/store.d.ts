/// <reference types="react" />
import { TableContextStore, TableStore } from './types';
export declare const useTableStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TableStore<any>>>;
export declare const TableContext: import("react").Context<TableContextStore<any>>;
