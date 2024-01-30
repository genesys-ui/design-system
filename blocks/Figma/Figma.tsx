import * as React from 'react';

type Props = {
  aspectRatio?: '1x2' | '3x4' | '1x1' | '6x5' | '4x3' | '16x9' | '21x9';
  url: string;
  title?: string;
};

const isValidUrl = (url: string) =>
  /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.test(
    url,
  );

const getEmbededUrl = (url: string) =>
  `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

export const Figma: React.FC<Props> = ({
  aspectRatio = '16x9',
  url,
  title = '',
}) => (
  <div className={`ratio ratio-${aspectRatio}`}>
    {isValidUrl(url) ? (
      <iframe
        title={title}
        src={getEmbededUrl(url)}
        height={380}
        allowFullScreen
      />
    ) : (
      <div>Not valid Figma URL</div>
    )}
  </div>
);
