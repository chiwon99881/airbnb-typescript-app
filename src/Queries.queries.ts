import { gql } from "apollo-boost";

export const REQUEST_SECRET = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email) {
      ok
      error
    }
  }
`;

export const CONFIRM = gql`
  mutation confirmSecret($email: String!, $loginSecret: String!) {
    confirmSecret(email: $email, loginSecret: $loginSecret) {
      ok
      error
      token
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    createAccount(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
    ) {
      ok
      error
    }
  }
`;

export const SEE_FEED = gql`
  query seeFeed {
    seeFeed {
      id
      thumbNail
      caption
      location
      host {
        id
        username
        avatar
      }
      isLiked
      isCommented
      likeCount
      commentCount
      maxPeopleCount
      checkIn
      checkOut
      price
      createdDate
      createdTime
    }
  }
`;

export const SEARCH = gql`
  query searchPost($term: String!, $priceGte: Int, $priceLte: Int) {
    searchPost(term: $term, priceGte: $priceGte, priceLte: $priceLte) {
      id
      thumbNail
      caption
      location
      likeCount
      createdDate
    }
  }
`;

export const FULL_POST = gql`
  query seeFullPost($postId: String!) {
    seeFullPost(postId: $postId) {
      ok
      error
      post {
        id
        thumbNail
        caption
        location
        host {
          id
          fullName
          avatar
          username
          isSelf
        }
        comments {
          id
          text
          user {
            username
            avatar
          }
          createdDate
          createdTime
        }
        isLiked
        isCommented
        likeCount
        commentCount
        maxPeopleCount
        checkIn
        checkOut
        price
        createdDate
        createdTime
      }
    }
  }
`;

export const MAKE_RESERVE = gql`
  mutation makeReservation(
    $postId: String!
    $guestCount: Int!
    $arriveAt: String!
    $leaveAt: String!
  ) {
    makeReservation(
      postId: $postId
      guestCount: $guestCount
      arriveAt: $arriveAt
      leaveAt: $leaveAt
    ) {
      ok
      error
      reservation {
        id
      }
    }
  }
`;

export const MY_PROFILE = gql`
  query myProfile {
    myProfile {
      id
      firstName
      lastName
      fullName
      avatar
      username
      isSelf
      hostings {
        id
        thumbNail
        caption
        comments {
          id
          text
          createdDate
          createdTime
          user {
            id
            username
            avatar
          }
        }
        location
        likeCount
        createdDate
        createdTime
      }

      reservations {
        id
        post {
          id
          thumbNail
          caption
          location
          isCommented
          isLiked
        }
        user {
          id
          username
        }
        guestCount
        arriveAt
        leaveAt
        createdDate
        createdTime
      }
      comments {
        id
        text
        post {
          id
          thumbNail
          caption
        }
        createdDate
        createdTime
      }
      createdDate
      createdTime
    }
  }
`;

export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId) {
      ok
      error
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      ok
      error
    }
  }
`;

export const CANCEL_RESERVE = gql`
  mutation cancelReservation($id: String!) {
    cancelReservation(id: $id) {
      ok
      error
    }
  }
`;

export const NOTIFICATIONS = gql`
  query seeNotification {
    seeNotification {
      id
      user {
        id
        username
        avatar
      }
      reservation {
        id
        post {
          id
          caption
          thumbNail
          location
        }
      }
      type
      createdDate
      createdTime
    }
  }
`;

export const SEE_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      firstName
      lastName
      fullName
      avatar
      username
      isSelf
      hostings {
        id
        thumbNail
        caption
        location
        likeCount
        comments {
          id
          text
          createdDate
          createdTime
          user {
            id
            username
            avatar
          }
        }
        createdDate
        createdTime
      }

      reservations {
        id
        post {
          id
          thumbNail
          caption
          location
          isCommented
          isLiked
        }
        user {
          id
          username
        }
        guestCount
        arriveAt
        leaveAt
        createdDate
        createdTime
      }
      comments {
        id
        text
        post {
          id
          thumbNail
          caption
        }
        createdDate
        createdTime
      }
      createdDate
      createdTime
    }
  }
`;

export const HOSTING = gql`
  mutation hostingPost(
    $thumbNail: String!
    $caption: String!
    $location: String!
    $maxPeopleCount: Int!
    $checkIn: String!
    $checkOut: String!
    $price: Int!
  ) {
    hostingPost(
      thumbNail: $thumbNail
      caption: $caption
      location: $location
      maxPeopleCount: $maxPeopleCount
      checkIn: $checkIn
      checkOut: $checkOut
      price: $price
    ) {
      ok
      error
      post {
        id
      }
    }
  }
`;

export const EDIT = gql`
  mutation editUser(
    $firstName: String
    $lastName: String
    $avatar: String
    $username: String!
  ) {
    editUser(
      firstName: $firstName
      lastName: $lastName
      avatar: $avatar
      username: $username
    ) {
      ok
      error
    }
  }
`;
