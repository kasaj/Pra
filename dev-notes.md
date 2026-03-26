# Samobyti - Pomocný soubor pro vývoj

## Stack (MVP)
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Data:** localStorage
- **Grafy:** Recharts

## Struktura stránek

### 1. DNES (TODAY) - výchozí
- Seznam aktivit (emoji + popis)
- Časové: Sobě (3min), Pohybu (30min), Meditace (15min), Rozjímání (15min)
- Nečasové: Komentář, Objetí, Výzva, Malý krok v chaosu
- Flow: klik → hodnocení před (1-5 hvězd + poznámka) → [odpočet] → hodnocení po

### 2. PROUD (TIME)
- Graf delta (před vs. po)
- Heat mapa aktivit
- Zvyky (3+/týden) a zakotvená praxe (21+ dní)

### 3. ZÁKLAD (INFO)
- Statický filozofický text

## Navigace
- Spodní lišta: TODAY | TIME | INFO
- Bez hamburger menu, plochá struktura

## Vizuální styl
- Barvy: okrová, hliněná, krémová, tmavě zelená
- Typografie: serif nadpisy, sans-serif tělo
- Mobile-first
- Minimalistické, klidné

## Datový model
```typescript
interface Activity {
  id: string;
  type: ActivityType;
  startedAt: string; // ISO8601
  completedAt: string;
  durationMinutes: number;
  ratingBefore: 1 | 2 | 3 | 4 | 5;
  ratingAfter: 1 | 2 | 3 | 4 | 5;
  noteBefore: string;
  noteAfter: string;
}

type ActivityType =
  | "sobe" | "pohyb" | "meditace" | "rozjimani"
  | "komentar" | "objeti" | "vyzva" | "krok";
```

## TODO
- [ ] Inicializace projektu (Vite + React + TS)
- [ ] Tailwind konfigurace
- [ ] Komponenty aktivit
- [ ] Timer komponenta
- [ ] Hodnocení (hvězdy)
- [ ] localStorage persistence
- [ ] Stránka PROUD s grafem
- [ ] Stránka ZÁKLAD
- [ ] Responzivní navigace
