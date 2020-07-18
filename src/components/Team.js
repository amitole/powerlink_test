import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Team = (props) => {
  const { team } = props;

  let result;

  if (!team) {
    props.history.push("/teams");
  }

  if (team) {
    result = (
      <Container>
        <Header>
          <Title> {team.team_name} Football Club</Title>
          <Img src={team.team_logo} alt="logo" />
        </Header>
        <Main>
          <Info>
            <div>
              Address: {team.address},{team.city}
            </div>
            <div> Founded: {team.founded}</div>
            <div>
              Officle Website: <Web href={team.website}>{team.website}</Web>
            </div>
            <StyledLink to="/teams">
              <Btn>Back To Teams</Btn>
            </StyledLink>
          </Info>
          <TableContainer>
            <TableTitle>{team.team_name} Players:</TableTitle>
            <p>Coache: {team.coaches[0].coach_name} </p>
            <Table>
              <thead>
                <tr>
                  <th>Shirt Number</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {team.players.map((p) => (
                  <tr key={p.player_key}>
                    <Cell>{p.player_number}</Cell>
                    <Cell>{p.player_name}</Cell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </Main>
      </Container>
    );
  }
  return <React.Fragment>{result}</React.Fragment>;
};

export default Team;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  border-bottom: 1px solid black;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
`;

const Img = styled.img`
  margin: 0 1%;
`;

const TableContainer = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  width: 50%;
  height: 80%;
  text-align: center;
`;

const TableTitle = styled.h1`
  font-size: 1.5rem;
  width: 60%;
  text-align: center;
`;

const Cell = styled.td`
  color: white;
`;

const Web = styled.a`
  color: white;
`;

const StyledLink = styled(Link)`
  color: blueviolet;
  text-decoration: none;
  text-align: center;
`;

const Btn = styled.button`
  color: blueviolet;
`;
