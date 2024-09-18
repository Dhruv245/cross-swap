"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { tokens } from "@/lib/constants";

const TableTab = () => {
    const [activeTab, setActiveTab] = useState('lend')

    const renderTokenTable = (action: string) => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>APY (%)</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tokens.map((token) => (
                    <TableRow key={token.symbol}>
                        <TableCell>{token.symbol}</TableCell>
                        <TableCell>{token.apy.toFixed(2)}%</TableCell>
                        <TableCell>${(token.available * token.price).toLocaleString()}</TableCell>
                        <TableCell>
                            <Button variant="outline" onClick={() => console.log(`${action} ${token.symbol}`)}>
                                {action}
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )

    return (
        <section className="container mx-auto space-y-8 p-4">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Lending Pool</CardTitle>
                    <CardDescription>Lend or borrow tokens from the pool</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="lend">Lend</TabsTrigger>
                            <TabsTrigger value="borrow">Borrow</TabsTrigger>
                        </TabsList>
                        <TabsContent value="lend">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Available to Lend</h3>
                                {renderTokenTable('Lend')}
                            </div>
                        </TabsContent>
                        <TabsContent value="borrow">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Available to Borrow</h3>
                                {renderTokenTable('Borrow')}
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </section>
    )
}

export default TableTab