import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Check if email already exists
    const { rows } = await sql`
      SELECT * FROM waitlist_entries WHERE email = ${email}
    `

    if (rows.length > 0) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 })
    }

    // Create new waitlist entry
    const result = await sql`
      INSERT INTO waitlist_entries (name, email)
      VALUES (${name}, ${email})
      RETURNING *
    `

    const newEntry = result.rows[0]

    return NextResponse.json({ message: "Successfully added to waitlist", entry: newEntry }, { status: 201 })
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}

