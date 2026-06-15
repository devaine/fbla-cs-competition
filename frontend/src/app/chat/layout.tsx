import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ChatSidebar from "@/features/ai-chat/sidebar/bar";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<ChatSidebar />
			<SidebarTrigger />
			{children}
		</SidebarProvider>

	)
}
