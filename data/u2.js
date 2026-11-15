/* Unit 2 — The Grammar Engine. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "grammar",
 "order": 2,
 "icon": "le",
 "color": "indigo",
 "title": "The Grammar Engine",
 "subtitle": "Nouns, articles, adjectives and pronouns — the machinery under every sentence · নাম, article, বিশেষণ ও সর্বনাম — প্রতিটি বাক্যের নিচের যন্ত্রপাতি",
 "lessons": [
  {
   "id": "u2-gender",
   "icon": "♂♀",
   "title": "Gender, Properly · লিঙ্গ, ঠিকভাবে",
   "subtitle": "Beyond guessing: the endings that decide · আন্দাজ নয়: যে শেষাংশগুলো লিঙ্গ ঠিক করে",
   "minutes": 13,
   "goals": [
    "Use endings to predict gender reliably · শেষাংশ দেখে নির্ভরযোগ্যভাবে লিঙ্গ অনুমান করুন",
    "Handle nouns that change meaning with gender · লিঙ্গভেদে অর্থ বদলানো বিশেষ্য সামলান",
    "Form feminine job titles the modern way · আধুনিক রীতিতে স্ত্রীবাচক পদনাম গড়ুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bangla has no grammatical gender, so this is pure extra work — but it is **learnable work**. Roughly eight nouns in ten follow their ending. · বাংলায় লিঙ্গভেদ নেই, তাই এটি বাড়তি কাজ। তবে দশটির মধ্যে প্রায় আটটি নাম তার শেষাংশ মেনে চলে।"
    },
    {
     "type": "table",
     "head": [
      "Masculine endings · পুংবাচক শেষাংশ",
      "Example · উদাহরণ",
      "Feminine endings · স্ত্রীবাচক শেষাংশ",
      "Example · উদাহরণ"
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
       "-eur (things) · -eur (বস্তুবাচক)",
       "{{le bonheur}}",
       "-eur (qualities) · -eur (গুণবাচক)",
       "{{la couleur}}"
      ]
     ],
     "title": "The reliable endings · নির্ভরযোগ্য শেষাংশ"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Four famous traps in -age are feminine: {{la page}}, {{la plage}}, {{la cage}}, {{l'image}}. And {{l'eau}} is feminine despite -eau. · -age-এর চারটি ব্যতিক্রম স্ত্রীলিঙ্গ।"
    },
    {
     "type": "rule",
     "name": "Same word, two genders, two meanings · একই শব্দ, দুই লিঙ্গ, দুই অর্থ",
     "color": "orange",
     "desc": "A small group of nouns changes meaning with the article. These are examiner favourites. · কিছু শব্দ article বদলালে অর্থও বদলায়।",
     "examples": [
      {
       "t": "le livre / la livre",
       "tr": "the book / the pound · বই / পাউন্ড",
       "hl": "la livre"
      },
      {
       "t": "le tour / la tour",
       "tr": "the trip / the tower · ভ্রমণ / মিনার",
       "hl": "la tour"
      },
      {
       "t": "le poste / la poste",
       "tr": "the job / the post office · চাকরি / ডাকঘর",
       "hl": "la poste"
      },
      {
       "t": "le manche / la manche",
       "tr": "the handle / the sleeve · হাতল / জামার হাতা",
       "hl": "la manche"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Making a feminine job title · স্ত্রীবাচক পদনাম গড়া",
     "color": "blue",
     "desc": "Modern French feminises most professions. The pattern follows the masculine ending. · আধুনিক ফরাসি অধিকাংশ পেশার স্ত্রীলিঙ্গ রূপ তৈরি করে।",
     "examples": [
      {
       "t": "un avocat → une avocate",
       "tr": "lawyer · আইনজীবী",
       "hl": "avocate"
      },
      {
       "t": "un directeur → une directrice",
       "tr": "director · পরিচালক",
       "hl": "directrice"
      },
      {
       "t": "un vendeur → une vendeuse",
       "tr": "shop assistant · দোকানের কর্মী",
       "hl": "vendeuse"
      },
      {
       "t": "un infirmier → une infirmière",
       "tr": "nurse · সেবিকা",
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
       "mean": "trade, occupation · পেশা; বৃত্তি",
       "root": "métier"
      },
      {
       "t": "la réunion",
       "tr": "lah ray-ew-NYOHN · লা রেউ্যনিয়ঁ",
       "mean": "meeting · সভা; বৈঠক",
       "root": "-ion"
      },
      {
       "t": "le bâtiment",
       "tr": "luh bah-tee-MAHN · ল্য বাতিমাঁ",
       "mean": "building · ভবন",
       "root": "-ment"
      },
      {
       "t": "la qualité",
       "tr": "lah kah-lee-TAY · লা কালিতে",
       "mean": "quality · গুণ; মান",
       "root": "-té"
      },
      {
       "t": "le courage",
       "tr": "luh koo-RAHZH · ল্য কুরাজ়",
       "mean": "courage · সাহস",
       "root": "-age"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "C'est un problème ou une problème ?",
       "tr": "seh tuhn proh-BLEM oo ewn proh-BLEM · সেত্ আঁ প্রব্লেম্ উ ্যুন্ প্রব্লেম্",
       "mean": "Is it un problème or une problème? · এটা un নাকি une problème?"
      },
      {
       "who": "Salim",
       "t": "Un problème. Les mots en -ème sont masculins.",
       "tr": "uhn proh-BLEM lay moh ahn EM sohn mahs-kew-LAHN · আঁ প্রব্লেম্। লে মো অঁন্ এম্ সঁ মাস্ক্যুলাঁ",
       "mean": "Un problème. Words in -ème are masculine. · un problème; -ème শেষে পুংলিঙ্গ।"
      },
      {
       "who": "Rima",
       "t": "Et la page ? Elle finit en -age.",
       "tr": "ay lah PAHZH el fee-nee ahn NAHZH · এ লা পাজ়্? এল্ ফিনি অঁন্ আজ়্",
       "mean": "And la page? It ends in -age. · আর la page? এটা তো -age-এ শেষ।"
      },
      {
       "who": "Salim",
       "t": "C'est une des quatre exceptions. Il faut les apprendre.",
       "tr": "seh tewn day kah-truh zek-sep-SYOHN eel foh lay zah-PRAHNDR · সেত্ ্যুন্ দে কাত্র্ এক্সেপ্সীয়ঁ। ইল্ ফো লেজ়্ আপ্রঁদ্র্",
       "mean": "It is one of the four exceptions. You have to learn them. · চারটি ব্যতিক্রমের একটি; মুখস্থ করতে হয়।"
      }
     ]
    },
    {
     "t": "La décision du gouvernement est une bonne nouvelle.",
     "tr": "lah day-see-ZYOHN dew goo-vehr-nuh-MAHN eh tewn bon noo-VEL · লা দেসিজ়ীয়ঁ দ্যু গুভের্ন্যমঁ এত্ ্যুন্ বন্ নুভেল্",
     "mean": "The government's decision is good news. · সরকারের সিদ্ধান্তটি সুখবর।",
     "words": [
      {
       "t": "La",
       "mean": "the (feminine) · (স্ত্রীবাচক নির্দেশক)"
      },
      {
       "t": "décision",
       "mean": "decision · সিদ্ধান্ত"
      },
      {
       "t": "du",
       "mean": "of the · -এর"
      },
      {
       "t": "gouvernement",
       "mean": "government · সরকার"
      },
      {
       "t": "est",
       "mean": "is · হলো"
      },
      {
       "t": "une",
       "mean": "a (feminine) · একটি"
      },
      {
       "t": "bonne",
       "mean": "good (feminine) · ভালো"
      },
      {
       "t": "nouvelle",
       "mean": "piece of news · খবর"
      }
     ],
     "note": "**-tion** and **-elle** are feminine, **-ment** is masculine, and **bonne** has to follow **nouvelle** into the feminine. · শেষাংশই লিঙ্গ ঠিক করে, আর বিশেষণ তার সঙ্গে মেলে।",
     "type": "sentence"
    },
    {
     "t": "Le silence de la nuit est un vrai bonheur.",
     "tr": "luh see-LAHNS duh lah NWEE eh tuhn vreh boh-NUHR · ল্য সিলঁস্ দ্য লা নুই এত্ আঁ ভ্রে বন্যর্",
     "mean": "The silence of the night is a real joy. · রাতের নীরবতা সত্যিকারের আনন্দ।",
     "words": [
      {
       "t": "Le",
       "mean": "the (masculine) · (পুংবাচক নির্দেশক)"
      },
      {
       "t": "silence",
       "mean": "silence · নীরবতা"
      },
      {
       "t": "de",
       "mean": "of · -এর"
      },
      {
       "t": "la",
       "mean": "the (feminine) · (স্ত্রীবাচক নির্দেশক)"
      },
      {
       "t": "nuit",
       "mean": "night · রাত"
      },
      {
       "t": "est",
       "mean": "is · হলো"
      },
      {
       "t": "un",
       "mean": "a · একটি"
      },
      {
       "t": "vrai",
       "mean": "real · সত্যিকারের"
      },
      {
       "t": "bonheur",
       "mean": "happiness · আনন্দ"
      }
     ],
     "note": "**-ence** is feminine but **silence** is masculine, and **-eur** is usually feminine but **bonheur** is not. The rules hold about eight times in ten. · নিয়ম মোটামুটি দশে আটবার খাটে, এখানে দুটিই ব্যতিক্রম।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud and listen to the article. The ending tells you which one to say. · জোরে পড়ুন ও নির্দেশক পদ শুনুন; শেষাংশই বলে দেয় কোনটি হবে।",
     "lines": [
      {
       "t": "le gouvernement et la décision",
       "mean": "the government and the decision · সরকার ও সিদ্ধান্ত"
      },
      {
       "t": "le voyage et la liberté",
       "mean": "the journey and the freedom · ভ্রমণ ও স্বাধীনতা"
      },
      {
       "t": "le bureau et la recette",
       "mean": "the office and the recipe · দপ্তর ও রন্ধনপ্রণালী"
      },
      {
       "t": "la page, la plage, la cage",
       "mean": "the page, the beach, the cage · পাতা, সৈকত, খাঁচা"
      },
      {
       "t": "l'eau est froide ce matin",
       "mean": "the water is cold this morning · আজ সকালে জল ঠান্ডা"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{la plage}} is feminine. Why is that surprising? · {{la plage}} স্ত্রীলিঙ্গ। এটি অবাক করার মতো কেন?",
       "options": [
        "Because -age is usually masculine · কারণ -age সাধারণত পুংলিঙ্গ",
        "Because it is a borrowed word · কারণ এটি ধার করা শব্দ",
        "Because it ends in a vowel · কারণ এটি স্বরধ্বনিতে শেষ হয়",
        "Because it is a place · কারণ এটি একটি জায়গা"
       ],
       "answer": 0,
       "explain": "{{page, plage, cage, image}} are the -age exceptions. · {{page, plage, cage, image}} হলো -age-এর ব্যতিক্রম।"
      },
      {
       "q": "What does {{la tour}} mean? · {{la tour}} মানে কী?",
       "options": [
        "the tour guide · ভ্রমণ-পথপ্রদর্শক",
        "the tower · মিনার",
        "the trip · ভ্রমণ",
        "the turn · পালা"
       ],
       "answer": 1,
       "explain": "{{le tour}} is a trip or turn; {{la tour}} is a tower. · {{le tour}} মানে ভ্রমণ বা পালা; {{la tour}} মানে মিনার।"
      },
      {
       "q": "The feminine of {{un directeur}} is… · {{un directeur}}-এর স্ত্রীলিঙ্গ রূপ…",
       "options": [
        "une directeure",
        "une directeur",
        "une directrice",
        "une directeuse"
       ],
       "answer": 2,
       "explain": "-teur usually becomes -trice. · -teur সাধারণত -trice হয়।"
      },
      {
       "q": "Which ending is reliably feminine? · কোন শেষাংশ নির্ভরযোগ্যভাবে স্ত্রীলিঙ্গ?",
       "options": [
        "-ment",
        "-eau",
        "-isme",
        "-tion"
       ],
       "answer": 3,
       "explain": "-tion and -sion are almost always feminine. · -tion ও -sion প্রায় সবসময়ই স্ত্রীলিঙ্গ।"
      },
      {
       "q": "Which noun is masculine? · কোন নামটি পুংলিঙ্গ?",
       "options": [
        "le gouvernement",
        "la décision",
        "la culture",
        "la patience"
       ],
       "answer": 0,
       "explain": "-ment is a masculine ending. · -ment একটি পুংলিঙ্গ শেষাংশ।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-plural",
   "icon": "-x",
   "title": "Plurals That Misbehave · যে বহুবচনগুলো নিয়ম মানে না",
   "subtitle": "When s is not enough · যখন কেবল s যথেষ্ট নয়",
   "minutes": 11,
   "goals": [
    "Apply the -eau, -al and -ail patterns · -eau, -al ও -ail ছাঁচ প্রয়োগ করুন",
    "Remember the seven -ou nouns that take x · x নেয় এমন সাতটি -ou বিশেষ্য মনে রাখুন",
    "Handle the irregulars · অনিয়মিতগুলো সামলান"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most plurals simply add **s**, which you never hear. The interesting ones add **x** or rebuild the ending — and those you *do* hear. · অধিকাংশ বহুবচনে s যোগ হয়, যা শোনা যায় না। যেগুলো x নেয় বা শেষাংশ বদলায়, সেগুলোই শোনা যায়।"
    },
    {
     "type": "table",
     "head": [
      "Ending · শেষাংশ",
      "Becomes · হয়ে যায়",
      "Example · উদাহরণ",
      "Plural · বহুবচন"
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
       "-ail (7 words) · -ail (৭টি শব্দ)",
       "-aux",
       "{{le travail}}",
       "{{les travaux}}"
      ],
      [
       "-s, -x, -z",
       "no change · কোনো বদল নেই",
       "{{le fils}}",
       "{{les fils}}"
      ]
     ],
     "title": "The patterns · ছাঁচগুলো"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Seven nouns in **-ou** take x. Learn them as a silly list: {{bijou, caillou, chou, genou, hibou, joujou, pou}} — jewel, pebble, cabbage, knee, owl, toy, louse. Every other -ou takes s. · সাতটি -ou শব্দ x নেয়; বাকি সব s।"
    },
    {
     "type": "rule",
     "name": "The -al escapees · -al-এর পলাতকগুলো",
     "color": "red",
     "desc": "Not every -al becomes -aux. A short list keeps a plain s. · সব -al শব্দ -aux হয় না।",
     "examples": [
      {
       "t": "le bal → les bals",
       "tr": "dance · নাচের আসর",
       "hl": "bals"
      },
      {
       "t": "le festival → les festivals",
       "tr": "festival · উৎসব",
       "hl": "festivals"
      },
      {
       "t": "le carnaval → les carnavals",
       "tr": "carnival · কার্নিভাল",
       "hl": "carnavals"
      },
      {
       "t": "le récital → les récitals",
       "tr": "recital · সংগীতানুষ্ঠান",
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
       "desc": "*eye → eyes*. No pattern at all; learn it whole. · *চোখ → চোখগুলো*। কোনো নিয়ম নেই; পুরোটা মুখস্থ করুন।"
      },
      {
       "t": "monsieur → messieurs",
       "label": "both halves change",
       "desc": "Literally *my lord → my lords*. · আক্ষরিক অর্থে *আমার প্রভু → আমার প্রভুরা*।"
      },
      {
       "t": "madame → mesdames",
       "label": "both halves change",
       "desc": "Same logic: *ma + dame* becomes *mes + dames*. · একই যুক্তি: *ma + dame* হয়ে যায় *mes + dames*।"
      }
     ],
     "title": "The true irregulars · সত্যিকারের অনিয়মিতগুলো"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "A family name never takes s: {{les Rahman}}, {{les Dupont}}. · পারিবারিক নামে বহুবচনের s বসে না।"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Client",
       "t": "Je voudrais deux journaux, s'il vous plaît.",
       "tr": "zhuh voo-DREH duh zhoor-NOH seel voo PLEH · জ়্য ভুদ্রে দ্য জ়ুর্নো, সিল্ ভু প্লে",
       "mean": "I would like two newspapers, please. · দুটি খবরের কাগজ দিন।"
      },
      {
       "who": "Vendeur",
       "t": "Voilà. Et avec les yeux, ça va mieux ?",
       "tr": "vwah-LAH ay ah-vek lay ZYUH sah vah MYUH · ভোয়ালা। এ আভেক্ লেজ়্ য্য, সা ভা মীয়ো",
       "mean": "Here you are. And how are your eyes now? · এই নিন। চোখ এখন কেমন?"
      },
      {
       "who": "Client",
       "t": "Mieux, merci. Les docteurs étaient très gentils.",
       "tr": "MYUH mehr-SEE lay dok-TUHR ay-teh treh zhahn-TEE · মীয়ো, মের্সি। লে দক্ত্যর্ এতে ত্রে জ়ঁতি",
       "mean": "Better, thank you. The doctors were very kind. · ভালো, ধন্যবাদ। ডাক্তাররা খুব ভালো ছিলেন।"
      },
      {
       "who": "Vendeur",
       "t": "Tant mieux. Bonne journée !",
       "tr": "tahn MYUH bon zhoor-NAY · তঁ মীয়ো। বন্ জ়ুর্নে",
       "mean": "So much the better. Have a good day! · বেশ ভালো। দিনটি ভালো কাটুক!"
      }
     ]
    },
    {
     "t": "Les journaux et les travaux sont sur la table.",
     "tr": "lay zhoor-NOH ay lay trah-VOH sohn sewr lah TAHBL · লে জ়ুর্নো এ লে ত্রাভো সঁ স্যুর্ লা তাব্ল্",
     "mean": "The newspapers and the works are on the table. · খবরের কাগজ আর কাজগুলো টেবিলের উপরে।",
     "words": [
      {
       "t": "Les",
       "mean": "the · (বহুবচনের নির্দেশক)"
      },
      {
       "t": "journaux",
       "mean": "newspapers · খবরের কাগজগুলো"
      },
      {
       "t": "et",
       "mean": "and · এবং"
      },
      {
       "t": "les",
       "mean": "the · (বহুবচনের নির্দেশক)"
      },
      {
       "t": "travaux",
       "mean": "works · কাজগুলো"
      },
      {
       "t": "sont",
       "mean": "are · আছে"
      },
      {
       "t": "sur",
       "mean": "on · উপরে"
      },
      {
       "t": "la",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "table",
       "mean": "table · টেবিল"
      }
     ],
     "note": "Words in **-al** turn into **-aux**, so the plural is heard but the s is not written. · **-al** হয়ে যায় **-aux**, তাই বহুবচনে s নেই।",
     "type": "sentence"
    },
    {
     "t": "Les yeux des chevaux sont très doux.",
     "tr": "lay ZYUH day shuh-VOH sohn treh DOO · লেজ়্ য্য দে শ্যভো সঁ ত্রে দু",
     "mean": "The eyes of the horses are very gentle. · ঘোড়াদের চোখ খুব কোমল।",
     "words": [
      {
       "t": "Les",
       "mean": "the · (বহুবচনের নির্দেশক)"
      },
      {
       "t": "yeux",
       "mean": "eyes · চোখ"
      },
      {
       "t": "des",
       "mean": "of the · -দের"
      },
      {
       "t": "chevaux",
       "mean": "horses · ঘোড়া"
      },
      {
       "t": "sont",
       "mean": "are · আছে"
      },
      {
       "t": "très",
       "mean": "very · খুব"
      },
      {
       "t": "doux",
       "mean": "gentle · কোমল"
      }
     ],
     "note": "Two plurals that keep nothing of their singular: **œil** becomes **yeux**, **cheval** becomes **chevaux**. · **œil** থেকে **yeux**, **cheval** থেকে **chevaux** — একবচনের চিহ্নই থাকে না।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Say each singular, then its plural. Listen for which plurals actually change the sound. · একবচন বলে তার বহুবচন বলুন।",
     "lines": [
      {
       "t": "le journal — les journaux",
       "mean": "the newspaper — the newspapers · সংবাদপত্র — সংবাদপত্রগুলো"
      },
      {
       "t": "le bateau — les bateaux",
       "mean": "the boat — the boats · নৌকা — নৌকাগুলো"
      },
      {
       "t": "le travail — les travaux",
       "mean": "the work — the works · কাজ — কাজগুলো"
      },
      {
       "t": "le genou — les genoux",
       "mean": "the knee — the knees · হাঁটু — হাঁটুগুলো"
      },
      {
       "t": "l'œil — les yeux",
       "mean": "the eye — the eyes · চোখ — চোখগুলো"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The plural of {{le journal}} is… · {{le journal}}-এর বহুবচন…",
       "options": [
        "les journales",
        "les journaux",
        "les journals",
        "les journaus"
       ],
       "answer": 1,
       "explain": "-al becomes -aux. · -al হয়ে যায় -aux।"
      },
      {
       "q": "Which -ou noun takes x in the plural? · কোন -ou নাম বহুবচনে x নেয়?",
       "options": [
        "le clou",
        "le sou",
        "le genou",
        "le trou"
       ],
       "answer": 2,
       "explain": "{{genou}} is one of the famous seven. · {{genou}} সেই বিখ্যাত সাতটির একটি।"
      },
      {
       "q": "The plural of {{le festival}} is… · {{le festival}}-এর বহুবচন…",
       "options": [
        "les festivaux",
        "les festivals-x",
        "les festivalles",
        "les festivals"
       ],
       "answer": 3,
       "explain": "{{bal, festival, carnaval, récital}} keep a plain s. · {{bal, festival, carnaval, récital}} কেবল s নেয়।"
      },
      {
       "q": "{{les yeux}} is the plural of… · {{les yeux}} কিসের বহুবচন?",
       "options": [
        "l'œil",
        "l'œuf",
        "l'eau",
        "l'an"
       ],
       "answer": 0,
       "explain": "A complete rebuild — learn it as a pair. · সম্পূর্ণ নতুন রূপ — জোড়া হিসেবে মুখস্থ করুন।"
      },
      {
       "q": "What is the plural of {{le fils}}? · {{le fils}}-এর বহুবচন কী?",
       "options": [
        "les filss",
        "les fils",
        "les filses",
        "les fis"
       ],
       "answer": 1,
       "explain": "Nouns already ending in s, x or z do not change. · যে নাম আগে থেকেই s, x বা z দিয়ে শেষ, তা বদলায় না।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-articles",
   "icon": "du",
   "title": "Articles & the Partitive · পদাশ্রয় ও আংশিক পদাশ্রয়",
   "subtitle": "Some bread, the bread, a bread · কিছু রুটি, সেই রুটি, একটি রুটি",
   "minutes": 14,
   "goals": [
    "Choose between definite, indefinite and partitive · নির্দিষ্ট, অনির্দিষ্ট ও আংশিক পদাশ্রয়ের মধ্যে বাছুন",
    "Use de after a negative and after quantities · নঞর্থক ও পরিমাণের পরে de ব্যবহার করুন",
    "Stop dropping articles the way English does · ইংরেজির মতো পদাশ্রয় ফেলে দেবেন না"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English says *I like coffee* and *I drink coffee* with no article at all. French never does. Every noun needs a word in front of it, and choosing the right one is half of sounding fluent. · ইংরেজি article ছাড়া চলতে পারে, ফরাসি পারে না।"
    },
    {
     "type": "table",
     "head": [
      "Type · ধরন",
      "Masculine · পুংবাচক",
      "Feminine · স্ত্রীবাচক",
      "Plural · বহুবচন",
      "Use it for · যে কাজে লাগান"
     ],
     "rows": [
      [
       "Definite · নির্দিষ্ট",
       "{{le}}",
       "{{la}}",
       "{{les}}",
       "a known thing, or a whole category · জানা কোনো বস্তু, বা গোটা শ্রেণি"
      ],
      [
       "Indefinite · অনির্দিষ্ট",
       "{{un}}",
       "{{une}}",
       "{{des}}",
       "one countable thing, or some · একটি গণনাযোগ্য বস্তু, বা কিছু"
      ],
      [
       "Partitive · আংশিক পদাশ্রয়",
       "{{du}}",
       "{{de la}}",
       "{{des}}",
       "an uncounted amount: some, any · অগণিত পরিমাণ: কিছু, খানিকটা"
      ]
     ],
     "title": "The three families · তিনটি শব্দপরিবার"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "J'aime le café.",
       "tr": "zhem luh kah-FAY · জ়েম ল্য কাফে",
       "mean": "I like coffee. · আমি কফি পছন্দ করি।",
       "note": "the whole category → definite · পুরো শ্রেণি → definite article"
      },
      {
       "t": "Je bois du café.",
       "tr": "zhuh bwah dew kah-FAY · জ়্য বোয়া দ্যু কাফে",
       "mean": "I drink some coffee. · আমি কিছু কফি পান করি।",
       "note": "an amount → partitive · একটি পরিমাণ → partitive"
      },
      {
       "t": "Je voudrais un café.",
       "tr": "zhuh voo-DRAY uhn kah-FAY · জ়্য ভুদ্রে উঁ কাফে",
       "mean": "I would like a coffee. · আমি একটি কফি চাই।",
       "note": "one cup → indefinite · এক কাপ → indefinite article"
      }
     ],
     "title": "One noun, three meanings · এক বিশেষ্য, তিন অর্থ"
    },
    {
     "type": "rule",
     "name": "After a negative, everything becomes de · নঞর্থকের পরে সবই de হয়ে যায়",
     "color": "red",
     "desc": "{{un, une, des, du, de la}} all collapse to **de** or **d'** after a negative verb. The definite article does **not** change. · না-বাচক ক্রিয়ার পরে সব article হয়ে যায় de।",
     "examples": [
      {
       "t": "J'ai du pain → Je n'ai pas de pain.",
       "tr": "I have bread → I have no bread · আমার রুটি আছে → আমার রুটি নেই",
       "hl": "de pain"
      },
      {
       "t": "Il a des amis → Il n'a pas d'amis.",
       "tr": "He has friends → He has no friends · তার বন্ধু আছে → তার বন্ধু নেই",
       "hl": "d'amis"
      },
      {
       "t": "J'aime le thé → Je n'aime pas le thé.",
       "tr": "unchanged: it is definite · অপরিবর্তিত, কারণ এটি নির্দিষ্ট",
       "hl": "le thé"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Quantities take de too · পরিমাণেও de বসে",
     "color": "green",
     "desc": "After a word of quantity, use plain **de** with no article. · পরিমাণবাচক শব্দের পরে কেবল de বসে।",
     "examples": [
      {
       "t": "beaucoup de monde",
       "tr": "a lot of people · অনেক লোক",
       "hl": "de"
      },
      {
       "t": "un peu de sucre",
       "tr": "a little sugar · একটু চিনি",
       "hl": "de"
      },
      {
       "t": "trop de travail",
       "tr": "too much work · অতিরিক্ত কাজ",
       "hl": "de"
      },
      {
       "t": "une bouteille d'eau",
       "tr": "a bottle of water · এক বোতল জল",
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
     "name": "des becomes de before an early adjective · বিশেষণ আগে বসলে des হয়ে যায় de",
     "color": "purple",
     "desc": "When an adjective comes **before** a plural noun, {{des}} shortens to {{de}}. · বহুবচন নামের আগে বিশেষণ থাকলে des হয়ে যায় de।",
     "examples": [
      {
       "t": "des livres → de beaux livres",
       "tr": "beautiful books · সুন্দর বইগুলো",
       "hl": "de beaux"
      },
      {
       "t": "des amis → de vrais amis",
       "tr": "true friends · প্রকৃত বন্ধুরা",
       "hl": "de vrais"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Serveur",
       "t": "Vous prenez du thé ou du café ?",
       "tr": "voo pruh-NAY dew TAY oo dew kah-FAY · ভু প্র্যনে দ্যু তে উ দ্যু কাফে",
       "mean": "Will you have tea or coffee? · চা নেবেন না কফি?"
      },
      {
       "who": "Rima",
       "t": "Du thé, mais sans sucre.",
       "tr": "dew TAY meh sahn SEWKR · দ্যু তে, মে সঁ স্যুক্র্",
       "mean": "Tea, but without sugar. · চা, তবে চিনি ছাড়া।"
      },
      {
       "who": "Serveur",
       "t": "Et vous, monsieur ?",
       "tr": "ay VOO muh-SYUH · এ ভু, ম্যসীয়ো",
       "mean": "And you, sir? · আর আপনি?"
      },
      {
       "who": "Salim",
       "t": "Je ne prends pas de café le soir, merci.",
       "tr": "zhuh nuh prahn pah duh kah-FAY luh SWAHR mehr-SEE · জ়্য ন্য প্রঁ পা দ্য কাফে ল্য সোয়ার্, মের্সি",
       "mean": "I don't drink coffee at night, thank you. · রাতে কফি খাই না, ধন্যবাদ।"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Je ne prends pas de sucre dans mon café.",
     "tr": "zhuh nuh prahn pah duh SEWKR dahn mohn kah-FAY · জ়্য ন্য প্রাঁ পা দ্য স্যুক্র দাঁ মঁ কাফে",
     "mean": "I do not take sugar in my coffee. · আমি কফিতে চিনি নিই না।",
     "words": [
      {
       "t": "Je",
       "mean": "I · আমি"
      },
      {
       "t": "ne",
       "mean": "not (part 1) · না (প্রথম অংশ)"
      },
      {
       "t": "prends",
       "mean": "take · নেওয়া"
      },
      {
       "t": "pas",
       "mean": "not (part 2) · না (দ্বিতীয় অংশ)"
      },
      {
       "t": "de",
       "mean": "any · কোনো"
      },
      {
       "t": "sucre",
       "mean": "sugar · চিনি"
      },
      {
       "t": "dans",
       "mean": "in · মধ্যে"
      },
      {
       "t": "mon",
       "mean": "my · আমার"
      },
      {
       "t": "café",
       "mean": "coffee · কফি"
      }
     ],
     "note": "{{du sucre}} became {{de sucre}} because the verb is negative. · ক্রিয়াটি না-বাচক বলে {{du sucre}} হয়ে গেছে {{de sucre}}।"
    },
    {
     "t": "Il boit de l'eau mais il ne boit jamais de lait.",
     "tr": "eel bwah duh LOH meh eel nuh bwah zhah-meh duh LEH · ইল্ বোয়া দ্য লো মে ইল্ ন্য বোয়া জ়ামে দ্য লে",
     "mean": "He drinks water but he never drinks milk. · সে জল খায়, কিন্তু দুধ কখনো খায় না।",
     "words": [
      {
       "t": "Il",
       "mean": "he · সে"
      },
      {
       "t": "boit",
       "mean": "drinks · খায়"
      },
      {
       "t": "de",
       "mean": "some · কিছু"
      },
      {
       "t": "l'eau",
       "mean": "the water · জল"
      },
      {
       "t": "mais",
       "mean": "but · কিন্তু"
      },
      {
       "t": "il",
       "mean": "he · সে"
      },
      {
       "t": "ne",
       "mean": "not (part 1) · না (প্রথম অংশ)"
      },
      {
       "t": "boit",
       "mean": "drinks · খায়"
      },
      {
       "t": "jamais",
       "mean": "never · কখনো"
      },
      {
       "t": "de",
       "mean": "any · কোনো"
      },
      {
       "t": "lait",
       "mean": "milk · দুধ"
      }
     ],
     "note": "**de l'eau** in the positive half, plain **de lait** in the negative. **jamais** empties the partitive exactly as **pas** does. · না-বাচক অংশে partitive মিলিয়ে যায়; **jamais**-ও **pas**-এর মতোই কাজ করে।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each pair aloud. Hear how the partitive disappears after a negative. · প্রতিটি জোড়া পড়ুন; না-বাচক বাক্যে partitive কীভাবে মিলিয়ে যায় শুনুন।",
     "lines": [
      {
       "t": "Je prends du café le matin.",
       "mean": "I have coffee in the morning · আমি সকালে কফি খাই"
      },
      {
       "t": "Je ne prends pas de café le soir.",
       "mean": "I don't have coffee at night · আমি রাতে কফি খাই না"
      },
      {
       "t": "Elle achète de la viande et des légumes.",
       "mean": "She buys meat and vegetables · সে মাংস ও সবজি কেনে"
      },
      {
       "t": "Il n'y a plus de pain à la maison.",
       "mean": "There is no bread left at home · বাড়িতে আর রুটি নেই"
      },
      {
       "t": "J'aime le thé, mais je bois de l'eau.",
       "mean": "I like tea, but I drink water · চা পছন্দ করি, তবে জল খাই"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I like tea* in French is… · *I like tea* ফরাসিতে হবে…",
       "options": [
        "J'aime thé.",
        "J'aime un thé.",
        "J'aime le thé.",
        "J'aime du thé."
       ],
       "answer": 2,
       "explain": "A whole category takes the definite article. · পুরো শ্রেণি বোঝাতে definite article বসে।"
      },
      {
       "q": "*I do not have any bread* is… · *I do not have any bread* হবে…",
       "options": [
        "Je n'ai pas du pain.",
        "Je n'ai pas le pain.",
        "Je n'ai pas un pain.",
        "Je n'ai pas de pain."
       ],
       "answer": 3,
       "explain": "After a negative, {{du}} becomes {{de}}. · না-বাচক ক্রিয়ার পরে {{du}} হয়ে যায় {{de}}।"
      },
      {
       "q": "Which is correct? · কোনটি সঠিক?",
       "options": [
        "beaucoup de monde",
        "beaucoup du monde",
        "beaucoup des monde",
        "beaucoup le monde"
       ],
       "answer": 0,
       "explain": "Quantity words take bare {{de}}. · পরিমাণবাচক শব্দের পরে কেবল {{de}} বসে।"
      },
      {
       "q": "*Beautiful books* in the plural is… · বহুবচনে *Beautiful books* হবে…",
       "options": [
        "le beaux livres",
        "de beaux livres",
        "des beaux livres",
        "du beaux livres"
       ],
       "answer": 1,
       "explain": "{{des}} shrinks to {{de}} before a leading adjective. · নামের আগে বিশেষণ থাকলে {{des}} ছোট হয়ে {{de}} হয়।"
      },
      {
       "q": "Why does {{J'aime le thé}} keep {{le}} in the negative? · না-বাচক বাক্যেও {{J'aime le thé}}-তে {{le}} থাকে কেন?",
       "options": [
        "It is an exception verb · এটি ব্যতিক্রমী ক্রিয়া",
        "Because aimer takes no object · কারণ aimer কোনো কর্ম নেয় না",
        "Definite articles never change after a negative · নঞর্থকের পরে নির্দিষ্ট পদাশ্রয় বদলায় না",
        "Tea is masculine · চা পুংলিঙ্গ"
       ],
       "answer": 2,
       "explain": "Only indefinite and partitive articles collapse to de. · কেবল indefinite ও partitive article de-তে পরিণত হয়।"
      },
      {
       "q": "Which phrase keeps its article against the usual rule? · কোন বাক্যাংশ নিয়ম ভেঙে article ধরে রাখে?",
       "options": [
        "trop de travail",
        "un peu de sucre",
        "assez de temps",
        "la plupart des étudiants"
       ],
       "answer": 3,
       "explain": "{{la plupart des}} and {{bien des}} are the exceptions. · {{la plupart des}} ও {{bien des}} হলো ব্যতিক্রম।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-contract",
   "icon": "au",
   "title": "Contracted Articles · সংকুচিত পদাশ্রয়",
   "subtitle": "au, aux, du, des — and how to say where · au, aux, du, des — আর কোথায় বোঝানোর উপায়",
   "minutes": 12,
   "goals": [
    "Contract à and de with the definite article · নির্দিষ্ট পদাশ্রয়ের সঙ্গে à ও de সংকুচিত করুন",
    "Say in and to for countries and cities · দেশ ও শহরের জন্য *-এ* ও *-তে* বলুন",
    "Say from a country correctly · কোন দেশ থেকে, তা ঠিকভাবে বলুন"
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
     "title": "The whole system · পুরো ব্যবস্থা"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je vais au marché.",
       "tr": "zhuh vay zoh mar-SHAY · জ়্য ভে ও মার্শে",
       "mean": "I am going to the market. · আমি বাজারে যাচ্ছি।"
      },
      {
       "t": "Il parle aux enfants.",
       "tr": "eel parl oh-zahn-FAHN · ইল পার্ল ও জ়াঁফাঁ",
       "mean": "He is talking to the children. · সে বাচ্চাদের সঙ্গে কথা বলছে।"
      },
      {
       "t": "Elle vient du bureau.",
       "tr": "el vyan dew bew-ROH · এল ভিয়ঁ দ্যু ব্যুরো",
       "mean": "She is coming from the office. · সে অফিস থেকে আসছে।"
      },
      {
       "t": "C'est la clé de la maison.",
       "tr": "say lah klay duh lah may-ZOHN · সে লা ক্লে দ্য লা মেজ়ঁ",
       "mean": "It is the house key. · এটি বাড়ির চাবি।"
      }
     ]
    },
    {
     "type": "rule",
     "name": "In and to a place · কোনো জায়গায় ও সেখানে",
     "color": "blue",
     "desc": "The word depends on whether the place is a city, a feminine country, a masculine country or a plural one. · শব্দটি নির্ভর করে জায়গাটি শহর না দেশ, এবং দেশটির লিঙ্গের উপর।",
     "examples": [
      {
       "t": "à Dacca, à Paris",
       "tr": "cities take à · শহরের আগে à বসে",
       "hl": "à"
      },
      {
       "t": "en France, en Chine",
       "tr": "feminine countries take en · স্ত্রীবাচক দেশের আগে en",
       "hl": "en"
      },
      {
       "t": "au Japon, au Bangladesh",
       "tr": "masculine countries take au · পুংবাচক দেশের আগে au",
       "hl": "au"
      },
      {
       "t": "aux États-Unis",
       "tr": "plural countries take aux · বহুবচন দেশের আগে aux",
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
     "name": "From a place · কোনো জায়গা থেকে",
     "color": "green",
     "desc": "To say *from*, feminine countries take bare **de**; masculine ones take **du**; plurals take **des**. · কোথা থেকে বোঝাতে স্ত্রীলিঙ্গ দেশে de, পুংলিঙ্গে du, বহুবচনে des।",
     "examples": [
      {
       "t": "Je viens de France.",
       "tr": "from France · ফ্রান্স থেকে",
       "hl": "de"
      },
      {
       "t": "Je viens du Japon.",
       "tr": "from Japan · জাপান থেকে",
       "hl": "du"
      },
      {
       "t": "Je viens des États-Unis.",
       "tr": "from the United States · যুক্তরাষ্ট্র থেকে",
       "hl": "des"
      },
      {
       "t": "Je viens de Dacca.",
       "tr": "from Dhaka — cities take de · ঢাকা থেকে — শহরের আগে de",
       "hl": "de"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Tu vas au marché ce matin ?",
       "tr": "tew vah oh mahr-SHAY suh mah-TAHN · ত্যু ভা ও মার্শে স্য মাতাঁ",
       "mean": "Are you going to the market this morning? · আজ সকালে বাজারে যাচ্ছ?"
      },
      {
       "who": "Salim",
       "t": "Oui, et après à la banque.",
       "tr": "WEE ay ah-PREH ah lah BAHNK · উই, এ আপ্রে আ লা বঁক্",
       "mean": "Yes, and afterwards to the bank. · হ্যাঁ, তারপর ব্যাংকে।"
      },
      {
       "who": "Rima",
       "t": "Tu reviens du bureau à quelle heure ?",
       "tr": "tew ruh-VYAHN dew bew-ROH ah kel UHR · ত্যু র্যভীয়াঁ দ্যু ব্যুরো আ কেল্ ্যর্",
       "mean": "What time do you come back from the office? · অফিস থেকে কখন ফের?"
      },
      {
       "who": "Salim",
       "t": "Vers six heures, après la réunion des professeurs.",
       "tr": "vehr see ZUHR ah-PREH lah ray-ew-NYOHN day proh-feh-SUHR · ভের্ সিজ়্ ্যর্, আপ্রে লা রেয়্যুনীয়ঁ দে প্রফেস্যর্",
       "mean": "About six, after the teachers' meeting. · ছটা নাগাদ, শিক্ষকদের সভার পরে।"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Je suis bangladais et je viens de Dacca.",
     "tr": "zhuh swee bahn-glah-DAY ay zhuh vyan duh dah-KAH · জ়্য সুই বাঁগ্লাদে এ জ়্য ভিয়ঁ দ্য দাকা",
     "mean": "I am Bangladeshi and I come from Dhaka. · আমি বাংলাদেশি এবং ঢাকা থেকে এসেছি।",
     "words": [
      {
       "t": "Je",
       "mean": "I · আমি"
      },
      {
       "t": "suis",
       "mean": "am · আছি"
      },
      {
       "t": "bangladais",
       "mean": "Bangladeshi · বাংলাদেশি"
      },
      {
       "t": "et",
       "mean": "and · এবং"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "viens",
       "mean": "come · আসা"
      },
      {
       "t": "de",
       "mean": "from · থেকে"
      },
      {
       "t": "Dacca",
       "mean": "Dhaka · ঢাকা"
      }
     ]
    },
    {
     "t": "Il parle du travail des étudiants aux professeurs.",
     "tr": "eel pahrl dew trah-VYE day zay-tew-DYAHN oh proh-feh-SUHR · ইল্ পার্ল্ দ্যু ত্রাভাই দেজ়্ এত্যুদীয়ঁ ও প্রফেস্যর্",
     "mean": "He speaks about the students' work to the teachers. · সে শিক্ষকদের কাছে ছাত্রদের কাজ নিয়ে বলে।",
     "words": [
      {
       "t": "Il",
       "mean": "he · সে"
      },
      {
       "t": "parle",
       "mean": "speaks · বলে"
      },
      {
       "t": "du",
       "mean": "of the — de + le · de + le"
      },
      {
       "t": "travail",
       "mean": "work · কাজ"
      },
      {
       "t": "des",
       "mean": "of the — de + les · de + les"
      },
      {
       "t": "étudiants",
       "mean": "students · ছাত্ররা"
      },
      {
       "t": "aux",
       "mean": "to the — à + les · à + les"
      },
      {
       "t": "professeurs",
       "mean": "teachers · শিক্ষকরা"
      }
     ],
     "note": "Three contractions in eight words, and none of them can be written out in full. **de le** and **à les** simply do not exist. · আট শব্দে তিনটি সংকোচন; **de le** বা **à les** বলে কিছু নেই।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. The two little words have already joined before you say them. · জোরে পড়ুন; দুটি ছোট শব্দ বলার আগেই জুড়ে গেছে।",
     "lines": [
      {
       "t": "Je vais au marché et à la banque.",
       "mean": "I am going to the market and the bank · আমি বাজার ও ব্যাংকে যাচ্ছি"
      },
      {
       "t": "Elle revient du bureau à six heures.",
       "mean": "She comes back from the office at six · সে ছটায় অফিস থেকে ফেরে"
      },
      {
       "t": "Les clés sont aux enfants.",
       "mean": "The keys belong to the children · চাবিগুলো বাচ্চাদের"
      },
      {
       "t": "C'est le livre du professeur.",
       "mean": "It is the teacher's book · এটি শিক্ষকের বই"
      },
      {
       "t": "Nous parlons des vacances.",
       "mean": "We are talking about the holidays · আমরা ছুটির কথা বলছি"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{à + les}} gives… · {{à + les}} মিলে হয়…",
       "options": [
        "aux",
        "als",
        "àles",
        "des"
       ],
       "answer": 0,
       "explain": "à + les always contracts to aux. · à + les সবসময় সংকুচিত হয়ে aux হয়।"
      },
      {
       "q": "*I am going to Japan* is… · *I am going to Japan* হবে…",
       "options": [
        "Je vais aux Japon.",
        "Je vais au Japon.",
        "Je vais en Japon.",
        "Je vais à Japon."
       ],
       "answer": 1,
       "explain": "{{le Japon}} is masculine, so à + le = au. · {{le Japon}} পুংলিঙ্গ, তাই à + le = au।"
      },
      {
       "q": "*I live in France* is… · *I live in France* হবে…",
       "options": [
        "J'habite à France.",
        "J'habite dans France.",
        "J'habite en France.",
        "J'habite au France."
       ],
       "answer": 2,
       "explain": "Feminine countries take {{en}}. · স্ত্রীলিঙ্গ দেশের আগে {{en}} বসে।"
      },
      {
       "q": "*I come from the United States* is… · *I come from the United States* হবে…",
       "options": [
        "Je viens de États-Unis.",
        "Je viens aux États-Unis.",
        "Je viens du États-Unis.",
        "Je viens des États-Unis."
       ],
       "answer": 3,
       "explain": "Plural country → {{des}}. · বহুবচন দেশ → {{des}}।"
      },
      {
       "q": "Which country is the famous gender exception? · লিঙ্গের ক্ষেত্রে কোন দেশটি বিখ্যাত ব্যতিক্রম?",
       "options": [
        "le Mexique",
        "la France",
        "la Chine",
        "la Belgique"
       ],
       "answer": 0,
       "explain": "It ends in -e but is masculine: {{au Mexique}}. · এটি -e দিয়ে শেষ হলেও পুংলিঙ্গ: {{au Mexique}}।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-adjectives",
   "icon": "Adj",
   "title": "Adjectives: Agreement & Position · বিশেষণ: সমতা ও অবস্থান",
   "subtitle": "Where they stand changes what they mean · কোথায় বসছে, তার উপর অর্থ বদলায়",
   "minutes": 14,
   "goals": [
    "Form irregular feminines confidently · অনিয়মিত স্ত্রীবাচক রূপ নির্ভয়ে গড়ুন",
    "Know which adjectives come before the noun · কোন বিশেষণ বিশেষ্যের আগে বসে তা জানুন",
    "Use position to change meaning · অর্থ বদলাতে অবস্থান কাজে লাগান"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A French adjective agrees with its noun in gender and number, and usually stands **after** it — the opposite of English and Bangla. A small, very common group stands before. · ফরাসি বিশেষণ নামের সঙ্গে মেলে এবং সাধারণত পরে বসে — ইংরেজি ও বাংলার উল্টো।"
    },
    {
     "type": "table",
     "head": [
      "Masculine ending · পুংবাচক শেষাংশ",
      "Feminine · স্ত্রীবাচক",
      "Example · উদাহরণ",
      "Meaning · অর্থ"
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
     "title": "Irregular feminines · অনিয়মিত স্ত্রীবাচক রূপ"
    },
    {
     "type": "rule",
     "name": "The ones that go first · যেগুলো আগে বসে",
     "color": "blue",
     "desc": "Short adjectives of **beauty, age, goodness and size** come before the noun. · সৌন্দর্য, বয়স, গুণ ও আকার বোঝানো ছোট বিশেষণ নামের আগে বসে।",
     "examples": [
      {
       "t": "une belle maison",
       "tr": "a beautiful house · একটি সুন্দর বাড়ি",
       "hl": "belle"
      },
      {
       "t": "un jeune homme",
       "tr": "a young man · একজন যুবক",
       "hl": "jeune"
      },
      {
       "t": "un bon livre",
       "tr": "a good book · একটি ভালো বই",
       "hl": "bon"
      },
      {
       "t": "une grande ville",
       "tr": "a big city · একটি বড়ো শহর",
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
     "name": "Before a vowel, three adjectives change shape · স্বরধ্বনির আগে তিনটি বিশেষণ রূপ বদলায়",
     "color": "orange",
     "desc": "{{beau, nouveau, vieux}} become {{bel, nouvel, vieil}} before a masculine noun starting with a vowel or mute h. · স্বর বা mute h-এর আগে এই তিনটি রূপ বদলায়।",
     "examples": [
      {
       "t": "un bel appartement",
       "tr": "a beautiful flat · একটি সুন্দর ফ্ল্যাট",
       "hl": "bel"
      },
      {
       "t": "un nouvel ami",
       "tr": "a new friend · একজন নতুন বন্ধু",
       "hl": "nouvel"
      },
      {
       "t": "un vieil homme",
       "tr": "an old man · একজন বৃদ্ধ",
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
       "desc": "*a great man* — figurative. · *একজন মহান মানুষ* — রূপক অর্থে।"
      },
      {
       "t": "un homme grand",
       "label": "after",
       "desc": "*a tall man* — literal. · *একজন লম্বা মানুষ* — আক্ষরিক অর্থে।"
      },
      {
       "t": "mon ancien patron",
       "label": "before",
       "desc": "*my former boss*. · *আমার আগের বস*।"
      },
      {
       "t": "un meuble ancien",
       "label": "after",
       "desc": "*an antique piece of furniture*. · *একটি প্রাচীন আসবাব*।"
      }
     ],
     "title": "Position changes meaning · অবস্থান বদলালে অর্থ বদলায়"
    },
    {
     "type": "table",
     "head": [
      "Adjective · বিশেষণ",
      "Before the noun · বিশেষ্যের আগে",
      "After the noun · বিশেষ্যের পরে"
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
       "only · কেবল",
       "alone"
      ],
      [
       "{{pauvre}}",
       "unfortunate",
       "penniless"
      ]
     ],
     "title": "Four more that shift · আরও চারটি যারা বদলায়"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Tu as vu leur nouvelle maison ?",
       "tr": "tew ah VEW luhr noo-vel meh-ZOHN · ত্যু আ ভ্যু ল্যর্ নুভেল্ মেজ়ঁ",
       "mean": "Have you seen their new house? · তাদের নতুন বাড়িটা দেখেছ?"
      },
      {
       "who": "Salim",
       "t": "Oui, une grande maison blanche, très belle.",
       "tr": "WEE ewn grahnd meh-ZOHN BLAHNSH treh BEL · উই, ্যুন্ গ্রঁদ্ মেজ়ঁ ব্লঁশ্, ত্রে বেল্",
       "mean": "Yes, a big white house, very beautiful. · হ্যাঁ, বড় সাদা বাড়ি, খুব সুন্দর।"
      },
      {
       "who": "Rima",
       "t": "Et le vieux jardin derrière ?",
       "tr": "ay luh vyuh zhahr-DAHN deh-RYEHR · এ ল্য ভীয়ো জ়ার্দাঁ দেরীয়ের্",
       "mean": "And the old garden behind it? · আর পিছনের পুরোনো বাগানটা?"
      },
      {
       "who": "Salim",
       "t": "Magnifique. Un bel endroit pour les enfants.",
       "tr": "mah-nyee-FEEK uhn bel ahn-DRWAH poor lay zahn-FAHN · মান্যিফিক্। আঁ বেল্ অঁদ্রোয়া পুর্ লেজ়্ অঁফঁ",
       "mean": "Magnificent. A lovely spot for the children. · চমৎকার। বাচ্চাদের জন্য দারুণ জায়গা।"
      }
     ]
    },
    {
     "t": "C'est une vieille maison blanche.",
     "tr": "seh tewn vyey meh-ZOHN BLAHNSH · সেত্ ্যুন্ ভীয়েই মেজ়ঁ ব্লঁশ্",
     "mean": "It is an old white house. · এটি একটি পুরোনো সাদা বাড়ি।",
     "words": [
      {
       "t": "C'est",
       "mean": "it is · এটি"
      },
      {
       "t": "une",
       "mean": "a · একটি"
      },
      {
       "t": "vieille",
       "mean": "old (feminine) · পুরোনো"
      },
      {
       "t": "maison",
       "mean": "house · বাড়ি"
      },
      {
       "t": "blanche",
       "mean": "white (feminine) · সাদা"
      }
     ],
     "note": "**vieille** comes before the noun and **blanche** after: age goes in front, colour goes behind. · বয়স আগে বসে, রং পরে।",
     "type": "sentence"
    },
    {
     "t": "Un ancien ministre et un ministre ancien.",
     "tr": "uhn nahn-SYAHN mee-NEESTR ay uhn mee-neestr ahn-SYAHN · আঁন্ অঁসীয়াঁ মিনিস্ত্র্ এ আঁ মিনিস্ত্র্ অঁসীয়াঁ",
     "mean": "A former minister and an elderly minister. · একজন প্রাক্তন মন্ত্রী এবং একজন প্রবীণ মন্ত্রী।",
     "words": [
      {
       "t": "Un",
       "mean": "a · একজন"
      },
      {
       "t": "ancien",
       "mean": "former — before the noun · বিশেষ্যের আগে: প্রাক্তন"
      },
      {
       "t": "ministre",
       "mean": "minister · মন্ত্রী"
      },
      {
       "t": "et",
       "mean": "and · এবং"
      },
      {
       "t": "un",
       "mean": "a · একজন"
      },
      {
       "t": "ministre",
       "mean": "minister · মন্ত্রী"
      },
      {
       "t": "ancien",
       "mean": "elderly — after the noun · বিশেষ্যের পরে: প্রবীণ"
      }
     ],
     "note": "The same adjective, the same noun, two different meanings decided only by position. **ancien**, **propre**, **cher** and **grand** all do this. · একই বিশেষণ, কেবল অবস্থান বদলালেই অর্থ বদলে যায়।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each pair and feel the change in meaning. · প্রতিটি জোড়া পড়ুন এবং অর্থের পরিবর্তন অনুভব করুন।",
     "lines": [
      {
       "t": "un grand homme — un homme grand",
       "mean": "a great man — a tall man · একজন মহান ব্যক্তি — একজন লম্বা মানুষ"
      },
      {
       "t": "ma chère amie — une voiture chère",
       "mean": "my dear friend — an expensive car · আমার প্রিয় বান্ধবী — একটি দামি গাড়ি"
      },
      {
       "t": "mon propre livre — un livre propre",
       "mean": "my own book — a clean book · আমার নিজের বই — একটি পরিষ্কার বই"
      },
      {
       "t": "le seul enfant — un enfant seul",
       "mean": "the only child — a lonely child · একমাত্র সন্তান — একাকী শিশু"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The feminine of {{heureux}} is… · {{heureux}}-এর স্ত্রীলিঙ্গ রূপ…",
       "options": [
        "heureux",
        "heureuse",
        "heureuxe",
        "heureure"
       ],
       "answer": 1,
       "explain": "-eux becomes -euse. · -eux হয়ে যায় -euse।"
      },
      {
       "q": "{{un homme grand}} means… · {{un homme grand}} মানে…",
       "options": [
        "an old man · একজন বৃদ্ধ",
        "a grown man · একজন পূর্ণবয়স্ক পুরুষ",
        "a tall man · একজন লম্বা মানুষ",
        "a great man · একজন মহান ব্যক্তি"
       ],
       "answer": 2,
       "explain": "After the noun it is literal; before, figurative. · নামের পরে বসলে আক্ষরিক; আগে বসলে রূপক।"
      },
      {
       "q": "Which is correct before a vowel? · স্বরের আগে কোনটি সঠিক?",
       "options": [
        "un beau appartement",
        "un belle appartement",
        "un bell appartement",
        "un bel appartement"
       ],
       "answer": 3,
       "explain": "{{beau}} becomes {{bel}} before a vowel sound. · স্বরধ্বনির আগে {{beau}} হয়ে যায় {{bel}}।"
      },
      {
       "q": "{{mon propre livre}} means… · {{mon propre livre}} মানে…",
       "options": [
        "my own book · আমার নিজের বই",
        "my clean book · আমার পরিষ্কার বই",
        "my proper book · আমার যথাযথ বই",
        "my only book · আমার একমাত্র বই"
       ],
       "answer": 0,
       "explain": "Before the noun, {{propre}} means *own*. · নামের আগে {{propre}} মানে *নিজের*।"
      },
      {
       "q": "What does B-A-G-S stand for? · B-A-G-S মানে কী?",
       "options": [
        "Beauty, Action, Grade, Shape",
        "Beauty, Age, Goodness, Size",
        "Big, Angry, Good, Small",
        "Before, After, Gender, Singular · আগে, পরে, লিঙ্গ, একবচন"
       ],
       "answer": 1,
       "explain": "These four meanings put an adjective in front. · এই চারটি অর্থ বিশেষণকে নামের আগে বসায়।"
      },
      {
       "q": "Which adjective normally follows its noun? · কোন বিশেষণ সাধারণত নামের পরে বসে?",
       "options": [
        "jeune",
        "bon",
        "rouge",
        "petit"
       ],
       "answer": 2,
       "explain": "Colours always follow: {{une voiture rouge}}. · রঙ সবসময় পরে বসে: {{une voiture rouge}}।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-compare",
   "icon": "+/-",
   "title": "Comparing Things · তুলনা করা",
   "subtitle": "More, less, as — and the best of all · বেশি, কম, সমান — আর সবার সেরা",
   "minutes": 11,
   "goals": [
    "Build comparatives with plus, moins and aussi · plus, moins ও aussi দিয়ে তুলনা গড়ুন",
    "Use the irregular meilleur and mieux · অনিয়মিত meilleur ও mieux ব্যবহার করুন",
    "Form superlatives with the right article · সঠিক পদাশ্রয় দিয়ে অতিশয়ার্থ গড়ুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Comparison in French is refreshingly regular: one small word before the adjective, and {{que}} for *than*. · ফরাসিতে তুলনা করা সহজ ও নিয়মিত।"
    },
    {
     "type": "rule",
     "name": "The three comparatives · তিনটি তুলনাবাচক রূপ",
     "color": "green",
     "desc": "Put {{plus}}, {{moins}} or {{aussi}} before the adjective, and {{que}} after it. · বিশেষণের আগে plus, moins বা aussi, পরে que।",
     "examples": [
      {
       "t": "Rana est plus grand que Bappy.",
       "tr": "taller than · -এর চেয়ে লম্বা",
       "hl": "plus"
      },
      {
       "t": "Rana est moins grand que Bappy.",
       "tr": "less tall than · -এর চেয়ে কম লম্বা",
       "hl": "moins"
      },
      {
       "t": "Rana est aussi grand que Bappy.",
       "tr": "as tall as · -এর সমান লম্বা",
       "hl": "aussi"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Two irregulars you must know · জানতেই হবে এমন দুটি অনিয়মিত ক্রিয়া",
     "color": "red",
     "desc": "{{bon}} (adjective) becomes {{meilleur}}; {{bien}} (adverb) becomes {{mieux}}. Never say *plus bon* or *plus bien*. · bon হয় meilleur, bien হয় mieux।",
     "examples": [
      {
       "t": "Ce café est meilleur.",
       "tr": "This coffee is better. · এই কফিটা আরও ভালো।",
       "hl": "meilleur"
      },
      {
       "t": "Elle parle mieux que moi.",
       "tr": "She speaks better than I do. · সে আমার চেয়ে ভালো বলে।",
       "hl": "mieux"
      },
      {
       "t": "C'est pire que hier.",
       "tr": "It is worse than yesterday. · এটা গতকালের চেয়ে খারাপ।",
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
     "name": "The superlative · অতিশয়ার্থ",
     "color": "purple",
     "desc": "Add the definite article: {{le plus}}, {{la plus}}, {{les plus}}. For *in* or *of* after a superlative, French uses **de**. · superlative-এ article যোগ হয়; পরে de বসে।",
     "examples": [
      {
       "t": "le plus grand bâtiment",
       "tr": "the tallest building · সবচেয়ে উঁচু ভবন",
       "hl": "le plus"
      },
      {
       "t": "la ville la plus belle du monde",
       "tr": "the most beautiful city in the world · পৃথিবীর সবচেয়ে সুন্দর শহর",
       "hl": "du monde"
      },
      {
       "t": "le meilleur étudiant de la classe",
       "tr": "the best student in the class · ক্লাসের সেরা ছাত্র",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Dhaka est plus grande que Sylhet, non ?",
       "tr": "dah-KAH eh plew GRAHND kuh seel-HET nohn · ঢাকা এ প্ল্যু গ্রঁদ্ ক্য সিলেট, নঁ",
       "mean": "Dhaka is bigger than Sylhet, isn't it? · ঢাকা সিলেটের চেয়ে বড়, না?"
      },
      {
       "who": "Salim",
       "t": "Beaucoup plus grande. Mais Sylhet est plus calme.",
       "tr": "boh-KOO plew GRAHND meh seel-HET eh plew KAHLM · বোকু প্ল্যু গ্রঁদ্। মে সিলেট এ প্ল্যু কাল্ম্",
       "mean": "Much bigger. But Sylhet is quieter. · অনেক বড়। তবে সিলেট বেশি শান্ত।"
      },
      {
       "who": "Rima",
       "t": "Alors, quelle ville préfères-tu ?",
       "tr": "ah-LOR kel VEEL pray-fehr TEW · আলর্, কেল্ ভিল্ প্রেফের্-ত্যু",
       "mean": "So which city do you prefer? · তাহলে কোন শহর বেশি পছন্দ?"
      },
      {
       "who": "Salim",
       "t": "Sylhet. On y vit mieux et ça coûte moins cher.",
       "tr": "seel-HET ohn nee vee MYUH ay sah koot mwahn SHEHR · সিলেট। ঁন্ ই ভি মীয়ো এ সা কুত্ মোয়াঁ শের্",
       "mean": "Sylhet. Life is better there and it costs less. · সিলেট। সেখানে জীবন ভালো আর খরচ কম।"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Ce chien est le plus petit de tous.",
     "tr": "suh shyan ay luh plew puh-TEE duh TOOS · স্য শিয়ঁ এ ল্য প্ল্যু প্যতি দ্য তুস",
     "mean": "This dog is the smallest of all. · এই কুকুরটি সবার মধ্যে সবচেয়ে ছোট।",
     "words": [
      {
       "t": "Ce",
       "mean": "this · এই"
      },
      {
       "t": "chien",
       "mean": "dog · কুকুর"
      },
      {
       "t": "est",
       "mean": "is · হয়"
      },
      {
       "t": "le",
       "mean": "the · সেই"
      },
      {
       "t": "plus",
       "mean": "most · সবচেয়ে"
      },
      {
       "t": "petit",
       "mean": "small · ছোট"
      },
      {
       "t": "de",
       "mean": "of · -এর"
      },
      {
       "t": "tous",
       "mean": "all · সব"
      }
     ]
    },
    {
     "t": "Elle travaille mieux que moi mais elle est moins rapide.",
     "tr": "el trah-VYE myuh kuh MWAH meh el eh mwahn rah-PEED · এল্ ত্রাভাই মীয়ো ক্য মোয়া মে এল্ এ মোয়াঁ রাপিদ্",
     "mean": "She works better than I do but she is less quick. · সে আমার চেয়ে ভালো কাজ করে, তবে কম দ্রুত।",
     "words": [
      {
       "t": "Elle",
       "mean": "she · সে"
      },
      {
       "t": "travaille",
       "mean": "works · কাজ করে"
      },
      {
       "t": "mieux",
       "mean": "better (adverb) · ভালোভাবে"
      },
      {
       "t": "que",
       "mean": "than · চেয়ে"
      },
      {
       "t": "moi",
       "mean": "me · আমার"
      },
      {
       "t": "mais",
       "mean": "but · তবে"
      },
      {
       "t": "elle",
       "mean": "she · সে"
      },
      {
       "t": "est",
       "mean": "is · হলো"
      },
      {
       "t": "moins",
       "mean": "less · কম"
      },
      {
       "t": "rapide",
       "mean": "quick · দ্রুত"
      }
     ],
     "note": "**mieux** describes the verb, **meilleur** would describe a noun. English uses *better* for both and so the two are easily confused. · ক্রিয়ার সঙ্গে **mieux**, বিশেষ্যের সঙ্গে **meilleur**।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. Keep que short and unstressed; the weight falls on the adjective. · জোরে পড়ুন; que-কে হালকা রাখুন, ঝোঁক পড়বে বিশেষণে।",
     "lines": [
      {
       "t": "Dhaka est plus grande que Sylhet.",
       "mean": "Dhaka is bigger than Sylhet · ঢাকা সিলেটের চেয়ে বড়"
      },
      {
       "t": "Ce train est moins rapide que l'avion.",
       "mean": "This train is slower than the plane · এই ট্রেন বিমানের চেয়ে ধীর"
      },
      {
       "t": "Elle est aussi patiente que sa mère.",
       "mean": "She is as patient as her mother · সে তার মায়ের মতোই ধৈর্যশীল"
      },
      {
       "t": "C'est le meilleur restaurant du quartier.",
       "mean": "It is the best restaurant in the area · এটি এলাকার সেরা রেস্তোরাঁ"
      },
      {
       "t": "Aujourd'hui je vais mieux qu'hier.",
       "mean": "Today I am better than yesterday · আজ আমি গতকালের চেয়ে ভালো আছি"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*Better* as an adjective is… · বিশেষণ হিসেবে *better* হলো…",
       "options": [
        "mieux",
        "plus bon",
        "plus bien",
        "meilleur"
       ],
       "answer": 3,
       "explain": "{{meilleur}} goes with nouns, {{mieux}} with verbs. · {{meilleur}} বসে নামের সঙ্গে, {{mieux}} বসে ক্রিয়ার সঙ্গে।"
      },
      {
       "q": "*She speaks better than I do* is… · *She speaks better than I do* হবে…",
       "options": [
        "Elle parle mieux que moi.",
        "Elle parle meilleur que moi.",
        "Elle parle plus bien que moi.",
        "Elle parle bien que moi."
       ],
       "answer": 0,
       "explain": "The verb {{parle}} needs the adverb {{mieux}}. · {{parle}} ক্রিয়ার জন্য ক্রিয়াবিশেষণ {{mieux}} লাগে।"
      },
      {
       "q": "*As tall as* is built with… · *As tall as* তৈরি হয়…",
       "options": [
        "très … que",
        "aussi … que",
        "plus … que",
        "moins … que"
       ],
       "answer": 1,
       "explain": "{{aussi grand que}} = as tall as. · {{aussi grand que}} = সমান লম্বা।"
      },
      {
       "q": "*The most beautiful city in the world* ends with… · *The most beautiful city in the world*-এর শেষে বসে…",
       "options": [
        "au monde",
        "le monde",
        "du monde",
        "dans le monde"
       ],
       "answer": 2,
       "explain": "After a superlative French uses {{de}}. · superlative-এর পরে ফরাসি {{de}} ব্যবহার করে।"
      },
      {
       "q": "The comparative of {{mauvais}} is… · {{mauvais}}-এর তুলনামূলক রূপ…",
       "options": [
        "moins",
        "mieux",
        "meilleur",
        "pire"
       ],
       "answer": 3,
       "explain": "{{pire}} — or the regular {{plus mauvais}}. · {{pire}} — অথবা নিয়মিত {{plus mauvais}}।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-pronouns",
   "icon": "y/en",
   "title": "Object Pronouns, en and y · কর্ম সর্বনাম, en ও y",
   "subtitle": "The small words that make you sound French · যে ছোট শব্দগুলো আপনাকে ফরাসির মতো শোনায়",
   "minutes": 15,
   "goals": [
    "Separate direct and indirect object pronouns · প্রত্যক্ষ ও পরোক্ষ কর্ম সর্বনাম আলাদা করুন",
    "Use en and y correctly · en ও y ঠিকভাবে ব্যবহার করুন",
    "Place two pronouns in the right order · দুটি সর্বনাম সঠিক ক্রমে বসান"
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
      "Direct · প্রত্যক্ষ",
      "Indirect · পরোক্ষ",
      "Example · উদাহরণ"
     ],
     "rows": [
      [
       "me",
       "{{me}}",
       "{{me}}",
       "{{Il me voit.}}"
      ],
      [
       "you · তুমি",
       "{{te}}",
       "{{te}}",
       "{{Je te parle.}}"
      ],
      [
       "him/her/it · তাকে",
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
       "you (pl.) · তোমরা",
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
     "title": "The two sets · দুটি সেট"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The test is the preposition. If the French verb uses **à** before a person — {{parler à}}, {{donner à}}, {{écrire à}} — you need the indirect set: {{lui}} or {{leur}}. · ক্রিয়ার পরে à থাকলে indirect pronoun লাগবে।"
    },
    {
     "type": "rule",
     "name": "en replaces de + thing · en বসে de + বস্তুর বদলে",
     "color": "blue",
     "desc": "{{en}} stands for *some of it*, *of them*, *from there* — anything introduced by **de** or a quantity. · en মানে তার কিছু, সেখান থেকে।",
     "examples": [
      {
       "t": "Tu veux du café ? — Oui, j'en veux.",
       "tr": "Yes, I want some. · হ্যাঁ, কিছুটা চাই।",
       "hl": "en"
      },
      {
       "t": "Il a trois frères ? — Il en a trois.",
       "tr": "He has three of them. · তার তিনটি আছে।",
       "hl": "en"
      },
      {
       "t": "Elle revient de Paris ? — Elle en revient.",
       "tr": "She is coming back from there. · সে সেখান থেকে ফিরছে।",
       "hl": "en"
      }
     ]
    },
    {
     "type": "rule",
     "name": "y replaces à + place or thing · y বসে à + স্থান বা বস্তুর বদলে",
     "color": "green",
     "desc": "{{y}} stands for *there*, or *to it / about it* when the verb takes **à**. · y মানে সেখানে, কিংবা তাতে।",
     "examples": [
      {
       "t": "Tu vas à Paris ? — J'y vais demain.",
       "tr": "I am going there tomorrow. · আমি আগামীকাল সেখানে যাব।",
       "hl": "y"
      },
      {
       "t": "Il pense à son travail ? — Il y pense.",
       "tr": "He is thinking about it. · সে সেটি নিয়ে ভাবছে।",
       "hl": "y"
      },
      {
       "t": "Il y a du pain.",
       "tr": "There is some bread. · কিছু রুটি আছে।",
       "hl": "y a"
      }
     ]
    },
    {
     "type": "rule",
     "name": "When two pronouns meet · দুটি সর্বনাম একসঙ্গে এলে",
     "color": "purple",
     "desc": "The order is fixed: **me/te/se/nous/vous → le/la/les → lui/leur → y → en**. · দুটি pronoun একসঙ্গে এলে ক্রম নির্দিষ্ট।",
     "examples": [
      {
       "t": "Il me le donne.",
       "tr": "He gives it to me. · সে সেটি আমাকে দেয়।",
       "hl": "me le"
      },
      {
       "t": "Je les lui envoie.",
       "tr": "I send them to him. · আমি সেগুলো তাকে পাঠাই।",
       "hl": "les lui"
      },
      {
       "t": "Il y en a beaucoup.",
       "tr": "There are a lot of them. · সেগুলো অনেক আছে।",
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
       "title": "Full sentence · পূর্ণ বাক্য",
       "t": "Je donne le livre à Salim.",
       "mean": "I give the book to Salim. · আমি সেলিমকে বইটি দিই।"
      },
      {
       "title": "Replace the thing · বস্তুটি বদলান",
       "t": "Je le donne à Salim.",
       "mean": "I give it to Salim. · আমি সেলিমকে এটি দিই।"
      },
      {
       "title": "Replace the person · ব্যক্তিটি বদলান",
       "t": "Je lui donne le livre.",
       "mean": "I give him the book. · আমি তাকে বইটি দিই।"
      },
      {
       "title": "Replace both · দুটিই বদলান",
       "t": "Je le lui donne.",
       "mean": "I give it to him. · আমি তাকে এটি দিই।"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Tu as acheté les billets ?",
       "tr": "tew ah ahsh-TAY lay bee-YEH · ত্যু আ আশ্তে লে বিয়ে",
       "mean": "Have you bought the tickets? · টিকিট কিনেছ?"
      },
      {
       "who": "Salim",
       "t": "Oui, je les ai pris ce matin.",
       "tr": "WEE zhuh lay zay PREE suh mah-TAHN · উই, জ়্য লেজ়্ এ প্রি স্য মাতাঁ",
       "mean": "Yes, I bought them this morning. · হ্যাঁ, আজ সকালেই নিয়েছি।"
      },
      {
       "who": "Rima",
       "t": "Et du pain, il y en a encore ?",
       "tr": "ay dew PAHN eel ee ahn nah ahn-KOR · এ দ্যু পাঁ, ইল্ ই অঁন্ আ অঁকর্",
       "mean": "And is there any bread left? · আর রুটি কি আছে এখনো?"
      },
      {
       "who": "Salim",
       "t": "Il y en a beaucoup. N'y pense plus.",
       "tr": "eel ee ahn nah boh-KOO nee pahns PLEW · ইল্ ই অঁন্ আ বোকু। নি পঁস্ প্ল্যু",
       "mean": "There is plenty. Stop thinking about it. · অনেক আছে। আর ভেবো না।"
      }
     ]
    },
    {
     "t": "Il y en a encore beaucoup.",
     "tr": "eel ee ahn nah ahn-KOR boh-KOO · ইল্ ই অঁন্ আ অঁকর্ বোকু",
     "mean": "There are still plenty of them. · এখনো অনেক আছে।",
     "words": [
      {
       "t": "Il",
       "mean": "it (impersonal) · (ভাববাচক)"
      },
      {
       "t": "y",
       "mean": "there · সেখানে"
      },
      {
       "t": "en",
       "mean": "of them · তার মধ্যে"
      },
      {
       "t": "a",
       "mean": "has · আছে"
      },
      {
       "t": "encore",
       "mean": "still · এখনো"
      },
      {
       "t": "beaucoup",
       "mean": "a lot · অনেক"
      }
     ],
     "note": "Four of these six words are grammar rather than meaning. **y** always comes before **en**, never the other way round. · **y** সবসময় **en**-এর আগে বসে।",
     "type": "sentence"
    },
    {
     "t": "Ce livre, je le lui ai donné hier.",
     "tr": "suh LEEVR zhuh luh lwee ay doh-NAY yehr · স্য লিভ্র্, জ়্য ল্য লুই এ দনে ইয়ের্",
     "mean": "That book, I gave it to him yesterday. · ওই বইটা, কাল আমি তাকে দিয়েছি।",
     "words": [
      {
       "t": "Ce",
       "mean": "that · ওই"
      },
      {
       "t": "livre",
       "mean": "book · বই"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "le",
       "mean": "it · সেটি"
      },
      {
       "t": "lui",
       "mean": "to him · তাকে"
      },
      {
       "t": "ai",
       "mean": "have (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "donné",
       "mean": "given · দিয়েছি"
      },
      {
       "t": "hier",
       "mean": "yesterday · গতকাল"
      }
     ],
     "note": "Thing before person here: **le lui**, not *lui le*. The order changes with the persons involved, which is why it has to be heard often. · এখানে বস্তু আগে, ব্যক্তি পরে — **le lui**।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. The pronouns come before the verb and are said in one breath with it. · জোরে পড়ুন; সর্বনাম ক্রিয়ার আগে বসে, একসঙ্গেই উচ্চারিত হয়।",
     "lines": [
      {
       "t": "Je le vois chaque jour.",
       "mean": "I see him every day · আমি তাকে রোজ দেখি"
      },
      {
       "t": "Elle me les donne demain.",
       "mean": "She gives them to me tomorrow · সে কাল সেগুলো আমাকে দেবে"
      },
      {
       "t": "Du riz ? J'en veux un peu.",
       "mean": "Rice? I want a little · ভাত? একটু চাই"
      },
      {
       "t": "À Paris ? J'y vais en mai.",
       "mean": "To Paris? I'm going in May · প্যারিসে? মে মাসে যাচ্ছি"
      },
      {
       "t": "Il y en a encore beaucoup.",
       "mean": "There are still plenty of them · এখনো অনেক আছে"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I am giving him the book* is… · *I am giving him the book* হবে…",
       "options": [
        "Je lui donne le livre.",
        "Je le donne le livre.",
        "Je leur donne le livre.",
        "Je y donne le livre."
       ],
       "answer": 0,
       "explain": "{{donner à}} needs the indirect pronoun {{lui}}. · {{donner à}}-এর জন্য indirect pronoun {{lui}} লাগে।"
      },
      {
       "q": "Which pronoun replaces {{de}} + a thing? · {{de}} + বস্তুর জায়গায় কোন pronoun বসে?",
       "options": [
        "lui",
        "en",
        "y",
        "le"
       ],
       "answer": 1,
       "explain": "{{en}} covers *some, of it, from there*. · {{en}} বোঝায় *কিছু, তার, সেখান থেকে*।"
      },
      {
       "q": "*I am going there tomorrow* is… · *I am going there tomorrow* হবে…",
       "options": [
        "Je le vais demain.",
        "Je lui vais demain.",
        "J'y vais demain.",
        "J'en vais demain."
       ],
       "answer": 2,
       "explain": "{{y}} replaces {{à}} plus a place. · {{y}} বসে {{à}} ও জায়গার জায়গায়।"
      },
      {
       "q": "*He gives it to me* is… · *He gives it to me* হবে…",
       "options": [
        "Il le me donne.",
        "Il lui me donne.",
        "Il me lui donne.",
        "Il me le donne."
       ],
       "answer": 3,
       "explain": "me comes before le in the fixed order. · নির্দিষ্ট ক্রমে me বসে le-এর আগে।"
      },
      {
       "q": "The command *Give it to me!* is… · অনুজ্ঞায় *Give it to me!* হবে…",
       "options": [
        "Donnez-le-moi !",
        "Donnez-moi-le !",
        "Me le donnez !",
        "Le moi donnez !"
       ],
       "answer": 0,
       "explain": "After an affirmative command, {{me}} becomes {{moi}} and goes last. · হ্যাঁ-বাচক অনুজ্ঞার পরে {{me}} হয়ে যায় {{moi}} এবং শেষে বসে।"
      },
      {
       "q": "In {{Il en a trois}}, what does {{en}} stand for? · {{Il en a trois}}-এ {{en}} কী বোঝায়?",
       "options": [
        "the verb · ক্রিয়া",
        "the things being counted · যা গোনা হচ্ছে",
        "a place · একটি জায়গা",
        "a person · একজন ব্যক্তি"
       ],
       "answer": 1,
       "explain": "With a number, {{en}} replaces the noun counted. · সংখ্যার সঙ্গে {{en}} গোনা জিনিসটির জায়গায় বসে।"
      }
     ]
    }
   ]
  },
  {
   "id": "u2-relative",
   "icon": "qui",
   "title": "Joining Sentences · বাক্য জোড়া লাগানো",
   "subtitle": "qui, que, dont, où — and this versus that · qui, que, dont, où — আর এই বনাম সেই",
   "minutes": 13,
   "goals": [
    "Choose between qui and que by function · কাজ বুঝে qui ও que-এর মধ্যে বাছুন",
    "Use dont for de, and où for place and time · de-র বদলে dont, আর স্থান-কালে où",
    "Point at things with ce, cet, cette, ces · ce, cet, cette, ces দিয়ে দেখান"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Relative pronouns glue two short sentences into one adult sentence. Choosing between them is not about meaning — it is about the **job** the word does in its own clause. · relative pronoun দুটি ছোট বাক্যকে জোড়া দেয়। নির্বাচন নির্ভর করে বাক্যে তার কাজের উপর।"
    },
    {
     "type": "rule",
     "name": "qui is the subject, que is the object · qui কর্তা, que কর্ম",
     "color": "blue",
     "desc": "If a **verb** follows directly, use {{qui}}. If a **subject** follows, use {{que}}. · সঙ্গে সঙ্গে ক্রিয়া এলে qui; কর্তা এলে que।",
     "examples": [
      {
       "t": "L'homme qui parle est mon oncle.",
       "tr": "who is speaking — verb follows · যে বলছে — পরে ক্রিয়া বসে",
       "hl": "qui parle"
      },
      {
       "t": "Le livre que je lis est intéressant.",
       "tr": "that I am reading — subject follows · যা আমি পড়ছি — পরে কর্তা বসে",
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
     "name": "dont carries de · dont-এর ভেতরেই de আছে",
     "color": "orange",
     "desc": "When the original sentence needed **de**, the joining word is {{dont}} — *whose, of which, about which*. · মূল বাক্যে de লাগলে জোড়া দেওয়ার শব্দ হবে dont।",
     "examples": [
      {
       "t": "le livre dont je parle",
       "tr": "the book I am talking about (parler de) · যে বইয়ের কথা আমি বলছি",
       "hl": "dont"
      },
      {
       "t": "l'homme dont la voiture est rouge",
       "tr": "the man whose car is red · যার গাড়ি লাল, সেই লোক",
       "hl": "dont"
      },
      {
       "t": "la chose dont j'ai besoin",
       "tr": "the thing I need (avoir besoin de) · যে জিনিসটি আমার দরকার",
       "hl": "dont"
      }
     ]
    },
    {
     "type": "rule",
     "name": "où covers place and time · où স্থান ও কাল দুই-ই বোঝায়",
     "color": "green",
     "desc": "{{où}} means *where*, and also *when* after a word of time. · où মানে কোথায়, আবার সময়ের পরে কখন।",
     "examples": [
      {
       "t": "la ville où j'habite",
       "tr": "the town where I live · যে শহরে আমি থাকি",
       "hl": "où"
      },
      {
       "t": "le jour où il est arrivé",
       "tr": "the day when he arrived · যেদিন সে এসেছিল",
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
      "Pointing word · নির্দেশক শব্দ",
      "Used before · যার আগে বসে",
      "Example · উদাহরণ",
      "Meaning · অর্থ"
     ],
     "rows": [
      [
       "{{ce}}",
       "masculine noun · পুংবাচক বিশেষ্য",
       "{{ce livre}}",
       "this book"
      ],
      [
       "{{cet}}",
       "masculine + vowel · পুংবাচক + স্বরধ্বনি",
       "{{cet homme}}",
       "this man"
      ],
      [
       "{{cette}}",
       "feminine noun · স্ত্রীবাচক বিশেষ্য",
       "{{cette maison}}",
       "this house"
      ],
      [
       "{{ces}}",
       "any plural · যেকোনো বহুবচন",
       "{{ces enfants}}",
       "these children"
      ]
     ],
     "title": "This and that · এটি আর ওটি"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "French does not separate *this* from *that* unless it needs to. When it does, it adds **-ci** for near and **-là** for far: {{ce livre-ci}} and {{ce livre-là}}. · প্রয়োজনে -ci (কাছে) ও -là (দূরে) যোগ হয়।"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Qui est l'homme qui parle à la porte ?",
       "tr": "kee eh lom kee pahrl ah lah PORT · কি এ লম্ কি পার্ল্ আ লা পর্ত্",
       "mean": "Who is the man speaking at the door? · দরজায় যে লোকটি কথা বলছে, সে কে?"
      },
      {
       "who": "Salim",
       "t": "C'est l'oncle dont je t'ai parlé hier.",
       "tr": "seh LOHNKL dohn zhuh tay pahr-LAY yehr · সে লঁক্ল্ দঁ জ়্য তে পার্লে ইয়ের্",
       "mean": "He is the uncle I told you about yesterday. · গতকাল যাঁর কথা বলেছিলাম, সেই কাকা।"
      },
      {
       "who": "Rima",
       "t": "Celui dont la voiture est rouge ?",
       "tr": "suh-LWEE dohn lah vwah-TEWR eh ROOZH · স্যলুই দঁ লা ভোয়াত্যুর্ এ রুজ়্",
       "mean": "The one whose car is red? · যাঁর গাড়ি লাল, তিনি?"
      },
      {
       "who": "Salim",
       "t": "Exactement. C'est le jour où il est arrivé.",
       "tr": "eg-zak-tuh-MAHN seh luh zhoor oo eel eh tah-ree-VAY · এগজ়াক্ত্যমঁ। সে ল্য জ়ুর্ উ ইল্ এত্ আরিভে",
       "mean": "Exactly. That is the day he arrived. · ঠিক তাই। সেদিনই তিনি এসেছিলেন।"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "La femme dont le fils habite à Paris est professeur.",
     "tr": "lah fahm dohn luh fees ah-beet ah pah-REE ay proh-feh-SUHR · লা ফাম দঁ ল্য ফিস আবিত আ পারি এ প্রফেস্যর",
     "mean": "The woman whose son lives in Paris is a teacher. · যে মহিলার ছেলে প্যারিসে থাকে, তিনি একজন শিক্ষক।",
     "words": [
      {
       "t": "La",
       "mean": "the · সেই"
      },
      {
       "t": "femme",
       "mean": "woman · মহিলা"
      },
      {
       "t": "dont",
       "mean": "whose · যার"
      },
      {
       "t": "le",
       "mean": "the · সেই"
      },
      {
       "t": "fils",
       "mean": "son · ছেলে"
      },
      {
       "t": "habite",
       "mean": "lives · থাকে"
      },
      {
       "t": "à",
       "mean": "in · মধ্যে"
      },
      {
       "t": "Paris",
       "mean": "Paris · প্যারিস"
      },
      {
       "t": "est",
       "mean": "is · হয়"
      },
      {
       "t": "professeur",
       "mean": "a teacher · একজন শিক্ষক"
      }
     ]
    },
    {
     "t": "La ville où je suis né est celle dont je parle toujours.",
     "tr": "lah veel oo zhuh swee NAY eh sel dohn zhuh pahrl too-ZHOOR · লা ভিল্ উ জ়্য সুই নে এ সেল্ দঁ জ়্য পার্ল্ তুজ়ুর্",
     "mean": "The town where I was born is the one I always talk about. · যে শহরে আমার জন্ম, সেটির কথাই আমি সবসময় বলি।",
     "words": [
      {
       "t": "La",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "ville",
       "mean": "town · শহর"
      },
      {
       "t": "où",
       "mean": "where · যেখানে"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "suis",
       "mean": "was (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "né",
       "mean": "born · জন্মেছি"
      },
      {
       "t": "est",
       "mean": "is · হলো"
      },
      {
       "t": "celle",
       "mean": "the one (feminine) · সেটি"
      },
      {
       "t": "dont",
       "mean": "about which · যার কথা"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "parle",
       "mean": "speak · বলি"
      },
      {
       "t": "toujours",
       "mean": "always · সবসময়"
      }
     ],
     "note": "Two relatives in one sentence. **où** points at a place, **dont** replaces **de** plus a noun, because you say **parler de**. · **où** স্থান বোঝায়, **dont** আসে **parler de** থেকে।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each long line in one go. The relative word is the hinge; do not pause before it. · লম্বা লাইনটি এক টানে পড়ুন; সম্বন্ধসূচক শব্দের আগে থামবেন না।",
     "lines": [
      {
       "t": "L'homme qui parle est mon oncle.",
       "mean": "The man who is speaking is my uncle · যে লোকটি কথা বলছে সে আমার কাকা"
      },
      {
       "t": "Le livre que je lis est passionnant.",
       "mean": "The book I am reading is gripping · যে বইটি পড়ছি তা দারুণ"
      },
      {
       "t": "La ville où j'habite est très calme.",
       "mean": "The town where I live is very quiet · যে শহরে থাকি তা খুব শান্ত"
      },
      {
       "t": "Voici la chose dont j'ai besoin.",
       "mean": "Here is the thing I need · এই তো যা আমার দরকার"
      },
      {
       "t": "C'est le jour où il est arrivé.",
       "mean": "That is the day he arrived · এটাই সেই দিন যেদিন সে এসেছিল"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Choose: *L'homme ___ parle est mon oncle.* · বেছে নিন: *L'homme ___ parle est mon oncle.*",
       "options": [
        "dont",
        "où",
        "qui",
        "que"
       ],
       "answer": 2,
       "explain": "A verb follows, so the word is the subject: {{qui}}. · পরে ক্রিয়া আছে, তাই শব্দটি কর্তা: {{qui}}।"
      },
      {
       "q": "Choose: *Le livre ___ je lis est bon.* · বেছে নিন: *Le livre ___ je lis est bon.*",
       "options": [
        "qui",
        "dont",
        "où",
        "que"
       ],
       "answer": 3,
       "explain": "A subject follows, so {{que}}. · পরে কর্তা আছে, তাই {{que}}।"
      },
      {
       "q": "*The book I am talking about* is… · *The book I am talking about* হবে…",
       "options": [
        "le livre dont je parle",
        "le livre que je parle",
        "le livre qui je parle",
        "le livre où je parle"
       ],
       "answer": 0,
       "explain": "{{parler de}} needs {{dont}}. · {{parler de}}-এর জন্য {{dont}} লাগে।"
      },
      {
       "q": "*The day when he arrived* uses… · *The day when he arrived*-এ বসে…",
       "options": [
        "dont",
        "où",
        "quand",
        "que"
       ],
       "answer": 1,
       "explain": "After a time word, French uses {{où}}, not {{quand}}. · সময়বাচক শব্দের পরে ফরাসি {{quand}} নয়, {{où}} ব্যবহার করে।"
      },
      {
       "q": "Which form goes before {{homme}}? · {{homme}}-এর আগে কোন রূপটি বসে?",
       "options": [
        "cette",
        "ces",
        "cet",
        "ce"
       ],
       "answer": 2,
       "explain": "{{cet}} is used before a masculine noun starting with a vowel sound. · স্বরধ্বনি দিয়ে শুরু হওয়া পুংলিঙ্গ নামের আগে {{cet}} বসে।"
      },
      {
       "q": "What is wrong with *le livre je lis*? · *le livre je lis*-এ ভুলটি কোথায়?",
       "options": [
        "It needs an accent · এতে উচ্চারণচিহ্ন লাগে",
        "It should be plural · এটি বহুবচন হওয়া উচিত",
        "Nothing is wrong · কোনো ভুল নেই",
        "French cannot drop que"
       ],
       "answer": 3,
       "explain": "English may omit the relative pronoun; French may not. · ইংরেজিতে relative pronoun বাদ দেওয়া যায়, ফরাসিতে যায় না।"
      }
     ]
    }
   ]
  }
 ]
});
