export default function Page() {
  const accent = "#2f6f57";

  return (
    <main style={{ fontFamily: "Georgia, serif", lineHeight: 1.6, color: "#111" }}>
      {/* HERO */}
      <section style={{ padding: "150px 20px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <img
            src="/images/hero.jpg"
            alt="Paar in emotionaler Distanz"
            style={{ width: "100%", marginBottom: "60px" }}
          />

          <h1 style={{ fontSize: "54px", fontWeight: 500, marginBottom: "30px", lineHeight: 1.2 }}>
            Du denkst, dein Leben ist klar.
          </h1>

          <p style={{ fontSize: "20px", color: accent, marginBottom: "10px" }}>
            Bis ein Moment alles verändert.
          </p>

          <p style={{ color: "#777", fontSize: "18px" }}>
            Und plötzlich merkst Du: Es geht nicht nur um dein Leben –
            sondern auch um dein Geld.
          </p>

          <p style={{ marginTop: "40px", fontSize: "20px", fontStyle: "italic", color: accent }}>
            Es beginnt oft leise.
          </p>

          <a href="mailto:siebert@s380.de?subject=Erste%20Einordnung" className="cta-button">
            Erste Einordnung anfragen
          </a>

          <p style={{ marginTop: "15px", fontSize: "14px", color: "#888" }}>
            Antwort per Mail · unverbindlich · vertraulich
          </p>
        </div>
      </section>

      {/* THESE */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "28px", lineHeight: 1.35 }}>
            Die meisten Menschen verstehen nicht, was Entscheidungen wie Heirat oder Trennung wirklich auslösen.
          </p>

          <p style={{ fontSize: "18px", color: "#555", marginTop: "30px" }}>
            Nicht, weil Sie unvernünftig entscheiden. Sondern weil die finanziellen Wirkungen oft erst später sichtbar werden.
          </p>
        </div>
      </section>

{/* LEBENSPHASEN / ZEITSTRAHL */}
<section style={{ padding: "90px 20px", background: "#f7f7f2" }}>
  <div style={{ maxWidth: "950px", margin: "0 auto" }}>

    <h2 style={{
      fontSize: "34px",
      fontWeight: 500,
      marginBottom: "20px",
      textAlign: "center",
    }}>
      Lebensphasen verändern Entscheidungen
    </h2>

    <p style={{
      textAlign: "center",
      color: "#555",
      fontSize: "18px",
      marginBottom: "60px",
      maxWidth: "650px",
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      Was am Anfang selbstverständlich wirkt, kann später eine ganz andere Bedeutung bekommen.
    </p>

    <div className="timeline-grid">

      {[
        { img: "phase1.jpg", nr: "01", title: "Anfang", text: "Alles fühlt sich klar an." },
        { img: "phase2.jpg", nr: "02", title: "Aufbau", text: "Man baut gemeinsam etwas auf." },
        { img: "phase3.jpg", nr: "03", title: "Veränderung", text: "Fragen entstehen oft leise." },
        { img: "phase4.jpg", nr: "04", title: "Klärung", text: "Und plötzlich wird es konkret." },
      ].map((item, i) => (
        <div key={i}>
          <img
            src={`/images/${item.img}`}
            style={{ width: "100%", marginBottom: "18px" }}
          />

          {/* Zahl + Titel */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px"
          }}>
            <span style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#2f6f57"
            }}>
              {item.nr}
            </span>

            <h3 style={{
              margin: 0,
              fontWeight: 600,
              color: "#2f6f57"
            }}>
              {item.title}
            </h3>
          </div>

          <p style={{ marginTop: "6px" }}>
            {item.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ERKLÄRUNG */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p>Die Ehe beginnt mit Nähe, Vertrauen und dem Wunsch nach einem gemeinsamen Leben.</p>
          <p>Aber sie ist auch eine der weitreichendsten Entscheidungen überhaupt.</p>
          <p>Einkommen, Vermögen, Verantwortung und Zukunft sind plötzlich miteinander verbunden.</p>
        </div>
      </section>

      {/* KONKRET */}
      <section style={{ padding: "80px 20px", background: "#f7f7f2" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: 500, marginBottom: "30px", lineHeight: 1.3 }}>
            Was du konkret bekommst
          </h2>

          <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
            Eine erste Einordnung, welche Fragen in deiner Situation wirklich relevant sind.
          </p>

          <div style={{ display: "grid", gap: "26px" }}>
            <div>
              <h3>Was passiert mit dem Einkommen?</h3>
              <p>Wie verändert sich, was Dir monatlich wirklich zur Verfügung steht?</p>
            </div>

            <div>
              <h3>Was passiert mit dem Vermögen?</h3>
              <p>Was war am Anfang schon vorhanden - Was wurde gemeinsam aufgebaut – und wie wird es betrachtet?</p>
            </div>

            <div>
              <h3>Was passiert mit der Rente?</h3>
              <p>Welche Ansprüche entstehen oder verändern sich langfristig?</p>
            </div>

            <div>
              <h3>Was passiert mit dem Hausrat?</h3>
              <p>Was ist gemeinsam genutzt – und wie wird damit praktisch umgegangen?</p>
            </div>

            <div>
              <h3>Was passiert mit Unterhalt und Verantwortung?</h3>
              <p>Welche Verpflichtungen entstehen – und wie wirken sie sich aus?</p>
            </div>
          </div>
        </div>
      </section>

{/* ZIELGRUPPEN */}
<section style={{ padding: "90px 20px", background: "#f7f7f2" }}>
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>

    <h2
      style={{
        fontSize: "34px",
        fontWeight: 500,
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      Für wen ist das gedacht?
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#555",
        fontSize: "18px",
        marginBottom: "60px",
        maxWidth: "650px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Je nach Situation stellen sich unterschiedliche Fragen.
      Hier kannst du direkt dort ansetzen, wo du gerade stehst.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
      }}
    >
      {[
        {
          title: "In der Trennung",
          text: "Für Menschen, die verstehen wollen, was gerade wirkt und welche Fragen jetzt wichtig werden.",
          link: "Einordnung zur Trennung",
          subject: "Einordnung zur Trennung",
        },
        {
          title: "Vor der Hochzeit",
          text: "Für Paare, die verstehen wollen, welche finanziellen Wirkungen mit der Ehe entstehen.",
          link: "Einordnung zur Hochzeit",
          subject: "Einordnung zur Hochzeit",
        },
        {
          title: "In der Ehe",
          text: "Für Menschen, die gemeinsame Entscheidungen bewusster einordnen wollen.",
          link: "Entscheidungen einordnen",
          subject: "Einordnung in der Ehe",
        },
        {
          title: "Als Geschenk",
          text: "Für Freunde oder Familie, die einem Paar etwas Sinnvolles zur Hochzeit mitgeben möchten.",
          link: "Als Geschenk anfragen",
          subject: "Einordnung als Geschenk",
        },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            padding: "25px",
            borderRadius: "10px",
            border: "1px solid #e0e0da",
            background: "#fff",
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            {item.title}
          </h3>

          <p style={{ marginBottom: "15px" }}>{item.text}</p>

          <a
            href={`mailto:siebert@s380.de?subject=${encodeURIComponent(item.subject)}`}
            className="cta-small"
          >
            {item.link}
          </a>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ABLAUF */}
      <section style={{ padding: "90px 20px", background: "#f7f7f2" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: 500, marginBottom: "25px", lineHeight: 1.3 }}>
            Wie es weitergeht
          </h2>

          <p>Du schilderst kurz deine Situation.</p>
          <p>Ich gebe Dir eine erste strukturierte Einordnung:</p>

          <ul style={{ marginTop: "20px", marginBottom: "25px", paddingLeft: "22px" }}>
            <li>welche Themen wirklich relevant sind</li>
            <li>wo finanzielle Auswirkungen entstehen können</li>
            <li>welche Fragen Du als Nächstes klären solltest</li>
          </ul>

          <p>
            Auf Wunsch klären wir das anschließend gemeinsam im Gespräch –
            neutral, ruhig und mit Blick auf beide Seiten.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 20px", background: "#222", color: "#f5f5f5", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "25px", fontSize: "32px", fontWeight: 500, lineHeight: 1.3 }}>
            Finde heraus, welche dieser Fragen{" "}
            <span style={{ color: "#7fd1a8", fontWeight: 600 }}>wirklich</span>
            <br />
            für dich relevant sind
          </h2>

          <p style={{ marginBottom: "40px", color: "#ddd", fontSize: "18px" }}>
            Du bekommst eine erste persönliche Einordnung zu deiner Situation –
            und siehst, welche Themen du jetzt klären solltest.
          </p>

          <a href="mailto:siebert@s380.de?subject=Erste%20Einordnung" className="cta-button">
            Erste Einordnung per Mail anfragen
          </a>

          <p style={{ marginTop: "12px", fontSize: "14px", color: "#888" }}>
            Antwort innerhalb von 24 Stunden · unverbindlich
          </p>

          <p style={{ marginTop: "15px", fontSize: "13px", color: "#888", lineHeight: 1.5 }}>
            Keine rechtliche oder steuerliche Beratung – sondern eine Einordnung aus Erfahrung.
            Ich arbeite neutral und begleite auf Wunsch auch beide Seiten im Gespräch.
          </p>
        </div>
      </section>

      {/* ABSCHLUSS */}
      <section style={{ padding: "100px 20px", textAlign: "center", background: "#f7f7f2" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <img
            src="/images/finale.jpg"
            alt="Neue Klarheit nach Veränderung"
            style={{ width: "100%", marginBottom: "40px" }}
          />

          <p style={{ fontSize: "20px", color: "#555" }}>
            Klarheit bedeutet nicht, dass alles einfach wird.
            Aber dass du weißt, worum es wirklich geht.
          </p>
        </div>
      </section>
    </main>
  );
}