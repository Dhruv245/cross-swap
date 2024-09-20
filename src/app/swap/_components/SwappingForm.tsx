'use client'
import { useCallback, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ArrowUpDown } from 'lucide-react'
import { tokens } from '@/lib/constants'
import Tooltip from '@/components/Tooltip'

export default function TokenSwapForm() {
  const [fromToken, setFromToken] = useState(tokens[0].symbol)
  const [toToken, setToToken] = useState(tokens[1].symbol)
  const [amount, setAmount] = useState('')
  const [estimatedOutput, setEstimatedOutput] = useState('')

  const handleSwap = useCallback(() => {
    // In a real application, this would call a smart contract or API
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`)
  }, [fromToken, toToken, amount])

  const handleUserInput = useCallback((value: string) => {
    setAmount(value)
    // Mocking the api request to get the estimated output
    setEstimatedOutput(value ? (parseFloat(value) * 0.98).toFixed(6) : '')
  }, [])

  const handleReverse = useCallback(() => {
    setFromToken(toToken)
    setToToken(fromToken)
    setAmount(estimatedOutput)
    setEstimatedOutput(amount)
  }, [fromToken, toToken, amount, estimatedOutput])

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
                onChange={(e) => handleUserInput(e.target.value)}
                className="flex-grow"
                step="any"
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

          <div className="flex justify-center">
            <Tooltip content="Switch Token">
              <Button size="icon" type='button' variant="ghost" onClick={handleReverse}>
                <ArrowUpDown className="h-6 w-6" />
              </Button>
            </Tooltip>
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
                step="any"
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