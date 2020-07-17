import React from "react";
import { Link } from "react-router-dom";

const Teams = (props) => {
  console.log("props.teams", props.teams);
  return (
    <div>
      <h1>La Liga Teams</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Founded</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map((team) => (
            <tr key={team.team_key}>
              <td>
                <Link to={`/teams/${team.team_key}`}>{team.team_name}</Link>
              </td>
              <td>
                <Link to={`/teams/${team.team_key}`}>{team.founded}</Link>
              </td>
              <td>
                <Link to={`/teams/${team.team_key}`}>
                  {team.address}, {team.city}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;

