import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Con>
      {/* <i className="far fa-8x fa-laugh fa-spin" /> */}
      <Spinner className="fas fa-9x fa-futbol fa-spin" />
      <Text className="JokeList-title">Loading...</Text>
    </Con>
  );
};

export default Loader;

const Con = styled.div`
  width: 100%;
  height: 100%;
`;

const Spinner = styled.i`
  position: absolute;
  top: 45%;
  left: 45%;
`;
const Text = styled.h1`
  position: absolute;
  top: 60%;
  left: 45%;
`;
