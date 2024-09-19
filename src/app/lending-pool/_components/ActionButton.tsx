"use client"
import { Button } from "@/components/ui/button"
import useBorrowingPopup from "@/hooks/useBorrowingPopup"
import useLendingPopup from "@/hooks/useLendingPopup"
import { Token } from "@/lib/types"
import { useCallback } from "react"


const ActionButton = ({ action , token}: { action: "Lend" | "Borrow", token: Token }) => {
    const { onOpen: onBorrowingPopupOpen } = useBorrowingPopup();
    const { onOpen: onLendingPopupOpen } = useLendingPopup();

    const handleClick = useCallback(() => {
        if (action === "Lend") {
            onLendingPopupOpen(token)
        } else {
            onBorrowingPopupOpen(token)
        }
    }, [action, onLendingPopupOpen, onBorrowingPopupOpen, token])

    return (
        <Button variant="outline" onClick={handleClick}>
            {action}
        </Button>
    )
}

export default ActionButton