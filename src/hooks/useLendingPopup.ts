import { create } from "zustand"

interface LendingPopupStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLendingPopup = create<LendingPopupStore>((set) => ({
    isOpen: false,
    onOpen() {
        set({ isOpen: true })
    },
    onClose: () => set({ isOpen: false }),
}))

export default useLendingPopup