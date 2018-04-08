import React from 'react';
import styled from 'styled-components';

const Redder = styled.h1`
  color: red;
`;


function HelloWorld() {
    return(
    <Redder>
        Hello Chippies Library
    </Redder>
    )
}

export default HelloWorld;
