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
  href="mailto:DEINEEMAIL@DOMAIN.DE?subject=Gespräch%20Einfach%20Leben"
  style={{
    display: "inline-block",
    marginTop: "40px",
    padding: "16px 28px",
    background: "#2f6f57",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500"
  }}
>
  Jetzt Klarheit gewinnen
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

    <h2 style={{
      marginBottom: "25px",
      fontSize: "32px",
      fontWeight: "500",
      lineHeight: 1.3
    }}>
      Finde heraus, was deine Situation wirklich bedeutet
    </h2>

    <p style={{
      marginBottom: "50px",
      color: "#bbb",
      fontSize: "18px"
    }}>
      Ein Gespräch reicht oft aus, um Klarheit über die nächsten Schritte zu bekommen.
    </p>

    <a
      href="mailto:DEINEEMAIL@DOMAIN.DE?subject=Gespräch%20Einfach%20Leben"
      style={{
        display: "inline-block",
        padding: "18px 36px",
        background: "#2f6f57",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "17px",
        fontWeight: "500"
      }}
    >
      Gespräch vereinbaren
    </a>

    <p style={{
      marginTop: "30px",
      fontSize: "14px",
      color: "#888"
    }}>
      unverbindlich · vertraulich · ohne Vorbereitung
    </p>

  </div>
</section>

    </main>
  );
}