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

type Query {

}

type Mutation {

}
`;

module.exports = typeDefs;