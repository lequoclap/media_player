import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

const Header = () => {
    return (
        <div>
            <form>
                <div className="row card">
                    <div className="col s9">
                    <input placeholder="Enter youtube URL" id="add_url" className="center" />
                    </div>
                    <div className="col s2">
                        <button className="right btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
                    </div>
                        <div class="card-content">
                <p className="col s12 center-align"> enjoy your time!</p>
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
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
