"use client";

import { useEffect, useState } from "react";
import { fetchVisitorCount } from "@/lib/api";

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchVisitorCount()
            .then(setCount)
            .catch(() => setError("Unable to load visitor count"));
    }, []);

    if (error) {
        return <p className="text-sm text-red-500">{error}</p>;
    }

    if (count === null) {
        return <p className="text-sm text-gray-500">Loading visitors…</p>;
    }

    return (
        <p className="text-sm text-gray-600">
            Visitor count: <strong>{count}</strong>
        </p>
    );
}
