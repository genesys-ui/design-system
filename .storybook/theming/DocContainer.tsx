import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { DocsContainer as SBDocsContainer } from '@storybook/addon-docs/blocks';

import { light } from '@devoinc/genesys-brand-devo';

export const DocContainer = ({ context, children }) => (
  <div className="dali-wrapper dali-wrapper--default">
    <SBDocsContainer context={context}>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SBDocsContainer>
  </div>
);
