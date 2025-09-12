import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const results = searchParams.get("results") ?? "1"
        const nat = searchParams.get("nat") ?? "us"

        const response = await fetch(
            `https://randomuser.me/api/?results=${results}&nat=${nat}`,
            { cache: "no-store" } // disable Next.js caching for external API
        )

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch from Random User API" },
                { status: response.status }
            )
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error: unknown) {
        console.error("Proxy API error:", error);

        let message = "Internal Server Error";
        if (error instanceof Error) {
            message = error.message;
        }

        return NextResponse.json(
            { error: "Internal Server Error", details: message },
            { status: 500 }
        );
    }
}
