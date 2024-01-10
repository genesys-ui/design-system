import * as React from 'react';

import { StyledFigure } from './StyledFigure';
import {
  // GICalendarMonth,
  // GICheckThick,
  GIErrorWarningDangerStopFilled,
  // GIExitClose,
  GICheckOkRoundedFilled,
} from '@devoinc/genesys-icons';

// import styled, { css } from 'styled-components';

// import { GIPen } from '@devoinc/genesys-icons';
//
// const StyledExample = styled.figure`
//   ${({ mediaHeight, mediaWidth }) => css`
//     width: ${mediaWidth && `${mediaWidth}px`};
//
//     .mdx-embed {
//       height: ${mediaHeight && `${mediaHeight}px`};
//       width: ${mediaWidth && `${mediaWidth}px`};
//     }
//   `}
// `;
//
// interface ExampleProps {
//   aspectRatio?: '1x2' | '3x4' | '1x1' | '6x5' | '4x3' | '16x9' | '21x9';
//   description?: string;
//   figmaUrl?: string;
//   figmaTitle?: string;
//   image?: string;
//   imageAlt?: string;
//   type?: 'base' | 'do' | 'dont';
// }
//
// export const Example: React.FC<ExampleProps> = ({
//   aspectRatio = '16x9',
//   description,
//   figmaUrl,
//   figmaTitle,
//   image,
//   imageAlt,
//   type = 'base',
// }) => {
//   const isValidFigmaUrl =
//     /https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.test(
//       figmaUrl,
//     );
//   const figmaUrlDef = figmaUrl?.replace('https://www.figma.com/', '');
//
//   // const iconName =
//   //   type === 'do'
//   //     ? 'checkmark-outline'
//   //     : type === 'dont'
//   //     ? 'close-outline'
//   //     : '';
//   return (
//     <StyledExample className={`example example--${type}`}>
//       <div className="example__box">
//         {type !== 'base' && (
//           <div className="example__icon-wrapper">
//             <GIPen className="example__icon-svg" />
//           </div>
//         )}
//         {image && (
//           <img
//             className="example__img"
//             src={image}
//             alt={imageAlt || description}
//           />
//         )}
//         {figmaUrl && (
//           <div className={`ratio ratio-${aspectRatio}`}>
//             <>
//               {isValidFigmaUrl ? (
//                 <iframe title={figmaTitle} src={figmaUrlDef} height={380} />
//               ) : (
//                 console.error('Not valid Figma URL')
//               )}
//             </>
//           </div>
//         )}
//       </div>
//       <figcaption className="example__description">{description}</figcaption>
//     </StyledExample>
//   );
// };

type Props = {
  type?: 'base' | 'do' | 'dont';
  children: React.ReactNode;
  caption?: string;
  spaceToTop?: boolean;
};

export const Figure: React.FC<Props> = ({
  type = 'base',
  children,
  caption,
  spaceToTop,
}) => {
  const IconName =
    type === 'do'
      ? GICheckOkRoundedFilled
      : type === 'dont'
        ? GIErrorWarningDangerStopFilled
        : null;
  return (
    <StyledFigure
      className={`example example--${type}`}
      spaceToTop={spaceToTop}
    >
      <div className="example__box">
        {IconName && (
          <div className="example__icon-wrapper">
            <IconName className="example__icon-svg" />
          </div>
        )}
        {children}
      </div>
      {caption && (
        <figcaption className="example__description">{caption}</figcaption>
      )}
    </StyledFigure>
  );
};
