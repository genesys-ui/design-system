import styled, { css } from 'styled-components';

export const StyledDesignTokensColorBox = styled.div`
  ${({ color }) => css`
    color: ${color};
    font-size: 1.2rem;
    font-weight: bold;
  `}
`;
