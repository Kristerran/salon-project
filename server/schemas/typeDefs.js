const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Order {
    _id: ID
    purchasedate: String
    services: [Service]
    }

type Service {
    _id: ID
    kidsHairCut: String
    menHairCut: String
    WomenHairCut: String
    color: String
    style: String
    treatments: String
    texture: String
    price: Float
}

type Stylist {
_id: ID
name: String
speciality: String
bio: String
}

type User {
_id: ID
firstName: String
lastName: String
email: String
orders: [Order]
}

type Auth {
    token: ID
    user: User

}


type Product {
 _id: ID
}

type Query {
user: User
order(_id: ID!): Order
service(_id: ID!): Service
services: [Service]
categories: [Service]
products: [Product]
product: Product
checkout: ID
}

type Mutation {
addUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String
): Auth
addOrder(services: [ID]!): Order
updateUser(
    firstName: String
    lastName: String
    email: String
    password: String
): User
updateService(_id: ID! price: Float!): Service
updateProduct: ID
login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;