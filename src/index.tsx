import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <h1>App is working!</h1>
      <div>
        <UserSearch />
        <GuestList />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
