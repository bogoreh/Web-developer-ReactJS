import TinderCard from "react-tinder-card";
import { useState } from "react";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://picsum.photos/200/300?random=1"
  },
  {
    name: "Erlich Bachman",
    url: "https://picsum.photos/200/300?random=1"
  },
  {
    name: "Monica Hall",
    url: "https://picsum.photos/200/300?random=1"
  },
  {
    name: "Jared Dunn",
    url: "https://picsum.photos/200/300?random=1"
  },
  {
    name: "Dinesh Chugtai",
    url: "https://picsum.photos/200/300?random=1"
  }
];

function Simple() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>React Tinder Card</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
              <div>
                <p>
                  lorem ipsum asdfnasd
                  fuiasufhasdfihadsjgjkfhgjhsdfjgsdfghjkslfhgjklfdshgj
                  sdfjgjsdfgjdsfjklsdjklghjsdfgj sjghs dlj gf
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Simple;