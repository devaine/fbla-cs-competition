"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

const handleKeycloak = async () => {
	await authClient.signIn.oauth2({
		providerId: "keycloak",
		callbackURL: "/chat",
	})

}

export default function LoginField() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center mt-4">
			<Image
				src="/fbla-logo-partial-vertical.png"
				width={100}
				height={100}
				alt="FBLA Logo"
				loading="eager"
			/>
			<div className="font-bold text-2xl">Sign In to Session</div>
			<Button className="mt-5 font-semibold text-lg w-120" onClick={handleKeycloak}>
				<Image className="w-auto h-8"
					src="/keycloak-logo-full.svg"
					alt="keycloak-icon"
					width={10}
					height={10} />
				Continue using Keycloak
			</Button>
		</div >
	)
}
