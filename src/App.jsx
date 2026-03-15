import { useState } from "react";
import GuestList from "./components/Guestlist";
import GuestDetails from "./components/GuestDetails";

function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  return (
    <div>
      <h1>Guest List</h1>

      {selectedGuestId ? (
        <GuestDetails
          guestId={selectedGuestId}
          clearSelection={() => setSelectedGuestId(null)}
        />
      ) : (
        <GuestList selectGuest={setSelectedGuestId} />
      )}
    </div>
  );
}

export default App;
