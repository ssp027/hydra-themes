import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { Globe } from "lucide-react";

export const I18nSelector = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ring-0 h-8 w-8 rounded-lg">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                <DropdownMenuItem>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Português
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Русский
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};