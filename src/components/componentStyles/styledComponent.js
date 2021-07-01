import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RowNav = styled.nav`
  display: flex;
  align-items: center;
`;

const UnstyledRowList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const UndecoratedLinks = styled.a`
  text-decoration: none;
  color: unset;
`;
export {
  FlexContainer,
  UnstyledRowList,
  RowNav,
  UndecoratedLinks,
};
