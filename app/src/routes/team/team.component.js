import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import pick from 'lodash/pick';

const logoStyle = {height: '100px'};

export class Team extends Component {
  componentDidMount() {
    this.props.getTeam(this.props.routeParams.id);
    this.props.getTeamPlayerList(this.props.routeParams.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const compareProps = ['team'];
    return shallowCompare({
      props: pick(this.props, compareProps)
    }, pick(nextProps, compareProps), nextState);
  }

  render() {
    if (!this.props.team && !this.props.players) {
      return null;
    }

    let players = [];
    let player = {};
    let positionsSet = new Set();

    if (this.props.players.players) {
      players = this.props.players.players;

      for (player of players) {
        positionsSet.add(player.position);
      }
    }

    let positions = [ ...positionsSet ];

    return (
      <div className="team">
        <img style={{...logoStyle}} src={this.props.team.crestUrl} alt=""/>
        <div>{this.props.team.name}</div>
        <div>{this.props.team.squadMarketValue}</div>

        <h3 className="team__positions-header">Positions</h3>
        <ul className="team__positions">
          {
            positions.map(function(player) {
              return <li className="team__position" key={player}>{player}</li>
            })
          }
        </ul>

      </div>
    );
  }
}

Team.PropTypes = {
  getTeam: PropTypes.func,
  team: PropTypes.object,
  players: PropTypes.object
};
