import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { tokens } from "@/lib/constants"
import ActionButton from "./ActionButton"

const TokenTable = ({ action }: { action: "Lend" | "Borrow" }) => {
    return (
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
                            <ActionButton action={action} token={token} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TokenTable