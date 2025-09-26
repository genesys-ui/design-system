import * as React from 'react';
import { DocsContainer, DocsContextProps } from '@storybook/addon-docs/blocks';

type Props = {
  context: DocsContextProps;
  children: React.ReactNode;
};

export const DocsContainerDefault: React.FC<Props> = ({
  context,
  children,
}) => (
  <div className="dali-wrapper dali-wrapper--default">
    <DocsContainer context={context}>{children}</DocsContainer>
  </div>
);

export const DocsContainerLarge: React.FC<Props> = ({ context, children }) => (
  <div className="dali-wrapper dali-wrapper--large">
    <DocsContainer context={context}>{children}</DocsContainer>
  </div>
);

export const DocsContainerWide: React.FC<Props> = ({ context, children }) => (
  <div className="dali-wrapper dali-wrapper--wide">
    <DocsContainer context={context}>{children}</DocsContainer>
  </div>
);
