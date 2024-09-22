'use client'
import { useCallback, useState } from 'react';
import { ethers } from 'ethers';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowUpDown } from 'lucide-react';
import { tokens } from '@/lib/constants';
import Tooltip from '@/components/Tooltip';
import contractabi from "../abi.json";

const contractAddress = '0x6482220f77fC720b93846fA85D5fe3B58E0aC27a';

export default function TokenSwapForm() {
  const [fromToken, setFromToken] = useState(tokens[0].symbol);
  const [toToken, setToToken] = useState(tokens[1].symbol);
  const [amount, setAmount] = useState('');
  const [estimatedOutput, setEstimatedOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSwap = useCallback(async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractabi, signer);

    const destinationChainSelector = 1002; // Example chain ID
    const destinationTokenAddress = "0x13630b806086058EeAc26Af04c4528761e4DC389"; // Example token address
    const recipient = await signer.getAddress();
    const amountInWei = ethers.parseEther(amount);

    setLoading(true);
    setError('');

    try {
      // Specify the function you want to call
      const swapFunction = contract.interface.getFunction('swap(uint256,bytes,bytes,uint256)');

      const tx = await contract.swap(destinationChainSelector, destinationTokenAddress, recipient, amountInWei, {
        gasLimit: 500000 // Adjust this as needed
      });

      console.log('Transaction sent:', tx);

      const receipt = await tx.wait();
      console.log('Transaction confirmed:', receipt);
      alert('Swap successful!');
    } catch (error) {
      console.error('Error during swap:', error);
      setError('Swap failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [fromToken, toToken, amount]);


  const handleUserInput = useCallback((value: string) => {
    setAmount(value);
    setEstimatedOutput(value ? (parseFloat(value) * 0.98).toFixed(6) : '');
  }, []);

  const handleReverse = useCallback(() => {
    setFromToken(toToken);
    setToToken(fromToken);
    setAmount(estimatedOutput);
    setEstimatedOutput(amount);
  }, [fromToken, toToken, amount, estimatedOutput]);

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
                disabled={loading}
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
              <Button size="icon" type='button' variant="ghost" onClick={handleReverse} disabled={loading}>
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

          {error && <p className="text-red-600">{error}</p>}

          <Button onClick={handleSwap} className="w-full" disabled={loading}>
            {loading ? 'Swapping...' : 'Swap'} <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
