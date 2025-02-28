import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carusel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="my-10 cursor-pointer rounded-lg">
            <div className="flex justify-center w-full rounded-lg">
                <img
                    src="https://s3-alpha-sig.figma.com/img/7d99/3235/d03e0592ba793f7b81ffe53867057250?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HocXzWcB9NffSsgqfmwTV6RxUS4hn~5vmP~xc6ZqU1biDaSU1CGmaZEruS9LGRrCjvj0aGy3kg4NtBPn52p9a~nSZmXCXM8fZMoU~MEo5NfUWsmJSlze-tXwBINrEpIVWeGdZY-rSd3gWEBUAv6gL1qcfDnEWRyckb0EqHDw23HTPV4nxBeXGusUXmuK5bbowM6cDU7A1KM1~UqIkRJGdtSqa~XhxoVBtVQB2PmN-NdznwG3HRG93QEV1CRbN86p2lm4vJfhgzGE3xyqlIgxPS-YrpnDv3MgDDjHPyT43~-UPAKK0O6TDhIWMJVu7HtD-XI6YkgnaT02jF1lBJcjpg__"
                    alt="Image 1"
                    className="w-full max-h-[400px] object-center rounded-lg"
                />
            </div>
            <div className="flex justify-center">
                <img
                    src="https://s3-alpha-sig.figma.com/img/7d99/3235/d03e0592ba793f7b81ffe53867057250?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HocXzWcB9NffSsgqfmwTV6RxUS4hn~5vmP~xc6ZqU1biDaSU1CGmaZEruS9LGRrCjvj0aGy3kg4NtBPn52p9a~nSZmXCXM8fZMoU~MEo5NfUWsmJSlze-tXwBINrEpIVWeGdZY-rSd3gWEBUAv6gL1qcfDnEWRyckb0EqHDw23HTPV4nxBeXGusUXmuK5bbowM6cDU7A1KM1~UqIkRJGdtSqa~XhxoVBtVQB2PmN-NdznwG3HRG93QEV1CRbN86p2lm4vJfhgzGE3xyqlIgxPS-YrpnDv3MgDDjHPyT43~-UPAKK0O6TDhIWMJVu7HtD-XI6YkgnaT02jF1lBJcjpg__"
                    alt="Image 2"
                    className="w-full max-h-[400px] object-center rounded-lg"
                />
            </div>
        </Slider>
    );
}
