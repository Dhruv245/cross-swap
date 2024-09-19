import { Token } from "@/lib/types";
import { create } from "zustand"

interface LendingPopupStore {
    isOpen: boolean;
    token?: Token;
    onOpen: (token: Token) => void;
    onClose: () => void;
}

const useLendingPopup = create<LendingPopupStore>((set) => ({
    isOpen: false,
    onOpen(token) {
        set({ isOpen: true, token })
    },
    onClose: () => set({ isOpen: false, token: undefined }),
}))

export default useLendingPopup