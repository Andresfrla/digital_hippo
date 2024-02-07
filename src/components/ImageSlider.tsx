import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css" 
import "swiper/css/pagination"
import { useEffect, useState } from 'react'
import SwiperType from "swiper"
import { Pagination } from 'swiper/modules'
interface ImageSlidersProps {
    urls: string[]
}

function ImageSlider({urls}: ImageSlidersProps) {
    const [swiper, setSwiper] = useState<null | SwiperType>(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const [slideConfig, setSlideConfig] = useState({
        isBeginning: true,
        isEnd: activeIndex === (urls.length ?? 0) - 1
    })

    useEffect(() => {
        swiper?.on("slideChange", ({activeIndex}) => {
            setActiveIndex(activeIndex)
            setSlideConfig({
                isBeginning: activeIndex === 0,
                isEnd: activeIndex === (urls.length ?? 0) - 1
            })
        })
    }, [swiper, urls])

    const activeStyles = "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white boder-zinc-300"
    const inactiveStyles = 'hidden text-gray-400'
  return (
    <div className="group relative bg-zing-100 aspect-square overflow-hidden rounded-xl">
        <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
            <button></button>
            <button></button>
        </div>

        <Swiper onSwiper={(swiper) => setSwiper(swiper)} 
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className='h-full w-full'>
    {urls.map((url, i) => (
        <SwiperSlide key={i} className='-z-10 relative h-full w-full'>
            <Image 
                fill 
                loading='eager' 
                className='-z-10 h-full object-cover object-center'
                src={url}
                alt='Product Image'
            />
        </SwiperSlide>
    ))}
        </Swiper>

    </div>
  )
}

export default ImageSlider