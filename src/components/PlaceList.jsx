import React from "react";

export default function PlaceList({ places, baseUrl }) {
    return (
        <div className="place-list">
            {places.map((place) => (
                <div key={place.id} className="place-card">
                    <img src={baseUrl + place.image} alt={place.name} className="place-img" />
                    <div className="card-content">
                        <h3 className="place-name">{place.name}</h3>
                        <p className="place-address">{place.address}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
