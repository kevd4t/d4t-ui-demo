import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Zoom from 'react-medium-image-zoom'
import { cn } from '@/lib/utils'
import { initialSliderOptions } from './initialValues'

interface IImagesSliderProps extends SwiperProps {
  images: string[]
  zoom?: boolean
  intoModal?: boolean
}

export const ImagesSlider = ({
  images,
  intoModal = false,
  className,
  zoom = initialSliderOptions.zoom,
  breakpoints = initialSliderOptions.breakpoints,
  spaceBetween = initialSliderOptions.spaceBetween,
  slidesPerView = initialSliderOptions.slidesPerView,
  ...rest
}: IImagesSliderProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={initialSliderOptions.pagination}
      breakpoints={initialSliderOptions.breakpoints}
      className={cn('h-52 bg-transparent', className, intoModal ? 'swiper-modal' : '')}
      {...rest}
    >
      {
        images.map(image => {
          return (
            <SwiperSlide key={image} className='w-full bg-transparent'>
              {
                zoom
                  ? (
                    <Zoom>
                      <img
                        src={image}
                        alt={image}
                      />
                    </Zoom>
                  )
                  : <img src={image} alt={image} />
              }
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}
