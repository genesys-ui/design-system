import * as React from 'react';
import { CardReact } from '../CardReact';
import { CardHtml } from '../CardHtml';
import { Col, Row } from '../Fluid';

export interface ComponentBannersProps {
  urlReact: string;
  urlHtml: string;
}

export const ComponentBanners: React.FC<ComponentBannersProps> = ({
  urlReact,
  urlHtml,
}) => (
  <Row>
    {urlReact && (
      <Col sm={6}>
        <CardReact url={urlReact} />
      </Col>
    )}
    {urlHtml && (
      <Col sm={6}>
        <CardHtml url={urlHtml} />
      </Col>
    )}
  </Row>
);
