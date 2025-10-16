import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 2rem",
                backgroundColor: "#f5f5f5",
                borderBottom: "1px solid #ddd",
            }}
        >
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>🍽️ EatingMark</h1>

            <nav style={{ display: "flex", gap: "1rem" }}>
                <Link to="/">홈</Link>
                <Link to="/myplaces">내 맛집</Link>
            </nav>
        </header>
    );
}
