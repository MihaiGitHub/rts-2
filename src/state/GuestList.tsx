import { useState } from "react";

// no angle brackets because not expecting any props; interface only used when props received
const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  // need to tell typescript what type of array this is
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
