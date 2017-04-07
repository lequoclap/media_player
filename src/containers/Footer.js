import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

const Footer = () => {
    return (
        <div>
            the footer!
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
)(Footer)
