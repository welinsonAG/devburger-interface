import styled from "styled-components";

export const Root = styled.table`
overflow: hidden;
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: 1px solid #cdcdcd;

  &:last-child {
    border-top-right-radius: 20px;
  }
  &:first-child {
    border-top-left-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  font-weight: 500;
  text-align: center;
  color: #484848;
  line-height: 115%;
`;

export const Body = styled.tbody`

`;
