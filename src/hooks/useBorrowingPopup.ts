import { Token } from "@/lib/types";
import { create } from "zustand"

interface BorrowingPopupStore {
    isOpen: boolean;
    token?: Token;
    onOpen: (token: Token) => void;
    onClose: () => void;
}

const useBorrowingPopup = create<BorrowingPopupStore>((set) => ({
    isOpen: false,
    onOpen(token) {
        set({ isOpen: true, token })
    },
    onClose: () => set({ isOpen: false, token: undefined }),
}))

export default useBorrowingPopup