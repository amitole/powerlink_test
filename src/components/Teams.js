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
            <tr key={team.team_key}>
              <CellName>
                <StyledLink to={`/teams/${team.team_key}`}>
                  {team.team_name}
                </StyledLink>
              </CellName>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Teams;

const Container = styled.div`
  /* background: linear-gradient(135deg, #b3e5fc, #b3e5fc 50%, #f06292 0, #f06292); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  border-bottom: 1px solid black;
  margin: 0 0 2% 0;
`;

const Headers = styled.th`
  border-bottom: 1px solid black;
`;
const HeadersName = styled.th`
  border-bottom: 1px solid black;
  text-align: left;
`;

const Cell = styled.td`
  color: white;
  margin-right: 5%;
  text-align: center;
  font-size: 0.9rem;
`;

const CellName = styled.td`
  color: white;
  margin-right: 5%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: blueviolet;
  }
`;

const Table = styled.table`
  height: 80vh;
  /* padding-bottom: 5%; */
`;
