export default function PlaceCard({ place }) {
    const baseUrl = "http://localhost:3000";

    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
        >
            <img
                src={`${baseUrl}/${place.image}`}
                alt={place.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>{place.title}</h3>
                <p style={{ color: "#555" }}>{place.description}</p>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                    📍 {place.address}
                </p>
            </div>
        </div>
    );
}
