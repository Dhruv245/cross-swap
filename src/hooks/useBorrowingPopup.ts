import { create } from "zustand"

interface BorrowingPopupStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useBorrowingPopup = create<BorrowingPopupStore>((set) => ({
    isOpen: false,
    onOpen() {
        set({ isOpen: true})
    },
    onClose: () => set({ isOpen: false }),
}))

export default useBorrowingPopup