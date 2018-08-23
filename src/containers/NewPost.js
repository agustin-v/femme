import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const NewPost = () => {

    let title ;
    let post ;

    return(
        <Mutation
            mutation={ADD_POST}
        >
      {createPost => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createPost({ variables: { title: title.value, post: post.value } });
              title.value = ''
              post.value = ''
            }}
          >
            <input
                ref={node => {
                    title = node;
                }}
                placeholder='Título'
            />
            <input
                ref={node => {
                    post = node;
                }}
                placeholder='Post'
            />
            <button type="submit">Add post</button>
          </form>
        </div>
      )}
    </Mutation>
    )
}

const ADD_POST = gql`
  mutation AddPost($title: String!, $post: String!) {
    createPost(title: $title, post: $post) {
      title
      post
    }
  }
`

export const FETCH_POSTS = gql`
    {
        allPosts {
            post,
            id,
            title
        }
    }
`

export default NewPost