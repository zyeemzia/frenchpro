/* Unit 1 — Sounds & Spelling. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "sounds",
 "order": 1,
 "icon": "ɑ̃",
 "color": "rose",
 "title": "Sounds & Spelling",
 "subtitle": "The sounds that give you away — and how to fix them for good",
 "lessons": [
  {
   "id": "u1-nasal",
   "icon": "ɑ̃",
   "title": "The Four Nasal Vowels",
   "subtitle": "The sound that makes French sound French",
   "minutes": 14,
   "goals": [
    "Hear and make all four nasal vowels",
    "Know which spellings produce which nasal",
    "Stop pronouncing the n or m that follows"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A nasal vowel is a vowel sent through the nose instead of the mouth. Bangla has nasal vowels too — the chandrabindu in **চাঁদ** does exactly this job — so you already own the skill. · নাসিক্য স্বর মানে নাক দিয়ে বের হওয়া স্বরধ্বনি। বাংলায় চন্দ্রবিন্দু ঠিক এই কাজটিই করে, তাই দক্ষতাটি আপনার আগে থেকেই আছে।"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The golden rule: in a nasal, the **n** or **m** is **not pronounced**. It is only a signpost telling you to nasalise the vowel before it. · সোনালি নিয়ম: নাসিক্য ধ্বনিতে n বা m উচ্চারিত হয় না; এটি কেবল সংকেত।"
    },
    {
     "type": "rule",
     "name": "Four nasals, many spellings",
     "color": "purple",
     "desc": "French has four nasal vowels, but each can be written several ways. Learn the spellings, not the letters. · চারটি নাসিক্য স্বর, কিন্তু প্রতিটির একাধিক বানান।",
     "examples": [
      {
       "t": "an, am, en, em",
       "tr": "ahn · আঁ",
       "hl": "an"
      },
      {
       "t": "on, om",
       "tr": "ohn · ওঁ",
       "hl": "on"
      },
      {
       "t": "in, im, ain, ein, yn",
       "tr": "an · অ্যাঁ",
       "hl": "in"
      },
      {
       "t": "un, um",
       "tr": "uhn · উঁ",
       "hl": "un"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Nasal",
      "Spellings",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "ɑ̃",
       "an, am, en, em",
       "{{dans le temps}}",
       "in the past"
      ],
      [
       "ɔ̃",
       "on, om",
       "{{un bon nom}}",
       "a good name"
      ],
      [
       "ɛ̃",
       "in, im, ain, ein, yn",
       "{{le pain plein}}",
       "the full loaf"
      ],
      [
       "œ̃",
       "un, um",
       "{{un parfum brun}}",
       "a brown perfume"
      ]
     ],
     "title": "The whole system on one page"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "dans",
       "tr": "dahn · দাঁ",
       "mean": "in",
       "note": "Not *dans-uh* — the s is silent too."
      },
      {
       "t": "le temps",
       "tr": "luh TAHN · ল্য তাঁ",
       "mean": "time; weather",
       "hl": "em"
      },
      {
       "t": "bon",
       "tr": "bohn · বঁ",
       "mean": "good",
       "hl": "on"
      },
      {
       "t": "le pain",
       "tr": "luh PAN · ল্য পঁ",
       "mean": "the bread",
       "hl": "ain"
      },
      {
       "t": "important",
       "tr": "an-por-TAHN · অ্যাঁপরতাঁ",
       "mean": "important",
       "note": "Two different nasals in one word."
      },
      {
       "t": "un",
       "tr": "uhn · উঁ",
       "mean": "one; a",
       "hl": "un"
      }
     ],
     "title": "Hear them side by side"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "an",
       "label": "ɑ̃",
       "desc": "Mouth wide open, as in {{dans}}. The broadest of the four."
      },
      {
       "t": "on",
       "label": "ɔ̃",
       "desc": "Lips rounded and pushed forward, as in {{bon}}."
      },
      {
       "t": "in",
       "label": "ɛ̃",
       "desc": "Lips spread, almost a smile, as in {{pain}}."
      },
      {
       "t": "un",
       "label": "œ̃",
       "desc": "Like ɛ̃ but with rounded lips, as in {{brun}}. Many French speakers now merge it with ɛ̃."
      }
     ],
     "title": "The four, by mouth shape"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "One sentence holds all four: **{{un bon vin blanc}}** — *a good white wine*. Say it daily and the system sticks. · একটি বাক্যেই চারটি: {{un bon vin blanc}}।"
    },
    {
     "type": "rule",
     "name": "When the nasal breaks",
     "color": "red",
     "desc": "If the n or m is **doubled**, or followed by a **vowel**, there is no nasal at all. The vowel goes back to normal and the consonant is pronounced. · n বা m দ্বিগুণ হলে, কিংবা তার পরে স্বর থাকলে নাসিক্যতা ভেঙে যায়।",
     "how": "Compare the pairs below carefully.",
     "examples": [
      {
       "t": "bon → bonne",
       "tr": "bohn → BUN · বঁ → বন",
       "hl": "bonne"
      },
      {
       "t": "un → une",
       "tr": "uhn → EWN · উঁ → ্যুন",
       "hl": "une"
      },
      {
       "t": "américain → américaine",
       "tr": "...KAN → ...KEN · ...কঁ → ...কেন",
       "hl": "américaine"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read each line aloud twice. Keep the n silent, and let the sound out through your nose. · প্রতিটি লাইন দুবার জোরে পড়ুন। n নীরব রাখুন।",
     "lines": [
      "un bon vin blanc",
      "dans le grand jardin",
      "mon oncle est content",
      "cinq pains et un melon",
      "il attend son enfant"
     ]
    },
    {
     "type": "dictation",
     "items": [
      {
       "t": "le temps",
       "tr": "luh TAHN · ল্য তাঁ",
       "mean": "the weather"
      },
      {
       "t": "un bon nom",
       "tr": "uhn bohn NOHN · উঁ বঁ নঁ",
       "mean": "a good name"
      },
      {
       "t": "la main",
       "tr": "lah MAN · লা মঁ",
       "mean": "the hand"
      },
      {
       "t": "bonne",
       "tr": "bun · বন",
       "mean": "good (feminine)"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In {{dans}}, how is the n pronounced?",
       "options": [
        "Not at all — it only nasalises the a",
        "Like the n in Bangla নাম",
        "Like a soft m",
        "Like the n in English done"
       ],
       "answer": 0,
       "explain": "The n is a signpost, never a sound."
      },
      {
       "q": "Which word does **not** contain a nasal vowel?",
       "options": [
        "temps",
        "bonne",
        "bon",
        "pain"
       ],
       "answer": 1,
       "explain": "The doubled nn breaks the nasal: {{bonne}} is said BUN."
      },
      {
       "q": "Which spelling gives the sound in {{pain}}?",
       "options": [
        "on",
        "oin",
        "ain",
        "an"
       ],
       "answer": 2,
       "explain": "ain, ein, in, im and yn all give ɛ̃."
      },
      {
       "q": "Why is {{américaine}} not nasal at the end?",
       "options": [
        "It is a feminine word",
        "It is borrowed from English",
        "The accent blocks it",
        "A vowel follows the n"
       ],
       "answer": 3,
       "explain": "A vowel after n or m always breaks the nasal."
      },
      {
       "q": "Which sentence contains all four nasal vowels?",
       "say": "un bon vin blanc",
       "options": [
        "un bon vin blanc",
        "dans le jardin",
        "mon bon ami",
        "le pain brun"
       ],
       "answer": 0,
       "explain": "{{un}} œ̃, {{bon}} ɔ̃, {{vin}} ɛ̃, {{blanc}} ɑ̃."
      },
      {
       "q": "In {{important}}, how many nasal vowels are there?",
       "options": [
        "None",
        "Two",
        "One",
        "Three"
       ],
       "answer": 1,
       "explain": "im- gives ɛ̃ and -ant gives ɑ̃."
      }
     ]
    }
   ]
  },
  {
   "id": "u1-silent",
   "icon": "∅",
   "title": "Silent Letters",
   "subtitle": "Why French is written long and spoken short",
   "minutes": 12,
   "goals": [
    "Know which final consonants stay silent",
    "Use the CaReFuL letters that usually sound",
    "Read a written word and predict how it is said"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French writes more than it says. A written word often ends in a letter that nobody pronounces — this is the single biggest gap between the page and the ear. · ফরাসি যা লেখে তার চেয়ে কম বলে। লেখা ও শোনার মধ্যে সবচেয়ে বড় ফারাক এখানেই।"
    },
    {
     "type": "rule",
     "name": "Final consonants are usually silent",
     "color": "blue",
     "desc": "At the end of a word, most consonants are not pronounced — especially **s, t, d, x, z, p, g**. · শব্দের শেষে অধিকাংশ ব্যঞ্জন উচ্চারিত হয় না।",
     "examples": [
      {
       "t": "petit",
       "tr": "puh-TEE · প্যতি",
       "hl": "t"
      },
      {
       "t": "les amis",
       "tr": "lay-zah-MEE · লে জ়ামি",
       "hl": "s"
      },
      {
       "t": "grand",
       "tr": "grahn · গ্রাঁ",
       "hl": "d"
      },
      {
       "t": "le prix",
       "tr": "luh PREE · ল্য প্রি",
       "hl": "x"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The exceptions spell an English word: **C a R e F u L**. The consonants **c, r, f, l** are usually *heard* at the end. · ব্যতিক্রমগুলো মনে রাখুন CaReFuL দিয়ে: c, r, f, l সাধারণত শোনা যায়।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "avec",
       "tr": "ah-VEK · আভেক",
       "mean": "with",
       "note": "c sounds"
      },
      {
       "t": "bonjour",
       "tr": "bohn-ZHOOR · বঁজ়ুর",
       "mean": "hello",
       "note": "r sounds"
      },
      {
       "t": "neuf",
       "tr": "nuhf · ন্যফ্‌",
       "mean": "nine",
       "note": "f sounds"
      },
      {
       "t": "le journal",
       "tr": "luh zhoor-NAL · ল্য জ়ুরনাল",
       "mean": "the newspaper",
       "note": "l sounds"
      }
     ],
     "title": "CaReFuL in action"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Even CaReFuL has leaks. The r is silent in every **-er** verb ending: {{parler}} is par-LAY, not par-LAIR. · প্রতিটি -er ক্রিয়ার শেষে r নীরব।"
    },
    {
     "type": "table",
     "head": [
      "Written",
      "Said",
      "Meaning",
      "What is dropped"
     ],
     "rows": [
      [
       "{{beaucoup}}",
       "boh-KOO · বোকু",
       "a lot",
       "final p"
      ],
      [
       "{{le nez}}",
       "luh NAY · ল্য নে",
       "the nose",
       "final z"
      ],
      [
       "{{long}}",
       "lohn · লঁ",
       "long",
       "final g"
      ],
      [
       "{{vous êtes}}",
       "voo-ZET · ভু জ়েত",
       "you are",
       "s joins, final s drops"
      ],
      [
       "{{ils parlent}}",
       "eel PARL · ইল পার্ল",
       "they speak",
       "whole -ent ending"
      ]
     ],
     "title": "Common traps"
    },
    {
     "type": "rule",
     "name": "The -ent ending vanishes",
     "color": "red",
     "desc": "When **-ent** is a verb ending for *ils / elles*, the whole ending is silent. It is not silent in adverbs or nouns. · ক্রিয়ার -ent সম্পূর্ণ নীরব, কিন্তু ক্রিয়াবিশেষণে নয়।",
     "examples": [
      {
       "t": "ils parlent",
       "tr": "eel PARL · ইল পার্ল",
       "hl": "parlent"
      },
      {
       "t": "elles arrivent",
       "tr": "el-zah-REEV · এল জ়ারিভ",
       "hl": "arrivent"
      },
      {
       "t": "lentement",
       "tr": "lahnt-MAHN · লাঁত্‌মাঁ",
       "hl": "ment"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read aloud. Say only what is heard, not what is written. · জোরে পড়ুন। যা শোনা যায় কেবল তাই বলুন।",
     "lines": [
      "les petits enfants",
      "ils parlent beaucoup",
      "le prix est grand",
      "vous êtes très gentil",
      "elles arrivent avec le journal"
     ]
    },
    {
     "type": "selfcheck",
     "items": [
      "I can name the four CaReFuL consonants",
      "I say {{parler}} without an r at the end",
      "I drop the whole -ent ending on ils / elles verbs",
      "I no longer pronounce final s on plurals"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How is {{petit}} pronounced?",
       "options": [
        "PET-it",
        "puh-TEE-tuh",
        "puh-TEE",
        "puh-TEET"
       ],
       "answer": 2,
       "explain": "Both the final t and the e are silent."
      },
      {
       "q": "Which consonant is usually **heard** at the end of a word?",
       "options": [
        "s",
        "t",
        "d",
        "l"
       ],
       "answer": 3,
       "explain": "CaReFuL: c, r, f and l usually sound."
      },
      {
       "q": "{{ils parlent}} is said…",
       "options": [
        "eel PARL",
        "eel PAR-lent",
        "eel par-LAHN",
        "eels PARL"
       ],
       "answer": 0,
       "explain": "The verb ending -ent is completely silent."
      },
      {
       "q": "Why is {{parler}} said par-LAY?",
       "options": [
        "The final e took the sound",
        "The r of -er verb endings is silent",
        "The r became an accent",
        "It is an irregular verb"
       ],
       "answer": 1,
       "explain": "The -er infinitive ending always sounds like -é."
      },
      {
       "q": "Which word keeps its final consonant sound?",
       "options": [
        "le nez",
        "beaucoup",
        "neuf",
        "grand"
       ],
       "answer": 2,
       "explain": "f is one of the CaReFuL letters."
      }
     ]
    }
   ]
  },
  {
   "id": "u1-liaison",
   "icon": "‿",
   "title": "Liaison",
   "subtitle": "When a silent letter wakes up",
   "minutes": 13,
   "goals": [
    "Know when a silent final consonant must be sounded",
    "Know the cases where liaison is forbidden",
    "Hear words join into a single flow"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Liaison is the moment a silent final consonant comes back to life because the next word begins with a vowel. It is why French sounds like one long ribbon rather than separate words. · পরের শব্দ স্বর দিয়ে শুরু হলে নীরব ব্যঞ্জন জেগে ওঠে — এটিই liaison।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "les amis",
       "tr": "lay-zah-MEE · লে জ়ামি",
       "mean": "the friends",
       "note": "s wakes up as z"
      },
      {
       "t": "nous avons",
       "tr": "noo-zah-VOHN · নু জ়াভঁ",
       "mean": "we have",
       "hl": "s a"
      },
      {
       "t": "un grand homme",
       "tr": "uhn grahn-TUM · উঁ গ্রাঁতম",
       "mean": "a great man",
       "note": "d wakes up as t"
      },
      {
       "t": "très important",
       "tr": "tray-zan-por-TAHN · ত্রে জ়াঁপরতাঁ",
       "mean": "very important"
      }
     ],
     "title": "The consonant returns"
    },
    {
     "type": "rule",
     "name": "The sound can change",
     "color": "orange",
     "desc": "In liaison, **s** and **x** are said as **z**, and **d** is said as **t**. · liaison-এ s ও x হয় জ়, আর d হয় ত।",
     "examples": [
      {
       "t": "deux enfants",
       "tr": "duh-zahn-FAHN · দ্য জ়াঁফাঁ",
       "hl": "x e"
      },
      {
       "t": "quand il arrive",
       "tr": "kahn-teel-ah-REEV · কাঁতিল আরিভ",
       "hl": "d i"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Always join",
      "Example",
      "Never join",
      "Example"
     ],
     "rows": [
      [
       "article + noun",
       "{{les_amis}}",
       "after {{et}}",
       "{{et | il}}"
      ],
      [
       "pronoun + verb",
       "{{nous_avons}}",
       "before aspirate h",
       "{{les | héros}}"
      ],
      [
       "adjective + noun",
       "{{petit_ami}}",
       "noun + verb",
       "{{les enfants | arrivent}}"
      ],
      [
       "short adverb + adj.",
       "{{très_utile}}",
       "before a number",
       "{{les | onze}}"
      ]
     ],
     "title": "Obligatory and forbidden"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "French has two kinds of h. **Mute h** allows liaison ({{les_hôtels}}); **aspirate h** blocks it ({{les | héros}}). A dictionary marks the aspirate one, often with an apostrophe or asterisk. · দুই ধরনের h: mute h জোড়া লাগতে দেয়, aspirate h দেয় না।"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "les hôtels",
       "label": "mute h",
       "desc": "Said lay-zoh-TEL. The h is invisible, so the liaison happens."
      },
      {
       "t": "les héros",
       "label": "aspirate h",
       "desc": "Said lay ay-ROH. A tiny gap is left; no z appears."
      }
     ],
     "title": "The two h's"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Drop the liaison in {{les héros}} and you say {{les zéros}} — *the zeros*. The heroes will not thank you. · liaison ভুল করলে বীরেরা শূন্য হয়ে যায়।"
    },
    {
     "type": "practice",
     "text": "Read each line as one unbroken ribbon of sound. · প্রতিটি লাইন একটানা পড়ুন।",
     "lines": [
      "nous avons un grand appartement",
      "les enfants arrivent à onze heures",
      "c'est très important",
      "vous êtes un bon ami",
      "ils ont deux enfants"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In {{les amis}}, the s is said as…",
       "options": [
        "s",
        "sh",
        "nothing",
        "z"
       ],
       "answer": 3,
       "explain": "s and x both become z in liaison."
      },
      {
       "q": "Which pair must **never** be joined?",
       "options": [
        "et | il",
        "nous avons",
        "les amis",
        "très utile"
       ],
       "answer": 0,
       "explain": "Liaison after {{et}} is always forbidden."
      },
      {
       "q": "In {{un grand homme}}, the d is said as…",
       "options": [
        "nothing",
        "t",
        "d",
        "z"
       ],
       "answer": 1,
       "explain": "d hardens to t in liaison."
      },
      {
       "q": "Why is there no liaison in {{les héros}}?",
       "options": [
        "The s is already silent",
        "It is a borrowed word",
        "The h is aspirate",
        "héros is plural"
       ],
       "answer": 2,
       "explain": "Aspirate h blocks liaison; mute h does not."
      },
      {
       "q": "Which of these is an obligatory liaison?",
       "say": "nous avons",
       "options": [
        "les héros",
        "et elle",
        "un livre ouvert",
        "nous avons"
       ],
       "answer": 3,
       "explain": "Pronoun plus verb always joins."
      }
     ]
    }
   ]
  },
  {
   "id": "u1-elision",
   "icon": "l'",
   "title": "Elision & the Apostrophe",
   "subtitle": "When a vowel gets out of the way",
   "minutes": 10,
   "goals": [
    "Know which small words elide",
    "Write the apostrophe correctly",
    "Avoid the commonest written mistakes"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French dislikes two vowels meeting. When a short word ending in a vowel runs into a word starting with one, the first vowel is dropped and an apostrophe takes its place. · দুটি স্বর পাশাপাশি এলে প্রথমটি বাদ যায়, তার জায়গায় বসে apostrophe।"
    },
    {
     "type": "table",
     "head": [
      "Word",
      "Becomes",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "{{le, la}}",
       "{{l'}}",
       "{{l'ami}}",
       "the friend"
      ],
      [
       "{{je}}",
       "{{j'}}",
       "{{j'ai}}",
       "I have"
      ],
      [
       "{{de}}",
       "{{d'}}",
       "{{d'accord}}",
       "agreed"
      ],
      [
       "{{ne}}",
       "{{n'}}",
       "{{je n'ai pas}}",
       "I do not have"
      ],
      [
       "{{que}}",
       "{{qu'}}",
       "{{qu'il vienne}}",
       "that he come"
      ],
      [
       "{{si}}",
       "{{s'}}",
       "{{s'il vous plaît}}",
       "please"
      ]
     ],
     "title": "The elision list"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{si}} elides **only** before **il** and **ils** — never before {{elle}}. So {{s'il}} but {{si elle}}. · si কেবল il ও ils-এর আগে সংক্ষিপ্ত হয়, elle-এর আগে নয়।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "l'hôtel",
       "tr": "loh-TEL · লোতেল",
       "mean": "the hotel",
       "note": "mute h behaves like a vowel"
      },
      {
       "t": "j'habite à Dacca",
       "tr": "zhah-BEET ah dah-KAH · জ়াবিত আ দাকা",
       "mean": "I live in Dhaka"
      },
      {
       "t": "je n'ai pas d'argent",
       "tr": "zhuh nay pah dar-ZHAHN · জ়্য নে পা দারজ়াঁ",
       "mean": "I have no money"
      },
      {
       "t": "s'il vous plaît",
       "tr": "seel voo PLAY · সিল ভু প্লে",
       "mean": "please"
      }
     ]
    },
    {
     "type": "rule",
     "name": "The apostrophe is not a space",
     "color": "red",
     "desc": "Write **l'ami**, never *l' ami* and never *lami*. The apostrophe joins the two parts tightly. · apostrophe কোনো ফাঁক নয়; দুই অংশ শক্তভাবে জোড়া থাকে।",
     "examples": [
      {
       "t": "l'école",
       "tr": "lay-KUL · লেকল",
       "hl": "l'"
      },
      {
       "t": "qu'est-ce que c'est ?",
       "tr": "kes-kuh SAY · কেস্‌ক্য সে",
       "hl": "qu'"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "d'abord",
       "tr": "dah-BOR · দাবর",
       "mean": "first of all",
       "root": "de"
      },
      {
       "t": "d'accord",
       "tr": "dah-KOR · দাকর",
       "mean": "agreed, OK",
       "root": "de"
      },
      {
       "t": "aujourd'hui",
       "tr": "oh-zhoor-DWEE · ওজ়ুরদুই",
       "mean": "today",
       "root": "jour"
      },
      {
       "t": "jusqu'à",
       "tr": "zhews-KAH · জ়্যুস্কা",
       "mean": "until, as far as",
       "root": "que"
      },
      {
       "t": "l'un l'autre",
       "tr": "luhn LOHTR · লুঁ লোত্‌র",
       "mean": "one another"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is correct?",
       "options": [
        "s'il vous plaît",
        "si il vous plaît",
        "s'elle vous plaît",
        "si'l vous plaît"
       ],
       "answer": 0,
       "explain": "si elides before il, giving s'il."
      },
      {
       "q": "How do you write *the friend* (male)?",
       "options": [
        "l ami",
        "l'ami",
        "le ami",
        "la ami"
       ],
       "answer": 1,
       "explain": "le becomes l' before a vowel."
      },
      {
       "q": "Which word does **not** elide?",
       "options": [
        "de",
        "que",
        "si (before elle)",
        "je"
       ],
       "answer": 2,
       "explain": "{{si elle}} stays in full; only il and ils trigger it."
      },
      {
       "q": "Why is it {{l'hôtel}} and not {{le hôtel}}?",
       "options": [
        "Hôtel is feminine",
        "The accent demands it",
        "Borrowed words always elide",
        "The h is mute, so it counts as a vowel"
       ],
       "answer": 3,
       "explain": "A mute h is invisible to the ear."
      },
      {
       "q": "{{je ai}} is written…",
       "options": [
        "j'ai",
        "je'ai",
        "jai",
        "j ai"
       ],
       "answer": 0,
       "explain": "je loses its e before a vowel."
      }
     ]
    }
   ]
  },
  {
   "id": "u1-tricky",
   "icon": "R",
   "title": "The Three Hard Sounds",
   "subtitle": "e, r and u — where Bengali speakers are heard",
   "minutes": 14,
   "goals": [
    "Make the French R at the back of the throat",
    "Separate the u of tu from the ou of tout",
    "Handle the disappearing e"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Three sounds carry almost every accent problem for Bengali speakers: **e**, **r** and **u**. Fix these and most of your accent is fixed. · তিনটি ধ্বনিই বাঙালি শিক্ষার্থীর উচ্চারণ-সমস্যার বড় অংশ: e, r এবং u।"
    },
    {
     "type": "rule",
     "name": "The French R",
     "color": "purple",
     "desc": "It is not Bangla র. The tongue tip stays **down** behind the lower teeth, and the sound is made at the back of the throat, like a very soft gargle. · এটি বাংলা র নয়। জিভের ডগা নিচে থাকবে, ধ্বনি তৈরি হবে গলার পেছনে।",
     "how": "Hold a pencil flat across your tongue so the tip cannot rise, then say ra, re, ri, ro, ru slowly.",
     "examples": [
      {
       "t": "rouge",
       "tr": "roozh · রুজ়",
       "hl": "r"
      },
      {
       "t": "Paris",
       "tr": "pah-REE · পারি",
       "hl": "r"
      },
      {
       "t": "le frère",
       "tr": "luh FRAIR · ল্য ফ্রের",
       "hl": "r"
      }
     ]
    },
    {
     "type": "rule",
     "name": "u versus ou",
     "color": "blue",
     "desc": "**u** = say *ee* and round your lips without moving your tongue. **ou** = a plain *oo*. These are two different sounds and they change meanings. · u মানে ই বলে ঠোঁট গোল করা; ou মানে সাধারণ উ।",
     "examples": [
      {
       "t": "tu",
       "tr": "tew · ত্যু",
       "hl": "u"
      },
      {
       "t": "tout",
       "tr": "too · তু",
       "hl": "ou"
      },
      {
       "t": "la rue",
       "tr": "lah REW · লা র‍্যু",
       "hl": "ue"
      },
      {
       "t": "la roue",
       "tr": "lah ROO · লা রু",
       "hl": "oue"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "tu",
       "label": "u",
       "desc": "*you*. Lips rounded, tongue forward and high."
      },
      {
       "t": "tout",
       "label": "ou",
       "desc": "*all*. Lips rounded, tongue pulled back."
      },
      {
       "t": "dessus",
       "label": "u",
       "desc": "*above*. Ends with the pointed u."
      },
      {
       "t": "dessous",
       "label": "ou",
       "desc": "*below*. Ends with a round oo. One letter, opposite meaning."
      }
     ],
     "title": "Pairs that matter"
    },
    {
     "type": "rule",
     "name": "The disappearing e",
     "color": "green",
     "desc": "An unaccented **e** inside or at the end of a word is often dropped in ordinary speech. · শব্দের ভেতরে বা শেষে চিহ্নহীন e সাধারণ কথ্য ভাষায় প্রায়ই পড়ে যায়।",
     "examples": [
      {
       "t": "petit",
       "tr": "p'TEE · প্‌তি",
       "hl": "e"
      },
      {
       "t": "je ne sais pas",
       "tr": "zhuh n'say PAH · জ়্যন্‌সে পা",
       "hl": "e"
      },
      {
       "t": "samedi",
       "tr": "sam'DEE · সাম্‌দি",
       "hl": "e"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Listening and imitating beats any written rule. Play one French sentence, say it back immediately, and compare. Thirty seconds a day changes more than an hour of theory. · শোনা ও নকল করা যেকোনো লিখিত নিয়মের চেয়ে কার্যকর।"
    },
    {
     "type": "practice",
     "text": "Each line drills one sound. Slow first, then at speed. · প্রতিটি লাইন একটি ধ্বনির জন্য। আগে ধীরে, পরে দ্রুত।",
     "lines": [
      "rouge, riche, rare, rire",
      "tu as vu la rue",
      "tout le monde court",
      "je ne sais pas",
      "le frère de Pierre regarde"
     ]
    },
    {
     "type": "dictation",
     "items": [
      {
       "t": "la rue",
       "tr": "lah REW · লা র‍্যু",
       "mean": "the street"
      },
      {
       "t": "la roue",
       "tr": "lah ROO · লা রু",
       "mean": "the wheel"
      },
      {
       "t": "dessus",
       "tr": "duh-SEW · দ্যস্যু",
       "mean": "above"
      },
      {
       "t": "dessous",
       "tr": "duh-SOO · দ্যসু",
       "mean": "below"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Where is the French R made?",
       "options": [
        "Against the upper teeth",
        "At the back of the throat",
        "With the tongue tip, like Bangla র",
        "Between the lips"
       ],
       "answer": 1,
       "explain": "The tongue tip stays down throughout."
      },
      {
       "q": "{{la roue}} means…",
       "options": [
        "the red one",
        "the road",
        "the wheel",
        "the street"
       ],
       "answer": 2,
       "explain": "{{la rue}} is the street; {{la roue}} is the wheel."
      },
      {
       "q": "To make the u of {{tu}}, you should…",
       "options": [
        "Say oo, then spread the lips",
        "Say o with an open mouth",
        "Say a through the nose",
        "Say ee, then round the lips"
       ],
       "answer": 3,
       "explain": "Tongue in the ee position, lips rounded."
      },
      {
       "q": "In relaxed speech, {{je ne sais pas}} often sounds like…",
       "options": [
        "zhuhn-say-PAH",
        "zhuh-nuh-say-PAH",
        "zhay-nuh-SAY",
        "zhuh-nay-PAH"
       ],
       "answer": 0,
       "explain": "The unaccented e sounds drop out."
      },
      {
       "q": "Which pair differs only by u and ou?",
       "options": [
        "les / des",
        "dessus / dessous",
        "petit / petite",
        "bon / bonne"
       ],
       "answer": 1,
       "explain": "Above and below — one letter apart, opposite in meaning."
      }
     ]
    }
   ]
  },
  {
   "id": "u1-rhythm",
   "icon": "♪",
   "title": "Rhythm & Intonation",
   "subtitle": "Where French puts its weight",
   "minutes": 11,
   "goals": [
    "Stress the end of a group, not the start of a word",
    "Use rising intonation for questions",
    "Speak in groups rather than word by word"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English and Bangla give each word its own beat. French does not: it gathers words into a group and leans gently on the **last syllable of the group**. · ইংরেজি ও বাংলা প্রতিটি শব্দে জোর দেয়; ফরাসি দেয় শব্দগুচ্ছের শেষ অক্ষরে।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "un restaurant",
       "tr": "uhn res-toh-RAHN · উঁ রেস্তোরাঁ",
       "mean": "a restaurant",
       "note": "weight on the last syllable only"
      },
      {
       "t": "un petit restaurant",
       "tr": "uhn puh-tee res-toh-RAHN · উঁ প্যতি রেস্তোরাঁ",
       "mean": "a small restaurant",
       "note": "still only one stress, at the very end"
      },
      {
       "t": "C'est un très bon restaurant.",
       "tr": "say-tuhn tray bohn res-toh-RAHN · সে তুঁ ত্রে বঁ রেস্তোরাঁ",
       "mean": "It is a very good restaurant."
      }
     ],
     "title": "One group, one beat"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Never stress a French word in the middle. {{important}} is an-por-TAHN, not an-POR-tahn. The weight always slides to the end. · মাঝখানে জোর দেবেন না; ভার সবসময় শেষে।"
    },
    {
     "type": "rule",
     "name": "Three ways to ask",
     "color": "blue",
     "desc": "The same words can become a question three ways; the first is the most common in speech. · একই শব্দ তিনভাবে প্রশ্ন হতে পারে।",
     "examples": [
      {
       "t": "Vous parlez français ?",
       "tr": "rising voice at the end",
       "hl": "?"
      },
      {
       "t": "Est-ce que vous parlez français ?",
       "tr": "add est-ce que at the front",
       "hl": "Est-ce que"
      },
      {
       "t": "Parlez-vous français ?",
       "tr": "turn the verb and pronoun around",
       "hl": "Parlez-vous"
      }
     ]
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Statement",
       "t": "Vous parlez français.",
       "tr": "voice falls at the end",
       "mean": "You speak French."
      },
      {
       "title": "Question by voice",
       "t": "Vous parlez français ?",
       "tr": "voice rises at the end",
       "mean": "Do you speak French?"
      },
      {
       "title": "Question by est-ce que",
       "t": "Est-ce que vous parlez français ?",
       "tr": "neutral and safe in every register",
       "mean": "Do you speak French?"
      },
      {
       "title": "Question by inversion",
       "t": "Parlez-vous français ?",
       "tr": "formal, and used in writing",
       "mean": "Do you speak French?"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In writing, French puts a thin space before **? ! : ;** — {{Ça va ?}} not *Ça va?*. Publishers care about this; so do examiners. · লেখায় ? ! : ; -এর আগে সরু ফাঁক থাকে।"
    },
    {
     "type": "practice",
     "text": "Say each line as one group, leaning only on the final syllable. Then turn it into a question by letting your voice rise. · প্রতিটি লাইন একগুচ্ছ হিসেবে বলুন, কেবল শেষ অক্ষরে ভার দিন।",
     "lines": [
      "Vous habitez à Dacca",
      "Il travaille dans une banque",
      "Elle est professeur de français",
      "Nous allons au restaurant",
      "Tu veux un café"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Where does the stress fall in a French group of words?",
       "options": [
        "On every long word",
        "On the verb",
        "On the last syllable of the group",
        "On the first word"
       ],
       "answer": 2,
       "explain": "French stresses groups, not individual words."
      },
      {
       "q": "Which question form is the most common in everyday speech?",
       "options": [
        "Parlez-vous français ?",
        "Français parlez-vous ?",
        "Vous français parlez ?",
        "Vous parlez français ?"
       ],
       "answer": 3,
       "explain": "A simple rise in the voice is the everyday choice."
      },
      {
       "q": "{{important}} should be said…",
       "options": [
        "an-por-TAHN",
        "an-POR-tahn",
        "AN-por-tahn",
        "an-por-tahn-TUH"
       ],
       "answer": 0,
       "explain": "The weight slides to the final syllable."
      },
      {
       "q": "Which form is the most formal?",
       "options": [
        "Français ?",
        "Parlez-vous français ?",
        "Vous parlez français ?",
        "Est-ce que vous parlez français ?"
       ],
       "answer": 1,
       "explain": "Inversion belongs to careful speech and writing."
      },
      {
       "q": "In French typography, what goes before a question mark?",
       "options": [
        "A comma",
        "A full stop",
        "A thin space",
        "Nothing at all"
       ],
       "answer": 2,
       "explain": "French spaces its high punctuation: {{Ça va ?}}"
      }
     ]
    }
   ]
  }
 ]
});
