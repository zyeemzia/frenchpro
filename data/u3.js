/* Unit 3 — Verbs & Tenses. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "verbs",
 "order": 3,
 "icon": "être",
 "color": "teal",
 "title": "Verbs & Tenses",
 "subtitle": "The whole French verb system, one tense at a time · গোটা ফরাসি ক্রিয়াব্যবস্থা, একবারে একটি কাল",
 "lessons": [
  {
   "id": "u3-groups",
   "icon": "-er",
   "title": "The Three Groups · তিনটি দল",
   "subtitle": "How every regular verb behaves in the present · বর্তমান কালে প্রতিটি নিয়মিত ক্রিয়া কেমন আচরণ করে",
   "minutes": 14,
   "goals": [
    "Conjugate -er, -ir and -re verbs in the present · বর্তমানে -er, -ir ও -re ক্রিয়ার রূপ করুন",
    "Recognise which group a verb belongs to · ক্রিয়াটি কোন দলের তা চিনুন",
    "Hear which endings are silent · কোন শেষাংশ নীরব তা শুনুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French verbs fall into three groups by their infinitive ending. Group one alone holds about nine verbs in ten, so learning it well buys you most of the language. · ফরাসি ক্রিয়া তিন দলে ভাগ। প্রথম দলেই প্রায় ৯০ শতাংশ ক্রিয়া।"
    },
    {
     "type": "table",
     "head": [
      "Person",
      "-er: parler",
      "-ir: finir",
      "-re: vendre"
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
     "title": "The three patterns side by side · তিনটি ছাঁচ পাশাপাশি"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "In the -er column, **four forms sound identical**: {{parle}}, {{parles}}, {{parle}}, {{parlent}} are all said PARL. Only {{nous}} and {{vous}} are audibly different. · -er দলে চারটি রূপের উচ্চারণ এক।"
    },
    {
     "type": "rule",
     "name": "The -iss- that marks group two",
     "color": "blue",
     "desc": "True second-group verbs insert **-iss-** in the plural. If a verb ends in -ir but has no -iss-, it is irregular. · দ্বিতীয় দলের ক্রিয়া বহুবচনে -iss- নেয়।",
     "examples": [
      {
       "t": "nous finissons",
       "tr": "we finish",
       "hl": "iss"
      },
      {
       "t": "ils choisissent",
       "tr": "they choose",
       "hl": "iss"
      },
      {
       "t": "nous partons",
       "tr": "we leave — no -iss-, so irregular",
       "hl": "partons"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "travailler",
       "tr": "trah-vah-YAY · ত্রাভাইয়ে",
       "mean": "to work · কাজ করা",
       "root": "-er"
      },
      {
       "t": "choisir",
       "tr": "shwah-ZEER · শোয়াজ়ির",
       "mean": "to choose · বেছে নেওয়া",
       "root": "-ir"
      },
      {
       "t": "réussir",
       "tr": "ray-ew-SEER · রেউ্যসির",
       "mean": "to succeed · সফল হওয়া",
       "root": "-ir"
      },
      {
       "t": "attendre",
       "tr": "ah-TAHNDR · আতাঁদ্র",
       "mean": "to wait for · অপেক্ষা করা",
       "root": "-re"
      },
      {
       "t": "répondre",
       "tr": "ray-POHNDR · রেপঁদ্র",
       "mean": "to answer · উত্তর দেওয়া",
       "root": "-re"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{attendre}} means *to wait for* — the *for* is already inside it. Say {{J'attends le bus}}, never *j'attends pour le bus*. · attendre-এর ভেতরেই for আছে।"
    },
    {
     "type": "practice",
     "text": "Conjugate aloud, then listen for which endings you actually hear. · জোরে রূপ বলুন, শুনুন কোনগুলো আসলে শোনা যায়।",
     "lines": [
      "je parle, tu parles, il parle, ils parlent",
      "nous parlons, vous parlez",
      "je finis, nous finissons",
      "il attend, ils attendent"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which forms of {{parler}} sound the same? · {{parler}}-এর কোন রূপগুলোর উচ্চারণ এক?",
       "options": [
        "je, tu, il and ils",
        "nous and vous",
        "je and nous",
        "tu and vous"
       ],
       "answer": 0,
       "explain": "Only nous and vous are audibly different. · কেবল nous ও vous আলাদা শোনায়।"
      },
      {
       "q": "{{nous finissons}} belongs to… · {{nous finissons}} কোন দলের?",
       "options": [
        "no group",
        "group two",
        "group one",
        "group three"
       ],
       "answer": 1,
       "explain": "The -iss- marks a true second-group verb. · -iss- প্রকৃত দ্বিতীয় দলের ক্রিয়ার চিহ্ন।"
      },
      {
       "q": "*They are waiting* is… · *They are waiting* হবে…",
       "options": [
        "ils attends",
        "ils attendont",
        "ils attendent",
        "ils attendrent"
       ],
       "answer": 2,
       "explain": "-re verbs take -ent for ils/elles. · -re ক্রিয়ায় ils/elles-এর জন্য -ent বসে।"
      },
      {
       "q": "Why is {{partir}} irregular? · {{partir}} অনিয়মিত কেন?",
       "options": [
        "It ends in -ir",
        "It takes être",
        "It has an accent",
        "It has no -iss- in the plural"
       ],
       "answer": 3,
       "explain": "-ir verbs without -iss- do not follow group two. · -iss- ছাড়া -ir ক্রিয়া দ্বিতীয় দলের নিয়ম মানে না।"
      },
      {
       "q": "*I am waiting for the bus* is… · *I am waiting for the bus* হবে…",
       "options": [
        "J'attends le bus.",
        "J'attends pour le bus.",
        "Je attends le bus.",
        "J'attend le bus."
       ],
       "answer": 0,
       "explain": "{{attendre}} already contains *for*. · {{attendre}}-এর ভেতরেই *for* আছে।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-irregular",
   "icon": "4",
   "title": "The Big Four · বড় চারটি",
   "subtitle": "être, avoir, aller, faire · চারটি অপরিহার্য ক্রিয়া",
   "minutes": 13,
   "goals": [
    "Conjugate the four most used verbs without thinking · সর্বাধিক ব্যবহৃত চারটি ক্রিয়া না ভেবেই রূপ করুন",
    "Use avoir for states where English uses to be · ইংরেজিতে যেখানে to be, ফরাসিতে সেখানে avoir",
    "Use faire for weather and activities · আবহাওয়া ও কাজকর্মে faire ব্যবহার করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Four irregular verbs appear in almost every French sentence, and two of them build the past tense. There is no shortcut: these must become automatic. · চারটি অনিয়মিত ক্রিয়া প্রায় প্রতিটি বাক্যে আসে। এগুলো মুখস্থ হতেই হবে।"
    },
    {
     "type": "table",
     "head": [
      "Person",
      "être (be)",
      "avoir (have)",
      "aller (go)",
      "faire (do)"
     ],
     "rows": [
      [
       "je / j'",
       "{{suis}}",
       "{{ai}}",
       "{{vais}}",
       "{{fais}}"
      ],
      [
       "tu",
       "{{es}}",
       "{{as}}",
       "{{vas}}",
       "{{fais}}"
      ],
      [
       "il / elle",
       "{{est}}",
       "{{a}}",
       "{{va}}",
       "{{fait}}"
      ],
      [
       "nous",
       "{{sommes}}",
       "{{avons}}",
       "{{allons}}",
       "{{faisons}}"
      ],
      [
       "vous",
       "{{êtes}}",
       "{{avez}}",
       "{{allez}}",
       "{{faites}}"
      ],
      [
       "ils / elles",
       "{{sont}}",
       "{{ont}}",
       "{{vont}}",
       "{{font}}"
      ]
     ],
     "title": "Learn this table cold · এই ছকটি নিখুঁতভাবে মুখস্থ করুন"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{vous faites}} and {{vous êtes}} are two of only three French verbs whose {{vous}} form does not end in -ez. The third is {{vous dites}}. · মাত্র তিনটি ক্রিয়ার vous রূপ -ez দিয়ে শেষ হয় না।"
    },
    {
     "type": "rule",
     "name": "avoir where English says to be",
     "color": "orange",
     "desc": "French uses **avoir** for age, hunger, thirst, fear, cold and heat. Saying {{je suis 28}} is a classic beginner error. · বয়স, খিদে, তৃষ্ণা, ভয়, শীত ও গরম বোঝাতে ফরাসি avoir ব্যবহার করে।",
     "examples": [
      {
       "t": "J'ai vingt-huit ans.",
       "tr": "I am twenty-eight.",
       "hl": "ai"
      },
      {
       "t": "J'ai faim et j'ai soif.",
       "tr": "I am hungry and thirsty.",
       "hl": "ai"
      },
      {
       "t": "Il a froid.",
       "tr": "He is cold.",
       "hl": "a"
      },
      {
       "t": "Vous avez raison.",
       "tr": "You are right.",
       "hl": "avez"
      }
     ]
    },
    {
     "type": "rule",
     "name": "faire for weather and activities",
     "color": "green",
     "desc": "{{faire}} covers the weather and most sports and chores. · আবহাওয়া ও অধিকাংশ কাজকর্মে faire বসে।",
     "examples": [
      {
       "t": "Il fait beau.",
       "tr": "The weather is fine.",
       "hl": "fait"
      },
      {
       "t": "Il fait froid aujourd'hui.",
       "tr": "It is cold today.",
       "hl": "fait"
      },
      {
       "t": "Je fais la cuisine.",
       "tr": "I do the cooking.",
       "hl": "fais"
      },
      {
       "t": "Elle fait du sport.",
       "tr": "She does sport.",
       "hl": "fait"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "J'ai vingt-huit ans et je suis avocat.",
     "tr": "zhay vant-weet AHN ay zhuh swee ah-voh-KAH · জ়ে ভঁতুইত আঁ এ জ়্য সুই আভোকা",
     "mean": "I am twenty-eight and I am a lawyer. · আমার বয়স আঠাশ এবং আমি একজন আইনজীবী।",
     "words": [
      {
       "t": "J'ai",
       "mean": "I have · আমার আছে"
      },
      {
       "t": "vingt-huit",
       "mean": "twenty-eight · আঠাশ"
      },
      {
       "t": "ans",
       "mean": "years · বছর"
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
       "t": "suis",
       "mean": "am · আছি"
      },
      {
       "t": "avocat",
       "mean": "a lawyer · একজন আইনজীবী"
      }
     ],
     "note": "Note both patterns: {{avoir}} for age, {{être}} for the job — and no article before the job. · দুটি ছক লক্ষ করুন: বয়সে {{avoir}}, পেশায় {{être}} — আর পেশার আগে article বসে না।"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "After {{être}}, a job takes **no article**: {{Je suis professeur}}, not *un professeur*. · être-এর পরে পেশার আগে article বসে না।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I am 28 years old* is… · *I am 28 years old* হবে…",
       "options": [
        "J'ai vingt-huit.",
        "J'ai vingt-huit ans.",
        "Je suis vingt-huit ans.",
        "Je suis vingt-huit."
       ],
       "answer": 1,
       "explain": "French uses {{avoir}} with {{ans}} for age. · বয়স বোঝাতে ফরাসি {{ans}}-এর সঙ্গে {{avoir}} ব্যবহার করে।"
      },
      {
       "q": "*It is cold today* is… · *It is cold today* হবে…",
       "options": [
        "Il a froid aujourd'hui.",
        "C'est froid aujourd'hui.",
        "Il fait froid aujourd'hui.",
        "Il est froid aujourd'hui."
       ],
       "answer": 2,
       "explain": "Weather uses {{faire}}. {{Il a froid}} means *he* feels cold. · আবহাওয়ায় {{faire}} বসে। {{Il a froid}} মানে *তার* শীত লাগছে।"
      },
      {
       "q": "Which {{vous}} form does **not** end in -ez? · কোন {{vous}} রূপটি -ez দিয়ে শেষ **হয় না**?",
       "options": [
        "vous allez",
        "vous avez",
        "vous parlez",
        "vous faites"
       ],
       "answer": 3,
       "explain": "Only {{faites}}, {{êtes}} and {{dites}}. · কেবল {{faites}}, {{êtes}} ও {{dites}}।"
      },
      {
       "q": "*I am a teacher* is… · *I am a teacher* হবে…",
       "options": [
        "Je suis professeur.",
        "Je suis un professeur.",
        "J'ai professeur.",
        "Je fais professeur."
       ],
       "answer": 0,
       "explain": "No article after {{être}} with a profession. · পেশার ক্ষেত্রে {{être}}-এর পরে article বসে না।"
      },
      {
       "q": "*They have* is… · *They have* হবে…",
       "options": [
        "ils font",
        "ils ont",
        "ils sont",
        "ils vont"
       ],
       "answer": 1,
       "explain": "{{ont}} is avoir; {{sont}} is être. · {{ont}} হলো avoir; {{sont}} হলো être।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-passe",
   "icon": "PC",
   "title": "Passé Composé · যৌগিক অতীত",
   "subtitle": "The past you will use most · যে অতীত কালটি আপনি সবচেয়ে বেশি ব্যবহার করবেন",
   "minutes": 16,
   "goals": [
    "Build the passé composé with avoir and être · avoir ও être দিয়ে যৌগিক অতীত গড়ুন",
    "Know which verbs take être · কোন ক্রিয়াগুলো être নেয় তা জানুন",
    "Make the past participle agree · অতীত কৃদন্তে সমতা আনুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The passé composé is built from two pieces: a helper verb in the present, plus a past participle. It covers both English *I did* and *I have done*. · passé composé দুটি অংশে তৈরি: সহায়ক ক্রিয়া ও past participle।"
    },
    {
     "type": "table",
     "head": [
      "Infinitive ending",
      "Participle ending",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "-er",
       "-é",
       "{{parler → parlé}}",
       "spoken"
      ],
      [
       "-ir (group 2)",
       "-i",
       "{{finir → fini}}",
       "finished"
      ],
      [
       "-re",
       "-u",
       "{{vendre → vendu}}",
       "sold"
      ]
     ],
     "title": "Regular participles · নিয়মিত কৃদন্ত"
    },
    {
     "type": "rule",
     "name": "Most verbs take avoir",
     "color": "blue",
     "desc": "The default helper is {{avoir}}. The participle does **not** change for the subject. · সাধারণ সহায়ক avoir; participle কর্তার সঙ্গে বদলায় না।",
     "examples": [
      {
       "t": "J'ai parlé à Salim.",
       "tr": "I spoke to Salim.",
       "hl": "ai parlé"
      },
      {
       "t": "Nous avons fini le travail.",
       "tr": "We finished the work.",
       "hl": "avons fini"
      },
      {
       "t": "Elle a vendu sa voiture.",
       "tr": "She sold her car.",
       "hl": "a vendu"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Movement verbs take être",
     "color": "red",
     "desc": "About fourteen verbs of coming and going use {{être}} — and then the participle **agrees** with the subject like an adjective. · যাতায়াতের প্রায় চোদ্দটি ক্রিয়া être নেয়, আর তখন participle কর্তার সঙ্গে মেলে।",
     "examples": [
      {
       "t": "Il est allé à Paris.",
       "tr": "He went to Paris.",
       "hl": "est allé"
      },
      {
       "t": "Elle est allée à Paris.",
       "tr": "She went to Paris — extra e",
       "hl": "allée"
      },
      {
       "t": "Ils sont arrivés hier.",
       "tr": "They arrived yesterday — extra s",
       "hl": "arrivés"
      },
      {
       "t": "Elles sont parties tôt.",
       "tr": "They (f.) left early — es",
       "hl": "parties"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The être verbs come in opposite pairs: {{aller / venir}}, {{arriver / partir}}, {{entrer / sortir}}, {{monter / descendre}}, {{naître / mourir}}, {{rester}}, {{tomber}}, {{retourner}}. Picture a house: you go in, go up, come down, go out. · être-ক্রিয়াগুলো জোড়ায় জোড়ায় আসে।"
    },
    {
     "type": "rule",
     "name": "Irregular participles worth memorising",
     "color": "purple",
     "desc": "The commonest verbs have participles you simply have to know. · সবচেয়ে ব্যবহৃত ক্রিয়ার participle মুখস্থ করতে হয়।",
     "examples": [
      {
       "t": "avoir → eu · être → été",
       "tr": "had · been",
       "hl": "eu"
      },
      {
       "t": "faire → fait · prendre → pris",
       "tr": "done · taken",
       "hl": "fait"
      },
      {
       "t": "voir → vu · boire → bu",
       "tr": "seen · drunk",
       "hl": "vu"
      },
      {
       "t": "écrire → écrit · dire → dit",
       "tr": "written · said",
       "hl": "écrit"
      },
      {
       "t": "venir → venu · pouvoir → pu",
       "tr": "come · been able",
       "hl": "venu"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "With {{avoir}}, the participle agrees only when a direct object comes **before** the verb: {{Les lettres que j'ai écrites}}. Otherwise it never moves. · avoir-এর সঙ্গে participle কেবল তখনই মেলে যখন কর্ম আগে বসে।"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Choose the helper",
       "t": "avoir or être ?",
       "mean": "Movement or reflexive → être. Everything else → avoir. · যাতায়াত বা reflexive → être। বাকি সব → avoir।"
      },
      {
       "title": "Put it in the present",
       "t": "j'ai … / je suis …",
       "mean": "Conjugate the helper for the subject. · কর্তা অনুযায়ী সহায়ক ক্রিয়ার রূপ বসান।"
      },
      {
       "title": "Add the participle",
       "t": "parlé / allé",
       "mean": "Regular ending, or a memorised irregular. · নিয়মিত শেষাংশ, কিংবা মুখস্থ করা অনিয়মিত রূপ।"
      },
      {
       "title": "Check agreement",
       "t": "allée, allés, allées",
       "mean": "Only with être — or with avoir when the object came first. · কেবল être-এর সঙ্গে — অথবা avoir-এর সঙ্গে যখন কর্ম আগে বসে।"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*She went to Paris* is… · *She went to Paris* হবে…",
       "options": [
        "Elle est allé à Paris.",
        "Elle a allée à Paris.",
        "Elle est allée à Paris.",
        "Elle a allé à Paris."
       ],
       "answer": 2,
       "explain": "{{aller}} takes être, and the participle agrees: allée. · {{aller}} être নেয়, আর participle মেলে: allée।"
      },
      {
       "q": "The past participle of {{prendre}} is… · {{prendre}}-এর past participle…",
       "options": [
        "prendu",
        "prené",
        "prendi",
        "pris"
       ],
       "answer": 3,
       "explain": "An irregular you must memorise. · একটি অনিয়মিত রূপ, যা মুখস্থ করতেই হবে।"
      },
      {
       "q": "*We finished the work* is… · *We finished the work* হবে…",
       "options": [
        "Nous avons fini le travail.",
        "Nous sommes finis le travail.",
        "Nous avons finis le travail.",
        "Nous sommes fini le travail."
       ],
       "answer": 0,
       "explain": "{{finir}} takes avoir and the participle stays flat. · {{finir}} avoir নেয় এবং participle অপরিবর্তিত থাকে।"
      },
      {
       "q": "Which verb takes {{être}}? · কোন ক্রিয়াটি {{être}} নেয়?",
       "options": [
        "finir",
        "partir",
        "manger",
        "vendre"
       ],
       "answer": 1,
       "explain": "{{partir}} is a movement verb. · {{partir}} একটি যাতায়াতবাচক ক্রিয়া।"
      },
      {
       "q": "The participle of {{être}} is… · {{être}}-এর participle…",
       "options": [
        "esté",
        "étré",
        "été",
        "étu"
       ],
       "answer": 2,
       "explain": "{{j'ai été}} = I have been. · {{j'ai été}} = আমি ছিলাম।"
      },
      {
       "q": "In {{Les lettres que j'ai écrites}}, why does the participle agree? · {{Les lettres que j'ai écrites}}-এ participle মেলে কেন?",
       "options": [
        "Because lettres is feminine",
        "Because the helper is avoir",
        "It is an exception verb",
        "The direct object comes before the verb"
       ],
       "answer": 3,
       "explain": "A preceding direct object triggers agreement with avoir. · কর্ম আগে বসলে avoir-এর সঙ্গেও participle মেলে।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-imparfait",
   "icon": "ait",
   "title": "Imparfait · অসমাপিকা অতীত",
   "subtitle": "The past that was still going on · যে অতীত তখনো চলছিল",
   "minutes": 13,
   "goals": [
    "Build the imparfait from the nous form · nous রূপ থেকে অসমাপিকা অতীত গড়ুন",
    "Choose between imparfait and passé composé · অসমাপিকা ও যৌগিক অতীতের মধ্যে বাছুন",
    "Describe scenes and habits in the past · অতীতের দৃশ্য ও অভ্যাস বর্ণনা করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French splits the past in two. The passé composé reports **what happened**; the imparfait paints **what was going on** around it. Bangla does this with context; French does it with endings. · passé composé বলে কী ঘটেছিল, imparfait বলে তখন কী চলছিল।"
    },
    {
     "type": "rule",
     "name": "One stem, no exceptions but être",
     "color": "green",
     "desc": "Take the **nous** form of the present, drop **-ons**, add the endings. Only {{être}} breaks this, using the stem **ét-**. · nous রূপ থেকে -ons বাদ দিন, তারপর শেষাংশ যোগ করুন।",
     "examples": [
      {
       "t": "nous parlons → je parlais",
       "tr": "I was speaking",
       "hl": "parlais"
      },
      {
       "t": "nous finissons → je finissais",
       "tr": "I was finishing",
       "hl": "finissais"
      },
      {
       "t": "nous faisons → je faisais",
       "tr": "I was doing",
       "hl": "faisais"
      },
      {
       "t": "être → j'étais",
       "tr": "I was — the only irregular",
       "hl": "étais"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Person",
      "Ending",
      "parler",
      "être"
     ],
     "rows": [
      [
       "je",
       "-ais",
       "{{parlais}}",
       "{{étais}}"
      ],
      [
       "tu",
       "-ais",
       "{{parlais}}",
       "{{étais}}"
      ],
      [
       "il / elle",
       "-ait",
       "{{parlait}}",
       "{{était}}"
      ],
      [
       "nous",
       "-ions",
       "{{parlions}}",
       "{{étions}}"
      ],
      [
       "vous",
       "-iez",
       "{{parliez}}",
       "{{étiez}}"
      ],
      [
       "ils / elles",
       "-aient",
       "{{parlaient}}",
       "{{étaient}}"
      ]
     ],
     "title": "The endings are the same for every verb · শেষাংশ সব ক্রিয়ার জন্য একই"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{-ais, -ait, -aient}} all sound identical — like the è of {{père}}. Only the spelling tells them apart. · তিনটি শেষাংশের উচ্চারণ এক; পার্থক্য কেবল বানানে।"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "Je lisais quand il est arrivé.",
       "label": "both tenses",
       "desc": "*I was reading* (imparfait, the scene) *when he arrived* (passé composé, the event). · *আমি পড়ছিলাম* (imparfait, দৃশ্য) *যখন সে এলো* (passé composé, ঘটনা)।"
      },
      {
       "t": "Il pleuvait.",
       "label": "imparfait",
       "desc": "A description of the weather — no start, no end. · আবহাওয়ার বর্ণনা — শুরু নেই, শেষ নেই।"
      },
      {
       "t": "Il a plu hier.",
       "label": "passé composé",
       "desc": "A completed fact: it rained yesterday. · সম্পন্ন ঘটনা: গতকাল বৃষ্টি হয়েছিল।"
      }
     ],
     "title": "Scene versus event · দৃশ্য বনাম ঘটনা"
    },
    {
     "type": "rule",
     "name": "When to choose the imparfait",
     "color": "blue",
     "desc": "Use it for habits, descriptions, ages, weather, feelings and time of day in the past. · অভ্যাস, বর্ণনা, বয়স, আবহাওয়া ও অনুভূতির জন্য imparfait।",
     "examples": [
      {
       "t": "Quand j'étais petit, j'habitais à Sylhet.",
       "tr": "When I was small, I lived in Sylhet.",
       "hl": "étais"
      },
      {
       "t": "Il était huit heures.",
       "tr": "It was eight o'clock.",
       "hl": "était"
      },
      {
       "t": "Elle avait l'air fatiguée.",
       "tr": "She looked tired.",
       "hl": "avait"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "A simple test: could you say *used to* or *was —ing* in English? Then use the imparfait. · ইংরেজিতে used to বা was —ing বলা গেলে imparfait।"
    },
    {
     "type": "sentence",
     "t": "Quand j'étais petit, nous allions souvent au village.",
     "tr": "kahn zhay-tay puh-TEE, noo-zah-lyohn soo-VAHN oh vee-LAHZH · কাঁ জ়েতে প্যতি, নু জ়ালিয়ঁ সুভাঁ ও ভিলাজ়",
     "mean": "When I was small, we often went to the village. · ছোটবেলায় আমরা প্রায়ই গ্রামে যেতাম।",
     "words": [
      {
       "t": "Quand",
       "mean": "when · যখন"
      },
      {
       "t": "j'étais",
       "mean": "I was · আমি ছিলাম"
      },
      {
       "t": "petit",
       "mean": "small · ছোট"
      },
      {
       "t": "nous",
       "mean": "we · আমরা"
      },
      {
       "t": "allions",
       "mean": "used to go · যেতাম"
      },
      {
       "t": "souvent",
       "mean": "often · প্রায়ই"
      },
      {
       "t": "au",
       "mean": "to the · -এর দিকে"
      },
      {
       "t": "village",
       "mean": "village · গ্রাম"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The imparfait stem comes from… · imparfait-এর মূল আসে…",
       "options": [
        "the nous form of the present",
        "the infinitive",
        "the je form of the present",
        "the past participle"
       ],
       "answer": 0,
       "explain": "Drop -ons from {{nous}} and add the endings. · {{nous}} রূপ থেকে -ons বাদ দিয়ে শেষাংশ যোগ করুন।"
      },
      {
       "q": "Which verb has an irregular imparfait stem? · কোন ক্রিয়ার imparfait মূল অনিয়মিত?",
       "options": [
        "aller",
        "être",
        "avoir",
        "faire"
       ],
       "answer": 1,
       "explain": "{{être}} uses ét-; all others follow the rule. · {{être}} ব্যবহার করে ét-; বাকি সব নিয়ম মানে।"
      },
      {
       "q": "*I was reading when he arrived* uses… · *I was reading when he arrived*-এ বসে…",
       "options": [
        "imparfait twice",
        "passé composé twice",
        "imparfait then passé composé",
        "passé composé then imparfait"
       ],
       "answer": 2,
       "explain": "The scene is imparfait, the event is passé composé. · দৃশ্য imparfait, ঘটনা passé composé।"
      },
      {
       "q": "*When I was small* is… · *When I was small* হবে…",
       "options": [
        "Quand j'ai été petit",
        "Quand je suis petit",
        "Quand j'étais petite seulement",
        "Quand j'étais petit"
       ],
       "answer": 3,
       "explain": "A description in the past takes the imparfait. · অতীতের বর্ণনায় imparfait বসে।"
      },
      {
       "q": "Which English clue points to the imparfait? · ইংরেজির কোন সংকেত imparfait নির্দেশ করে?",
       "options": [
        "used to",
        "has just",
        "will have",
        "did once"
       ],
       "answer": 0,
       "explain": "*Used to* and *was —ing* both signal the imparfait. · *Used to* ও *was —ing* দুটোই imparfait বোঝায়।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-futur",
   "icon": "rai",
   "title": "Talking About the Future · ভবিষ্যতের কথা",
   "subtitle": "Two futures, and when each one fits · দুটি ভবিষ্যৎ, আর কোনটি কখন মানানসই",
   "minutes": 12,
   "goals": [
    "Use the futur proche for near plans · কাছের পরিকল্পনায় futur proche ব্যবহার করুন",
    "Build the futur simple from the infinitive · ক্রিয়ামূল থেকে সরল ভবিষ্যৎ গড়ুন",
    "Learn the irregular future stems · অনিয়মিত ভবিষ্যৎ ধাতুগুলো শিখুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French has an easy future and a formal one. In speech the easy one wins; in writing and in plans further off, the simple future takes over. · ফরাসিতে দুটি ভবিষ্যৎ: কথ্যে সহজটি, লেখায় ও দূরের পরিকল্পনায় অন্যটি।"
    },
    {
     "type": "rule",
     "name": "Futur proche: aller + infinitive",
     "color": "green",
     "desc": "Exactly like English *going to*. Conjugate {{aller}}, then add the plain infinitive. · ইংরেজি going to-এর মতো।",
     "examples": [
      {
       "t": "Je vais partir.",
       "tr": "I am going to leave.",
       "hl": "vais partir"
      },
      {
       "t": "Nous allons manger.",
       "tr": "We are going to eat.",
       "hl": "allons manger"
      },
      {
       "t": "Il va pleuvoir.",
       "tr": "It is going to rain.",
       "hl": "va pleuvoir"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Futur simple: infinitive + endings",
     "color": "blue",
     "desc": "Add **-ai, -as, -a, -ons, -ez, -ont** straight onto the infinitive. For -re verbs, drop the final e first. · infinitive-এর সঙ্গে শেষাংশ যোগ করুন।",
     "examples": [
      {
       "t": "parler → je parlerai",
       "tr": "I shall speak",
       "hl": "parlerai"
      },
      {
       "t": "finir → tu finiras",
       "tr": "you will finish",
       "hl": "finiras"
      },
      {
       "t": "vendre → il vendra",
       "tr": "he will sell — the e is dropped",
       "hl": "vendra"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The future endings are simply {{avoir}} in disguise: **ai, as, a, (av)ons, (av)ez, ont**. Spot that and you never forget them. · ভবিষ্যতের শেষাংশ আসলে avoir-এর রূপ।"
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Future stem",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "{{être}}",
       "ser-",
       "{{je serai}}",
       "I shall be"
      ],
      [
       "{{avoir}}",
       "aur-",
       "{{j'aurai}}",
       "I shall have"
      ],
      [
       "{{aller}}",
       "ir-",
       "{{j'irai}}",
       "I shall go"
      ],
      [
       "{{faire}}",
       "fer-",
       "{{je ferai}}",
       "I shall do"
      ],
      [
       "{{venir}}",
       "viendr-",
       "{{je viendrai}}",
       "I shall come"
      ],
      [
       "{{pouvoir}}",
       "pourr-",
       "{{je pourrai}}",
       "I shall be able"
      ],
      [
       "{{vouloir}}",
       "voudr-",
       "{{je voudrai}}",
       "I shall want"
      ],
      [
       "{{voir}}",
       "verr-",
       "{{je verrai}}",
       "I shall see"
      ]
     ],
     "title": "The irregular stems — endings never change · অনিয়মিত ধাতু — শেষাংশ কখনো বদলায় না"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "After {{quand}}, {{lorsque}} and {{dès que}}, French uses the **future** where English uses the present: {{Quand il arrivera, nous mangerons}} — *When he arrives, we will eat*. · quand-এর পরে ফরাসি ভবিষ্যৎ ব্যবহার করে।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*I am going to leave* is… · *I am going to leave* হবে…",
       "options": [
        "Je vais partirai.",
        "Je vais partir.",
        "Je partirai.",
        "Je pars aller."
       ],
       "answer": 1,
       "explain": "The futur proche is {{aller}} plus the infinitive. · futur proche মানে {{aller}} ও infinitive।"
      },
      {
       "q": "The future stem of {{aller}} is… · {{aller}}-এর ভবিষ্যৎ মূল…",
       "options": [
        "aller-",
        "all-",
        "ir-",
        "va-"
       ],
       "answer": 2,
       "explain": "{{j'irai}} — completely irregular. · {{j'irai}} — সম্পূর্ণ অনিয়মিত।"
      },
      {
       "q": "*He will sell* is… · *He will sell* হবে…",
       "options": [
        "il vendrera",
        "il vendrai",
        "il vendera",
        "il vendra"
       ],
       "answer": 3,
       "explain": "-re verbs drop the final e before the endings. · -re ক্রিয়া শেষাংশের আগে শেষের e বাদ দেয়।"
      },
      {
       "q": "*When he arrives, we will eat* in French uses… · *When he arrives, we will eat* ফরাসিতে ব্যবহার করে…",
       "options": [
        "future in both halves",
        "present then future",
        "present in both halves",
        "past then future"
       ],
       "answer": 0,
       "explain": "After {{quand}}, French keeps the future. · {{quand}}-এর পরে ফরাসি ভবিষ্যৎ কাল রাখে।"
      },
      {
       "q": "The future endings are borrowed from… · ভবিষ্যতের শেষাংশ ধার করা হয়েছে…",
       "options": [
        "faire",
        "avoir",
        "être",
        "aller"
       ],
       "answer": 1,
       "explain": "ai, as, a, ons, ez, ont — the present of avoir. · ai, as, a, ons, ez, ont — avoir-এর বর্তমান রূপ।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-conditionnel",
   "icon": "rais",
   "title": "Conditionnel · শর্তবাচক কাল",
   "subtitle": "Would, could, should — and simple politeness · Would, could, should — আর সহজ ভদ্রতা",
   "minutes": 11,
   "goals": [
    "Build the conditional from the future stem · ভবিষ্যৎ ধাতু থেকে শর্তবাচক গড়ুন",
    "Soften requests the way French speakers do · ফরাসিভাষীদের মতো অনুরোধ নরম করুন",
    "Report what someone said they would do · কেউ কী করবে বলেছিল তা বর্ণনা করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The conditional is the most useful tense for sounding polite. It is also the easiest to build: the **future stem** with the **imparfait endings**. · ভদ্রভাবে বলার জন্য conditionnel সবচেয়ে কাজের, আর গঠনও সহজ।"
    },
    {
     "type": "rule",
     "name": "Future stem + imparfait endings",
     "color": "blue",
     "desc": "If you know the future, you already know the conditional. · ভবিষ্যৎ জানলে conditionnel আপনার জানা।",
     "examples": [
      {
       "t": "je parlerai → je parlerais",
       "tr": "I would speak",
       "hl": "parlerais"
      },
      {
       "t": "j'aurai → j'aurais",
       "tr": "I would have",
       "hl": "aurais"
      },
      {
       "t": "je serai → je serais",
       "tr": "I would be",
       "hl": "serais"
      },
      {
       "t": "je viendrai → je viendrais",
       "tr": "I would come",
       "hl": "viendrais"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Politeness, the French way",
     "color": "green",
     "desc": "A request in the present sounds blunt. The conditional turns an order into an offer. · বর্তমান কালে অনুরোধ রূক্ষ শোনায়; conditionnel তাকে ভদ্র করে।",
     "examples": [
      {
       "t": "Je veux un café. → Je voudrais un café.",
       "tr": "I want → I would like",
       "hl": "voudrais"
      },
      {
       "t": "Pouvez-vous m'aider ? → Pourriez-vous m'aider ?",
       "tr": "Can you → Could you",
       "hl": "Pourriez"
      },
      {
       "t": "Vous devez partir. → Vous devriez partir.",
       "tr": "You must → You should",
       "hl": "devriez"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In a shop or café, {{Je voudrais}} is the normal polite form. {{Je veux}} sounds like a child demanding something. · দোকানে বা ক্যাফেতে সবসময় Je voudrais বলুন।"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "je parlerai",
       "label": "future",
       "desc": "*I will speak* — a fact about the future. · *আমি বলব* — ভবিষ্যতের একটি তথ্য।"
      },
      {
       "t": "je parlerais",
       "label": "conditional",
       "desc": "*I would speak* — depends on something. · *আমি বলতাম* — কিছুর উপর নির্ভরশীল।"
      },
      {
       "t": "je parlais",
       "label": "imparfait",
       "desc": "*I was speaking* — the past. Note it has no r. · *আমি বলছিলাম* — অতীত। লক্ষ করুন, এতে r নেই।"
      }
     ],
     "title": "One letter apart · এক অক্ষরের ফারাক"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The only difference between {{je parlerai}} (future) and {{je parlerais}} (conditional) is a silent s. In speech they are near-identical; in writing the s matters. · পার্থক্য কেবল একটি নীরব s।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The conditional uses… · conditionnel ব্যবহার করে…",
       "options": [
        "the nous stem with future endings",
        "the participle with imparfait endings",
        "the future stem with imparfait endings",
        "the infinitive with future endings"
       ],
       "answer": 2,
       "explain": "Future stem, imparfait endings. · ভবিষ্যতের মূল, imparfait-এর শেষাংশ।"
      },
      {
       "q": "The polite way to order a coffee is… · ভদ্রভাবে কফির অর্ডার দেওয়ার উপায়…",
       "options": [
        "Je veux un café.",
        "Je vais un café.",
        "J'ai un café.",
        "Je voudrais un café."
       ],
       "answer": 3,
       "explain": "{{Je voudrais}} is the standard polite form. · {{Je voudrais}} হলো প্রচলিত ভদ্র রূপ।"
      },
      {
       "q": "*Could you help me?* is… · *Could you help me?* হবে…",
       "options": [
        "Pourriez-vous m'aider ?",
        "Pouvez-vous m'aider ?",
        "Pourrez-vous m'aider ?",
        "Pouviez-vous m'aider ?"
       ],
       "answer": 0,
       "explain": "The conditional {{pourriez}} is the polite choice. · conditionnel {{pourriez}} হলো ভদ্র পছন্দ।"
      },
      {
       "q": "What separates {{je parlerai}} from {{je parlerais}}? · {{je parlerai}} ও {{je parlerais}}-এর পার্থক্য কী?",
       "options": [
        "Nothing at all",
        "A silent s",
        "An accent",
        "A different stem"
       ],
       "answer": 1,
       "explain": "Future -ai, conditional -ais. · ভবিষ্যতে -ai, conditionnel-এ -ais।"
      },
      {
       "q": "*You should leave* is… · *You should leave* হবে…",
       "options": [
        "Vous devrez partir.",
        "Vous deviez partir.",
        "Vous devriez partir.",
        "Vous devez partir."
       ],
       "answer": 2,
       "explain": "{{devriez}} is the conditional of {{devoir}}. · {{devriez}} হলো {{devoir}}-এর conditionnel রূপ।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-subjonctif",
   "icon": "que",
   "title": "Subjonctif · সম্ভাবনাসূচক কাল",
   "subtitle": "The mood of doubt, wish and necessity · সন্দেহ, ইচ্ছা ও প্রয়োজনের ভাব",
   "minutes": 15,
   "goals": [
    "Build the present subjunctive · বর্তমান সম্ভাবনাসূচক গড়ুন",
    "Recognise the expressions that trigger it · কোন অভিব্যক্তিতে এটি লাগে তা চিনুন",
    "Avoid using it where the indicative belongs · যেখানে নির্দেশক কাল লাগে সেখানে এটি ব্যবহার করবেন না"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The subjunctive is not a tense but a **mood**. It appears after {{que}} when the main clause expresses a wish, a doubt, an emotion or a necessity — never a plain fact. · subjonctif কাল নয়, ভাব। ইচ্ছা, সন্দেহ, আবেগ বা প্রয়োজনের পরে আসে।"
    },
    {
     "type": "rule",
     "name": "Building it",
     "color": "blue",
     "desc": "Take the **ils** form of the present, drop **-ent**, add **-e, -es, -e, -ions, -iez, -ent**. · ils রূপ থেকে -ent বাদ দিয়ে নতুন শেষাংশ যোগ করুন।",
     "examples": [
      {
       "t": "ils parlent → que je parle",
       "tr": "that I speak",
       "hl": "parle"
      },
      {
       "t": "ils finissent → que je finisse",
       "tr": "that I finish",
       "hl": "finisse"
      },
      {
       "t": "ils vendent → que je vende",
       "tr": "that I sell",
       "hl": "vende"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Subjunctive",
      "Verb",
      "Subjunctive"
     ],
     "rows": [
      [
       "{{être}}",
       "{{que je sois}}",
       "{{avoir}}",
       "{{que j'aie}}"
      ],
      [
       "{{aller}}",
       "{{que j'aille}}",
       "{{faire}}",
       "{{que je fasse}}"
      ],
      [
       "{{pouvoir}}",
       "{{que je puisse}}",
       "{{savoir}}",
       "{{que je sache}}"
      ],
      [
       "{{vouloir}}",
       "{{que je veuille}}",
       "{{venir}}",
       "{{que je vienne}}"
      ]
     ],
     "title": "The irregulars that actually appear · যে অনিয়মিতগুলো সত্যিই আসে"
    },
    {
     "type": "rule",
     "name": "What triggers it",
     "color": "purple",
     "desc": "Necessity, wish, emotion and doubt. Learn the trigger phrases, not the theory. · প্রয়োজন, ইচ্ছা, আবেগ ও সন্দেহ। নিয়ম নয়, সূচক বাক্যাংশ শিখুন।",
     "examples": [
      {
       "t": "Il faut que tu viennes.",
       "tr": "You must come. (necessity)",
       "hl": "viennes"
      },
      {
       "t": "Je veux que vous partiez.",
       "tr": "I want you to leave. (wish)",
       "hl": "partiez"
      },
      {
       "t": "Je suis content que tu sois là.",
       "tr": "I am glad you are here. (emotion)",
       "hl": "sois"
      },
      {
       "t": "Je doute qu'il ait raison.",
       "tr": "I doubt he is right. (doubt)",
       "hl": "ait"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{espérer}} — *to hope* — does **not** take the subjunctive, although it feels as though it should: {{J'espère qu'il viendra}}. · espérer subjonctif নেয় না।"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "Je pense qu'il est là.",
       "label": "indicative",
       "desc": "A positive thought states a fact. · হ্যাঁ-বাচক চিন্তা একটি তথ্য জানায়।"
      },
      {
       "t": "Je ne pense pas qu'il soit là.",
       "label": "subjunctive",
       "desc": "Made negative, it becomes doubt. · না-বাচক করলে তা সন্দেহে পরিণত হয়।"
      }
     ],
     "title": "The same verb, both moods · একই ক্রিয়া, দুই ভাব"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Two subjects are needed. If the subject is the same in both halves, use an infinitive instead: {{Je veux partir}}, not *que je parte*. · দুই অংশে কর্তা এক হলে infinitive বসে।"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The subjunctive stem comes from… · subjonctif-এর মূল আসে…",
       "options": [
        "the infinitive",
        "the nous form",
        "the future stem",
        "the ils form of the present"
       ],
       "answer": 3,
       "explain": "Drop -ent from {{ils}} and add the subjunctive endings. · {{ils}} রূপ থেকে -ent বাদ দিয়ে subjonctif-এর শেষাংশ যোগ করুন।"
      },
      {
       "q": "*You must come* is… · *You must come* হবে…",
       "options": [
        "Il faut que tu viennes.",
        "Il faut que tu viens.",
        "Il faut que tu viendras.",
        "Il faut que tu venir."
       ],
       "answer": 0,
       "explain": "{{Il faut que}} always triggers the subjunctive. · {{Il faut que}} সবসময় subjonctif আনে।"
      },
      {
       "q": "Which verb does **not** trigger the subjunctive? · কোন ক্রিয়াটি subjonctif **আনে না**?",
       "options": [
        "falloir",
        "espérer",
        "vouloir",
        "douter"
       ],
       "answer": 1,
       "explain": "{{espérer}} takes the indicative. · {{espérer}} indicative নেয়।"
      },
      {
       "q": "The subjunctive of {{être}} for {{je}} is… · {{je}}-এর জন্য {{être}}-এর subjonctif রূপ…",
       "options": [
        "serai",
        "étais",
        "sois",
        "suis"
       ],
       "answer": 2,
       "explain": "{{que je sois}} — এটিই subjonctif রূপ।"
      },
      {
       "q": "*I want to leave* should be… · *I want to leave* হওয়া উচিত…",
       "options": [
        "Je veux que je parte.",
        "Je veux que je pars.",
        "Je veux partirai.",
        "Je veux partir."
       ],
       "answer": 3,
       "explain": "Same subject twice → use the infinitive. · দুবার একই কর্তা → infinitive ব্যবহার করুন।"
      },
      {
       "q": "Why does {{Je ne pense pas qu'il soit là}} take the subjunctive? · {{Je ne pense pas qu'il soit là}}-তে subjonctif বসে কেন?",
       "options": [
        "The negative turns it into doubt",
        "penser always takes it",
        "là requires it",
        "It is a question"
       ],
       "answer": 0,
       "explain": "Negated {{penser}} and {{croire}} express doubt. · না-বাচক {{penser}} ও {{croire}} সন্দেহ প্রকাশ করে।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-reflexive",
   "icon": "se",
   "title": "Reflexive Verbs · আত্মবাচক ক্রিয়া",
   "subtitle": "When the action comes back to you · ক্রিয়া যখন কর্তার দিকেই ফিরে আসে",
   "minutes": 12,
   "goals": [
    "Conjugate a reflexive verb in the present · বর্তমানে আত্মবাচক ক্রিয়ার রূপ করুন",
    "Form the passé composé with être · être দিয়ে যৌগিক অতীত গড়ুন",
    "Spot verbs that change meaning when reflexive · আত্মবাচক হলে যে ক্রিয়ার অর্থ বদলায় তা চিনুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A reflexive verb carries a small pronoun that points back at the subject. French uses them far more than English — for daily routine above all. · reflexive ক্রিয়ায় একটি ছোট pronoun কর্তার দিকেই ফিরে তাকায়।"
    },
    {
     "type": "table",
     "head": [
      "Person",
      "Pronoun",
      "se lever (get up)",
      "Meaning"
     ],
     "rows": [
      [
       "je",
       "{{me}}",
       "{{je me lève}}",
       "I get up"
      ],
      [
       "tu",
       "{{te}}",
       "{{tu te lèves}}",
       "you get up"
      ],
      [
       "il / elle",
       "{{se}}",
       "{{il se lève}}",
       "he gets up"
      ],
      [
       "nous",
       "{{nous}}",
       "{{nous nous levons}}",
       "we get up"
      ],
      [
       "vous",
       "{{vous}}",
       "{{vous vous levez}}",
       "you get up"
      ],
      [
       "ils / elles",
       "{{se}}",
       "{{ils se lèvent}}",
       "they get up"
      ]
     ],
     "title": "The pattern · ছাঁচটি"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "se réveiller",
       "tr": "suh ray-vay-YAY · স্য রেভেইয়ে",
       "mean": "to wake up · ঘুম থেকে ওঠা"
      },
      {
       "t": "se laver",
       "tr": "suh lah-VAY · স্য লাভে",
       "mean": "to wash (oneself) · নিজেকে ধোয়া"
      },
      {
       "t": "s'habiller",
       "tr": "sah-bee-YAY · সাবিইয়ে",
       "mean": "to get dressed · পোশাক পরা"
      },
      {
       "t": "se dépêcher",
       "tr": "suh day-pay-SHAY · স্য দেপেশে",
       "mean": "to hurry up · তাড়াতাড়ি করা"
      },
      {
       "t": "se coucher",
       "tr": "suh koo-SHAY · স্য কুশে",
       "mean": "to go to bed · ঘুমাতে যাওয়া"
      }
     ]
    },
    {
     "type": "rule",
     "name": "In the past, always être",
     "color": "red",
     "desc": "Every reflexive verb takes {{être}} in the passé composé, and the participle usually agrees with the subject. · সব reflexive ক্রিয়া অতীতে être নেয়।",
     "examples": [
      {
       "t": "Je me suis levé.",
       "tr": "I got up (male speaker)",
       "hl": "suis levé"
      },
      {
       "t": "Elle s'est levée.",
       "tr": "She got up",
       "hl": "levée"
      },
      {
       "t": "Ils se sont dépêchés.",
       "tr": "They hurried",
       "hl": "dépêchés"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Some verbs change meaning",
     "color": "orange",
     "desc": "Adding the reflexive pronoun can shift the sense completely. · reflexive হলে কিছু ক্রিয়ার অর্থ বদলে যায়।",
     "examples": [
      {
       "t": "passer → se passer",
       "tr": "to pass → to happen",
       "hl": "se passer"
      },
      {
       "t": "tromper → se tromper",
       "tr": "to deceive → to be mistaken",
       "hl": "se tromper"
      },
      {
       "t": "entendre → s'entendre",
       "tr": "to hear → to get on with",
       "hl": "s'entendre"
      },
      {
       "t": "rendre → se rendre",
       "tr": "to give back → to go to",
       "hl": "se rendre"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "With a body part, French uses {{se}} plus **the** article, not a possessive: {{Je me lave les mains}} — literally *I wash myself the hands*. · শরীরের অংশে possessive নয়, article বসে।"
    },
    {
     "type": "sentence",
     "t": "Je me lève à six heures et je me dépêche.",
     "tr": "zhuh muh lev ah see-ZUHR ay zhuh muh day-PESH · জ়্য ম্য লেভ আ সিজ়্যর এ জ়্য ম্য দেপেশ",
     "mean": "I get up at six o'clock and I hurry. · আমি ছয়টায় উঠি এবং তাড়াহুড়ো করি।",
     "words": [
      {
       "t": "Je",
       "mean": "I · আমি"
      },
      {
       "t": "me",
       "mean": "myself · নিজেকে"
      },
      {
       "t": "lève",
       "mean": "get up · ওঠা"
      },
      {
       "t": "à",
       "mean": "at · -টায়"
      },
      {
       "t": "six",
       "mean": "six · ছয়"
      },
      {
       "t": "heures",
       "mean": "o'clock · ঘটিকা"
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
       "t": "me",
       "mean": "myself · নিজেকে"
      },
      {
       "t": "dépêche",
       "mean": "hurry · তাড়াহুড়ো করা"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*She got up* is… · *She got up* হবে…",
       "options": [
        "Elle est levé.",
        "Elle s'est levée.",
        "Elle a levé.",
        "Elle s'a levée."
       ],
       "answer": 1,
       "explain": "Reflexives take être, and the participle agrees. · reflexive ক্রিয়া être নেয়, আর participle মেলে।"
      },
      {
       "q": "{{se tromper}} means… · {{se tromper}} মানে…",
       "options": [
        "to trumpet",
        "to stumble",
        "to be mistaken",
        "to deceive someone"
       ],
       "answer": 2,
       "explain": "{{tromper}} is to deceive; {{se tromper}} is to be wrong. · {{tromper}} মানে ঠকানো; {{se tromper}} মানে ভুল করা।"
      },
      {
       "q": "*I wash my hands* is… · *I wash my hands* হবে…",
       "options": [
        "Je lave mes mains.",
        "Je me lave mes mains.",
        "Je lave les mains.",
        "Je me lave les mains."
       ],
       "answer": 3,
       "explain": "Reflexive pronoun plus the definite article. · reflexive pronoun ও definite article।"
      },
      {
       "q": "Which helper do reflexive verbs use in the past? · অতীতে reflexive ক্রিয়া কোন সহায়ক নেয়?",
       "options": [
        "être",
        "avoir",
        "aller",
        "faire"
       ],
       "answer": 0,
       "explain": "Always {{être}}, without exception. · সবসময় {{être}}, কোনো ব্যতিক্রম নেই।"
      },
      {
       "q": "*We hurry* is… · *We hurry* হবে…",
       "options": [
        "nous nous dépêcher",
        "nous nous dépêchons",
        "nous se dépêchons",
        "nous dépêchons"
       ],
       "answer": 1,
       "explain": "The pronoun matches the subject: {{nous nous}}. · pronoun কর্তার সঙ্গে মেলে: {{nous nous}}।"
      }
     ]
    }
   ]
  },
  {
   "id": "u3-si",
   "icon": "si",
   "title": "Si Clauses & the Passive · Si বাক্যাংশ ও কর্মবাচ্য",
   "subtitle": "If this, then that — and how French dodges the passive · যদি এটা, তবে ওটা — আর ফরাসি কীভাবে passive এড়ায়",
   "minutes": 14,
   "goals": [
    "Match the right tenses in the three si patterns · তিনটি si ছাঁচে সঠিক কাল মেলান",
    "Build the passive with être · être দিয়ে কর্মবাচ্য গড়ুন",
    "Use on to avoid the passive altogether · কর্মবাচ্য একেবারে এড়াতে on ব্যবহার করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Si clauses follow three fixed patterns. Get the pairing right and the sentence is correct; mix them and it collapses. · si-বাক্যের তিনটি নির্দিষ্ট ছক আছে।"
    },
    {
     "type": "table",
     "head": [
      "After si",
      "In the other half",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "présent",
       "futur",
       "{{Si tu cherches, tu trouveras.}}",
       "If you look, you will find."
      ],
      [
       "imparfait",
       "conditionnel",
       "{{Si j'avais le temps, je viendrais.}}",
       "If I had time, I would come."
      ],
      [
       "plus-que-parfait",
       "conditionnel passé",
       "{{Si j'avais su, je vous l'aurais dit.}}",
       "If I had known, I would have told you."
      ]
     ],
     "title": "The three patterns · তিনটি ছাঁচ"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Never put a **future** or a **conditional** directly after {{si}}. *Si je serai* and *si je viendrais* are both wrong. · si-এর পরে কখনো futur বা conditionnel বসে না।"
    },
    {
     "type": "rule",
     "name": "The passive",
     "color": "blue",
     "desc": "Built with {{être}} plus the past participle, which **agrees** with the subject. The doer follows {{par}}. · être + past participle, আর participle কর্তার সঙ্গে মেলে।",
     "examples": [
      {
       "t": "Le bangla est parlé au Bangladesh.",
       "tr": "Bangla is spoken in Bangladesh.",
       "hl": "est parlé"
      },
      {
       "t": "La lettre a été écrite par Rana.",
       "tr": "The letter was written by Rana.",
       "hl": "a été écrite"
      },
      {
       "t": "Les maisons sont construites ici.",
       "tr": "The houses are built here.",
       "hl": "construites"
      }
     ]
    },
    {
     "type": "rule",
     "name": "on is the French shortcut",
     "color": "green",
     "desc": "Where English reaches for the passive, French often uses **on** with an active verb. It is shorter and far more natural. · ইংরেজি passive ব্যবহার করলেও ফরাসি প্রায়ই on দিয়ে active বাক্য বানায়।",
     "examples": [
      {
       "t": "On parle français ici.",
       "tr": "French is spoken here.",
       "hl": "On"
      },
      {
       "t": "On m'a dit que…",
       "tr": "I was told that…",
       "hl": "On m'a dit"
      },
      {
       "t": "On a volé ma voiture.",
       "tr": "My car has been stolen.",
       "hl": "On a volé"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In speech, {{on}} very often simply means *we*: {{On y va ?}} — *Shall we go?* It is more common than {{nous}} in conversation. · কথ্য ফরাসিতে on প্রায়ই nous-এর জায়গায় বসে।"
    },
    {
     "type": "sentence",
     "t": "Si j'avais su, je vous l'aurais dit.",
     "tr": "see zhah-vay SEW, zhuh voo loh-ray DEE · সি জ়াভে স্যু, জ়্য ভু লোরে দি",
     "mean": "If I had known, I would have told you. · জানলে আমি আপনাকে বলতাম।",
     "words": [
      {
       "t": "Si",
       "mean": "if · যদি"
      },
      {
       "t": "j'avais",
       "mean": "I had · আমার ছিল"
      },
      {
       "t": "su",
       "mean": "known · জানা"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "vous",
       "mean": "to you · আপনাকে"
      },
      {
       "t": "l'aurais",
       "mean": "it would have · হতো"
      },
      {
       "t": "dit",
       "mean": "told · বলা"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "*If I had time, I would come* is… · *If I had time, I would come* হবে…",
       "options": [
        "Si j'ai le temps, je viendrais.",
        "Si j'avais le temps, je viendrai.",
        "Si j'avais le temps, je viendrais.",
        "Si j'aurais le temps, je viendrais."
       ],
       "answer": 2,
       "explain": "imparfait after si, conditionnel after the comma. · si-এর পরে imparfait, কমার পরে conditionnel।"
      },
      {
       "q": "Which tense can **never** follow {{si}}? · {{si}}-এর পরে কোন কাল **কখনোই** বসে না?",
       "options": [
        "the present",
        "the imparfait",
        "the plus-que-parfait",
        "the conditional"
       ],
       "answer": 3,
       "explain": "Neither future nor conditional may follow si. · si-এর পরে ভবিষ্যৎ বা conditionnel কোনোটিই বসে না।"
      },
      {
       "q": "*French is spoken here* is most naturally… · *French is spoken here* সবচেয়ে স্বাভাবিকভাবে হবে…",
       "options": [
        "On parle français ici.",
        "Français est parlé ici.",
        "Le français se parle par ici.",
        "Il est parlé français ici."
       ],
       "answer": 0,
       "explain": "French prefers {{on}} with an active verb. · ফরাসি active ক্রিয়ার সঙ্গে {{on}} পছন্দ করে।"
      },
      {
       "q": "In {{La lettre a été écrite}}, why does the participle end in -e? · {{La lettre a été écrite}}-এ participle -e দিয়ে শেষ হয় কেন?",
       "options": [
        "Past participles always do",
        "It agrees with the feminine subject",
        "The helper is avoir",
        "It is an irregular verb"
       ],
       "answer": 1,
       "explain": "In the passive, the participle agrees with the subject. · passive-এ participle কর্তার সঙ্গে মেলে।"
      },
      {
       "q": "*If you look, you will find* uses… · *If you look, you will find*-এ বসে…",
       "options": [
        "future then future",
        "present then present",
        "present then future",
        "imparfait then conditional"
       ],
       "answer": 2,
       "explain": "si + présent pairs with the futur. · si + présent জোড়া বাঁধে futur-এর সঙ্গে।"
      },
      {
       "q": "In conversation, {{On y va ?}} usually means… · কথ্য ভাষায় {{On y va ?}} সাধারণত মানে…",
       "options": [
        "Is someone going?",
        "One goes there.",
        "Did they go?",
        "Shall we go?"
       ],
       "answer": 3,
       "explain": "Spoken French uses {{on}} for *we*. · কথ্য ফরাসিতে *আমরা* বোঝাতে {{on}} বসে।"
      }
     ]
    }
   ]
  }
 ]
});
