import * as React from 'react';
import styled from 'styled-components';

type Props = {
  description: string;
  restrictions?: string;
  selector: string;
  type: 'block' | 'element' | 'modifier';
};

const StyledClassesTableHead = styled.th`
  width: 20%;
`;

export const ClassesTable: React.FC<Props> = ({
  description,
  restrictions,
  selector,
  type,
}) => (
  <table className="sbdocs sbdocs-table sbdocs-table--reduced">
    <tbody>
      <tr>
        <StyledClassesTableHead>Selector</StyledClassesTableHead>
        <td>
          <code>{selector}</code>
        </td>
      </tr>
      <tr>
        <StyledClassesTableHead>Description</StyledClassesTableHead>
        <td>{description}</td>
      </tr>
      <tr>
        <StyledClassesTableHead>Type</StyledClassesTableHead>
        <td>{type}</td>
      </tr>
      {restrictions && (
        <tr>
          <StyledClassesTableHead>Restrictions</StyledClassesTableHead>
          <td>
            <pre>{restrictions}</pre>
          </td>
        </tr>
      )}
    </tbody>
  </table>
);
