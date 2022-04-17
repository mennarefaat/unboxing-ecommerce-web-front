import { useState } from "react";
import Form from "../components/common/ProductForm/ProductForm";


const editHandling = (values: any) => {
  console.log(values);
};

export default function EditeProduct() {
  const[  product, setProduct] =useState( {
    image: "Watch",
    name: "watch",
    price: 550,
    discription: "jjjjjjjjjjjjjjj",
    categoryName: "mjklhlj",
    xlCount: 0,
    lCount: 3,
    mdCount: 0,
    sCount: 0,
    xsCount: 0,
    offer: false,
    discount: 0,
  })


  return (
    <Form
      eventHandler={editHandling}
      name={product.name}
      discription={product.discription}
      price={product.price}
      categoryName={product.categoryName}
      xlCount={product.xlCount}
      lCount={product.lCount}
      mdCount={product.mdCount}
      sCount={product.sCount}
    xsCount={product.xsCount}
    offer={product.offer}
    discount={product.discount}

    />
  );
}
