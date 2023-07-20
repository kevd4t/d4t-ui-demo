export type TColumnActions = {
  edit?: boolean
  detail?: boolean
  create?: boolean
  delete?: boolean
  removeLocalItem?: (id: string|number) => void
}

export interface IGetEntityColumnsParams {
  selection?: boolean
  id?: boolean
  actions?: TColumnActions
}
