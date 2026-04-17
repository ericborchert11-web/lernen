# Setup-Anleitung · GitHub Pages + Squarespace-Embed

**Ziel:** Den Prototyp live auf einer URL haben und als iframe in Squarespace einbetten.
**Zeit:** ca. 10 Minuten.

---

## Schritt 1 · Repository auf GitHub anlegen (2 Min)

1. Auf **github.com** einloggen
2. Rechts oben auf **„+"** → **„New repository"**
3. Einstellungen:
   - **Repository name:** `lpr-schulungsraum`
   - **Description:** „Interaktiver Prototyp des LPR-Schulungsraums"
   - **Public** auswählen _(Pflicht für GitHub Pages im kostenlosen Tarif)_
   - **Add a README file:** NICHT anhaken _(wir haben eine)_
   - **Add .gitignore:** NICHT anhaken
   - **License:** keine
4. **„Create repository"** klicken

---

## Schritt 2 · Files hochladen (2 Min)

Auf der frischen Repo-Seite:

1. **„uploading an existing file"** anklicken
2. Die drei Dateien aus dem ZIP reinziehen:
   - `index.html`
   - `README.md`
   - `.gitignore`
3. Unten: **„Commit changes"** klicken _(Default-Message „Add files via upload" ist ok)_

---

## Schritt 3 · GitHub Pages aktivieren (2 Min)

1. Im Repo oben auf **„Settings"**
2. Links im Menü auf **„Pages"**
3. Unter **„Build and deployment"**:
   - **Source:** „Deploy from a branch"
   - **Branch:** `main` + `/ (root)` → **„Save"**
4. Seite neu laden nach 30–60 Sekunden — oben erscheint ein grüner Balken mit der URL:

```
https://DEIN-USERNAME.github.io/lpr-schulungsraum/
```

**Teste die URL:** einfach anklicken. Der Prototyp sollte laden. Falls noch nicht: 2 Minuten warten und neu laden, der erste Build dauert manchmal kurz.

---

## Schritt 4 · In Squarespace einbetten (3 Min)

1. In Squarespace die Seite öffnen, wo der Schulungsraum hin soll
2. **„+ Add Block"** → **„Code"** auswählen
3. Im Code-Feld den folgenden Block einfügen:

```html
<div style="max-width: 1200px; margin: 0 auto;">
  <iframe src="https://DEIN-USERNAME.github.io/lpr-schulungsraum/"
          width="100%"
          height="900"
          style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);"
          loading="lazy"
          title="LPR Schulungsraum">
  </iframe>
</div>
```

4. **WICHTIG:** `DEIN-USERNAME` durch Deinen GitHub-Benutzernamen ersetzen
5. **„Save"** oder **„Apply"** klicken
6. Seite **publizieren** oder in der Vorschau testen

---

## Schritt 5 · Prüfen

- URL direkt öffnen: läuft?
- Squarespace-Seite öffnen: iframe zeigt den Prototyp?
- Login → Meine Kurse → Lektion → Quiz durchklicken: alles interaktiv?

---

## Updates später

Wenn Du eine neue Version des HTML hast:

1. Im Repo auf **`index.html`** klicken
2. Oben rechts Bleistift-Icon → **„Edit this file"**
3. Alten Inhalt löschen, neuen reinkopieren
4. Unten **„Commit changes"**
5. GitHub Pages baut automatisch neu (30–60 Sek.)
6. Squarespace-iframe zeigt automatisch die neue Version — **kein Neu-Einbetten nötig**

---

## Fehlersuche

**Die URL zeigt 404:**
GitHub Pages braucht nach dem Aktivieren 1–2 Minuten. Kurz warten und neu laden.

**iframe ist leer oder zeigt Fehler:**
- URL im iframe exakt wie die GitHub-Pages-URL (mit `/` am Ende)?
- GitHub-Repo ist **Public**, nicht Private?

**iframe ist zu klein / Scrollbalken innerhalb des iframes:**
`height="900"` anpassen — z.B. auf `1100` oder `1400`. Alternativ: `min-height: 100vh;` im style-Attribut.

**Squarespace-Header überdeckt den iframe oben:**
Im iframe-div oben noch `padding-top: 20px;` ergänzen.
