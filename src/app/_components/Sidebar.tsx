"use client"
import { Button } from "@/components/ui/button"
import useSidebar from "@/hooks/useSidebar"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
  const { isOpen, onClose } = useSidebar()
  const hanldeLink = ()=> {
    onClose()
  }
  return (
    <aside className={cn('absolute bottom-0 z-10 top-0 h-full transition-all duration-500 w-72 border bg-white', isOpen ? 'right-0' : "-right-72")}>
      <Button type="button" size="icon" onClick={onClose} variant="ghost" className="absolute right-4 top-4">
        <X />
      </Button>
      <nav className="mt-6 flex flex-col items-start gap-2 p-4">
        <Link onClick={hanldeLink} href="/swap">Swap</Link>
        <Link onClick={hanldeLink} href="/lending-pool">Lending Pool</Link>
      </nav>
    </aside>
  )
}

export default Sidebar