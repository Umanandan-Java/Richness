type HelloConfig = {
  widgetToken: string;
  hide_launcher?: boolean;
  show_widget_form?: boolean;
  show_close_button?: boolean;
  launch_widget?: boolean;
  show_send_button?: boolean;
  unique_id?: string;
  name?: string;
  number?: string;
  mail?: string;
  theme?: string;
  [key: string]: any;
};

export function initChatWidget(config: HelloConfig, delay = 0, srcUrl = 'https://blacksea.msg91.com/chat-widget.js') {
  const load = () => {
    (window as any).helloConfig = config;

    if (document.getElementById('chat-widget-script')) return;

    const s = document.createElement('script');
    s.id = 'chat-widget-script';
    s.src = srcUrl;
    s.async = true;
    s.onload = () => {
      const anyWin = window as any;
      if (typeof anyWin.initChatWidget === 'function') {
        try {
          anyWin.initChatWidget(config, /* optional delay param for remote loader */ 0);
        } catch (e) {
          // ignore errors from remote widget init
          // eslint-disable-next-line no-console
          console.warn('chat widget init failed', e);
        }
      }
    };
    s.onerror = (ev) => {
      // eslint-disable-next-line no-console
      console.error('Failed to load chat widget script:', ev);
    };
    document.body.appendChild(s);
  };

  if (delay > 0) setTimeout(load, delay);
  else load();
}

export default initChatWidget;
