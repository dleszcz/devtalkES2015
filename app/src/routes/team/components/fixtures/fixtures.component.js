import React, {Component, PropTypes} from 'react';
import {isArray, isNull} from 'lodash';

export class Fixtures extends Component {
  componentDidMount() {
    this.props.getTeam(this.props.routeParams.id);
    this.props.getTeamFixtures(this.props.routeParams.id);
  }

  render() {
    if (!this.props.teamFixtures || !isArray(this.props.teamFixtures.fixtures)) {
      return null;
    }

    let fixtures = [];

    if (this.props.teamFixtures.fixtures) {
      fixtures = this.props.teamFixtures.fixtures;
    }

    return (
      <div className="fixtures">

        <h1 className="fixtures__header">{this.props.team.name} games</h1>

        <div>
          {fixtures.map(({date, result, status, homeTeamName, awayTeamName}, i) => {
            return (
              <div className={"fixtures__game fixtures__game--" + status.toLowerCase()} key={i}>

                <div>
                {
                  (this.props.team.name === homeTeamName) ?
                  awayTeamName + ' (Home)'
                  :
                  homeTeamName + ' (Away)'
                }
                </div>
                <div className="fixtures__game-result"> {!isNull(result.goalsHomeTeam)?  result.goalsHomeTeam + ' : ' + result.goalsAwayTeam  : ' - : - '}</div>

              </div>
            );
          })}
        </div>

      </div>
    );
  }
}
