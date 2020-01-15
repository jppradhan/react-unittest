import styled, { css } from "styled-components";

export const TabWrapper = styled.div`
  width: 100%;
`;

export const TabHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #f5f5f5;
`;

export const TabEach = styled.div`
  min-height: 50px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${props =>
    props.active &&
    css`
      border-bottom: 2px solid #09ade3;
    `}
`;

export const TabContainer = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
