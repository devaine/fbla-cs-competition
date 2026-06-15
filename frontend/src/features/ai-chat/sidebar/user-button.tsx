import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UserButton() {
	const userLogOut = () => {
		authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					redirect("/", RedirectType.push)
				}
			}
		})
	}


	// TODO: Grab username & images for the AvatarImage
	// Preferably image should be a link (or within cache idk)
	const grabUserData = () => {

		// If no profile image given, use default picture
		return "/default-pfp.svg"
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton>
					<div className="flex items-center gap-3">
						<Avatar>
							<AvatarImage src={grabUserData()} />
							{/* NOTE: Probably add use username of the user in fallback */}
							<AvatarFallback>Profile Picture</AvatarFallback>
						</Avatar>
						<div className="flex flex-col justify-center min-w-0">
							{/* TODO: Add username (or full name) in first span*/}
							<span className="text-sm font-semibold">WHAT?</span>
							<span className="text-xs truncate">FBLA Member</span>
						</div>
					</div>
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onClick={userLogOut}>
					<LogOutIcon />
					<span>Log Out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
