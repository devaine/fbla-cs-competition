"use client"

import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarFooter, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import UserButton from "./user-button"


export default function ChatSidebar() {
	return (
		<div>
			<Sidebar>
				<SidebarHeader>
					<Image className="h-auto, w-auto"
						src="/FBLA_Logo_FullName_Horizontal_color-HiRes.png"
						alt="FBLA_Logo-Horiozontal"
						width={200}
						height={200}
						loading="eager"
					/>
					<hr />
				</SidebarHeader>
				<SidebarContent>
					<SidebarMenu>
						<SidebarMenuButton className="text-lg">
							{/* NOTE: May change into a hook, to change the background of the chat */}
							<Link href="/new-chat">
								<Image
									src="/plus.png"
									alt="plus"
									width={20}
									height={20}
								/>
							</Link>
							New Chat
						</SidebarMenuButton>
					</SidebarMenu>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<UserButton />
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</div >
	)

}
