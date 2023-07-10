import { SwiperOptions } from 'swiper/types'

const initialPagination: SwiperOptions['pagination'] = { clickable: true }
const initialSlidesPerView: SwiperOptions['slidesPerView'] = 1
const initialSpaceBetween: SwiperOptions['spaceBetween'] = 10
const initialbreakPoints: SwiperOptions['breakpoints'] = {
  320: { slidesPerView: 2, spaceBetween: 22 }
}
const initialAllowZoom = true

interface IInitialSliderOptions extends SwiperOptions {
  zoom: boolean
}

export const initialSliderOptions: IInitialSliderOptions = {
  pagination: initialPagination,
  breakpoints: initialbreakPoints,
  slidesPerView: initialSlidesPerView,
  spaceBetween: initialSpaceBetween,
  zoom: initialAllowZoom
}
