import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Zoom from 'react-medium-image-zoom'
import { cn } from '@/lib/utils'
import { initialSliderOptions } from './initialValues'

interface IImagesSliderProps extends SwiperProps {
  images: string[]
  zoom?: boolean
  intoModal?: boolean
  swiperSlideClassName?: string
}

export const ImagesSlider = ({
  images,
  intoModal = false,
  className,
  zoom = initialSliderOptions.zoom,
  breakpoints = initialSliderOptions.breakpoints,
  spaceBetween = initialSliderOptions.spaceBetween,
  slidesPerView = initialSliderOptions.slidesPerView,
  pagination = initialSliderOptions.pagination,
  swiperSlideClassName,
  ...rest
}: IImagesSliderProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={pagination}
      breakpoints={breakpoints}
      className={cn('h-52 bg-transparent', className, intoModal ? 'swiper-modal' : '')}
      {...rest}
    >
      {
        images.map(image => {
          return (
            <SwiperSlide key={image} className={cn('w-full bg-transparent', swiperSlideClassName)}>
              {
                zoom
                  ? (
                    <Zoom>
                      <img
                        className='rounded-md'
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
