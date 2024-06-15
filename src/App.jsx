import "./App.css";
import Rating from "./components/Rating/Rating";

function App() {
  const handleRatingChange = (value) => {
    console.log("current value", value);
  };
  return (
    <>
      <Rating
        length={5}
        value={3}
        readOnly={false}
        onRatingChange={handleRatingChange}
      />
    </>
  );
}

export default App;
