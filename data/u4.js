/* Unit 4 — Everyday & Professional French. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "everyday",
 "order": 4,
 "icon": "€",
 "color": "amber",
 "title": "Everyday & Professional French",
 "subtitle": "Numbers, time, money, travel and the conversations you will actually have",
 "lessons": [
  {
   "id": "u4-numbers",
   "icon": "70",
   "title": "Numbers, Including the Strange Ones",
   "subtitle": "Why 97 is four-twenty-seventeen",
   "minutes": 13,
   "goals": [
    "Count confidently to a thousand",
    "Handle 70, 80 and 90 without hesitating",
    "Use ordinal numbers"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French counting runs smoothly to sixty, then does something no other major language does: it starts adding and multiplying. · ষাট পর্যন্ত ফরাসি গণনা সহজ, তারপর শুরু হয় যোগ ও গুণের খেলা।"
    },
    {
     "type": "table",
     "head": [
      "Number",
      "French",
      "Literally",
      "Say"
     ],
     "rows": [
      [
       "70",
       "{{soixante-dix}}",
       "sixty-ten",
       "swah-sahnt-DEES"
      ],
      [
       "71",
       "{{soixante et onze}}",
       "sixty and eleven",
       "swah-sahnt-ay-OHNZ"
      ],
      [
       "80",
       "{{quatre-vingts}}",
       "four-twenties",
       "kah-truh-VAN"
      ],
      [
       "81",
       "{{quatre-vingt-un}}",
       "four-twenty-one",
       "kah-truh-van-UHN"
      ],
      [
       "90",
       "{{quatre-vingt-dix}}",
       "four-twenty-ten",
       "kah-truh-van-DEES"
      ],
      [
       "97",
       "{{quatre-vingt-dix-sept}}",
       "four-twenty-seventeen",
       "kah-truh-van-dees-SET"
      ]
     ],
     "title": "The famous awkward stretch"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{quatre-vingts}} takes an **s**, but it loses it as soon as another number follows: {{quatre-vingts}} yet {{quatre-vingt-un}}. The same happens with {{cent}}: {{deux cents}} but {{deux cent un}}. · পরে আরেকটি সংখ্যা এলে s পড়ে যায়।"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Belgium and Switzerland solved this long ago with {{septante}} (70), {{nonante}} (90) and in parts of Switzerland {{huitante}} (80). France never adopted them. · বেলজিয়াম ও সুইজারল্যান্ডে সহজ রূপ চালু আছে।"
    },
    {
     "type": "rule",
     "name": "Hundreds and thousands",
     "color": "blue",
     "desc": "{{cent}} pluralises when it is exact; {{mille}} never changes at all. · cent ঠিক গুণিতক হলে বহুবচন হয়; mille কখনো বদলায় না।",
     "examples": [
      {
       "t": "cent, deux cents, trois cents",
       "tr": "100, 200, 300",
       "hl": "cents"
      },
      {
       "t": "deux cent cinquante",
       "tr": "250 — no s before another number",
       "hl": "cent"
      },
      {
       "t": "mille, deux mille, dix mille",
       "tr": "1 000, 2 000, 10 000 — mille never takes s",
       "hl": "mille"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Ordinal numbers",
     "color": "green",
     "desc": "Add **-ième** to the number. Only *first* is irregular. · সংখ্যার সঙ্গে -ième যোগ করুন; কেবল প্রথমটি অনিয়মিত।",
     "examples": [
      {
       "t": "premier / première",
       "tr": "first",
       "hl": "premier"
      },
      {
       "t": "deuxième, troisième",
       "tr": "second, third",
       "hl": "ième"
      },
      {
       "t": "neuvième",
       "tr": "ninth — the f of neuf becomes v",
       "hl": "neuvième"
      },
      {
       "t": "cinquième",
       "tr": "fifth — a u is added after cinq",
       "hl": "cinquième"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "French writes large numbers with a space or a full stop, and uses a **comma** for decimals: **1 000,50 €**. Reading an English price aloud with a decimal point is a giveaway. · ফরাসিতে দশমিকে কমা বসে।"
    },
    {
     "type": "practice",
     "text": "Say each number aloud, then write it. · প্রতিটি সংখ্যা জোরে বলুন, তারপর লিখুন।",
     "lines": [
      "soixante-dix, soixante et onze, soixante-quinze",
      "quatre-vingts, quatre-vingt-un, quatre-vingt-dix-neuf",
      "deux cents, deux cent cinquante",
      "mille neuf cent soixante et onze"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you say 97 in French?",
       "options": [
        "quatre-vingt-dix-sept",
        "nonante-sept",
        "septante-dix-sept",
        "quatre-vingt-sept"
       ],
       "answer": 0,
       "explain": "Four-twenty-seventeen. {{nonante-sept}} is Belgian."
      },
      {
       "q": "Which is written correctly?",
       "options": [
        "quatre vingts un",
        "quatre-vingt-un",
        "quatre-vingts-un",
        "quatre-vingt-uns"
       ],
       "answer": 1,
       "explain": "{{vingts}} loses its s before another number."
      },
      {
       "q": "The plural of {{mille}} is…",
       "options": [
        "milliers",
        "milles-s",
        "mille — it never changes",
        "milles"
       ],
       "answer": 2,
       "explain": "{{mille}} is invariable."
      },
      {
       "q": "*Ninth* in French is…",
       "options": [
        "neufième",
        "neuvèime",
        "neufèime",
        "neuvième"
       ],
       "answer": 3,
       "explain": "The f softens to v before -ième."
      },
      {
       "q": "In French, 1 000,50 € means…",
       "options": [
        "one thousand euros and fifty cents",
        "one hundred thousand euros",
        "one thousand fifty euros",
        "ten euros fifty"
       ],
       "answer": 0,
       "explain": "The comma is the decimal separator."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-time",
   "icon": "h",
   "title": "Telling the Time",
   "subtitle": "Quarter past, half past, and the 24-hour clock",
   "minutes": 11,
   "goals": [
    "Ask and give the time",
    "Use et quart, et demie and moins le quart",
    "Read official 24-hour times"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French always names the hour first, then adjusts it. The word {{heures}} can never be left out — unlike English *it's eight*. · ফরাসি আগে ঘণ্টা বলে, পরে সমন্বয় করে। heures কখনো বাদ দেওয়া যায় না।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Quelle heure est-il ?",
       "tr": "kel UHR eh-TEEL · কেল ্যর এতিল",
       "mean": "What time is it?"
      },
      {
       "t": "Il est huit heures.",
       "tr": "eel ay weet UHR · ইল এ উইত ্যর",
       "mean": "It is eight o'clock."
      },
      {
       "t": "Il est huit heures et quart.",
       "tr": "...ay KAR · ...এ কার",
       "mean": "It is quarter past eight."
      },
      {
       "t": "Il est huit heures et demie.",
       "tr": "...ay duh-MEE · ...এ দ্যমি",
       "mean": "It is half past eight."
      },
      {
       "t": "Il est neuf heures moins le quart.",
       "tr": "...mwan luh KAR · ...মোয়াঁ ল্য কার",
       "mean": "It is quarter to nine."
      }
     ],
     "title": "The core phrases"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{midi}} (noon) and {{minuit}} (midnight) are masculine, so it is {{midi et demi}} with no e — but {{huit heures et demie}} with one, because {{heure}} is feminine. · midi ও minuit পুংলিঙ্গ, তাই demi-তে e বসে না।"
    },
    {
     "type": "table",
     "head": [
      "Written",
      "Said",
      "Meaning"
     ],
     "rows": [
      [
       "15 h 45",
       "{{quinze heures quarante-cinq}}",
       "15:45"
      ],
      [
       "20 h 30",
       "{{vingt heures trente}}",
       "20:30"
      ],
      [
       "00 h 10",
       "{{zéro heure dix}}",
       "00:10"
      ],
      [
       "12 h",
       "{{midi}}",
       "noon"
      ]
     ],
     "title": "The official clock"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Timetables, tickets, appointments and the news all use the 24-hour clock. {{et quart}} and {{moins le quart}} belong to conversation only. · সময়সূচি ও টিকিটে ২৪ ঘণ্টার হিসাব চলে।"
    },
    {
     "type": "rule",
     "name": "Morning, afternoon, evening",
     "color": "green",
     "desc": "French has no a.m. or p.m. It adds a phrase instead. · ফরাসিতে a.m./p.m. নেই; বদলে বাক্যাংশ যোগ হয়।",
     "examples": [
      {
       "t": "huit heures du matin",
       "tr": "8 in the morning",
       "hl": "du matin"
      },
      {
       "t": "trois heures de l'après-midi",
       "tr": "3 in the afternoon",
       "hl": "de l'après-midi"
      },
      {
       "t": "neuf heures du soir",
       "tr": "9 in the evening",
       "hl": "du soir"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rana",
       "t": "Excusez-moi, quelle heure est-il ?",
       "tr": "ek-skew-zay-MWAH, kel UHR eh-TEEL · এক্‌স্ক্যুজ়েমোয়া, কেল ্যর এতিল",
       "mean": "Excuse me, what time is it?"
      },
      {
       "who": "Shila",
       "t": "Il est huit heures et quart.",
       "tr": "eel ay weet UHR ay KAR · ইল এ উইত ্যর এ কার",
       "mean": "It is quarter past eight."
      },
      {
       "who": "Rana",
       "t": "Déjà ? À quelle heure part le train ?",
       "tr": "day-ZHAH ? ah kel UHR par luh TRAN · দেজ়া? আ কেল ্যর পার ল্য ত্রঁ",
       "mean": "Already? What time does the train leave?"
      },
      {
       "who": "Shila",
       "t": "À huit heures quarante-cinq. Dépêchez-vous !",
       "tr": "ah weet UHR kah-rahnt-SANK · আ উইত ্যর কারাঁত সঁক",
       "mean": "At 8:45. Hurry up!"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*What time is it?* is…",
       "options": [
        "Combien d'heure est-il ?",
        "Quelle heure est-il ?",
        "Quel heure est-il ?",
        "Quelle temps est-il ?"
       ],
       "answer": 1,
       "explain": "{{heure}} is feminine, so {{quelle}}."
      },
      {
       "q": "*Quarter to nine* is…",
       "options": [
        "neuf heures et quart",
        "huit heures trois quarts",
        "neuf heures moins le quart",
        "huit heures moins le quart"
       ],
       "answer": 2,
       "explain": "French names the coming hour, then subtracts."
      },
      {
       "q": "Why is it {{midi et demi}} without an e?",
       "options": [
        "demi never agrees",
        "It is an abbreviation",
        "Noon is a special case",
        "midi is masculine"
       ],
       "answer": 3,
       "explain": "{{heure}} is feminine so takes demie; {{midi}} is masculine."
      },
      {
       "q": "15 h 45 is read as…",
       "options": [
        "quinze heures quarante-cinq",
        "trois heures quarante-cinq",
        "quinze heures moins le quart",
        "quinze et quarante-cinq"
       ],
       "answer": 0,
       "explain": "Official times are read straight through."
      },
      {
       "q": "How does French mark the afternoon?",
       "options": [
        "en après-midi",
        "de l'après-midi",
        "p.m.",
        "après-midi seul"
       ],
       "answer": 1,
       "explain": "{{du matin}}, {{de l'après-midi}}, {{du soir}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-dates",
   "icon": "📅",
   "title": "Days, Months & Dates",
   "subtitle": "Writing the date the French way",
   "minutes": 10,
   "goals": [
    "Name the days, months and seasons",
    "Write and say a full date",
    "Use the right preposition for each season"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Days and months are written in **lower case** in French — capitalising them is a visible mistake in any letter or CV. · ফরাসিতে বার ও মাসের নাম ছোট হাতের অক্ষরে লেখা হয়।"
    },
    {
     "type": "table",
     "head": [
      "Days",
      "Months",
      "Months",
      "Seasons"
     ],
     "rows": [
      [
       "{{lundi}}",
       "{{janvier}}",
       "{{juillet}}",
       "{{le printemps}}"
      ],
      [
       "{{mardi}}",
       "{{février}}",
       "{{août}}",
       "{{l'été}}"
      ],
      [
       "{{mercredi}}",
       "{{mars}}",
       "{{septembre}}",
       "{{l'automne}}"
      ],
      [
       "{{jeudi}}",
       "{{avril}}",
       "{{octobre}}",
       "{{l'hiver}}"
      ],
      [
       "{{vendredi}}",
       "{{mai}}",
       "{{novembre}}",
       ""
      ],
      [
       "{{samedi}}",
       "{{juin}}",
       "{{décembre}}",
       ""
      ],
      [
       "{{dimanche}}",
       "",
       "",
       ""
      ]
     ],
     "title": "The whole calendar"
    },
    {
     "type": "rule",
     "name": "Writing a date",
     "color": "blue",
     "desc": "Use **le** plus a plain number plus the month. Only the first of the month is an ordinal. · le + সংখ্যা + মাস। কেবল মাসের প্রথম দিন ordinal হয়।",
     "examples": [
      {
       "t": "le 5 décembre 2004",
       "tr": "the 5th of December 2004",
       "hl": "le 5"
      },
      {
       "t": "le premier janvier",
       "tr": "the first of January — premier, not un",
       "hl": "premier"
      },
      {
       "t": "Dacca, le 05 décembre 2004",
       "tr": "how a letter is dated",
       "hl": "Dacca, le"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Seasons take different prepositions",
     "color": "orange",
     "desc": "Three seasons take {{en}}; spring alone takes {{au}}. · তিনটি ঋতুতে en, কেবল বসন্তে au।",
     "examples": [
      {
       "t": "au printemps",
       "tr": "in spring",
       "hl": "au"
      },
      {
       "t": "en été",
       "tr": "in summer",
       "hl": "en"
      },
      {
       "t": "en automne",
       "tr": "in autumn",
       "hl": "en"
      },
      {
       "t": "en hiver",
       "tr": "in winter",
       "hl": "en"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{le printemps}} starts with a consonant sound, so it takes {{au}}; the other three start with vowels and take {{en}}. · printemps ব্যঞ্জন দিয়ে শুরু, তাই au।"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{lundi}} means *on Monday* once; {{le lundi}} means *on Mondays*, every week. One small article, a whole different meaning. · le যোগ করলে অর্থ হয় প্রতি সোমবার।"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "aujourd'hui",
       "tr": "oh-zhoor-DWEE · ওজ়ুরদুই",
       "mean": "today"
      },
      {
       "t": "demain",
       "tr": "duh-MAN · দ্যমঁ",
       "mean": "tomorrow"
      },
      {
       "t": "hier",
       "tr": "YAIR · ইয়ের",
       "mean": "yesterday"
      },
      {
       "t": "la semaine prochaine",
       "tr": "lah suh-men proh-SHEN · লা স্যমেন প্রশেন",
       "mean": "next week"
      },
      {
       "t": "le mois dernier",
       "tr": "luh mwah dair-NYAY · ল্য মোয়া দেরনিয়ে",
       "mean": "last month"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is written correctly?",
       "options": [
        "Le 5 décembre",
        "le cinquième décembre",
        "le 5 décembre",
        "le 5 Décembre"
       ],
       "answer": 2,
       "explain": "Months are lower case and the day is a plain number."
      },
      {
       "q": "*The first of January* is…",
       "options": [
        "le un janvier",
        "le première janvier",
        "le unième janvier",
        "le premier janvier"
       ],
       "answer": 3,
       "explain": "Only the 1st uses an ordinal."
      },
      {
       "q": "*In spring* is…",
       "options": [
        "au printemps",
        "en printemps",
        "à printemps",
        "dans le printemps"
       ],
       "answer": 0,
       "explain": "Spring is the exception that takes {{au}}."
      },
      {
       "q": "{{le lundi}} means…",
       "options": [
        "next Monday",
        "on Mondays, every week",
        "on Monday, once",
        "last Monday"
       ],
       "answer": 1,
       "explain": "The article makes it habitual."
      },
      {
       "q": "Which season takes {{en}}?",
       "options": [
        "le weekend",
        "le mois",
        "l'hiver",
        "le printemps"
       ],
       "answer": 2,
       "explain": "{{en hiver}}, {{en été}}, {{en automne}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-money",
   "icon": "€",
   "title": "Money & Paying",
   "subtitle": "Prices, banks and settling the bill",
   "minutes": 12,
   "goals": [
    "Ask how much something costs",
    "Name the ways of paying",
    "Handle a simple bank conversation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Money talk is short, fixed and easy to learn — and it appears in every trip, every shop and every restaurant. · টাকাপয়সার কথাবার্তা সংক্ষিপ্ত ও নির্দিষ্ট, কিন্তু প্রতিদিন লাগে।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "C'est combien ?",
       "tr": "say kohn-BYAN · সে কঁবিয়ঁ",
       "mean": "How much is it?",
       "note": "the everyday form"
      },
      {
       "t": "Combien ça coûte ?",
       "tr": "kohn-byan sah KOOT · কঁবিয়ঁ সা কুত",
       "mean": "How much does it cost?"
      },
      {
       "t": "Quel est le prix ?",
       "tr": "kel ay luh PREE · কেল এ ল্য প্রি",
       "mean": "What is the price?",
       "note": "more formal"
      },
      {
       "t": "Ça fait combien en tout ?",
       "tr": "sah fay kohn-byan ahn TOO · সা ফে কঁবিয়ঁ আঁ তু",
       "mean": "How much is that altogether?"
      }
     ],
     "title": "Asking the price"
    },
    {
     "type": "table",
     "head": [
      "Paying",
      "French",
      "Banking",
      "French"
     ],
     "rows": [
      [
       "in cash",
       "{{en espèces}}",
       "an account",
       "{{un compte}}"
      ],
      [
       "by card",
       "{{par carte}}",
       "to withdraw",
       "{{retirer}}"
      ],
      [
       "by cheque",
       "{{par chèque}}",
       "to deposit",
       "{{déposer}}"
      ],
      [
       "change",
       "{{la monnaie}}",
       "the rate",
       "{{le taux de change}}"
      ]
     ],
     "title": "The words you need"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{la monnaie}} is **change** — the coins you get back. **Money** in general is {{l'argent}}. Asking for {{de la monnaie}} in a bank gets you coins, not cash. · monnaie মানে খুচরো, argent মানে টাকা।"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Salim",
       "t": "Excusez-moi, j'ai besoin de monnaie.",
       "tr": "zhay buh-zwan duh moh-NAY · জ়ে ব্যজ়োয়াঁ দ্য মনে",
       "mean": "Excuse me, I need some change."
      },
      {
       "who": "Employé",
       "t": "Bien sûr. Vous payez comment ?",
       "tr": "byan SEWR. voo pay-yay koh-MAHN · বিয়ঁ স্যুর। ভু পেয়ে কমাঁ",
       "mean": "Of course. How are you paying?"
      },
      {
       "who": "Salim",
       "t": "Par carte, s'il vous plaît. Ça fait combien ?",
       "tr": "par KART, seel voo PLAY · পার কার্ত, সিল ভু প্লে",
       "mean": "By card, please. How much is it?"
      },
      {
       "who": "Employé",
       "t": "Deux cent cinquante takas. Voilà votre reçu.",
       "tr": "duh sahn san-KAHNT · দ্য সাঁ সঁকাঁত",
       "mean": "Two hundred and fifty takas. Here is your receipt."
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Un billet simple pour Sylhet, c'est deux cent cinquante takas.",
     "tr": "uhn bee-yay SANPL poor seel-ET, say duh sahn san-KAHNT tah-KAH · উঁ বিয়ে সঁপ্ল পুর সিলেত, সে দ্য সাঁ সঁকাঁত তাকা",
     "mean": "A single ticket to Sylhet is two hundred and fifty takas.",
     "words": [
      {
       "t": "Un",
       "mean": "a"
      },
      {
       "t": "billet",
       "mean": "ticket"
      },
      {
       "t": "simple",
       "mean": "single"
      },
      {
       "t": "pour",
       "mean": "for, to"
      },
      {
       "t": "Sylhet",
       "mean": "Sylhet"
      },
      {
       "t": "c'est",
       "mean": "it is"
      },
      {
       "t": "deux",
       "mean": "two"
      },
      {
       "t": "cent",
       "mean": "hundred"
      },
      {
       "t": "cinquante",
       "mean": "fifty"
      },
      {
       "t": "takas",
       "mean": "takas"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The everyday way to ask a price is…",
       "options": [
        "Quel est le prix ?",
        "Combien est-il ?",
        "Quel coût ?",
        "C'est combien ?"
       ],
       "answer": 3,
       "explain": "Short and used everywhere."
      },
      {
       "q": "{{la monnaie}} means…",
       "options": [
        "change",
        "money in general",
        "a banknote",
        "a bank"
       ],
       "answer": 0,
       "explain": "{{l'argent}} is money; {{la monnaie}} is change."
      },
      {
       "q": "*In cash* is…",
       "options": [
        "en argent",
        "en espèces",
        "par carte",
        "par chèque"
       ],
       "answer": 1,
       "explain": "{{en espèces}} is the standard phrase."
      },
      {
       "q": "*A single ticket* is…",
       "options": [
        "un billet unique",
        "un simple billet",
        "un billet simple",
        "un billet seul"
       ],
       "answer": 2,
       "explain": "Return is {{un aller-retour}}."
      },
      {
       "q": "{{le taux de change}} means…",
       "options": [
        "the price list",
        "the cash desk",
        "the account number",
        "the exchange rate"
       ],
       "answer": 3,
       "explain": "Useful at any bank or bureau de change."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-cafe",
   "icon": "☕",
   "title": "Café & Restaurant",
   "subtitle": "Ordering, and asking for the bill",
   "minutes": 12,
   "goals": [
    "Order food and drink naturally",
    "Use the partitive correctly at the table",
    "Ask for the bill the polite way"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The café is where the partitive you learned in Unit 2 finally earns its keep: {{du café}}, {{de la crème}}, {{des pommes}}. · ক্যাফেতেই partitive-এর আসল ব্যবহার।"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "un café crème",
       "tr": "uhn kah-fay KREM · উঁ কাফে ক্রেম",
       "mean": "a white coffee"
      },
      {
       "t": "un café noir",
       "tr": "uhn kah-fay NWAHR · উঁ কাফে নোয়ার",
       "mean": "a black coffee"
      },
      {
       "t": "l'addition",
       "tr": "lah-dee-SYOHN · লাদিসিয়ঁ",
       "mean": "the bill"
      },
      {
       "t": "la carte",
       "tr": "lah KART · লা কার্ত",
       "mean": "the menu"
      },
      {
       "t": "le sucre",
       "tr": "luh SEWKR · ল্য স্যুক্‌র",
       "mean": "sugar"
      },
      {
       "t": "l'eau",
       "tr": "LOH · লো",
       "mean": "water"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Serveur",
       "t": "Bonjour messieurs-dames. Vous avez choisi ?",
       "tr": "voo-zah-vay shwah-ZEE · ভু জ়াভে শোয়াজ়ি",
       "mean": "Good morning. Have you chosen?"
      },
      {
       "who": "M. Rahman",
       "t": "Un café noir pour moi et un café crème pour ma femme.",
       "tr": "uhn kah-fay NWAHR poor MWAH · উঁ কাফে নোয়ার পুর মোয়া",
       "mean": "A black coffee for me and a white coffee for my wife."
      },
      {
       "who": "Serveur",
       "t": "Avec du sucre ?",
       "tr": "ah-vek dew SEWKR · আভেক দ্যু স্যুক্‌র",
       "mean": "With sugar?"
      },
      {
       "who": "M. Rahman",
       "t": "Non merci, je ne prends pas de sucre.",
       "tr": "nohn mair-SEE · নঁ মেরসি",
       "mean": "No thank you, I do not take sugar."
      },
      {
       "who": "Mme Rahman",
       "t": "Garçon, l'addition s'il vous plaît.",
       "tr": "gar-SOHN, lah-dee-syohn seel voo PLAY · গারসঁ, লাদিসিয়ঁ সিল ভু প্লে",
       "mean": "Waiter, the bill please."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{Garçon}} is old-fashioned and can sound rude today. A simple {{S'il vous plaît}} with eye contact, or {{Monsieur}} / {{Madame}}, is how people actually call a waiter in France. · আজকাল Garçon রূক্ষ শোনায়; S'il vous plaît বলাই ভালো।"
    },
    {
     "type": "rule",
     "name": "At the table, the partitive rules",
     "color": "blue",
     "desc": "Ordering an amount takes {{du / de la / des}}; refusing takes plain {{de}}. · পরিমাণ চাইলে du/de la/des, অস্বীকার করলে কেবল de।",
     "examples": [
      {
       "t": "Je voudrais de l'eau.",
       "tr": "I would like some water.",
       "hl": "de l'"
      },
      {
       "t": "Avez-vous de la crème ?",
       "tr": "Do you have any cream?",
       "hl": "de la"
      },
      {
       "t": "Je ne veux pas de sucre.",
       "tr": "I do not want any sugar.",
       "hl": "de"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je voudrais réserver une table pour deux.",
       "tr": "zhuh voo-dray ray-zair-VAY · জ়্য ভুদ্রে রেজ়ের্ভে",
       "mean": "I would like to book a table for two."
      },
      {
       "t": "C'est délicieux !",
       "tr": "say day-lee-SYUH · সে দেলিসিয়্য",
       "mean": "It is delicious!"
      },
      {
       "t": "J'ai assez mangé, merci.",
       "tr": "zhay ah-say mahn-ZHAY · জ়ে আসে মাঁজ়ে",
       "mean": "I have had enough, thank you."
      }
     ],
     "title": "Three more you will use"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*The bill, please* is…",
       "options": [
        "L'addition s'il vous plaît.",
        "La carte s'il vous plaît.",
        "Le prix s'il vous plaît.",
        "La monnaie s'il vous plaît."
       ],
       "answer": 0,
       "explain": "{{la carte}} is the menu; {{l'addition}} is the bill."
      },
      {
       "q": "*I do not take sugar* is…",
       "options": [
        "Je prends pas de sucre.",
        "Je ne prends pas de sucre.",
        "Je ne prends pas du sucre.",
        "Je ne prends pas le sucre."
       ],
       "answer": 1,
       "explain": "After a negative, {{du}} becomes {{de}}."
      },
      {
       "q": "How should you call a waiter in France today?",
       "options": [
        "Hé, monsieur",
        "Serveur !",
        "S'il vous plaît",
        "Garçon"
       ],
       "answer": 2,
       "explain": "{{Garçon}} now sounds dated and abrupt."
      },
      {
       "q": "*A white coffee* is…",
       "options": [
        "un café blanc",
        "un café au lait blanc",
        "un café clair",
        "un café crème"
       ],
       "answer": 3,
       "explain": "{{un crème}} on its own also works in a café."
      },
      {
       "q": "*I would like some water* is…",
       "options": [
        "Je voudrais de l'eau.",
        "Je voudrais l'eau.",
        "Je voudrais une eau.",
        "Je voudrais du eau."
       ],
       "answer": 0,
       "explain": "{{eau}} is feminine and starts with a vowel: {{de l'eau}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-travel",
   "icon": "🏨",
   "title": "Hotel & Directions",
   "subtitle": "Booking a room and finding your way",
   "minutes": 13,
   "goals": [
    "Book and describe a hotel room",
    "Ask for and understand directions",
    "Use floor numbers the French way"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Two survival skills for any trip: getting a room, and getting to it. Both rely on a small set of fixed phrases. · যেকোনো ভ্রমণে দুটি দরকারি দক্ষতা: ঘর নেওয়া আর পথ খুঁজে পাওয়া।"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "une chambre simple",
       "tr": "ewn SHAHNBR SANPL · ্যুন শাঁব্‌র সঁপ্ল",
       "mean": "a single room"
      },
      {
       "t": "une chambre double",
       "tr": "ewn shahnbr DOOBL · ্যুন শাঁব্‌র দুব্ল",
       "mean": "a double room"
      },
      {
       "t": "la clé",
       "tr": "lah KLAY · লা ক্লে",
       "mean": "the key"
      },
      {
       "t": "l'ascenseur",
       "tr": "lah-sahn-SUHR · লাসাঁস্যর",
       "mean": "the lift"
      },
      {
       "t": "complet",
       "tr": "kohn-PLAY · কঁপ্লে",
       "mean": "fully booked"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The French **ground floor** is {{le rez-de-chaussée}}, and {{le premier étage}} is one flight up — the British first floor, not the American one. · ফরাসিতে নিচতলা rez-de-chaussée, আর premier étage মানে একতলা উপরে।"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Shafique",
       "t": "Bonsoir. Avez-vous une chambre pour deux nuits ?",
       "tr": "ah-vay-voo ewn SHAHNBR · আভেভু ্যুন শাঁব্‌র",
       "mean": "Good evening. Do you have a room for two nights?"
      },
      {
       "who": "Réceptionniste",
       "t": "Oui, une chambre double au deuxième étage.",
       "tr": "oh duh-zyem ay-TAHZH · ও দ্যজ়িয়েম এতাজ়",
       "mean": "Yes, a double room on the second floor."
      },
      {
       "who": "Shafique",
       "t": "Très bien. Il y a un ascenseur ?",
       "tr": "eel ee ah uhn ah-sahn-SUHR · ইল ই আ উঁ আসাঁস্যর",
       "mean": "Very good. Is there a lift?"
      },
      {
       "who": "Réceptionniste",
       "t": "Bien sûr. Voici votre clé, chambre vingt-trois.",
       "tr": "vwah-see vohtr KLAY · ভোয়াসি ভত্‌র ক্লে",
       "mean": "Of course. Here is your key, room twenty-three."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Asking",
      "French",
      "Answer",
      "French"
     ],
     "rows": [
      [
       "Where is…?",
       "{{Où est… ?}}",
       "straight on",
       "{{tout droit}}"
      ],
      [
       "Is it far?",
       "{{C'est loin ?}}",
       "turn right",
       "{{tournez à droite}}"
      ],
      [
       "How do I get to…?",
       "{{Pour aller à… ?}}",
       "turn left",
       "{{tournez à gauche}}"
      ],
      [
       "Is there a… nearby?",
       "{{Il y a un… près d'ici ?}}",
       "opposite",
       "{{en face de}}"
      ]
     ],
     "title": "Directions, both halves"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Pour aller à la gare, s'il vous plaît ?",
       "tr": "poor ah-lay ah lah GAR · পুর আলে আ লা গার",
       "mean": "How do I get to the station, please?"
      },
      {
       "t": "Suivez cette rue jusqu'au bout.",
       "tr": "swee-vay set REW zhews-koh BOO · সুইভে সেত র‍্যু জ়্যুসকো বু",
       "mean": "Follow this street to the end."
      },
      {
       "t": "C'est en face de la poste.",
       "tr": "say ahn fahs duh lah PUST · সে আঁ ফাস দ্য লা পস্ত",
       "mean": "It is opposite the post office."
      },
      {
       "t": "C'est à cinq minutes à pied.",
       "tr": "say ah sank mee-NEWT ah PYAY · সে আ সঁক মিন্যুত আ পিয়ে",
       "mean": "It is five minutes on foot."
      }
     ],
     "title": "Real exchanges"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{le rez-de-chaussée}} is…",
       "options": [
        "the top floor",
        "the ground floor",
        "the first floor",
        "the basement"
       ],
       "answer": 1,
       "explain": "{{le premier étage}} is one flight above it."
      },
      {
       "q": "*Turn left* is…",
       "options": [
        "tout droit",
        "en face",
        "tournez à gauche",
        "tournez à droite"
       ],
       "answer": 2,
       "explain": "{{droite}} is right; {{gauche}} is left."
      },
      {
       "q": "{{tout droit}} means…",
       "options": [
        "to the right",
        "all right",
        "very straight",
        "straight on"
       ],
       "answer": 3,
       "explain": "A classic trap: it is not {{à droite}}."
      },
      {
       "q": "*The hotel is fully booked* is…",
       "options": [
        "L'hôtel est complet.",
        "L'hôtel est plein.",
        "L'hôtel est fini.",
        "L'hôtel est fermé."
       ],
       "answer": 0,
       "explain": "{{complet}} is the word used on signs."
      },
      {
       "q": "*It is five minutes on foot* is…",
       "options": [
        "C'est pour cinq minutes à pied.",
        "C'est à cinq minutes à pied.",
        "C'est cinq minutes au pied.",
        "C'est dans cinq minutes à pied."
       ],
       "answer": 1,
       "explain": "Distance in time takes {{à}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-phone",
   "icon": "☎",
   "title": "Telephone, Weather & Health",
   "subtitle": "Three everyday situations with fixed phrases",
   "minutes": 12,
   "goals": [
    "Handle a phone call in French",
    "Describe the weather",
    "Say what hurts at the doctor's"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Each of these three situations runs on a handful of set expressions. Learn the phrases whole and you will never have to build them. · এই তিনটি পরিস্থিতিতে কয়েকটি নির্দিষ্ট বাক্যাংশই যথেষ্ট।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Allô, qui est à l'appareil ?",
       "tr": "ah-LOH, kee ay tah lah-pah-RAY · আলো, কি এ তা লাপারে",
       "mean": "Hello, who is speaking?"
      },
      {
       "t": "C'est de la part de qui ?",
       "tr": "say duh lah par duh KEE · সে দ্য লা পার দ্য কি",
       "mean": "Who shall I say is calling?"
      },
      {
       "t": "Ne quittez pas.",
       "tr": "nuh kee-tay PAH · ন্য কিতে পা",
       "mean": "Hold the line."
      },
      {
       "t": "Je vous le passe.",
       "tr": "zhuh voo luh PAHS · জ়্য ভু ল্য পাস",
       "mean": "I am putting you through."
      },
      {
       "t": "Vous avez fait un faux numéro.",
       "tr": "voo-zah-vay fay uhn foh new-may-ROH · ভু জ়াভে ফে উঁ ফো ন্যুমেরো",
       "mean": "You have the wrong number."
      }
     ],
     "title": "On the telephone"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{Allô}} is used **only** on the telephone. Greeting someone face to face with it sounds comic. · Allô কেবল ফোনে ব্যবহৃত হয়।"
    },
    {
     "type": "rule",
     "name": "The weather always starts with il",
     "color": "green",
     "desc": "Weather uses the impersonal {{il}} plus {{faire}}, or a verb of its own. · আবহাওয়ার বর্ণনা শুরু হয় il দিয়ে।",
     "examples": [
      {
       "t": "Il fait beau.",
       "tr": "The weather is fine.",
       "hl": "fait beau"
      },
      {
       "t": "Il fait mauvais.",
       "tr": "The weather is bad.",
       "hl": "mauvais"
      },
      {
       "t": "Il pleut.",
       "tr": "It is raining.",
       "hl": "pleut"
      },
      {
       "t": "Il neige.",
       "tr": "It is snowing.",
       "hl": "neige"
      },
      {
       "t": "Il y a du vent.",
       "tr": "It is windy.",
       "hl": "du vent"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Saying what hurts",
     "color": "red",
     "desc": "Use {{avoir mal à}} plus the article and the body part. The {{à}} contracts as usual. · avoir mal à + article + শরীরের অংশ।",
     "examples": [
      {
       "t": "J'ai mal à la tête.",
       "tr": "I have a headache.",
       "hl": "à la tête"
      },
      {
       "t": "J'ai mal au ventre.",
       "tr": "I have stomach ache.",
       "hl": "au ventre"
      },
      {
       "t": "J'ai mal aux dents.",
       "tr": "I have toothache.",
       "hl": "aux dents"
      },
      {
       "t": "Je suis fatigué.",
       "tr": "I am tired.",
       "hl": "fatigué"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Médecin",
       "t": "Bonjour, qu'est-ce qui ne va pas ?",
       "tr": "kes-kee nuh vah PAH · কেস্‌কি ন্য ভা পা",
       "mean": "Hello, what is wrong?"
      },
      {
       "who": "Patiente",
       "t": "J'ai mal à la tête depuis trois jours.",
       "tr": "zhay mal ah lah TET duh-pwee trwah ZHOOR · জ়ে মাল আ লা তেত দ্যপুই ত্রোয়া জ়ুর",
       "mean": "I have had a headache for three days."
      },
      {
       "who": "Médecin",
       "t": "Avez-vous de la fièvre ?",
       "tr": "ah-vay-voo duh lah FYEVR · আভেভু দ্য লা ফিয়েভ্‌র",
       "mean": "Do you have a fever?"
      },
      {
       "who": "Patiente",
       "t": "Un peu, et je suis très fatiguée.",
       "tr": "uhn PUH · উঁ প্য",
       "mean": "A little, and I am very tired."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{depuis}} plus the **present** tense means *for* or *since* an action still going on: {{J'habite ici depuis cinq ans}} — *I have lived here for five years*. English uses a past tense here; French does not. · depuis-এর সঙ্গে বর্তমান কাল বসে।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*Hold the line* is…",
       "options": [
        "Attendez la ligne.",
        "Restez ici.",
        "Ne quittez pas.",
        "Ne partez pas."
       ],
       "answer": 2,
       "explain": "The standard telephone phrase."
      },
      {
       "q": "*It is windy* is…",
       "options": [
        "Il fait du vent.",
        "Il est venteux.",
        "Il vente beaucoup.",
        "Il y a du vent."
       ],
       "answer": 3,
       "explain": "{{Il y a du vent}} is the usual form."
      },
      {
       "q": "*I have toothache* is…",
       "options": [
        "J'ai mal aux dents.",
        "J'ai mal à les dents.",
        "J'ai mal de dents.",
        "Je suis mal aux dents."
       ],
       "answer": 0,
       "explain": "à + les contracts to aux."
      },
      {
       "q": "*I have lived here for five years* is…",
       "options": [
        "J'habite ici pour cinq ans.",
        "J'habite ici depuis cinq ans.",
        "J'ai habité ici depuis cinq ans.",
        "J'habitais ici depuis cinq ans."
       ],
       "answer": 1,
       "explain": "{{depuis}} takes the present when the action continues."
      },
      {
       "q": "When is {{Allô}} used?",
       "options": [
        "Only when answering the door",
        "In formal letters",
        "Only on the telephone",
        "As a general greeting"
       ],
       "answer": 2,
       "explain": "Face to face it sounds comic."
      }
     ]
    }
   ]
  }
 ]
});
