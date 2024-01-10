import * as React from 'react';

import { Input } from '@devo/coco';

export interface InputDemoProps {
  disabled?: boolean;
  helper?: string;
  hideLabel?: boolean;
  inputWidth?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readOnly?: boolean;
  required?: boolean;
  small?: boolean;
  status: 'base' | 'error' | 'success' | 'warning';
}

export const InputDemo: React.FC<InputDemoProps> = ({
  disabled,
  helper,
  hideLabel,
  inputWidth,
  readOnly,
  required,
  small,
  status = 'base',
}) => (
  <Input
    label="Input label"
    disabled={disabled}
    helper={helper}
    hideLabel={hideLabel}
    inputWidth={inputWidth}
    placeholder="Placeholder"
    readOnly={readOnly}
    required={required}
    small={small}
    status={status}
  />
);
