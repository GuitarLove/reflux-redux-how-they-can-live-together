import React, { Component } from 'react';
import styled from 'styled-components';
import RefluxComponent from './reflux/RefluxComponent';
import RefluxButton from './reflux/RefluxButton';

const Wrapper = styled.div`
  width: 600px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class Mock extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <h1>Mock</h1>
        <RefluxComponent />
        <ButtonWrapper>
          <RefluxButton />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default Mock;
