import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function ProfileSelect({
    defaultValue = "",
    className = "",
    values = [],
    onChange = () => {},
    disabled = false,
}) {
    return (
        <>
            <Select
                autoFocus={false}
                defaultOpen={false}
                defaultValue={defaultValue}
                className={className}
                onChange={onChange}
                disabled={disabled}
            >
                {values.map((item) => (
                    <Option key={item} value={item}>
                        {item}
                    </Option>
                ))}
            </Select>
        </>
    );
}
