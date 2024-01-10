import styled from 'styled-components';

import {
  DESIGN_TOKEN_LIST_COLORS,
  DESIGN_TOKEN_LIST_SIZES,
} from '../../constants';

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export const StyledDesignTokensBgColorBox = styled(StyledDesignTokensBox)`
  border: solid 1px ${DESIGN_TOKEN_LIST_COLORS.BORDER_BASE};
  padding: 2px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: ${DESIGN_TOKEN_LIST_SIZES.BORDER_RADIUS};
  }
`;
