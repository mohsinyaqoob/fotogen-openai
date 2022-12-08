const { Configuration, OpenAIApi } = require("openai");
// 

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            if (!req.body.keywords) {
                return res.status(400).json({ error: "Please enter a keyword" })
            }
            const configuration = new Configuration({
                apiKey: process.env.OPEN_AI_SECRET_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            const { keywords } = req.body;
    
            const response = await openai.createImage({
                prompt: keywords,
                n: 1,
                size: "512x512",
            });
            const url = response.data.data[0].url;
    
            res.status(200).json({ url });
        }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error. Check Server Log."})
    }
}