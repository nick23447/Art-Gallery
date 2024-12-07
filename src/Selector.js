export default function Selector({ action }) {
    function randomArt() {
      let artNumber = Math.floor(Math.random() * 470000) + 1;
      action(artNumber);
    }
  
    return (
      <>
        <h4>Press the button to explore the gallery!</h4>
        <button onClick={randomArt}>Get Random Art Piece</button>
      </>
    );
  }
  