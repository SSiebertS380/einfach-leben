export default function UeberMich() {
  return (
    <main style={{ padding: "100px 20px", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        <h1 style={{ marginBottom: "30px" }}>
          Über mich
        </h1>

        <p style={{
          fontSize: "20px",
          marginBottom: "40px",
          lineHeight: 1.5
        }}>
          Ich kenne diese Situation nicht nur aus der Arbeit –
          sondern aus dem eigenen Leben.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px"
        }}>
          <img
            src="/images/steven.jpg"
            alt="Steven Siebert"
            style={{
              width: "220px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
            }}
          />
        </div>

        <p style={{ marginBottom: "20px" }}>
          Ich begleite seit über 20 Jahren finanzielle Entscheidungen –
          insbesondere im Bereich Immobilien – und sehe,
          welche Wirkung sie langfristig entfalten.
        </p>

        <p style={{ marginBottom: "20px" }}>
          Ich habe selbst eine intensive Trennung erlebt.
          Mit allen Fragen, die entstehen können.
          Mit mehreren Anwälten, unterschiedlichen Perspektiven
          und vielen Momenten, in denen es emotional wurde.
        </p>

        <p style={{ marginBottom: "20px" }}>
          Heute können wir wieder gemeinsam Eltern sein.
          Nicht, weil alles einfach war –
          sondern weil Klarheit entstanden ist.
        </p>

        <p style={{ marginBottom: "20px" }}>
          Diese Erfahrung hat meinen Blick verändert.
          Und sie hat den Wunsch entstehen lassen,
          Menschen in genau solchen Situationen zu begleiten.
        </p>

        <p style={{ marginBottom: "20px" }}>
          Ich bin überzeugt:
          Die Ehe ist nicht falsch.
          Sie ist im Grunde einfach –
          wenn man die Grundlagen versteht
          und die richtige Kommunikation entsteht.
        </p>

        <p style={{ marginBottom: "40px" }}>
          Genau darum geht es hier:
          Situationen so zu verstehen,
          dass Entscheidungen bewusst getroffen werden können.
        </p>

        <p style={{ marginBottom: "20px" }}>
          Ich arbeite neutral und begleite auf Wunsch auch beide Seiten –
          damit Gespräche wieder möglich werden.
        </p>

        <p style={{
          marginTop: "20px",
          fontSize: "13px",
          color: "#888",
          marginBottom: "60px"
        }}>
          Keine rechtliche oder steuerliche Beratung –
          sondern eine Einordnung aus Erfahrung.
        </p>

        <p style={{
          fontSize: "20px",
          fontStyle: "italic",
          lineHeight: 1.4,
          marginBottom: "15px"
        }}>
          „Einfach Leben“ bedeutet für mich nicht,
          dass alles leicht ist.
        </p>

        <p style={{
          fontSize: "18px",
          color: "#555"
        }}>
          Sondern, dass man versteht,
          was gerade wirkt –
          und dadurch wieder klar entscheiden kann.
        </p>

      </div>
      <div style={{
  marginTop: "70px",
  textAlign: "center"
}}>

  <p style={{
    fontSize: "18px",
    marginBottom: "20px"
  }}>
    Wenn du deine Situation einordnen möchtest,
    kannst du mir gerne schreiben.
  </p>

  <a
    href="mailto:siebert@s380.de?subject=Erste%20Einordnung"
    className="cta-button"
  >
    Erste Einordnung anfragen
  </a>

  <p style={{
    marginTop: "12px",
    fontSize: "14px",
    color: "#888"
  }}>
    unverbindlich · vertraulich
  </p>

</div>
    </main>
  );
}