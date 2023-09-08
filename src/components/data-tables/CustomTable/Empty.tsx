import { EmptyBoxIllustration } from '../../illustrations/EmptyBox'

export const TableEmpty = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-8'>
      <EmptyBoxIllustration />

      <div className='-mt-3'>
        <span>Sin Resultados</span>
      </div>
    </div>
  )
}
