import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { transformLayout } from '@/lib/transformLayout'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const { instruction, layout } = body

  const completion = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `
You are a layout reasoning engine.

Understand the user instruction.
Return short reasoning.
`
      },
      {
        role: 'user',
        content: instruction
      }
    ]
  })

  const reasoning = completion.choices[0].message.content

  const updatedLayout = transformLayout(layout, instruction)

  return NextResponse.json({
    reasoning,
    updatedLayout
  })
}
