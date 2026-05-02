export default function Angebot() {
  const paragraphStyle = {
    marginBottom: "18px",
    lineHeight: 1.6,
    fontSize: "17px",
  };

  const cardStyle = {
    border: "1px solid #e5e5e0",
    borderRadius: "14px",
    padding: "26px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
    background: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
  };

  const priceStyle = {
    fontSize: "24px",
    marginTop: "15px",
    marginBottom: "15px",
  };

  return (
    <main style={{ padding: "100px 20px", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: "#2f6f57",
            textDecoration: "none",
          }}
        >
          ← zurück
        </a>

        <h1 style={{ marginBottom: "30px" }}>Angebot</h1>

        <div style={{ maxWidth: "760px" }}>
          <p
            style={{
              fontSize: "22px",
              marginBottom: "35px",
              lineHeight: 1.5,
            }}
          >
            Erst verstehen. Dann einordnen. Und erst danach entscheiden.
          </p>

          <p style={paragraphStyle}>
            Viele Fragen entstehen nicht, weil etwas falsch gemacht wurde –
            sondern weil niemand erklärt hat, was Ehe und gemeinsame Verantwortung praktisch bedeuten.
          </p>

          <p style={paragraphStyle}>
            Deshalb geht es im ersten Schritt nicht um Beratung,
            sondern um verständliches Grundwissen und eine klare Einordnung.
          </p>
        </div>

      {/* ANGEBOTE GRID */}
<section style={{ marginTop: "60px" }}>
  <div className="angebot-grid">

    {/* VIDEOREIHE */}
    <div style={cardStyle}>
      <div>
        <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Videoreihe „Ehe verstehen“
        </h3>

        <p style={paragraphStyle}>
          Für Menschen, die die wichtigsten Zusammenhänge verstehen möchten:
          Was verändert sich durch Ehe? Welche Rolle spielen Einkommen, Vermögen und Verantwortung?
        </p>

        <p style={paragraphStyle}>
          Die Inhalte sind bewusst einfach gehalten –
          damit du deine eigene Situation besser einordnen kannst.
        </p>
      </div>

      <div style={{ marginTop: "auto" }}>
        <p style={priceStyle}>
          <strong>149 €</strong>
        </p>

        <p style={{ fontSize: "14px", color: "#777", marginBottom: "22px" }}>
          Einführungspreis
        </p>
      </div>

      <div style={{ paddingTop: "6px" }}>
        <a
          href="/anfrage?angebot=Videoreihe"
          className="cta-small"
        >
          Videoreihe anfragen
        </a>
      </div>
    </div>

    {/* KLARHEITSPAKET */}
    <div style={cardStyle}>
      <div>
        <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Klarheitspaket
        </h3>

        <p style={paragraphStyle}>
          Für Menschen, die ihre eigene Situation strukturieren möchten:
          Einkommen, Vermögen, Verpflichtungen und offene Fragen.
        </p>

        <p style={paragraphStyle}>
          Ergebnis ist eine klare Übersicht, die du für weitere Gespräche nutzen kannst.
        </p>
      </div>

      <div style={{ marginTop: "auto" }}>
        <p style={priceStyle}>
          <strong>299 €</strong>
        </p>

        <p style={{ fontSize: "14px", color: "#777", marginBottom: "22px" }}>
          Einführungspreis
        </p>
      </div>

      <div style={{ paddingTop: "6px" }}>
        <a
          href="/anfrage?angebot=Klarheitspaket"
          className="cta-small"
        >
          Klarheitspaket anfragen
        </a>
      </div>
    </div>

    {/* PERSÖNLICHE EINORDNUNG */}
    <div style={cardStyle}>
      <div>
        <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Persönliche Einordnung
        </h3>

        <p style={paragraphStyle}>
          Wenn deine Situation komplex oder emotional belastet ist,
          schauen wir gemeinsam strukturiert darauf.
        </p>

        <p style={paragraphStyle}>
          Ziel ist Klarheit Tetst darüber, was gerade wirkt
          und welche nächsten Schritte sinnvoll sind.
        </p>

        <p style={paragraphStyle}>
          Auf Wunsch auch mit beiden Seiten – neutral und ruhig.
        </p>
      </div>

      <div style={{ marginTop: "auto" }}>
        <p style={priceStyle}>
          <strong>290 €</strong>
        </p>

        <p style={{ fontSize: "14px", color: "#777", marginBottom: "22px" }}>
          90 Minuten Gespräch
        </p>
      </div>

      <div style={{ paddingTop: "6px" }}>
        <a
          href="/anfrage?angebot=Persönliche%20Einordnung"
          className="cta-small"
        >
          Persönliche Einordnung anfragen
        </a>
      </div>
    </div>

  </div>
</section>

        {/* ABSCHLUSS */}
        <section style={{ maxWidth: "760px", marginTop: "70px" }}>
          <h2 style={{ marginBottom: "18px", fontSize: "24px" }}>
            Was du mitnehmen sollst
          </h2>

          <p style={paragraphStyle}>
            Du sollst nicht aus Unsicherheit handeln,
            sondern aus Klarheit.
          </p>

          <p style={paragraphStyle}>
            Was du brauchst, entscheidet sich danach:
            Grundlagen, Struktur oder Gespräch.
          </p>

          <p
            style={{
              marginTop: "30px",
              fontSize: "13px",
              color: "#888",
              marginBottom: "60px",
              lineHeight: 1.6,
            }}
          >
            Keine rechtliche oder steuerliche Beratung –
            sondern Einordnung und Struktur aus Erfahrung.
          </p>
        </section>

        {/* CTA */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Wenn du starten möchtest, kannst du hier deine Anfrage stellen.
          </p>

          <a
            href="/anfrage"
            className="cta-button"
            style={{
              marginTop: "20px",
              width: "100%",
              maxWidth: "420px",
              boxSizing: "border-box",
            }}
          >
            Anfrage starten
          </a>

          <p style={{ marginTop: "12px", fontSize: "14px", color: "#888" }}>
            unverbindlich · vertraulich
          </p>
        </div>

      </div>
    </main>
  );
}