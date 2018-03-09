import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Name = styled.span`
  font-weight: 700;
  margin-right: 8px;
  color: ${props => props.color}
`;

const Value = styled.span`
  color: #0984e3;
`;

/**
 * Simple counter
 *
 * @param {string} color
 * @param {string} updatedBy which store has send the counter value
 * @param {number} counter
 */
const Counter = ({ color, updatedBy, counter }) => (
  <Wrapper>
    <Name color={color}>{updatedBy}</Name>
    <Value>{counter}</Value>
  </Wrapper>
);

Counter.propTypes = {
  color: PropTypes.string.isRequired,
  updatedBy: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};


export default Counter;
