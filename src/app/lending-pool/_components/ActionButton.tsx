"use client"

import { Button } from "@/components/ui/button"
import useBorrowingPopup from "@/hooks/useBorrowingPopup"
import useLendingPopup from "@/hooks/useLendingPopup"
import { useCallback } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActionButton = ({ action, token }: { action: "Lend" | "Borrow", token: any }) => {
    const { onOpen: onBorrowingPopupOpen } = useBorrowingPopup();
    const { onOpen: onLendingPopupOpen } = useLendingPopup();

    const handleClick = useCallback(() => {
        if (action === "Lend") {
            onLendingPopupOpen()
        } else {
            onBorrowingPopupOpen()
        }
    }, [action, onLendingPopupOpen, onBorrowingPopupOpen])
    return (
        <Button variant="outline" onClick={handleClick}>
            {action}
        </Button>
    )
}

export default ActionButton