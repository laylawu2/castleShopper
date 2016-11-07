import {connect} from 'react-redux';

import Checkout from '../components/Checkout';
import { castles, users } from '../../db/data';

const buyCastle = id =>
  (dispatch, getState) => {
    const { castleBought } = getState();
    const body = JSON.stringify({ id }),
          method = 'POST',
          headers = new window.Headers({
            'Content-Type': 'application/json'
          });
    
    return fetch(`/api/playlists/${selectedPlaylist}/songs`, { method, body, headers })
      .then(res => res.json())
      .then(song => {
        song = convertSong(song);
        dispatch(receiveSong(castleBought, song));
      });
  };

const mapStateToProps = ({ castle, user }) => ({
	castle: castles[0],
	user: users[0]
});

const mapDispatchToProps = dispatch => ({
	handleSubmit: castleId => dispatch(buyCastle(castleId))
});
// // connect(mapStateToProps, mapDispatchToProps)(AllPuppies);

// const containerComponentCreator = connect(mapStateToProps, mapDispatchToProps);

// const AllPuppiesContainer = containerComponentCreator(AllPuppies);


export default connect(mapStateToProps)(Checkout);