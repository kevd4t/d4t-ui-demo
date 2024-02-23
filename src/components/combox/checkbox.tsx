import { CheckboxField } from './checkbox-field'
import { ComboxCheckBoxProps } from './types'
import { ComboboxCheckboxReadOnly } from './readonly'


export const ComboxCheckbox = ({ id, description, icon, placeholder, label, tabIndex, classNameContainer, readOnly, classNamePopover, disabled, ...rest }: ComboxCheckBoxProps) => {
  if (readOnly) {
    return (
      <ComboboxCheckboxReadOnly
        label={label}
        description={description}
        classNameContainer={classNameContainer}
        classNamePopover={classNamePopover}
        icon={icon}
        placeholder={placeholder}
        tabIndex={tabIndex}
        disabled={disabled}
        // @ts-ignore
        form={rest?.form || null}
        // @ts-ignore
        options={rest?.options || []}
      />
    )
  }

  return (
    <CheckboxField
      id={id}
      label={label}
      classNameContainer={classNameContainer}
      description={description}
      classNamePopover={classNamePopover}
      icon={icon}
      placeholder={placeholder}
      tabIndex={tabIndex}
      disabled={disabled}
        // @ts-ignore
      form={rest?.form || null}
      // @ts-ignore
      options={rest?.options || []}
    />
  )
}
