const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

const categories = await Category.insertMany([
  { name: 'BB Hairdressers Invisible Oil'},
  { name: 'BB Thickening'},
  { name: 'BB Curl'},
  { name: 'BB Surf'}
  ]);

  console.log('categories seeded');
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Hairdressers Invisible Oil Shampoo',
      description: 'A featherlight moisturizing shampoo for dry hair.',
      image: '../../client/src/assets/images/bbhs.png',
      category: categories[0]._id,
      price: '$29.00',
      quantity: '25',
      size: '8.5 fl oz',
      rating: '4.5/5'
    },
    {
      name: 'Hairdressers Invisible Oil Conditioner',
      description:'A divine dose of hair moisture.',
      image: '../../client/src/assets/images/bbhc.png',
      category: categories[0]._id,
      price: '$34.00',
      quantity: '25',
      size: '6.7 fl oz',
      rating: '4.5/5'
    },
    {
      name: 'Hairdressers Invisible Oil Mask',
      description:'Treat hair to 72 hours of lasting moisture.',
      image: '../../client/src/assets/images/bbhm.png',
      category: categories[0]._id,
      price: '$43.00',
      quantity: '21',
      size: '6.7 fl oz',
      rating: '4.5/5'
    },
    {
      name: 'Hairdressers Invisible Oil',
      description: 'Light as air, for healthy hair.',
      image: '../../client/src/assets/images/bbho.png',
      category: categories[0]._id,
      price: '$42.00',
      quantity: '10',
      size: '3.4 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Hairdressers Invisible Oil Heat/UV Protective Primer',
      description: 'The best hair heat protection under the sun.',
      image: '../../client/src/assets/images/bbhp.png',
      category: categories[0]._id,
      price: '$29.00',
      quantity: '21',
      size: '8.5 fl oz',
      rating: '4.6/5'
    },
    {
      name: 'Hairdressers Invisible Oil Soft Texture Finishing Spray',
      description: 'Tousled texture. Feather-soft feel.',
      image: '../../client/src/assets/images/bbhf.png',
      category: categories[0]._id,
      price: '$32.00',
      quantity: '11',
      size: '3.7 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Thickening Volume Shampoo',
      description: 'The best volumizing shampoo for instant body building.',
      image: '../../client/src/assets/images/bbts.png',
      category: categories[1]._id,
      price: '$31.00',
      quantity: '21',
      size: '8.5 fl oz',
      rating: '4.2/5'
    },
    {
      name: 'Thickening Volume Conditioner',
      description: 'Body building made easy.',
      image: '../../client/src/assets/images/bbtc.png',
      category: categories[1]._id,
      price: '$34.00',
      quantity: '26',
      size: '8.5 fl oz',
      rating: '3.2/5'
    },
    {
      name: 'Thickening Go Big Treatment',
      description: 'The first step to sky-high styles.',
      image: '../../client/src/assets/images/bbts.png',
      category: categories[1]._id,
      price: '$30.00',
      quantity: '8',
      size: '8.5 fl oz',
      rating: '4.6/5'
    },
    {
      name: 'Thickening Spray',
      description: 'Lush, thick hair starts here.',
      image: '../../client/src/assets/images/bbtt.png',
      category: categories[1]._id,
      price: '$30.00',
      quantity: '6',
      size: '8.5 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Thickening Great Body Blowout Dry Creme',
      description: 'Your blow dry just got bigger.',
      image: '../../client/src/assets/images/bbtb.png',
      category: categories[1]._id,
      price: '$32.00',
      quantity: '7',
      size: '5 fl oz',
      rating: '3.9/5'
    },
    {
      name: 'Thickening Dryspun Texture Spray',
      description: 'A texturizing hair spray that adds airy volume.',
      image: '../../client/src/assets/images/bbtd.png',
      category: categories[1]._id,
      price: '$31.00',
      quantity: '9',
      size: '3.6 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Curl Moisturizing Shampoo',
      description: 'A gentle cleanser for seriously hydrated curls.',
      image: '../../client/src/assets/images/bbcs.png',
      category: categories[2]._id,
      price: '$31.00',
      quantity: '21',
      size: '8.5 fl oz',
      rating: '4.8/5'
    },
    {
      name: 'Curl 3-in-1 Conditioner',
      description: 'Rinse-out, leave-in, or co-wash.',
      image: '../../client/src/assets/images/bbcc.png',
      category: categories[2]._id,
      price: '$34.00',
      quantity: '11',
      size: '6.7 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Curl Light Defining Cream',
      description: 'For moisturized, flexible curls with movement.',
      image: '../../client/src/assets/images/bbcl.png',
      category: categories[2]._id,
      price: '$32.00',
      quantity: '15',
      size: '8.5 fl oz',
      rating: '4.9/5'
    },
    {
      name: 'Curl Anti-Humidity Gel-Oil',
      description: 'Elongated, nourished curls are no longer a stretch.',
      image: '../../client/src/assets/images/bbcg.png',
      category: categories[2]._id,
      price: '$32.00',
      quantity: '14',
      size: '5 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Curl Butter Mask',
      description: 'A deeply moisturizing treatment for the thirstiest curls.',
      image: '../../client/src/assets/images/bbcm.png',
      category: categories[2]._id,
      price: '$43.00',
      quantity: '8',
      size: '6.7 fl oz',
      rating: '5/5'
    },
    {
      name: 'Curl Mousse',
      description: 'For long-lasting curl definition and bounce.',
      image: '../../client/src/assets/images/bbcmo.png',
      category: categories[2]._id,
      price: '$32.00',
      quantity: '10',
      size: '5 fl oz',
      rating: '3.9/5'
    },
    {
      name: 'Surf Foam Wash Shampoo',
      description: 'Après-beach texture – without the beach.',
      image: '../../client/src/assets/images/bbss.png',
      category: categories[3]._id,
      price: '$27.00',
      quantity: '10',
      size: '8.5 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Surf Creme Rinse Conditioner',
      description: 'Après beach texture (and moisture) – without the beach.',
      image: '../../client/src/assets/images/bbsc.png',
      category: categories[3]._id,
      price: '$29.00',
      quantity: '13',
      size: '8.5 fl oz',
      rating: '4.4/5'
    },
    {
      name: 'Surf Spray',
      description: 'The original sea salt spray.',
      image: '../../client/src/assets/images/bbssp.png',
      category: categories[3]._id,
      price: '$29.00',
      quantity: '22',
      size: '4.2 fl oz',
      rating: '4.4/5'
    },
    {
      name: 'Surf Infusion',
      description: 'The beach, bottled.',
      image: '../../client/src/assets/images/bbsi.png',
      category: categories[3]._id,
      price: '$29.00',
      quantity: '14',
      size: '3.4 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Surf Styling Leave In',
      description: 'Make waves wherever you go.',
      image: '../../client/src/assets/images/bbsl.png',
      category: categories[3]._id,
      price: '$30.00',
      quantity: '10',
      size: '5 fl oz',
      rating: '4.2/5'
    },
    {
      name: 'Surf Foam Spray Blow Dry',
      description: 'Beachy hair can be glamorous, too.',
      image: '../../client/src/assets/images/bbs.png',
      category: categories[3]._id,
      price: '$31.00',
      quantity: '21',
      size: '4 fl oz',
      rating: '4.4/5'
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Melissa',
    lastName: 'White',
    email: 'melzz@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Leslie',
    lastName: 'Holt',
    email: 'lizholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
