import React from "react";
import styled from "styled-components";

const Input = ({ value, setValue, ...props }) => {
  return (
    <Wrapper>
      <StyledDiv {...props}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder ? props.placeholder : ""}
        />
      </StyledDiv>
    </Wrapper>
  );
};

export default Input;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* padding: 1rem; */
  justify-content: center;
  padding: 0.2rem;
  &:disabled {
    color: lightgray;
  }
  input {
    outline: none;
    border: none;
    background: none;
  }
  box-sizing: border-box;
  border: ${(props) =>
    props.borderColor ? "1px solid" + props.borderColor : "1px solid #b8b8b8"};
  background: ${(props) => (props.background ? props.background : "#ffffff")};
  border-radius: 3px;
  width: 100%;
  font-size: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
