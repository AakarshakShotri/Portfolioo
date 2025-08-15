import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(_req: NextRequest) {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    try {
        const data = await fs.readFile(filePath);
        return new Response(new Uint8Array(data), {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=resume.pdf",
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch {
        return new Response("Resume not found", { status: 404 });
    }
}


