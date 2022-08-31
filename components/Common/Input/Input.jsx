import React from "react";

import { DatePicker } from "antd";

import styles from "./Input.module.scss";

export default function Input({
    placeholder = "",
    endlessType = "",
    onChange = () => {},
    onClick = () => {},
    value = null,
    name = null,
    required = false,
    type = "text",
    className = "",
}) {
    return (
        <div className={`${styles.input} ${className}`}>
            <p>{name}</p>
            {required ? <span>*</span> : <></>}
            {endlessType === "phoneNumber" ? (
                <div className={styles.phoneNum}>
                    <div className={styles.regCode}>+7</div>
                    <input
                        required
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                    />
                </div>
            ) : (
                <>
                    {type === "date" ? (
                        <DatePicker
                            style={{
                                display: "block",
                                outline: "none",
                                width: "100%",
                                background: "#ffffff",
                                // border: "1px solid #d9d9d9",
                                boxSizing: "border-box",
                                borderRadius: "6px",
                                padding: "12px 10px",
                            }}
                            onChange={onChange}
                        />
                    ) : (
                        <input
                            required
                            type={type}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                </>
            )}
            {endlessType === "password" ? (
                <button onClick={onClick} type="button">
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className={styles.svgColor}
                            d="M9.67431 11.2036C9.59617 11.2036 9.51917 11.2 9.44283 11.193L8.25 12.3858C8.96744 12.6606 9.74911 12.7216 10.5005 12.5616C11.2519 12.4016 11.9409 12.0273 12.4841 11.4841C13.0273 10.9409 13.4016 10.2519 13.5616 9.50051C13.7216 8.74911 13.6606 7.96744 13.3858 7.25L12.193 8.44283C12.2 8.51917 12.2036 8.59617 12.2036 8.67431C12.2038 9.00651 12.1385 9.33549 12.0114 9.64244C11.8844 9.94939 11.6981 10.2283 11.4632 10.4632C11.2283 10.6981 10.9494 10.8844 10.6424 11.0114C10.3355 11.1385 10.0065 11.2038 9.67431 11.2036Z"
                            fill="#AA139B"
                        />
                        <path
                            className={styles.svgColor}
                            d="M19.8108 8.50784C19.017 6.83534 18.0722 5.47133 16.9767 4.4158L15.8276 5.56482C16.7646 6.46024 17.5808 7.63162 18.2865 9.09048C16.4076 12.9793 13.7405 14.8266 10.0956 14.8266C9.00154 14.8266 7.99382 14.6581 7.07243 14.3212L5.82743 15.5662C7.10713 16.1571 8.52986 16.4525 10.0956 16.4525C14.4361 16.4525 17.6745 14.192 19.8108 9.67086C19.8967 9.48904 19.9413 9.29044 19.9413 9.08935C19.9413 8.88826 19.8967 8.68967 19.8108 8.50784ZM18.3752 1.26683L17.4125 0.302986C17.3957 0.286189 17.3758 0.272863 17.3539 0.263772C17.3319 0.25468 17.3084 0.25 17.2847 0.25C17.261 0.25 17.2374 0.25468 17.2155 0.263772C17.1936 0.272863 17.1737 0.286189 17.1569 0.302986L14.687 2.77176C13.3252 2.0762 11.7948 1.72843 10.0956 1.72843C5.75516 1.72843 2.51676 3.98898 0.380406 8.5101C0.294535 8.69193 0.25 8.89052 0.25 9.09161C0.25 9.2927 0.294535 9.49129 0.380406 9.67312C1.23389 11.4707 2.26142 12.9116 3.46299 13.9957L1.07325 16.3848C1.0394 16.4187 1.02038 16.4646 1.02038 16.5125C1.02038 16.5604 1.0394 16.6063 1.07325 16.6402L2.03732 17.6043C2.0712 17.6381 2.11713 17.6571 2.16503 17.6571C2.21292 17.6571 2.25886 17.6381 2.29274 17.6043L18.3752 1.52247C18.392 1.50569 18.4053 1.48576 18.4144 1.46383C18.4235 1.4419 18.4282 1.41839 18.4282 1.39465C18.4282 1.37091 18.4235 1.3474 18.4144 1.32546C18.4053 1.30353 18.392 1.28361 18.3752 1.26683ZM1.90476 9.09048C3.78592 5.20169 6.45298 3.3544 10.0956 3.3544C11.3273 3.3544 12.4472 3.56578 13.4632 3.99553L11.8756 5.58312C11.1237 5.18196 10.2629 5.03308 9.41994 5.15843C8.57703 5.28379 7.79672 5.67674 7.19413 6.27933C6.59155 6.88192 6.19859 7.66223 6.07323 8.50514C5.94788 9.34806 6.09676 10.2089 6.49792 10.9608L4.61404 12.8447C3.57138 11.9244 2.67258 10.6776 1.90476 9.09048ZM7.47599 9.09048C7.47638 8.69226 7.57071 8.29975 7.7513 7.94484C7.93189 7.58992 8.19365 7.28261 8.51533 7.04787C8.837 6.81313 9.20951 6.65757 9.6026 6.59385C9.99568 6.53012 10.3983 6.56001 10.7776 6.6811L7.5959 9.86282C7.51615 9.61314 7.4757 9.35259 7.47599 9.09048Z"
                            fill="#AA139B"
                        />
                    </svg>
                </button>
            ) : (
                <></>
            )}
        </div>
    );
}
