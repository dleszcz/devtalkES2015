import {connect} from 'react-redux';

import {Team} from './team.component';
import {getTeam, getTeamList, getTeamPlayerList} from '../../modules/team';

function mapStateToProps(store) {
  return {
    team: store.getIn(['team', 'single']),
    players: store.getIn(['team', 'players'])
  };
}

export default connect(mapStateToProps, {
  getTeam,
  getTeamList,
  getTeamPlayerList
})(Team);
