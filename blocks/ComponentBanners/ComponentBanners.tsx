import * as React from 'react';
import { CardReact } from '../CardReact';
import { CardHtml } from '../CardHtml';

export interface ComponentBannersProps {
  urlReact: string;
  urlHtml: string;
}

export const ComponentBanners: React.FC<ComponentBannersProps> = ({
  urlReact,
  urlHtml,
}) => (
  <section className="mrow">
    {urlReact && (
      <div className="mcol-12 mcol-sm-6">
        <CardReact url={urlReact} />
      </div>
    )}
    {urlHtml && (
      <div className="mcol-12 mcol-sm-6">
        <CardHtml url={urlHtml} />
      </div>
    )}
  </section>
);
