const { AuthenticationError } = require('apollo-server-express');
const { User, Appt, Product, Category,Stylist, Customer, Salon, Order, Service } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select("-password"
        );
        return userData;
      }
      throw new AuthenticationError('Incorrect credentials');
    },

    users: async () => {
      return await User.find({});
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username });
    },

    customers: async () => {
      return await Customer.find({});
    },
    customer: async (parent, { name }) => {
      return await Customer.findOne({ name });
    },

    categories: async () => {
      return await Category.find({});
    },

    product: async (parent, { id }) =>
      Product.findById(id).populate('category'),

    products: async (parent, { productCategory, name }) => {
      const params = {};

      if (productCategory) {
        params.productCategory = productCategory;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return Product.find(params).populate('productCategory');
    },

    review: async () => {
      return await Review.find({})
    },
    appts: async (parent, args) => {
      return await Appt.find({available: args.avail})
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        })
      }
    },

    orders: async () => {
      return await Order.find({})
    },
    service: async () => {
      return await Service.find({})
    },

    service: async (parent, args) => {
      return await Service.findById(args.id);
    },

    stylists: async () => {
      return await Stylist.find({})
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products').execPopulate();
console.log(products.length)
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },



  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return Product.findByIdAndUpdate(
        id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
  }
}

module.exports = resolvers;

// type Mutation {
//     addUser( username: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     updateUser( username: String!, email: String!, password: String!): User
//     addOrder(_id: ID!, purchaseDate: String!): Order
//     updateOrder(_id: ID!, purchaseDate: String!): Order 
//     updateProduct(_id: ID!, quantity: Int!): Product
//     updateStylist(_id: ID!, name: String!): Stylist 
//     updateService(price: Float!): Service
//     updateTestimonial(startRating: String!): Testimonial
//     removeComment(thoughtId: ID!, commentId: ID!): Thought
