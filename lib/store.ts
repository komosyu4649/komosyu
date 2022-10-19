import create from 'zustand'

type LoadMorePostsStore = {
  loadNumber: number
  setLoadNumber: (loadNumber: number) => void
}

export const useLoadMorePostsStore = create<LoadMorePostsStore>((set) => ({
  loadNumber: 3,
  setLoadNumber: (loadNumber) => set((state) => ({ ...state, loadNumber })),
}))
