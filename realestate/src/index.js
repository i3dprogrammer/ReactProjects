import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList";
import "./index.css";

const cards = [
  {
    title: "TestCard1",
    location: "TestLocation1",
    price: "TestPrice1",
    area: "TestArea1",
  },
  {
    title: "TestCard2",
    location: "TestLocation2",
    price: "TestPrice2",
    area: "TestArea2",
  },
  {
    title: "TestCard3",
    location: "TestLocation3",
    price: "TestPrice3",
    area: "TestArea3",
  },
  {
    title: "TestCard1",
    location: "TestLocation1",
    price: "TestPrice1",
    area: "TestArea1",
  },
  {
    title: "TestCard2",
    location: "TestLocation2",
    price: "TestPrice2",
    area: "TestArea2",
  },
  {
    title: "TestCard3",
    location: "TestLocation3",
    price: "TestPrice3",
    area: "TestArea3",
  },
  {
    title: "TestCard1",
    location: "TestLocation1",
    price: "TestPrice1",
    area: "TestArea1",
  },
  {
    title: "TestCard2",
    location: "TestLocation2",
    price: "TestPrice2",
    area: "TestArea2",
  },
  {
    title: "TestCard3",
    location: "TestLocation3",
    price: "TestPrice3",
    area: "TestArea3",
  },
  {
    title: "TestCard1",
    location: "TestLocation1",
    price: "TestPrice1",
    area: "TestArea1",
  },
  {
    title: "TestCard2",
    location: "TestLocation2",
    price: "TestPrice2",
    area: "TestArea2",
  },
  {
    title: "TestCard3",
    location: "TestLocation3",
    price: "TestPrice3",
    area: "TestArea3",
  },
];

ReactDOM.render(<CardList cards={cards} />, document.getElementById("root"));
