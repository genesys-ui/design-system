import * as React from 'react';

import { light } from '@devoinc/genesys-brand-devo';

import {
  DesignTokensBgColorBox,
  DesignTokensColorBox,
  DesignTokensBorderBox,
  DesignTokensShadowBox,
  DesignTokensSizeBox,
} from './components';

import { aliasTokensJson } from '../../tokens';

import {
  StyledDesignTokensContainer,
  StyledDesignTokensTable,
  StyledDesignTokensCell,
  StyledDesignTokensHeadCell,
  StyledDesignTokensRow,
  StyledDesignTokensThead,
} from './styled';

type Props = {
  intro: React.ReactNode;
  tokens: typeof light.alias | typeof light.cmp;
};

export const DesignTokensList: React.FC<Props> = ({
  intro,
  tokens = aliasTokensJson,
}) => {
  const [filter, setFilter] = React.useState('');
  return (
    <StyledDesignTokensContainer className="sb-unstyled">
      {intro}
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
          {tokens
            .filter((token) =>
              filter.trim() !== '' && filter.length > 2
                ? token.name.includes(filter.trim().toLowerCase())
                : token
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
    </StyledDesignTokensContainer>
  );
};
