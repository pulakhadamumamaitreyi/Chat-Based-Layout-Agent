import { create } from 'zustand'

interface LayoutStore {
  layout: any
  setLayout: (layout: any) => void
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  layout: null,
  setLayout: (layout) => set({ layout })
}))
