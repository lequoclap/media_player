import {ActionTypes} from '../core/constants';

const initialState = [
  {
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com',
  },
    {
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com',
  },
    {
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com',
  },
    {
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com',
  },
    {
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com',
  }
]



export default function videos(state = initialState, action){

    switch(action.type){
        case ActionTypes.ADD_VIDEO:
            return state
        case ActionTypes.DELETE_VIDEO:
            return state
        default:
            return state
    }
}