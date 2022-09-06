import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Achieve from "./Achieve";

import styles from "./profile.module.scss";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
export default function AchievesBlock() {
    return (
        <div className={styles.achieves}>
            <Slider {...settings}>
                <Achieve name="HTML" />
                <Achieve name="React" />
                <Achieve name="CSS" />
                <Achieve name="JavaScript" />
                <Achieve name="CSS" />
                <Achieve name="JavaScript" />
                <Achieve name="CSS" />
                <Achieve name="JavaScript" />
                <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="43" height="43" rx="8" fill="#D0D9F2" />
                    <path
                        d="M34.6092 22.5487C34.6092 23.5831 33.7707 24.4215 32.7363 24.4215H25.3722C24.2677 24.4215 23.3722 25.317 23.3722 26.4215V33.7857C23.3722 34.82 22.5337 35.6585 21.4994 35.6585C20.4651 35.6585 19.6266 34.82 19.6266 33.7857V26.4215C19.6266 25.317 18.7312 24.4215 17.6266 24.4215H10.2625C9.22814 24.4215 8.38965 23.5831 8.38965 22.5487C8.38965 21.5144 9.22814 20.6759 10.2625 20.6759H17.6266C18.7312 20.6759 19.6266 19.7805 19.6266 18.6759V11.3118C19.6266 10.2775 20.4651 9.43896 21.4994 9.43896C22.5337 9.43896 23.3722 10.2775 23.3722 11.3118V18.6759C23.3722 19.7805 24.2677 20.6759 25.3722 20.6759H32.7363C33.7707 20.6759 34.6092 21.5144 34.6092 22.5487Z"
                        fill="white"
                    />
                </svg>
            </Slider>
        </div>
    );
}
