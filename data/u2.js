/* Unit 2 — The Grammar Engine. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "grammar",
 "order": 2,
 "icon": "le",
 "color": "indigo",
 "title": "The Grammar Engine",
 "subtitle": "Nouns, articles, adjectives and pronouns — the machinery under every sentence",
 "lessons": [
  {
   "id": "u2-gender",
   "icon": "♂♀",
   "title": "Gender, Properly",
   "subtitle": "Beyond guessing: the endings that decide",
   "minutes": 13,
   "goals": [
    "Use endings to predict gender reliably",
    "Handle nouns that change meaning with gender",
    "Form feminine job titles the modern way"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bangla has no grammatical gender, so this is pure extra work — but it is **learnable work**. Roughly eight nouns in ten follow their ending. · বাংলায় লিঙ্গভেদ নেই, তাই এটি বাড়তি কাজ। তবে দশটির মধ্যে প্রায় আটটি নাম তার শেষাংশ মেনে চলে।"
    },
    {
     "type": "table",
     "head": [
      "Masculine endings",
      "Example",
      "Feminine endings",
      "Example"
     ],
     "rows": [
      [
       "-ment",
       "{{le gouvernement}}",
       "-tion, -sion",
       "{{la décision}}"
      ],
      [
       "-age",
       "{{le voyage}}",
       "-té, -tié",
       "{{la liberté}}"
      ],
      [
       "-eau",
       "{{le bureau}}",
       "-ette",
       "{{la recette}}"
      ],
      [
       "-isme",
       "{{le réalisme}}",
       "-ure",
       "{{la culture}}"
      ],
      [
       "-oir",
       "{{le devoir}}",
       "-ance, -ence",
       "{{la patience}}"
      ],
      [
       "-eur (things)",
       "{{le bonheur}}",
       "-eur (qualities)",
       "{{la couleur}}"
      ]
     ],
     "title": "The reliable endings"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Four famous traps in -age are feminine: {{la page}}, {{la plage}}, {{la cage}}, {{l'image}}. And {{l'eau}} is feminine despite -eau. · -age-এর চারটি ব্যতিক্রম স্ত্রীলিঙ্গ।"
    },
    {
     "type": "rule",
     "name": "Same word, two genders, two meanings",
     "color": "orange",
     "desc": "A small group of nouns changes meaning with the article. These are examiner favourites. · কিছু শব্দ article বদলালে অর্থও বদলায়।",
     "examples": [
      {
       "t": "le livre / la livre",
       "tr": "the book / the pound",
       "hl": "la livre"
      },
      {
       "t": "le tour / la tour",
       "tr": "the trip / the tower",
       "hl": "la tour"
      },
      {
       "t": "le poste / la poste",
       "tr": "the job / the post office",
       "hl": "la poste"
      },
      {
       "t": "le manche / la manche",
       "tr": "the handle / the sleeve",
       "hl": "la manche"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Making a feminine job title",
     "color": "blue",
     "desc": "Modern French feminises most professions. The pattern follows the masculine ending. · আধুনিক ফরাসি অধিকাংশ পেশার স্ত্রীলিঙ্গ রূপ তৈরি করে।",
     "examples": [
      {
       "t": "un avocat → une avocate",
       "tr": "lawyer",
       "hl": "avocate"
      },
      {
       "t": "un directeur → une directrice",
       "tr": "director",
       "hl": "directrice"
      },
      {
       "t": "un vendeur → une vendeuse",
       "tr": "shop assistant",
       "hl": "vendeuse"
      },
      {
       "t": "un infirmier → une infirmière",
       "tr": "nurse",
       "hl": "infirmière"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{professeur}}, {{médecin}} and {{auteur}} were long masculine only. Today {{une professeure}}, {{une médecin}} and {{une autrice}} are standard in France and Canada. · এই পেশাগুলোর স্ত্রীলিঙ্গ রূপ এখন স্বীকৃত।"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "le métier",
       "tr": "luh may-TYAY · ল্য মেতিয়ে",
       "mean": "trade, occupation",
       "root": "métier"
      },
      {
       "t": "la réunion",
       "tr": "lah ray-ew-NYOHN · লা রেউ্যনিয়ঁ",
       "mean": "meeting",
       "root": "-ion"
      },
      {
       "t": "le bâtiment",
       "tr": "luh bah-tee-MAHN · ল্য বাতিমাঁ",
       "mean": "building",
       "root": "-ment"
      },
      {
       "t": "la qualité",
       "tr": "lah kah-lee-TAY · লা কালিতে",
       "mean": "quality",
       "root": "-té"
      },
      {
       "t": "le courage",
       "tr": "luh koo-RAHZH · ল্য কুরাজ়",
       "mean": "courage",
       "root": "-age"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{la plage}} is feminine. Why is that surprising?",
       "options": [
        "Because -age is usually masculine",
        "Because it is a borrowed word",
        "Because it ends in a vowel",
        "Because it is a place"
       ],
       "answer": 0,
       "explain": "{{page, plage, cage, image}} are the -age exceptions."
      },
      {
       "q": "What does {{la tour}} mean?",
       "options": [
        "the tour guide",
        "the tower",
        "the trip",
        "the turn"
       ],
       "answer": 1,
       "explain": "{{le tour}} is a trip or turn; {{la tour}} is a tower."
      },
      {
       "q": "The feminine of {{un directeur}} is…",
       "options": [
        "une directeure",
        "une directeur",
        "une directrice",
        "une directeuse"
       ],
       "answer": 2,
       "explain": "-teur usually becomes -trice."
      },
      {
       "q": "Which ending is reliably feminine?",
       "options": [
        "-ment",
        "-eau",
        "-isme",
        "-tion"
       ],
       "answer": 3,
       "explain": "-tion and -sion are almost always feminine."
      },
      {
       "q": "Which noun is masculine?",
       "options": [
        "le gouvernement",
        "la décision",
        "la culture",
        "la patience"
       ],
       "answer": 0,
       "explain": "-ment is a masculine ending."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-plural",
   "icon": "-x",
   "title": "Plurals That Misbehave",
   "subtitle": "When s is not enough",
   "minutes": 11,
   "goals": [
    "Apply the -eau, -al and -ail patterns",
    "Remember the seven -ou nouns that take x",
    "Handle the irregulars"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most plurals simply add **s**, which you never hear. The interesting ones add **x** or rebuild the ending — and those you *do* hear. · অধিকাংশ বহুবচনে s যোগ হয়, যা শোনা যায় না। যেগুলো x নেয় বা শেষাংশ বদলায়, সেগুলোই শোনা যায়।"
    },
    {
     "type": "table",
     "head": [
      "Ending",
      "Becomes",
      "Example",
      "Plural"
     ],
     "rows": [
      [
       "-eau, -au",
       "+x",
       "{{le bateau}}",
       "{{les bateaux}}"
      ],
      [
       "-eu",
       "+x",
       "{{le cheveu}}",
       "{{les cheveux}}"
      ],
      [
       "-al",
       "-aux",
       "{{le journal}}",
       "{{les journaux}}"
      ],
      [
       "-ail (7 words)",
       "-aux",
       "{{le travail}}",
       "{{les travaux}}"
      ],
      [
       "-s, -x, -z",
       "no change",
       "{{le fils}}",
       "{{les fils}}"
      ]
     ],
     "title": "The patterns"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Seven nouns in **-ou** take x. Learn them as a silly list: {{bijou, caillou, chou, genou, hibou, joujou, pou}} — jewel, pebble, cabbage, knee, owl, toy, louse. Every other -ou takes s. · সাতটি -ou শব্দ x নেয়; বাকি সব s।"
    },
    {
     "type": "rule",
     "name": "The -al escapees",
     "color": "red",
     "desc": "Not every -al becomes -aux. A short list keeps a plain s. · সব -al শব্দ -aux হয় না।",
     "examples": [
      {
       "t": "le bal → les bals",
       "tr": "dance",
       "hl": "bals"
      },
      {
       "t": "le festival → les festivals",
       "tr": "festival",
       "hl": "festivals"
      },
      {
       "t": "le carnaval → les carnavals",
       "tr": "carnival",
       "hl": "carnavals"
      },
      {
       "t": "le récital → les récitals",
       "tr": "recital",
       "hl": "récitals"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "l'œil → les yeux",
       "label": "total rebuild",
       "desc": "*eye → eyes*. No pattern at all; learn it whole."
      },
      {
       "t": "monsieur → messieurs",
       "label": "both halves change",
       "desc": "Literally *my lord → my lords*."
      },
      {
       "t": "madame → mesdames",
       "label": "both halves change",
       "desc": "Same logic: *ma + dame* becomes *mes + dames*."
      }
     ],
     "title": "The true irregulars"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "A family name never takes s: {{les Rahman}}, {{les Dupont}}. · পারিবারিক নামে বহুবচনের s বসে না।"
    },
    {
     "type": "practice",
     "text": "Say each singular, then its plural. Listen for which plurals actually change the sound. · একবচন বলে তার বহুবচন বলুন।",
     "lines": [
      "le journal — les journaux",
      "le bateau — les bateaux",
      "le travail — les travaux",
      "le genou — les genoux",
      "l'œil — les yeux"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The plural of {{le journal}} is…",
       "options": [
        "les journales",
        "les journaux",
        "les journals",
        "les journaus"
       ],
       "answer": 1,
       "explain": "-al becomes -aux."
      },
      {
       "q": "Which -ou noun takes x in the plural?",
       "options": [
        "le clou",
        "le sou",
        "le genou",
        "le trou"
       ],
       "answer": 2,
       "explain": "{{genou}} is one of the famous seven."
      },
      {
       "q": "The plural of {{le festival}} is…",
       "options": [
        "les festivaux",
        "les festivals-x",
        "les festivalles",
        "les festivals"
       ],
       "answer": 3,
       "explain": "{{bal, festival, carnaval, récital}} keep a plain s."
      },
      {
       "q": "{{les yeux}} is the plural of…",
       "options": [
        "l'œil",
        "l'œuf",
        "l'eau",
        "l'an"
       ],
       "answer": 0,
       "explain": "A complete rebuild — learn it as a pair."
      },
      {
       "q": "What is the plural of {{le fils}}?",
       "options": [
        "les filss",
        "les fils",
        "les filses",
        "les fis"
       ],
       "answer": 1,
       "explain": "Nouns already ending in s, x or z do not change."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-articles",
   "icon": "du",
   "title": "Articles & the Partitive",
   "subtitle": "Some bread, the bread, a bread",
   "minutes": 14,
   "goals": [
    "Choose between definite, indefinite and partitive",
    "Use de after a negative and after quantities",
    "Stop dropping articles the way English does"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English says *I like coffee* and *I drink coffee* with no article at all. French never does. Every noun needs a word in front of it, and choosing the right one is half of sounding fluent. · ইংরেজি article ছাড়া চলতে পারে, ফরাসি পারে না।"
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Masculine",
      "Feminine",
      "Plural",
      "Use it for"
     ],
     "rows": [
      [
       "Definite",
       "{{le}}",
       "{{la}}",
       "{{les}}",
       "a known thing, or a whole category"
      ],
      [
       "Indefinite",
       "{{un}}",
       "{{une}}",
       "{{des}}",
       "one countable thing, or some"
      ],
      [
       "Partitive",
       "{{du}}",
       "{{de la}}",
       "{{des}}",
       "an uncounted amount: some, any"
      ]
     ],
     "title": "The three families"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "J'aime le café.",
       "tr": "zhem luh kah-FAY · জ়েম ল্য কাফে",
       "mean": "I like coffee.",
       "note": "the whole category → definite"
      },
      {
       "t": "Je bois du café.",
       "tr": "zhuh bwah dew kah-FAY · জ়্য বোয়া দ্যু কাফে",
       "mean": "I drink some coffee.",
       "note": "an amount → partitive"
      },
      {
       "t": "Je voudrais un café.",
       "tr": "zhuh voo-DRAY uhn kah-FAY · জ়্য ভুদ্রে উঁ কাফে",
       "mean": "I would like a coffee.",
       "note": "one cup → indefinite"
      }
     ],
     "title": "One noun, three meanings"
    },
    {
     "type": "rule",
     "name": "After a negative, everything becomes de",
     "color": "red",
     "desc": "{{un, une, des, du, de la}} all collapse to **de** or **d'** after a negative verb. The definite article does **not** change. · না-বাচক ক্রিয়ার পরে সব article হয়ে যায় de।",
     "examples": [
      {
       "t": "J'ai du pain → Je n'ai pas de pain.",
       "tr": "I have bread → I have no bread",
       "hl": "de pain"
      },
      {
       "t": "Il a des amis → Il n'a pas d'amis.",
       "tr": "He has friends → He has no friends",
       "hl": "d'amis"
      },
      {
       "t": "J'aime le thé → Je n'aime pas le thé.",
       "tr": "unchanged: it is definite",
       "hl": "le thé"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Quantities take de too",
     "color": "green",
     "desc": "After a word of quantity, use plain **de** with no article. · পরিমাণবাচক শব্দের পরে কেবল de বসে।",
     "examples": [
      {
       "t": "beaucoup de monde",
       "tr": "a lot of people",
       "hl": "de"
      },
      {
       "t": "un peu de sucre",
       "tr": "a little sugar",
       "hl": "de"
      },
      {
       "t": "trop de travail",
       "tr": "too much work",
       "hl": "de"
      },
      {
       "t": "une bouteille d'eau",
       "tr": "a bottle of water",
       "hl": "d'"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{bien des}} and {{la plupart des}} break the rule and keep the article: {{bien des gens}}, {{la plupart des étudiants}}. · এই দুটি নিয়ম ভাঙে এবং article রাখে।"
    },
    {
     "type": "rule",
     "name": "des becomes de before an early adjective",
     "color": "purple",
     "desc": "When an adjective comes **before** a plural noun, {{des}} shortens to {{de}}. · বহুবচন নামের আগে বিশেষণ থাকলে des হয়ে যায় de।",
     "examples": [
      {
       "t": "des livres → de beaux livres",
       "tr": "beautiful books",
       "hl": "de beaux"
      },
      {
       "t": "des amis → de vrais amis",
       "tr": "true friends",
       "hl": "de vrais"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Je ne prends pas de sucre dans mon café.",
     "tr": "zhuh nuh prahn pah duh SEWKR dahn mohn kah-FAY · জ়্য ন্য প্রাঁ পা দ্য স্যুক্‌র দাঁ মঁ কাফে",
     "mean": "I do not take sugar in my coffee.",
     "words": [
      {
       "t": "Je",
       "mean": "I"
      },
      {
       "t": "ne",
       "mean": "not (part 1)"
      },
      {
       "t": "prends",
       "mean": "take"
      },
      {
       "t": "pas",
       "mean": "not (part 2)"
      },
      {
       "t": "de",
       "mean": "any"
      },
      {
       "t": "sucre",
       "mean": "sugar"
      },
      {
       "t": "dans",
       "mean": "in"
      },
      {
       "t": "mon",
       "mean": "my"
      },
      {
       "t": "café",
       "mean": "coffee"
      }
     ],
     "note": "{{du sucre}} became {{de sucre}} because the verb is negative."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I like tea* in French is…",
       "options": [
        "J'aime thé.",
        "J'aime un thé.",
        "J'aime le thé.",
        "J'aime du thé."
       ],
       "answer": 2,
       "explain": "A whole category takes the definite article."
      },
      {
       "q": "*I do not have any bread* is…",
       "options": [
        "Je n'ai pas du pain.",
        "Je n'ai pas le pain.",
        "Je n'ai pas un pain.",
        "Je n'ai pas de pain."
       ],
       "answer": 3,
       "explain": "After a negative, {{du}} becomes {{de}}."
      },
      {
       "q": "Which is correct?",
       "options": [
        "beaucoup de monde",
        "beaucoup du monde",
        "beaucoup des monde",
        "beaucoup le monde"
       ],
       "answer": 0,
       "explain": "Quantity words take bare {{de}}."
      },
      {
       "q": "*Beautiful books* in the plural is…",
       "options": [
        "le beaux livres",
        "de beaux livres",
        "des beaux livres",
        "du beaux livres"
       ],
       "answer": 1,
       "explain": "{{des}} shrinks to {{de}} before a leading adjective."
      },
      {
       "q": "Why does {{J'aime le thé}} keep {{le}} in the negative?",
       "options": [
        "It is an exception verb",
        "Because aimer takes no object",
        "Definite articles never change after a negative",
        "Tea is masculine"
       ],
       "answer": 2,
       "explain": "Only indefinite and partitive articles collapse to de."
      },
      {
       "q": "Which phrase keeps its article against the usual rule?",
       "options": [
        "trop de travail",
        "un peu de sucre",
        "assez de temps",
        "la plupart des étudiants"
       ],
       "answer": 3,
       "explain": "{{la plupart des}} and {{bien des}} are the exceptions."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-contract",
   "icon": "au",
   "title": "Contracted Articles",
   "subtitle": "au, aux, du, des — and how to say where",
   "minutes": 12,
   "goals": [
    "Contract à and de with the definite article",
    "Say in and to for countries and cities",
    "Say from a country correctly"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{à}} and {{de}} refuse to sit next to {{le}} and {{les}}. They merge instead. This is compulsory — writing {{à le}} is simply an error. · à এবং de কখনো le ও les-এর পাশে বসে না; তারা মিশে যায়।"
    },
    {
     "type": "table",
     "head": [
      "",
      "+ le",
      "+ la",
      "+ l'",
      "+ les"
     ],
     "rows": [
      [
       "{{à}}",
       "{{au}}",
       "{{à la}}",
       "{{à l'}}",
       "{{aux}}"
      ],
      [
       "{{de}}",
       "{{du}}",
       "{{de la}}",
       "{{de l'}}",
       "{{des}}"
      ]
     ],
     "title": "The whole system"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je vais au marché.",
       "tr": "zhuh vay zoh mar-SHAY · জ়্য ভে ও মার্শে",
       "mean": "I am going to the market."
      },
      {
       "t": "Il parle aux enfants.",
       "tr": "eel parl oh-zahn-FAHN · ইল পার্ল ও জ়াঁফাঁ",
       "mean": "He is talking to the children."
      },
      {
       "t": "Elle vient du bureau.",
       "tr": "el vyan dew bew-ROH · এল ভিয়ঁ দ্যু ব্যুরো",
       "mean": "She is coming from the office."
      },
      {
       "t": "C'est la clé de la maison.",
       "tr": "say lah klay duh lah may-ZOHN · সে লা ক্লে দ্য লা মেজ়ঁ",
       "mean": "It is the house key."
      }
     ]
    },
    {
     "type": "rule",
     "name": "In and to a place",
     "color": "blue",
     "desc": "The word depends on whether the place is a city, a feminine country, a masculine country or a plural one. · শব্দটি নির্ভর করে জায়গাটি শহর না দেশ, এবং দেশটির লিঙ্গের উপর।",
     "examples": [
      {
       "t": "à Dacca, à Paris",
       "tr": "cities take à",
       "hl": "à"
      },
      {
       "t": "en France, en Chine",
       "tr": "feminine countries take en",
       "hl": "en"
      },
      {
       "t": "au Japon, au Bangladesh",
       "tr": "masculine countries take au",
       "hl": "au"
      },
      {
       "t": "aux États-Unis",
       "tr": "plural countries take aux",
       "hl": "aux"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Country gender has a shortcut: if it ends in **-e** it is usually feminine ({{la France}}, {{la Chine}}), and takes {{en}}. The famous exception is {{le Mexique}}. · -e দিয়ে শেষ হলে দেশ সাধারণত স্ত্রীলিঙ্গ।"
    },
    {
     "type": "rule",
     "name": "From a place",
     "color": "green",
     "desc": "To say *from*, feminine countries take bare **de**; masculine ones take **du**; plurals take **des**. · কোথা থেকে বোঝাতে স্ত্রীলিঙ্গ দেশে de, পুংলিঙ্গে du, বহুবচনে des।",
     "examples": [
      {
       "t": "Je viens de France.",
       "tr": "from France",
       "hl": "de"
      },
      {
       "t": "Je viens du Japon.",
       "tr": "from Japan",
       "hl": "du"
      },
      {
       "t": "Je viens des États-Unis.",
       "tr": "from the United States",
       "hl": "des"
      },
      {
       "t": "Je viens de Dacca.",
       "tr": "from Dhaka — cities take de",
       "hl": "de"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Je suis bangladais et je viens de Dacca.",
     "tr": "zhuh swee bahn-glah-DAY ay zhuh vyan duh dah-KAH · জ়্য সুই বাঁগ্লাদে এ জ়্য ভিয়ঁ দ্য দাকা",
     "mean": "I am Bangladeshi and I come from Dhaka.",
     "words": [
      {
       "t": "Je",
       "mean": "I"
      },
      {
       "t": "suis",
       "mean": "am"
      },
      {
       "t": "bangladais",
       "mean": "Bangladeshi"
      },
      {
       "t": "et",
       "mean": "and"
      },
      {
       "t": "je",
       "mean": "I"
      },
      {
       "t": "viens",
       "mean": "come"
      },
      {
       "t": "de",
       "mean": "from"
      },
      {
       "t": "Dacca",
       "mean": "Dhaka"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{à + les}} gives…",
       "options": [
        "aux",
        "als",
        "àles",
        "des"
       ],
       "answer": 0,
       "explain": "à + les always contracts to aux."
      },
      {
       "q": "*I am going to Japan* is…",
       "options": [
        "Je vais aux Japon.",
        "Je vais au Japon.",
        "Je vais en Japon.",
        "Je vais à Japon."
       ],
       "answer": 1,
       "explain": "{{le Japon}} is masculine, so à + le = au."
      },
      {
       "q": "*I live in France* is…",
       "options": [
        "J'habite à France.",
        "J'habite dans France.",
        "J'habite en France.",
        "J'habite au France."
       ],
       "answer": 2,
       "explain": "Feminine countries take {{en}}."
      },
      {
       "q": "*I come from the United States* is…",
       "options": [
        "Je viens de États-Unis.",
        "Je viens aux États-Unis.",
        "Je viens du États-Unis.",
        "Je viens des États-Unis."
       ],
       "answer": 3,
       "explain": "Plural country → {{des}}."
      },
      {
       "q": "Which country is the famous gender exception?",
       "options": [
        "le Mexique",
        "la France",
        "la Chine",
        "la Belgique"
       ],
       "answer": 0,
       "explain": "It ends in -e but is masculine: {{au Mexique}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-adjectives",
   "icon": "Adj",
   "title": "Adjectives: Agreement & Position",
   "subtitle": "Where they stand changes what they mean",
   "minutes": 14,
   "goals": [
    "Form irregular feminines confidently",
    "Know which adjectives come before the noun",
    "Use position to change meaning"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A French adjective agrees with its noun in gender and number, and usually stands **after** it — the opposite of English and Bangla. A small, very common group stands before. · ফরাসি বিশেষণ নামের সঙ্গে মেলে এবং সাধারণত পরে বসে — ইংরেজি ও বাংলার উল্টো।"
    },
    {
     "type": "table",
     "head": [
      "Masculine ending",
      "Feminine",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "-eux",
       "-euse",
       "{{heureux / heureuse}}",
       "happy"
      ],
      [
       "-f",
       "-ve",
       "{{actif / active}}",
       "active"
      ],
      [
       "-er",
       "-ère",
       "{{cher / chère}}",
       "dear"
      ],
      [
       "-el, -eil",
       "-elle, -eille",
       "{{naturel / naturelle}}",
       "natural"
      ],
      [
       "-c",
       "-che / -que",
       "{{blanc / blanche}}",
       "white"
      ]
     ],
     "title": "Irregular feminines"
    },
    {
     "type": "rule",
     "name": "The ones that go first",
     "color": "blue",
     "desc": "Short adjectives of **beauty, age, goodness and size** come before the noun. · সৌন্দর্য, বয়স, গুণ ও আকার বোঝানো ছোট বিশেষণ নামের আগে বসে।",
     "examples": [
      {
       "t": "une belle maison",
       "tr": "a beautiful house",
       "hl": "belle"
      },
      {
       "t": "un jeune homme",
       "tr": "a young man",
       "hl": "jeune"
      },
      {
       "t": "un bon livre",
       "tr": "a good book",
       "hl": "bon"
      },
      {
       "t": "une grande ville",
       "tr": "a big city",
       "hl": "grande"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Remember the initials **B-A-G-S**: Beauty, Age, Goodness, Size. Everything else follows the noun. · B-A-G-S মনে রাখুন: Beauty, Age, Goodness, Size।"
    },
    {
     "type": "rule",
     "name": "Before a vowel, three adjectives change shape",
     "color": "orange",
     "desc": "{{beau, nouveau, vieux}} become {{bel, nouvel, vieil}} before a masculine noun starting with a vowel or mute h. · স্বর বা mute h-এর আগে এই তিনটি রূপ বদলায়।",
     "examples": [
      {
       "t": "un bel appartement",
       "tr": "a beautiful flat",
       "hl": "bel"
      },
      {
       "t": "un nouvel ami",
       "tr": "a new friend",
       "hl": "nouvel"
      },
      {
       "t": "un vieil homme",
       "tr": "an old man",
       "hl": "vieil"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "un grand homme",
       "label": "before",
       "desc": "*a great man* — figurative."
      },
      {
       "t": "un homme grand",
       "label": "after",
       "desc": "*a tall man* — literal."
      },
      {
       "t": "mon ancien patron",
       "label": "before",
       "desc": "*my former boss*."
      },
      {
       "t": "un meuble ancien",
       "label": "after",
       "desc": "*an antique piece of furniture*."
      }
     ],
     "title": "Position changes meaning"
    },
    {
     "type": "table",
     "head": [
      "Adjective",
      "Before the noun",
      "After the noun"
     ],
     "rows": [
      [
       "{{cher}}",
       "dear, beloved",
       "expensive"
      ],
      [
       "{{propre}}",
       "own",
       "clean"
      ],
      [
       "{{seul}}",
       "only",
       "alone"
      ],
      [
       "{{pauvre}}",
       "unfortunate",
       "penniless"
      ]
     ],
     "title": "Four more that shift"
    },
    {
     "type": "practice",
     "text": "Read each pair and feel the change in meaning. · প্রতিটি জোড়া পড়ুন এবং অর্থের পরিবর্তন অনুভব করুন।",
     "lines": [
      "un grand homme — un homme grand",
      "ma chère amie — une voiture chère",
      "mon propre livre — un livre propre",
      "le seul enfant — un enfant seul"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The feminine of {{heureux}} is…",
       "options": [
        "heureux",
        "heureuse",
        "heureuxe",
        "heureure"
       ],
       "answer": 1,
       "explain": "-eux becomes -euse."
      },
      {
       "q": "{{un homme grand}} means…",
       "options": [
        "an old man",
        "a grown man",
        "a tall man",
        "a great man"
       ],
       "answer": 2,
       "explain": "After the noun it is literal; before, figurative."
      },
      {
       "q": "Which is correct before a vowel?",
       "options": [
        "un beau appartement",
        "un belle appartement",
        "un bell appartement",
        "un bel appartement"
       ],
       "answer": 3,
       "explain": "{{beau}} becomes {{bel}} before a vowel sound."
      },
      {
       "q": "{{mon propre livre}} means…",
       "options": [
        "my own book",
        "my clean book",
        "my proper book",
        "my only book"
       ],
       "answer": 0,
       "explain": "Before the noun, {{propre}} means *own*."
      },
      {
       "q": "What does B-A-G-S stand for?",
       "options": [
        "Beauty, Action, Grade, Shape",
        "Beauty, Age, Goodness, Size",
        "Big, Angry, Good, Small",
        "Before, After, Gender, Singular"
       ],
       "answer": 1,
       "explain": "These four meanings put an adjective in front."
      },
      {
       "q": "Which adjective normally follows its noun?",
       "options": [
        "jeune",
        "bon",
        "rouge",
        "petit"
       ],
       "answer": 2,
       "explain": "Colours always follow: {{une voiture rouge}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-compare",
   "icon": "+/-",
   "title": "Comparing Things",
   "subtitle": "More, less, as — and the best of all",
   "minutes": 11,
   "goals": [
    "Build comparatives with plus, moins and aussi",
    "Use the irregular meilleur and mieux",
    "Form superlatives with the right article"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Comparison in French is refreshingly regular: one small word before the adjective, and {{que}} for *than*. · ফরাসিতে তুলনা করা সহজ ও নিয়মিত।"
    },
    {
     "type": "rule",
     "name": "The three comparatives",
     "color": "green",
     "desc": "Put {{plus}}, {{moins}} or {{aussi}} before the adjective, and {{que}} after it. · বিশেষণের আগে plus, moins বা aussi, পরে que।",
     "examples": [
      {
       "t": "Rana est plus grand que Bappy.",
       "tr": "taller than",
       "hl": "plus"
      },
      {
       "t": "Rana est moins grand que Bappy.",
       "tr": "less tall than",
       "hl": "moins"
      },
      {
       "t": "Rana est aussi grand que Bappy.",
       "tr": "as tall as",
       "hl": "aussi"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Two irregulars you must know",
     "color": "red",
     "desc": "{{bon}} (adjective) becomes {{meilleur}}; {{bien}} (adverb) becomes {{mieux}}. Never say *plus bon* or *plus bien*. · bon হয় meilleur, bien হয় mieux।",
     "examples": [
      {
       "t": "Ce café est meilleur.",
       "tr": "This coffee is better.",
       "hl": "meilleur"
      },
      {
       "t": "Elle parle mieux que moi.",
       "tr": "She speaks better than I do.",
       "hl": "mieux"
      },
      {
       "t": "C'est pire que hier.",
       "tr": "It is worse than yesterday.",
       "hl": "pire"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{meilleur}} describes a **noun**; {{mieux}} describes a **verb**. *Better coffee* is {{un meilleur café}}; *speaks better* is {{parle mieux}}. · meilleur নামের জন্য, mieux ক্রিয়ার জন্য।"
    },
    {
     "type": "rule",
     "name": "The superlative",
     "color": "purple",
     "desc": "Add the definite article: {{le plus}}, {{la plus}}, {{les plus}}. For *in* or *of* after a superlative, French uses **de**. · superlative-এ article যোগ হয়; পরে de বসে।",
     "examples": [
      {
       "t": "le plus grand bâtiment",
       "tr": "the tallest building",
       "hl": "le plus"
      },
      {
       "t": "la ville la plus belle du monde",
       "tr": "the most beautiful city in the world",
       "hl": "du monde"
      },
      {
       "t": "le meilleur étudiant de la classe",
       "tr": "the best student in the class",
       "hl": "de la classe"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "English says *the best in the world*; French says *of the world* — {{du monde}}. Using {{dans}} here is a classic slip. · ইংরেজির in-এর জায়গায় ফরাসি de ব্যবহার করে।"
    },
    {
     "type": "sentence",
     "t": "Ce chien est le plus petit de tous.",
     "tr": "suh shyan ay luh plew puh-TEE duh TOOS · স্য শিয়ঁ এ ল্য প্ল্যু প্যতি দ্য তুস",
     "mean": "This dog is the smallest of all.",
     "words": [
      {
       "t": "Ce",
       "mean": "this"
      },
      {
       "t": "chien",
       "mean": "dog"
      },
      {
       "t": "est",
       "mean": "is"
      },
      {
       "t": "le",
       "mean": "the"
      },
      {
       "t": "plus",
       "mean": "most"
      },
      {
       "t": "petit",
       "mean": "small"
      },
      {
       "t": "de",
       "mean": "of"
      },
      {
       "t": "tous",
       "mean": "all"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*Better* as an adjective is…",
       "options": [
        "mieux",
        "plus bon",
        "plus bien",
        "meilleur"
       ],
       "answer": 3,
       "explain": "{{meilleur}} goes with nouns, {{mieux}} with verbs."
      },
      {
       "q": "*She speaks better than I do* is…",
       "options": [
        "Elle parle mieux que moi.",
        "Elle parle meilleur que moi.",
        "Elle parle plus bien que moi.",
        "Elle parle bien que moi."
       ],
       "answer": 0,
       "explain": "The verb {{parle}} needs the adverb {{mieux}}."
      },
      {
       "q": "*As tall as* is built with…",
       "options": [
        "très … que",
        "aussi … que",
        "plus … que",
        "moins … que"
       ],
       "answer": 1,
       "explain": "{{aussi grand que}} = as tall as."
      },
      {
       "q": "*The most beautiful city in the world* ends with…",
       "options": [
        "au monde",
        "le monde",
        "du monde",
        "dans le monde"
       ],
       "answer": 2,
       "explain": "After a superlative French uses {{de}}."
      },
      {
       "q": "The comparative of {{mauvais}} is…",
       "options": [
        "moins",
        "mieux",
        "meilleur",
        "pire"
       ],
       "answer": 3,
       "explain": "{{pire}} — or the regular {{plus mauvais}}."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-pronouns",
   "icon": "y/en",
   "title": "Object Pronouns, en and y",
   "subtitle": "The small words that make you sound French",
   "minutes": 15,
   "goals": [
    "Separate direct and indirect object pronouns",
    "Use en and y correctly",
    "Place two pronouns in the right order"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Nothing marks an advanced speaker faster than handling these little words. They sit **before** the verb, not after it as in English. · এই ছোট শব্দগুলোই উন্নত বক্তার পরিচয়। ইংরেজির মতো পরে নয়, এগুলো ক্রিয়ার আগে বসে।"
    },
    {
     "type": "table",
     "head": [
      "",
      "Direct",
      "Indirect",
      "Example"
     ],
     "rows": [
      [
       "me",
       "{{me}}",
       "{{me}}",
       "{{Il me voit.}}"
      ],
      [
       "you",
       "{{te}}",
       "{{te}}",
       "{{Je te parle.}}"
      ],
      [
       "him/her/it",
       "{{le / la}}",
       "{{lui}}",
       "{{Je lui donne.}}"
      ],
      [
       "us",
       "{{nous}}",
       "{{nous}}",
       "{{Elle nous aide.}}"
      ],
      [
       "you (pl.)",
       "{{vous}}",
       "{{vous}}",
       "{{Je vous écoute.}}"
      ],
      [
       "them",
       "{{les}}",
       "{{leur}}",
       "{{Je leur écris.}}"
      ]
     ],
     "title": "The two sets"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The test is the preposition. If the French verb uses **à** before a person — {{parler à}}, {{donner à}}, {{écrire à}} — you need the indirect set: {{lui}} or {{leur}}. · ক্রিয়ার পরে à থাকলে indirect pronoun লাগবে।"
    },
    {
     "type": "rule",
     "name": "en replaces de + thing",
     "color": "blue",
     "desc": "{{en}} stands for *some of it*, *of them*, *from there* — anything introduced by **de** or a quantity. · en মানে তার কিছু, সেখান থেকে।",
     "examples": [
      {
       "t": "Tu veux du café ? — Oui, j'en veux.",
       "tr": "Yes, I want some.",
       "hl": "en"
      },
      {
       "t": "Il a trois frères ? — Il en a trois.",
       "tr": "He has three of them.",
       "hl": "en"
      },
      {
       "t": "Elle revient de Paris ? — Elle en revient.",
       "tr": "She is coming back from there.",
       "hl": "en"
      }
     ]
    },
    {
     "type": "rule",
     "name": "y replaces à + place or thing",
     "color": "green",
     "desc": "{{y}} stands for *there*, or *to it / about it* when the verb takes **à**. · y মানে সেখানে, কিংবা তাতে।",
     "examples": [
      {
       "t": "Tu vas à Paris ? — J'y vais demain.",
       "tr": "I am going there tomorrow.",
       "hl": "y"
      },
      {
       "t": "Il pense à son travail ? — Il y pense.",
       "tr": "He is thinking about it.",
       "hl": "y"
      },
      {
       "t": "Il y a du pain.",
       "tr": "There is some bread.",
       "hl": "y a"
      }
     ]
    },
    {
     "type": "rule",
     "name": "When two pronouns meet",
     "color": "purple",
     "desc": "The order is fixed: **me/te/se/nous/vous → le/la/les → lui/leur → y → en**. · দুটি pronoun একসঙ্গে এলে ক্রম নির্দিষ্ট।",
     "examples": [
      {
       "t": "Il me le donne.",
       "tr": "He gives it to me.",
       "hl": "me le"
      },
      {
       "t": "Je les lui envoie.",
       "tr": "I send them to him.",
       "hl": "les lui"
      },
      {
       "t": "Il y en a beaucoup.",
       "tr": "There are a lot of them.",
       "hl": "y en"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "After an **affirmative command** the pronouns jump behind the verb with hyphens, and {{me}} becomes {{moi}}: {{Donnez-le-moi !}} But a negative command keeps the normal order: {{Ne me le donnez pas !}} · অনুজ্ঞায় pronoun ক্রিয়ার পরে যায়।"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Full sentence",
       "t": "Je donne le livre à Salim.",
       "mean": "I give the book to Salim."
      },
      {
       "title": "Replace the thing",
       "t": "Je le donne à Salim.",
       "mean": "I give it to Salim."
      },
      {
       "title": "Replace the person",
       "t": "Je lui donne le livre.",
       "mean": "I give him the book."
      },
      {
       "title": "Replace both",
       "t": "Je le lui donne.",
       "mean": "I give it to him."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I am giving him the book* is…",
       "options": [
        "Je lui donne le livre.",
        "Je le donne le livre.",
        "Je leur donne le livre.",
        "Je y donne le livre."
       ],
       "answer": 0,
       "explain": "{{donner à}} needs the indirect pronoun {{lui}}."
      },
      {
       "q": "Which pronoun replaces {{de}} + a thing?",
       "options": [
        "lui",
        "en",
        "y",
        "le"
       ],
       "answer": 1,
       "explain": "{{en}} covers *some, of it, from there*."
      },
      {
       "q": "*I am going there tomorrow* is…",
       "options": [
        "Je le vais demain.",
        "Je lui vais demain.",
        "J'y vais demain.",
        "J'en vais demain."
       ],
       "answer": 2,
       "explain": "{{y}} replaces {{à}} plus a place."
      },
      {
       "q": "*He gives it to me* is…",
       "options": [
        "Il le me donne.",
        "Il lui me donne.",
        "Il me lui donne.",
        "Il me le donne."
       ],
       "answer": 3,
       "explain": "me comes before le in the fixed order."
      },
      {
       "q": "The command *Give it to me!* is…",
       "options": [
        "Donnez-le-moi !",
        "Donnez-moi-le !",
        "Me le donnez !",
        "Le moi donnez !"
       ],
       "answer": 0,
       "explain": "After an affirmative command, {{me}} becomes {{moi}} and goes last."
      },
      {
       "q": "In {{Il en a trois}}, what does {{en}} stand for?",
       "options": [
        "the verb",
        "the things being counted",
        "a place",
        "a person"
       ],
       "answer": 1,
       "explain": "With a number, {{en}} replaces the noun counted."
      }
     ]
    }
   ]
  },
  {
   "id": "u2-relative",
   "icon": "qui",
   "title": "Joining Sentences",
   "subtitle": "qui, que, dont, où — and this versus that",
   "minutes": 13,
   "goals": [
    "Choose between qui and que by function",
    "Use dont for de, and où for place and time",
    "Point at things with ce, cet, cette, ces"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Relative pronouns glue two short sentences into one adult sentence. Choosing between them is not about meaning — it is about the **job** the word does in its own clause. · relative pronoun দুটি ছোট বাক্যকে জোড়া দেয়। নির্বাচন নির্ভর করে বাক্যে তার কাজের উপর।"
    },
    {
     "type": "rule",
     "name": "qui is the subject, que is the object",
     "color": "blue",
     "desc": "If a **verb** follows directly, use {{qui}}. If a **subject** follows, use {{que}}. · সঙ্গে সঙ্গে ক্রিয়া এলে qui; কর্তা এলে que।",
     "examples": [
      {
       "t": "L'homme qui parle est mon oncle.",
       "tr": "who is speaking — verb follows",
       "hl": "qui parle"
      },
      {
       "t": "Le livre que je lis est intéressant.",
       "tr": "that I am reading — subject follows",
       "hl": "que je"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "A one-second test: look at the next word. Verb → {{qui}}. Person or pronoun → {{que}}. · পরের শব্দ দেখুন: ক্রিয়া হলে qui, কর্তা হলে que।"
    },
    {
     "type": "rule",
     "name": "dont carries de",
     "color": "orange",
     "desc": "When the original sentence needed **de**, the joining word is {{dont}} — *whose, of which, about which*. · মূল বাক্যে de লাগলে জোড়া দেওয়ার শব্দ হবে dont।",
     "examples": [
      {
       "t": "le livre dont je parle",
       "tr": "the book I am talking about (parler de)",
       "hl": "dont"
      },
      {
       "t": "l'homme dont la voiture est rouge",
       "tr": "the man whose car is red",
       "hl": "dont"
      },
      {
       "t": "la chose dont j'ai besoin",
       "tr": "the thing I need (avoir besoin de)",
       "hl": "dont"
      }
     ]
    },
    {
     "type": "rule",
     "name": "où covers place and time",
     "color": "green",
     "desc": "{{où}} means *where*, and also *when* after a word of time. · où মানে কোথায়, আবার সময়ের পরে কখন।",
     "examples": [
      {
       "t": "la ville où j'habite",
       "tr": "the town where I live",
       "hl": "où"
      },
      {
       "t": "le jour où il est arrivé",
       "tr": "the day when he arrived",
       "hl": "où"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "English can drop the joining word — *the book I am reading*. French never can: {{le livre que je lis}}. Leaving out {{que}} is one of the commonest written errors. · ইংরেজিতে বাদ দেওয়া যায়, ফরাসিতে কখনো নয়।"
    },
    {
     "type": "table",
     "head": [
      "Pointing word",
      "Used before",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "{{ce}}",
       "masculine noun",
       "{{ce livre}}",
       "this book"
      ],
      [
       "{{cet}}",
       "masculine + vowel",
       "{{cet homme}}",
       "this man"
      ],
      [
       "{{cette}}",
       "feminine noun",
       "{{cette maison}}",
       "this house"
      ],
      [
       "{{ces}}",
       "any plural",
       "{{ces enfants}}",
       "these children"
      ]
     ],
     "title": "This and that"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "French does not separate *this* from *that* unless it needs to. When it does, it adds **-ci** for near and **-là** for far: {{ce livre-ci}} and {{ce livre-là}}. · প্রয়োজনে -ci (কাছে) ও -là (দূরে) যোগ হয়।"
    },
    {
     "type": "sentence",
     "t": "La femme dont le fils habite à Paris est professeur.",
     "tr": "lah fahm dohn luh fees ah-beet ah pah-REE ay proh-feh-SUHR · লা ফাম দঁ ল্য ফিস আবিত আ পারি এ প্রফেস্যর",
     "mean": "The woman whose son lives in Paris is a teacher.",
     "words": [
      {
       "t": "La",
       "mean": "the"
      },
      {
       "t": "femme",
       "mean": "woman"
      },
      {
       "t": "dont",
       "mean": "whose"
      },
      {
       "t": "le",
       "mean": "the"
      },
      {
       "t": "fils",
       "mean": "son"
      },
      {
       "t": "habite",
       "mean": "lives"
      },
      {
       "t": "à",
       "mean": "in"
      },
      {
       "t": "Paris",
       "mean": "Paris"
      },
      {
       "t": "est",
       "mean": "is"
      },
      {
       "t": "professeur",
       "mean": "a teacher"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Choose: *L'homme ___ parle est mon oncle.*",
       "options": [
        "dont",
        "où",
        "qui",
        "que"
       ],
       "answer": 2,
       "explain": "A verb follows, so the word is the subject: {{qui}}."
      },
      {
       "q": "Choose: *Le livre ___ je lis est bon.*",
       "options": [
        "qui",
        "dont",
        "où",
        "que"
       ],
       "answer": 3,
       "explain": "A subject follows, so {{que}}."
      },
      {
       "q": "*The book I am talking about* is…",
       "options": [
        "le livre dont je parle",
        "le livre que je parle",
        "le livre qui je parle",
        "le livre où je parle"
       ],
       "answer": 0,
       "explain": "{{parler de}} needs {{dont}}."
      },
      {
       "q": "*The day when he arrived* uses…",
       "options": [
        "dont",
        "où",
        "quand",
        "que"
       ],
       "answer": 1,
       "explain": "After a time word, French uses {{où}}, not {{quand}}."
      },
      {
       "q": "Which form goes before {{homme}}?",
       "options": [
        "cette",
        "ces",
        "cet",
        "ce"
       ],
       "answer": 2,
       "explain": "{{cet}} is used before a masculine noun starting with a vowel sound."
      },
      {
       "q": "What is wrong with *le livre je lis*?",
       "options": [
        "It needs an accent",
        "It should be plural",
        "Nothing is wrong",
        "French cannot drop que"
       ],
       "answer": 3,
       "explain": "English may omit the relative pronoun; French may not."
      }
     ]
    }
   ]
  }
 ]
});
