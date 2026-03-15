function GuestCard({ guest, selectGuest }) {
  return (
    <div className="guest-card" onClick={() => selectGuest(guest.id)}>
      <h3>{guest.name}</h3>
      <p>{guest.email}</p>
    </div>
  );
}

export default GuestCard;
