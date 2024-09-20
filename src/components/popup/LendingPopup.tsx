"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import useLendingPopup from "@/hooks/useLendingPopup"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useCallback } from "react"
import { parseUnits } from "viem"

const LendingPopup = () => {
  const { isOpen, onClose, token } = useLendingPopup()

  const handleSubmit = useCallback(async (formData: FormData)=> {
      const amount = formData.get("amount")?.toString() ?? '0';
      console.log(parseUnits(amount, 18));
  }, [])
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
      <DialogHeader>
          <DialogTitle>Lend {token?.symbol}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form className="my-5" action={handleSubmit}>
            <div>
              <Input name="amount" placeholder={`Enter ${token?.symbol} amount`} type="number" className="invalid:focus:ring-destructive" min={0} step="any" required  />
            </div>
            <Button className="my-3 w-full">Supply</Button>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default LendingPopup