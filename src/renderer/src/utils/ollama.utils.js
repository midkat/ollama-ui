/* api for ollama */

import { Ollama } from 'ollama'

/*
model : string
messages : array of messages between user and the bot
message type : { role : "user" | "assistant" , content : string }
return : string
*/

export const send_message = async (model, messages) => {
  const response = await Ollama.chat({ model, messages, stream: true })
  for await (const part of response) {
    process.stdout.write(part.message.content)
  }
}


export const get_models = async () => {
  const models = await Ollama.list()
  return models
}



