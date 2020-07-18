import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Teams = (props) => {
  console.log("props.teams", props.teams);
  return (
    <Container>
      <Title>La Liga Teams</Title>
      <Table>
        <thead>
          <tr>
            <HeadersName>Name</HeadersName>
            <Headers>Founded</Headers>
            <Headers>Address</Headers>
          </tr>
        </thead>
        <tbody>
          {props.teams.map((team) => (
            <Tr key={team.team_key}>
              <Cell>
                <StyledLink to={`/teams/${team.team_key}`}>
                  {team.team_name}{" "}
                </StyledLink>
              </Cell>
              <Cell>
                <StyledLink to={`/teams/${team.team_key}`}>
                  {team.founded}
                </StyledLink>
              </Cell>
              <Cell>
                <StyledLink to={`/teams/${team.team_key}`}>
                  {team.address}, {team.city}
                </StyledLink>
              </Cell>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Teams;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  border-bottom: 1px solid black;
  margin: 0 0 2% 0;
`;

const Headers = styled.th`
  border-bottom: 1px solid black;
  font-size: 2rem;
`;

const HeadersName = styled.th`
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 2rem;
`;

const Cell = styled.td`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
`;

const Table = styled.table`
  height: 80vh;
  width: 70%;
`;

const Tr = styled.tr`
  &:hover {
    background-color: blueviolet;
  }
`;
