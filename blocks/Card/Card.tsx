import * as React from 'react';
import { GIArrowRight } from '@devoinc/genesys-icons';

export interface CardProps {
  description?: string;
  direction?: 'vertical' | 'horizontal';
  heading?: string;
  height?: React.CSSProperties['height'];
  icon?: React.ReactElement;
  iconColor?: string;
  iconSize?: string;
  image?: string;
  imageAlt?: string;
  mediaColor?: string;
  target?: '_self' | '_blank';
  title?: string;
  url: string;
}

export const Card: React.FC<CardProps> = ({
  description,
  direction = 'vertical',
  heading,
  height,
  icon,
  iconColor = 'var(--dds-color-heading)',
  iconSize = '3.2rem',
  image,
  imageAlt,
  mediaColor = 'var(--dds-bg-raised)',
  target,
  title,
  url = '#',
}) => (
  <a
    href={url}
    className={`card card--${direction} sb-unstyled`}
    target={target}
    title={title}
    style={{ height: height || 'auto' }}
  >
    {(icon || image) && (
      <div className="card__media" style={{ background: mediaColor }}>
        {icon &&
          React.cloneElement(icon, {
            color: iconColor,
            className: 'card__media-icon',
            size: iconSize,
          })}
        {image && (
          <img className="card__media-img" src={image} alt={imageAlt} />
        )}
      </div>
    )}
    <div
      className={`card__content${!heading ? ' card__content--ai-center' : ''}`}
    >
      {heading && (
        <div className="card__heading">
          {heading}
          <GIArrowRight className="card__heading-icon" />
        </div>
      )}
      {description && <p className="card__description">{description}</p>}
    </div>
  </a>
);
