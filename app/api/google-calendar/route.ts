import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const response = await calendar.events.list({
      calendarId: "cougaraicontact@gmail.com",
      timeMin: "2022-08-08T00:00:00Z",
      maxResults: 200,
      singleEvents: true,
      orderBy: "startTime",
    });

    return NextResponse.json(response.data.items);
  } catch (error) {
    console.error("Google Calendar API error:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}