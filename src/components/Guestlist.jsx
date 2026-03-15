import { useState, useEffect } from "react";
import GuestCard from "./GuestCard";

function GuestList({ selectGuest }) {
  const [guests, setGuests] = useState([]);

  async function fetchGuests() {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-ftb-et-web-ft/guests",
    );

    const result = await response.json();
    setGuests(result.data);
  }

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <div>
      {guests.map((guest) => (
        <GuestCard key={guest.id} guest={guest} selectGuest={selectGuest} />
      ))}
    </div>
  );
}

export default GuestList;
