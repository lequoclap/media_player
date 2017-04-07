import React, { PropTypes } from 'react'


const Video = ({url}) => {
    return (
        <div>
             <div className="card-panel hoverable">
                 <iframe type="text/html" width="100%"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"/>

             </div>
              
        </div>
    )
}

Video.PropTypes = {
    url: PropTypes.string.isRequired,
};

export default Video;
