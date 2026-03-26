# Samobyti — Specifikace webové aplikace

## Kontext a filozofický rámec

Aplikace vychází z přesvědčení, že člověk potřebuje ukotvenou přesahující podstatu (samobyti) a schopnost pustit se s proudem života namísto lpění na pomíjivosti. Kvalita vědomí se nebuduje informacemi, ale opakovanou praxí malých kroků, které sledují přirozenou posloupnost: myšlenka → slovo → čin → zvyk → charakter → osud.

Aplikace neslouží jako zdroj obsahu. Je tichým průvodcem, prostorem pro zastavení a návrat k sobě. Nic neučí — pomáhá naslouchat tomu, co člověk už v sobě nese.

Biologicky je praxe ukotvena v nervovém systému: pozornost, dech a pohyb přímo regulují autonomní nervový systém, snižují kortizol, posilují parasympatikus a umožňují integraci těla a mysli. Psychologicky pracuje s archetypy, stínem (Jung), přijetím (buddhismus, stoicismus) a sebeurčením (Maslow, Frankl). Filozoficky stojí na průniku bytí (Heidegger), přítomnosti (Tao) a etiky středu (Aristotelova mesotés — srdce mezi hlavou a emocí).

-----

## Architektura aplikace — plochá struktura (3 stránky)

### 1. DNES — Prostor praxe

Centrální obrazovka aplikace. Uživatel vidí dostupné typy aktivit a může zahájit kteroukoli z nich. Před zahájením a po dokončení aktivity zaznamená svůj stav na škále 1–5 hvězd.

Aktivity si uzovatel muze modifikovat a pridavat vlastni. Vizualizace emoji ikona vetsi a pod ni popis. 

Po stisknuti aktivity ohodnoceni a mozny popis, pokud je aktivita casove omezena, zacne odpocitavani a po dokonceni ceka na hodnoceni a vystup. Aktivity bez hodnoceni necekaji a umoznuji zaznam ihned.

**Typy časových aktivit:**

| Název     | Délka  | Popis                                                              |
| --------- | ------ | ------------------------------------------------------------------ |
| Sobě      | 3 min  | Zastavení, dech, check-in s tělem a náladou bez hodnocení          |
| Pohybu    | 30 min | Protažení, posilování nebo chůze s důrazem na vnímání těla zevnitř |
| Meditace  | 15 min | Řízená nebo volná meditace, klid nervové soustavy                  |
| Rozjímání | 15 min | Tiché sezení, otevřená otázka, vnitřní prostor bez cíle            |

Typy nečasových aktivit?

| Nazev              | Délka | Popis                                                                |
| ------------------ | ----- | -------------------------------------------------------------------- |
| Komentář           |       | Jeden záměr, slovo nebo věta která provede dnem                      |
| Objetí             |       | Vědomý kontakt s druhým člověkem — přítomnost ve vztahu              |
| Výzva              |       | Vědomé čelení tomu, čemu se člověk vyhýbá — malý odvážný krok        |
| Malý krok v chaosu |       | Jediná konkrétní akce uprostřed nepřehlednosti — kotva v přítomnosti |

**Hodnocení stavu:**

- Před aktivitou: výběr 1–5 hvězd + volitelná poznámka (jak se teď cítím)
- Po aktivitě: výběr 1–5 hvězd + volitelná poznámka (co se posunulo)
- Data se ukládají s časovou značkou

**UX principy stránky DNES:**

- Žádné notifikace tlačící k aktivitě, pouze jemné pozvání
- Jedna aktivita v popředí (dnešní doporučení nebo poslední nedokončená)
- Vizuální klid, minimum textu, prostor pro přítomnost

-----

### 2. PROUD — Historie a vývoj

Stránka zobrazuje záznamy v čase a vizualizuje dvě linie vývoje:

**a) Vývoj štěstí**

- Graf hodnocení stavu před/po aktivitách v čase
- Zobrazení delta (rozdíl před vs. po) jako ukazatel vlivu praxe
- Průměrný stav za posledních 7 a 30 dní

**b) Zvyk vs. charakter**

- Vizualizace frekvence jednotlivých typů aktivit (heat map nebo pruhový přehled)
- Identifikace vznikajících zvyků (3+ opakování v týdnu)
- Přechod zvyk → charakter: pokud je aktivita konzistentní 21+ dní, označí se jako zakotvená praxe
- Zobrazení osobních poznámek a hesel dne v chronologickém přehledu

**UX principy stránky PROUD:**

- Data jako zrcadlo, ne jako hodnocení
- Žádné gamification prvky (odznaky, skóre) — jen čistý obraz
- Možnost exportu deníku jako plain text

-----

### 3. ZÁKLAD — Rámec praxe

Statická stránka s filozoficko-biologicko-psychologickým popisem celého konceptu. Slouží jako kotva — uživatel se sem vrací, když chce pochopit proč, ne jen co.

**Obsah sekce ZÁKLAD:**

**Samobyti a proud**
Člověk potřebuje ukotvenou podstatu — samobyti — a zároveň schopnost pustit se proudem. Vědomé uvědomování bez lpění je stavem, k němuž praxe směřuje.

**Přirozená posloupnost**
Myšlenka → slovo → čin → zvyk → charakter → osud. Každá aktivita v aplikaci je vstupem do tohoto řetězce na té nejmenší úrovni.

**Tělo jako základ**
Nervový systém je první jazyk vědomí. Pohyb, dech a relaxace nejsou doplňky — jsou podmínkou pro jasné vnímání a zdravé rozhodování.

**Střed mezi hlavou a emocí**
Srdce jako cit, ne sentiment. Rozhodování ze středu znamená zahrnout tělo i mysl a jednat z toho, co je skutečně přítomné, ne z reaktivní emoce ani z chladné kalkulace.

**Vztahy a spolubytí**
Praxe není izolace. Objectives, objetí a vědomá přítomnost pro druhé jsou stejně důležité jako vnitřní ticho.

**Stín a malý krok**
Překračování stínu (Jung) je vědomé setkání s tím, co v sobě odmítáme. Malý krok v chaosu je praktická forma odvahy — ne heroismus, ale přítomnost tváří v tvář nejistotě.

-----

## Technická specifikace

### Stack

- **Frontend:** React (Vite) nebo Next.js (statický export)
- **Styling:** Tailwind CSS nebo vlastní CSS proměnné
- **Uložení dat:** localStorage (MVP) → volitelně Supabase nebo PocketBase pro sync
- **Grafy:** Recharts nebo lightweight-charts
- **Navigace:** tři pevné stránky, plochá struktura bez zanořených tras

### Datový model

```json
Activity {
  id: string,
  type: ActivityType,
  startedAt: ISO8601,
  completedAt: ISO8601,
  durationMinutes: number,
  ratingBefore: 1|2|3|4|5,
  ratingAfter: 1|2|3|4|5,
  noteBefore: string,
  noteAfter: string
}

ActivityType = 
  "3min" | "pohyb" | "meditace" | "rozjimani" | 
  "denik" | "objeti" | "stin" | "krok"

DayEntry {
  date: YYYY-MM-DD,
  activities: Activity[],
  averageBefore: number,
  averageAfter: number,
  delta: number
}
```

### Vizuální směr

- Barevná paleta: zemitá, teplá — okrová, hliněná, krémová, tmavě zelená
- Typografie: serifové písmo pro nadpisy (pocit ukotvenosti), čisté sans-serif pro tělo
- Žádné ostré stíny, žádné výzvy k akci — jemné přechody, hodně volného prostoru
- Ikony: minimální, organické, ne technologické
- Mobilní first — aplikace je primárně pro telefon, použitelná v klidném momentu
- Automaticky se nacita obsah TODAY v dolni casti stranky je moznost prepnuti na INFO, TIME - bez hamburger menu, bez zanořených obrazovek

-----

## Principy vývoje

1. **Méně je více** — každá funkce musí sloužit vědomí, ne rozptylovat
2. **Žádná závislost** — aplikace nesmí vytvářet potřebu se k ní vracet z nutkání, jen z volby
3. **Data patří uživateli** — vše lokálně, export kdykoli
4. **Jazyk aplikace** — bez poučování, bez motivačních frází, bez emotikonů v UI textech
5. **Dostupnost** — funguje offline, rychlé načtení, minimální závislosti

-----

## MVP rozsah (první verze - lokalni)

- Stránka TODAY s typy aktivit
- Hodnocení stavu před/po (hvězdy + poznámka)
- Ukládání do localStorage (jeden .md soubor)
- Stránka TIME s chronologickým přehledem a jednoduchým grafem delta
- Stránka INFO se statickým textem
- Mobilní responzivita


## Budoucí rozšíření (webowe s db)

- webova aplikace/stranka hostovana v azure
- s databaze (do budoucna napojeni na AI)
- uzivatele se autentizuji jmeno heslo (do budoucna email pomocny zachrany zpusob)
- webova stranka kompatibilni s pc i mobilem
- export deniku a aktivit do .md
