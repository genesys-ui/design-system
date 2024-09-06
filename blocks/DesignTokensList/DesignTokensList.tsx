import * as React from 'react';

import {
  DesignTokensBgColorBox,
  DesignTokensColorBox,
  DesignTokensBorderBox,
  DesignTokensShadowBox,
  DesignTokensSizeBox,
} from './components';

import { getCmpTokensJson } from '../../tokens';

import {
  StyledDesignTokensContainer,
  StyledDesignTokensTable,
  StyledDesignTokensCell,
  StyledDesignTokensHeadCell,
  StyledDesignTokensRow,
  StyledDesignTokensThead,
} from './styled';

type Props = {
  componentName?: string;
  intro?: React.ReactNode;
  tokens?: [];
};

export const DesignTokensList: React.FC<Props> = ({
  componentName,
  intro,
  tokens,
}) => {
  const [filter, setFilter] = React.useState('');
  const tokensEval = tokens || getCmpTokensJson(componentName || 'button');

  return (
    <StyledDesignTokensContainer className="sb-unstyled">
      {intro || (
        <p className="sbdocs sbdocs-p" style={{ margin: '1.6rem 0' }}>
          There are {tokensEval?.length} related design tokens for this
          component.
        </p>
      )}
      <input
        className="form-control"
        placeholder="Search by token name (at least 3 characters)"
        value={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
      />
      <StyledDesignTokensTable>
        <StyledDesignTokensThead>
          <StyledDesignTokensRow>
            <StyledDesignTokensHeadCell width="55%">
              Name
            </StyledDesignTokensHeadCell>
            <StyledDesignTokensHeadCell width="30%">
              Value
            </StyledDesignTokensHeadCell>
            <StyledDesignTokensHeadCell width="15%" />
          </StyledDesignTokensRow>
        </StyledDesignTokensThead>
        <tbody>
          {tokensEval
            .filter((token) =>
              filter.trim() !== '' && filter.length > 2
                ? token.name.includes(filter.trim().toLowerCase())
                : token,
            )
            .map((child, idx) => {
              const isBgColor = child.name.includes('color-background');
              const isTextColor = child.name.includes('color-text');
              const isBorderColor = child.name.includes('color-border');
              const isShadowColor = child.name.includes('color-shadow');
              const isShadow = child.name.includes('boxShadow');
              const isSizing = child.attributes.category === 'size';
              const isSpacing = child.attributes.category === 'space';
              const isBorder =
                child.attributes.category === 'shape' &&
                child.attributes.property === 'border';
              const isBorderSize =
                child.attributes.category === 'shape' &&
                child.attributes.property === 'borderSize';
              const isBorderRadius = child.name.includes('borderRadius');
              const hasPreview =
                isBgColor ||
                isTextColor ||
                isShadowColor ||
                isBorderColor ||
                isBorder ||
                isBorderRadius ||
                isBorderSize ||
                isShadow ||
                isSizing ||
                isSpacing;
              return (
                <StyledDesignTokensRow key={idx}>
                  <StyledDesignTokensCell>
                    <strong>{child.name}</strong>
                  </StyledDesignTokensCell>
                  <StyledDesignTokensCell
                    colSpan={!hasPreview ? '2' : undefined}
                  >
                    {child.value}
                  </StyledDesignTokensCell>
                  {hasPreview && (
                    <StyledDesignTokensCell align="center">
                      {isBgColor ? (
                        <DesignTokensBgColorBox color={child.value} />
                      ) : isTextColor ? (
                        <DesignTokensColorBox color={child.value} />
                      ) : isBorderColor || isShadowColor ? (
                        <DesignTokensBorderBox borderColor={child.value} />
                      ) : isShadow ? (
                        <DesignTokensShadowBox boxShadow={child.value} />
                      ) : isSizing || isSpacing ? (
                        <DesignTokensSizeBox size={child.value} />
                      ) : isBorder || isBorderSize ? (
                        <DesignTokensBorderBox
                          border={isBorder && child.value}
                          borderSize={isBorderSize && child.value}
                        />
                      ) : isBorderRadius ? (
                        <DesignTokensSizeBox borderRadius={child.value} />
                      ) : (
                        'Preview'
                      )}
                    </StyledDesignTokensCell>
                  )}
                </StyledDesignTokensRow>
              );
            })}
        </tbody>
      </StyledDesignTokensTable>
      <small>
        The units in rem are not based in browser, but in base 10, so 1rem =
        10px.
      </small>
      .
    </StyledDesignTokensContainer>
  );
};
