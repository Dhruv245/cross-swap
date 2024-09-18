"use client"
import { Button } from "@/components/ui/button"
import useSidebar from "@/hooks/useSidebar"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { MenuIcon } from "lucide-react"

const MenuButtons = () => {
  const { onOpen } = useSidebar()
  return (
    <div className="flex gap-x-2 sm:hidden">
      <ConnectButton />
      <Button onClick={onOpen} type="button" size="icon" variant="ghost">
        <MenuIcon />
      </Button>
    </div>
  )
}

export default MenuButtons