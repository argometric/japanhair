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
    name: "Tokyo",
    map: "",
    slots: 5,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/tokyo-small_sradwd.jpg"
  },
  {
    id: 2,
    name: "Kyoto",
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/kyoto-small_dbwtkv.jpg"
  },
  {
    id: 3,
    name: "Osaka",
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/osaka-small_ogfea0.jpg"
  }
];

const shops = [
  {
    id: 1,
    name: "Tokyo shop1",
    city: "Tokyo",
    map: "",
    slots: 5,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/tokyo-small_sradwd.jpg"
  },
  {
    id: 2,
    name: "Tokyo shop2",
    city: "Tokyo",
    map: "",
    slots: 3,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/tokyo-small_sradwd.jpg"
  },
  {
    id: 3,
    name: "Tokyo shop3",
    city: "Tokyo",
    map: "",
    slots: 4,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/tokyo-small_sradwd.jpg"
  },
  {
    id: 4,
    name: "Kyoto shop1",
    city: "Kyoto",
    map: "",
    slots: 5,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/tokyo-small_sradwd.jpg"
  },
  {
    id: 5,
    name: "Kyoto shop2",
    city: "Kyoto",
    map: "",
    slots: 2,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/kyoto-small_dbwtkv.jpg"
  },
  {
    id: 6,
    name: "Osaka shop1",
    city: "Osaka",
    map: "",
    slots: 3,
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1570048723/osaka-small_ogfea0.jpg"
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  clients,
  locations,
  shops
};
