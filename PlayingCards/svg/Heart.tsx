import React from "react";

const Heart = (props: any) => {
    const {color} = props;
    const c = color || "#D33E43";

    return (
        <svg {...props} viewBox="0 0 512 512">
            <g stroke="none" strokeWidth="1" fill="url(#linearGradient-1)" fillRule="evenodd">
                <path d="M146.141456,-5.90428975e-15 L365.858544,5.90428975e-15 C416.675112,-3.43056238e-15 435.102427,5.29105984 453.680205,15.2265641 C472.257983,25.1620684 486.837932,39.7420171 496.773436,58.3197949 C506.70894,76.8975727 512,95.3248882 512,146.141456 L512,365.858544 C512,416.675112 506.70894,435.102427 496.773436,453.680205 C486.837932,472.257983 472.257983,486.837932 453.680205,496.773436 C435.102427,506.70894 416.675112,512 365.858544,512 L146.141456,512 C95.3248882,512 76.8975727,506.70894 58.3197949,496.773436 C39.7420171,486.837932 25.1620684,472.257983 15.2265641,453.680205 C5.29105984,435.102427 2.28704159e-15,416.675112 -3.93619317e-15,365.858544 L3.93619317e-15,146.141456 C-2.28704159e-15,95.3248882 5.29105984,76.8975727 15.2265641,58.3197949 C25.1620684,39.7420171 39.7420171,25.1620684 58.3197949,15.2265641 C76.8975727,5.29105984 95.3248882,3.43056238e-15 146.141456,-5.90428975e-15 Z"></path>
            </g>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M347.97423,74.2989484 C319.101343,65.3594106 274.241448,81.0867174 257.773071,146.37859 C256.384506,149.952558 254.931142,149.878677 253.635148,146.249299 C229.844407,80.098566 190.631342,65.6549325 163.072962,74.2989484 C122.249162,87.4404385 89.1735522,135.998383 92.191366,197.974869 C93.0059906,306.117418 190.011116,360.576566 255.532853,464 C320.999048,360.576566 419.096511,306.274414 419.401995,197.651642 C425.048825,135.037936 389.899625,87.1910919 347.97423,74.2989484" fill={c}></path>
            </g>
        </svg >
    )
};

export default Heart;