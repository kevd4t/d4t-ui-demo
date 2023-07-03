export interface IFetchDataTable<TEntity> {
  info: {
    pagePrev: number
    pageNext: number
  },
  results: TEntity[]
}

export interface IFetchData<TEntity> {
  code: string
  results: TEntity
}

export interface IFetchErrorReturn {
  data: null,
  error: {
    status: number,
    message: string
  }
}
