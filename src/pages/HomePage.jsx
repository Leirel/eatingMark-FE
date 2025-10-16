import PlaceList from "../components/PlaceList";

export default function HomePage() {
    return (
        <main>
            <h2 style={{ textAlign: "center", margin: "1.5rem 0" }}>
                전체 맛집 리스트 🍜
            </h2>
            <PlaceList />
        </main>
    );
}
