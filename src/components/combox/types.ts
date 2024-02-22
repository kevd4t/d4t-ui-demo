import { ReactNode } from "react"
import { UseFormReturn } from "react-hook-form"

export interface Option {
  id: string
  label: string
  value: string
  icon?: ReactNode
}

export interface LocalOption extends Option {
  selected: boolean
}


export interface ComboxCheckBoxPropsBase {
  id: string
  label?: string
  placeholder?: string
  description?: string
  icon?: ReactNode
  classNameContainer?: string
  tabIndex?: number
  disabled?: boolean
  classNamePopover?: string
}

export interface ComboxCheckBoxReadOnly extends ComboxCheckBoxPropsBase {
  readOnly: true;
  options: Option[]
}

export interface ComboxCheckBoxWithForm extends ComboxCheckBoxPropsBase {
  form: UseFormReturn<any, any, any>;
  options: Option[]
  readOnly?: false;
}

export type ComboxCheckBoxProps = ComboxCheckBoxReadOnly | ComboxCheckBoxWithForm;
