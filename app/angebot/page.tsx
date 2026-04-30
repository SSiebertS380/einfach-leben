export default function Angebot() {
  const paragraphStyle = {
    marginBottom: "20px",
    lineHeight: 1.65,
    fontSize: "17px"
  };

  const sectionTitleStyle = {
    marginTop: "45px",
    marginBottom: "20px",
    fontSize: "24px"
  };

  const cardStyle = {
    border: "1px solid #e5e5e5",
    borderRadius: "14px",
    padding: "28px",
    marginBottom: "24px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)"
  };

  const priceStyle = {
    fontSize: "26px",
    marginTop: "18px",
    marginBottom: "18px"
  };

  return (
    <main style={{ padding: "100px 20px", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        <h1 style={{ marginBottom: "30px" }}>
          Angebot
        </h1>

        <p style={{
          fontSize: "22px",
          marginBottom: "40px",
          lineHeight: 1.5
        }}>
          Erst verstehen. Dann einordnen. Und erst danach entscheiden,
          ob ein persönlicher Austausch wirklich notwendig ist.
        </p>

        <p style={paragraphStyle}>
          Viele Fragen entstehen nicht, weil Menschen etwas falsch gemacht haben.
          Sie entstehen, weil vorher oft niemand ruhig und verständlich erklärt hat,
          was Ehe, Verantwortung, Vermögen und gemeinsame Verpflichtungen praktisch bedeuten.
        </p>

        <p style={paragraphStyle}>
          Deshalb steht bei mir im ersten Schritt nicht sofort das persönliche Gespräch
          im Mittelpunkt, sondern verständliches Grundwissen. Die Videoreihe soll helfen,
          die wichtigsten Begriffe und Zusammenhänge zu verstehen – ohne juristische Sprache,
          ohne Bewertung und ohne Druck.
        </p>

        <p style={paragraphStyle}>
          Es geht nicht darum, die Ehe schlechtzureden. Es geht darum, den gesetzlichen
          Rahmen zu verstehen, der im Hintergrund wirkt. Denn vieles ist nicht persönlich
          gemeint – es folgt schlicht einer gesetzlichen Vorstellung davon, wie Verantwortung,
          Einkommen, Vermögen und Verpflichtungen eingeordnet werden.
        </p>

        <h2 style={sectionTitleStyle}>
          Der erste Schritt: die Videoreihe
        </h2>

        <div style={cardStyle}>
          <h3 style={{
            fontSize: "22px",
            marginBottom: "15px"
          }}>
            Videoreihe „Ehe verstehen“
          </h3>

          <p style={paragraphStyle}>
            Für Menschen, die zunächst die Grundlagen verstehen möchten:
            Was bedeutet Ehe praktisch? Was verändert sich dadurch? Welche Rolle spielen
            Verantwortung, Vermögen, Einkommen und gemeinsame Entscheidungen?
          </p>

          <p style={paragraphStyle}>
            Die Videoreihe erklärt die Kernthemen leicht verständlich und Schritt für Schritt.
            Sie soll helfen, die eigene Situation besser einzuordnen und die richtigen Fragen
            zu stellen – bevor Gespräche schwieriger werden oder Entscheidungen getroffen werden,
            deren Wirkung man später erst erkennt.
          </p>

          <p style={paragraphStyle}>
            Enthalten sind verständliche Videomodule, eine Zusammenfassung der wichtigsten
            Grundbegriffe und eine Checkliste zur eigenen Orientierung.
          </p>

          <p style={priceStyle}>
            <strong>149 €</strong>
          </p>

          <p style={{
            fontSize: "14px",
            color: "#777",
            lineHeight: 1.6,
            marginBottom: 0
          }}>
            Einführungspreis für die erste Videoreihe.
          </p>
        </div>

        <h2 style={sectionTitleStyle}>
          Wenn du mehr Struktur brauchst
        </h2>

        <div style={cardStyle}>
          <h3 style={{
            fontSize: "22px",
            marginBottom: "15px"
          }}>
            Klarheitspaket
          </h3>

          <p style={paragraphStyle}>
            Das Klarheitspaket ist für Menschen gedacht, die nicht nur verstehen,
            sondern ihre eigene Situation strukturieren möchten.
          </p>

          <p style={paragraphStyle}>
            Dabei geht es um eine geordnete Übersicht: Welche Einkünfte gibt es?
            Welche Vermögenswerte bestehen? Welche Verpflichtungen sind vorhanden?
            Was ist gemeinsam? Was ist unklar? Welche Fragen sollten vorbereitet werden?
          </p>

          <p style={paragraphStyle}>
            Ziel ist ein konkreter Output: eine strukturierte Übersicht und eine Checkliste,
            die du für weitere Gespräche nutzen kannst – zum Beispiel mit einem Anwalt,
            einem Steuerberater oder im gemeinsamen Austausch.
          </p>

          <p style={priceStyle}>
            <strong>299 €</strong>
          </p>

          <p style={{
            fontSize: "14px",
            color: "#777",
            lineHeight: 1.6,
            marginBottom: 0
          }}>
            Videoreihe inklusive Arbeitsunterlagen, Klarheitsbogen und strukturierter Übersicht.
          </p>
        </div>

        <h2 style={sectionTitleStyle}>
          Persönlicher Austausch
        </h2>

        <div style={cardStyle}>
          <h3 style={{
            fontSize: "22px",
            marginBottom: "15px"
          }}>
            Persönliche Einordnung
          </h3>

          <p style={paragraphStyle}>
            Manchmal reicht es, die Grundlagen in Ruhe zu verstehen. Manchmal ist die eigene
            Situation aber so individuell oder emotional belastet, dass ein persönlicher Austausch
            sinnvoll ist.
          </p>

          <p style={paragraphStyle}>
            In der persönlichen Einordnung schauen wir gemeinsam auf deine Situation.
            Es geht darum, Themen zu sortieren, Zusammenhänge sichtbar zu machen und zu erkennen,
            welche nächsten Fragen wichtig sein könnten.
          </p>

          <p style={paragraphStyle}>
            Auf Wunsch kann der Austausch auch mit beiden Seiten stattfinden – neutral,
            ruhig und mit dem Ziel, wieder mehr Klarheit in die Situation zu bringen.
          </p>

          <p style={priceStyle}>
            <strong>290 €</strong>
          </p>

          <p style={{
            fontSize: "14px",
            color: "#777",
            lineHeight: 1.6,
            marginBottom: 0
          }}>
            90 Minuten persönlicher Austausch per Video.
          </p>
        </div>

        <h2 style={sectionTitleStyle}>
          Was du mitnehmen sollst
        </h2>

        <p style={paragraphStyle}>
          Mein Ziel ist nicht, dass du möglichst schnell ein Gespräch buchst.
          Mein Ziel ist, dass du zunächst verstehst, was gerade wirkt.
        </p>

        <p style={paragraphStyle}>
          Vielleicht reicht dir die Videoreihe bereits aus, um deine Situation besser
          einzuordnen. Vielleicht brauchst du zusätzlich eine strukturierte Übersicht.
          Vielleicht entsteht danach der Wunsch nach einem persönlichen Gespräch.
        </p>

        <p style={paragraphStyle}>
          Wichtig ist: Du sollst nicht aus Unsicherheit handeln, sondern aus Klarheit.
        </p>

        <h2 style={sectionTitleStyle}>
          Was ich nicht leiste
        </h2>

        <p style={paragraphStyle}>
          Ich ersetze keine anwaltliche oder steuerliche Beratung. Ich erstelle keine
          Rechtsgutachten und gebe keine steuerlichen Empfehlungen.
        </p>

        <p style={paragraphStyle}>
          Meine Arbeit ist eine verständliche Einordnung aus Erfahrung – mit finanziellem Blick,
          klarer Struktur und dem Ziel, die richtigen Fragen sichtbar zu machen.
        </p>

        <p style={{
          marginTop: "25px",
          fontSize: "13px",
          color: "#888",
          marginBottom: "60px",
          lineHeight: 1.6
        }}>
          Keine rechtliche oder steuerliche Beratung – sondern allgemeine Orientierung,
          Strukturierung und Vorbereitung.
        </p>

        <div style={{
          marginTop: "70px",
          textAlign: "center"
        }}>

          <p style={{
            fontSize: "18px",
            marginBottom: "20px",
            lineHeight: 1.5
          }}>
            Wenn du starten möchtest, kannst du hier deine Anfrage stellen.
          </p>

          <a
            href="/anfrage"
            className="cta-button"
            style={{
              marginTop: "70px",
              width: "100%",
              maxWidth: "420px",
              boxSizing: "border-box"
            }}
          >
            Anfrage starten
          </a>

          <p style={{
            marginTop: "12px",
            fontSize: "14px",
            color: "#888"
          }}>
            unverbindlich · vertraulich
          </p>

        </div>

      </div>
    </main>
  );
}