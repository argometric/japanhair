const clients = [
  {
    id: 1,
    name: "Catherine Newton",
    gender: "female",
    email: "catherinenewton@zizzle.com",
    phone: "+1 (931) 511-3949"
  },
  {
    id: 2,
    name: "Velazquez Christian",
    gender: "male",
    email: "velazquezchristian@zizzle.com",
    phone: "+1 (884) 405-3546"
  },
  {
    id: 3,
    name: "Josefa Cobb",
    gender: "female",
    email: "josefacobb@zizzle.com",
    phone: "+1 (975) 510-3838"
  },
  {
    id: 4,
    name: "Marcia Mcneil",
    gender: "female",
    email: "marciamcneil@zizzle.com",
    phone: "+1 (827) 410-2597"
  },
  {
    id: 5,
    name: "Kinney Moss",
    gender: "male",
    email: "kinneymoss@zizzle.com",
    phone: "+1 (982) 534-3713"
  },
  {
    id: 6,
    name: "Christi Calhoun",
    gender: "female",
    email: "christicalhoun@zizzle.com",
    phone: "+1 (974) 509-3490"
  },
  {
    id: 7,
    name: "Socorro Alvarez",
    gender: "female",
    email: "socorroalvarez@zizzle.com",
    phone: "+1 (949) 565-2547"
  },
  {
    id: 8,
    name: "Morris Kinney",
    gender: "male",
    email: "morriskinney@zizzle.com",
    phone: "+1 (877) 413-3126"
  },
  {
    id: 9,
    name: "Perkins Tillman",
    gender: "male",
    email: "perkinstillman@zizzle.com",
    phone: "+1 (916) 516-3926"
  },
  {
    id: 10,
    name: "Eileen Byrd",
    gender: "female",
    email: "eileenbyrd@zizzle.com",
    phone: "+1 (898) 595-3510"
  }
];

const locations = [
  {
    id: 1,
    name: "Tokyo shop",
    email: "tokyo@shop.com",
    phone: "+1 (123) 456-7890",
    imgUrl:
      "https://jw-webmagazine.com/wp-content/uploads/2019/06/jw-5d1448522b66d3.01045017.jpeg"
  },
  {
    id: 2,
    name: "Kyoto shop",
    email: "kyoto@shop.com",
    phone: "+1 (456) 789-1230",
    imgUrl:
      "http://s3-us-west-2.amazonaws.com/static.trip-n-travel.com/wp-content/uploads/2016/05/19055310/23428057590_dc1b16b8e4_k.jpg"
  },
  {
    id: 3,
    name: "Osaka shop",
    email: "osaka@shop.com",
    phone: "+1 (789) 123-4560",
    imgUrl:
      "https://external-preview.redd.it/sUSxT0BMIKQK8sx9HZEcgwATJUv-J0ZiwWPosq6HigY.jpg?auto=webp&s=058f24cb24642922b6cdbb027cb264f6e018f18a"
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  clients,
  locations
};
