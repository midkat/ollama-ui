import ollama from 'ollama'



export const list_models = () => {
    return ollama.list();
}

