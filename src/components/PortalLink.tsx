import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function navigateTo(path: string) {
  if (!path || path.startsWith("#")) {
    window.location.hash = path.replace("#", "");
    return;
  }

  if (/^(https?:|mailto:|tel:)/.test(path)) {
    window.location.href = path;
    return;
  }

  const target = path.startsWith("/") ? path : `/${path}`;
  window.history.pushState({}, "", target);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "auto" });
}

export function Link({ to, onClick, children, ...props }: LinkProps) {
  return (
    <a
      {...props}
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          props.target === "_blank"
        ) {
          return;
        }
        event.preventDefault();
        navigateTo(to);
      }}
    >
      {children}
    </a>
  );
}
