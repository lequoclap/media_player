
import {ActionTypes} from '../core/constants'

export const  addVideo = (url) => (
    {
        type: ActionTypes.ADD_VIDEO,
        url: url
    }
)