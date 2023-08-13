import { create } from "zustand";

type ShowCartState = {
    isEnabled: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
}

export const useShowCartStore = create<ShowCartState>((set) => ({
    isEnabled: false,
    show: () => set({ isEnabled: true }),
    hide: () => set({ isEnabled: false }),
    toggle: () => set(prev => ({
        isEnabled: !(prev.isEnabled)
    }))
}))