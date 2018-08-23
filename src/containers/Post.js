import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Post = ({match}) => {
    const id = match.params.id
    return(
        <Query query={FETCH_POST} variables={{ id }}>
            {({ loading, error, data }) => {
            if (loading) return <div>loading</div>;
            if (error) return `Error!: ${error}`;

            return (
               <div>{`Titulo: ${data.Post.title}, Post: ${data.Post.post}`}</div>
            );
            }}
        </Query>
    )
}

const FETCH_POST = gql`
  query Post($id: ID!) {
    Post(id: $id) {
        post,
        id,
        title

    }
  }
`

export default Post