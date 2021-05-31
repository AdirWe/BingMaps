// import { createFilterOptions } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";

const Select = ({ value, setValue, options, ...props }) => {
  return (
    <Wrapper>
      <StyledDiv styleRules={props}>
        <select onChange={(e) => setValue(e.target.value)} value={value}>
          <option disabled value={0}>
            {props.placeholder ? props.placeholder : "choose"}
          </option>
          {options.map((opt, i) => (
            <option key={i} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </StyledDiv>
    </Wrapper>
  );
};

export default Select;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* padding: 1rem; */
  select {
    background: ${(props) =>
      props.styleRules.background ? props.styleRules.background : "#ffffff"};
    padding: 0.2rem;

    border: ${(props) =>
      props.styleRules.borderColor
        ? "1px solid" + props.styleRules.borderColor
        : "1px solid #b8b8b8"};

    &:disabled {
      color: lightgray;
      color: #c0c0c0;
    }

    outline: none;
    /* border: 1px solid lightgray; */

    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    option {
      color: black;
      &:disabled {
        color: lightgray;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
