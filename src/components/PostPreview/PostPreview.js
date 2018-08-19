import React from 'react'

import Avatar from '../Avatar/Avatar'

const PostPreview = ({post}) => {
    return(
        <div style={{margin: '1em', padding: '1em'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Avatar /><span>Title</span>
            </div>
            <blockquote>{post}</blockquote>
        </div>
    )
}

export default PostPreview