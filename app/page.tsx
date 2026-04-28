export default function Page() {
  const accent = "#2f6f57";

  return (
    <main style={{
      fontFamily: "Georgia, serif",
      lineHeight: 1.6,
      color: "#111"
    }}>

      {/* HERO */}
      <section style={{ padding: "160px 20px 120px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          {/* BILD */}
          <img
            src="/images/hero.jpg"
            alt="Paar in emotionaler Distanz"
            style={{
              width: "100%",
              marginBottom: "60px"
            }}
          />

          {/* TEXT */}
          <h1 style={{
            fontSize: "54px",
            fontWeight: "500",
            marginBottom: "30px",
            lineHeight: 1.2
          }}>
            Du denkst, dein Leben ist klar.
          </h1>

       <p style={{
  fontSize: "20px",
  color: "#2f6f57",
  marginBottom: "10px"
}}>
  Bis ein Moment alles verändert.
</p>

          <p style={{ color: "#777", fontSize: "18px" }}>
            Und plötzlich merkst du:
            Es geht nicht nur um dein Leben.
            Sondern auch um dein Geld.
          </p>

          {/* HANDSCHRIFT */}
<p style={{
  marginTop: "40px",
  fontSize: "20px",
  fontStyle: "italic",
  color: "#2f6f57"
}}>
  Es beginnt oft leise.
</p>
<a
  href="mailto:siebert@s380.de?subject=Gespräch%20Einfach%20Leben"
  className="cta-button"
>
  In 30 Minuten Klarheit bekommen
</a>
<p style={{
  marginTop: "15px",
  fontSize: "14px",
  color: "#888"
}}>
  unverbindlich · vertraulich
</p>

        </div>
      </section>

      {/* THESE */}
      <section style={{ padding: "110px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontSize: "26px", lineHeight: 1.4 }}>
            Die meisten Menschen verstehen nicht,
            was Entscheidungen wie Heirat oder Trennung wirklich auslösen.
          </p>
        </div>
      </section>

      {/* ERKLÄRUNG */}
      <section style={{ padding: "110px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p>
            Die Ehe beginnt mit Nähe, Vertrauen und dem Wunsch nach einem gemeinsamen Leben.
          </p>

          <p>
            Aber sie ist auch eine der weitreichendsten Entscheidungen überhaupt.
          </p>

          <p>
            Einkommen, Vermögen und Zukunft sind plötzlich miteinander verbunden.
          </p>
        </div>
      </section>

      {/* BEISPIEL */}
      <section style={{ padding: "110px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <p style={{ fontSize: "20px" }}>
            Sie sitzt mir gegenüber und sagt:
            „Eigentlich ist doch alles klar.“
          </p>

          <p>
            Was sie nicht sieht:
            Mit jedem Monat entstehen weitere Ansprüche.
          </p>

          <p>
            Und plötzlich wird sichtbar,
            was die ganze Zeit schon gewirkt hat.
          </p>

        </div>
      </section>

      {/* MODELL */}
      <section style={{ padding: "110px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <p style={{ marginBottom: "40px" }}>
            Es wirkt immer auf drei Ebenen:
          </p>

          <div style={{ display: "grid", gap: "25px" }}>
            <p><strong>Heute</strong> – was dir zur Verfügung steht</p>
            <p><strong>Vermögen</strong> – was sich aufbaut oder verloren geht</p>
            <p><strong>Zukunft</strong> – was später trägt oder fehlt</p>
          </div>

        </div>
      </section>

{/* CTA */}
<section style={{
  padding: "140px 20px",
  background: "#222",
  color: "#f5f5f5",
  textAlign: "center"
}}>
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>

 <h2
  style={{
    marginBottom: "25px",
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: 1.3,
  }}
>
  Was deine Entscheidung{" "}
  <span style={{ color: "#7fd1a8", fontWeight: 600 }}>
    wirklich
  </span>
  <br />
  für dich bedeutet
</h2>

    <p style={{
      marginBottom: "50px",
      color: "#bbb",
      fontSize: "18px"
    }}>
      In einem Gespräch wird sichtbar, was sich gerade entwickelt – und was es für dich heißt.
    </p>

 <a
  href="mailto:siebert@s380.de?subject=Gespräch%20Einfach%20Leben"
  className="cta-button"
  style={{ marginTop: "50px" }}
>
  Jetzt Klarheit für deine Situation bekommen
</a>

<p style={{
  marginTop: "12px",
  fontSize: "14px",
  color: "#888"
}}>
unverbindlich · vertraulich · ohne Vorbereitung
</p>

 <p style={{
  marginTop: "25px",
  fontSize: "15px",
  color: "#aaa"
}}>
  Ich begleite seit über 20 Jahren finanzielle Entscheidungen – und sehe,
  was sie wirklich auslösen.
</p>
  </div>
</section>

    </main>
  );
}