import React from "react";
import Product from "./Product";
export default function ProductWidget() {
 const products = [
    // {
    //   image: {
    //     url: "",
    //   },
    //   marce: "appel",
    //   title: "iphone 14 ",
    //   height: "18 cm",
    //   width: "7 cm ",
    //   colors: [
    //     {
    //       name: "red",
    //       code: "",
    //     },
    //     {
    //       name: "green",
    //       code: "",
    //     },
    //     {
    //       name: "blue",
    //       code: "",
    //     },
    //   ],
    // },
    // {
    //   image: {
    //     url: "",
    //   },
    //   marce: "appel",
    //   title: "iphone 13 pro max",
    //   height: "18 cm",
    //   width: "7 cm ",
    //   colors: [
    //     {
    //       name: "red",
    //       code: "",
    //     },
    //     {
    //       name: "green",
    //       code: "",
    //     },
    //     {
    //       name: "blue",
    //       code: "",
    //     },
    //   ],
    // },
    {
      image: {
        url: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
      },
      marce: "appel",
      title: "iphone 14 pro max",
      height: "18 cm",
      width: "7 cm ",
      colors: [
        {
          name: "red",
          code: "",
        },
        {
          name: "green",
          code: "",
        },
        {
          name: "blue",
          code: "",
        },
      ],
    },
  ];
  return (<div className=" flex bg-red-200">
      {
        products.map((item)=> <Product product = {item} />)
      }
    
  </div>)
}
