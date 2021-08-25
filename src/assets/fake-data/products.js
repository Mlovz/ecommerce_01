const product_01_image_01 = require('../images/products/product_01(1).jpg').default
const product_01_image_02 = require('../images/products/product_01(2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product_02(1).jpg').default
const product_02_image_02 = require('../images/products/product_02(2).jpg').default

const product_03_image_01 = require('../images/products/product_03(1).jpg').default
const product_03_image_02 = require('../images/products/product_03(2).jpg').default

const product_04_image_01 = require('../images/products/product_04(1).jpg').default
const product_04_image_02 = require('../images/products/product_04(2).jpg').default

const product_05_image_01 = require('../images/products/product_05(1).jpg').default
const product_05_image_02 = require('../images/products/product_05(2).jpg').default

const product_06_image_01 = require('../images/products/product_06(1).jpg').default
const product_06_image_02 = require('../images/products/product_06(2).jpg').default

// const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
// const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

// const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
// const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

// const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
// const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

// const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
// const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

// const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
// const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

// const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
// const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "Футболка с динозавром 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Футболка с динозавром 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"]
    },
    {
        title: "Футболка с динозавром 02",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange", "yellow"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"]
    },
    {
        title: "Футболка - поло 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "orange", "blue"],
        slug: "ao-thun-polo-04",
        size: ["xl"]
    },
    {
        title: "Футболка - поло 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "pink"],
        slug: "ao-thun-polo-05",
        size: ["xxl"]
    },
    {
        title: "Футболка - поло 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange", "blue"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "black"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-09",
        size: ["m"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        size: ["l"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_01_image_01,
        image02: product_05_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-11",
        size: ["s", "m", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "quan-jean",
        colors: ["blue"],
        slug: "quan-jean-12",
        size: ["s", "m", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red"],
        slug: "ao-thun-dinosaur-13",
        size: ["s", "m", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "blue"],
        slug: "ao-thun-dinosaur-14",
        size: ["s", "m"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["red", "blue"],
        slug: "ao-thun-dinosaur-15",
        size: ["xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-somi",
        colors: ["blue", "black"],
        slug: "ao-somi-dai-tay-16",
        size: ["m", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-17",
        size: ["s", "l", "xl"]
    },
    {
        title: "Клетчатая рубашка Somi 07",
        price: '194000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-18",
        size: ["s", "m", "l", "xl"]
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData