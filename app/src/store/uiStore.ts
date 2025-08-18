import { create } from 'zustand'

type View = 'chat' | 'models' | 'settings'

interface UIState {
  view: View
  setView: (v: View) => void
}

export const useUIStore = create<UIState>((set) => ({
  view: 'chat',
  setView: (view) => set({ view })
}))
