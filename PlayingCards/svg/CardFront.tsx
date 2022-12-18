import React from "react";

const CardFront = (props:any) => {
    // const { color } = props;
    // let c = `#222`;
    // if (color) {
    //     c = color;
    // };
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 181 251" >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(1.000000, 1.000000)">
                        <path d="M178.582,235.276 C178.582,243.104 172.237,249.449 164.409,249.449 L14.174,249.449 C6.346,249.449 0,243.104 0,235.276 L0,14.173 C0,6.346 6.346,1.52020044e-23 14.174,1.52020044e-23 L164.409,1.52020044e-23 C172.237,1.52020044e-23 178.582,6.346 178.582,14.173 L178.582,235.276 Z" fill="#F7F6F1" fillRule="nonzero"></path>
                        <path d="M178.582,235.276 C178.582,243.104 172.237,249.449 164.409,249.449 L14.174,249.449 C6.346,249.449 0,243.104 0,235.276 L0,14.173 C0,6.346 6.346,1.52020044e-23 14.174,1.52020044e-23 L164.409,1.52020044e-23 C172.237,1.52020044e-23 178.582,6.346 178.582,14.173 L178.582,235.276 Z" stroke="#b4b4b4"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default CardFront;