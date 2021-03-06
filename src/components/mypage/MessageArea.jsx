import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.textarea`
  width: 90%;
  margin: 40px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
  min-height: 100px;
  box-sizing: border-box;
  border-radius: 3px;
  resize: vertical;
`;

const MessageArea = ({ message, changeMessage }) => (
  <Container
    placeholder="感謝の気持ちを伝えましょう"
    value={message}
    onChange={e => changeMessage(e.target.value)}
  >
    {message}
  </Container>
);

MessageArea.propTypes = {
  message: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
};

export default MessageArea;
