// export default function App() {
//   return <></>;
// }
import { useEffect, useState } from "react";
import { getAllGuests } from "./api/guests";
import GuestList from "./components/GuestList";
import { getGuestById } from "./api/guests";
import GuestDetails from "./components/GuestDetails";

function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("selectedId", selectedId);
  console.log("selectedGuest", selectedGuest);
  //Fetch all guests on mount
  useEffect(() => {
    async function loadGuests() {
      setLoading(true);
      try {
        const data = await getAllGuests();
        console.log("data in guests", data);
        setGuests(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadGuests();
  }, []);

  //fetch single guest
  useEffect(() => {
    async function loadSingleGuest() {
      try {
        const data = await getGuestById(selectedId);
        setSelectedGuest(data);
      } catch (error) {
        console.error("Error with guestById", error);
      }
    }
    loadSingleGuest();
  }, [selectedId]);

  return (
    <main className="container">
      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          loading={loading}
          onBack={() => {
            setSelectedId(null);
            setSelectedGuest(null);
          }}
        />
      ) : (
        <GuestList guests={guests} setSelectedId={setSelectedId} />
      )}
    </main>
  );
}

export default App;
