import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {addVideo} from '../actions'

const Header = ({addVideo}) => {
    return (
        <div>
            <form onSubmit={e =>{
                    e.preventDefault();
                    addVideo(e)
                }}>
                <div className="row card">
                    <div className="col s9">
                    <input placeholder="Enter youtube URL" name="media_url" className="center" />
                    </div>
                    <div className="col s2">
                        <button className="right btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
                    </div>
                    <div class="card-content">
                        <p>something to write</p>
                    </div>
                </div>
            </form>
        </div>
)}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addVideo: (evt) => {
            let url = evt.target.querySelector('input[name="media_url"]').value
            dispatch(addVideo(url))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
