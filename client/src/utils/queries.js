import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
        }
    }
`;

export const QUERY_USERS = gql`
    query user($username: String) {
        _id
        username
        email
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
        }
    }
`;

export const QUERY_CREATORS = gql`
    query user($creatorName: String!) {
        user(creatorName: $creatorName) {
            _id
            creatorName
            about
            specialties
            url
        }    
    }
`;

export const QUERY_CREATOR = gql`
    query creators($creatorName: String!) {
        creator(creatorName: $creatorName) {
            _id
            creatorName
            about
            specialties
            url
        }
    }
`;
    
export const QUERY_BLOGPOSTS = gql`
  query blogPosts($creatorName: String) {
    blogPosts(creatorName: $creatorName) {
      _id
      creatorName
      createdAt
      blogText
      comments {
        _id
        commentText
        createdAt
        username
        replies {
            _id
            replyText
            createdAt
            username
        }
      }
    }
  }
`;

export const QUERY_BLOGPOST = gql`
    query blogPost($id: ID!) {
        blogPost(_id: $id) {
            _id
            creatorName
            createdAt
            blogText
            comments {
                _id
                commentText
                createdAt
                username
                replies {
                    _id
                    replyText
                    createdAt
                    username
                }
            }
        }
    }
`;