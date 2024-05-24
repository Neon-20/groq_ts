"use strict";
const Groq = require("groq-sdk");
const dotenv = require("dotenv");

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
}) 


async function main() {
    const chatCompletion = await getGroqChatCompletion();
    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
}

async function getGroqChatCompletion() {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Can you write in 50 words why groq is best"
            }
        ],
        model: "llama3-8b-8192"
    });
}


main();

// Print all the modals being used here
// <------------------------------------------>
const getModels = async() => {
    return await groq.models.list();
};
getModels().then((models)=>{
    console.log(models)
})
// <------------------------------------------>

