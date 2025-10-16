import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main style={{ textAlign: "center", marginTop: "5rem" }}>
            <h1>404 - 페이지를 찾을 수 없습니다 😢</h1>
            <Link to="/" style={{ color: "#007bff" }}>
                홈으로 돌아가기
            </Link>
        </main>
    );
}
