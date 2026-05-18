export default function Icon({ name, className = "btn-icon" }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    github: <path d="M12 2a10 10 0 00-3.16 19.5c.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0012 2z" fill="currentColor" />,
    external: <><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" fill="none" /><path d="M3 7l9 6 9-6" stroke="currentColor" fill="none" strokeLinecap="round" /></>,
    pin: <><path d="M12 22s7-7.58 7-13a7 7 0 10-14 0c0 5.42 7 13 7 13z" stroke="currentColor" fill="none" /><circle cx="12" cy="9" r="2.5" stroke="currentColor" fill="none" /></>,
    clock: <><circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" /><path d="M12 7v5l3 2" stroke="currentColor" fill="none" strokeLinecap="round" /></>,
    spark: <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" stroke="currentColor" fill="none" strokeLinecap="round" />,
    download: <><path d="M12 4v12M6 12l6 6 6-6" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 20h16" stroke="currentColor" fill="none" strokeLinecap="round" /></>,
    check: <path d="M5 12l5 5L20 7" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  };

  return (
    <svg viewBox="0 0 24 24" className={className} width="16" height="16">
      {paths[name]}
    </svg>
  );
}
