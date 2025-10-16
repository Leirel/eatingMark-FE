import React, { useState, useEffect } from "react";
import PlaceList from "../components/PlaceList";

export default function HomePage() {
    const [places, setPlaces] = useState([]);
    const baseUrl = "http://localhost:3000/";
    useEffect(() => {
        async function fetchPlaces() {
            try {
                const response = await fetch("http://localhost:3000/places");
                const data = await response.json();
                setPlaces(data.places);
            } catch (error) {
                console.error("맛집 데이터 로딩 실패:", error);
            }
        }

        fetchPlaces();
    }, []);

    return (
        <div className="home-page">
            <h1>맛집 리스트</h1>
            <PlaceList places={places} baseUrl={baseUrl} />
        </div>
    );
}
