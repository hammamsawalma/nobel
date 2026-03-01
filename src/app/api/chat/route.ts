import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const aiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(aiKey);

const systemPrompt = `You are the "Nobel Assistant", a welcoming and helpful AI concierge for Nobel Rock Partners.
Your role: Warmly welcome visitors, see how you can help them, and gather initial info from prospective clients before handing off to a human steward.
Your tone: Friendly, conversational, polite, and eager to assist. You are still professional but much warmer than a robot. Feel free to use a light, professional emoji occasionally (like 👋 or ✨).
Rules:
1. If asked for specific, actionable, or illegal financial advice, decline gracefully, explaining you cannot provide financial advice.
2. If the user has a complex request or is ready to proceed, ask for their Name and Email for a human strategist to follow up.
3. Keep answers very concise (1-3 small sentences) as this is a floating chat widget.
4. Align with Nobel Rock Partners focus: Institutional-grade portfolios, fixed-income supremacy, capital preservation.
`;

export async function POST(req: NextRequest) {
    if (!aiKey) {
        return NextResponse.json(
            { role: 'system', content: "API Configuration Missing: Please add GEMINI_API_KEY to your .env.local file to initialize the AI Node." },
            { status: 500 }
        );
    }

    try {
        const { messages } = await req.json();

        // Convert messages to a single prompt string to avoid role sequence errors
        const formattedHistory = messages
            .slice(0, -1)
            .map((m: any) => `${m.role.toUpperCase()}: ${m.content}`)
            .join('\n');

        const lastMessage = messages[messages.length - 1].content;
        const prompt = `${systemPrompt}\n\nChat History:\n${formattedHistory}\n\nUSER: ${lastMessage}\n\nSTRATEGIST NODE:`;

        // Direct REST API Call referencing the exact model we verified earlier
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 250,
                }
            })
        });

        if (!response.ok) {
            const errData = await response.text();
            console.error("Gemini REST Error:", errData);
            if (response.status === 429) {
                return NextResponse.json(
                    { role: 'system', content: "Google API Quota Exceeded. Please ensure billing is enabled on your Google AI Studio account." },
                    { status: 429 }
                );
            }
            throw new Error(`Google API returned ${response.status}`);
        }

        const data = await response.json();

        let responseText = "Transmission unreadable.";
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
            responseText = data.candidates[0].content.parts[0].text;
        }

        return NextResponse.json({ role: 'system', content: responseText });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { role: 'system', content: "Our encrypted connection is temporarily degraded. Please try again or use the main contact form." },
            { status: 500 }
        );
    }
}
