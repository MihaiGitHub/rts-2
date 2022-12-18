import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <h1>App is working!</h1>
      <div>
        <GuestList />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
