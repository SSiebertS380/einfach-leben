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
            Und plötzlich merkst du: Es geht nicht nur um dein Leben –
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
            Nicht, weil sie unvernünftig entscheiden. Sondern weil die finanziellen Wirkungen oft erst später sichtbar werden.
          </p>
        </div>
      </section>

      {/* LEBENSPHASEN */}
      <section style={{ padding: "80px 20px", background: "#f7f7f2" }}>
        <div style={{ maxWidth: "950px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: 500, marginBottom: "20px", textAlign: "center" }}>
            Lebensphasen verändern Entscheidungen
          </h2>

          <p style={{ textAlign: "center", color: "#555", fontSize: "18px", marginBottom: "60px" }}>
            Was am Anfang selbstverständlich wirkt, kann später eine ganz andere Bedeutung bekommen.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div>
              <img src="/images/phase1.jpg" alt="" style={{ width: "100%" }} />
              <p>Alles fühlt sich klar an.</p>
            </div>

            <div>
              <img src="/images/phase2.jpg" alt="" style={{ width: "100%" }} />
              <p>Man baut gemeinsam etwas auf.</p>
            </div>

            <div>
              <img src="/images/phase3.jpg" alt="" style={{ width: "100%" }} />
              <p>Fragen entstehen oft leise.</p>
            </div>

            <div>
              <img src="/images/phase4.jpg" alt="" style={{ width: "100%" }} />
              <p>Und plötzlich wird es konkret.</p>
            </div>
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
              <p>Wie verändert sich, was dir monatlich wirklich zur Verfügung steht?</p>
            </div>

            <div>
              <h3>Was passiert mit dem Vermögen?</h3>
              <p>Was wurde gemeinsam aufgebaut – und wie wird es betrachtet?</p>
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
      <section style={{ padding: "90px 20px" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: 500, marginBottom: "35px", textAlign: "center" }}>
            Für wen ist das gedacht?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            <div>
              <h3>In der Trennung</h3>
              <p>Für Menschen, die verstehen wollen, was gerade wirkt und welche Fragen jetzt wichtig werden.</p>
              <a href="mailto:siebert@s380.de?subject=Einordnung%20zur%20Trennung" className="cta-small">
                Einordnung zur Trennung
              </a>
            </div>

            <div>
              <h3>Vor der Hochzeit</h3>
              <p>Für Paare, die verstehen wollen, welche finanziellen Wirkungen mit der Ehe entstehen.</p>
              <a href="mailto:siebert@s380.de?subject=Einordnung%20zur%20Hochzeit" className="cta-small">
                Einordnung zur Hochzeit
              </a>
            </div>

            <div>
              <h3>In der Ehe</h3>
              <p>Für Menschen, die gemeinsame Entscheidungen bewusster einordnen wollen.</p>
              <a href="mailto:siebert@s380.de?subject=Einordnung%20in%20der%20Ehe" className="cta-small">
                Entscheidungen einordnen
              </a>
            </div>

            <div>
              <h3>Als Geschenk</h3>
              <p>Für Freunde oder Familie, die einem Paar etwas Sinnvolles zur Hochzeit mitgeben möchten.</p>
              <a href="mailto:siebert@s380.de?subject=Anfrage%20als%20Geschenk" className="cta-small">
                Als Geschenk anfragen
              </a>
            </div>
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
          <p>Ich gebe dir eine erste strukturierte Einordnung:</p>

          <ul style={{ marginTop: "20px", marginBottom: "25px", paddingLeft: "22px" }}>
            <li>welche Themen wirklich relevant sind</li>
            <li>wo finanzielle Auswirkungen entstehen können</li>
            <li>welche Fragen du als Nächstes klären solltest</li>
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