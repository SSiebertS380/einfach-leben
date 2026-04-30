"use client";

import { useState, useEffect } from "react";

export default function Anfrage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [situation, setSituation] = useState("");
  const [angebot, setAngebot] = useState("");
  const [themen, setThemen] = useState<string[]>([]);
  const [kinder, setKinder] = useState("");
  const [immobilie, setImmobilie] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 👉 URL Parameter auslesen (situation + angebot)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const presetSituation = params.get("situation");
    const presetAngebot = params.get("angebot");

    if (presetSituation) setSituation(presetSituation);
    if (presetAngebot) setAngebot(presetAngebot);
  }, []);

  function toggleThema(thema: string) {
    setThemen((aktuell) =>
      aktuell.includes(thema)
        ? aktuell.filter((t) => t !== thema)
        : [...aktuell, thema]
    );
  }

  const body = encodeURIComponent(
`Hallo Steven,

ich möchte eine Einordnung zu meiner Situation anfragen.

Name: ${name}
E-Mail: ${email}

Situation: ${situation}
Gewähltes Angebot: ${angebot}

Themen: ${themen.join(", ")}

Kinder: ${kinder}
Immobilie: ${immobilie}

Beschreibung:
${beschreibung}

Viele Grüße
${name}`
  );

  const mailLink = `mailto:siebert@s380.de?subject=Anfrage%20Einordnung&body=${body}`;

  return (
    <main style={{ padding: "100px 20px", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

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
          Anfrage starten
        </h1>

        <p style={{ marginBottom: "40px", color: "#555" }}>
          Beantworte ein paar Fragen. Daraus entsteht eine strukturierte Anfrage.
        </p>

        {/* Anzeige wenn Angebot vorausgewählt */}
        {angebot && (
          <p style={{
            background: "#f0f7f4",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px"
          }}>
            Du interessierst dich für: <strong>{angebot}</strong>
          </p>
        )}

        {/* Name */}
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        {/* Email */}
        <label>E-Mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        {/* Situation */}
        <label>Worum geht es?</label>
        <select
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          style={inputStyle}
        >
          <option value="">Bitte auswählen</option>
          <option>Trennung</option>
          <option>Hochzeit</option>
          <option>Ehe</option>
          <option>Geschenk</option>
        </select>

        {/* Themen */}
        <p style={{ marginTop: "30px" }}>
          Welche Themen betreffen dich?
        </p>

        {["Einkommen", "Vermögen", "Rente", "Hausrat", "Unterhalt"].map((thema) => (
          <label key={thema} style={{ display: "block", marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={themen.includes(thema)}
              onChange={() => toggleThema(thema)}
            />{" "}
            {thema}
          </label>
        ))}

        {/* Kinder */}
        <label style={{ marginTop: "20px" }}>Gibt es Kinder?</label>
        <select
          value={kinder}
          onChange={(e) => setKinder(e.target.value)}
          style={inputStyle}
        >
          <option value="">Bitte auswählen</option>
          <option>Ja</option>
          <option>Nein</option>
        </select>

        {/* Immobilie */}
        <label>Gibt es Immobilien?</label>
        <select
          value={immobilie}
          onChange={(e) => setImmobilie(e.target.value)}
          style={inputStyle}
        >
          <option value="">Bitte auswählen</option>
          <option>Ja</option>
          <option>Nein</option>
        </select>

        {/* Beschreibung */}
        <label>Deine Situation</label>
        <textarea
          value={beschreibung}
          onChange={(e) => setBeschreibung(e.target.value)}
          style={{ ...inputStyle, minHeight: "140px" }}
        />

        {/* CTA */}
        <a
          href={mailLink}
          className="cta-button"
          onClick={() => setSubmitted(true)}
        >
          Anfrage per Mail erstellen
        </a>

        {/* Danke */}
        {submitted && (
          <p style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#2f6f57"
          }}>
            Vielen Dank. Dein Mailprogramm sollte sich geöffnet haben.
          </p>
        )}

        <p style={{
          marginTop: "20px",
          fontSize: "13px",
          color: "#888"
        }}>
          Deine Angaben werden nicht automatisch bewertet –
          sie helfen nur, deine Situation besser einzuordnen.
        </p>

      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "20px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};