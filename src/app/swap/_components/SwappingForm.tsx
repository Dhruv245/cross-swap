'use client'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react'
import { tokens } from '@/lib/constants'

export default function TokenSwapForm() {
  const [fromToken, setFromToken] = useState(tokens[0].symbol)
  const [toToken, setToToken] = useState(tokens[1].symbol)
  const [amount, setAmount] = useState('')
  const [estimatedOutput, setEstimatedOutput] = useState('')

  const handleSwap = () => {
    // In a real application, this would call a smart contract or API
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`)
    // Mock estimation - in reality, this would be calculated based on real exchange rates
    setEstimatedOutput((parseFloat(amount) * 0.98).toFixed(6))
  }

  const handleReverse = ()=> {
    setFromToken(toToken)
    setToToken(fromToken)
    setAmount(estimatedOutput)
    setEstimatedOutput(amount)
  }

  return (
    <Card className="mx-4 w-full max-w-md sm:mx-auto">
      <CardHeader>
        <CardTitle>Swap Tokens</CardTitle>
        <CardDescription>Exchange your EVM-based tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="fromAmount" className="text-sm font-medium">From</label>
            <div className="flex space-x-2">
              <Input
                id="fromAmount"
                type="number"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-grow"
              />
              <Select value={fromToken} onValueChange={setFromToken}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map((token) => (
                    <SelectItem key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center" >
            <Button size="icon" type='button' variant="ghost" onClick={handleReverse}>
            <ArrowDownIcon className="h-6 w-6" />
            </Button>
          </div>

          <div className="space-y-2">
            <label htmlFor="toAmount" className="text-sm font-medium">To (estimated)</label>
            <div className="flex space-x-2">
              <Input
                id="toAmount"
                type="text"
                placeholder="0.0"
                value={estimatedOutput}
                readOnly
                className="flex-grow"
              />
              <Select value={toToken} onValueChange={setToToken}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map((token) => (
                    <SelectItem key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleSwap} className="w-full">
            Swap <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}