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
              Officle Website: <a href={team.website}>{team.website}</a>
            </div>
            <button>
              <Link to="/teams">Go Back</Link>
            </button>
          </Info>
          <TableContainer>
            <TableTitle>{team.team_name} Players:</TableTitle>
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
                    <td>{p.player_number}</td>
                    <td>{p.player_name}</td>
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
  /* background: linear-gradient(135deg, #b3e5fc, #b3e5fc 50%, #f06292 0, #f06292); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  border-bottom: 1px solid black;
  /* margin: 0 0 2% 0; */
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  flex-basis: 30%;
  padding: 5%;
`;

const Img = styled.img`
  margin: 0 1%;
`;

const Main = styled.div`
  /* background: linear-gradient(135deg, #b3e5fc, #b3e5fc 50%, #f06292 0, #f06292); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

const TableContainer = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

const Table = styled.table`
  width: 60%;
  text-align: center;
  /* padding-bottom: 5%; */
`;

const TableTitle = styled.h1`
  font-size: 1.5rem;
  width: 60%;
  /* border-bottom: 1px solid black; */
  text-align:center;
  /* margin: 0 0 2% 0; */
`;
