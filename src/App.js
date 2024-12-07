import { useState, useEffect } from "react";
import Title from "./Title";
import Selector from "./Selector";
import Image from "./Image";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});
  const [number, setNumber] = useState(1);

  function fetchRanArt() {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${number}`;

    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        if (r.primaryImage) {
          setData(r);
        } else {
          const randomId = Math.floor(Math.random() * 570000) + 1;
          setNumber(randomId);
        }
      })
      .catch((e) => console.error("Error fetching art:", e));
  }

  useEffect(() => {
    if (number) {
      fetchRanArt();
    }
  }, [number]);

  return (
    <div className="App">
      <Title title="The Art Gallery" />
      <Selector action={setNumber} />
      <Image data={data} />
    </div>
  );
}
