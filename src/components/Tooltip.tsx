import {
    Tooltip as Tl,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { PropsWithChildren } from "react"

interface TootipProps extends PropsWithChildren {
    content: React.ReactNode
}

export default function Tooltip({ content, children }: TootipProps) {
    return (
        <TooltipProvider>
            <Tl>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {content}
                </TooltipContent>
            </Tl>
        </TooltipProvider>
    )
}
