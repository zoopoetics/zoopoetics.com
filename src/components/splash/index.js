import React from 'react';
import styled from 'styled-components';
import ExternalLinks from 'components/external-links';

const StyledMain = styled.main`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: 320px;
  min-width: 320px;
  position: absolute;
  width: 100vw;
`;
const StyledH1 = styled.h1`
  font-weight: normal;
  margin: 0;
`;
const StyledH2 = styled.h2`
  font-weight: normal;
`;

function Splash() {
  return (
    <StyledMain>
      <StyledH1>{'Peter Barker'}</StyledH1>
      <StyledH2>{'writes code'}</StyledH2>
      <ExternalLinks />
    </StyledMain>
  );
}

export default Splash;
