'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface CarouselProps {
    images: string[]
}

export function Carousel({images}: CarouselProps) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <figure className="relative pt-[100%] overflow-hidden">
                        <Image
                            src={image}
                            alt="Product Image"
                            fill={true}
                            sizes="100%"
                            className="object-cover w-full"
                            loading="lazy"
                        />
                    </figure>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}