<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4996c344-7d93-45cb-ac29-9bf6fe6cb4ca

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Chat widget (dev testing)

If you added the chat widget integration, a small dev fallback UI is created automatically when the remote widget script is not found. To test locally:

- Open `src/main.tsx` and adjust the init call if you want to pass more config fields (name, mail, theme):

   `initChatWidget({ widgetToken: 'a4827', name: 'Test User' }, 5000, 'https://your.cdn/path/chat-widget.js')`

- If you don't have a real script URL yet, keep the placeholder; the local fallback launcher will appear after the app loads.

- Start the dev server and open the browser console to see logs when you send messages from the fallback widget:

```bash
npm run dev
```

