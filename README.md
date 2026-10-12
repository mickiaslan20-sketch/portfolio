# Portfolio-Website – Mikkel Aslan

Moderne, schnelle Portfolio-Website für Webentwicklung und Freelancing.
Gebaut mit **Next.js, React, TypeScript, Tailwind CSS, Framer Motion** und **Lucide Icons**.

Alle Inhalte stehen in **einer einzigen Datei**: [`config/profile.ts`](config/profile.ts).
Du musst nichts am restlichen Code ändern, um Texte, Projekte oder Kontaktdaten anzupassen.

---

## Inhalt

1. [Was die Website kann](#1-was-die-website-kann)
2. [Persönliche Daten ändern](#2-persönliche-daten-ändern)
3. [Neues Projekt hinzufügen](#3-neues-projekt-hinzufügen)
4. [Kontaktformular einrichten](#4-kontaktformular-einrichten)
5. [Website online veröffentlichen](#5-website-online-veröffentlichen)
6. [Änderungen später veröffentlichen](#6-änderungen-später-veröffentlichen)
7. [Eigene Domain verbinden](#7-eigene-domain-verbinden)
8. [Auf dem eigenen Computer starten (optional)](#8-auf-dem-eigenen-computer-starten-optional)
9. [Impressum und Datenschutz](#9-impressum-und-datenschutz)
10. [Aufbau des Projekts](#10-aufbau-des-projekts)

---

## 1. Was die Website kann

- **Bereiche:** Start, Über mich, Leistungen, Technologien, Projekte, Arbeitsweise, Warum mit mir arbeiten?, Kontakt
- **Live-Check im Startbereich:** zeigt Besuchern echte Messwerte ihres Geräts – Ladezeit der Seite, Bildschirmbreite und Farbmodus
- **Dark Mode:** folgt automatisch der Systemeinstellung, umschaltbar über das Mond-/Sonnen-Symbol
- **Animationen:** kurze Ladeanimation beim ersten Besuch, dezente Einblendungen beim Scrollen
- **Navigation:** weiches Scrollen zu den Bereichen, Hervorhebung des aktuellen Bereichs, Menü für Smartphones
- **SEO:** Meta Tags, Open-Graph-Vorschaubild (wird automatisch erzeugt), Sitemap, robots.txt, strukturierte Daten für Google
- **Barrierefreiheit:** Tastaturbedienung, „Zum Inhalt springen“-Link, Screenreader-Texte, Rücksicht auf „Bewegung reduzieren“
- **Datenschutzfreundlich:** keine Cookies, kein Tracking, Schrift wird von der eigenen Domain geladen
- **Impressum und Datenschutzerklärung** als eigene Seiten

---

## 2. Persönliche Daten ändern

Öffne [`config/profile.ts`](config/profile.ts). Die Datei ist in Abschnitte unterteilt und kommentiert.

| Was du ändern willst | Wo in `profile.ts` |
| --- | --- |
| Name, Rolle, Slogan, Beschreibung | ganz oben: `name`, `role`, `tagline`, `description` |
| „Offen für neue Projekte“ ein/aus | `available: true` bzw. `false` |
| Steckbrief (Standort, Ausbildung, Alter …) | `location`, `education`, `experience`, `focus`, `age` |
| Texte im Bereich „Über mich“ | `about` |
| Leistungen | `services` |
| Technologien und Skills | `techStack` |
| Projekte | `projects` (siehe [Abschnitt 3](#3-neues-projekt-hinzufügen)) |
| Arbeitsschritte | `process` |
| Vorteile („Warum mit mir arbeiten?“) | `benefits` |
| E-Mail, Telefon, Antwortzeit | `contact` |
| GitHub, LinkedIn & Co. | `socials` |
| Impressum-Angaben | `legal` |
| Überschriften der Bereiche | `sections` |
| **Akzentfarbe** | unten bei `site`: `accentColor` |
| Titel und Beschreibung für Google | unten bei `site`: `seo` |

### Drei Regeln für fehlerfreie Änderungen

1. Texte stehen in Anführungszeichen: `"Mein Text"`
2. Nach jedem Eintrag folgt ein Komma: `location: "Rheinland-Pfalz",`
3. Listen stehen in eckigen Klammern: `items: ["HTML", "CSS"],`

Leere Angaben (`""`) werden auf der Website automatisch ausgeblendet. Beispiel: Mit `age: ""` erscheint kein Alter, mit `age: "18"` steht im Steckbrief „18 Jahre“.

### Beispiele

```ts
// Weiteres Social-Media-Profil
socials: [
  { label: "GitHub", url: "https://github.com/mickiaslan20-sketch" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/dein-name" },
],

// Akzentfarbe auf Grün ändern
accentColor: "#0F9D7A",
```

> **Tipp:** Wähle eine eher kräftige Akzentfarbe. Die Schrift auf den Buttons ist weiß und muss gut lesbar bleiben.

### Direkt auf GitHub bearbeiten (ohne Programme)

1. Öffne dein Repository auf github.com und klicke auf `config` → `profile.ts`.
2. Klicke oben rechts auf das **Stift-Symbol** („Edit this file“).
3. Ändere den Text.
4. Klicke auf **„Commit changes…“** und dann noch einmal auf **„Commit changes“**.

Ist die Website bereits veröffentlicht, wird sie danach automatisch aktualisiert (siehe [Abschnitt 6](#6-änderungen-später-veröffentlichen)).

---

## 3. Neues Projekt hinzufügen

### Schritt 1: Vorschaubild hochladen (optional)

- Mache einen Screenshot der Website, am besten **1600 × 1000 Pixel** (Seitenverhältnis 16:10).
- Benenne die Datei ohne Leerzeichen und Umlaute, z. B. `baeckerei-schmitt.jpg`.
- Auf GitHub: Öffne den Ordner `public/projects` → **„Add file“** → **„Upload files“** → Bild hineinziehen → **„Commit changes“**.

Ohne Bild zeigt die Website automatisch eine schlichte Vorschau im Stil eines Browserfensters.

### Schritt 2: Projekt in `profile.ts` eintragen

Kopiere diesen Block in die Liste `projects: [ … ]` und passe ihn an:

```ts
{
  title: "Bäckerei Schmitt",
  industry: "Lebensmittelhandwerk",
  description: "Neue Website mit Online-Speisekarte und Filialfinder. Die Seite lädt in unter einer Sekunde.",
  technologies: ["Next.js", "Tailwind CSS"],
  image: "/projects/baeckerei-schmitt.jpg",
  link: "https://www.baeckerei-schmitt.de",
  label: "Kundenprojekt",
},
```

| Feld | Bedeutung |
| --- | --- |
| `title` | Name des Projekts |
| `industry` | Branche des Kunden |
| `description` | 1–3 Sätze: Aufgabe, Lösung, Ergebnis |
| `technologies` | verwendete Technologien |
| `image` | Pfad zum Bild – beginnt mit `/projects/` |
| `link` | Adresse der Live-Website (leer lassen, wenn es keine gibt) |
| `label` | kleines Etikett, z. B. `"Kundenprojekt"` oder `"Konzeptprojekt"` |
| `inProgress` | `true`, solange das Projekt noch nicht fertig ist |

- Die Reihenfolge in der Liste ist die Reihenfolge auf der Website.
- Sobald du echte Projekte hast, lösche den Platzhalter „Aktuelles Projekt“.
- Bei einer ungeraden Anzahl erscheint automatisch eine Kachel „Ihr Projekt könnte das nächste sein.“

> **Ehrlich bleiben zahlt sich aus:** Kennzeichne eigene Übungs- oder Konzeptprojekte mit `label: "Konzeptprojekt"`. Kunden schätzen das mehr als vermeintliche Kundenprojekte.

---

## 4. Kontaktformular einrichten

**Ohne Einrichtung** funktioniert das Formular bereits: Es öffnet das E-Mail-Programm des Besuchers mit der fertig vorbereiteten Nachricht.

**Mit Formspree** (kostenloser Tarif verfügbar) landen Nachrichten direkt in deinem Postfach, ohne dass der Besucher sein E-Mail-Programm braucht:

1. Erstelle ein Konto auf [formspree.io](https://formspree.io).
2. Lege ein neues Formular an (z. B. „Portfolio“) und gib deine E-Mail-Adresse an.
3. Formspree zeigt dir eine Adresse wie `https://formspree.io/f/abcdwxyz`. Der letzte Teil (`abcdwxyz`) ist deine **Formular-ID**.
4. Trage sie in `config/profile.ts` ein:
   ```ts
   formspreeId: "abcdwxyz",
   ```
5. Schicke dir nach der Veröffentlichung eine Testnachricht. Beim ersten Mal bittet Formspree dich per E-Mail um eine Bestätigung.

Die Datenschutzerklärung erwähnt Formspree automatisch, sobald eine Formular-ID eingetragen ist.

---

## 5. Website online veröffentlichen

Der Weg: **Code auf GitHub → Hosting-Anbieter holt ihn sich → Website ist online.**

### Welcher Anbieter?

| | Netlify (empfohlen) | Vercel |
| --- | --- | --- |
| Kosten | kostenloser Tarif | kostenloser Tarif nur für **nicht-kommerzielle** Projekte |
| Für deine Portfolio-Website | geeignet | Website wirbt für deine Leistungen und zählt laut Vercel als kommerziell → kostenpflichtiger Pro-Tarif nötig |
| Next.js | wird automatisch erkannt | wird automatisch erkannt |

Deshalb beschreibt diese Anleitung **Netlify**. Prüfe die aktuellen Bedingungen trotzdem kurz bei der Anmeldung – Tarife ändern sich gelegentlich.

### Schritt 1: Code auf GitHub

Falls noch nicht geschehen:

1. Auf github.com oben rechts auf **„+“** → **„New repository“**.
2. Name: `portfolio`, Sichtbarkeit: **Public** (oder Private), **keine** README, .gitignore oder Lizenz hinzufügen → **„Create repository“**.
3. Auf der nächsten Seite auf den Link **„uploading an existing file“** klicken.
4. Den **Inhalt** des entpackten Projektordners hineinziehen (alle Dateien und Ordner, nicht den Ordner selbst).
5. Unten auf **„Commit changes“** klicken.

> Auf dem Mac sind Dateien, die mit einem Punkt beginnen (z. B. `.gitignore`), im Finder versteckt. Mit `Cmd + Shift + .` werden sie sichtbar. Fehlt `.gitignore` auf GitHub, ist das nicht schlimm.

### Schritt 2: Mit Netlify verbinden

1. Gehe auf [netlify.com](https://www.netlify.com) und registriere dich mit **„Sign up with GitHub“**.
2. Wähle **„Add new project“** → **„Import an existing project“** → **GitHub**.
3. Erlaube Netlify den Zugriff und wähle das Repository `portfolio`.
4. Die Einstellungen stehen bereits in der Datei `netlify.toml`. Nichts ändern, einfach auf **„Deploy“** klicken.
5. Nach etwa zwei Minuten ist die Website online unter einer Adresse wie `https://zufallsname.netlify.app`.
6. Unter **„Project configuration“** → **„Change project name“** kannst du einen schöneren Namen wählen, z. B. `mikkel-aslan` → `https://mikkel-aslan.netlify.app`.

Die Bezeichnungen der Buttons können sich bei Netlify leicht ändern – der Ablauf bleibt gleich.

### Alternative: Vercel (Pro-Tarif)

1. Auf [vercel.com](https://vercel.com) mit GitHub anmelden.
2. **„Add New…“** → **„Project“** → Repository `portfolio` importieren → **„Deploy“**.
3. In `config/profile.ts` bei `site` die Einstellung `hosting: "vercel"` setzen, damit die Datenschutzerklärung stimmt.

---

## 6. Änderungen später veröffentlichen

Jede Änderung, die du auf GitHub speicherst („Commit“), veröffentlicht Netlify automatisch. Nach ein bis zwei Minuten ist sie online.

- Im kostenlosen Netlify-Tarif verbraucht jede Veröffentlichung einen Teil des monatlichen Guthabens. Sammle kleine Änderungen deshalb lieber und speichere sie gemeinsam.
- Wird das Guthaben aufgebraucht, pausiert Netlify die Website bis zum nächsten Monat. Kosten entstehen im kostenlosen Tarif nicht.
- Enthält eine Änderung einen Fehler (z. B. ein fehlendes Komma), bricht die Veröffentlichung ab und **die alte Version bleibt online**. Unter „Deploys“ zeigt Netlify, in welcher Zeile der Fehler steckt.

---

## 7. Eigene Domain verbinden

Eine eigene Domain wie `mikkel-aslan.de` wirkt professioneller und ermöglicht eine passende E-Mail-Adresse.

1. Domain bei einem Anbieter deiner Wahl registrieren.
2. In Netlify unter **„Domain management“** → **„Add a domain“** die Domain eintragen und den Anweisungen folgen.
3. In `config/profile.ts` die Adresse eintragen:
   ```ts
   url: "https://www.mikkel-aslan.de",
   ```
4. Bei einer neuen E-Mail-Adresse auch `contact.email` anpassen.

---

## 8. Auf dem eigenen Computer starten (optional)

Nur nötig, wenn du am Code arbeiten und Änderungen vor der Veröffentlichung sehen möchtest.

1. [Node.js](https://nodejs.org) installieren (Version „LTS“, mindestens 20.9).
2. Projektordner in [VS Code](https://code.visualstudio.com) öffnen.
3. Terminal öffnen (**Terminal → Neues Terminal**) und eingeben:
   ```bash
   npm install
   npm run dev
   ```
4. Im Browser [http://localhost:3000](http://localhost:3000) öffnen. Änderungen erscheinen sofort.

Weitere Befehle:

| Befehl | Wirkung |
| --- | --- |
| `npm run build` | baut die fertige Website und zeigt Fehler an |
| `npm run start` | startet die gebaute Website |
| `npm run typecheck` | prüft den Code auf Tippfehler in Datentypen |

---

## 9. Impressum und Datenschutz

Wer in Deutschland eine Website geschäftlich nutzt, braucht ein Impressum und eine Datenschutzerklärung. Beide Seiten sind enthalten und füllen sich automatisch aus `profile.ts`.

**Bitte vor der Veröffentlichung prüfen:**

- [ ] Stimmen Name und Anschrift unter `legal`?
- [ ] Hast du eine Umsatzsteuer-ID? Dann bei `vatId` eintragen.
- [ ] Stimmt `site.hosting` mit deinem Anbieter überein (`"netlify"` oder `"vercel"`)?
- [ ] Datenschutzerklärung mit einem seriösen Generator oder einer Fachperson abgleichen. Die enthaltene Fassung ist eine sorgfältige Vorlage, aber keine Rechtsberatung.
- [ ] Neue Dienste (z. B. Statistik-Tools, eingebettete Karten oder Videos) immer auch in der Datenschutzerklärung ergänzen.

Den Text der Datenschutzerklärung findest du in `app/datenschutz/page.tsx`, das Impressum in `app/impressum/page.tsx`.

---

## 10. Aufbau des Projekts

```
portfolio/
├── config/
│   ├── profile.ts          ← ALLE Inhalte (hier änderst du Daten)
│   └── types.ts            ← Datentypen für profile.ts
├── app/
│   ├── layout.tsx          ← Grundgerüst, Schrift, Meta Tags, Dark Mode
│   ├── page.tsx            ← Startseite (Reihenfolge der Bereiche)
│   ├── globals.css         ← Farben, Ladeanimation, Grund-Styles
│   ├── impressum/          ← Impressum
│   ├── datenschutz/        ← Datenschutzerklärung
│   ├── opengraph-image.tsx ← Vorschaubild für Social Media
│   ├── icon.tsx            ← Favicon mit deinen Initialen
│   ├── sitemap.ts          ← Sitemap für Suchmaschinen
│   └── robots.ts           ← robots.txt
├── components/
│   ├── layout/             ← Header, Footer, Dark-Mode-Schalter, Ladeanimation
│   ├── sections/           ← die Bereiche der Startseite
│   └── ui/                 ← wiederverwendbare Bausteine (Buttons, Karten, Formular …)
├── lib/                    ← kleine Hilfsfunktionen
├── public/
│   └── projects/           ← Vorschaubilder deiner Projekte
└── netlify.toml            ← Einstellungen für die Veröffentlichung bei Netlify
```

### Häufige Erweiterungen

- **Neuen Bereich hinzufügen:** Datei in `components/sections/` anlegen (eine bestehende als Vorlage kopieren) und in `app/page.tsx` einbinden.
- **Reihenfolge der Bereiche ändern:** Zeilen in `app/page.tsx` verschieben.
- **Neues Symbol für Leistungen:** Symbol auf [lucide.dev](https://lucide.dev) aussuchen, in `components/ui/icons.ts` eintragen und den Namen in `config/types.ts` bei `IconName` ergänzen.
- **Farben für Hell- und Dunkelmodus:** in `app/globals.css` unter `:root` und `.dark`.
