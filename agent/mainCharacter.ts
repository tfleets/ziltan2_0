import { Character, ModelProviderName, defaultCharacter, Clients } from "@ai16z/eliza";

export const mainCharacter: Character = {
	...defaultCharacter,
	clients: [Clients.TWITTER],
	modelProvider: ModelProviderName.OPENAI,
	name: "Ziltan2_0"
}