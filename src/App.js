import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import styled from "styled-components";

const App = () => {
  const [Info, setInfo] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const res = await fetch(
        "https://api.jsonbin.io/b/5f118c6991806166284357f7/3",
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
      setIsLoading(false)
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
  /* background: linear-gradient(135deg, #ffa931, #ffa931 50%, #b9ac92 0, #b9ac92); */
`;
