export function GlobalStyles({ T }) {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { overflow-x: hidden; background: ${T.bg}; width: 100%; transition: background 0.35s ease; }
      body { font-family: 'Inter','Helvetica Neue',Arial,sans-serif; color:${T.text}; scroll-behavior: smooth; transition: color 0.35s ease; }
      input::placeholder, textarea::placeholder { color:#8a8a8a; }
      a { text-decoration: none; }

      @keyframes skeleton-shine {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      @keyframes float-up {
        0% { transform: translate(0, 0); opacity: 0; }
        8% { opacity: var(--op); }
        92% { opacity: var(--op); }
        100% { transform: translate(var(--drift), -115vh); opacity: 0; }
      }

      .project-card {
        border: 1px solid transparent;
        border-radius: 14px;
        padding: 22px 14px !important;
        margin: 0 -14px;
        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
      }
      .project-card:hover {
        transform: translateY(-4px);
        border-color: var(--accent);
        box-shadow: 0 10px 30px -8px var(--accent);
        background: rgba(127,127,127,0.05);
      }

      @keyframes splash-pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.08); opacity: 0.75; }
      }

      @media print {
        .no-print { display: none !important; }
        .print-only { display: block !important; }
        html, body, #root { background: #ffffff !important; }
        body { color: #000000 !important; }
        main { height: auto !important; overflow: visible !important; padding: 0 24px !important; }
        aside { position: static !important; height: auto !important; }
        section { min-height: auto !important; page-break-inside: avoid; border-bottom-color: #ddd !important; }
      }
    `}</style>
  );
}
