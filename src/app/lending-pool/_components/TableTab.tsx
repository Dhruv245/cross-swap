"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import TokenTable from "./TokenTable";

const TableTab = () => {
    const [activeTab, setActiveTab] = useState('lend')

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
                                <TokenTable action="Lend" />
                            </div>
                        </TabsContent>
                        <TabsContent value="borrow">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Available to Borrow</h3>
                                <TokenTable action="Borrow" />
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </section>
    )
}

export default TableTab