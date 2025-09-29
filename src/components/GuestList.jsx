function GuestList({ guests, setSelectedId }) {
  return (
    <>
      <h1 className="title">Guest List</h1>
      {guests.length === 0 ? (
        <p>"No Guests have returned their RSVP yet."</p>
      ) : (
        <ul className="list">
          {guests.map((guest) => {
            return (
              <li
                key={guest.id}
                className="list-item"
                onClick={() => setSelectedId(guest.id)}
              >
                <span>
                  <h2>{guest.name}</h2>
                </span>
                <span>{guest.email}</span>
                <span>{guest.phone}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default GuestList;
