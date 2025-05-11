# Spareplan UI

Case oppgave for Firi

## Beskrivelse

Dette prosjektet er en løsning på en frontend-hjemmeoppgave gitt av Firi. Oppgaven går ut på å implementere et brukergrensesnitt for en spareplan, hvor brukeren kan sette opp automatiske kjøp av kryptovaluta med norske kroner i faste intervaller. 

Løsningen inneholder et stegvis skjema hvor brukeren kan konfigurere spareplanen sin, se en oppsummering av investeringen og bekrefte sparingen.

## Funskjonalitet

- Velg ønsket kryptovaluta (Bitcoin som standard)
- Angi varighet på spareplan (3 måneder, 6 måneder, 1 år, 2 år)
- Velg intervall for sparing (daglig, ukentlig, månedlig)
- Angi kjøpsbeløp i NOK per intervall
- Se estimert total investering basert på valgte parametere
- Validasjon av input felter
- Brukerens valg blir lagret mellom stegene

## Teknologi

- React, Typescript

## For å sette opp prosjektet lokalt:

1. Klon prosjektet:

   ```sh
   git clone https://github.com/sheimaAli/spareplan-ui.git
   ```

2. Gå inn i prosjektmappen

   ```sh
   cd spareplan-ui
   ```

3. Installer nødvendige dependencies

   ```sh
   npm install
   ```

4. kjør prosjektet

   ```sh
   npm run dev
   ```

5. Åpne prosjektet i nettleseren

```sh
  http://localhost:5173/
```
