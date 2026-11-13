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
   "title": "Punctuation & Typography",
   "subtitle": "The small marks that mark out a careful writer · ছোট চিহ্নগুলোই যত্নবান লেখককে চিনিয়ে দেয়",
   "minutes": 10,
   "goals": [
    "Space French punctuation correctly",
    "Use French quotation marks",
    "Name each mark in French"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French punctuation looks like English punctuation but is spaced differently. Getting this right makes a letter or a CV look professionally written. · চিহ্নগুলো ইংরেজির মতো দেখালেও ফাঁক আলাদা।"
    },
    {
     "type": "table",
     "head": [
      "Mark",
      "French name",
      "Spacing",
      "Example"
     ],
     "rows": [
      [
       ". ,",
       "{{le point, la virgule}}",
       "no space before",
       "{{Bonjour, Rana.}}"
      ],
      [
       "? !",
       "{{le point d'interrogation}}",
       "thin space before",
       "{{Ça va ?}}"
      ],
      [
       ": ;",
       "{{les deux-points}}",
       "thin space before",
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
       "no space before",
       "{{Je ne sais pas…}}"
      ]
     ],
     "title": "Spacing, mark by mark"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The high marks — **? ! : ;** — take a space before them in French. Writing *Ça va?* instead of {{Ça va ?}} is the single most visible sign of an English-trained hand. · উঁচু চিহ্নগুলোর আগে ফাঁক বসে।"
    },
    {
     "type": "rule",
     "name": "French quotation marks",
     "color": "blue",
     "desc": "French uses **« »**, not English quotes, and puts a space just inside each one. · ফরাসি « » ব্যবহার করে, ভেতরে ফাঁক রেখে।",
     "examples": [
      {
       "t": "Il a dit : « Je viendrai demain. »",
       "tr": "He said: \"I will come tomorrow.\"",
       "hl": "« Je viendrai demain. »"
      },
      {
       "t": "« Bonjour », a-t-elle répondu.",
       "tr": "\"Hello,\" she replied.",
       "hl": "«"
      }
     ]
    },
    {
     "type": "rule",
     "name": "The apostrophe",
     "color": "green",
     "desc": "It marks a missing vowel and joins the two parts tightly, with no space on either side. · হারিয়ে যাওয়া স্বরের চিহ্ন; দুপাশে ফাঁক নেই।",
     "examples": [
      {
       "t": "l'ami, d'accord, qu'il",
       "tr": "correct",
       "hl": "l'ami"
      },
      {
       "t": "l' ami",
       "tr": "wrong — never a space after the apostrophe",
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
        "the semicolon",
        "the ellipsis",
        "the dash",
        "the colon"
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
   "title": "The Parts of a Letter",
   "subtitle": "The skeleton every French letter shares · প্রতিটি ফরাসি চিঠির অভিন্ন কাঠামো",
   "minutes": 12,
   "goals": [
    "Name and order the parts of a letter",
    "Choose the right opening for your reader",
    "Use the reference and subject lines"
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
       "title": "1. Sender",
       "t": "l'en-tête",
       "desc": "Your name and address, top left. · আপনার নাম ও ঠিকানা, উপরে বাঁ দিকে।"
      },
      {
       "title": "2. Recipient",
       "t": "le destinataire",
       "desc": "Their name and address, below and to the right. · প্রাপকের নাম ও ঠিকানা, নিচে ডান দিকে।"
      },
      {
       "title": "3. Place and date",
       "t": "Dacca, le 5 décembre 2026",
       "desc": "Right-hand side, above the subject. · ডান দিকে, বিষয়ের উপরে।"
      },
      {
       "title": "4. References",
       "t": "V/Réf. : votre demande du 23/12/2026",
       "desc": "Optional. V/Réf. is theirs, N/Réf. is yours. · ঐচ্ছিক। V/Réf. তাদের, N/Réf. আপনার।"
      },
      {
       "title": "5. Subject",
       "t": "Objet : demande d'emploi",
       "desc": "One short line saying what the letter is about. · এক লাইনে চিঠির বিষয়বস্তু।"
      },
      {
       "title": "6. Opening",
       "t": "Monsieur, / Madame,",
       "desc": "The formule d'appel, followed by a comma. · সম্বোধন, তারপর একটি কমা।"
      },
      {
       "title": "7. Body",
       "t": "le corps de la lettre",
       "desc": "Short paragraphs, one idea each. · ছোট অনুচ্ছেদ, প্রতিটিতে একটি করে ভাবনা।"
      },
      {
       "title": "8. Closing formula",
       "t": "la formule de politesse",
       "desc": "The long polite sentence before the signature. · স্বাক্ষরের আগে দীর্ঘ ভদ্রতাসূচক বাক্য।"
      },
      {
       "title": "9. Signature",
       "t": "la signature",
       "desc": "Bottom right. {{PJ}} below it for enclosures. · নিচে ডান দিকে। সংযুক্তি থাকলে তার নিচে {{PJ}}।"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Choosing the opening",
     "color": "blue",
     "desc": "Never use the person's first name in a formal letter, and never add their surname after {{Monsieur}}. · আনুষ্ঠানিক চিঠিতে নামের আগে Monsieur-এর পরে পদবি বসে না।",
     "examples": [
      {
       "t": "Monsieur,",
       "tr": "to a man you do not know",
       "hl": "Monsieur,"
      },
      {
       "t": "Madame, Monsieur,",
       "tr": "when you do not know who will read it",
       "hl": "Madame, Monsieur,"
      },
      {
       "t": "Monsieur le Directeur,",
       "tr": "to someone by their title",
       "hl": "le Directeur"
      },
      {
       "t": "Cher Monsieur,",
       "tr": "warmer, for someone you have met",
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
     "name": "The closing formula",
     "color": "purple",
     "desc": "French ends formally with a long sentence that repeats the opening word exactly. · শেষের বাক্যে শুরুর সম্বোধনটি হুবহু ফিরে আসে।",
     "examples": [
      {
       "t": "Je vous prie d'agréer, Monsieur, l'expression de mes sentiments distingués.",
       "tr": "standard and safe",
       "hl": "Je vous prie d'agréer"
      },
      {
       "t": "Veuillez agréer, Madame, mes salutations distinguées.",
       "tr": "slightly shorter",
       "hl": "Veuillez agréer"
      },
      {
       "t": "Cordialement,",
       "tr": "email, colleagues, everyday business",
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
     "type": "quiz",
     "items": [
      {
       "q": "{{Objet :}} introduces… · {{Objet :}} দিয়ে বোঝানো হয়…",
       "options": [
        "the date",
        "the subject of the letter",
        "the sender's address",
        "the enclosure list"
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
        "the version",
        "your reference"
       ],
       "answer": 3,
       "explain": "{{N/Réf.}} is yours, {{V/Réf.}} is theirs. · {{N/Réf.}} আপনার, {{V/Réf.}} তাদের।"
      },
      {
       "q": "If you open with {{Monsieur le Directeur,}} the closing must… · {{Monsieur le Directeur,}} দিয়ে শুরু করলে শেষের বাক্যে অবশ্যই…",
       "options": [
        "repeat Monsieur le Directeur",
        "use Monsieur only",
        "use Cher Monsieur",
        "omit the title"
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
   "title": "Applications & Requests",
   "subtitle": "Asking for a job, a booking or information · চাকরি, বুকিং বা তথ্য চেয়ে লেখা",
   "minutes": 13,
   "goals": [
    "Write a job application",
    "Request a booking or information",
    "Use the fixed opening sentences"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Formal French runs on ready-made sentences. Nobody invents them; everyone reuses them. Memorise a handful and you can write any request. · আনুষ্ঠানিক ফরাসি চলে তৈরি বাক্যে। কয়েকটি মুখস্থ করলেই যেকোনো আবেদন লেখা যায়।"
    },
    {
     "type": "table",
     "head": [
      "Purpose",
      "Opening sentence"
     ],
     "rows": [
      [
       "apply for a job",
       "{{Je me permets de poser ma candidature au poste de…}}"
      ],
      [
       "reply to an advert",
       "{{Suite à votre annonce parue le…, je vous écris pour…}}"
      ],
      [
       "request information",
       "{{Je vous serais reconnaissant de bien vouloir m'informer sur…}}"
      ],
      [
       "make a booking",
       "{{Je souhaiterais réserver une chambre du… au…}}"
      ],
      [
       "confirm something",
       "{{Je vous confirme par la présente que…}}"
      ]
     ],
     "title": "Five openings that cover most letters"
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
       "tr": "ewn ah-NOHNS · ্যুন আনঁস",
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
       "tr": "subject line",
       "mean": "Subject: application for the post of secretary · বিষয়: সেক্রেটারি পদের জন্য আবেদন"
      },
      {
       "t": "Vous trouverez ci-joint mon curriculum vitae.",
       "tr": "voo troo-vuh-ray see-ZHWAN · ভু ত্রুভ্যরে সিজ়োয়াঁ",
       "mean": "You will find my CV enclosed. · আমার জীবনবৃত্তান্ত সংযুক্ত করা হলো।"
      },
      {
       "t": "Je reste à votre entière disposition.",
       "tr": "zhuh rest ah vohtr ahn-tyair · জ়্য রেস্ত আ ভত্‌র আঁতিয়ের",
       "mean": "I remain entirely at your disposal. · আমি সম্পূর্ণভাবে আপনার সেবায় প্রস্তুত।"
      },
      {
       "t": "Dans l'attente de votre réponse…",
       "tr": "dahn lah-TAHNT · দাঁ লাতাঁত",
       "mean": "Looking forward to your reply… · আপনার উত্তরের অপেক্ষায়…"
      }
     ],
     "title": "Sentences to reuse"
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
        "Looking forward to your reply",
        "In answer to your letter",
        "Awaiting your arrival",
        "Without waiting for a reply"
       ],
       "answer": 0,
       "explain": "A standard pre-closing line. · শেষ করার আগে বসানো প্রচলিত বাক্য।"
      },
      {
       "q": "{{l'entretien}} is… · {{l'entretien}} মানে…",
       "options": [
        "the entrance",
        "the interview",
        "the maintenance fee",
        "the entry form"
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
   "title": "Personal Letters",
   "subtitle": "Writing to a friend, and replying to an invitation · বন্ধুকে চিঠি লেখা আর নিমন্ত্রণের উত্তর দেওয়া",
   "minutes": 11,
   "goals": [
    "Open and close a friendly letter",
    "Accept or decline an invitation",
    "Switch comfortably between tu and vous"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Personal letters drop the heavy formulas entirely. The one thing that still matters is choosing {{tu}} or {{vous}} — and then staying with it. · ব্যক্তিগত চিঠিতে ভারী বাক্য লাগে না; কেবল tu না vous ঠিক করে নিন।"
    },
    {
     "type": "table",
     "head": [
      "Opening",
      "To whom",
      "Closing",
      "Warmth"
     ],
     "rows": [
      [
       "{{Cher Rahim,}}",
       "a male friend",
       "{{Amicalement,}}",
       "friendly"
      ],
      [
       "{{Chère Shila,}}",
       "a female friend",
       "{{Bien à toi,}}",
       "warm"
      ],
      [
       "{{Mon cher ami,}}",
       "a close friend",
       "{{Je t'embrasse,}}",
       "affectionate"
      ],
      [
       "{{Chers tous,}}",
       "a family",
       "{{Grosses bises,}}",
       "very informal"
      ]
     ],
     "title": "Openings and closings that match"
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
     "title": "Accepting and declining"
    },
    {
     "type": "rule",
     "name": "tu or vous — and stay there",
     "color": "orange",
     "desc": "{{tu}} for one friend, child or relative; {{vous}} for a stranger, an older person, anyone senior, and always for more than one person. · একজন বন্ধু বা শিশুকে tu; অপরিচিত, বড় বা একাধিক জনকে vous।",
     "examples": [
      {
       "t": "Comment vas-tu ?",
       "tr": "to a friend",
       "hl": "tu"
      },
      {
       "t": "Comment allez-vous ?",
       "tr": "to anyone else",
       "hl": "vous"
      },
      {
       "t": "On peut se tutoyer ?",
       "tr": "Shall we use tu? — the polite way to switch",
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
        "Shall we use tu?",
        "May I sit down?",
        "Shall we meet?",
        "Can you repeat?"
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
        "a close friend",
        "a brother",
        "more than one person",
        "a child"
       ],
       "answer": 2,
       "explain": "{{vous}} is both the polite and the plural form. · {{vous}} একাধারে ভদ্র ও বহুবচন রূপ।"
      },
      {
       "q": "{{Donne-moi de tes nouvelles}} means… · {{Donne-moi de tes nouvelles}} মানে…",
       "options": [
        "Give me the news",
        "Send me a newspaper",
        "Tell me a story",
        "Let me hear from you"
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
   "title": "CV & Job Interview",
   "subtitle": "Presenting yourself in French · ফরাসিতে নিজের পরিচয় দেওয়া",
   "minutes": 13,
   "goals": [
    "Lay out a French CV",
    "Answer the standard interview questions",
    "Describe your strengths without boasting"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A French CV is short, factual and reverse-chronological — newest first. Two pages at the very most, and one is better. · ফরাসি CV সংক্ষিপ্ত ও তথ্যভিত্তিক, নতুনতম তথ্য আগে।"
    },
    {
     "type": "table",
     "head": [
      "Section",
      "French heading",
      "What goes in it"
     ],
     "rows": [
      [
       "Personal details",
       "{{État civil}}",
       "name, address, telephone, email"
      ],
      [
       "Objective",
       "{{Objectif professionnel}}",
       "one line on the post you want"
      ],
      [
       "Education",
       "{{Formation}}",
       "degrees, newest first"
      ],
      [
       "Experience",
       "{{Expérience professionnelle}}",
       "jobs, newest first"
      ],
      [
       "Skills",
       "{{Compétences}}",
       "software, licences, technical skills"
      ],
      [
       "Languages",
       "{{Langues}}",
       "with a level for each"
      ],
      [
       "Interests",
       "{{Centres d'intérêt}}",
       "two or three lines only"
      ]
     ],
     "title": "The standard sections"
    },
    {
     "type": "rule",
     "name": "Describing your language level",
     "color": "blue",
     "desc": "Use the European levels or the standard phrases. Vague claims get tested in the interview. · ইউরোপীয় স্তর বা প্রচলিত বাক্যাংশ ব্যবহার করুন।",
     "examples": [
      {
       "t": "bangla : langue maternelle",
       "tr": "mother tongue",
       "hl": "maternelle"
      },
      {
       "t": "anglais : courant",
       "tr": "fluent",
       "hl": "courant"
      },
      {
       "t": "français : niveau intermédiaire (B1)",
       "tr": "intermediate",
       "hl": "intermédiaire"
      },
      {
       "t": "hindi : notions",
       "tr": "basic knowledge",
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
       "tr": "ewn ahn-truh-PREEZ · ্যুন আঁত্র্যপ্রিজ়",
       "mean": "a company · কোম্পানি"
      },
      {
       "t": "une formation",
       "tr": "ewn for-mah-SYOHN · ্যুন ফরমাসিয়ঁ",
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
     "type": "quiz",
     "items": [
      {
       "q": "{{Formation}} on a CV means… · CV-তে {{Formation}} মানে…",
       "options": [
        "education and training",
        "work experience",
        "personal details",
        "references"
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
        "by employer size",
        "newest first"
       ],
       "answer": 3,
       "explain": "Reverse chronological, like most of Europe. · নতুন থেকে পুরোনো ক্রমে, ইউরোপের অধিকাংশ দেশের মতো।"
      },
      {
       "q": "{{un poste}} means… · {{un poste}} মানে…",
       "options": [
        "a job",
        "the post office",
        "a postage stamp",
        "a posting abroad"
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
   "title": "Connective Words",
   "subtitle": "The joints that turn sentences into argument · যে জোড়াগুলো বাক্যকে যুক্তিতে পরিণত করে",
   "minutes": 12,
   "goals": [
    "Sequence ideas clearly",
    "Add, contrast and conclude",
    "Use bien que with the subjunctive"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Connectives are what separate a list of sentences from a piece of writing. They are also the quickest way to sound educated in a second language. · সংযোজক শব্দই বিচ্ছিন্ন বাক্যকে রচনায় পরিণত করে।"
    },
    {
     "type": "table",
     "head": [
      "Job",
      "Connectives",
      "Meaning"
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
       "however, nevertheless, on the other hand"
      ],
      [
       "cause",
       "{{car, parce que, en effet}}",
       "for, because, indeed"
      ],
      [
       "result",
       "{{donc, par conséquent, ainsi}}",
       "so, consequently, thus"
      ],
      [
       "clarify",
       "{{c'est-à-dire, autrement dit}}",
       "that is to say, in other words"
      ]
     ],
     "title": "The working set"
    },
    {
     "type": "rule",
     "name": "A few take the subjunctive",
     "color": "purple",
     "desc": "{{bien que}}, {{quoique}}, {{avant que}} and {{pour que}} all demand the subjunctive you met in Unit 3. · এই সংযোজকগুলোর পরে subjonctif বসে।",
     "examples": [
      {
       "t": "bien qu'il soit fatigué",
       "tr": "although he is tired",
       "hl": "soit"
      },
      {
       "t": "pour que vous puissiez comprendre",
       "tr": "so that you can understand",
       "hl": "puissiez"
      },
      {
       "t": "avant qu'il parte",
       "tr": "before he leaves",
       "hl": "parte"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "non seulement… mais aussi…",
       "tr": "nohn suhl-mahn… may oh-SEE · নঁ স্যল্‌মাঁ… মে অসি",
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
     "title": "Phrases worth owning"
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
     "type": "quiz",
     "items": [
      {
       "q": "{{cependant}} means… · {{cependant}} মানে…",
       "options": [
        "finally",
        "however",
        "therefore",
        "because"
       ],
       "answer": 1,
       "explain": "A contrast word, like {{néanmoins}}. · বৈপরীত্যবাচক শব্দ, {{néanmoins}}-এর মতো।"
      },
      {
       "q": "{{bien que}} is followed by… · {{bien que}}-এর পরে বসে…",
       "options": [
        "the conditional",
        "the imperative",
        "the subjunctive",
        "the future"
       ],
       "answer": 2,
       "explain": "{{bien qu'il soit}}, never *bien qu'il est*. · {{bien qu'il soit}}, কখনোই *bien qu'il est* নয়।"
      },
      {
       "q": "{{c'est-à-dire}} means… · {{c'est-à-dire}} মানে…",
       "options": [
        "it is said",
        "it must be said",
        "say it again",
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
