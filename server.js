const express = require('express');
const app = express();
const stores = [
  {  
    id : 1,
    name :'Nordstrom',
    logo : 'https://logos-download.com/wp-content/uploads/2016/02/Nordstrom_N_logo.jpg',
 
  },
  {
    id :2,
    name : ' Victoria’s Secret',
    logo:'https://coupon.yalla-souq.com/wp-content/uploads/sites/18/2020/05/%D9%83%D9%88%D8%AF-%D8%AE%D8%B5%D9%85-Victoria-Secret-2.jpg'
  },
  {
    id : 3,
    name :' Old Navy',
    logo : 'https://brandslogos.com/wp-content/uploads/images/large/old-navy-logo-1.png'
  },
  {
    id : 4,
    name : ' Macy’s',
    logo : 'https://myfopinion.files.wordpress.com/2019/11/new-my-f-opinion-macys-logo-2.jpg'
  },
  {  
    id : 5,
    name : 'Forever 21',
    logo : 'https://1000logos.net/wp-content/uploads/2020/05/Logo1-Forever-21.jpg'
  },{
    id : 6,
    name : ' Nordstrom Rack',
    logo: 'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/NORDSTROMR_fp01.png'
  },
  {
    id : 7,
    name : 'Lululemon',
    logo :'https://www.culturecreature.com/wp-content/uploads/2018/01/lululemon-logo-meaning-675x418.jpg'
  },
  {
    id :8,
    name :' Topshop',
    logo : 'https://cdn.dribbble.com/users/6936957/screenshots/15556372/topshop-01.jpg'
  },
  { 
    id : 9,
    name : 'Neiman Marcus',
    logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAn_yKdg0bi-mh-PlQydrgCxHX9mhJvS41VzHrWnlIvGFY4p3FcsJXwkTi0s57fULo5k&usqp=CAU'
  },{
    id : 10,
    name : ' Dillard’s',
    logo: 'https://www.logolynx.com/images/logolynx/8b/8b74d55d20e7da3f25b02d9e7daf206f.jpeg'
  }
]
const items = [
  {
    id :1,
    name : 'black jeans',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri : 'https://i.pinimg.com/originals/35/1c/76/351c76792125bf3dd0820bcf5828e9c0.jpg',
    price : 20
  },
  {
    id :2,
    name : 'blue jeans',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri : 'https://www.asket.com/imgproxy/e:1/width:1250/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/66_4b141c44d9-asket_dnm_stone_bleach_slide_01-original.jpg@jpg',
    price : 25
  },
  {
    id :3,
    name : 'Olive green jeans',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri : 'https://cdn.shopify.com/s/files/1/0991/5130/products/ogdsf3_620x.jpg?v=1601485405',
    price : 24
  },{
    id : 4 ,
    name :  'Loose-fit jeans ',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri: 'https://cdn.tom-tailor.com/img/560_745/1024510_10767_3.jpg',
    price:18
  },
  {
    id : 5 ,
     name : 'blue T-shirt',
     catagory : 'T-shirts',
    store : 'Nordstrom',
    uri : 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540',
    price : 8
  },
  {
    id : 6 ,
    name :'black T-shirt',
    catagory : 'T-shirts',
    store : 'Nordstrom',
    uri : 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2Fba%2F08ba5cdc2035365380ed660b024af1be036d6d82.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_bestbasics%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]' ,
    price:12,
  },
  {
    id : 7 ,
    name :'white T-shirt',
    catagory : 'T-shirts',
    store : 'Nordstrom',
    uri:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2c%2F82%2F2c82435e88bb7a28468576feaa1fe7c99a2b9946.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
    price:12,
  },{
    id : 8 ,
     name : 'green T-shirt',
     catagory : 'T-shirts',
     store : 'Nordstrom',
     uri:'https://images-na.ssl-images-amazon.com/images/I/61MzowWawgL._AC_UL1000_.jpg',
     price : 14,
  },{
    id : 9 ,
    name : 'nike shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri : 'https://fox8.com/wp-content/uploads/sites/12/2021/03/lil-nas-x-satan-shoes.jpg?w=1843&h=1037&crop=1',
    price : 30,
  
  },{
    id : 10 ,
    name : 'adidas shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri : 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg',
    price : 39,
  },
  {
    id : 11 ,
    name : 'running shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri : 'https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw6ca64fdc/content/seasonal-content/homepage/2021/05/endorphinshift-d.jpg',
    price : 34,
  },
  {
    id : 12 ,
    name : 'ara-shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-2ANs3NB8cds5jgpGXjX_d66Uy8NheHenA&usqp=CAU',
    price : 35,
  },
  {
    id : 13,
    name :'men downtown jakcet',
    catagory : 'jackets',
    uri : 'https://rohan.imgix.net/product/05668P21.jpg?w=2500&auto=format&q=77',
    price : 50,
  },{
    
      id : 14,
      name :'N-Voland women',
      catagory : 'jackets',
      uri : 'https://images-na.ssl-images-amazon.com/images/I/71s18umcJ3L._AC_UL1500_.jpg',
      price : 60,
    
  },{
    id : 15,
    name :'blue jacket',
    catagory : 'jackets',
    uri : 'https://abou-ammar.com/wp-content/uploads/2015/01/jacket2-2.jpg',
    price : 55,
  },
  {
    id : 16,
    name :'blue jacket',
    catagory : 'jackets',
    uri : 'https://abou-ammar.com/wp-content/uploads/2015/01/jacket2-2.jpg',
    price : 55,
  }
  
  
]

const items_tow = [
  {
    id :1,
    name : 'black jeans',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri : 'https://allensolly.imgix.net/img/app/product/2/296460-1293821.jpg',
    price : 20
  },
  {
    id :2,
    name : 'blue jeans',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9tFisoBorYE_XB__9bXnJ_NEMm-NudHPtA&usqp=CAU',
    price : 25
  },
  {
    id :3,
    name : 'Olive green jeans',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri : 'https://www.tillys.com/dw/image/v2/BBLQ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1992fa68/tillys/images/catalog/1000x1000/363660531.jpg?sw=539&sh=693&sm=fit',
    price : 24
  },{
    id : 4 ,
    name :  'red jeans ',
    catagory : 'jeans',
    store : 'Nordstrom',
    uri: 'https://i.pinimg.com/originals/43/87/75/43877581bcde2f318b5bc9e60e9aa893.jpg',
    price:18
  },
  {
    id : 5 ,
     name : 'blue T-shirt',
     catagory : 'T-shirts',
    store : 'Nordstrom',
    uri:'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422990/item/goods_61_422990.jpg?width=1600&impolicy=quality_75',
    price : 8
  },
  {
    id : 6 ,
    name :'black T-shirt',
    catagory : 'T-shirts',
    store : 'Nordstrom',
    uri : 'https://cdn.shopify.com/s/files/1/0098/8822/products/CriticalShortSleeveT-ShirtBlackGMST3256.A-Edit_AS_750x.jpg?v=1614250816',
    price:12,
  },
  {
    id : 7 ,
    name :'white T-shirt',
    catagory : 'T-shirts',
    store : 'Nordstrom',
    uri :'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb52ed41-f663-4703-b043-aa13a87d1981/sportswear-t-shirt-k5sZ32.jpg',
    price:12,
  },{
    id : 8 ,
     name : 'green T-shirt',
     catagory : 'T-shirts',
     store : 'Nordstrom',
     uri  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6wdzyKOVsC2QqK6iZjAQhP3A-hgwwZ94nA&usqp=CAU',
     price : 14,
  },{
    id : 9 ,
    name : 'black shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri :'http://sc04.alicdn.com/kf/Hbca9cd6a280c44d1839876211ec9c803v.jpg',
    price : 30,
  
  },{
    id : 10 ,
    name : 'adidas shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri : 'https://ae01.alicdn.com/kf/Hfe87820cce2c479182fd53568b3d0fc0c/Men-Fashion-Sneakers-2020-New-Brand-Mens-Running-Shoes-Breathable-Mesh-Men-Sheos-Outdoor-Sport-Walking.jpg',
    price : 39,
  },
  {
    id : 11 ,
    name : 'puma shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri :'https://www.sportsdirect.com/images/marketing/puma-social-426x426-3.jpg',
    price : 34,
  },
  {
    id : 12 ,
    name : 'lace_up shoes',
    catagory : 'shoes',
    store : 'Nordstrom',
    uri :'https://p.globalsources.com/IMAGES/PDT/BIG/286/B1175238286.jpg',
    price : 35,
  },
  {
    id : 13,
    name :'Fleece Jackets',
    catagory : 'jackets',
    uri : 'https://rendering.documents.cimpress.io/v1/vp/preview?scene=https://scene.products.cimpress.io/v1/scenes/9c8fcdb2-5c25-4d63-9462-a5fc5d16a3a7&width=690&height=690&quality=80',
    price : 50,
  },{
    
      id : 14,
      name :'men jacket',
      catagory : 'jackets',
      uri : 'http://vsipmembers.com/wp-content/uploads/2020/08/Quality-stuffs-Jackets.jpg',
      price : 60,
    
  },{
    id : 15,
    name :'women jacket',
    catagory : 'jackets',
    uri : 'https://images.replayjeans.com/get/w/560/W7624_000_84060_010_1.image?notfound=notavailable&background=225x225x225',
    price : 55,
  },
  {
    id : 16,
    name :'green jacket',
    catagory : 'jackets',
    uri : 'https://images.thdstatic.com/productImages/36bf7c73-70e5-4856-95eb-bb6c03303888/svn/green-berne-work-jackets-coats-hj51gdt640-64_1000.jpg',
    price : 55,
  }
  
  
]
app.get('/', (request, response) => {
  response.send(stores);
});
app.get('/item', (request, response) => {
  response.send(items);
});
app.get('/item_2', (request, response) => {
  response.send(items_tow);
});


app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});