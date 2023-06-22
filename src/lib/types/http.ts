export interface IFetchDataTable<TEntity> {
  info: {
    currentPage: 1,
    nextPage: 2,
    pageCount: 55,
    prevPage: null,
    totalItems: 953,
    totalPages: 30
  },
  results: TEntity[]
}

export interface IFetchErrorReturn {
  data: null,
  error: {
    status: number,
    message: string
  }
}
