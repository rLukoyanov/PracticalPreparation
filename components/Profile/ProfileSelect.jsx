import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function ProfileSelect({
  defaultValue = '',
  className = '',
  values = [],
  onChange = () => {},
}) {
  return (
    <>
      <Select
        autoFocus={false}
        defaultOpen={false}
        defaultValue={defaultValue}
        className={className}
        onChange={onChange}
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
