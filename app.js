const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
  //===============================================================================
  {
    preview:
      "https://pixabay.com/get/g02a6e69e58600221919da8b7e00b59fbabb911bce2825cdab555ca95285e2e7ff675a0c9ff559eb95a8c0d9982dee04f_640.jpg",
    original:
      "https://pixabay.com/get/gd47e1d2be2afcdb178573ca0c3fb696f780f217261f6660817e14f046957641cfbf62b8715978e152dc19b6717ee5390_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://pixabay.com/get/gd3e81e74637e99a26dfb40eaf3db75829b1ba87e9171641a00434c1b4c66785a77b36947a7ae6464b7407752bf75b5a8_640.jpg",
    original:
      "https://pixabay.com/get/gbd4e36ee115f434f68bdbe2b5e06e6d831a7589460f98231bdd992643ed56bacf939b9f6a08c5429f6be02ff493e78d3_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://pixabay.com/get/gc19e67280155b0617ee8ed50af97836875b6c4eb747f19fce658d60d1008f21cda0bad920c530c847b67c1d93ccab20e_640.jpg",
    original:
      "https://pixabay.com/get/gd9ae507e5878520162930f6da73f08d74fce1d292c7b2c449f4d1a30ef7bc02b83ff27902a7ee902e07ab28247736eed_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://pixabay.com/get/gb5bfceb0132667dc94a86d319e317f7aa4e4589ff2458150193243c8ec7cffa05392b831e6c065f0460eab12a24f7fb8_640.jpg",
    original:
      "https://pixabay.com/get/gad8050347cb95b6a19175b21f70afe9c04cf370aa9b31dd1948016df646b8c0f7f4da6bbc4b648bed413f0790d1ba347_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://pixabay.com/get/gcd4bdb924c9fb54cbb5a13cd30f3738a2ca8a461290dda9fd80e1f6b4eb784fdb649c0126a9bbc734005df8ae6f1285d_640.jpg",
    original:
      "https://pixabay.com/get/gc563026c1a5ab0ed677ae84f5d74c1f3e04648337fa89a75c2bd3b3b9698da6eb99d0ba3d454959a4a3637651e7ceccb_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://pixabay.com/get/gfc42976fc193e3520861bcb0e70f318cc706808043d335af4fec2e8133e139cb361548117d0c0eb835c8088388daec64_640.jpg",
    original:
      "https://pixabay.com/get/ge7c59944e0e19f70c4021951decedc0c36a79a2f456d3165f72f67a3fad0c891c53a8f853a251d3d484a5af5274243e8_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://pixabay.com/get/g6a10ea81e75c956bee17170ce8ca5e86d83deef75be002067913856471acc7c461cee246e5a4b200bebc61197e0e5a7a_640.jpg",
    original:
      "https://pixabay.com/get/g4529b0ab238854689ec39a81f35e870cb8a15e60d791c150f3df41b186baae70613ad1edf66a0e91d386a2be08e19a13_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://pixabay.com/get/g74e9343822d15613010eeb0ba5db618f12457b6b72f98d9a1c6121e591f0f345ac5ad2a0bec0c14fdf9c3a67538507c9_640.jpg",
    original:
      "https://pixabay.com/get/ge0e3af2c5ed9a8c69062e6290a619f8a42ff6c36e070dd87676abc6db243a9b0190b401c9cdd13e2f62cf18d6b2c3ec6_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://pixabay.com/get/g2d02b44f3a4f8a9ae3f247ff33b433727c7471d0780e111c1f9c8471ee11447fb27c54e74adee2c7103b7edf0e2515fe_640.jpg",
    original:
      "https://pixabay.com/get/gb8faf717720e3001f1133d74920ede0d51f37fe32955d5189ac2c81f724da282ab93d62e22e608d43198d1abdb94420f_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
  {
    preview:
      "https://pixabay.com/get/gb7ac2b2359c52017c660ebd348f5de1b934b83a4932dfccac27644742a775988f5dafb109e40d3de6dc761e664d8f641_640.jpg",
    original:
      "https://pixabay.com/get/g68b6ab987bb0a662b843b031157b6a505f13828a8aca69086edf72c5ffcb5ffe367d64804b3de8bf283b3eedfb243a4b_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://pixabay.com/get/gb567ef20bc9e638b923b3a686cee04a6ac274343a527106b5ed38d2579c6431449c004c9de9a13f0fa3c06ee8c8dd3ad_640.jpg",
    original:
      "https://pixabay.com/get/gab3a4147f23e091eeb5f7a4938e237665035520c0c1d60bef67df79256e1c3bae03859b0b1ba9bd50ee1a60de29dd974_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://pixabay.com/get/g79b1bb6ca7d154152c1bc2eca0ea002a9e106176aebbb46cb289b5ea422ee95d8685675b5946fa10e682edb69093df86_640.jpg",
    original:
      "https://pixabay.com/get/g2a4500e82d9693c7383c56c519d6d6ca889c3324b5018851f0aa44320720df8546c69e49508610dc104d97901930e020_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://pixabay.com/get/ge313e36d8cb783f6a1347a8c6f7c438d572d4d140e50ca8ab78c6c17334f572c168ed623b09ff3e85244504a1c208668_640.jpg",
    original:
      "https://pixabay.com/get/g29c494d9e777c9458a7b2f14892312aa91d5e5072620e824ef8aaf92cd4a07633b260ac37971e578e005822301fc53b8_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://pixabay.com/get/g2b753943ad056c49763e9d3f7697c059db84d610f84831ee58027a2ef30fb6bf29cf5b7907021f8243a28d9fe7fbbd9f_640.jpg",
    original:
      "https://pixabay.com/get/g830aa66dd9533080a96f198785fe2b7d539911225bc0b1129f3408d189dc7db2527bc5dba36dcab8173c882cf061e930_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://pixabay.com/get/gff483c7a292c5031202b2e15029278befccd780560083f74cb02bfe1b9d42ae5d5dddf7bf0270587be0e1d873a2394da_640.jpg",
    original:
      "https://pixabay.com/get/geeb77a5f7e070d2b372015152394659ac6435f45bbf538fafe2c76a4797e4e69730a7f040ec920f62a28a354581458b3_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://pixabay.com/get/g6949d2990a315d50ee2fe4eb8d597c00c46b07fed17bb8c838f58e59520903162d324c16235686eced83df8d6c9982db_640.jpg",
    original:
      "https://pixabay.com/get/ge9ee548c180f6119328e0ef954e18d8ff4a6ead028b836a954fdd5cefe69f1d9fe6ed538cafe48fd62011c943925b350_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://pixabay.com/get/gf8729b3a19b762c62f7b606f93dcd7f4ecefd7cfc1c6cbcc42cb561ae723366ff43fbb2abaf55b9728f4b3ee1cd80ee4_640.jpg",
    original:
      "https://pixabay.com/get/g597fd8eaa28cc57b7480c9013434f2569aa93ae3405e4d9ee2239a36ffe7a449c11f8f73f72fe88765b4df687e36425a_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://pixabay.com/get/g5cb37893b67a3b3214cadc6eaecb83a834471376a1e76f67aff3859cd09da2a4d263a8dc71d01e6d4a962aee900e0de5_640.jpg",
    original:
      "https://pixabay.com/get/g2807bf90dbc213ca11a0ff4bc0cd5e91f1cb65c79f2750fad6c9984d7b62445cdf6632d670f4651b029eadd2d27242ba_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

export default galleryItems;
