function GuestDetails({ guest, onBack, loading }) {
  if (loading) {
    return <p>One moment while the guest list is being loaded...</p>;
  }

  if (!guest) {
    return (
      <p>
        We're sorry, the guests you are looking for has not submitted an RSVP
        for this event at this time.
      </p>
    );
  }
  return (
    <article className="card">
      <button className="btn" onClick={onBack}>
        Back
      </button>
      <h2>{guest.name}</h2>
      <p>
        <b>E-Mail Address: </b>
        <br />
        {guest.email}
      </p>
      <p>
        <b>Phone #:</b>
        <br />
        {guest.phone}
      </p>
      <p>
        <b>Occupation:</b> <br />
        {guest.bio}
      </p>
      <p>
        <b>Title:</b> <br />
        {guest.job}
      </p>
    </article>
  );
}

export default GuestDetails;
