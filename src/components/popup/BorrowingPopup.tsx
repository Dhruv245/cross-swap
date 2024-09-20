"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog"
import useBorrowingPopup from "@/hooks/useBorrowingPopup"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useCallback } from "react"
import { parseUnits } from "viem"

const BorrowingPopup = () => {
  const { isOpen, onClose, token } = useBorrowingPopup()

  const handleSubmit = useCallback(async (formData: FormData) => {
    const amount = formData.get("amount")?.toString() ?? '0';
    console.log(parseUnits(amount, 18));

  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow {token?.symbol}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form className="my-5" action={handleSubmit}>
            <div>
              <Input placeholder={`Enter ${token?.symbol} amount`} name="amount" type="number" className="invalid:focus:ring-destructive" min={0} step="any" required />
            </div>
            <Button className="my-3 w-full">Borrow</Button>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default BorrowingPopup