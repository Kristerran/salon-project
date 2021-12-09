const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Salon {
    _id: ID!
    salonId: Int!
    name: String!
    location: String!
    phoneInt: Int!

}
type Category {
    _id: ID!
    categoryId: Int!
    salonId: Int!
    name: String!

  }

  type ProductCategory {
    _id: ID!
    name: String!
  }

type Order {
    _id: ID!
    salonId: Int!
    orderId: Int!
    purchasedate: String
    orderType: String!

    }

type Customer {
    _id: ID!
    salonId: Int!
    name: String!
    email: String!
    phoneNumber: Int
 }

type Service {
    _id: ID!
    salonId: Int!
    serviceId: Int!
    serviceName: String!
    options: String!
    price: Int!
}

type Product {
    _id: ID!
    salonId: Int!
    productId: Int!
    title: String!
    quantity: String!
    images: String!
    description: String!
    price: Float
    category: Category!
}

type Stylist {
_id: ID!
salonId: Int!
stylistId: Int!
name: String!
speciality: String!
bio: String!
year: String!
imgPath: String!
}

type Review {
    _id: ID!
    name: String!
    quote: String!
    date: String!
    image: String!
    rating: String!
}

type User {
_id: ID!
username: String!
firstName: String!
lastName: String!
email: String!

}

type Auth {
    token: ID
    user: User
}


type Product {
 _id: ID
}


type Product {
 _id: ID
}

type Query {
    me: User
    categories: [Category]
    user(username: String!): User
    customer(name: String!): Customer
    customers: [Customer]
    users: [User]
    orders: [Order]
    order(_id: ID!): Order
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    stylists: [Stylist]
    stylist(id: ID!): Stylist
    service(id: ID!): Service
    services (salonId: ID!): [Service]
}

type Mutation {
    addUser( username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser( username: String!, email: String!, password: String!): User
    creatOrder(orderType: String!): Order
    updateOrder(orderId: [ID]!): Order
    deleteOrder(orderId: [ID]!): Order
    updateCustomer(customerId: [ID]!): Customer
    addProduct(productId: ID!): Product
    deleteProduct(productId: ID!): Product
    updateProduct(productId: ID!, price: Float!): Product
    addService(serviceName: String!, option: String!, price: Float!): Service

}
`;

module.exports = typeDefs;


