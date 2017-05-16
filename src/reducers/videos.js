import {ActionTypes} from '../core/constants'

const initialState = [
  {
    videoId: 'WPni755-Krg',
    id: 1
  },
]

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : '';
}


export default function videos(state = initialState, action){
    switch(action.type){
        case ActionTypes.ADD_VIDEO:
            return [
              {
                videoId: youtube_parser(action.url),
                id: state.reduce((maxId, video)=>{
                            return Math.max(maxId, video.id)
                        }, 0 ) + 1,
              }
              ,...state
            ]
        case ActionTypes.DELETE_VIDEO:
            return state.filter( (value) => {
                return value.id != action.delete_id
            })
        default:
            return state
    }
}