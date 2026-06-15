import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"

export default function Chatbox() {
	return (
		<div className="flex items-center justify-center">
			<FieldSet>
				<FieldGroup>
					<FieldLabel>This is the text</FieldLabel>
					<Field className="flex flex-col gap-1.5">
						<textarea
							id="chatbox"
							placeholder="Type anything down here!"
						/>
					</Field>
				</FieldGroup>
			</FieldSet>
		</div >
	)
}
