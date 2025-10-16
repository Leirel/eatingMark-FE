const BASE_URL = "http://localhost:3000";

export async function getAllPlaces() {
    try {
        const response = await fetch(`${BASE_URL}/places`);
        if (!response.ok) {
            throw new Error("서버 요청 실패");
        }

        const data = await response.json();
        return data.places;
    } catch (error) {
        console.error("데이터 불러오기 오류:", error);
        return [];
    }
}
