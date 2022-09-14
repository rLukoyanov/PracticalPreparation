import React from "react";

import styles from "./Header.module.scss";

export default function Logo() {
    throwIfNamespace: false;
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_656_882)">
                <g clip-path="url(#clip1_656_882)">
                    <path
                        d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                        fill="#6495ED"
                    />
                    <path
                        d="M20.8215 15.9789C21.3563 15.9789 21.7899 16.4126 21.7899 16.9474V30.021H17.9162V18.9958H13.8261L13.8004 30.021H9.92676V16.9474C9.92676 16.4126 10.3603 15.9789 10.8952 15.9789H20.8215Z"
                        fill="white"
                    />
                    <path
                        d="M34.9846 15.9789C35.5194 15.9789 35.953 16.4126 35.953 16.9474V30.021H32.0793V18.9958H27.9892L27.9635 30.021H24.0898V16.9474C24.0898 16.4126 24.5235 15.9789 25.0583 15.9789H34.9846Z"
                        fill="white"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_656_882">
                    <rect width="46" height="46" fill="white" />
                </clipPath>
                <clipPath id="clip1_656_882">
                    <rect width="46" height="46" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
