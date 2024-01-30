import * as React from 'react';

import { Select } from '@devo/coco';

const demoOptions = [
  { value: 1, label: 'Option one' },
  { value: 2, label: 'Option two' },
  { value: 3, label: 'Option three', isDisabled: true },
  { value: 4, label: 'Option four' },
  { value: 5, label: 'Option five' },
  { value: 6, label: 'Option six' },
  { value: 7, label: 'Option seven' },
];

export interface SelectDemoProps {
  helper?: string;
  hideLabel?: boolean;
  inputWidth?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isDisabled?: boolean;
  options: unknown;
  readOnly?: boolean;
  isRequired?: boolean;
  small?: boolean;
  status: 'base' | 'error' | 'success' | 'warning';
}

export const SelectDemo: React.FC<SelectDemoProps> = ({
  helper,
  hideLabel,
  inputWidth,
  isDisabled,
  options = demoOptions,
  readOnly,
  isRequired,
  small,
  status = 'base',
}) => (
  <Select
    label="Select label"
    isDisabled={isDisabled}
    helper={helper}
    hideLabel={hideLabel}
    inputWidth={inputWidth}
    options={options}
    placeholder="Placeholder"
    readOnly={readOnly}
    isRequired={isRequired}
    small={small}
    status={status}
  />
);
