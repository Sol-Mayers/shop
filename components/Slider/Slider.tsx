import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ClothesProps } from "../../types";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import Image from "next/image";
import styles from "./Slider.module.scss";

const Slider: FC<ClothesProps> = ({ clothes }) => {
    return (
        <div className={styles.mainSlider}>
            <h2 className={styles.sliderTitle}>Последние новинки</h2>
            <div className={styles.sliderWrapper}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                    }}
                >
                    {clothes.slice(0, 3).map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <div className={styles.swiperImageWrap}>
                                    <Image
                                        src={product.image}
                                        alt="slide"
                                        width="200"
                                        height="200"
                                        className={styles.sliderImage}
                                    />
                                </div>
                                <h2 className={styles.swiperTitleProduct}>
                                    {product.title}
                                </h2>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
