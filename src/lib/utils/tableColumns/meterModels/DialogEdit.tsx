import { ICreateMeterModel, IMeterModel } from '@/lib/types'
import { useForm } from 'react-hook-form'
import { Dispatch, useState } from 'react'
import { toast } from 'sonner'
import { convertBytes } from '../../formaters'
import { compressImage } from '../../handleCompressionImage'
import { APP_CONFIG } from '@/config'
import { simulateFetch } from '../../simulateFetch'
import JSConfetti from 'js-confetti'
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { GenericSelect } from '@/components/common/selects'
import { UploadImage } from '@/components/common/uploadImages'
import { IconRouter } from '@tabler/icons-react'
import { meterModelRules } from './rules'
import { TextArea } from '@/components/common/textarea'

interface IDialogEditMeterModelProps {
  meterModel: IMeterModel
  isOpenEditModel: boolean
  setOpenEditModal: Dispatch<boolean>
}

export const DialogEditMeterModel = ({ meterModel, isOpenEditModel, setOpenEditModal }: IDialogEditMeterModelProps) => {
  const initialImageValues = {
    original: [{ data_url: meterModel.image, file: null }],
    compressed: [{ data_url: meterModel.image, file: null }]
  }

  const defaultValues: ICreateMeterModel = {
    title: meterModel.title,
    description: meterModel.description,
    isActive: meterModel.isActive.toString() as 'true' | 'false',
    type: meterModel.type
  }

  const [loading, setLoading] = useState({ meessage: '', value: false })
  const formMeterModel = useForm<ICreateMeterModel>({ defaultValues })
  const [modelImage, setModelImage] = useState(initialImageValues)

  const onChangeImageMeterModel = async (imageList, addUpdateIndex) => {
    const imageFile: File = imageList[0]?.file

    if (!imageFile) {
      setModelImage(prevState => ({
        original: [{ ...prevState.original[0] }],
        compressed: []
      }))

      return
    }

    const { data_url, file } = await compressImage({ imageFile, quality: 10, maxWidth: 200, maxHeight: 200 })

    console.log({
      original: convertBytes(imageList[0]?.file?.size),
      compressed: convertBytes(file.size)
    })

    setModelImage(prevState => ({
      original: [{ data_url: imageList[0]?.data_url, file: imageList[0]?.file }],
      compressed: [{ data_url: data_url?.toString(), file }]
    }))
  }

  const onSubmitFormMterModel = async (data: ICreateMeterModel) => {
    if (!modelImage.compressed[0]?.data_url) {
      toast.error('La imagen del modelo es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (modelImage.compressed[0].file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE['4MB']) {
      toast.error('Solo archivos menos de 4MB')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Modelo de Medidor', value: true }))
    setOpenEditModal(false)
    await simulateFetch(3000)

    const meterModelImageFile = modelImage.compressed[0]?.file

    console.log({ ...data, image: meterModelImageFile })

    toast.success('Modelo Creado Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setOpenEditModal(false)
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/marcas-de-medidores')
  }

  return (
    <Dialog open={isOpenEditModel} onOpenChange={setOpenEditModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Modelo de Medidor</DialogTitle>

          <DialogDescription>
          Editar el modelo de un medidor para asignarlo a una marca de medidor.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={formMeterModel.handleSubmit(onSubmitFormMterModel)} autoFocus className='w-full'>
          <section className='w-full space-y-4'>
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='title'
                type='text'
                value={meterModel.title}
                register={formMeterModel.register}
                label='Nombre'
                placeholder='Pekkin'
                messageErrors={formMeterModel.formState.errors}
                inputErrors={meterModelRules.title}
                tabIndex={1}
              />

              <GenericSelect
                id='isActive'
                label='Estado'
                placeholder='Seleccione un Estado'
                defaultValue={String(meterModel.isActive)}
                tabIndex={2}
                fieldControlled={{ control: formMeterModel.control, rules: meterModelRules.isActive }}
                items={[
                  {
                    label: 'Activo',
                    value: true
                  },
                  {
                    label: 'Bloqueado',
                    value: false
                  }
                ]}
              />
            </div>

            <TextArea
              id='description'
              rows={5}
              tabIndex={3}
              label='Descripción'
              register={formMeterModel.register}
              placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
              messageErrors={formMeterModel.formState.errors}
              inputErrors={meterModelRules.description}
            />
          </section>

          <section>
            <GenericSelect
              id='type'
              label='Tipo de Modelo'
              placeholder='Seleccione un Estado'
              defaultValue={meterModel.type}
              tabIndex={6}
              fieldControlled={{ control: formMeterModel.control, rules: meterModelRules.isActive }}
              items={[
                {
                  label: 'Litros',
                  value: 'litros'
                },
                {
                  label: 'Gasolina',
                  value: 'gasolina'
                }
              ]}
            />
          </section>

          <section className='mt-4'>
            <UploadImage
              zoom
              label='Imagen del Modelo'
              emptyClassName='h-[200px]'
              onChange={onChangeImageMeterModel}
              imageToUpload={modelImage.compressed}
              uploadLabel='Cargar Imagen del Modelo'
              tabIndexs={{ upload: 4, change: 4, delete: 5 }}
              icons={{ placeholder: <IconRouter className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
            />
          </section>
        </form>

        <DialogFooter className='flex flex-col gap-y-4'>
          <Button
            type='button'
            variant='outline'
            isLoading={loading.value}
            onClick={() => setOpenEditModal(false)}
          >
            Cancelar
          </Button>

          <Button
            type='button'
            isLoading={loading.value}
            onClick={formMeterModel.handleSubmit(onSubmitFormMterModel)}
          >
          Editar Modelo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
