export default function Impressum() {
  return (
    <main style={{
      fontFamily: "Georgia, serif",
      lineHeight: 1.6,
      color: "#111",
      padding: "120px 20px"
    }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <h1 style={{ marginBottom: "40px" }}>Impressum</h1>
<a
  href="/"
  style={{
    display: "inline-block",
    marginBottom: "40px",
    color: "#2f6f57",
    textDecoration: "none",
    fontSize: "14px"
  }}
>
  ← zurück zur Seite
</a>
        <p>Angaben gemäß § 5 TMG</p>

        <p>
          Steven Siebert<br />
          Im Wingertsgrund 30b<br />
          61449 Steinbach
          Deutschland
        </p>

        <p>
          E-Mail: siebert@s380.de
        </p>

        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
          Steven Siebert
        </p>

      </div>
    </main>
  );
}