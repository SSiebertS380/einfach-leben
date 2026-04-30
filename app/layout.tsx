import "./globals.css";

export const metadata = {
  title: "Einfach Leben",
  description: "Verstehe, was Entscheidungen mit deinem Geld machen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          background: "white",
          color: "#111",
        }}
      >

        {/* NAVIGATION */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "1px solid #eee",
            background: "white",
          }}
        >
          {/* LINKS: HOME */}
          <a
            href="/"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
              color: "#111",
            }}
          >
            S380
          </a>

          {/* RECHTS: NAV */}
<div style={{ display: "flex", gap: "20px" }}>
  <a href="/" style={{ textDecoration: "none", color: "#111" }}>
    Einfach Leben
  </a>

  <a href="/ueber-mich" style={{ textDecoration: "none", color: "#111" }}>
    Über mich
  </a>

  <a href="/angebot" style={{ textDecoration: "none", color: "#111" }}>
    Angebot
  </a>
</div>
        </nav>

        {/* CONTENT */}
        {children}

        {/* FOOTER */}
        <footer
          style={{
            padding: "40px",
            borderTop: "1px solid #eee",
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "#666",
            background: "white",
          }}
        >
          <div>© S380</div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/impressum" style={{ color: "#666", textDecoration: "none" }}>
              Impressum
            </a>
            <a href="/datenschutz" style={{ color: "#666", textDecoration: "none" }}>
              Datenschutz
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}