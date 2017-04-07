import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Video from '../components/Video'

const VideoList = ({videos}) => {
    return (
        <div>
            {videos.map( (video) => {
                return (
                    <Video url={video.url} />
                )
            })}
        </div>
)}

const mapStateToProps = (state, ownProps) => {
    return {
        videos: state.videos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList)
