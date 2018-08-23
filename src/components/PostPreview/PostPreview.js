import React from 'react'

import Avatar from '../Avatar/Avatar'

const PostPreview = ({post, title}) => {
    return(
        <div style={{margin: '1em', padding: '1em'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Avatar /><span>{title}</span>
            </div>
            <blockquote>{post}</blockquote>
        </div>
    )
}

export default PostPreview