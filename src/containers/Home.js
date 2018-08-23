import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {Link} from 'react-router-dom'

import PostPlaceholder from '../components/placeholder/PostPlaceholder'
import PostPreview from '../components/PostPreview/PostPreview'

const Home = () => {
    return(
        <div className='container'>
            <Query query={FETCH_POSTS}>
                {({ loading, error, data }) => {
                    if (loading) return (<PostPlaceholder/>)
                    if (error) return `Error! ${error.message}`
                    return (
                        <div>
                            {data.allPosts.map(post => (
                                <Link to={`/post/${post.id}`} key={post.id} style={{textDecoration: 'none'}}>< PostPreview post={post.post} title={post.title}/></Link>
                            ))}
                        </div> 
                    )
                }}
            </Query>
        </div>
    )
}

export const FETCH_POSTS = gql`
    {
        allPosts ( orderBy: createdAt_DESC ) {
            post,
            id,
            title,
            createdAt
        }
    }
`

Home.defaultProps = {
    data : {
        allPosts: [{}, {}, {}, {}]
    }
}

export default Home