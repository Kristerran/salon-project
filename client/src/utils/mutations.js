import { gql } from 'graphql-tag';

export const CREATE_APPT = gql`
  mutation createAppt($id: Integer!, $title: String! $start: Date! $available: Boolean!) {
    login(email: $email, password: $password) {
      id: id
      client: client
      
    }
  }
`;

export const BOOK_APPT = gql`
  mutation bookAppt($id: Integer!, $client: String!, service: String!, $contact: Email! ) {
    login(id: $id, client: $client, service: $service contact: $contact ) {
      id: id
      client: client

    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        _id
      }
    }
  }
`;
