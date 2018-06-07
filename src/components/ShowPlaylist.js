import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Form, Button, Segment, Item, Checkbox } from "semantic-ui-react";
import _ from "lodash";

import Loader from "./Loader.fn";
import VideoItem from "./VideoItem";

class ShowPlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      removing: false
    }
  }

  render() {
    const { playlists, auth, match, history } = this.props;
    const { removing } = this.state;

    if (!auth) return <Loader />;
      console.log("playlists");
      console.log(playlists[`${auth.uid}-${match.params.name}`]);
    
      const currentPlaylist = playlists[`${auth.uid}-${match.params.name}`];
      if (!currentPlaylist === null) return <Loader />;
    
      return (
        <div className="video-list">
          {currentPlaylist && <div className='table'>
            <Checkbox 
            onChange={e => this.setState({removing: !removing})} 
            checked={removing} 
            label={<label>Removing mode {removing && 'on' || 'off'}</label>} />
          </div>}
          <Segment>
            <Item.Group className={removing ? 'removeVideo' : ''} divided>
              {currentPlaylist ? (
                // evals to undefined if its empty
                _.map(currentPlaylist, (vid, key) => (
                  <VideoItem 
                  removing={removing} 
                  plName={match.params.name}
                  authUid={auth.uid}
                  vidUid={key}
                  key={key} 
                  history={history} 
                  vid={vid} />
                ))
              ) : (
                <Item>
                  <p>It's empty in here.</p>
                </Item>
              )}
            </Item.Group>
          </Segment>
        </div>
      );
  }
}

// const ShowPlaylist = ({ playlists, auth, match, history }) => {
//   if (!auth) return <Loader />;

//   let removing = false;

//   console.log("playlists");
//   console.log(playlists[`${auth.uid}-${match.params.name}`]);

//   const currentPlaylist = playlists[`${auth.uid}-${match.params.name}`];
//   if (!currentPlaylist === null) return <Loader />;

//   return (
//     <div className="video-list">
//       <p>
//         <Checkbox 
//         onChange={e => removing != removing} 
//         checked={removing} 
//         label={<label>Removing mode {removing && 'on' || 'off'}</label>} />
//       </p>
//       <Segment>
//         <Item.Group divided>
//           {currentPlaylist ? (
//             // evals to undefined if its empty
//             _.map(currentPlaylist, (vid, key) => (
//               <VideoItem key={key} history={history} vid={vid} />
//             ))
//           ) : (
//             <Item>
//               <p>It's empty in here.</p>
//             </Item>
//           )}
//         </Item.Group>
//       </Segment>
//     </div>
//   );
// };

export default connect(({ playlists, auth }) => {
  return { playlists, auth };
})(ShowPlaylist);
