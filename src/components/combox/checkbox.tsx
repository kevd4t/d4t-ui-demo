import { CheckboxField } from './checkbox-field'
import { ComboxCheckBoxProps } from './types'
import { ComboboxCheckboxReadOnly } from './readonly'


export const ComboxCheckbox = ({ id, description, icon, placeholder, label, tabIndex, classNameContainer, readOnly, defaultValue, classNamePopover, ...rest }: ComboxCheckBoxProps) => {


  if (readOnly) {
    return (
      <ComboboxCheckboxReadOnly
        label={label}
        classNameContainer={classNameContainer}
        description={description}
        classNamePopover={classNamePopover}
        icon={icon}
        placeholder={placeholder}
        tabIndex={tabIndex}
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
      // @ts-ignore
      form={rest?.form || null}
      // @ts-ignore
      options={rest?.options || []}
    />
  )
}
