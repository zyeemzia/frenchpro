/* Unit 5 — Writing French. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "writing",
 "order": 5,
 "icon": "✎",
 "color": "violet",
 "title": "Writing French",
 "subtitle": "Letters, applications, a CV and the words that hold writing together · চিঠি, আবেদন, CV আর যে শব্দগুলো লেখাকে ধরে রাখে",
 "lessons": [
  {
   "id": "u5-punctuation",
   "icon": ":",
   "title": "Punctuation & Typography · যতিচিহ্ন ও মুদ্রণরীতি",
   "subtitle": "The small marks that mark out a careful writer · ছোট চিহ্নগুলোই যত্নবান লেখককে চিনিয়ে দেয়",
   "minutes": 10,
   "goals": [
    "Space French punctuation correctly · ফরাসি যতিচিহ্নে সঠিক ফাঁক রাখুন",
    "Use French quotation marks · ফরাসি উদ্ধৃতিচিহ্ন ব্যবহার করুন",
    "Name each mark in French · প্রতিটি চিহ্নের ফরাসি নাম বলুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French punctuation looks like English punctuation but is spaced differently. Getting this right makes a letter or a CV look professionally written. · চিহ্নগুলো ইংরেজির মতো দেখালেও ফাঁক আলাদা।"
    },
    {
     "type": "table",
     "head": [
      "Mark · চিহ্ন",
      "French name",
      "Spacing · ফাঁক",
      "Example · উদাহরণ"
     ],
     "rows": [
      [
       ". ,",
       "{{le point, la virgule}}",
       "no space before · আগে ফাঁক নেই",
       "{{Bonjour, Rana.}}"
      ],
      [
       "? !",
       "{{le point d'interrogation}}",
       "thin space before · আগে সরু ফাঁক",
       "{{Ça va ?}}"
      ],
      [
       ": ;",
       "{{les deux-points}}",
       "thin space before · আগে সরু ফাঁক",
       "{{Voici la liste :}}"
      ],
      [
       "« »",
       "{{les guillemets}}",
       "space inside",
       "{{« Bonjour »}}"
      ],
      [
       "…",
       "{{les points de suspension}}",
       "no space before · আগে ফাঁক নেই",
       "{{Je ne sais pas…}}"
      ]
     ],
     "title": "Spacing, mark by mark · ফাঁক, চিহ্ন ধরে ধরে"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The high marks — **? ! : ;** — take a space before them in French. Writing *Ça va?* instead of {{Ça va ?}} is the single most visible sign of an English-trained hand. · উঁচু চিহ্নগুলোর আগে ফাঁক বসে।"
    },
    {
     "type": "rule",
     "name": "French quotation marks · ফরাসি উদ্ধৃতিচিহ্ন",
     "color": "blue",
     "desc": "French uses **« »**, not English quotes, and puts a space just inside each one. · ফরাসি « » ব্যবহার করে, ভেতরে ফাঁক রেখে।",
     "examples": [
      {
       "t": "Il a dit : « Je viendrai demain. »",
       "tr": "He said: \"I will come tomorrow.\" · সে বলল, “আমি কাল আসব।”",
       "hl": "« Je viendrai demain. »"
      },
      {
       "t": "« Bonjour », a-t-elle répondu.",
       "tr": "\"Hello,\" she replied. · “নমস্কার,” সে উত্তর দিল।",
       "hl": "«"
      }
     ]
    },
    {
     "type": "rule",
     "name": "The apostrophe · ঊর্ধ্বকমা",
     "color": "green",
     "desc": "It marks a missing vowel and joins the two parts tightly, with no space on either side. · হারিয়ে যাওয়া স্বরের চিহ্ন; দুপাশে ফাঁক নেই।",
     "examples": [
      {
       "t": "l'ami, d'accord, qu'il",
       "tr": "correct · শুদ্ধ",
       "hl": "l'ami"
      },
      {
       "t": "l' ami",
       "tr": "wrong — never a space after the apostrophe · ভুল — ঊর্ধ্বকমার পরে ফাঁক নয়",
       "hl": "l' ami"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In a French letter, the date is written {{Dacca, le 5 décembre 2026}} — place, comma, {{le}}, then the date, with the month in lower case. · ফরাসি চিঠিতে তারিখ এভাবে লেখা হয়।"
    },
    {
     "t": "Comment allez-vous, chère madame ?",
     "tr": "koh-mahn tah-lay VOO shehr mah-DAHM · কমঁ তালে-ভু, শের্ মাদাম ?",
     "mean": "How are you, dear madam? · আপনি কেমন আছেন, প্রিয় ম্যাডাম?",
     "words": [
      {
       "t": "Comment",
       "mean": "how · কেমন"
      },
      {
       "t": "allez-vous",
       "mean": "are you · আছেন"
      },
      {
       "t": "chère",
       "mean": "dear (feminine) · প্রিয়"
      },
      {
       "t": "madame",
       "mean": "madam · ম্যাডাম"
      }
     ],
     "note": "A space goes before the question mark but never before the comma. **allez-vous** keeps its hyphen because the verb and pronoun have swapped places. · প্রশ্নচিহ্নের আগে ফাঁক, কমার আগে নয়।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud and watch the spacing. French puts a space before the tall marks. · পড়ুন ও ফাঁক লক্ষ করুন; উঁচু চিহ্নের আগে ফরাসিতে ফাঁক থাকে।",
     "lines": [
      {
       "t": "Comment allez-vous ?",
       "mean": "How are you? — a space before the question mark · প্রশ্নচিহ্নের আগে ফাঁক"
      },
      {
       "t": "Quelle bonne surprise !",
       "mean": "What a nice surprise! · কী চমৎকার চমক!"
      },
      {
       "t": "Il a dit : « Je viendrai demain. »",
       "mean": "He said: \"I will come tomorrow.\" · সে বলল, “কাল আসব”"
      },
      {
       "t": "l'ami, d'accord, qu'il",
       "mean": "no space after an apostrophe · ঊর্ধ্বকমার পরে ফাঁক নেই"
      },
      {
       "t": "Oui, bien sûr ; merci beaucoup.",
       "mean": "Yes, of course; thank you · হ্যাঁ, নিশ্চয়ই; ধন্যবাদ"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is correctly spaced in French? · ফরাসিতে কোনটির ফাঁক সঠিক?",
       "options": [
        "Ça va ?",
        "Ça va?",
        "Ça va ?.",
        "Ça va!?"
       ],
       "answer": 0,
       "explain": "High marks take a space before them. · উঁচু চিহ্নগুলোর আগে একটি ফাঁক বসে।"
      },
      {
       "q": "French quotation marks are… · ফরাসি উদ্ধৃতি চিহ্ন হলো…",
       "options": [
        "‹ ›",
        "« »",
        "\" \"",
        "' '"
       ],
       "answer": 1,
       "explain": "{{les guillemets}}, with a space just inside. · {{les guillemets}}, ভেতরে একটি ফাঁক রেখে।"
      },
      {
       "q": "Which is correct? · কোনটি সঠিক?",
       "options": [
        "l ami",
        "lami",
        "l'ami",
        "l' ami"
       ],
       "answer": 2,
       "explain": "No space on either side of the apostrophe. · apostrophe-এর দুপাশে কোনো ফাঁক নেই।"
      },
      {
       "q": "{{les deux-points}} is the French name for… · {{les deux-points}} ফরাসি নামটি বোঝায়…",
       "options": [
        "the semicolon · সেমিকোলন",
        "the ellipsis · ত্রিবিন্দু",
        "the dash · ড্যাশ",
        "the colon · কোলন"
       ],
       "answer": 3,
       "explain": "Literally *the two dots*. · আক্ষরিক অর্থে *দুটি বিন্দু*।"
      },
      {
       "q": "How is a letter dated? · চিঠিতে তারিখ কীভাবে লেখা হয়?",
       "options": [
        "Dacca, le 5 décembre 2026",
        "Dacca, 5 Décembre 2026",
        "Le 5 décembre 2026, Dacca",
        "5/12/2026 Dacca"
       ],
       "answer": 0,
       "explain": "Place, comma, {{le}}, date, lower-case month. · স্থান, কমা, {{le}}, তারিখ, ছোট হাতের মাস।"
      }
     ]
    }
   ]
  },
  {
   "id": "u5-letter-parts",
   "icon": "✉",
   "title": "The Parts of a Letter · চিঠির অংশ",
   "subtitle": "The skeleton every French letter shares · প্রতিটি ফরাসি চিঠির অভিন্ন কাঠামো",
   "minutes": 12,
   "goals": [
    "Name and order the parts of a letter · চিঠির অংশগুলোর নাম ও ক্রম বলুন",
    "Choose the right opening for your reader · পাঠক বুঝে সঠিক সূচনা বাছুন",
    "Use the reference and subject lines · সূত্র ও বিষয়ের লাইন ব্যবহার করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A French formal letter has a fixed skeleton. Fill the slots in order and the letter is already half written. · ফরাসি আনুষ্ঠানিক চিঠির কাঠামো নির্দিষ্ট।"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "1. Sender · ১। প্রেরক",
       "t": "l'en-tête",
       "desc": "Your name and address, top left. · আপনার নাম ও ঠিকানা, উপরে বাঁ দিকে।"
      },
      {
       "title": "2. Recipient · ২। প্রাপক",
       "t": "le destinataire",
       "desc": "Their name and address, below and to the right. · প্রাপকের নাম ও ঠিকানা, নিচে ডান দিকে।"
      },
      {
       "title": "3. Place and date · ৩। স্থান ও তারিখ",
       "t": "Dacca, le 5 décembre 2026",
       "desc": "Right-hand side, above the subject. · ডান দিকে, বিষয়ের উপরে।"
      },
      {
       "title": "4. References · ৪। সূত্র",
       "t": "V/Réf. : votre demande du 23/12/2026",
       "desc": "Optional. V/Réf. is theirs, N/Réf. is yours. · ঐচ্ছিক। V/Réf. তাদের, N/Réf. আপনার।"
      },
      {
       "title": "5. Subject · ৫। বিষয়",
       "t": "Objet : demande d'emploi",
       "desc": "One short line saying what the letter is about. · এক লাইনে চিঠির বিষয়বস্তু।"
      },
      {
       "title": "6. Opening · ৬। সম্বোধন",
       "t": "Monsieur, / Madame,",
       "desc": "The formule d'appel, followed by a comma. · সম্বোধন, তারপর একটি কমা।"
      },
      {
       "title": "7. Body · ৭। মূল বক্তব্য",
       "t": "le corps de la lettre",
       "desc": "Short paragraphs, one idea each. · ছোট অনুচ্ছেদ, প্রতিটিতে একটি করে ভাবনা।"
      },
      {
       "title": "8. Closing formula · ৮। সমাপনী বাক্য",
       "t": "la formule de politesse",
       "desc": "The long polite sentence before the signature. · স্বাক্ষরের আগে দীর্ঘ ভদ্রতাসূচক বাক্য।"
      },
      {
       "title": "9. Signature · ৯। সই",
       "t": "la signature",
       "desc": "Bottom right. {{PJ}} below it for enclosures. · নিচে ডান দিকে। সংযুক্তি থাকলে তার নিচে {{PJ}}।"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Choosing the opening · সূচনা বাছাই",
     "color": "blue",
     "desc": "Never use the person's first name in a formal letter, and never add their surname after {{Monsieur}}. · আনুষ্ঠানিক চিঠিতে নামের আগে Monsieur-এর পরে পদবি বসে না।",
     "examples": [
      {
       "t": "Monsieur,",
       "tr": "to a man you do not know · অপরিচিত পুরুষকে",
       "hl": "Monsieur,"
      },
      {
       "t": "Madame, Monsieur,",
       "tr": "when you do not know who will read it · পাঠক কে জানা না থাকলে",
       "hl": "Madame, Monsieur,"
      },
      {
       "t": "Monsieur le Directeur,",
       "tr": "to someone by their title · পদবি ধরে সম্বোধনে",
       "hl": "le Directeur"
      },
      {
       "t": "Cher Monsieur,",
       "tr": "warmer, for someone you have met · পরিচিত কারও জন্য, আন্তরিক",
       "hl": "Cher"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Writing *Cher Monsieur Rahman* is an English habit. French writes either {{Monsieur}} or {{Cher Monsieur}}, never the surname after it. · পদবি যোগ করা ইংরেজি অভ্যাস, ফরাসি নয়।"
    },
    {
     "type": "rule",
     "name": "The closing formula · সমাপ্তির বাঁধা বাক্য",
     "color": "purple",
     "desc": "French ends formally with a long sentence that repeats the opening word exactly. · শেষের বাক্যে শুরুর সম্বোধনটি হুবহু ফিরে আসে।",
     "examples": [
      {
       "t": "Je vous prie d'agréer, Monsieur, l'expression de mes sentiments distingués.",
       "tr": "standard and safe · প্রচলিত ও নিরাপদ",
       "hl": "Je vous prie d'agréer"
      },
      {
       "t": "Veuillez agréer, Madame, mes salutations distinguées.",
       "tr": "slightly shorter · একটু সংক্ষিপ্ত",
       "hl": "Veuillez agréer"
      },
      {
       "t": "Cordialement,",
       "tr": "email, colleagues, everyday business · ইমেল, সহকর্মী, দৈনন্দিন কাজ",
       "hl": "Cordialement"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Whatever you wrote at the top must reappear inside the closing. Open with {{Monsieur le Directeur,}} and you must close with {{…, Monsieur le Directeur, …}}. · শুরুর সম্বোধন শেষেও হুবহু বসাতে হবে।"
    },
    {
     "t": "Veuillez agréer, Madame, mes salutations distinguées.",
     "tr": "vuh-yay ah-gray-AY mah-DAHM may sah-lew-tah-SYOHN dees-tahn-GAY · ভ্যইয়ে আগ্রেয়ে, মাদাম, মে সাল্যুতাসীয়ঁ দিস্তাঁগে",
     "mean": "Yours faithfully. · আপনার বিশ্বস্ত।",
     "words": [
      {
       "t": "Veuillez",
       "mean": "be so kind as to · অনুগ্রহ করে"
      },
      {
       "t": "agréer",
       "mean": "accept · গ্রহণ করুন"
      },
      {
       "t": "Madame",
       "mean": "Madam · ম্যাডাম"
      },
      {
       "t": "mes",
       "mean": "my · আমার"
      },
      {
       "t": "salutations",
       "mean": "greetings · অভিবাদন"
      },
      {
       "t": "distinguées",
       "mean": "distinguished · বিশিষ্ট"
      }
     ],
     "note": "Word for word this is *be so kind as to accept my distinguished greetings*. It means no more than *yours faithfully*; learn it whole. · আক্ষরিক অনুবাদে অদ্ভুত শোনায়; গোটাটাই একসঙ্গে শিখুন।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud in the order a letter is built. Nine small parts, always the same. · চিঠির ক্রম অনুযায়ী পড়ুন; নয়টি অংশ, সবসময় একই।",
     "lines": [
      {
       "t": "Dacca, le 15 novembre 2026",
       "mean": "place and date · স্থান ও তারিখ"
      },
      {
       "t": "Objet : demande de renseignements",
       "mean": "subject: request for information · বিষয়: তথ্যের অনুরোধ"
      },
      {
       "t": "Madame, Monsieur,",
       "mean": "when you do not know who will read it · পাঠক কে জানা না থাকলে"
      },
      {
       "t": "Je vous prie d'agréer mes salutations distinguées.",
       "mean": "a standard closing formula · প্রচলিত সমাপনী বাক্য"
      },
      {
       "t": "Cordialement,",
       "mean": "for email and colleagues · ইমেল ও সহকর্মীর জন্য"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{Objet :}} introduces… · {{Objet :}} দিয়ে বোঝানো হয়…",
       "options": [
        "the date · তারিখ",
        "the subject of the letter · চিঠির বিষয়",
        "the sender's address · প্রেরকের ঠিকানা",
        "the enclosure list · সংযুক্তির তালিকা"
       ],
       "answer": 1,
       "explain": "One short line saying what the letter is about. · এক লাইনে চিঠির বিষয়বস্তু।"
      },
      {
       "q": "Which opening is correct French? · কোন সম্বোধনটি সঠিক ফরাসি?",
       "options": [
        "Cher M. Rahman,",
        "Cher Rahman,",
        "Cher Monsieur,",
        "Cher Monsieur Rahman,"
       ],
       "answer": 2,
       "explain": "No surname after {{Monsieur}} in a letter. · চিঠিতে {{Monsieur}}-এর পরে পদবি বসে না।"
      },
      {
       "q": "{{V/Réf.}} means… · {{V/Réf.}} মানে…",
       "options": [
        "our reference",
        "verified reference",
        "the version · সংস্করণ",
        "your reference · আপনার সূত্র"
       ],
       "answer": 3,
       "explain": "{{N/Réf.}} is yours, {{V/Réf.}} is theirs. · {{N/Réf.}} আপনার, {{V/Réf.}} তাদের।"
      },
      {
       "q": "If you open with {{Monsieur le Directeur,}} the closing must… · {{Monsieur le Directeur,}} দিয়ে শুরু করলে শেষের বাক্যে অবশ্যই…",
       "options": [
        "repeat Monsieur le Directeur",
        "use Monsieur only · কেবল Monsieur ব্যবহার করুন",
        "use Cher Monsieur",
        "omit the title · সম্বোধন বাদ দিন"
       ],
       "answer": 0,
       "explain": "The formula echoes the opening exactly. · শেষের বাক্যে শুরুর সম্বোধনটি হুবহু ফিরে আসে।"
      },
      {
       "q": "{{PJ}} at the foot of a letter means… · চিঠির নিচে {{PJ}} মানে…",
       "options": [
        "please join",
        "enclosures",
        "postscript",
        "page jointe"
       ],
       "answer": 1,
       "explain": "{{pièces jointes}} — documents enclosed. · {{pièces jointes}} — সংযুক্ত কাগজপত্র।"
      }
     ]
    }
   ]
  },
  {
   "id": "u5-formal",
   "icon": "📄",
   "title": "Applications & Requests · আবেদন ও অনুরোধ",
   "subtitle": "Asking for a job, a booking or information · চাকরি, বুকিং বা তথ্য চেয়ে লেখা",
   "minutes": 13,
   "goals": [
    "Write a job application · চাকরির আবেদন লিখুন",
    "Request a booking or information · বুকিং বা তথ্যের জন্য অনুরোধ করুন",
    "Use the fixed opening sentences · বাঁধা সূচনা বাক্যগুলো ব্যবহার করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Formal French runs on ready-made sentences. Nobody invents them; everyone reuses them. Memorise a handful and you can write any request. · আনুষ্ঠানিক ফরাসি চলে তৈরি বাক্যে। কয়েকটি মুখস্থ করলেই যেকোনো আবেদন লেখা যায়।"
    },
    {
     "type": "table",
     "head": [
      "Purpose · উদ্দেশ্য",
      "Opening sentence"
     ],
     "rows": [
      [
       "apply for a job · চাকরির জন্য আবেদন করুন",
       "{{Je me permets de poser ma candidature au poste de…}}"
      ],
      [
       "reply to an advert · বিজ্ঞাপনের উত্তর দিন",
       "{{Suite à votre annonce parue le…, je vous écris pour…}}"
      ],
      [
       "request information",
       "{{Je vous serais reconnaissant de bien vouloir m'informer sur…}}"
      ],
      [
       "make a booking · বুকিং করুন",
       "{{Je souhaiterais réserver une chambre du… au…}}"
      ],
      [
       "confirm something",
       "{{Je vous confirme par la présente que…}}"
      ]
     ],
     "title": "Five openings that cover most letters · বেশির ভাগ চিঠিতে চলে এমন পাঁচটি সূচনা"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "la candidature",
       "tr": "lah kahn-dee-dah-TEWR · লা কাঁদিদাত্যুর",
       "mean": "job application · চাকরির আবেদন"
      },
      {
       "t": "le poste",
       "tr": "luh PUST · ল্য পস্ত",
       "mean": "the position, the job · পদ; চাকরি"
      },
      {
       "t": "le curriculum vitae",
       "tr": "luh kew-ree-kew-lum vee-TAY · ল্য ক্যুরিক্যুলম ভিতে",
       "mean": "CV · জীবনবৃত্তান্ত"
      },
      {
       "t": "une annonce",
       "tr": "ewn ah-NOHNS · য়্যুন্ আনঁস",
       "mean": "an advertisement · বিজ্ঞাপন"
      },
      {
       "t": "l'entretien",
       "tr": "lahn-truh-TYAN · লাঁত্র্যতিয়ঁ",
       "mean": "the interview · সাক্ষাৎকার"
      },
      {
       "t": "ci-joint",
       "tr": "see-ZHWAN · সিজ়োয়াঁ",
       "mean": "enclosed, attached · সংযুক্ত"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Objet : candidature au poste de secrétaire",
       "tr": "subject line · বিষয় শিরোনাম",
       "mean": "Subject: application for the post of secretary · বিষয়: সেক্রেটারি পদের জন্য আবেদন"
      },
      {
       "t": "Vous trouverez ci-joint mon curriculum vitae.",
       "tr": "voo troo-vuh-ray see-ZHWAN · ভু ত্রুভ্যরে সিজ়োয়াঁ",
       "mean": "You will find my CV enclosed. · আমার জীবনবৃত্তান্ত সংযুক্ত করা হলো।"
      },
      {
       "t": "Je reste à votre entière disposition.",
       "tr": "zhuh rest ah vohtr ahn-tyair · জ়্য রেস্ত আ ভত্র আঁতিয়ের",
       "mean": "I remain entirely at your disposal. · আমি সম্পূর্ণভাবে আপনার সেবায় প্রস্তুত।"
      },
      {
       "t": "Dans l'attente de votre réponse…",
       "tr": "dahn lah-TAHNT · দাঁ লাতাঁত",
       "mean": "Looking forward to your reply… · আপনার উত্তরের অপেক্ষায়…"
      }
     ],
     "title": "Sentences to reuse · বারবার কাজে লাগবে এমন বাক্য"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "A complete application is only four sentences: why you are writing, what you offer, that the CV is enclosed, and the polite close. Everything else is padding. · চারটি বাক্যেই সম্পূর্ণ আবেদন হয়।"
    },
    {
     "type": "sentence",
     "t": "Je me permets de poser ma candidature au poste de secrétaire.",
     "tr": "zhuh muh pair-may duh poh-zay mah kahn-dee-dah-TEWR oh pust duh suh-kray-TAIR · জ়্য ম্য পেরমে দ্য পোজ়ে মা কাঁদিদাত্যুর ও পস্ত দ্য স্যক্রেতের",
     "mean": "I should like to apply for the post of secretary. · আমি সেক্রেটারি পদের জন্য আবেদন করতে চাই।",
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
       "t": "permets",
       "mean": "allow · অনুমতি দেওয়া"
      },
      {
       "t": "de",
       "mean": "to · -তে"
      },
      {
       "t": "poser",
       "mean": "put forward · পেশ করা"
      },
      {
       "t": "ma",
       "mean": "my · আমার"
      },
      {
       "t": "candidature",
       "mean": "application · আবেদন"
      },
      {
       "t": "au",
       "mean": "for the · -এর জন্য"
      },
      {
       "t": "poste",
       "mean": "post · পদ"
      },
      {
       "t": "de",
       "mean": "of · -এর"
      },
      {
       "t": "secrétaire",
       "mean": "secretary · সেক্রেটারি"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read each line aloud. A formal request is built of ready-made phrases; learn them whole. · জোরে পড়ুন; আনুষ্ঠানিক অনুরোধ তৈরি বাক্যেই গড়া, গোটাটাই শিখুন।",
     "lines": [
      {
       "t": "Je me permets de vous écrire au sujet de votre annonce.",
       "mean": "I am writing to you about your advertisement · আপনার বিজ্ঞাপনের বিষয়ে লিখছি"
      },
      {
       "t": "Je vous serais reconnaissant de bien vouloir me répondre.",
       "mean": "I would be grateful if you would reply · উত্তর দিলে কৃতজ্ঞ থাকব"
      },
      {
       "t": "Veuillez trouver ci-joint mon curriculum vitae.",
       "mean": "Please find my CV attached · সঙ্গে আমার জীবনবৃত্তান্ত"
      },
      {
       "t": "Je reste à votre entière disposition.",
       "mean": "I remain entirely at your disposal · আমি আপনার সেবায় প্রস্তুত"
      },
      {
       "t": "Dans l'attente de votre réponse, je vous remercie.",
       "mean": "Awaiting your reply, thank you · উত্তরের অপেক্ষায়, ধন্যবাদ"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{ci-joint}} means… · {{ci-joint}} মানে…",
       "options": [
        "signed",
        "urgent",
        "enclosed",
        "below"
       ],
       "answer": 2,
       "explain": "Used for documents attached to a letter. · চিঠির সঙ্গে সংযুক্ত কাগজপত্রের জন্য ব্যবহৃত।"
      },
      {
       "q": "*I should like to apply for the post of…* begins… · *I should like to apply for the post of…* শুরু হয়…",
       "options": [
        "Je veux le poste de…",
        "Je demande le travail de…",
        "J'applique pour le poste de…",
        "Je me permets de poser ma candidature au poste de…"
       ],
       "answer": 3,
       "explain": "*Appliquer* is a false friend; French uses {{poser sa candidature}}. · *Appliquer* একটি ছদ্মবন্ধু; ফরাসি বলে {{poser sa candidature}}।"
      },
      {
       "q": "{{Dans l'attente de votre réponse}} means… · {{Dans l'attente de votre réponse}} মানে…",
       "options": [
        "Looking forward to your reply · আপনার উত্তরের অপেক্ষায়",
        "In answer to your letter · আপনার চিঠির উত্তরে",
        "Awaiting your arrival · আপনার আগমনের অপেক্ষায়",
        "Without waiting for a reply · উত্তরের অপেক্ষা না করেই"
       ],
       "answer": 0,
       "explain": "A standard pre-closing line. · শেষ করার আগে বসানো প্রচলিত বাক্য।"
      },
      {
       "q": "{{l'entretien}} is… · {{l'entretien}} মানে…",
       "options": [
        "the entrance · প্রবেশপথ",
        "the interview · সাক্ষাৎকার",
        "the maintenance fee · রক্ষণাবেক্ষণ ফি",
        "the entry form · ভর্তি ফর্ম"
       ],
       "answer": 1,
       "explain": "{{un entretien d'embauche}} is a job interview. · {{un entretien d'embauche}} মানে চাকরির সাক্ষাৎকার।"
      },
      {
       "q": "A subject line starts with… · বিষয়ের লাইন শুরু হয়…",
       "options": [
        "Titre :",
        "Concernant :",
        "Objet :",
        "Sujet :"
       ],
       "answer": 2,
       "explain": "{{Objet :}} with a space before the colon. · {{Objet :}} — কোলনের আগে একটি ফাঁক রেখে।"
      }
     ]
    }
   ]
  },
  {
   "id": "u5-personal",
   "icon": "💌",
   "title": "Personal Letters · ব্যক্তিগত চিঠি",
   "subtitle": "Writing to a friend, and replying to an invitation · বন্ধুকে চিঠি লেখা আর নিমন্ত্রণের উত্তর দেওয়া",
   "minutes": 11,
   "goals": [
    "Open and close a friendly letter · ঘরোয়া চিঠি শুরু ও শেষ করুন",
    "Accept or decline an invitation · নিমন্ত্রণ গ্রহণ বা প্রত্যাখ্যান করুন",
    "Switch comfortably between tu and vous · tu ও vous-এর মধ্যে স্বচ্ছন্দে বদল করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Personal letters drop the heavy formulas entirely. The one thing that still matters is choosing {{tu}} or {{vous}} — and then staying with it. · ব্যক্তিগত চিঠিতে ভারী বাক্য লাগে না; কেবল tu না vous ঠিক করে নিন।"
    },
    {
     "type": "table",
     "head": [
      "Opening · সূচনা",
      "To whom",
      "Closing · সমাপ্তি",
      "Warmth · আন্তরিকতা"
     ],
     "rows": [
      [
       "{{Cher Rahim,}}",
       "a male friend · একজন বন্ধু",
       "{{Amicalement,}}",
       "friendly"
      ],
      [
       "{{Chère Shila,}}",
       "a female friend · একজন বান্ধবী",
       "{{Bien à toi,}}",
       "warm"
      ],
      [
       "{{Mon cher ami,}}",
       "a close friend · ঘনিষ্ঠ বন্ধু",
       "{{Je t'embrasse,}}",
       "affectionate"
      ],
      [
       "{{Chers tous,}}",
       "a family · একটি পরিবার",
       "{{Grosses bises,}}",
       "very informal"
      ]
     ],
     "title": "Openings and closings that match · মানানসই সূচনা ও সমাপ্তি"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{Je t'embrasse}} and {{bises}} are normal between friends and family of any gender in France — they do not carry a romantic meaning. · বন্ধু ও পরিবারের মধ্যে এগুলো স্বাভাবিক, প্রেমের অর্থ বহন করে না।"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Merci beaucoup de ton invitation.",
       "tr": "mair-see boh-koo duh tohn an-vee-tah-SYOHN · মেরসি বোকু দ্য তঁ আঁভিতাসিয়ঁ",
       "mean": "Thank you very much for your invitation. · আপনার নিমন্ত্রণের জন্য অনেক ধন্যবাদ।"
      },
      {
       "t": "C'est avec grand plaisir que j'accepte.",
       "tr": "say-tah-vek grahn play-ZEER · সে তাভেক গ্রাঁ প্লেজ়ির",
       "mean": "It is with great pleasure that I accept. · আমি অত্যন্ত আনন্দের সঙ্গে গ্রহণ করছি।"
      },
      {
       "t": "Je regrette de ne pas pouvoir venir.",
       "tr": "zhuh ruh-gret duh nuh pah poo-vwahr vuh-NEER · জ়্য র‍্যগ্রেত দ্য ন্য পা পুভোয়ার ভ্যনির",
       "mean": "I am sorry I cannot come. · দুঃখিত, আমি আসতে পারছি না।"
      },
      {
       "t": "Donne-moi de tes nouvelles.",
       "tr": "dun-mwah duh tay noo-VEL · দনমোয়া দ্য তে নুভেল",
       "mean": "Let me hear from you. · আপনার খবর জানাবেন।"
      }
     ],
     "title": "Accepting and declining · গ্রহণ ও প্রত্যাখ্যান"
    },
    {
     "type": "rule",
     "name": "tu or vous — and stay there · tu না vous — বেছে নিয়ে সেখানেই থাকুন",
     "color": "orange",
     "desc": "{{tu}} for one friend, child or relative; {{vous}} for a stranger, an older person, anyone senior, and always for more than one person. · একজন বন্ধু বা শিশুকে tu; অপরিচিত, বড় বা একাধিক জনকে vous।",
     "examples": [
      {
       "t": "Comment vas-tu ?",
       "tr": "to a friend · বন্ধুকে",
       "hl": "tu"
      },
      {
       "t": "Comment allez-vous ?",
       "tr": "to anyone else · অন্য সবাইকে",
       "hl": "vous"
      },
      {
       "t": "On peut se tutoyer ?",
       "tr": "Shall we use tu? — the polite way to switch · tu বলি? — ভদ্রভাবে বদলানোর উপায়",
       "hl": "tutoyer"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Never mix the two in one letter. Starting with {{vous}} and slipping into {{tu}} reads as carelessness. · একই চিঠিতে দুটো মেশাবেন না।"
    },
    {
     "t": "Écris-moi vite, tu me manques beaucoup.",
     "tr": "ay-kree MWAH veet tew muh mahnk boh-KOO · একি-মোয়া ভিত্, ত্যু ম্য মঁক্ বোকু",
     "mean": "Write to me soon, I miss you a lot. · তাড়াতাড়ি লিখো, তোমাকে খুব মনে পড়ে।",
     "words": [
      {
       "t": "Écris-moi",
       "mean": "write to me · আমাকে লেখো"
      },
      {
       "t": "vite",
       "mean": "quickly · তাড়াতাড়ি"
      },
      {
       "t": "tu",
       "mean": "you · তুমি"
      },
      {
       "t": "me",
       "mean": "to me · আমার"
      },
      {
       "t": "manques",
       "mean": "are missing · অভাব বোধ হও"
      },
      {
       "t": "beaucoup",
       "mean": "a lot · খুব"
      }
     ],
     "note": "French turns *I miss you* around: **tu me manques** is *you are missing from me*. The person missed is the subject. · ফরাসিতে উল্টো — যাকে মনে পড়ে সেই কর্তা।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. To a friend, French drops its collar and tie. · জোরে পড়ুন; বন্ধুর কাছে ফরাসি আটপৌরে হয়ে যায়।",
     "lines": [
      {
       "t": "Cher Salim, comment vas-tu ?",
       "mean": "Dear Salim, how are you? · প্রিয় সেলিম, কেমন আছ?"
      },
      {
       "t": "J'espère que tout va bien chez toi.",
       "mean": "I hope all is well with you · আশা করি তোমার সব ভালো"
      },
      {
       "t": "Merci pour ta longue lettre.",
       "mean": "Thank you for your long letter · তোমার লম্বা চিঠির জন্য ধন্যবাদ"
      },
      {
       "t": "Écris-moi vite, tu me manques.",
       "mean": "Write soon, I miss you · তাড়াতাড়ি লিখো, তোমাকে মনে পড়ে"
      },
      {
       "t": "Amitiés, à bientôt !",
       "mean": "Best wishes, see you soon! · শুভেচ্ছা, শিগগির দেখা হবে"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which closing suits a close friend? · ঘনিষ্ঠ বন্ধুর জন্য কোন সমাপ্তি মানানসই?",
       "options": [
        "Veuillez agréer mes salutations distinguées,",
        "Monsieur,",
        "Objet :",
        "Je t'embrasse,"
       ],
       "answer": 3,
       "explain": "The formal formulas belong to business letters. · আনুষ্ঠানিক বাক্যগুলো ব্যবসায়িক চিঠির জন্য।"
      },
      {
       "q": "{{On peut se tutoyer ?}} asks… · {{On peut se tutoyer ?}} জিজ্ঞেস করে…",
       "options": [
        "Shall we use tu? · আমরা কি tu ব্যবহার করব?",
        "May I sit down? · আমি কি বসতে পারি?",
        "Shall we meet? · আমরা কি দেখা করব?",
        "Can you repeat? · আবার বলবেন?"
       ],
       "answer": 0,
       "explain": "The polite way to move from vous to tu. · vous থেকে tu-তে যাওয়ার ভদ্র উপায়।"
      },
      {
       "q": "To a woman you would open… · একজন নারীকে সম্বোধন করবেন…",
       "options": [
        "Cher Madame Shila,",
        "Chère Shila,",
        "Cher Shila,",
        "Chères Shila,"
       ],
       "answer": 1,
       "explain": "{{cher}} agrees with the reader. · {{cher}} পাঠকের লিঙ্গ অনুযায়ী বদলায়।"
      },
      {
       "q": "Which is always {{vous}}? · কোন ক্ষেত্রে সবসময় {{vous}} বসে?",
       "options": [
        "a close friend · ঘনিষ্ঠ বন্ধু",
        "a brother · একজন ভাই",
        "more than one person · একাধিক ব্যক্তি",
        "a child · একটি শিশু"
       ],
       "answer": 2,
       "explain": "{{vous}} is both the polite and the plural form. · {{vous}} একাধারে ভদ্র ও বহুবচন রূপ।"
      },
      {
       "q": "{{Donne-moi de tes nouvelles}} means… · {{Donne-moi de tes nouvelles}} মানে…",
       "options": [
        "Give me the news · আমাকে খবর দিন",
        "Send me a newspaper · আমাকে একটি সংবাদপত্র পাঠান",
        "Tell me a story · আমাকে একটি গল্প বলুন",
        "Let me hear from you · আপনার খবর জানাবেন"
       ],
       "answer": 3,
       "explain": "A standard sign-off between friends. · বন্ধুদের মধ্যে প্রচলিত সমাপ্তি।"
      }
     ]
    }
   ]
  },
  {
   "id": "u5-cv",
   "icon": "CV",
   "title": "CV & Job Interview · জীবনবৃত্তান্ত ও চাকরির সাক্ষাৎকার",
   "subtitle": "Presenting yourself in French · ফরাসিতে নিজের পরিচয় দেওয়া",
   "minutes": 13,
   "goals": [
    "Lay out a French CV · ফরাসি জীবনবৃত্তান্ত সাজান",
    "Answer the standard interview questions · প্রচলিত সাক্ষাৎকারের প্রশ্নের উত্তর দিন",
    "Describe your strengths without boasting · বড়াই না করে নিজের শক্তি বলুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A French CV is short, factual and reverse-chronological — newest first. Two pages at the very most, and one is better. · ফরাসি CV সংক্ষিপ্ত ও তথ্যভিত্তিক, নতুনতম তথ্য আগে।"
    },
    {
     "type": "table",
     "head": [
      "Section · অংশ",
      "French heading",
      "What goes in it · এতে কী থাকে"
     ],
     "rows": [
      [
       "Personal details",
       "{{État civil}}",
       "name, address, telephone, email"
      ],
      [
       "Objective · লক্ষ্য",
       "{{Objectif professionnel}}",
       "one line on the post you want · যে পদ চান তার এক লাইন"
      ],
      [
       "Education · শিক্ষা",
       "{{Formation}}",
       "degrees, newest first"
      ],
      [
       "Experience · অভিজ্ঞতা",
       "{{Expérience professionnelle}}",
       "jobs, newest first"
      ],
      [
       "Skills · দক্ষতা",
       "{{Compétences}}",
       "software, licences, technical skills"
      ],
      [
       "Languages · ভাষা",
       "{{Langues}}",
       "with a level for each · প্রতিটির জন্য একটি স্তর"
      ],
      [
       "Interests · আগ্রহ",
       "{{Centres d'intérêt}}",
       "two or three lines only · কেবল দুই-তিন লাইন"
      ]
     ],
     "title": "The standard sections · প্রচলিত অংশগুলো"
    },
    {
     "type": "rule",
     "name": "Describing your language level · নিজের ভাষাদক্ষতার স্তর জানানো",
     "color": "blue",
     "desc": "Use the European levels or the standard phrases. Vague claims get tested in the interview. · ইউরোপীয় স্তর বা প্রচলিত বাক্যাংশ ব্যবহার করুন।",
     "examples": [
      {
       "t": "bangla : langue maternelle",
       "tr": "mother tongue · মাতৃভাষা",
       "hl": "maternelle"
      },
      {
       "t": "anglais : courant",
       "tr": "fluent · সাবলীল",
       "hl": "courant"
      },
      {
       "t": "français : niveau intermédiaire (B1)",
       "tr": "intermediate · মধ্যম স্তর",
       "hl": "intermédiaire"
      },
      {
       "t": "hindi : notions",
       "tr": "basic knowledge · প্রাথমিক ধারণা",
       "hl": "notions"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Recruteur",
       "t": "Parlez-moi un peu de vous.",
       "tr": "par-lay-mwah uhn puh duh VOO · পারলেমোয়া উঁ প্য দ্য ভু",
       "mean": "Tell me a little about yourself. · নিজের সম্পর্কে একটু বলুন।"
      },
      {
       "who": "Shafique",
       "t": "Je suis diplômé en informatique et je travaille depuis trois ans dans ce domaine.",
       "tr": "zhuh swee dee-ploh-MAY ahn an-for-mah-TEEK · জ়্য সুই দিপ্লোমে আঁ আঁফরমাতিক",
       "mean": "I am a graduate in computing and I have worked in the field for three years. · আমি কম্পিউটার বিজ্ঞানে স্নাতক এবং তিন বছর ধরে এই ক্ষেত্রে কাজ করছি।"
      },
      {
       "who": "Recruteur",
       "t": "Quelles sont vos qualités et vos défauts ?",
       "tr": "kel sohn voh kah-lee-TAY · কেল সঁ ভো কালিতে",
       "mean": "What are your strengths and weaknesses? · আপনার শক্তি ও দুর্বলতা কী?"
      },
      {
       "who": "Shafique",
       "t": "Je suis méthodique et patient. Je suis parfois trop exigeant envers moi-même.",
       "tr": "zhuh swee may-toh-DEEK ay pah-SYAHN · জ়্য সুই মেতদিক এ পাসিয়াঁ",
       "mean": "I am methodical and patient. I am sometimes too demanding of myself. · আমি পদ্ধতিনিষ্ঠ ও ধৈর্যশীল। কখনো কখনো নিজের কাছে বেশি কিছু চাই।"
      },
      {
       "who": "Recruteur",
       "t": "Pourquoi voulez-vous ce poste ?",
       "tr": "poor-kwah voo-lay-voo suh PUST · পুরকোয়া ভুলেভু স্য পস্ত",
       "mean": "Why do you want this position? · আপনি এই পদটি কেন চান?"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "diplômé",
       "tr": "dee-ploh-MAY · দিপ্লোমে",
       "mean": "qualified, a graduate · যোগ্য; স্নাতক"
      },
      {
       "t": "une entreprise",
       "tr": "ewn ahn-truh-PREEZ · য়্যুন্ আঁত্র্যপ্রিজ়",
       "mean": "a company · কোম্পানি"
      },
      {
       "t": "une formation",
       "tr": "ewn for-mah-SYOHN · য়্যুন্ ফরমাসিয়ঁ",
       "mean": "training, education · প্রশিক্ষণ; শিক্ষা"
      },
      {
       "t": "s'adapter",
       "tr": "sah-dap-TAY · সাদাপ্তে",
       "mean": "to adapt · মানিয়ে নেওয়া"
      },
      {
       "t": "exigeant",
       "tr": "eg-zee-ZHAHN · এগজ়িজ়াঁ",
       "mean": "demanding · কঠিন; দাবিদার"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{une formation}} means **training or education**, not the forming of something. And {{un poste}} is a job; {{la poste}} is the post office. · formation মানে শিক্ষা বা প্রশিক্ষণ।"
    },
    {
     "t": "Je suis disponible à partir du mois prochain.",
     "tr": "zhuh swee dees-poh-NEEBL ah pahr-TEER dew mwah proh-SHAHN · জ়্য সুই দিস্পনিব্ল্ আ পার্তির্ দ্যু মোয়া প্রশাঁ",
     "mean": "I am available from next month. · আমি আগামী মাস থেকে প্রস্তুত।",
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
       "t": "disponible",
       "mean": "available · প্রস্তুত"
      },
      {
       "t": "à",
       "mean": "from · থেকে"
      },
      {
       "t": "partir",
       "mean": "starting · শুরু করে"
      },
      {
       "t": "du",
       "mean": "of the · -এর"
      },
      {
       "t": "mois",
       "mean": "month · মাস"
      },
      {
       "t": "prochain",
       "mean": "next · আগামী"
      }
     ],
     "note": "**à partir de** is a set phrase for *from, starting at*, and has nothing to do with leaving. · **à partir de** মানে *থেকে শুরু করে*, রওনা দেওয়া নয়।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud as if answering across a desk. Short, calm, specific. · টেবিলের ওপারে উত্তর দিচ্ছেন ভেবে পড়ুন — সংক্ষিপ্ত, শান্ত, সুনির্দিষ্ট।",
     "lines": [
      {
       "t": "J'ai cinq ans d'expérience dans ce domaine.",
       "mean": "I have five years' experience in this field · এ বিষয়ে আমার পাঁচ বছরের অভিজ্ঞতা"
      },
      {
       "t": "bangla : langue maternelle ; français : niveau intermédiaire",
       "mean": "Bangla: mother tongue; French: intermediate · বাংলা: মাতৃভাষা; ফরাসি: মধ্যম স্তর"
      },
      {
       "t": "Je suis disponible à partir du mois prochain.",
       "mean": "I am available from next month · আগামী মাস থেকে আমি প্রস্তুত"
      },
      {
       "t": "Pourquoi souhaitez-vous ce poste ?",
       "mean": "Why do you want this position? · এই পদটি কেন চান?"
      },
      {
       "t": "Je vous remercie de m'avoir reçu.",
       "mean": "Thank you for seeing me · সাক্ষাতের জন্য ধন্যবাদ"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{Formation}} on a CV means… · CV-তে {{Formation}} মানে…",
       "options": [
        "education and training · শিক্ষা ও প্রশিক্ষণ",
        "work experience · কাজের অভিজ্ঞতা",
        "personal details · ব্যক্তিগত তথ্য",
        "references · সুপারিশ"
       ],
       "answer": 0,
       "explain": "{{Expérience professionnelle}} covers jobs. · {{Expérience professionnelle}} অংশে চাকরির অভিজ্ঞতা থাকে।"
      },
      {
       "q": "*Mother tongue* on a CV is… · CV-তে *mother tongue* হলো…",
       "options": [
        "langue natale",
        "langue maternelle",
        "langue principale",
        "première langue"
       ],
       "answer": 1,
       "explain": "The standard French phrase. · প্রচলিত ফরাসি বাক্যাংশ।"
      },
      {
       "q": "*Tell me about yourself* is… · *Tell me about yourself* হবে…",
       "options": [
        "Racontez vous.",
        "Expliquez-vous.",
        "Parlez-moi de vous.",
        "Dites-moi vous."
       ],
       "answer": 2,
       "explain": "The opening question in almost every interview. · প্রায় প্রতিটি সাক্ষাৎকারের প্রথম প্রশ্ন।"
      },
      {
       "q": "A French CV lists jobs… · ফরাসি CV-তে চাকরির তালিকা থাকে…",
       "options": [
        "oldest first",
        "alphabetically",
        "by employer size · নিয়োগকর্তার আকার অনুসারে",
        "newest first"
       ],
       "answer": 3,
       "explain": "Reverse chronological, like most of Europe. · নতুন থেকে পুরোনো ক্রমে, ইউরোপের অধিকাংশ দেশের মতো।"
      },
      {
       "q": "{{un poste}} means… · {{un poste}} মানে…",
       "options": [
        "a job · একটি চাকরি",
        "the post office · ডাকঘর",
        "a postage stamp · একটি ডাকটিকিট",
        "a posting abroad · বিদেশে পদায়ন"
       ],
       "answer": 0,
       "explain": "{{la poste}} is the post office. · {{la poste}} মানে ডাকঘর।"
      }
     ]
    }
   ]
  },
  {
   "id": "u5-connectives",
   "icon": "&",
   "title": "Connective Words · সংযোজক শব্দ",
   "subtitle": "The joints that turn sentences into argument · যে জোড়াগুলো বাক্যকে যুক্তিতে পরিণত করে",
   "minutes": 12,
   "goals": [
    "Sequence ideas clearly · ভাবগুলো পরিষ্কার ক্রমে সাজান",
    "Add, contrast and conclude · যোগ করুন, বৈপরীত্য দেখান, উপসংহার টানুন",
    "Use bien que with the subjunctive · bien que-এর সঙ্গে সম্ভাবনাসূচক ব্যবহার করুন"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Connectives are what separate a list of sentences from a piece of writing. They are also the quickest way to sound educated in a second language. · সংযোজক শব্দই বিচ্ছিন্ন বাক্যকে রচনায় পরিণত করে।"
    },
    {
     "type": "table",
     "head": [
      "Job · চাকরি",
      "Connectives · সংযোজক",
      "Meaning · অর্থ"
     ],
     "rows": [
      [
       "sequence",
       "{{d'abord, ensuite, puis, enfin}}",
       "first, then, next, finally"
      ],
      [
       "add",
       "{{de plus, en outre, d'ailleurs}}",
       "moreover, besides"
      ],
      [
       "contrast",
       "{{cependant, néanmoins, en revanche}}",
       "however, nevertheless, on the other hand · তবুও, অন্যদিকে"
      ],
      [
       "cause",
       "{{car, parce que, en effet}}",
       "for, because, indeed · কারণ, যেহেতু"
      ],
      [
       "result",
       "{{donc, par conséquent, ainsi}}",
       "so, consequently, thus"
      ],
      [
       "clarify",
       "{{c'est-à-dire, autrement dit}}",
       "that is to say, in other words · অর্থাৎ, অন্যভাবে বললে"
      ]
     ],
     "title": "The working set · কাজের সেটটি"
    },
    {
     "type": "rule",
     "name": "A few take the subjunctive · কয়েকটিতে সম্ভাবনাসূচক বসে",
     "color": "purple",
     "desc": "{{bien que}}, {{quoique}}, {{avant que}} and {{pour que}} all demand the subjunctive you met in Unit 3. · এই সংযোজকগুলোর পরে subjonctif বসে।",
     "examples": [
      {
       "t": "bien qu'il soit fatigué",
       "tr": "although he is tired · যদিও সে ক্লান্ত",
       "hl": "soit"
      },
      {
       "t": "pour que vous puissiez comprendre",
       "tr": "so that you can understand · যাতে আপনি বুঝতে পারেন",
       "hl": "puissiez"
      },
      {
       "t": "avant qu'il parte",
       "tr": "before he leaves · সে চলে যাওয়ার আগে",
       "hl": "parte"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "non seulement… mais aussi…",
       "tr": "nohn suhl-mahn… may oh-SEE · নঁ স্যল্মাঁ… মে অসি",
       "mean": "not only… but also… · কেবল নয়… বরং আরও…"
      },
      {
       "t": "à la fois",
       "tr": "ah lah FWAH · আ লা ফোয়া",
       "mean": "at the same time, both · একই সময়ে; উভয়ই"
      },
      {
       "t": "cela va de soi",
       "tr": "suh-lah vah duh SWAH · স্যলা ভা দ্য সোয়া",
       "mean": "it goes without saying · বলাই বাহুল্য"
      },
      {
       "t": "en ce qui concerne…",
       "tr": "ahn suh kee kohn-SAIRN · আঁ স্য কি কঁসের্ন",
       "mean": "as regards… · প্রসঙ্গে…"
      }
     ],
     "title": "Phrases worth owning · আয়ত্তে রাখার মতো বাক্যাংশ"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Four words carry most of an essay: **{{d'abord}}, {{ensuite}}, {{cependant}}, {{enfin}}**. Build the skeleton with those, then decorate. · চারটি শব্দেই রচনার কাঠামো দাঁড়িয়ে যায়।"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{car}} and {{parce que}} both mean *because*, but {{car}} never starts a sentence — it joins two clauses inside one. · car দিয়ে বাক্য শুরু করা যায় না।"
    },
    {
     "t": "Cependant, le prix reste très élevé.",
     "tr": "suh-pahn-DAHN luh pree rest treh zay-luh-VAY · স্যপঁদঁ, ল্য প্রি রেস্ত্ ত্রে জ়েল্যভে",
     "mean": "However, the price remains very high. · তবু দাম খুব বেশিই থাকছে।",
     "words": [
      {
       "t": "Cependant",
       "mean": "however · তবু"
      },
      {
       "t": "le",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "prix",
       "mean": "price · দাম"
      },
      {
       "t": "reste",
       "mean": "remains · থাকছে"
      },
      {
       "t": "très",
       "mean": "very · খুব"
      },
      {
       "t": "élevé",
       "mean": "high · উঁচু"
      }
     ],
     "note": "A connective at the head of the sentence always takes a comma. **élevé** is the word for a high price; **haut** is for height. · দামের বেলায় **élevé**, উচ্চতার বেলায় **haut**।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. These small words carry the argument; stress them a little. · জোরে পড়ুন; ছোট শব্দগুলোই যুক্তি বহন করে, একটু ঝোঁক দিন।",
     "lines": [
      {
       "t": "D'abord, nous allons étudier le problème.",
       "mean": "First, we shall study the problem · প্রথমে সমস্যাটি দেখব"
      },
      {
       "t": "Cependant, il reste une difficulté.",
       "mean": "However, one difficulty remains · তবে একটি অসুবিধা থেকে যায়"
      },
      {
       "t": "C'est pourquoi j'ai changé d'avis.",
       "mean": "That is why I changed my mind · সেজন্যই মত বদলেছি"
      },
      {
       "t": "En revanche, le prix est raisonnable.",
       "mean": "On the other hand, the price is reasonable · অন্যদিকে দাম যুক্তিসংগত"
      },
      {
       "t": "Enfin, je voudrais vous remercier.",
       "mean": "Finally, I would like to thank you · শেষে আপনাকে ধন্যবাদ জানাতে চাই"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{cependant}} means… · {{cependant}} মানে…",
       "options": [
        "finally",
        "however · তবে",
        "therefore · অতএব",
        "because · কারণ"
       ],
       "answer": 1,
       "explain": "A contrast word, like {{néanmoins}}. · বৈপরীত্যবাচক শব্দ, {{néanmoins}}-এর মতো।"
      },
      {
       "q": "{{bien que}} is followed by… · {{bien que}}-এর পরে বসে…",
       "options": [
        "the conditional · শর্তবাচক কাল",
        "the imperative · অনুজ্ঞা",
        "the subjunctive · সম্ভাবনাসূচক",
        "the future · ভবিষ্যৎ"
       ],
       "answer": 2,
       "explain": "{{bien qu'il soit}}, never *bien qu'il est*. · {{bien qu'il soit}}, কখনোই *bien qu'il est* নয়।"
      },
      {
       "q": "{{c'est-à-dire}} means… · {{c'est-à-dire}} মানে…",
       "options": [
        "it is said · বলা হয়",
        "it must be said · বলতেই হয়",
        "say it again · আবার বলুন",
        "that is to say"
       ],
       "answer": 3,
       "explain": "Often abbreviated {{c.-à-d.}} · প্রায়ই সংক্ষেপে {{c.-à-d.}} লেখা হয়।"
      },
      {
       "q": "Which word cannot begin a sentence? · কোন শব্দ দিয়ে বাক্য শুরু করা যায় না?",
       "options": [
        "car",
        "cependant",
        "donc",
        "ensuite"
       ],
       "answer": 0,
       "explain": "{{car}} joins clauses; {{parce que}} may open one. · {{car}} খণ্ডবাক্য জোড়া দেয়; {{parce que}} দিয়ে বাক্য শুরু করা যায়।"
      },
      {
       "q": "*Not only… but also…* is… · *Not only… but also…* হবে…",
       "options": [
        "ni seulement… ni aussi…",
        "non seulement… mais aussi…",
        "pas seulement… mais encore…",
        "non plus… mais aussi…"
       ],
       "answer": 1,
       "explain": "A fixed pair; the halves never change. · নির্দিষ্ট জোড়া; অংশ দুটি কখনো বদলায় না।"
      }
     ]
    }
   ]
  }
 ]
});
