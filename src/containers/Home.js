import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import PostPlaceholder from '../components/placeholder/PostPlaceholder'
import PostPreview from '../components/PostPreview/PostPreview'

const Home = () => {
    return(
        <div className='container'>
            <Query query={FETCH_POSTS}>
                {({ loading, error, data }) => {
                    console.log(data)
                    if (loading) return (<PostPlaceholder/>)
                    if (error) return `Error! ${error.message}`
                    return (
                        <div>
                            {data.allPosts.map(post => (
                                < PostPreview key={post.id} post={post.post}/>
                            ))}
                        </div> 
                    )
                }}
            </Query>
        </div>
    )
}

const FETCH_POSTS = gql`
    {
        allPosts {
            post,
            id,
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