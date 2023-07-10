import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
import Zoom from 'react-medium-image-zoom'

import { initialSliderOptions } from './initialValues'
import { cn } from '@/lib/utils'
import { ImageListType } from '@/lib/types'

interface IImagesSliderProps extends SwiperProps {
  images: ImageListType
  zoom?: boolean
}

export const GridSlider = ({
  images,
  className,
  zoom = initialSliderOptions.zoom,
  breakpoints = initialSliderOptions.breakpoints,
  spaceBetween = initialSliderOptions.spaceBetween,
  slidesPerView = initialSliderOptions.slidesPerView,
  ...rest
}: IImagesSliderProps) => {
  console.log({ images })
  return (
  // <Swiper
  //   // grid={{ rows: 2 }}
  //   // spaceBetween={spaceBetween}
  //   // modules={[Grid, Pagination]}
  //   // slidesPerView={slidesPerView}
  //   // pagination={initialSliderOptions.pagination}
  //   // breakpoints={initialSliderOptions.breakpoints}
  //   slidesPerView={2}
  //   grid={{ rows: 2 }}
  //   spaceBetween={30}
  //   pagination={{ clickable: true }}
  //   modules={[Grid, Pagination]}
  //   className={cn('h-52 bg-transparent swiper-modal', className)}
  //   {...rest}
  // >

  //   {
  //     images.map(image => {
  //       return (
  //         <SwiperSlide key={image.data_url} className='w-full bg-transparent'>
  //           {
  //             zoom
  //               ? (
  //                 <Zoom>
  //                   <img
  //                     src={image.data_url}
  //                     alt='image-grid'
  //                   />
  //                 </Zoom>
  //               )
  //               : <img src={image.data_url} alt='image-grid' />
  //           }
  //         </SwiperSlide>
  //       )
  //     })
  //   }
  // </Swiper>

    <Swiper
      slidesPerView={3}
      grid={{ rows: 2 }}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Grid, Pagination]}
      className="swiper-modal"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  )
}
