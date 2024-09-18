"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import useLendingPopup from "@/hooks/useLendingPopup"

const LendingPopup = () => {
  const { isOpen, onClose } = useLendingPopup()
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lending</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default LendingPopup