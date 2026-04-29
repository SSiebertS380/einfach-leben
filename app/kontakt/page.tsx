export default function Kontakt() {
  return (
    <main style={{ padding: "100px 20px", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

{/* Zurück */}
        <a href="/" style={{
          display: "inline-block",
          marginBottom: "30px",
          color: "#2f6f57",
          textDecoration: "none"
        }}>
          ← zurück
        </a>

        <h1 style={{ marginBottom: "30px" }}>
          Kontakt
        </h1>

        <p style={{
          fontSize: "22px",
          lineHeight: 1.4,
          marginBottom: "25px"
        }}>
          Du möchtest deine Situation einordnen lassen?
        </p>

        <p style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "40px"
        }}>
          Schreib mir kurz, worum es geht. Ein paar Stichpunkte reichen.
          Du musst nichts vorbereiten.
        </p>

        <a
          href="mailto:siebert@s380.de?subject=Erste%20Einordnung"
          className="cta-button"
        >
          Erste Einordnung anfragen
        </a>

        <p style={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#888"
        }}>
          Antwort innerhalb von 24 Stunden · unverbindlich · vertraulich
        </p>

        <div style={{
          marginTop: "70px",
          textAlign: "left",
          background: "#f7f7f2",
          padding: "35px",
          borderRadius: "10px"
        }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: 500,
            marginBottom: "20px"
          }}>
            Was du schreiben kannst
          </h2>

          <p>
            Zum Beispiel:
          </p>

          <ul style={{
            paddingLeft: "22px",
            marginTop: "15px",
            marginBottom: "25px"
          }}>
            <li>Geht es um Hochzeit, Ehe, Trennung oder ein Geschenk?</li>
            <li>Welche Fragen beschäftigen dich gerade?</li>
            <li>Geht es um Einkommen, Vermögen, Rente, Hausrat oder Unterhalt?</li>
          </ul>

          <p style={{ color: "#555" }}>
            Daraus entsteht eine erste strukturierte Einordnung,
            welche Themen für dich relevant sein können.
          </p>
        </div>

        <p style={{
          marginTop: "40px",
          fontSize: "13px",
          color: "#888",
          lineHeight: 1.5
        }}>
          Keine rechtliche oder steuerliche Beratung –
          sondern eine Einordnung aus Erfahrung.
        </p>

      </div>
    </main>
  );
}