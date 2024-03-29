import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://images.macrumors.com/t/LOfu9VLk4WvjtKmnQtzdS67Rr3w=/800x0/smart/article-new/2016/05/iphone8gold.jpg?lossy",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:180",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://www.refurbished.store/cache/images/refurbished-samsung-galaxy-s9-goud_600x600_BGresize_16777215-tj.png",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/617De8WdrdS._SX679_.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/61jJeZBliWL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsData(state, action) {
      state.productsData = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
    updateQuantity(state, action) {
      const { index, quantity } = action.payload;
      state.productsData[index].selectedQuantity = quantity;
      state.total = state.productsData.reduce((total, product) => {
        return total + product.price * (product.selectedQuantity || 0);
      }, 0);
    },
    removeItem(state, action) {
      const index = action.payload;
      state.productsData.splice(index, 1);
      state.total = state.productsData.reduce((total, product) => {
        return total + product.price * (product.selectedQuantity || 0);
      }, 0);
    },
  },
});

export const { setProductsData, setTotal, updateQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
