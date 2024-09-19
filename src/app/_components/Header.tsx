import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import MenuButton from "./MenuButton"
import ThemeButton from "@/components/ThemeButton"

const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <h3><Link href="/">Trading Platform</Link></h3>
        <nav className="hidden items-center gap-2 sm:flex">
            <Link href="/swap">Swap</Link>
            <Link href="/lending-pool">Lending Pool</Link>
            <ConnectButton  />
            <ThemeButton />
        </nav>
        <MenuButton />
      </div>
    </header>
  )
}

export default Header