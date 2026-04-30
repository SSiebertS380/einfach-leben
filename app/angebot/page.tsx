export default function Angebot() {
  const paragraphStyle = {
    marginBottom: "18px",
    lineHeight: 1.6,
    fontSize: "17px"
  };

  const sectionTitleStyle = {
    marginTop: "45px",
    marginBottom: "18px",
    fontSize: "24px"
  };

  const cardStyle = {
    border: "1px solid #e5e5e0",
    borderRadius: "14px",
    padding: "26px",
    marginBottom: "22px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.04)"
  };

  const priceStyle = {
    fontSize: "24px",
    marginTop: "15px",
    marginBottom: "15px"
  };

  return (
    <main style={{ padding: "100px 20px", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Zurück */}
        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: "#2f6f57",
            textDecoration: "none"
          }}
        >
          ← zurück
        </a>

        <h1 style={{ marginBottom: "30px" }}>
          Angebot
        </h1>

        <p style={{
          fontSize: "22px",
          marginBottom: "35px",
          lineHeight: 1.5
        }}>
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

        {/* VIDEOREIHE */}
        <h2 style={sectionTitleStyle}>
          Der erste Schritt: Grundlagen verstehen
        </h2>

        <div style={cardStyle}>
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

          <p style={priceStyle}>
            <strong>149 €</strong>
          </p>

          <p style={{ fontSize: "14px", color: "#777", marginBottom: 0 }}>
            Einführungspreis
          </p>

          {/* Klarheitspaket */}
{/* Videoreihe */}
<a
  href="/anfrage?angebot=Videoreihe"
  className="cta-small"
>
  Videoreihe anfragen
</a>
        </div>

        {/* KLARHEITSPAKET */}
        <h2 style={sectionTitleStyle}>
          Wenn du mehr Struktur brauchst
        </h2>

        <div style={cardStyle}>
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

          <p style={priceStyle}>
            <strong>299 €</strong>
          </p>

          <p style={{ fontSize: "14px", color: "#777", marginBottom: 0 }}>
            inkl. Arbeitsunterlagen und Strukturübersicht
          </p>

          {/* Klarheitspaket */}
<a
  href="/anfrage?angebot=Klarheitspaket"
  className="cta-small"
>
  Klarheitspaket anfragen
</a>
        </div>

        {/* GESPRÄCH */}
        <h2 style={sectionTitleStyle}>
          Persönlicher Austausch
        </h2>

        <div style={cardStyle}>
          <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
            Persönliche Einordnung
          </h3>

          <p style={paragraphStyle}>
            Wenn deine Situation komplex oder emotional belastet ist,
            schauen wir gemeinsam strukturiert darauf.
          </p>

          <p style={paragraphStyle}>
            Ziel ist Klarheit darüber, was gerade wirkt
            und welche nächsten Schritte sinnvoll sind.
          </p>

          <p style={paragraphStyle}>
            Auf Wunsch auch mit beiden Seiten – neutral und ruhig.
          </p>

          <p style={priceStyle}>
            <strong>290 €</strong>
          </p>

          <p style={{ fontSize: "14px", color: "#777", marginBottom: 0 }}>
            60–90 Minuten Gespräch
          </p>
          {/* Persönliche Einordnung */}
<a
  href="/anfrage?angebot=Persönliche%20Einordnung"
  className="cta-small"
>
  Persönliche Einordnung anfragen
</a>
        </div>

        {/* ABSCHLUSS */}
        <h2 style={sectionTitleStyle}>
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

        {/* DISCLAIMER */}
        <p style={{
          marginTop: "30px",
          fontSize: "13px",
          color: "#888",
          marginBottom: "60px",
          lineHeight: 1.6
        }}>
          Keine rechtliche oder steuerliche Beratung –
          sondern Einordnung und Struktur aus Erfahrung.
        </p>

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
              boxSizing: "border-box"
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