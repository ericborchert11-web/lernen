// LPR Schulungsraum · Kursinhalte (eine Quelle fuer Schulung und Handbuch)
// Wird von index.html und handbuch/index.html geladen.
// ═══════════════════════════════════════════════════════════════
// LPR SCHULUNGSRAUM · Kursdaten
// Wird direkt in das HTML-File eingebettet als window.COURSE
// ═══════════════════════════════════════════════════════════════

const COURSE = {
  title: "Psychiatrische Einzelbetreuung & Sitzwache",
  subtitle: "Schulung für Reisebegleiter:innen und Sitzwachen",
  cobrand: {
    platform: "Leben Pflegen Reisen e.V.",
    content: "Leben Pflegen Reisen e.V.",
  },
  modules: [
    // ─────────────────────────────────────────────────
    // MODUL 0 · WILLKOMMEN BEI LPR
    // ─────────────────────────────────────────────────
    {
      id: "m0",
      num: "00",
      title: "Willkommen bei LPR",
      color: "lime",
      lessons: [
        {
          id: "m0l1",
          num: "0.1",
          title: "Warum wir mitgehen, nicht für",
          duration: 8,
          type: "intro",
        },
        {
          id: "m0l2",
          num: "0.2",
          title: "PPP — Purpose, Pulse, People",
          duration: 10,
          type: "intro",
        },
        {
          id: "m0l3",
          num: "0.3",
          title: "Ehrenamt, Übungsleiter, Aufwandsentschädigung",
          duration: 12,
          type: "intro",
        },
      ],
    },
    // ─────────────────────────────────────────────────
    // MODUL 1 · HYGIENE (voll ausgearbeitet)
    // ─────────────────────────────────────────────────
    {
      id: "m1",
      num: "01",
      title: "Hygiene",
      color: "green",
      lessons: [
        {
          id: "m1l1",
          num: "1.1",
          title: "Basishygiene — Überblick",
          duration: 10,
          type: "content",
        },
        {
          id: "m1l2",
          num: "1.2",
          title: "Die hygienische Händedesinfektion",
          duration: 12,
          type: "content",
          showcase: true,  // markiert Vorzeige-Lektion
        },
        {
          id: "m1l3",
          num: "1.3",
          title: "Persönliche Schutzausrüstung (PSA)",
          duration: 9,
          type: "content",
        },
        {
          id: "m1l4",
          num: "1.4",
          title: "Hautschutz & Hautpflege",
          duration: 7,
          type: "content",
        },
        {
          id: "m1l5",
          num: "1.5",
          title: "Umgang mit Infektionskrankheiten",
          duration: 11,
          type: "content",
        },
        {
          id: "m1q",
          num: "1.Q",
          title: "Quiz: Hygiene",
          duration: 10,
          type: "quiz",
        },
      ],
    },
    // ─────────────────────────────────────────────────
    // MODUL 2 · ARBEITSSICHERHEIT
    // ─────────────────────────────────────────────────
    {
      id: "m2",
      num: "02",
      title: "Arbeitssicherheit",
      color: "green",
      lessons: [
        {
          id: "m2l1",
          num: "2.1",
          title: "Gefährdungen erkennen",
          duration: 10,
          type: "content",
        },
        {
          id: "m2l2",
          num: "2.2",
          title: "Sichere Körperpositionen am Patienten",
          duration: 8,
          type: "content",
        },
        {
          id: "m2l3",
          num: "2.3",
          title: "Freiheitsentziehende Maßnahmen",
          duration: 12,
          type: "content",
        },
        {
          id: "m2l4",
          num: "2.4",
          title: "Arbeits- und Wegeunfälle",
          duration: 6,
          type: "content",
        },
        {
          id: "m2q",
          num: "2.Q",
          title: "Quiz: Arbeitssicherheit",
          duration: 8,
          type: "quiz",
        },
      ],
    },
    // ─────────────────────────────────────────────────
    // MODUL 3 · ORGANISATION & DOKU
    // ─────────────────────────────────────────────────
    {
      id: "m3",
      num: "03",
      title: "Organisation & Dokumentation",
      color: "green",
      lessons: [
        {
          id: "m3l1",
          num: "3.1",
          title: "Dokumentation in der App",
          duration: 11,
          type: "content",
        },
        {
          id: "m3l2",
          num: "3.2",
          title: "Dienste und Mitgliederportal",
          duration: 7,
          type: "content",
        },
        {
          id: "m3l3",
          num: "3.3",
          title: "Kommunikation bei LPR",
          duration: 8,
          type: "content",
        },
        {
          id: "m3q",
          num: "3.Q",
          title: "Quiz: Organisation",
          duration: 6,
          type: "quiz",
        },
      ],
    },
    // ─────────────────────────────────────────────────
    // MODUL 4 · REISEBEGLEITUNG (LPR-eigen)
    // ─────────────────────────────────────────────────
    {
      id: "m4",
      num: "04",
      title: "LPR-Reisebegleitung",
      color: "lime",
      lessons: [
        {
          id: "m4l1",
          num: "4.1",
          title: "Was unterscheidet Reise von Sitzwache?",
          duration: 9,
          type: "content",
        },
        {
          id: "m4l2",
          num: "4.2",
          title: "Notfallplan auf Reisen",
          duration: 12,
          type: "content",
        },
        {
          id: "m4l3",
          num: "4.3",
          title: "Kommunikation mit Angehörigen",
          duration: 8,
          type: "content",
        },
        {
          id: "m4l4",
          num: "4.4",
          title: "Versicherung & rechtlicher Rahmen",
          duration: 10,
          type: "content",
        },
        {
          id: "m4q",
          num: "4.Q",
          title: "Quiz: Reisebegleitung",
          duration: 8,
          type: "quiz",
        },
        {
          id: "final",
          num: "★",
          title: "Abschlussprüfung & Zertifikat",
          duration: 20,
          type: "final",
        },
      ],
    },
  ],
};



// ═══════════════════════════════════════════════════════════════
// LESSON CONTENTS
// Each lesson returns an HTML string to be injected into .content
// ═══════════════════════════════════════════════════════════════

const LESSON_CONTENT = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODUL 0 · WILLKOMMEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "m0l1": `
    <p class="lesson-lede">
      Bei Leben Pflegen Reisen e.V. gilt ein Satz, der alles andere ordnet:
      <em>Wir gehen den Weg mit &mdash; nicht für.</em> Diese Lektion erklärt,
      was damit gemeint ist und warum er unsere Arbeit prägt.
    </p>

    <h2 class="section"><span class="num">1.</span>Der Unterschied</h2>
    <p>Viele Dienste in der Pflege arbeiten <em>für</em> Menschen: sie erledigen
    etwas, damit es gut ausgeht. Wir arbeiten <em>mit</em> Menschen: wir begleiten,
    wir sind dabei, wir halten aus &mdash; aber wir nehmen nicht die Regie. Der feine
    Unterschied entscheidet darüber, wie sich eine begleitete Person fühlt.</p>

    <p>Bei einer Sitzwache heißt das: Du bist präsent, aufmerksam, handelst im Notfall
    kompetent. Aber Du besetzt nicht den Raum, Du überlagerst nicht die Autonomie,
    Du bevormundest nicht. Bei einer Reisebegleitung heißt es: Du fährst mit, damit
    jemand fahren <em>kann</em> &mdash; nicht damit die Reise <em>Dir</em> gehört.</p>

    <div class="pullquote">Begleitung, die bewegt. Pflege, die Menschen nicht ersetzt, sondern ihnen Raum gibt.</div>

    <h2 class="section"><span class="num">2.</span>Wer wir sind</h2>
    <p>Leben Pflegen Reisen ist ein gemeinnütziger Verein (e.V.) aus Berlin. Wir sind
    2026 gegründet worden mit einem klaren Ziel: dass Menschen, die Pflege oder
    Begleitung brauchen, trotzdem am Leben teilhaben können &mdash; inklusive Reisen,
    Krankenhausaufenthalten und sozialen Kontakten.</p>

    <h3 class="subsection">Unsere Angebote</h3>
    <ul class="clean">
      <li><strong>Sitzwachen</strong> in Berliner Kliniken &mdash; und als Privatauftrag, zum Beispiel nachts in einer Pflegeeinrichtung</li>
      <li><strong>Demenzreisen</strong> &mdash; Begleitung von Familien, unter anderem in Rerik und Oberhof</li>
      <li><strong>Alltagsbegleitung</strong> &mdash; anerkanntes Angebot nach § 45a SGB XI, Start im Februar 2027</li>
    </ul>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Was heißt "gemeinnützig" rechtlich?</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Die Gemeinnützigkeit ist nach §§ 51 ff. Abgabenordnung an vier Bedingungen
        geknüpft: ausschließliche und unmittelbare Verfolgung steuerbegünstigter
        Zwecke (§ 52 AO), Selbstlosigkeit (§ 55 AO), Ausschließlichkeit (§ 56 AO) und
        Unmittelbarkeit (§ 57 AO). Für unsere Arbeit ist besonders der Zweck
        <em>Förderung mildtätiger Zwecke</em> (§ 53 AO) relevant sowie die
        <em>Förderung der Bildung</em> (§ 52 Abs. 2 Nr. 7 AO) bei Schulungen wie dieser.</p>
      </div>
    </details>
  `,

  "m0l2": `
    <p class="lesson-lede">
      PPP steht für <em>Purpose, Pulse, People</em> &mdash; drei Worte, mit denen wir
      jede Entscheidung prüfen. In dieser Lektion erfährst Du, wie das in der
      Praxis funktioniert.
    </p>

    <h2 class="section"><span class="num">1.</span>Die drei Ps</h2>

    <div class="moments">
      <div class="moments-header">
        <div class="moments-kicker">LPR-Framework</div>
        <h3 class="moments-title">Drei Filter für jede Entscheidung</h3>
      </div>
      <div class="moments-grid">
        <div class="moment">
          <div class="moment-num">P1</div>
          <div class="moment-when">Purpose</div>
          <div class="moment-why">Dient diese Entscheidung dem Menschen, den wir begleiten &mdash; oder nur uns?</div>
        </div>
        <div class="moment">
          <div class="moment-num">P2</div>
          <div class="moment-when">Pulse</div>
          <div class="moment-why">Ist die Entscheidung lebendig und angemessen &mdash; oder mechanisch und prozedural?</div>
        </div>
        <div class="moment">
          <div class="moment-num">P3</div>
          <div class="moment-when">People</div>
          <div class="moment-why">Werden die Menschen respektiert, die daran beteiligt sind &mdash; auch die, die nicht im Raum sind?</div>
        </div>
      </div>
    </div>

    <p>PPP ist keine Checkliste fürs Formular. Es ist eine Haltung: innehalten,
    bevor Du entscheidest. Die drei Filter klingen einfach, aber sie greifen im
    Alltag überraschend oft.</p>

    <h2 class="section"><span class="num">2.</span>Ein Beispiel aus dem Dienst</h2>

    <p>Herr S., 78, Demenz im Mittelstadium, hat nachts Unruhe und will immer wieder
    aufstehen. Auf der Station wird überlegt, die Bettgitter hochzuziehen. Was
    macht eine gute Sitzwache?</p>

    <bullet-gap></bullet-gap>
    <ul class="clean">
      <li><strong>Purpose:</strong> Das Bettgitter schützt vor Sturz. Aber dient es
      dem <em>Menschen</em> &mdash; oder nur der Ruhe auf Station? Hochgezogene Bettgitter
      sind übrigens eine freiheitsentziehende Maßnahme (Modul 2).
      Vielleicht ist das Aufstehen-Wollen ja auch ein Signal &mdash; Durst, volle Blase,
      Schmerz, Angst.</li>
      <li><strong>Pulse:</strong> Statt mechanisch zu reagieren &mdash; mit Herrn S.
      sprechen, seine Hand halten, fragen, was er braucht. Manchmal reicht das.</li>
      <li><strong>People:</strong> Respekt bedeutet hier: Herr S. ist ein Mensch, kein Fall.
      Und die Pflegefachkraft ist Deine Kollegin &mdash; Du stellst sie nicht in Frage,
      sondern sprichst mit ihr über Alternativen.</li>
    </ul>

    <div class="callout">
      <span class="callout-label">Leitsatz</span>
      <div class="callout-body">PPP ersetzt keine Anordnungen &mdash; es schärft die Wahrnehmung dafür, wann es mehr als die Anordnung braucht.</div>
    </div>
  `,

  "m0l3": `
    <p class="lesson-lede">
      Rechtlich ist der Unterschied zwischen Ehrenamt, Übungsleitertätigkeit und
      bezahlter Anstellung wichtig &mdash; besonders wegen Aufwandsentschädigungen,
      Steuerfreibeträgen und Versicherungsschutz.
    </p>

    <h2 class="section"><span class="num">1.</span>Die drei Formen</h2>

    <h3 class="subsection">Übungsleiterpauschale &mdash; so laufen Sitzwachen und Reisen</h3>
    <p>Wer nebenberuflich alte, kranke oder behinderte Menschen betreut, fällt unter
    § 3 Nr. 26 EStG. Steuer- und sozialabgabenfrei sind bis
    <strong>3.300 Euro pro Jahr</strong> (seit 2026, vorher 3.000 Euro). Darüber
    laufen bei LPR die Sitzwachen, die Reisebegleitung und später die Alltagsbegleitung.</p>
    <p>Je Sitzwache (8 Stunden) zahlt LPR bis 31.12.2026 100 Euro, Fachkräfte 150 Euro.
    <strong>Ab 1.1.2027 gibt es einheitlich 125 Euro</strong> &mdash; für alle, weil wir
    reine Betreuung leisten (Beschluss der Mitgliederversammlung vom 21.11.2026).</p>

    <h3 class="subsection">Ehrenamtspauschale</h3>
    <p>Für andere Tätigkeiten im Verein &mdash; Büro, Organisation, Koordination &mdash;
    gilt § 3 Nr. 26a EStG: steuer- und sozialabgabenfrei bis <strong>960 Euro
    pro Jahr</strong> (seit 2026, vorher 840 Euro). Für ein und dieselbe Tätigkeit
    gibt es nur eine der beiden Pauschalen.</p>

    <h3 class="subsection">Anstellung</h3>
    <p>Bezahlte Tätigkeit mit Lohn, Steuern, Sozialabgaben &mdash; bei LPR
    derzeit nicht der Regelfall.</p>

    <h3 class="subsection">Du bekommst ALG I, Bürgergeld oder Grundsicherung?</h3>
    <p>Dann sprich bitte <strong>vor Deinem ersten Dienst</strong> mit uns. Die Agentur
    für Arbeit rechnet die Pauschale monatlich (275 Euro), beim Bürgergeld zählt die
    Jahressumme. Wir planen Deine Dienste so, dass es passt.</p>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <div class="alert-title">Die Pauschalen gelten pro Person pro Jahr</div>
        <div class="alert-body">Wenn Du bei mehreren Vereinen tätig bist, addieren sich die Beträge &mdash; nicht die Freibeträge. Wer 500 Euro bei Verein A und 500 Euro bei Verein B erhält, hat 1.000 Euro Einnahmen; unter dem Freibetrag bleibt es nur, wenn dieser insgesamt nicht überschritten wird.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">2.</span>Versicherung</h2>
    <p>Wer ehrenamtlich in der Wohlfahrtspflege tätig ist, ist <strong>kraft Gesetzes
    über die BGW unfallversichert</strong> (§ 2 Abs. 1 Nr. 9 SGB VII) &mdash; auch auf dem
    Weg zum und vom Einsatzort (Wegeunfall). Schäden, die im Dienst passieren, deckt
    die Betriebshaftpflicht des Vereins.</p>
    <p><strong>Nicht versichert ist Behandlungspflege</strong> &mdash; also Medikamente,
    Injektionen, Wundversorgung oder Vitalzeichenkontrolle auf Anordnung. Das gilt auch
    für Pflegefachkräfte, die bei uns als Sitzwache im Einsatz sind.</p>

    <details class="box laie">
      <summary>
        <div class="box-icon">?</div>
        <div>
          <span class="box-label">Was heißt das?</span>
          <span>Was ist ein Wegeunfall?</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Ein <strong>Wegeunfall</strong> ist ein Unfall, der auf dem direkten Weg zur
        oder von der Tätigkeit passiert. Umwege &mdash; Einkauf, privater Besuch &mdash;
        sind nicht mitversichert. Wenn Du auf dem Heimweg vom Dienst stürzt, greift
        die Versicherung. Wenn Du vorher noch in den Supermarkt bist, unter Umständen
        nicht mehr.</p>
      </div>
    </details>

    <div class="callout">
      <span class="callout-label">Wichtig zu wissen</span>
      <div class="callout-body">Jeden Arbeits- oder Wegeunfall meldest Du <strong>zeitnah</strong> dem Vorstand. Auch Bagatellen. Das dient Deinem eigenen Schutz &mdash; falls später Folgen auftreten, ist die Dokumentation entscheidend.</div>
    </div>
  `,

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODUL 1 · HYGIENE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "m1l1": `
    <p class="lesson-lede">
      Bevor es um Händedesinfektion, PSA und Flächen geht &mdash; erst der Überblick.
      Fünf Maßnahmen bilden das Fundament der Basishygiene. Wer sie kennt und
      konsequent umsetzt, verhindert die meisten Übertragungen.
    </p>

    <h2 class="section"><span class="num">1.</span>Die fünf Maßnahmen der Basishygiene</h2>

    <div class="moments">
      <div class="moments-header">
        <div class="moments-kicker">Basishygiene · RKI-Standard</div>
        <h3 class="moments-title">Fünf Säulen, kein Kompromiss.</h3>
      </div>
      <div class="moments-grid">
        <div class="moment">
          <div class="moment-num">01</div>
          <div class="moment-when">Hygienische Händedesinfektion</div>
          <div class="moment-why">Die wichtigste Einzelmaßnahme überhaupt.</div>
        </div>
        <div class="moment">
          <div class="moment-num">02</div>
          <div class="moment-when">Aufbereitung von Medizinprodukten</div>
          <div class="moment-why">Fachgerechte Reinigung, Desinfektion, Sterilisation.</div>
        </div>
        <div class="moment">
          <div class="moment-num">03</div>
          <div class="moment-when">Flächendesinfektion</div>
          <div class="moment-why">Nach Kontamination, vor aseptischen Tätigkeiten.</div>
        </div>
        <div class="moment">
          <div class="moment-num">04</div>
          <div class="moment-when">Verwendung von Schutz­kleidung</div>
          <div class="moment-why">Passend zur erwarteten Exposition.</div>
        </div>
        <div class="moment">
          <div class="moment-num">05</div>
          <div class="moment-when">Einbeziehung aller Personen­gruppen</div>
          <div class="moment-why">Pflege, Ärzt:innen, Therapie, Besucher:innen.</div>
        </div>
      </div>
    </div>

    <h2 class="section"><span class="num">2.</span>Warum das so wichtig ist</h2>
    <p>In der Praxis wird gelegentlich diskutiert, ob man es "mit der Hygiene nicht übertreibt".
    Die Antwort der Evidenz ist eindeutig: konsequente Basishygiene ist die wirksamste
    Einzelmaßnahme gegen nosokomiale Infektionen &mdash; Infektionen, die im
    Versorgungskontext entstehen.</p>

    <div class="pullquote">
      Auf einer durchschnittlichen Computermaus sitzen dreimal mehr Bakterien als auf Toilette und Türgriffen.
    </div>

    <p>Das klingt nach Anekdote, ist aber ein ernstes Argument: Erreger sitzen genau
    dort, wo wir sie nicht erwarten. Und genau dort ist Basishygiene wichtig.</p>

    <details class="box laie">
      <summary>
        <div class="box-icon">?</div>
        <div>
          <span class="box-label">Was heißt das?</span>
          <span>Was ist eine nosokomiale Infektion?</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Eine <strong>nosokomiale Infektion</strong> ist eine Infektion, die im
        Zusammenhang mit einem Aufenthalt oder einer Behandlung in einer Gesundheits­einrichtung
        erworben wird &mdash; im Krankenhaus, in der Reha, im Pflegeheim. Sie war bei
        Aufnahme weder vorhanden noch in Inkubation.</p>
      </div>
    </details>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Rechtliche Grundlagen der Basishygiene</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Die Verbindlichkeit der Basishygiene ergibt sich in Deutschland aus
        mehreren Rechtsquellen:</p>
        <ul>
          <li><strong>IfSG § 23</strong> &mdash; verpflichtet Einrichtungen zur
          Einhaltung des Standes der medizinischen Wissenschaft zur Verhütung
          nosokomialer Infektionen.</li>
          <li><strong>KRINKO-Empfehlungen</strong> des RKI &mdash; setzen den
          "Stand der medizinischen Wissenschaft" operativ um.</li>
          <li><strong>TRBA 250</strong> &mdash; Technische Regeln für biologische
          Arbeitsstoffe im Gesundheitswesen. Arbeitsschutzrechtlich bindend.</li>
          <li><strong>MPBetreibV</strong> &mdash; für den sachgerechten Umgang mit
          Medizinprodukten.</li>
        </ul>
        <p>Verstöße können haftungsrechtlich (Schadensersatz, Schmerzensgeld),
        ordnungsrechtlich (Bußgelder) und strafrechtlich (Körperverletzung durch
        Unterlassen) relevant sein.</p>
      </div>
    </details>
  `,

  // showcase lesson — full version from earlier mockup, lightly edited
  "m1l2": `
    <p class="lesson-lede">
      Händedesinfektion ist die wirkungsvollste Einzelmaßnahme gegen die Übertragung
      von Krankheitserregern. In dieser Lektion geht es um das <em>Wer, Wann, Wie</em>
      und <em>Warum</em> &mdash; und darum, warum Waschen und Desinfizieren nicht dasselbe sind.
    </p>

    <h2 class="section"><span class="num">1.</span>Wann desinfiziere ich meine Hände?</h2>

    <p>Die Weltgesundheitsorganisation hat fünf Momente definiert, in denen eine
    Händedesinfektion zwingend ist. Diese fünf Momente sind das Skelett, auf dem
    alles andere aufbaut &mdash; in der Pflege, in der Begleitung, überall, wo
    Menschen einander nahekommen.</p>

    <div class="moments">
      <div class="moments-header">
        <div class="moments-kicker">WHO · 5 Momente der Händehygiene</div>
        <h3 class="moments-title">Wann? Fünf Situationen, kein Kompromiss.</h3>
      </div>
      <div class="moments-grid">
        <div class="moment">
          <div class="moment-num">01</div>
          <div class="moment-when">Vor Patienten­kontakt</div>
          <div class="moment-why">Schutz des Patienten vor Erregern, die Du mitbringst.</div>
        </div>
        <div class="moment">
          <div class="moment-num">02</div>
          <div class="moment-when">Vor aseptischer Tätigkeit</div>
          <div class="moment-why">Vor Tätigkeiten, bei denen Erreger nicht übertragen werden dürfen.</div>
        </div>
        <div class="moment">
          <div class="moment-num">03</div>
          <div class="moment-when">Nach Kontakt mit Körper­flüssigkeiten</div>
          <div class="moment-why">Schutz von Dir und allen nachfolgenden Kontakten.</div>
        </div>
        <div class="moment">
          <div class="moment-num">04</div>
          <div class="moment-when">Nach Patienten­kontakt</div>
          <div class="moment-why">Schutz Deiner selbst und der nächsten Personen.</div>
        </div>
        <div class="moment">
          <div class="moment-num">05</div>
          <div class="moment-when">Nach Kontakt mit Patienten­umgebung</div>
          <div class="moment-why">Auch wenn Du den Patienten selbst nicht berührt hast.</div>
        </div>
      </div>
    </div>

    <details class="box laie">
      <summary>
        <div class="box-icon">?</div>
        <div>
          <span class="box-label">Was heißt das?</span>
          <span>Was bedeutet "aseptisch"?</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p><strong>Aseptisch</strong> heißt <em>keimfrei</em>. Eine aseptische
        Tätigkeit ist also eine, bei der keine Keime an die falsche Stelle gelangen
        dürfen &mdash; zum Beispiel beim Anlegen eines Venenzugangs, beim Wechseln eines
        Wundverbands oder beim Umgang mit einem Katheter. Alles, was in den Körper
        hinein oder an offene Wunden geht.</p>
      </div>
    </details>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Rechtliche Grundlage und Evidenz der 5 Momente</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Die "5 Momente" sind seit 2009 WHO-Standard und werden in Deutschland
        durch die <strong>KRINKO-Empfehlung zur Händehygiene</strong>
        (Bundesgesundheitsblatt 9/2016) sowie die <strong>TRBA 250</strong>
        operationalisiert. Verbindlichkeit entsteht über <strong>§ 23 IfSG</strong>
        und die BioStoffV &mdash; Abweichungen sind haftungsrechtlich relevant.</p>
        <p>Die Compliance-Rate liegt in deutschen Studien zwischen 40 und 60 %.
        Moment 1 (vor Patientenkontakt) wird am häufigsten übersehen, Moment 3
        (nach Körperflüssigkeiten) am zuverlässigsten eingehalten. Das ist
        intuitiv, aber epidemiologisch genau die falsche Reihenfolge.</p>
      </div>
    </details>

    <h2 class="section"><span class="num">2.</span>Wie desinfiziere ich richtig?</h2>

    <p>Technik und Dauer entscheiden. Zu wenig Mittel, zu wenig Zeit oder ausgelassene
    Areale &mdash; und die Maßnahme ist wirkungslos. Die häufigsten Fehler: zu wenig
    Mittel auf den Händen, Fingerkuppen und Daumen vergessen, zu kurze Einwirkzeit.</p>

    <div class="technique">
      <div class="technique-head">
        <div class="technique-title">Standard-Einreibemethode nach EN 1500</div>
        <div class="technique-timer">⏱ Mindestens 30 Sekunden</div>
      </div>
      <ol class="step-list">
        <li><div class="step-body">
          <div class="step-action">Ausreichend Mittel in die hohle Hand geben</div>
          <div class="step-note">3 bis 5 ml &mdash; so viel, dass die Hände 30 Sekunden lang feucht bleiben.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Handflächen aufeinander reiben</div>
          <div class="step-note">Fläche auf Fläche, gründlich verteilen.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Rechte Handfläche über linken Handrücken, und umgekehrt</div>
          <div class="step-note">Finger miteinander verschränkt.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Handflächen gegeneinander, Finger gespreizt und verschränkt</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Fingerrücken in der gegenüberliegenden Hand reiben</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Daumen umfassen und einreiben</div>
          <div class="step-note">Beidseitig. Daumen werden am häufigsten vergessen.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Fingerkuppen kreisend in der gegenüberliegenden Handfläche</div>
          <div class="step-note">Hier sitzen die meisten Kontaktkeime.</div>
        </div></li>
      </ol>
    </div>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <div class="alert-title">Niemals nasse Hände desinfizieren</div>
        <div class="alert-body">Wasser verdünnt das Desinfektionsmittel und senkt seine Wirksamkeit. Wenn Du gerade gewaschen hast: gut abtrocknen, dann desinfizieren.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">3.</span>Waschen oder desinfizieren?</h2>

    <p class="pullquote">Händedesinfektion ersetzt Händewaschen in fast allen Situationen &mdash; und sie ist hautfreundlicher.</p>

    <p>Das überrascht viele. Die Intuition sagt: Wasser und Seife sind gründlicher.
    Epidemiologisch stimmt das nicht. Desinfektionsmittel wirken schneller,
    zuverlässiger gegen relevante Erreger und belasten die Haut weniger als häufiges
    Waschen &mdash; vorausgesetzt, die Technik stimmt.</p>

    <h3 class="subsection">Wann doch waschen?</h3>
    <ul class="clean">
      <li>Bei sichtbarer Verschmutzung</li>
      <li>Nach dem Toilettengang</li>
      <li>Vor und nach dem Essen</li>
      <li>Bei Kontakt mit sporenbildenden Erregern (z.&nbsp;B. <em>Clostridium difficile</em>, Norovirus)</li>
    </ul>

    <h3 class="subsection">Die richtige Reihenfolge am Dienstbeginn</h3>
    <ol class="clean">
      <li><strong>Waschen</strong> &mdash; falls nötig</li>
      <li><strong>Hautschutz auftragen</strong> &mdash; vor Dienstbeginn</li>
      <li><strong>Hygienische Händedesinfektion</strong> &mdash; vor jedem Patientenkontakt</li>
      <li><strong>Hautpflege</strong> &mdash; erst nach Dienstende</li>
    </ol>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Wirkstoffspektrum moderner Händedesinfektionsmittel</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Die Wirkstoffkennzeichnung folgt der DGHM-/VAH-Listung:</p>
        <ul>
          <li><strong>Bakterizid</strong> &mdash; wirkt gegen vegetative Bakterien.</li>
          <li><strong>Levurozid</strong> &mdash; wirkt gegen Hefepilze.</li>
          <li><strong>Begrenzt viruzid</strong> &mdash; behüllte Viren (Influenza, SARS-CoV-2, HIV, HBV).</li>
          <li><strong>Begrenzt viruzid PLUS</strong> &mdash; zusätzlich Adeno-, Noro- und Rotaviren.</li>
          <li><strong>Viruzid</strong> &mdash; alle klinisch relevanten Viren inkl. Polio und Papillom.</li>
        </ul>
        <p>Bei unklarer Erregerlage: mindestens <em>begrenzt viruzid</em>. Bei
        Norovirus-Ausbrüchen zwingend <em>begrenzt viruzid PLUS</em>.</p>
      </div>
    </details>

    <!-- PRAXIS-FRAGE -->
    <div class="praxis" data-praxis='{"correct":"b","feedback":{"a":"Das wäre Moment 4 der WHO — aber Du kommst gerade erst an. Vor dem Zimmer war Deine eigentliche Entscheidung.","b":"Genau. Moment 1 der WHO: vor Patientenkontakt. Auch wenn Du Frau B. „nur kurz\\" beobachten willst — sobald Du das Zimmer betrittst, desinfizierst Du.","c":"Moment 5 ist trotzdem Pflicht, weil Du zwangsläufig die Umgebung berührst (Türklinke, Bettrand, Monitor). In der Praxis ist „vorher\\" sicherer als „nachher\\".","d":"Waschen ist in dieser Situation nicht nötig und würde Deine Haut unnötig belasten. Desinfizieren reicht — und ist schneller, schonender und wirksamer."}}'>
      <div class="praxis-label">Praxis-Frage · Lektion 1.2</div>
      <div class="praxis-scenario">Du betrittst das Patienten­zimmer. Frau B. liegt im Bett, schläft, hat einen Venenzugang. Du willst sie nur kurz beobachten.</div>
      <p class="praxis-prompt">Was ist jetzt der richtige erste Schritt?</p>
      <div class="praxis-options">
        <button class="praxis-opt" data-key="a">
          <span class="praxis-opt-letter">A</span>
          <span>Ich prüfe den Puls und desinfiziere mir danach die Hände.</span>
        </button>
        <button class="praxis-opt" data-key="b">
          <span class="praxis-opt-letter">B</span>
          <span>Ich desinfiziere mir vor dem Betreten des Zimmers die Hände.</span>
        </button>
        <button class="praxis-opt" data-key="c">
          <span class="praxis-opt-letter">C</span>
          <span>Nur wenn ich Frau B. wirklich berühre, ist eine Desinfektion nötig.</span>
        </button>
        <button class="praxis-opt" data-key="d">
          <span class="praxis-opt-letter">D</span>
          <span>Ich gehe zuerst Händewaschen und betrete dann das Zimmer.</span>
        </button>
      </div>
      <div class="praxis-reveal"></div>
    </div>
  `,

  "m1l3": `
    <p class="lesson-lede">
      Persönliche Schutzausrüstung &mdash; kurz PSA &mdash; ist das, was zwischen Dir und
      den biologischen Gefährdungen Deines Dienstes steht. Diese Lektion beantwortet
      die vier Fragen: Wer, Wann, Wie, Womit.
    </p>

    <h2 class="section"><span class="num">1.</span>Was zur PSA gehört</h2>

    <ul class="clean">
      <li><strong>Handschuhe</strong> &mdash; Einmalhandschuhe aus Nitril oder Latex</li>
      <li><strong>Mund-Nasen-Schutz / FFP2</strong> &mdash; je nach Erregersituation</li>
      <li><strong>Schutzkittel</strong> &mdash; bei erwartbarem Kontakt mit Körperflüssigkeiten</li>
      <li><strong>Schutzbrille / Gesichtsschild</strong> &mdash; bei Spritzgefahr</li>
      <li><strong>Kopfhaube</strong> &mdash; in bestimmten Bereichen (z.&nbsp;B. Intensivstation)</li>
    </ul>

    <h2 class="section"><span class="num">2.</span>Wann PSA?</h2>

    <p><strong>Immer beim Betreten eines Zimmers mit bekannter Erregersituation.</strong>
    Und <strong>immer beim Verlassen</strong> des Zimmers neu anziehen &mdash; also:
    rein mit frischer PSA, raus ohne, draußen neue anlegen für den nächsten Raum.</p>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>
        <div class="alert-title">PSA ist kein Dauerzubehör</div>
        <div class="alert-body">Handschuhe sind eine Einmalanwendung, kein "Handersatz". Wer mit denselben Handschuhen von Patient zu Patient geht, verteilt Erreger &mdash; das Gegenteil von Schutz.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">3.</span>Die Reihenfolge beim Anlegen</h2>

    <div class="technique">
      <div class="technique-head">
        <div class="technique-title">PSA anlegen &mdash; in dieser Reihenfolge</div>
      </div>
      <ol class="step-list">
        <li><div class="step-body">
          <div class="step-action">Hände desinfizieren</div>
          <div class="step-note">Immer zuerst. PSA auf kontaminierte Hände wäre sinnlos.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Schutzkittel anlegen</div>
          <div class="step-note">Rücken schließen, Ärmel bis zum Handgelenk.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Mund-Nasen-Schutz / FFP2</div>
          <div class="step-note">Nasenbügel anpassen, Dichtsitz prüfen.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Ggf. Schutzbrille oder Gesichtsschild</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">Einmalhandschuhe als Letztes</div>
          <div class="step-note">Über die Ärmelbündchen ziehen, nicht darunter.</div>
        </div></li>
      </ol>
    </div>

    <h3 class="subsection">Beim Ausziehen: Reihenfolge umgekehrt, aber achtsam</h3>
    <p>Die Außenseite der PSA ist potenziell kontaminiert. Beim Ausziehen darf sie
    weder Deine Haut noch Deine Kleidung berühren. Am besten: Kittel und Handschuhe
    zuerst abstreifen und gleichzeitig einrollen, dann Brille, dann Maske.
    Abschließend: Händedesinfektion.</p>

    <div class="praxis" data-praxis='{"correct":"b","feedback":{"a":"Fast richtig, aber zwischen den Zimmern musst Du komplett wechseln — nicht nur die Handschuhe.","b":"Richtig. Jedes Zimmer ist eine eigene Einheit. Komplett neue PSA vor dem Betreten, und beim Verlassen alles verwerfen.","c":"Das führt zu Kreuzkontamination — Erreger aus Raum A gelangen so in Raum B.","d":"Nur bei bestimmten Erregern (z.B. MRSA) wäre das zusätzlich nötig — die Grundregel ist ein kompletter PSA-Wechsel."}}'>
      <div class="praxis-label">Praxis-Frage · Lektion 1.3</div>
      <div class="praxis-scenario">Du hast gerade Frau A. im Zimmer 12 versorgt. Herr B. in Zimmer 14 wartet auf seine Medikamentengabe.</div>
      <p class="praxis-prompt">Was machst Du mit der PSA auf dem Weg von Zimmer 12 zu Zimmer 14?</p>
      <div class="praxis-options">
        <button class="praxis-opt" data-key="a"><span class="praxis-opt-letter">A</span><span>Handschuhe wechseln, den Rest behalte ich an.</span></button>
        <button class="praxis-opt" data-key="b"><span class="praxis-opt-letter">B</span><span>Alles komplett ausziehen, Händedesinfektion, dann frische PSA vor Zimmer 14 anziehen.</span></button>
        <button class="praxis-opt" data-key="c"><span class="praxis-opt-letter">C</span><span>Mit der gleichen PSA weitergehen &mdash; sie ist ja frisch von vor zehn Minuten.</span></button>
        <button class="praxis-opt" data-key="d"><span class="praxis-opt-letter">D</span><span>Ich dusche mich schnell, dann neue PSA.</span></button>
      </div>
      <div class="praxis-reveal"></div>
    </div>
  `,

  "m1l4": `
    <p class="lesson-lede">
      Pflegekräfte haben ein signifikant höheres Risiko für Hauterkrankungen &mdash;
      häufiges Desinfizieren, Handschuhe, Reinigungsmittel. Hautschutz und
      Hautpflege sind zwei verschiedene Dinge, die beide gebraucht werden.
    </p>

    <h2 class="section"><span class="num">1.</span>Der Unterschied</h2>

    <h3 class="subsection">Hautschutzcreme</h3>
    <p>Schützt die Haut <strong>vor</strong> schädlichen Einflüssen: Wasser,
    Desinfektionsmittel, Reinigungsmittel. Sie bildet eine Barriere und wird
    <em>vor</em> dem Dienst aufgetragen.</p>

    <h3 class="subsection">Hautpflegecreme</h3>
    <p>Regeneriert die Haut <strong>nach</strong> Belastung. Sie befeuchtet,
    spendet Lipide, unterstützt die Regeneration. Sie wird <em>nach</em> dem
    Dienst aufgetragen &mdash; oder privat zwischendurch.</p>

    <div class="pullquote">
      Hautschutz vor Dienstbeginn. Hautpflege nach Dienstende.
      Beides, nicht entweder-oder.
    </div>

    <h2 class="section"><span class="num">2.</span>Warum das wichtig ist</h2>

    <p>Intakte Haut ist die erste Barriere gegen Infektionen &mdash; für Dich und
    für die Menschen, die Du betreust. Rissige, gereizte, ekzematöse Haut ist
    kein kosmetisches Problem. Sie ist ein Infektionsrisiko, für alle Beteiligten.</p>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Berufsdermatose als BG-relevante Erkrankung</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Hauterkrankungen durch beruflichen Kontakt (<em>Berufsdermatose</em>) sind
        in der BK-Liste unter <strong>Nr. 5101</strong> als anerkannte Berufskrankheit
        aufgeführt. Die Meldung an die Berufsgenossenschaft
        macht die behandelnde Hautärztin oder der behandelnde Hautarzt.</p>
        <p>Für Pflegeeinrichtungen gilt der <strong>Hautarztverfahren</strong>-Prozess
        (HAV): Bei frühen Anzeichen kann eine spezialisierte dermatologische Behandlung
        zu Lasten der BG angestoßen werden &mdash; präventiv, bevor eine Chronifizierung
        eintritt.</p>
      </div>
    </details>

    <h2 class="section"><span class="num">3.</span>Die Reihenfolge</h2>

    <div class="technique">
      <div class="technique-head"><div class="technique-title">Hände-Ablauf im Dienst</div></div>
      <ol class="step-list">
        <li><div class="step-body">
          <div class="step-action">1. Waschen</div>
          <div class="step-note">Nur wenn nötig &mdash; sichtbare Verschmutzung, Toilette, Essen.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">2. Hautschutz auftragen</div>
          <div class="step-note">Vor Dienstbeginn. Einmal am Tag reicht für den Schutzfilm.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">3. Hygienische Händedesinfektion</div>
          <div class="step-note">Vor jedem Patientenkontakt und in allen WHO-Momenten.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">4. Hautpflege</div>
          <div class="step-note">Nach Dienstende. Abends, privat. Ergibt die Regeneration.</div>
        </div></li>
      </ol>
    </div>
  `,

  "m1l5": `
    <p class="lesson-lede">
      Erreger sind nicht gleich Erreger. Wer die wichtigsten Gruppen, Übertragungswege
      und die Infektionskette kennt, kann gezielt schützen &mdash; sich selbst und
      die betreuten Menschen.
    </p>

    <h2 class="section"><span class="num">1.</span>Die fünf Erregerarten</h2>

    <ul class="clean">
      <li><strong>Bakterien</strong> &mdash; eigenständige Lebewesen mit eigenem Stoffwechsel</li>
      <li><strong>Viren</strong> &mdash; keine Lebewesen, vermehren sich nur in Wirtszellen</li>
      <li><strong>Pilze</strong> &mdash; z.&nbsp;B. Candida, Aspergillen</li>
      <li><strong>Parasiten</strong> &mdash; z.&nbsp;B. Krätzmilben, Läuse</li>
      <li><strong>Protozoen</strong> &mdash; einzellige Parasiten</li>
    </ul>

    <details class="box laie">
      <summary>
        <div class="box-icon">?</div>
        <div>
          <span class="box-label">Was heißt das?</span>
          <span>Unterschied Bakterien und Viren &mdash; der Kurzfakt</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p><strong>Bakterien</strong> leben. Sie haben einen eigenen Stoffwechsel,
        brauchen Nahrung und vermehren sich durch Teilung. Unter dem Mikroskop sind
        sie rund, stäbchenförmig, spiralig oder fädig. Antibiotika wirken gegen
        Bakterien.</p>
        <p><strong>Viren</strong> leben nicht. Sie sind quasi nur Bauanleitungen
        (DNA oder RNA in einer Proteinhülle) und brauchen eine fremde Zelle, um
        sich zu vervielfältigen. Deshalb wirken Antibiotika <em>nicht</em> gegen
        Viren &mdash; da ist nichts Lebendiges, das sie angreifen könnten.</p>
      </div>
    </details>

    <h2 class="section"><span class="num">2.</span>Die Infektionskette</h2>

    <p>Damit ein Erreger vom einen zum anderen kommt, braucht es fünf Glieder &mdash;
    die <strong>Infektionskette</strong>. Fehlt ein Glied, gibt's keine Übertragung.
    Das ist die Kernidee von Hygiene: die Kette an einer Stelle brechen.</p>

    <div class="moments">
      <div class="moments-header">
        <div class="moments-kicker">Infektionskette</div>
        <h3 class="moments-title">Fünf Glieder, eins reicht zum Brechen.</h3>
      </div>
      <div class="moments-grid">
        <div class="moment">
          <div class="moment-num">01</div>
          <div class="moment-when">Quelle</div>
          <div class="moment-why">Wo der Erreger sitzt: Wunde, Sekret, Oberfläche.</div>
        </div>
        <div class="moment">
          <div class="moment-num">02</div>
          <div class="moment-when">Erreger</div>
          <div class="moment-why">Bakterium, Virus, Pilz, Parasit.</div>
        </div>
        <div class="moment">
          <div class="moment-num">03</div>
          <div class="moment-when">Übertragungsweg</div>
          <div class="moment-why">Kontakt, Tröpfchen, Aerosol, fäkal-oral.</div>
        </div>
        <div class="moment">
          <div class="moment-num">04</div>
          <div class="moment-when">Wirt</div>
          <div class="moment-why">Mensch, der empfänglich ist (geschwächt, immun?).</div>
        </div>
        <div class="moment">
          <div class="moment-num">05</div>
          <div class="moment-when">Reaktion</div>
          <div class="moment-why">Infektion, Erkrankung, ggf. weiterer Erregerträger.</div>
        </div>
      </div>
    </div>

    <h2 class="section"><span class="num">3.</span>Wenn Du selbst krank bist</h2>

    <p>Die vielleicht wichtigste Regel in diesem Modul: <strong>Komme nicht krank
    zur Arbeit.</strong> Als Sitzwache oder Reisebegleiterin bist Du in engem Kontakt
    mit Menschen, deren Immunsystem oft nicht belastbar ist. Eine "harmlose Erkältung"
    bei Dir kann für die betreute Person lebensgefährlich werden.</p>

    <h3 class="subsection">Tätigkeitsverbot nach IfSG §§ 42, 43</h3>
    <p>Bei folgenden Symptomen besteht automatisch ein Tätigkeitsverbot für den
    Umgang mit Lebensmitteln &mdash; und bei uns für den direkten Patientenkontakt:</p>

    <ul class="clean">
      <li>Übelkeit, Erbrechen, Durchfall</li>
      <li>Bauchschmerzen, "Magen-Darm-Beschwerden"</li>
      <li>Fieber, Schüttelfrost</li>
      <li>Gelbfärbung von Haut oder Augäpfeln</li>
      <li>offene oder nässende Wunden</li>
    </ul>

    <div class="callout">
      <span class="callout-label">So gehst Du vor, wenn Du krank bist</span>
      <div class="callout-body">Sag uns Bescheid, <strong>bevor</strong> der Dienst beginnt &mdash; per Anruf oder WhatsApp an 0174 3409116. Wir finden Ersatz &mdash; das ist unser Problem, nicht Deins. Deine Gesundheit und die unserer Klient:innen ist wichtiger als eine nicht abgesagte Schicht.</div>
    </div>
  `,

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODUL 2 · ARBEITSSICHERHEIT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "m2l1": `
    <p class="lesson-lede">
      Der Zustand des Sicherseins &mdash; so definiert der Duden Sicherheit.
      Im Dienst bedeutet das: Gefährdungen erkennen, bevor sie zu Unfällen werden.
    </p>

    <h2 class="section"><span class="num">1.</span>Um wessen Sicherheit geht es?</h2>

    <p>Bei einer Schicht sind immer mindestens drei Sicherheiten im Blick:</p>
    <ul class="clean">
      <li><strong>Die der betreuten Person</strong> &mdash; unser offensichtlicher Auftrag</li>
      <li><strong>Deine eigene</strong> &mdash; ohne die wäre der Rest nicht möglich</li>
      <li><strong>Die von Angehörigen, Pflegekräften, Mitpatient:innen</strong> &mdash; manchmal übersehen</li>
    </ul>

    <h2 class="section"><span class="num">2.</span>Typische Gefährdungen</h2>

    <h3 class="subsection">Sturzgefahr</h3>
    <p>Besonders bei Menschen mit kognitiven Einschränkungen, Demenz, nach OP oder
    bei Blutdruckschwankungen. Klingel in Reichweite, Brille auf dem Nachttisch,
    Schuhe am Bett &mdash; Kleinigkeiten, die Stürze verhindern.</p>

    <h3 class="subsection">Eigen- und Fremdgefährdung</h3>
    <p>In der psychiatrischen Einzelbetreuung häufigster Grund für die Sitzwache.
    Achte auf: Zupfen an Zugängen, Wandern, Unruhe, verbale oder körperliche
    Aggression. Dokumentieren, ruhig ansprechen, Pflegefachkraft informieren.</p>

    <h3 class="subsection">Deine eigenen Risiken</h3>
    <ul class="clean">
      <li><strong>Stich- und Schnittverletzungen</strong> &mdash; Kanülen, Skalpelle, kaputte Ampullen</li>
      <li><strong>Rücken</strong> &mdash; falsches Heben, ungünstige Körperpositionen</li>
      <li><strong>Infektionen</strong> &mdash; siehe Modul 1</li>
      <li><strong>Psychische Belastung</strong> &mdash; Sterbebegleitung, Aggression, lange Nächte</li>
    </ul>

    <div class="callout">
      <span class="callout-label">Wichtig</span>
      <div class="callout-body">Bei Unsicherheit: immer die Pflegefachkraft informieren und Rücksprache halten. "Lieber einmal zu viel gefragt als einmal zu wenig" gilt uneingeschränkt.</div>
    </div>
  `,

  "m2l2": `
    <p class="lesson-lede">
      Die eigene Körperhaltung am Patienten ist ein unterschätzter Faktor &mdash;
      für Deine Gesundheit und für die Sicherheit der betreuten Person.
    </p>

    <h2 class="section"><span class="num">1.</span>Grundregeln</h2>

    <ul class="clean">
      <li><strong>Nah am Patienten arbeiten</strong>, nicht über größere Distanzen beugen</li>
      <li><strong>Breitbeiniger Stand</strong> für Stabilität</li>
      <li><strong>Aus den Beinen heben</strong>, nicht aus dem Rücken</li>
      <li><strong>Lasten körpernah</strong> tragen</li>
      <li><strong>Rumpf nicht verdrehen</strong> &mdash; stattdessen mit den Füßen drehen</li>
    </ul>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <div class="alert-title">Bett in die richtige Höhe bringen</div>
        <div class="alert-body">Pflegebetten sind höhenverstellbar. Nutze das. Ein zu tiefes Bett ist der häufigste Grund für Rückenschmerzen nach einem Dienst. Beim Arbeiten auf Oberschenkelhöhe; beim Mobilisieren auf Hüfthöhe.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">2.</span>Sichere Positionen am Patienten</h2>

    <p>Beim Unterstützen beim Aufstehen, beim Wechseln der Position, beim Essen
    anreichen &mdash; in allen Situationen gilt: Deine Körperhaltung beeinflusst die
    Sicherheit der Person.</p>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Kinästhetik in der Pflege</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Kinästhetik ist ein Bewegungskonzept, das darauf abzielt, die eigene
        Bewegung und die des Patienten miteinander zu koordinieren &mdash; statt
        "dagegen" zu arbeiten. Zentrale Ideen: Gewicht wahrnehmen und verlagern
        statt heben; Bewegungen in Bahnen führen statt zu blockieren; die
        Selbstaktivität der Person nutzen.</p>
        <p>Ein Kinästhetik-Kurs ist kein Pflichtmodul, aber sehr zu empfehlen für
        alle, die regelmäßig beim Aufstehen oder Umsetzen unterstützen.</p>
      </div>
    </details>
  `,

  "m2l3": `
    <p class="lesson-lede">
      Freiheitsentziehende Maßnahmen (FEM) sind ein heikles Thema &mdash; rechtlich,
      ethisch und praktisch. In diesem Modul geht es darum, was FEM sind, wann sie
      überhaupt zulässig sind und wie Du Dich als Sitzwache verhältst.
    </p>

    <h2 class="section"><span class="num">1.</span>Was ist eine FEM?</h2>

    <p>Jede Maßnahme, die eine Person daran hindert, sich frei zu bewegen &mdash;
    auch wenn sie das möchte. Das Wort "entziehend" ist ernst gemeint: hier wird
    ein Grundrecht eingeschränkt.</p>

    <h3 class="subsection">Typische FEM in der Praxis</h3>
    <ul class="clean">
      <li>Bettgitter, die die Person nicht selbst öffnen kann</li>
      <li>Fixiergurte, Zwangsjacken, Rückhaltegurte</li>
      <li>Stecktische an Rollstühlen, unter den Tisch geschobene Rollstühle</li>
      <li>Feststellbremse am Rollstuhl, wenn die Person sie nicht lösen kann</li>
      <li>Abschließen von Türen, Trickschlösser</li>
      <li>Sedierende Medikamente</li>
      <li>GPS-Tracker, wenn sie die Bewegungsfreiheit einschränken</li>
      <li>Wegnahme von Kleidung, Brille, Gehhilfe</li>
      <li>Psychischer Druck, Drohungen, Tricks wie "falsche Bushaltestellen"</li>
    </ul>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <div class="alert-title">FEM sind grundsätzlich unzulässig</div>
        <div class="alert-body">Erlaubt nur mit wirksamer Einwilligung der Person selbst oder mit Genehmigung des Betreuungsgerichts (§ 1831 BGB). Eine Pflegefachkraft kann eine FEM nicht einfach anordnen. Als Sitzwache <strong>wendest Du nie selbst eine FEM an</strong> &mdash; auch nicht &bdquo;nur kurz&ldquo;. Fällt Dir eine auf, sprich die Pflegefachkraft an und gib uns Bescheid.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">2.</span>Was ist Deine Rolle?</h2>

    <p>Gerade eine Sitzwache ist häufig <strong>die Alternative</strong> zu einer FEM.
    Die Idee: eine Person ist unruhig, gefährdet sich selbst &mdash; statt sie zu
    fixieren, sitzt jemand dabei, spricht, beruhigt, greift nur im Notfall ein.</p>

    <div class="pullquote">Die Sitzwache ist das menschliche Alternativangebot zur Fixierung.</div>

    <h2 class="section"><span class="num">3.</span>Was wenn die Person aufstehen will?</h2>

    <p>Das ist der Alltag. Die betreute Person möchte aufstehen, ist aber
    sturzgefährdet, verwirrt oder hat Zugänge, die beim Aufstehen gezogen werden
    könnten.</p>

    <h3 class="subsection">Deine Möglichkeiten, in dieser Reihenfolge</h3>
    <ol class="clean">
      <li><strong>Ansprechen.</strong> "Herr S., möchten Sie etwas? Ich bin da." Oft reicht das.</li>
      <li><strong>Ursache suchen.</strong> Durst? Toilette? Schmerz? Angst? Wenn ja: helfen.</li>
      <li><strong>Begleiten.</strong> Wenn Aufstehen sinnvoll ist, sicher begleiten &mdash; nicht dagegen arbeiten.</li>
      <li><strong>Pflegefachkraft informieren.</strong> Bei zunehmender Unruhe, bei unklarer Ursache, bei Schmerzen.</li>
      <li><strong>Dokumentieren.</strong> Was war die Situation, was hast Du getan, wie hat die Person reagiert?</li>
    </ol>

    <div class="praxis" data-praxis='{"correct":"c","feedback":{"a":"Zu restriktiv. Das wäre eine freiheitsentziehende Maßnahme, die Du nicht anordnen darfst — und die in dieser Situation auch nicht gerechtfertigt wäre.","b":"Die Bindung wäre eine Fixierung durch Dich — klar unzulässig, auch in der Absicht zu helfen.","c":"Genau so. Deine Rolle ist da zu sein, zu beruhigen, zu begleiten. Wenn es sich zuspitzt, informierst Du die Pflegefachkraft.","d":"Entfernen kannst Du nicht — das muss eine Pflegefachkraft entscheiden. Informieren ist richtig, aber nicht der erste Schritt."}}'>
      <div class="praxis-label">Praxis-Frage · Lektion 2.3</div>
      <div class="praxis-scenario">Frau M., 82, nachts unruhig. Sie zieht am Venenzugang, will aufstehen. Was ist Deine erste Handlung?</div>
      <p class="praxis-prompt">Welche Reaktion ist die angemessenste?</p>
      <div class="praxis-options">
        <button class="praxis-opt" data-key="a"><span class="praxis-opt-letter">A</span><span>Ich ziehe das Bettgitter hoch, damit sie nicht aufsteht.</span></button>
        <button class="praxis-opt" data-key="b"><span class="praxis-opt-letter">B</span><span>Ich binde ihre Hand locker am Bettrand fest, damit sie nicht zieht.</span></button>
        <button class="praxis-opt" data-key="c"><span class="praxis-opt-letter">C</span><span>Ich setze mich zu ihr, spreche mit ruhiger Stimme, halte ihre Hand und suche nach der Ursache.</span></button>
        <button class="praxis-opt" data-key="d"><span class="praxis-opt-letter">D</span><span>Ich entferne den Venenzugang, damit sie nichts mehr ziehen kann.</span></button>
      </div>
      <div class="praxis-reveal"></div>
    </div>
  `,

  "m2l4": `
    <p class="lesson-lede">
      Bei LPR sind alle versichert &mdash; auch Ehrenamtliche. Das heißt aber nicht,
      dass Unfälle folgenlos bleiben. Die richtige Meldung ist der Schlüssel.
    </p>

    <h2 class="section"><span class="num">1.</span>Was gilt als Arbeitsunfall?</h2>
    <p>Ein Arbeitsunfall ist jeder Unfall, der im Zusammenhang mit der versicherten
    Tätigkeit steht. Dazu zählen auch <strong>Wegeunfälle</strong> &mdash; Unfälle
    auf dem direkten Weg zur oder von der Tätigkeit.</p>

    <h2 class="section"><span class="num">2.</span>Dein Vorgehen</h2>
    <ol class="clean">
      <li><strong>Sofort</strong> &mdash; Erstversorgung, ggf. Notruf 112, Notaufnahme oder Durchgangsarzt (D-Arzt), je nach Schwere. Sag dort, dass es ein Arbeitsunfall im Ehrenamt war.</li>
      <li><strong>Zeitnah</strong> &mdash; Meldung an den Vorstand. Wir machen die <em>Unfallanzeige</em> an die BGW.</li>
      <li><strong>Danach</strong> &mdash; schriftliche Dokumentation: Was, Wann, Wo, Wie, Wer war dabei?</li>
    </ol>

    <div class="callout">
      <span class="callout-label">Auch kleine Unfälle melden</span>
      <div class="callout-body">Ein Stich mit einer Kanüle scheint oft harmlos, kann aber in Wochen oder Monaten Folgen haben (Hep B, Hep C, HIV). Nur eine <em>dokumentierte</em> Erstmeldung schützt Deinen Versicherungsanspruch. Deshalb meldest Du auch Bagatellverletzungen dem Vorstand &mdash; wir halten sie fest.</div>
    </div>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Nadelstichverletzung &mdash; der Ablauf nach TRBA 250</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <ol>
          <li>Blutung fördern (nicht aussaugen) &mdash; 1 bis 2 Minuten</li>
          <li>Wunde mit Desinfektionsmittel spülen</li>
          <li>Sofort in die Notaufnahme oder zum D-Arzt &mdash; die Entscheidung über eine PEP eilt</li>
          <li>Laborkontrolle (Hep B, Hep C, HIV) &mdash; ggf. PEP (Post-Expositions-Prophylaxe) innerhalb von 2 Stunden</li>
          <li>Indexpatient identifizieren und &mdash; mit Einwilligung &mdash; serologisch testen</li>
          <li>Meldung an den Vorstand, Unfallanzeige an die BGW</li>
          <li>Kontrolluntersuchungen nach 6 Wochen, 3 Monaten, 6 Monaten</li>
        </ol>
      </div>
    </details>
  `,

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODUL 3 · ORGANISATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "m3l1": `
    <p class="lesson-lede">
      Du dokumentierst Deinen Einsatz im Handy, in der Einsatz-App im Portal. Die App
      hält fest, dass Du da warst, was Du gemacht hast und dass Du übergeben hast.
      Die medizinische Dokumentation macht die Pflege &mdash; nicht Du.
    </p>

    <h2 class="section"><span class="num">1.</span>Die Grundregeln</h2>

    <ul class="clean">
      <li><strong>Einsatz beginnen</strong>, wenn Du wirklich am Bett bist &mdash; nicht schon unterwegs</li>
      <li><strong>Pausen</strong> startest und beendest Du über den Pause-Knopf</li>
      <li><strong>Besonderheiten</strong> zuerst persönlich der Pflegekraft sagen, dann in der App bestätigen</li>
      <li><strong>Keine Namen, keine Diagnosen</strong> in die App. Einzelheiten schreibt die Pflege in die Patientenakte</li>
      <li><strong>Im Notfall</strong> zuerst die Pflege rufen (Patientenklingel) &mdash; die App kommt danach</li>
      <li>Das gilt in der Klinik genauso wie bei einem <strong>Privatauftrag</strong> in einer Pflegeeinrichtung</li>
    </ul>

    <div class="callout">
      <span class="callout-label">Merke</span>
      <div class="callout-body"><strong>Die App merkt sich &mdash; die Pflege dokumentiert.</strong> Die App ersetzt nie das Gespräch mit der Pflegekraft.</div>
    </div>

    <h2 class="section"><span class="num">2.</span>Was Du antippst</h2>

    <h3 class="subsection">Beobachtet</h3>
    <p>Unruhe, Schmerzäußerung, Übelkeit / Unwohlsein, wollte aufstehen / Sturzgefahr,
    Gerät hat alarmiert, Wunsch des Patienten, Sonstiges &mdash; dazu ein freiwilliges,
    kurzes Stichwort wie &bdquo;durch Gespräch gut ablenkbar&ldquo;.</p>

    <h3 class="subsection">Gemacht</h3>
    <p>Anwesenheit &amp; Sichtkontakt (immer), Gespräche geführt, vorgelesen,
    Orientierung gegeben, beruhigt, Gesellschaft bei der Mahlzeit.</p>

    <details class="box laie">
      <summary>
        <div class="box-icon">?</div>
        <div>
          <span class="box-label">Was heißt das?</span>
          <span>Warum keine Diagnosen in der App?</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Wir leisten Betreuung, keine Pflege. Die Dokumentation über Krankheit und
        Behandlung führt die Klinik oder Einrichtung. Eine zweite, parallele Doku würde
        Widersprüche erzeugen &mdash; und Gesundheitsdaten gehören nicht auf Dein Handy.</p>
      </div>
    </details>

    <h2 class="section"><span class="num">3.</span>Eine Beobachtung ist keine Sackgasse</h2>

    <p>Antippen allein reicht nicht. Erst das Gespräch mit der Pflege schließt den Kreis:
    beobachten &rarr; der Pflegekraft persönlich sagen &rarr; in der App bestätigen
    &bdquo;Pflege wurde informiert&ldquo;.</p>

    <div class="pullquote">
      Problem UND Reaktion festhalten. Immer.
    </div>

    <h3 class="subsection">Gut vs. schlecht</h3>
    <ul class="clean">
      <li>❌ Unruhe angetippt &mdash; und niemandem gesagt.</li>
      <li>✅ Unruhe angetippt, der Pflegekraft gesagt, &bdquo;Pflege wurde informiert&ldquo; bestätigt.</li>
    </ul>

    <h2 class="section"><span class="num">4.</span>Zum Dienstende</h2>

    <ul class="clean">
      <li>Du tippst an, was Du gemacht hast</li>
      <li>Dann gibst Du das Handy der Pflegekraft: Sie bestätigt Zeiten und Übergaben mit ihrer <strong>Unterschrift</strong></li>
      <li>Kann niemand unterschreiben, wählst Du den Grund aus &mdash; und gibst uns kurz Bescheid</li>
      <li>Die Zeiten müssen den echten Zeiten entsprechen. Nachträglich ändern geht nicht.</li>
    </ul>
  `,

  "m3l2": `
    <p class="lesson-lede">
      Wie kommst Du an Deine Dienste? Über das Mitgliederportal
      mein.lebenpflegenreisen.de &mdash; unterstützt durch Telefon und WhatsApp.
    </p>

    <h2 class="section"><span class="num">1.</span>Dein Weg ins Portal</h2>

    <p>Unter <strong>&bdquo;Mein Weg&ldquo;</strong> siehst Du jederzeit, wo Du stehst:
    Konto anlegen, Kennenlernen mit BZR-Abfrage, Mitgliedsantrag mit Datenschutz und
    Schweigepflicht, Einführung mit Belehrung nach § 43 IfSG und Unterlagen,
    Einarbeitung &mdash; dann schaltet Dich der Vorstand frei.</p>

    <h2 class="section"><span class="num">2.</span>Verfügbarkeit und Dienste</h2>

    <p>Nach der Freigabe trägst Du im Portal ein, wann Du kannst. Daraus werden
    Dienste zugeteilt oder von den Kliniken gebucht. Deine Dienste siehst Du in
    &bdquo;Mein Bereich&ldquo; &mdash; am Diensttag mit dem Knopf &bdquo;Einsatz beginnen&ldquo;.</p>

    <div class="callout">
      <span class="callout-label">Tipp</span>
      <div class="callout-body">Trag Deine Verfügbarkeit so früh wie möglich ein. Kurzfristige Anfragen kommen per WhatsApp oder Telefon.</div>
    </div>

    <h2 class="section"><span class="num">3.</span>Wenn Du krank wirst</h2>

    <p>Sofort melden &mdash; beim Verein, nicht erst beim Einsatzort. Ruf an oder schreib
    per WhatsApp an <strong>0174 3409116</strong>. Wir kümmern uns um den Ersatz.</p>
  `,

  "m3l3": `
    <p class="lesson-lede">
      Wer wann wie erreicht werden will &mdash; darüber gibt diese Lektion Auskunft.
      Regel Nummer eins: Wichtiges lieber einmal zu viel sagen als einmal zu wenig.
    </p>

    <h2 class="section"><span class="num">1.</span>Kanäle bei LPR</h2>

    <ul class="clean">
      <li><strong>Telefon und WhatsApp</strong> &mdash; 0174 3409116, für alles Dringende, Absagen, kurze Rückfragen</li>
      <li><strong>E-Mail</strong> &mdash; sitzwachen@, ehrenamt@ oder vorstand@lebenpflegenreisen.de</li>
      <li><strong>Mitgliederportal</strong> &mdash; mein.lebenpflegenreisen.de: Dein Weg, Verfügbarkeit, Dienste, Einsatz-App, Anträge</li>
      <li><strong>Lernplattform</strong> &mdash; lernen.lebenpflegenreisen.de: diese Schulung zum Nachschlagen</li>
      <li><strong>Handbuch</strong> &mdash; lernen.lebenpflegenreisen.de/handbuch: zum Nachschlagen im Dienst, auch ohne Netz</li>
      <li><strong>Vereinsbüro</strong> &mdash; Treibende Kraft, Turmstraße 10, 10559 Berlin</li>
    </ul>

    <h2 class="section"><span class="num">2.</span>WhatsApp-Gruppen</h2>

    <p>Nach der Einführung laden wir Dich in die Vereinsgruppen ein. Die Gruppen sind
    familiär &mdash; trotzdem gilt: <strong>keine Patientendaten, keine Namen, keine
    Diagnosen</strong> per WhatsApp.</p>

    <h2 class="section"><span class="num">3.</span>Im Notfall</h2>

    <p>Im Dienst holst Du zuerst Hilfe vor Ort: die Pflege (Patientenklingel) oder den
    Notruf 112. Danach rufst Du uns an.</p>

    <details class="box laie">
      <summary>
        <div class="box-icon">?</div>
        <div>
          <span class="box-label">Was heißt &bdquo;dringend&ldquo;?</span>
          <span>Wann rufe ich sofort beim Verein an?</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <ul>
          <li>Unfall oder gesundheitlicher Notfall beim Dienst</li>
          <li>Aggression oder Bedrohungssituation</li>
          <li>Du kannst nicht zum Dienst kommen</li>
          <li>Der Einsatzort ist ernstlich unzufrieden oder schickt Dich weg</li>
        </ul>
        <p>Alles andere geht auch per Nachricht oder Mail.</p>
      </div>
    </details>
  `,

  "m4l1": `
    <p class="lesson-lede">
      Sitzwache und Reisebegleitung überschneiden sich in vielem &mdash; aber sie sind
      nicht dasselbe. In diesem Modul geht es um das Spezifische der Reise.
    </p>

    <h2 class="section"><span class="num">1.</span>Was ist gleich?</h2>

    <ul class="clean">
      <li>Aufmerksame Begleitung einer Person mit Pflege- oder Unterstützungsbedarf</li>
      <li>PPP-Framework als Haltung</li>
      <li>Dokumentationspflicht</li>
      <li>Hygiene, Arbeitssicherheit, Kommunikationsregeln</li>
      <li>Versicherungsschutz durch den Verein</li>
    </ul>

    <h2 class="section"><span class="num">2.</span>Was ist anders?</h2>

    <h3 class="subsection">Der Ort verändert sich</h3>
    <p>Bei der Sitzwache bist Du meist in einem definierten Umfeld (Zimmer,
    Krankenhaus, Wohnung). Bei der Reise wechselt der Ort ständig. Das bedeutet:
    Du musst in jeder neuen Umgebung neu Gefährdungen einschätzen.</p>

    <h3 class="subsection">Die Dauer ist länger</h3>
    <p>Sitzwachen dauern meist Stunden, Reisen Tage oder Wochen. Das verändert die
    Belastung, auch die emotionale. Pausen werden wichtiger, Rückzugsräume ebenso.</p>

    <h3 class="subsection">Die Ziele sind anders</h3>
    <p>Sitzwache: Sicherheit, Überwachung. Reise: Teilhabe, Erlebnis. Der Grundton
    ist oft heiterer, entspannter &mdash; aber die Verantwortung bleibt ernst.</p>

    <div class="pullquote">Reisebegleitung ist Sitzwache plus Wetterwechsel.</div>

    <h3 class="subsection">Die Rollenklärung ist komplizierter</h3>
    <p>Du bist nicht Reiseleiter:in, nicht Familienmitglied, nicht Freund:in. Aber
    Du bist auch nicht nur Dienstleister:in. In der Praxis entstehen Nähe-Situationen,
    die gut reflektiert werden müssen.</p>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>Rolle und Grenze bei längeren Begleitungen</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Professionelle Nähe ist kein Oxymoron, sondern ein Balanceakt. Über Tage
        entsteht zwangsläufig eine Beziehung &mdash; die darf warm sein, darf persönlich
        sein. Aber die <em>Rolle</em> bleibt klar: Du bist in einer professionellen
        Funktion unterwegs, nicht privat.</p>
        <p>Indikatoren, dass die Rolle kippt:</p>
        <ul>
          <li>Du übernimmst Entscheidungen, die eigentlich der Person oder ihren Angehörigen zustehen</li>
          <li>Du tauschst außerhalb des Dienstes intensive Nachrichten aus</li>
          <li>Du fühlst Dich verantwortlich für Dinge, die nicht in Deinem Auftrag liegen</li>
          <li>Du teilst persönliche Probleme mit der begleiteten Person</li>
        </ul>
        <p>Bei Unsicherheit: sprich mit dem Vorstand.</p>
      </div>
    </details>
  `,

  "m4l2": `
    <p class="lesson-lede">
      Auf Reisen ist der nächste Pflegedienst nicht um die Ecke. Ein guter Notfallplan
      wird einmal vor der Reise erstellt &mdash; und im Ernstfall entscheidet er über
      schnelle oder chaotische Reaktion.
    </p>

    <h2 class="section"><span class="num">1.</span>Was Du <em>vor</em> der Reise hast</h2>

    <ul class="clean">
      <li><strong>Die Notfall-Kontaktliste</strong> der begleiteten Person &mdash; Angehörige, Hausarzt, spezialisierte Ärzt:innen</li>
      <li><strong>Den aktuellen Medikationsplan</strong> &mdash; als Ausdruck und als Foto</li>
      <li><strong>Die Krankenversicherungskarte</strong> und ggf. Auslandskrankenversicherungsunterlagen</li>
      <li><strong>Einwilligungen</strong> der Person oder Betreuer:in für medizinische Maßnahmen</li>
      <li><strong>Deine Notfallnummer</strong> bei LPR &mdash; 0174 3409116</li>
      <li><strong>Die Reise-Route</strong> mit nächstgelegenen Krankenhäusern</li>
    </ul>

    <h2 class="section"><span class="num">2.</span>Das LPR-Notfallprotokoll</h2>

    <p>Bei einem medizinischen Notfall auf Reisen gehst Du in dieser Reihenfolge vor:</p>

    <div class="technique">
      <div class="technique-head">
        <div class="technique-title">Notfall im Ausland oder auf Reisen</div>
      </div>
      <ol class="step-list">
        <li><div class="step-body">
          <div class="step-action">1. Notruf</div>
          <div class="step-note">In Europa einheitlich <strong>112</strong>. Außerhalb Europas länderspezifisch &mdash; ist Teil der Vorab-Recherche.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">2. Erste Hilfe leisten</div>
          <div class="step-note">Nur im Rahmen Deiner Qualifikation. Lebensrettende Maßnahmen, stabile Seitenlage, Reanimation.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">3. Angehörige informieren</div>
          <div class="step-note">Sobald die akute Phase durch Rettungsdienst übernommen wurde.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">4. LPR informieren</div>
          <div class="step-note">Auch wenn alles wieder im Griff scheint. Wir müssen Versicherung informieren und ggf. Weiterreise organisieren.</div>
        </div></li>
        <li><div class="step-body">
          <div class="step-action">5. Dokumentieren</div>
          <div class="step-note">Was, wann, wo, wer. So detailliert wie möglich, so schnell wie möglich.</div>
        </div></li>
      </ol>
    </div>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <div class="alert-title">Rettungsrückholung</div>
        <div class="alert-body">Bei schweren Erkrankungen im Ausland kann eine <strong>medizinische Rückholung</strong> nötig werden. Das läuft über die Auslandskrankenversicherung der Person (nicht der gesetzlichen KV!). Kontaktdaten gehören in die Notfall-Mappe.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">3.</span>Nicht-medizinische Notfälle</h2>

    <p>Verlorene Dokumente, Diebstahl, Verspätungen, Unterbringungsprobleme &mdash;
    das kommt alles vor. Auch hier: Ruhe bewahren, LPR informieren, alles
    dokumentieren. Wir helfen &mdash; aber Du bist vor Ort entscheidend.</p>
  `,

  "m4l3": `
    <p class="lesson-lede">
      Angehörige sind auf Reisen oft besorgter als bei einer Sitzwache zuhause.
      Wie viel Kommunikation ist hilfreich, wie viel ist zu viel? Und wo liegt
      die Grenze zur Überforderung?
    </p>

    <h2 class="section"><span class="num">1.</span>Der Kommunikationsplan vor der Reise</h2>

    <p>Klärt vor der Reise mit den Angehörigen:</p>
    <ul class="clean">
      <li><strong>Wie oft</strong> wollen sie Rückmeldung? Einmal täglich? Alle zwei Tage? Nur bei Vorfällen?</li>
      <li><strong>Welche Form?</strong> Kurze WhatsApp? Foto? Telefon? Mail?</li>
      <li><strong>Wer ist</strong> der Hauptansprechpartner &mdash; um "Kommunikationsrundfunk" zu vermeiden</li>
      <li><strong>Was darfst Du berichten?</strong> Die Person selbst hat ein Recht auf Privatsphäre, auch gegenüber Angehörigen</li>
    </ul>

    <div class="callout">
      <span class="callout-label">Wichtig</span>
      <div class="callout-body">Im Mittelpunkt steht die begleitete Person &mdash; auch wenn Angehörige den Auftrag erteilt haben oder bezahlen. Was Du weitergibst, stimmst Du mit ihr ab (oder, wenn sie das nicht mehr kann, mit ihrer gesetzlichen Vertretung) &mdash; auch wenn Angehörige fragen oder drängen.</div>
    </div>

    <h2 class="section"><span class="num">2.</span>Tonlage</h2>

    <p>Angehörige spüren oft intuitiv, wenn etwas nicht passt &mdash; auch aus
    einem beiläufigen Satz. Deshalb: bewusst entscheiden, was Du sagst. Nicht
    beschönigen, aber auch nicht dramatisieren.</p>

    <h3 class="subsection">Beispiel: schlechter Tag</h3>
    <p>Die Person hatte einen schlechten Tag &mdash; müde, kaum Energie, hat wenig
    gegessen. Nichts Dramatisches, aber auch nicht großartig.</p>

    <ul class="clean">
      <li>❌ "Alles super, kein Problem." (Verharmlost, die Angehörigen erfahren es später indirekt)</li>
      <li>❌ "Heute war ein harter Tag. Sie hat kaum gegessen, wirkt erschöpft, es geht ihr nicht gut." (Alarmiert, obwohl nichts Dramatisches passiert)</li>
      <li>✅ "Heute war sie etwas müder als gestern, hat nur mittags richtig gegessen. Morgen ruhigeres Programm, dann schauen wir." (Ehrlich, proportional, zeigt dass Du es wahrnimmst)</li>
    </ul>

    <h2 class="section"><span class="num">3.</span>Wenn Angehörige stressig werden</h2>

    <p>Angehörige handeln oft aus Sorge &mdash; das muss man einordnen. Wenn die
    Kommunikation aber eskaliert (zu viele Anrufe, Druck, Mikromanagement): LPR
    informieren. Wir können vermitteln, Du musst das nicht allein tragen.</p>
  `,

  "m4l4": `
    <p class="lesson-lede">
      Versicherung, Haftung, Vollmachten &mdash; das sind die juristischen Rahmenpfähle
      Deiner Reisebegleitung. Diese Lektion gibt Dir einen Überblick, was
      eingerichtet ist und was Du unterwegs brauchst.
    </p>

    <h2 class="section"><span class="num">1.</span>Versicherungsschutz bei LPR</h2>

    <p>Alle Ehrenamtlichen bei LPR sind abgesichert &mdash; durch
    den Verein versichert. Konkret:</p>

    <ul class="clean">
      <li><strong>Gesetzliche Unfallversicherung</strong> &mdash; Arbeits- und Wegeunfälle</li>
      <li><strong>Vereinshaftpflicht</strong> &mdash; Schäden, die Du während der Tätigkeit verursachen könntest</li>
      <li><strong>Nicht versichert: Behandlungspflege</strong> &mdash; Medikamente, Injektionen, Wundversorgung. Das machst Du auch auf Reisen nicht.</li>
    </ul>

    <div class="alert">
      <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>
        <div class="alert-title">Persönliche Gegenstände sind nicht automatisch abgedeckt</div>
        <div class="alert-body">Für Deine Wertsachen &mdash; Smartphone, Kamera, Schmuck &mdash; greift die Vereinshaftpflicht nicht. Überlege, ob eine Reisegepäckversicherung sinnvoll ist.</div>
      </div>
    </div>

    <h2 class="section"><span class="num">2.</span>Vollmachten und Einwilligungen</h2>

    <p>Bevor eine Reise losgeht, müssen bestimmte rechtliche Dokumente geklärt sein:</p>

    <ul class="clean">
      <li><strong>Einverständnis zur Reisebegleitung</strong> &mdash; von der begleiteten Person oder ihrem Betreuer</li>
      <li><strong>Einwilligung in Notfallmaßnahmen</strong> &mdash; idealerweise schriftlich</li>
      <li><strong>Vorsorgevollmacht / Patientenverfügung</strong> &mdash; falls vorhanden, Kopie mitführen</li>
      <li><strong>Reisepass / Personalausweis</strong> &mdash; gültig bis nach Rückkehr</li>
    </ul>

    <h2 class="section"><span class="num">3.</span>Deine Haftungsgrenzen</h2>

    <p>Als Reisebegleiterin haftest Du nicht persönlich für Dinge, die außerhalb
    Deines Einflusses liegen &mdash; Verspätungen, Wetter, Krankheitsverlauf. Du
    haftest für <em>grobe Fahrlässigkeit</em> oder Vorsatz. Das heißt praktisch:
    solange Du die Standards aus dieser Schulung einhältst, bist Du rechtlich gut
    aufgestellt.</p>

    <details class="box fach">
      <summary>
        <div class="box-icon">+</div>
        <div>
          <span class="box-label">Für Fachkräfte · Vertiefung</span>
          <span>§ 276 BGB &mdash; Grobe Fahrlässigkeit</span>
        </div>
        <span class="chevron">▾</span>
      </summary>
      <div class="box-content">
        <p>Grobe Fahrlässigkeit setzt voraus, dass die im Verkehr erforderliche
        Sorgfalt in besonders schwerem Maße verletzt wurde. Also: nicht nur einen
        Fehler gemacht, sondern <em>offensichtlich und schwer</em> gegen Regeln
        verstoßen, die einer in der Situation bekannt sein mussten.</p>
        <p>Bei einfacher Fahrlässigkeit trägt in der Regel die Haftpflichtversicherung
        des Vereins. Bei grober Fahrlässigkeit oder Vorsatz kann persönliche Haftung
        folgen &mdash; deshalb ist sorgfältige Dokumentation so wichtig: sie belegt,
        dass Du sorgfältig gehandelt hast.</p>
      </div>
    </details>

    <div class="callout">
      <span class="callout-label">Bottom Line</span>
      <div class="callout-body">Wenn Du diese Schulung absolviert hast, die Standards anwendest und sorgfältig dokumentierst, bist Du rechtlich solide unterwegs. LPR als Verein trägt die Organisationsverantwortung, Du die Durchführungsverantwortung.</div>
    </div>
  `,

};

// ═══════════════════════════════════════════════════════════════
// QUIZ QUESTIONS
// ═══════════════════════════════════════════════════════════════
const QUIZZES = {
  "m1q": {
    title: "Quiz: Hygiene",
    description: "Fünf Fragen zum Hygienemodul. Bestanden ab 4 von 5 richtigen Antworten.",
    passThreshold: 4,
    questions: [
      {
        q: "Wie viele WHO-Momente der Händehygiene gibt es?",
        options: ["Drei", "Vier", "Fünf", "Sieben"],
        correct: 2,
      },
      {
        q: "Was ist die korrekte Reihenfolge am Dienstbeginn, wenn mehreres zusammenkommt?",
        options: [
          "Desinfizieren → Waschen → Hautschutz → Hautpflege",
          "Waschen → Hautschutz → Desinfizieren → Hautpflege",
          "Hautpflege → Waschen → Desinfizieren → Hautschutz",
          "Hautschutz → Waschen → Hautpflege → Desinfizieren",
        ],
        correct: 1,
      },
      {
        q: "Welche Aussage zum Unterschied Bakterien / Viren stimmt?",
        options: [
          "Bakterien und Viren sind beide Lebewesen mit eigenem Stoffwechsel",
          "Viren leben, Bakterien nicht",
          "Bakterien leben, Viren nicht &mdash; Viren brauchen eine Wirtszelle",
          "Bakterien vermehren sich nur in Wirtszellen",
        ],
        correct: 2,
      },
      {
        q: "Beim Verlassen eines Patientenzimmers: was tust Du mit der PSA?",
        options: [
          "Die Handschuhe bleiben an, der Rest wird entsorgt",
          "Alles bleibt an, bis ich mich im Dienstzimmer umziehe",
          "Komplett in diesem Raum verwerfen, danach Händedesinfektion",
          "Nur die Maske neu anziehen, der Rest ist noch gültig",
        ],
        correct: 2,
      },
      {
        q: "Bei welchem Symptom besteht ein Tätigkeitsverbot für Lebensmittelumgang nach IfSG?",
        options: [
          "Leichter Schnupfen ohne Fieber",
          "Müdigkeit und Kopfschmerzen",
          "Erbrechen, Durchfall, Fieber oder offene Wunden",
          "Trockene Haut an den Händen",
        ],
        correct: 2,
      },
    ],
  },

  "m2q": {
    title: "Quiz: Arbeitssicherheit",
    description: "Vier Fragen zum Arbeitsschutz. Bestanden ab 3 von 4 richtigen Antworten.",
    passThreshold: 3,
    questions: [
      {
        q: "Was ist bei der Arbeit am Patientenbett bezüglich der Bettenhöhe richtig?",
        options: [
          "Je tiefer, desto besser &mdash; so kommt die Person leichter aus dem Bett",
          "Beim Arbeiten auf Oberschenkelhöhe, beim Mobilisieren auf Hüfthöhe",
          "Die Bettenhöhe ist unwichtig, Hauptsache die Person liegt bequem",
          "Immer die maximale Höhe einstellen",
        ],
        correct: 1,
      },
      {
        q: "Was ist eine freiheitsentziehende Maßnahme (FEM)?",
        options: [
          "Nur das Anlegen von Fixiergurten zählt",
          "Jede Maßnahme, die eine Person daran hindert, sich frei zu bewegen &mdash; wenn sie das möchte",
          "Nur abschließbare Türen",
          "Nur sedierende Medikamente",
        ],
        correct: 1,
      },
      {
        q: "Frau M. ist nachts unruhig und zieht am Venenzugang. Was ist Deine erste Handlung?",
        options: [
          "Ich ziehe das Bettgitter hoch",
          "Ich rufe sofort den Rettungsdienst",
          "Ich setze mich zu ihr, spreche ruhig und suche die Ursache",
          "Ich entferne den Venenzugang",
        ],
        correct: 2,
      },
      {
        q: "Was tust Du bei einer Nadelstichverletzung?",
        options: [
          "Aussaugen und zur Tagesordnung übergehen",
          "Blutung fördern, Wunde desinfizieren, sofort Notaufnahme oder D-Arzt, dem Vorstand melden",
          "Warten, ob sich Symptome zeigen, erst dann melden",
          "Mit Wasser abspülen und weitermachen",
        ],
        correct: 1,
      },
    ],
  },

  "m3q": {
    title: "Quiz: Organisation",
    description: "Drei Fragen zur Dokumentation in der App und zur Kommunikation.",
    passThreshold: 2,
    questions: [
      {
        q: "Wann tippst Du in der App auf \"Einsatz beginnen\"?",
        options: ["Schon zuhause vor der Abfahrt", "Unterwegs in der Bahn", "Wenn Du wirklich am Bett bist", "Erst am Ende des Dienstes"],
        correct: 2,
      },
      {
        q: "Die Person äußert Schmerzen. Was ist richtig?",
        options: [
          "Schmerzäußerung antippen, sonst nichts",
          "Schmerzen mit Diagnose ins Stichwort schreiben",
          "Der Pflegekraft persönlich sagen und \"Pflege wurde informiert\" bestätigen",
          "Am Dienstende per WhatsApp an den Verein schreiben",
        ],
        correct: 2,
      },
      {
        q: "Du bist krank und hast morgen Dienst. Was tust Du?",
        options: [
          "Abwarten, vielleicht geht es morgen besser",
          "Sofort beim Verein anrufen oder per WhatsApp absagen",
          "Nur der Station Bescheid sagen",
          "Nach dem Dienst eine Mail schreiben",
        ],
        correct: 1,
      },
    ],
  },

  "m4q": {
    title: "Quiz: Reisebegleitung",
    description: "Vier Fragen zur Reisebegleitung.",
    passThreshold: 3,
    questions: [
      {
        q: "Was ist der Hauptunterschied zwischen Sitzwache und Reisebegleitung?",
        options: [
          "Bei der Reise ist keine Dokumentation nötig",
          "Die Hygieneregeln gelten auf Reisen nicht",
          "Ort, Dauer und Ziele unterscheiden sich &mdash; Grundprinzipien bleiben gleich",
          "Reisebegleitung ist Freizeitbetreuung",
        ],
        correct: 2,
      },
      {
        q: "Mit wem stimmst Du ab, was Du Angehörigen erzählst?",
        options: [
          "Mit niemandem &mdash; Angehörige dürfen alles wissen",
          "Mit der Krankenkasse",
          "Mit der begleiteten Person (oder ihrer gesetzlichen Vertretung)",
          "Mit dem Hausarzt",
        ],
        correct: 2,
      },
      {
        q: "Bei einem medizinischen Notfall auf Reisen &mdash; was ist Schritt eins?",
        options: [
          "Angehörige informieren",
          "Notruf wählen und Erste Hilfe leisten",
          "Den Verein anrufen",
          "Alles dokumentieren",
        ],
        correct: 1,
      },
      {
        q: "Persönliche Wertsachen (Dein Smartphone) auf Reisen &mdash; sind sie durch die Vereinshaftpflicht abgedeckt?",
        options: [
          "Ja, alles ist automatisch abgedeckt",
          "Nein &mdash; eine Reisegepäckversicherung wäre sinnvoll",
          "Nur bei Auslandsreisen",
          "Nur, wenn sie beruflich benutzt werden",
        ],
        correct: 1,
      },
    ],
  },

  "final": {
    title: "Abschlussprüfung",
    description: "Fünf Fragen aus allen Modulen. Bestanden ab 4 von 5 richtigen Antworten &mdash; dann bekommst Du Dein Zertifikat.",
    passThreshold: 4,
    questions: [
      {
        q: "Was ist die wirkungsvollste Einzelmaßnahme gegen nosokomiale Infektionen?",
        options: [
          "Antibiotikatherapie",
          "Hygienische Händedesinfektion",
          "Mundschutz",
          "Sterile Raumluft",
        ],
        correct: 1,
      },
      {
        q: "Ehrenamtspauschale nach § 3 Nr. 26a EStG &mdash; wie hoch ist der jährliche Freibetrag?",
        options: ["500 €", "960 €", "3.300 €", "Unbegrenzt"],
        correct: 1,
      },
      {
        q: "PPP bedeutet bei LPR:",
        options: [
          "Pflege, Planung, Praxis",
          "Purpose, Pulse, People",
          "Patient, Profession, Privatleben",
          "Prioritäten, Pflichten, Protokolle",
        ],
        correct: 1,
      },
      {
        q: "Eine Sitzwache ist das alternative Angebot zu welcher Maßnahme?",
        options: [
          "Zur Dokumentation",
          "Zur Fixierung",
          "Zur Medikamentengabe",
          "Zur Bettruhe",
        ],
        correct: 1,
      },
      {
        q: "Was gilt vor Gericht und deshalb auch für Dich als Merkregel?",
        options: [
          "\"Was nicht dokumentiert ist, ist nicht getan.\"",
          "\"Was gut gemeint ist, zählt.\"",
          "\"Mündliche Absprachen reichen.\"",
          "\"Nur Fachkräfte müssen dokumentieren.\"",
        ],
        correct: 0,
      },
    ],
  },
};

