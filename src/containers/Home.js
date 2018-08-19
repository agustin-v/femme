import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import PostPlaceholder from '../components/placeholder/PostPlaceholder'

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
                                <div key={post.id}>
                                    {post.post}
                                </div>
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