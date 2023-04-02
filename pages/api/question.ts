import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse)  
{
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.prompt,
        max_tokens: 1500,
        temperature: 0.7,
      });
  

    res.status(200).json({ result: completion.data.choices[0].text})
}

