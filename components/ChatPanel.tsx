'use client'
export default function ChatPanel({ layout, setLayout }: Props) {
  const [message, setMessage] = useState('')
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!message) return

    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        instruction: message,
        layout
      })
    })

    const data = await res.json()

    setHistory((prev) => [
      ...prev,
      {
        user: message,
        reasoning: data.reasoning
      }
    ])

    setLayout(data.updatedLayout)

    setMessage('')
    setLoading(false)
  }

  return (
    <div className="w-full h-full flex flex-col border-r p-4 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Layout Agent</h1>

      <div className="flex-1 overflow-y-auto space-y-4">
        {history.map((item, index) => (
          <div key={index} className="border rounded p-3">
            <p>
              <strong>User:</strong> {item.user}
            </p>
            <p>
              <strong>Agent:</strong> {item.reasoning}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Move headline to top"
          className="border p-2 rounded flex-1"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  )
}
