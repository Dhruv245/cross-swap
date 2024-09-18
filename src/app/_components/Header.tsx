import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <h3><Link href="/">Trading Platform</Link></h3>
        <nav className="flex items-center gap-2">
            <Link href="/swap">Swap</Link>
            <Link href="/lending-pool">Lending Pool</Link>
            <ConnectButton />
        </nav>
      </div>
    </header>
  )
}

export default Header