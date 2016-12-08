import {connect} from 'react-redux';

import {Fixtures} from './fixtures.component';
import {getTeamFixtures, getTeam} from '../../../../modules/team';

function mapStateToProps(store) {
  return {
    teamFixtures: store.getIn(['team', 'fixtures']),
    team: store.getIn(['team', 'single'])
  };
}

export default connect(mapStateToProps, {
  getTeamFixtures,
  getTeam
})(Fixtures);
