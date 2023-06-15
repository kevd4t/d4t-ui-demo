export interface KBDProps {
  label?: string
  key1: string
  key2?: string
}

export const KBD = ({ label, key1, key2 }: KBDProps) => {
  return (
    <p className='text-sm text-muted-foreground'>
      {label && `${label} `}
      <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
        {
          (key1 && key2)
            ? (<><span className='text-sm'>{key1}</span>{key2}</>)
            : (<>{key1}</>)
        }
      </kbd>
    </p>
  )
}
