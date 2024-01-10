import styled, { css } from 'styled-components';

export const StyledFigure = styled.figure`
  ${({ mediaHeight, mediaWidth, spaceToTop }) => css`
    width: ${mediaWidth && `${mediaWidth}px`};
    margin-top: ${spaceToTop && '3.2rem'};

    .mdx-embed {
      height: ${mediaHeight && `${mediaHeight}px`};
      width: ${mediaWidth && `${mediaWidth}px`};
    }
  `}
`;
