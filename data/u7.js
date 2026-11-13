/* Unit 7 — Conjugation Reference. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "reference",
 "order": 7,
 "icon": "⊞",
 "color": "cyan",
 "title": "Conjugation Reference",
 "subtitle": "Every verb you need, in every tense, on one shelf",
 "lessons": [
  {
   "id": "u7-etre-avoir",
   "icon": "ê/a",
   "title": "être & avoir in Full",
   "subtitle": "The two verbs that build everything else",
   "minutes": 12,
   "goals": [
    "Conjugate être and avoir in six tenses",
    "Recognise them inside compound tenses",
    "Use the right one as a helper"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These two carry the whole language: every compound tense is built on one of them. Learn these two tables and most of French conjugation follows. · এই দুটি ক্রিয়াই পুরো ভাষার ভিত্তি; প্রতিটি যৌগিক কাল এদের উপর দাঁড়ায়।"
    },
    {
     "type": "table",
     "head": [
      "",
      "Présent",
      "Imparfait",
      "Futur",
      "Conditionnel"
     ],
     "rows": [
      [
       "je / j'",
       "{{suis}}",
       "{{étais}}",
       "{{serai}}",
       "{{serais}}"
      ],
      [
       "tu",
       "{{es}}",
       "{{étais}}",
       "{{seras}}",
       "{{serais}}"
      ],
      [
       "il / elle",
       "{{est}}",
       "{{était}}",
       "{{sera}}",
       "{{serait}}"
      ],
      [
       "nous",
       "{{sommes}}",
       "{{étions}}",
       "{{serons}}",
       "{{serions}}"
      ],
      [
       "vous",
       "{{êtes}}",
       "{{étiez}}",
       "{{serez}}",
       "{{seriez}}"
      ],
      [
       "ils / elles",
       "{{sont}}",
       "{{étaient}}",
       "{{seront}}",
       "{{seraient}}"
      ]
     ],
     "title": "être — to be"
    },
    {
     "type": "table",
     "head": [
      "",
      "Présent",
      "Imparfait",
      "Futur",
      "Conditionnel"
     ],
     "rows": [
      [
       "je / j'",
       "{{ai}}",
       "{{avais}}",
       "{{aurai}}",
       "{{aurais}}"
      ],
      [
       "tu",
       "{{as}}",
       "{{avais}}",
       "{{auras}}",
       "{{aurais}}"
      ],
      [
       "il / elle",
       "{{a}}",
       "{{avait}}",
       "{{aura}}",
       "{{aurait}}"
      ],
      [
       "nous",
       "{{avons}}",
       "{{avions}}",
       "{{aurons}}",
       "{{aurions}}"
      ],
      [
       "vous",
       "{{avez}}",
       "{{aviez}}",
       "{{aurez}}",
       "{{auriez}}"
      ],
      [
       "ils / elles",
       "{{ont}}",
       "{{avaient}}",
       "{{auront}}",
       "{{auraient}}"
      ]
     ],
     "title": "avoir — to have"
    },
    {
     "type": "table",
     "head": [
      "Tense",
      "être",
      "avoir"
     ],
     "rows": [
      [
       "Passé composé",
       "{{j'ai été}}",
       "{{j'ai eu}}"
      ],
      [
       "Plus-que-parfait",
       "{{j'avais été}}",
       "{{j'avais eu}}"
      ],
      [
       "Subjonctif présent",
       "{{que je sois}}",
       "{{que j'aie}}"
      ],
      [
       "Impératif",
       "{{sois, soyons, soyez}}",
       "{{aie, ayons, ayez}}"
      ],
      [
       "Participe passé",
       "{{été}}",
       "{{eu}}"
      ],
      [
       "Participe présent",
       "{{étant}}",
       "{{ayant}}"
      ]
     ],
     "title": "The rest of the system"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{eu}} is pronounced simply **ew** — the first letter is silent. And {{j'ai eu}} is said *zhay EW*, not *zhay uh-EW*. · eu-এর উচ্চারণ কেবল ্যু; প্রথম অক্ষর নীরব।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The imparfait of {{être}} for {{nous}} is…",
       "options": [
        "étions",
        "étaient",
        "serions",
        "sommes"
       ],
       "answer": 0,
       "explain": "ét- plus -ions."
      },
      {
       "q": "{{que j'aie}} is the subjunctive of…",
       "options": [
        "aider",
        "avoir",
        "être",
        "aller"
       ],
       "answer": 1,
       "explain": "{{que je sois}} is être."
      },
      {
       "q": "The past participle of {{avoir}} is…",
       "options": [
        "ayé",
        "avoiru",
        "eu",
        "avu"
       ],
       "answer": 2,
       "explain": "{{j'ai eu}} — I have had."
      },
      {
       "q": "The conditional of {{être}} for {{ils}} is…",
       "options": [
        "seront",
        "étaient",
        "soient",
        "seraient"
       ],
       "answer": 3,
       "explain": "Future stem ser- plus imparfait endings."
      }
     ]
    }
   ]
  },
  {
   "id": "u7-regular",
   "icon": "3",
   "title": "The Three Regular Patterns",
   "subtitle": "parler, finir, vendre across every tense",
   "minutes": 12,
   "goals": [
    "Apply each pattern in six tenses",
    "See how the stem stays and endings change",
    "Conjugate any regular verb from memory"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Learn one model verb per group and you can conjugate thousands. The stem barely moves; only the endings work. · প্রতিটি দলের একটি নমুনা ক্রিয়া শিখলেই হাজারো ক্রিয়া আপনার।"
    },
    {
     "type": "table",
     "head": [
      "",
      "parler (-er)",
      "finir (-ir)",
      "vendre (-re)"
     ],
     "rows": [
      [
       "je",
       "{{parle}}",
       "{{finis}}",
       "{{vends}}"
      ],
      [
       "tu",
       "{{parles}}",
       "{{finis}}",
       "{{vends}}"
      ],
      [
       "il / elle",
       "{{parle}}",
       "{{finit}}",
       "{{vend}}"
      ],
      [
       "nous",
       "{{parlons}}",
       "{{finissons}}",
       "{{vendons}}"
      ],
      [
       "vous",
       "{{parlez}}",
       "{{finissez}}",
       "{{vendez}}"
      ],
      [
       "ils / elles",
       "{{parlent}}",
       "{{finissent}}",
       "{{vendent}}"
      ]
     ],
     "title": "Présent"
    },
    {
     "type": "table",
     "head": [
      "Tense",
      "parler",
      "finir",
      "vendre"
     ],
     "rows": [
      [
       "Imparfait (je)",
       "{{parlais}}",
       "{{finissais}}",
       "{{vendais}}"
      ],
      [
       "Futur (je)",
       "{{parlerai}}",
       "{{finirai}}",
       "{{vendrai}}"
      ],
      [
       "Conditionnel (je)",
       "{{parlerais}}",
       "{{finirais}}",
       "{{vendrais}}"
      ],
      [
       "Passé composé (j')",
       "{{ai parlé}}",
       "{{ai fini}}",
       "{{ai vendu}}"
      ],
      [
       "Subjonctif (que je)",
       "{{parle}}",
       "{{finisse}}",
       "{{vende}}"
      ],
      [
       "Participe présent",
       "{{parlant}}",
       "{{finissant}}",
       "{{vendant}}"
      ]
     ],
     "title": "The same three verbs, every other tense"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The future and conditional always keep the **r** of the infinitive. If you can hear an r before the ending, you are in one of those two tenses. · ভবিষ্যৎ ও conditionnel-এ infinitive-এর r থেকে যায়।"
    },
    {
     "type": "rule",
     "name": "Small spelling shifts in -er verbs",
     "color": "orange",
     "desc": "A few -er verbs adjust their spelling to keep the sound. · ধ্বনি ঠিক রাখতে কিছু -er ক্রিয়ার বানান সামান্য বদলায়।",
     "examples": [
      {
       "t": "manger → nous mangeons",
       "tr": "an e is kept so the g stays soft",
       "hl": "mangeons"
      },
      {
       "t": "commencer → nous commençons",
       "tr": "a cédille keeps the c soft",
       "hl": "commençons"
      },
      {
       "t": "acheter → j'achète",
       "tr": "an accent appears on the stressed e",
       "hl": "achète"
      },
      {
       "t": "appeler → j'appelle",
       "tr": "the l doubles instead",
       "hl": "appelle"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{nous}} form of {{manger}} is…",
       "options": [
        "mangeons",
        "mangons",
        "mangeions",
        "manjons"
       ],
       "answer": 0,
       "explain": "The e keeps the g soft before o."
      },
      {
       "q": "The conditional of {{finir}} for {{je}} is…",
       "options": [
        "finisse",
        "finirais",
        "finirai",
        "finissais"
       ],
       "answer": 1,
       "explain": "Infinitive plus imparfait endings."
      },
      {
       "q": "The present participle of {{vendre}} is…",
       "options": [
        "vendre",
        "vendrant",
        "vendant",
        "vendu"
       ],
       "answer": 2,
       "explain": "nous vendons → vendant."
      },
      {
       "q": "Which tense keeps the r of the infinitive?",
       "options": [
        "imparfait",
        "présent",
        "subjonctif",
        "futur"
       ],
       "answer": 3,
       "explain": "Both futur and conditionnel do."
      }
     ]
    }
   ]
  },
  {
   "id": "u7-core",
   "icon": "★",
   "title": "The Core Irregulars",
   "subtitle": "aller, faire, prendre, venir, voir, dire",
   "minutes": 14,
   "goals": [
    "Conjugate the six most frequent irregulars",
    "Know their future stems and participles",
    "Spot the families they belong to"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These six appear more often than almost any regular verb. Their present tense is irregular, but their other tenses behave predictably once you have the stem. · এই ছয়টি নিয়মিত ক্রিয়ার চেয়েও বেশি ব্যবহৃত হয়।"
    },
    {
     "type": "table",
     "head": [
      "",
      "aller",
      "faire",
      "prendre"
     ],
     "rows": [
      [
       "je",
       "{{vais}}",
       "{{fais}}",
       "{{prends}}"
      ],
      [
       "tu",
       "{{vas}}",
       "{{fais}}",
       "{{prends}}"
      ],
      [
       "il / elle",
       "{{va}}",
       "{{fait}}",
       "{{prend}}"
      ],
      [
       "nous",
       "{{allons}}",
       "{{faisons}}",
       "{{prenons}}"
      ],
      [
       "vous",
       "{{allez}}",
       "{{faites}}",
       "{{prenez}}"
      ],
      [
       "ils / elles",
       "{{vont}}",
       "{{font}}",
       "{{prennent}}"
      ]
     ],
     "title": "Présent — first three"
    },
    {
     "type": "table",
     "head": [
      "",
      "venir",
      "voir",
      "dire"
     ],
     "rows": [
      [
       "je",
       "{{viens}}",
       "{{vois}}",
       "{{dis}}"
      ],
      [
       "tu",
       "{{viens}}",
       "{{vois}}",
       "{{dis}}"
      ],
      [
       "il / elle",
       "{{vient}}",
       "{{voit}}",
       "{{dit}}"
      ],
      [
       "nous",
       "{{venons}}",
       "{{voyons}}",
       "{{disons}}"
      ],
      [
       "vous",
       "{{venez}}",
       "{{voyez}}",
       "{{dites}}"
      ],
      [
       "ils / elles",
       "{{viennent}}",
       "{{voient}}",
       "{{disent}}"
      ]
     ],
     "title": "Présent — next three"
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Futur (je)",
      "Participe passé",
      "Subjonctif (que je)"
     ],
     "rows": [
      [
       "{{aller}}",
       "{{irai}}",
       "{{allé}} (être)",
       "{{aille}}"
      ],
      [
       "{{faire}}",
       "{{ferai}}",
       "{{fait}}",
       "{{fasse}}"
      ],
      [
       "{{prendre}}",
       "{{prendrai}}",
       "{{pris}}",
       "{{prenne}}"
      ],
      [
       "{{venir}}",
       "{{viendrai}}",
       "{{venu}} (être)",
       "{{vienne}}"
      ],
      [
       "{{voir}}",
       "{{verrai}}",
       "{{vu}}",
       "{{voie}}"
      ],
      [
       "{{dire}}",
       "{{dirai}}",
       "{{dit}}",
       "{{dise}}"
      ]
     ],
     "title": "The three forms you must also know"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{prendre}} brings a family with it: {{apprendre}} (learn), {{comprendre}} (understand), {{surprendre}} (surprise) all conjugate the same way. Learn one, get four. · prendre শিখলে তার পরিবারও শেখা হয়ে যায়।"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{vous dites}} and {{vous faites}} are irregular; but {{vous disez}} and *vous faisez* do not exist. Compare the regular {{vous lisez}}. · dites ও faites অনিয়মিত।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The future stem of {{voir}} is…",
       "options": [
        "verr-",
        "voir-",
        "voy-",
        "vair-"
       ],
       "answer": 0,
       "explain": "{{je verrai}} — double r."
      },
      {
       "q": "{{ils}} form of {{venir}} is…",
       "options": [
        "venont",
        "viennent",
        "venent",
        "viendrent"
       ],
       "answer": 1,
       "explain": "The stem doubles its n in the plural."
      },
      {
       "q": "Which verb takes {{être}} in the passé composé?",
       "options": [
        "voir",
        "dire",
        "aller",
        "faire"
       ],
       "answer": 2,
       "explain": "{{je suis allé}} — a movement verb."
      },
      {
       "q": "{{comprendre}} conjugates like…",
       "options": [
        "rendre",
        "vendre",
        "attendre",
        "prendre"
       ],
       "answer": 3,
       "explain": "The whole prendre family shares the pattern."
      },
      {
       "q": "The subjunctive of {{faire}} is…",
       "options": [
        "que je fasse",
        "que je fais",
        "que je ferai",
        "que je faise"
       ],
       "answer": 0,
       "explain": "An irregular worth memorising."
      }
     ]
    }
   ]
  },
  {
   "id": "u7-modals",
   "icon": "⚙",
   "title": "The Modal Verbs",
   "subtitle": "pouvoir, vouloir, devoir, savoir",
   "minutes": 12,
   "goals": [
    "Conjugate the four modals",
    "Separate savoir from connaître",
    "Use the conditional for politeness"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These four express ability, wish, obligation and knowledge. Each is followed directly by an infinitive, with no preposition in between. · এই চারটি ক্রিয়ার পরে সরাসরি infinitive বসে, কোনো preposition ছাড়াই।"
    },
    {
     "type": "table",
     "head": [
      "",
      "pouvoir",
      "vouloir",
      "devoir",
      "savoir"
     ],
     "rows": [
      [
       "je",
       "{{peux}}",
       "{{veux}}",
       "{{dois}}",
       "{{sais}}"
      ],
      [
       "tu",
       "{{peux}}",
       "{{veux}}",
       "{{dois}}",
       "{{sais}}"
      ],
      [
       "il / elle",
       "{{peut}}",
       "{{veut}}",
       "{{doit}}",
       "{{sait}}"
      ],
      [
       "nous",
       "{{pouvons}}",
       "{{voulons}}",
       "{{devons}}",
       "{{savons}}"
      ],
      [
       "vous",
       "{{pouvez}}",
       "{{voulez}}",
       "{{devez}}",
       "{{savez}}"
      ],
      [
       "ils / elles",
       "{{peuvent}}",
       "{{veulent}}",
       "{{doivent}}",
       "{{savent}}"
      ]
     ],
     "title": "Présent"
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Futur (je)",
      "Participe passé",
      "Subjonctif (que je)"
     ],
     "rows": [
      [
       "{{pouvoir}}",
       "{{pourrai}}",
       "{{pu}}",
       "{{puisse}}"
      ],
      [
       "{{vouloir}}",
       "{{voudrai}}",
       "{{voulu}}",
       "{{veuille}}"
      ],
      [
       "{{devoir}}",
       "{{devrai}}",
       "{{dû}}",
       "{{doive}}"
      ],
      [
       "{{savoir}}",
       "{{saurai}}",
       "{{su}}",
       "{{sache}}"
      ]
     ],
     "title": "Their other key forms"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "savoir",
       "label": "a fact or a skill",
       "desc": "{{Je sais nager}} — I know how to swim. {{Je sais qu'il vient}} — I know that he is coming."
      },
      {
       "t": "connaître",
       "label": "a person or place",
       "desc": "{{Je connais Paris}} — I know Paris. {{Je connais Rana}} — I know Rana."
      }
     ],
     "title": "The two verbs for *to know*"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{dû}} carries a circumflex to tell it apart from {{du}}, the contracted article. The feminine is plain {{due}}, with no accent. · dû-তে চিহ্নটি du থেকে আলাদা করার জন্য।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je voudrais réserver une chambre.",
       "tr": "zhuh voo-dray ray-zair-VAY · জ়্য ভুদ্রে রেজ়ের্ভে",
       "mean": "I would like to book a room."
      },
      {
       "t": "Pourriez-vous répéter ?",
       "tr": "poo-ree-ay-voo ray-pay-TAY · পুরিয়েভু রেপেতে",
       "mean": "Could you repeat?"
      },
      {
       "t": "Vous devriez voir un médecin.",
       "tr": "voo duh-vree-ay vwahr uhn mayd-SAN · ভু দ্যভ্রিয়ে ভোয়ার উঁ মেদসঁ",
       "mean": "You should see a doctor."
      }
     ],
     "title": "The polite conditional at work"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I know how to swim* is…",
       "options": [
        "Je sais de nager.",
        "Je sais nager.",
        "Je connais nager.",
        "Je peux nager."
       ],
       "answer": 1,
       "explain": "{{savoir}} plus a bare infinitive for a skill."
      },
      {
       "q": "The subjunctive of {{pouvoir}} is…",
       "options": [
        "que je pouvoir",
        "que je pourrais",
        "que je puisse",
        "que je peux"
       ],
       "answer": 2,
       "explain": "{{pour que vous puissiez comprendre}}."
      },
      {
       "q": "Why does {{dû}} take a circumflex?",
       "options": [
        "To mark a long vowel",
        "Because it is irregular",
        "To show it is a participle",
        "To distinguish it from du"
       ],
       "answer": 3,
       "explain": "Only the masculine singular keeps the accent."
      },
      {
       "q": "*I know Paris* is…",
       "options": [
        "Je connais Paris.",
        "Je sais Paris.",
        "Je sais de Paris.",
        "Je connais de Paris."
       ],
       "answer": 0,
       "explain": "Places and people take {{connaître}}."
      },
      {
       "q": "{{ils}} form of {{vouloir}} is…",
       "options": [
        "veulont",
        "veulent",
        "voulent",
        "veullent"
       ],
       "answer": 1,
       "explain": "The stem changes in the plural."
      }
     ]
    }
   ]
  },
  {
   "id": "u7-more",
   "icon": "+",
   "title": "More Verbs in Full",
   "subtitle": "boire, croire, connaître, mettre, partir, dormir, tenir",
   "minutes": 13,
   "goals": [
    "Conjugate seven more common irregulars",
    "Use the right helper in the past",
    "Recognise the families they head"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These seven complete the set a confident speaker uses daily, and several head families of their own. · এই সাতটি দিয়েই দৈনন্দিন ফরাসির তালিকা পূর্ণ হয়।"
    },
    {
     "type": "table",
     "head": [
      "",
      "boire",
      "croire",
      "connaître",
      "mettre"
     ],
     "rows": [
      [
       "je",
       "{{bois}}",
       "{{crois}}",
       "{{connais}}",
       "{{mets}}"
      ],
      [
       "il / elle",
       "{{boit}}",
       "{{croit}}",
       "{{connaît}}",
       "{{met}}"
      ],
      [
       "nous",
       "{{buvons}}",
       "{{croyons}}",
       "{{connaissons}}",
       "{{mettons}}"
      ],
      [
       "vous",
       "{{buvez}}",
       "{{croyez}}",
       "{{connaissez}}",
       "{{mettez}}"
      ],
      [
       "ils / elles",
       "{{boivent}}",
       "{{croient}}",
       "{{connaissent}}",
       "{{mettent}}"
      ]
     ],
     "title": "Présent — first four"
    },
    {
     "type": "table",
     "head": [
      "",
      "partir",
      "dormir",
      "tenir"
     ],
     "rows": [
      [
       "je",
       "{{pars}}",
       "{{dors}}",
       "{{tiens}}"
      ],
      [
       "il / elle",
       "{{part}}",
       "{{dort}}",
       "{{tient}}"
      ],
      [
       "nous",
       "{{partons}}",
       "{{dormons}}",
       "{{tenons}}"
      ],
      [
       "vous",
       "{{partez}}",
       "{{dormez}}",
       "{{tenez}}"
      ],
      [
       "ils / elles",
       "{{partent}}",
       "{{dorment}}",
       "{{tiennent}}"
      ]
     ],
     "title": "Présent — the -ir irregulars"
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Futur (je)",
      "Participe passé",
      "Helper"
     ],
     "rows": [
      [
       "{{boire}}",
       "{{boirai}}",
       "{{bu}}",
       "avoir"
      ],
      [
       "{{croire}}",
       "{{croirai}}",
       "{{cru}}",
       "avoir"
      ],
      [
       "{{connaître}}",
       "{{connaîtrai}}",
       "{{connu}}",
       "avoir"
      ],
      [
       "{{mettre}}",
       "{{mettrai}}",
       "{{mis}}",
       "avoir"
      ],
      [
       "{{partir}}",
       "{{partirai}}",
       "{{parti}}",
       "**être**"
      ],
      [
       "{{dormir}}",
       "{{dormirai}}",
       "{{dormi}}",
       "avoir"
      ],
      [
       "{{tenir}}",
       "{{tiendrai}}",
       "{{tenu}}",
       "avoir"
      ]
     ],
     "title": "Future, participle and helper"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{tenir}} and {{venir}} share a shape: {{tiens / viens}}, {{tiendrai / viendrai}}. Their families follow — {{obtenir}}, {{retenir}}, {{revenir}}, {{devenir}}. · tenir ও venir একই ছাঁচে চলে।"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{connaître}} keeps its circumflex only before a **t**: {{il connaît}} but {{nous connaissons}}. The 1990 spelling reform allows {{connaitre}} without it, and both are accepted. · চিহ্নটি কেবল t-এর আগে থাকে।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{nous}} form of {{boire}} is…",
       "options": [
        "boyons",
        "bouvons",
        "buvons",
        "boivons"
       ],
       "answer": 2,
       "explain": "The stem changes to buv- in the plural."
      },
      {
       "q": "The past participle of {{mettre}} is…",
       "options": [
        "mettu",
        "mit",
        "mettré",
        "mis"
       ],
       "answer": 3,
       "explain": "{{j'ai mis}} — I put."
      },
      {
       "q": "Which of these takes {{être}} in the past?",
       "options": [
        "partir",
        "dormir",
        "boire",
        "mettre"
       ],
       "answer": 0,
       "explain": "{{je suis parti}} — a movement verb."
      },
      {
       "q": "{{obtenir}} conjugates like…",
       "options": [
        "ouvrir",
        "tenir",
        "venir",
        "finir"
       ],
       "answer": 1,
       "explain": "The tenir family shares one pattern."
      },
      {
       "q": "When does {{connaître}} keep its circumflex?",
       "options": [
        "Always",
        "Never",
        "Before a t",
        "Before an s"
       ],
       "answer": 2,
       "explain": "{{il connaît}}, but {{nous connaissons}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u7-participles",
   "icon": "é",
   "title": "Past Participles A–Z",
   "subtitle": "The list to keep beside you",
   "minutes": 11,
   "goals": [
    "Recall the irregular participles at speed",
    "Know which verbs take être",
    "Apply the agreement rules"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Compound tenses are only as good as your participles. This is the working list — learn it in blocks of five. · যৌগিক কালের ভিত্তি participle; পাঁচটি করে ভাগ করে শিখুন।"
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Participle",
      "Verb",
      "Participle"
     ],
     "rows": [
      [
       "{{avoir}}",
       "{{eu}}",
       "{{mettre}}",
       "{{mis}}"
      ],
      [
       "{{être}}",
       "{{été}}",
       "{{mourir}}",
       "{{mort}}"
      ],
      [
       "{{boire}}",
       "{{bu}}",
       "{{naître}}",
       "{{né}}"
      ],
      [
       "{{connaître}}",
       "{{connu}}",
       "{{ouvrir}}",
       "{{ouvert}}"
      ],
      [
       "{{croire}}",
       "{{cru}}",
       "{{plaire}}",
       "{{plu}}"
      ],
      [
       "{{devoir}}",
       "{{dû}}",
       "{{pouvoir}}",
       "{{pu}}"
      ],
      [
       "{{dire}}",
       "{{dit}}",
       "{{prendre}}",
       "{{pris}}"
      ],
      [
       "{{écrire}}",
       "{{écrit}}",
       "{{savoir}}",
       "{{su}}"
      ],
      [
       "{{faire}}",
       "{{fait}}",
       "{{venir}}",
       "{{venu}}"
      ],
      [
       "{{lire}}",
       "{{lu}}",
       "{{voir}}",
       "{{vu}}"
      ],
      [
       "{{vivre}}",
       "{{vécu}}",
       "{{vouloir}}",
       "{{voulu}}"
      ]
     ],
     "title": "The irregulars worth memorising"
    },
    {
     "type": "rule",
     "name": "The être verbs",
     "color": "red",
     "desc": "These take {{être}}, and their participle agrees with the subject. Every reflexive verb joins them. · এরা être নেয় এবং participle কর্তার সঙ্গে মেলে।",
     "examples": [
      {
       "t": "aller / venir · arriver / partir",
       "tr": "go / come · arrive / leave",
       "hl": "aller"
      },
      {
       "t": "entrer / sortir · monter / descendre",
       "tr": "enter / go out · go up / go down",
       "hl": "entrer"
      },
      {
       "t": "naître / mourir · rester, tomber, retourner",
       "tr": "be born / die · stay, fall, return",
       "hl": "naître"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Three agreement rules",
     "color": "purple",
     "desc": "Learn them in this order and you will never guess. · এই তিনটি নিয়ম ক্রমানুসারে শিখুন।",
     "examples": [
      {
       "t": "Elle est partie.",
       "tr": "être → agrees with the subject",
       "hl": "partie"
      },
      {
       "t": "J'ai écrit les lettres.",
       "tr": "avoir → no agreement, object follows",
       "hl": "écrit"
      },
      {
       "t": "Les lettres que j'ai écrites.",
       "tr": "avoir → object comes first, so it agrees",
       "hl": "écrites"
      }
     ]
    },
    {
     "type": "selfcheck",
     "items": [
      "I can give the participle of the twenty verbs above without looking",
      "I know which verbs take {{être}}",
      "I make the participle agree after {{être}}",
      "I agree after {{avoir}} only when the object comes first"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The participle of {{naître}} is…",
       "options": [
        "naî",
        "naissu",
        "nêtu",
        "né"
       ],
       "answer": 3,
       "explain": "{{je suis né}} — I was born."
      },
      {
       "q": "The participle of {{ouvrir}} is…",
       "options": [
        "ouvert",
        "ouvri",
        "ouvru",
        "ouvré"
       ],
       "answer": 0,
       "explain": "Like {{offrir → offert}}."
      },
      {
       "q": "{{Les lettres que j'ai écrites}} agrees because…",
       "options": [
        "the helper is avoir",
        "the object comes before the verb",
        "lettres is feminine",
        "écrire is irregular"
       ],
       "answer": 1,
       "explain": "A preceding direct object triggers agreement."
      },
      {
       "q": "The participle of {{vivre}} is…",
       "options": [
        "vivé",
        "vit",
        "vécu",
        "vivu"
       ],
       "answer": 2,
       "explain": "{{j'ai vécu}} — I lived."
      },
      {
       "q": "Which verb does **not** take être?",
       "options": [
        "monter",
        "tomber",
        "rester",
        "lire"
       ],
       "answer": 3,
       "explain": "{{j'ai lu}} — reading is not movement."
      }
     ]
    }
   ]
  },
  {
   "id": "u7-names",
   "icon": "M.",
   "title": "Names & Forms of Address",
   "subtitle": "Who to call what, and how to write it",
   "minutes": 9,
   "goals": [
    "Recognise common French first names",
    "Use the right title in speech and writing",
    "Address an envelope correctly"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French names and titles follow conventions that differ from Bangla and English alike. Getting them right is a small courtesy that lands well. · ফরাসি নাম ও সম্বোধনের রীতি বাংলা বা ইংরেজির মতো নয়।"
    },
    {
     "type": "table",
     "head": [
      "Male names",
      "Female names",
      "Surnames"
     ],
     "rows": [
      [
       "{{Pierre}}, {{Jean}}, {{Michel}}",
       "{{Marie}}, {{Sophie}}, {{Claire}}",
       "{{Dupont}}, {{Martin}}"
      ],
      [
       "{{Philippe}}, {{Laurent}}",
       "{{Isabelle}}, {{Nathalie}}",
       "{{Bernard}}, {{Moreau}}"
      ],
      [
       "{{Antoine}}, {{Nicolas}}",
       "{{Camille}}, {{Chloé}}",
       "{{Petit}}, {{Durand}}"
      ]
     ],
     "title": "Names you will meet"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "A few names work for either gender — {{Camille}}, {{Dominique}}, {{Alix}} — so the title or the article tells you which: {{un Camille}} or {{une Camille}}. · কিছু নাম উভয় লিঙ্গেই চলে।"
    },
    {
     "type": "table",
     "head": [
      "Spoken",
      "Written short",
      "Plural",
      "Use for"
     ],
     "rows": [
      [
       "{{monsieur}}",
       "{{M.}}",
       "{{MM.}}",
       "any man"
      ],
      [
       "{{madame}}",
       "{{Mme}}",
       "{{Mmes}}",
       "any adult woman"
      ],
      [
       "{{docteur}}",
       "{{Dr}}",
       "{{Drs}}",
       "a doctor"
      ],
      [
       "{{maître}}",
       "{{Me}}",
       "{{Mes}}",
       "a lawyer or notary"
      ]
     ],
     "title": "Titles"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "French abbreviations of titles take **no full stop** when the last letter of the word is kept: {{Mme}} and {{Dr}} have none, but {{M.}} does, because *monsieur* does not end in M. · শেষ অক্ষর থাকলে বিন্দু বসে না।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Bonjour, monsieur.",
       "tr": "bohn-ZHOOR muh-SYUH · বঁজ়ুর ম্যসিয়্য",
       "mean": "Good morning, sir.",
       "note": "no surname when speaking"
      },
      {
       "t": "Monsieur Rahman est arrivé.",
       "tr": "muh-syuh rah-MAHN · ম্যসিয়্য রামান",
       "mean": "Mr Rahman has arrived.",
       "note": "surname when talking about him"
      },
      {
       "t": "Madame la Directrice",
       "tr": "mah-dam lah dee-rek-TREES · মাদাম লা দিরেক্ত্রিস",
       "mean": "Madam Director",
       "note": "title by office, in a letter"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which abbreviation takes a full stop?",
       "options": [
        "M.",
        "Mme",
        "Dr",
        "Me"
       ],
       "answer": 0,
       "explain": "Only when the final letter of the full word is dropped."
      },
      {
       "q": "Greeting someone face to face, you say…",
       "options": [
        "Bonjour, Rahman.",
        "Bonjour, monsieur.",
        "Bonjour, monsieur Rahman.",
        "Bonjour, M. Rahman."
       ],
       "answer": 1,
       "explain": "The surname is added only when speaking about someone."
      },
      {
       "q": "{{Camille}} is…",
       "options": [
        "a female name only",
        "a surname only",
        "used for men and women",
        "a male name only"
       ],
       "answer": 2,
       "explain": "So are {{Dominique}} and {{Alix}}."
      },
      {
       "q": "{{Me}} before a name means the person is…",
       "options": [
        "a doctor",
        "a teacher",
        "a mayor",
        "a lawyer or notary"
       ],
       "answer": 3,
       "explain": "Short for {{maître}}."
      }
     ]
    }
   ]
  }
 ]
});
