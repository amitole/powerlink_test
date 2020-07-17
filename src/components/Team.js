import React from "react";
import { Link } from "react-router-dom";

const Team = (props) => {
  const { team } = props;

  let result;

  if (!team) {
    props.history.push("/teams");
  }

  if (team) {
    result = (
      <div>
        <div>
          <img src={team.team_logo} alt="logo" />
          <h1>This Page Is For {team.team_name} Team</h1>
        </div>
        <div>
          <div> Founded: {team.founded}</div>
          <div>
            Officle Website: <a href={team.website}>{team.website}</a>
          </div>
          <div>
            Address: {team.address},{team.city}
          </div>
        </div>
        <div>
          <h1>{team.team_name} Players:</h1>
          <table>
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
          </table>
        </div>
        <button>
          <Link to="/teams">Go Back</Link>
        </button>
      </div>
    );
  }
  return <div>{result}</div>;
};

export default Team;
