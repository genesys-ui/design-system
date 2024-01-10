import * as React from 'react';

import { Stepper } from '@devo/coco';

export interface StepperDemoProps {
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  steps: {
    name: string;
    label: string;
    status: 'completed' | 'current' | 'pending' | 'disabled';
  }[];
}

export const StepperDemo: React.FC<StepperDemoProps> = ({
  name = 'Dalí stepper',
  size = 'md',
  steps = [
    { name: 'OPT_1', label: 'Option 1', status: 'completed' },
    { name: 'OPT_2', label: 'Option 2', status: 'current' },
    { name: 'OPT_3', label: 'Option 3', status: 'pending' },
    { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
  ],
}) => <Stepper name={name} size={size} steps={steps} />;
