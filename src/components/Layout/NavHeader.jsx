import React from "react";
import Slider from "react-slick";

export default function NavHeader() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="flex justify-between gap-4">
                <div className="h-[200px] w-full">
                    <img src="https://avatars.mds.yandex.net/i?id=33fc4b7da4167c892a9f7301bb0c6c69d86a2184-3985701-images-thumbs&n=13" alt="" />
                </div>
                <div className="h-[200px] w-full">
                    <img src="https://avatars.mds.yandex.net/i?id=33fc4b7da4167c892a9f7301bb0c6c69d86a2184-3985701-images-thumbs&n=13" alt="" />
                </div>
                <div className="h-[200px] w-full">
                    <img src="https://avatars.mds.yandex.net/i?id=33fc4b7da4167c892a9f7301bb0c6c69d86a2184-3985701-images-thumbs&n=13" alt="" />
                </div>
                <div className="h-[200px] w-full">
                    <img src="https://avatars.mds.yandex.net/i?id=33fc4b7da4167c892a9f7301bb0c6c69d86a2184-3985701-images-thumbs&n=13" alt="" />
                </div>
                <div className="h-[200px] w-full">
                    <img src="https://avatars.mds.yandex.net/i?id=33fc4b7da4167c892a9f7301bb0c6c69d86a2184-3985701-images-thumbs&n=13" alt="" />
                </div>
                <div className="h-[200px] w-full">
                    <img src="https://avatars.mds.yandex.net/i?id=33fc4b7da4167c892a9f7301bb0c6c69d86a2184-3985701-images-thumbs&n=13" alt="" />
                </div>
            </div>
        </Slider>
    );
}