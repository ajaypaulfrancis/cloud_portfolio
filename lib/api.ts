export async function fetchVisitorCount(): Promise<number> {
    const response = await fetch(
        "https://hgbsqh6ybg.execute-api.ap-southeast-2.amazonaws.com/counter"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch visitor count");
    }

    const data = await response.json();
    return data.count;
}
