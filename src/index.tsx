import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>App is working!</h1>
      <div>
        <UserSearch />
        <GuestList />
        <EventComponent />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
