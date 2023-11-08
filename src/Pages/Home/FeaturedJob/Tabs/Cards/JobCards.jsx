import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const JobCards = ({ category }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(`https://gigjunction-server.vercel.app/jobs?category=${category}`)
      .then((res) => {
        setCards(res.data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
      {cards.map((item) => (
        <Card key={item._id} card={item}></Card>
      ))}
    </div>
  );
};

export default JobCards;
