import { useState, useEffect } from "react";

function GuestDetails({ guestId, clearSelection }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    async function fetchGuestDetails() {
      const response = await fetch(
        `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-ftb-et-web-ft/guests/${guestId}`,
      );

      const result = await response.json();
      setGuest(result.data);
    }

    fetchGuestDetails();
  }, [guestId]);

  if (!guest) return <p>Loading...</p>;

  return (
    <div>
      <h2>{guest.name}</h2>
      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>Job: {guest.job}</p>
      <p>Bio: {guest.bio}</p>

      <button onClick={clearSelection}>Back</button>
    </div>
  );
}

export default GuestDetails;
