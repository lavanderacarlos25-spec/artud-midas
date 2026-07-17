import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "artud-midas-frontend",
    timestamp: new Date().toISOString(),
  });
}
