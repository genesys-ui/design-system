import * as React from 'react';

import { TextArea } from '@devo/coco';

export interface TextareaDemoProps {
  disabled?: boolean;
  helper?: string;
  hideLabel?: boolean;
  inputWidth?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readOnly?: boolean;
  required?: boolean;
  small?: boolean;
  status: 'base' | 'error' | 'success' | 'warning';
}

export const TextareaDemo: React.FC<TextareaDemoProps> = ({
  disabled,
  helper,
  hideLabel,
  inputWidth,
  readOnly,
  required,
  small,
  status = 'base',
}) => (
  <TextArea
    label="TextArea label"
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
