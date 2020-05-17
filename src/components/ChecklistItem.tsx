import React from 'react';
import { Checkbox } from 'antd';

interface ChecklistItemProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const defaultOnChange = (_: any) => {};

const ChecklistItem: React.FunctionComponent<ChecklistItemProps> = ({checked, onChange = defaultOnChange, children}) => {
  return <Checkbox onChange={(e) => onChange(e.target.checked)} checked={checked}>{children}</Checkbox>
}

export default ChecklistItem;
