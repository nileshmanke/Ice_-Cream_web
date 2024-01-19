import React from "react";
import Card from "../components/Card";

const navdata = [
  { title: "Home", linkto: "" },
  { title: "About Us", linkto: "/about" },
  { title: "Admission", linkto: "/admission" },
  { title: "MandatoryPublicDisclosure", linkto: "/mandatorypublicdisclosure" },
  { title: "Achievment", linkto: "/achievment" },
  { title: "Infrastucture", linkto: "/infrastucture" },
  { title: "Gallery", linkto: "/gallery" },
  { title: "Contact Us", linkto: "/contactus" },
  { title: "Academic", linkto: "/academic" },
];

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 bg-[#d2dae2] sm:grid sm:grid-cols-4 p-6 gap-8  ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
