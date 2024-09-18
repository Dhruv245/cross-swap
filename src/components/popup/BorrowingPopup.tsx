"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import useBorrowingPopup from "@/hooks/useBorrowingPopup"

const BorrowingPopup = () => {
  const { isOpen, onClose } = useBorrowingPopup()
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrowing</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default BorrowingPopup