const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Salon {
    _id: ID
    salonId: Int
    name: String
    location: String
    phoneInt: Int

}
type Category {
    _id: ID
    categoryId: Int
    salonId: Int
    name: String

  }

type Order {
    _id: ID
    salonId: Int
    orderId: Int
    purchaseDate: String
    orderType: String
    products: [Product]

    }

type Customer {
    _id: ID
    salonId: Int
    name: String
    email: String
    phoneNumber: String
 }

type Service {
    _id: ID
    salonId: Int
    serviceId: Int
    serviceName: String
    options: String
    price: Float
}

type Product {
    _id: ID
    salonId: Int
    productId: Int
    title: String
    quantity: Int
    images: String
    description: String
    price: Float
    category: Category
}

type Stylist {
_id: ID!
salonId: Int
stylistId: Int
name: String
speciality: String
bio: String
year: String
imgPath: String
}

type User {
_id: ID
username: String
firstName: String
lastName: String
email: String
orders: [Order]

}


type Appt {
    _id: ID
    id: String
    available: Boolean
    title: String
    start: String
    client: String
    service: String
    contact: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    users: [User]
    categories: [Category]
    customer(name: String!): Customer
    customers: [Customer]
    orders: [Order]
    order(_id: ID!): Order
    products: [Product]
    product(_id: ID!): Product
    stylists: [Stylist]
    stylist(id: ID!): Stylist
    service(id: ID!): Service
    services: [Service]
    me: User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser( firstName: String!, lastName: String!, username: String!, email: String!, password: String!): User
    addOrder(products: [ID]!): Order
    updateProduct( productId: String!, quantity: Int! ): Product
    removeProduct(title: String!): Product
    addService(serviceName: String!, price: Float!): Service
    removeService(serviceId: String!): Service
    bookAppt( id: String!): Appt
    creatOrder(orderType: String!): Order
    updateOrder(orderId: [ID]!): Order
    updateCustomer(customerId: [ID]!): Customer
    addProduct(productId: ID!): Product
    deleteProduct(productId: ID!): Product

}
`;

module.exports = typeDefs;


