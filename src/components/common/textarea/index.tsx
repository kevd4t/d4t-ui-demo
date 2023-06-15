import { TextareaUI, type TextareaUIProps } from '@/components/ui'
import { Label } from '@/components/ui/label'

interface TextareaProps extends TextareaUIProps {
  label?: string
  classNameContainer?: string
}

export const Textarea = ({ label, classNameContainer, ...rest }: TextareaProps) => {
  return (
    <div className={`w-full ${classNameContainer}`}>
      <Label htmlFor={rest.id}>{ label }</Label>

      <div className='my-1'></div>

      <TextareaUI {...rest} />
    </div>
  )
}
