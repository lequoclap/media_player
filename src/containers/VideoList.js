import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Video from '../components/Video'
import YouTube from 'react-youtube'

const VideoList = ({videos}) => {
    const opts = {
            height: 'auto',
            width: 'auto',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

    return (
        <div className="col s12 center-align">
            {videos.map( (video) => {
                return (
                    <div className="card-panel hoverable" key={video.id}>
                        <YouTube videoId={video.videoId}
                            opts={opts}
                            onReady={_onReady} 
                        />
                        <hr/>
                        <p> Enjoy your life!! </p>
                    </div>
                )
            })}
        </div>
)}

const mapStateToProps = (state, ownProps) => {
    return {
        videos: state.videos
    }
}

export default connect(
    mapStateToProps
)(VideoList)
