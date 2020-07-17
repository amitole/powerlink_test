import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Teams from "./components/Teams";
import Team from "./components/Team";

const Routes = (props) => {
  const { data } = props;

  console.log("dataaaa: ", data);
  const getTeam = (props) => {
    let id = props.match.params.id;
    let currentTeam = data.find((team) => team.team_key === id);
    return <Team {...props} team={currentTeam} />;
  };
  return (
    <div>
      <Switch>
        <Route exact path="/teams" render={() => <Teams teams={data} />} />
        <Route exact path="/teams/:id" render={getTeam} />
        <Redirect to="/teams" />
      </Switch>
    </div>
  );
};

export default Routes;
