import * as React from 'react';
import { StoryObj } from '@storybook/react';
import { Canvas, Controls } from '@storybook/addon-docs';
import { ComponentBanners, ComponentBannersProps } from '../ComponentBanners';

export interface LiveDemoProps {
  canvasHeight?: string;
  story: StoryObj<
    React.ComponentProps<React.JSXElementConstructor<HTMLElement>>
  >;
  urlHtml: ComponentBannersProps['urlHtml'];
  urlReact: ComponentBannersProps['urlReact'];
}

export const LiveDemo: React.FC<LiveDemoProps> = ({
  canvasHeight = 'auto',
  story,
  urlHtml,
  urlReact,
}) => (
  <>
    <Canvas of={story} story={{ height: canvasHeight }} />
    <Controls of={story} />
    <p className="sbdocs sbdocs-p">
      This live demo is only a simple preview of the component functionality and
      styles. View the full demo on our Genesys UI (React) or Genesys Styles
      (HTML & CSS) Storybook.
    </p>
    <ComponentBanners urlHtml={urlHtml} urlReact={urlReact} />
  </>
);
