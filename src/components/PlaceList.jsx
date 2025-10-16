import { useEffect, useState } from "react";
import { getAllPlaces } from "../api/places";
import PlaceCard from "./PlaceCard";
import Loader from "./Loader";

export default function PlaceList() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlaces() {
            const data = await getAllPlaces();
            setPlaces(data);
            setLoading(false);
        }
        fetchPlaces();
    }, []);

    if (loading) return <Loader />;
    if (places.length === 0) return <p>맛집 데이터가 없습니다.</p>;

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px",
                padding: "20px",
            }}
        >
            {places.map((place) => (
                <PlaceCard key={place.id} place={place} />
            ))}
        </div>
    );
}
