'use client'

import ChatPanel from '@/components/ChatPanel'
import PreviewCanvas from '@/components/PreviewCanvas'
import { useLayoutStore } from '@/store/layoutStore'
import layoutData from './sample-layout.json'
import { useEffect } from 'react'

export default function Home() {
  const { layout, setLayout } = useLayoutStore()

  useEffect(() => {
    setLayout(layoutData)
  }, [setLayout])

  return (
    <main className="grid grid-cols-2 h-screen">
      <ChatPanel layout={layout} setLayout={setLayout} />

      <div className="overflow-auto">
        <PreviewCanvas layout={layout} />

        <div className="p-4 border-t bg-white h-[400px] overflow-auto text-xs">
          <pre>{JSON.stringify(layout, null, 2)}</pre>
        </div>
      </div>
    </main>
  )
}
