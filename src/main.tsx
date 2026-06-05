import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import initChatWidget from './lib/chatWidget';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Initialize the chat widget using the provider's script and example config
initChatWidget(
  {
    widgetToken: 'a4827',
    hide_launcher: false,
    show_widget_form: false,
    show_close_button: true,
    launch_widget: false,
    show_send_button: true,
    // unique_id/name/number/mail can be filled from your auth/user state
  },
  5000,
  'https://blacksea.msg91.com/chat-widget.js',
);
