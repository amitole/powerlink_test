import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import styled from "styled-components";

const App = () => {
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.jsonbin.io/b/5f118c6991806166284357f7/1",
        {
          method: "GET",
          headers: {
            "secret-key":
              "$2b$10$B4PPI2vqls33o85d0s532es.tEqWFCTSotxfuswfwmHm3fXmecSA6",
          },
        }
      );
      const json = await res.json();
      const data = await json.result;
      setInfo(data);
    };
    getData();
  }, []);

  return (
    <Main>
      <Routes data={Info} />
    </Main>
  );
};

export default App;

const Main = styled.div`
  background: linear-gradient(
    51deg,
    rgba(65, 219, 178, 1) 19%,
    rgba(253, 47, 29, 1) 50%,
    rgba(252, 176, 69, 1) 68%
  );
`;
