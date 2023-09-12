/// <reference types="react" />
import { ITableContextStore, ITableStore } from './types';
export declare const useTableStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ITableStore<any>>>;
export declare const TableContext: import("react").Context<ITableContextStore<any>>;
