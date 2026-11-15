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
      "Person · পুরুষ",
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
     "name": "The -iss- that marks group two · দ্বিতীয় দলের চিহ্ন -iss-",
     "color": "blue",
     "desc": "True second-group verbs insert **-iss-** in the plural. If a verb ends in -ir but has no -iss-, it is irregular. · দ্বিতীয় দলের ক্রিয়া বহুবচনে -iss- নেয়।",
     "examples": [
      {
       "t": "nous finissons",
       "tr": "we finish · আমরা শেষ করি",
       "hl": "iss"
      },
      {
       "t": "ils choisissent",
       "tr": "they choose · তারা বেছে নেয়",
       "hl": "iss"
      },
      {
       "t": "nous partons",
       "tr": "we leave — no -iss-, so irregular · আমরা রওনা দিই — -iss- নেই, তাই অনিয়মিত",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Prof",
       "t": "Vous finissez l'exercice ?",
       "tr": "voo fee-nee-SAY lek-sehr-SEES · ভু ফিনিসে লেক্সের্সিস্",
       "mean": "Are you finishing the exercise? · অনুশীলনটা শেষ করছেন?"
      },
      {
       "who": "Rima",
       "t": "Nous finissons maintenant, monsieur.",
       "tr": "noo fee-nee-SOHN mahnt-NAHN muh-SYUH · নু ফিনিসঁ মাঁত্নঁ, ম্যসীয়ো",
       "mean": "We are finishing now, sir. · এখনই শেষ করছি, স্যার।"
      },
      {
       "who": "Prof",
       "t": "Et après, vous partez ?",
       "tr": "ay ah-PREH voo pahr-TAY · এ আপ্রে, ভু পার্তে",
       "mean": "And afterwards, are you leaving? · তারপর কি চলে যাবেন?"
      },
      {
       "who": "Rima",
       "t": "Non, nous attendons les autres.",
       "tr": "nohn noo zah-tahn-DOHN lay ZOHTR · নঁ, নুজ়্ আতঁদঁ লেজ়োত্র্",
       "mean": "No, we are waiting for the others. · না, আমরা বাকিদের জন্য অপেক্ষা করছি।"
      }
     ]
    },
    {
     "t": "Nous finissons le travail et nous partons.",
     "tr": "noo fee-nee-SOHN luh trah-VYE ay noo pahr-TOHN · নু ফিনিসঁ ল্য ত্রাভাই এ নু পার্তঁ",
     "mean": "We finish the work and we leave. · আমরা কাজ শেষ করে রওনা দিই।",
     "words": [
      {
       "t": "Nous",
       "mean": "we · আমরা"
      },
      {
       "t": "finissons",
       "mean": "finish · শেষ করি"
      },
      {
       "t": "le",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "travail",
       "mean": "work · কাজ"
      },
      {
       "t": "et",
       "mean": "and · এবং"
      },
      {
       "t": "nous",
       "mean": "we · আমরা"
      },
      {
       "t": "partons",
       "mean": "leave · রওনা দিই"
      }
     ],
     "note": "Both verbs end in **-ir**, but only **finir** takes the **-iss-**. That syllable is what separates the second group from the third. · দুটিই **-ir**, তবু কেবল **finir** নেয় **-iss-**।",
     "type": "sentence"
    },
    {
     "t": "Vous choisissez pendant que nous attendons.",
     "tr": "voo shwah-zee-SAY pahn-dahn kuh noo zah-tahn-DOHN · ভু শোয়াজ়িসে পঁদঁ ক্য নুজ়্ আতঁদঁ",
     "mean": "You choose while we wait. · আপনি বেছে নিন, আমরা অপেক্ষা করছি।",
     "words": [
      {
       "t": "Vous",
       "mean": "you · আপনি"
      },
      {
       "t": "choisissez",
       "mean": "choose — second group · দ্বিতীয় দল"
      },
      {
       "t": "pendant",
       "mean": "during · চলাকালে"
      },
      {
       "t": "que",
       "mean": "that · যে"
      },
      {
       "t": "nous",
       "mean": "we · আমরা"
      },
      {
       "t": "attendons",
       "mean": "wait — third group · তৃতীয় দল"
      }
     ],
     "note": "**choisir** keeps the **-iss-** and **attendre** drops its **-re**: the second and third groups side by side. · দ্বিতীয় দল **-iss-** রাখে, তৃতীয় দল **-re** ফেলে দেয়।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Conjugate aloud, then listen for which endings you actually hear. · জোরে রূপ বলুন, শুনুন কোনগুলো আসলে শোনা যায়।",
     "lines": [
      {
       "t": "je parle, tu parles, il parle, ils parlent",
       "mean": "I speak, you speak, he speaks, they speak · আমি বলি, তুমি বলো, সে বলে, তারা বলে"
      },
      {
       "t": "nous parlons, vous parlez",
       "mean": "we speak, you speak · আমরা বলি, আপনারা বলেন"
      },
      {
       "t": "je finis, nous finissons",
       "mean": "I finish, we finish · আমি শেষ করি, আমরা শেষ করি"
      },
      {
       "t": "il attend, ils attendent",
       "mean": "he waits, they wait · সে অপেক্ষা করে, তারা অপেক্ষা করে"
      }
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
        "no group · কোনো দল নেই",
        "group two · দ্বিতীয় দল",
        "group one · প্রথম দল",
        "group three · তৃতীয় দল"
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
        "It ends in -ir · এটি -ir-এ শেষ হয়",
        "It takes être",
        "It has an accent · এতে উচ্চারণচিহ্ন আছে",
        "It has no -iss- in the plural · বহুবচনে এতে -iss- নেই"
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
      "Person · পুরুষ",
      "être (be) · être (হওয়া)",
      "avoir (have) · avoir (থাকা)",
      "aller (go) · aller (যাওয়া)",
      "faire (do) · faire (করা)"
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
     "name": "avoir where English says to be · ইংরেজিতে যেখানে to be, ফরাসিতে avoir",
     "color": "orange",
     "desc": "French uses **avoir** for age, hunger, thirst, fear, cold and heat. Saying {{je suis 28}} is a classic beginner error. · বয়স, খিদে, তৃষ্ণা, ভয়, শীত ও গরম বোঝাতে ফরাসি avoir ব্যবহার করে।",
     "examples": [
      {
       "t": "J'ai vingt-huit ans.",
       "tr": "I am twenty-eight. · আমার বয়স আটাশ।",
       "hl": "ai"
      },
      {
       "t": "J'ai faim et j'ai soif.",
       "tr": "I am hungry and thirsty. · আমার খিদে ও তেষ্টা পেয়েছে।",
       "hl": "ai"
      },
      {
       "t": "Il a froid.",
       "tr": "He is cold. · তার শীত করছে।",
       "hl": "a"
      },
      {
       "t": "Vous avez raison.",
       "tr": "You are right. · আপনি ঠিক বলেছেন।",
       "hl": "avez"
      }
     ]
    },
    {
     "type": "rule",
     "name": "faire for weather and activities · আবহাওয়া ও কাজকর্মে faire",
     "color": "green",
     "desc": "{{faire}} covers the weather and most sports and chores. · আবহাওয়া ও অধিকাংশ কাজকর্মে faire বসে।",
     "examples": [
      {
       "t": "Il fait beau.",
       "tr": "The weather is fine. · আবহাওয়া চমৎকার।",
       "hl": "fait"
      },
      {
       "t": "Il fait froid aujourd'hui.",
       "tr": "It is cold today. · আজ শীত করছে।",
       "hl": "fait"
      },
      {
       "t": "Je fais la cuisine.",
       "tr": "I do the cooking. · আমি রান্না করি।",
       "hl": "fais"
      },
      {
       "t": "Elle fait du sport.",
       "tr": "She does sport. · সে খেলাধুলা করে।",
       "hl": "fait"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Salim",
       "t": "Où vas-tu si vite ?",
       "tr": "oo vah TEW see VEET · উ ভা-ত্যু সি ভিত্",
       "mean": "Where are you going in such a hurry? · এত তাড়াহুড়ো করে কোথায় যাচ্ছ?"
      },
      {
       "who": "Rima",
       "t": "Je vais au bureau. J'ai une réunion.",
       "tr": "zhuh veh oh bew-ROH zhay ewn ray-ew-NYOHN · জ়্য ভে ও ব্যুরো। জ়ে ্যুন্ রেয়্যুনীয়ঁ",
       "mean": "I am going to the office. I have a meeting. · অফিসে যাচ্ছি। একটা সভা আছে।"
      },
      {
       "who": "Salim",
       "t": "Tu fais quoi, exactement ?",
       "tr": "tew feh KWAH eg-zak-tuh-MAHN · ত্যু ফে কোয়া, এগজ়াক্ত্যমঁ",
       "mean": "What do you do, exactly? · ঠিক কী কাজ কর?"
      },
      {
       "who": "Rima",
       "t": "Je suis traductrice. Nous sommes quatre au bureau.",
       "tr": "zhuh swee trah-dewk-TREES noo som KAHTR oh bew-ROH · জ়্য সুই ত্রাদ্যুক্ত্রিস্। নু সম্ কাত্র্ ও ব্যুরো",
       "mean": "I am a translator. There are four of us in the office. · আমি অনুবাদক। অফিসে আমরা চারজন।"
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
     "t": "Nous allons faire ce que vous avez dit.",
     "tr": "noo zah-LOHN FEHR suh kuh voo zah-vay DEE · নুজ়্ আলঁ ফের্ স্য ক্য ভুজ়্ আভে দি",
     "mean": "We are going to do what you said. · আপনি যা বলেছেন, আমরা তাই করব।",
     "words": [
      {
       "t": "Nous",
       "mean": "we · আমরা"
      },
      {
       "t": "allons",
       "mean": "are going · যাচ্ছি"
      },
      {
       "t": "faire",
       "mean": "to do · করতে"
      },
      {
       "t": "ce",
       "mean": "that · তা"
      },
      {
       "t": "que",
       "mean": "which · যা"
      },
      {
       "t": "vous",
       "mean": "you · আপনি"
      },
      {
       "t": "avez",
       "mean": "have (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "dit",
       "mean": "said · বলেছেন"
      }
     ],
     "note": "All four of the big verbs are here or implied: **aller** carries the future, **faire** the action, **avoir** the past, and **être** waits in the wings. · চারটি প্রধান ক্রিয়ার তিনটিই এক বাক্যে।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud twice. These four verbs carry half of everyday French. · দুবার করে পড়ুন; দৈনন্দিন ফরাসির অর্ধেকই এই চারটি ক্রিয়া।",
     "lines": [
      {
       "t": "Je suis fatigué, mais j'ai le temps.",
       "mean": "I am tired, but I have time · ক্লান্ত, তবু সময় আছে"
      },
      {
       "t": "Nous allons au marché et nous faisons les courses.",
       "mean": "We go to the market and do the shopping · বাজারে গিয়ে কেনাকাটা করি"
      },
      {
       "t": "Vous êtes en retard ce matin.",
       "mean": "You are late this morning · আজ সকালে আপনি দেরি করেছেন"
      },
      {
       "t": "Elle fait du thé pour ses amis.",
       "mean": "She is making tea for her friends · সে বন্ধুদের জন্য চা বানাচ্ছে"
      },
      {
       "t": "Ils ont faim et ils vont manger.",
       "mean": "They are hungry and are going to eat · তাদের খিদে পেয়েছে, খেতে যাচ্ছে"
      }
     ]
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
      "Infinitive ending · ক্রিয়ামূলের শেষাংশ",
      "Participle ending · কৃদন্তের শেষাংশ",
      "Example · উদাহরণ",
      "Meaning · অর্থ"
     ],
     "rows": [
      [
       "-er",
       "-é",
       "{{parler → parlé}}",
       "spoken"
      ],
      [
       "-ir (group 2) · -ir (দ্বিতীয় দল)",
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
     "name": "Most verbs take avoir · বেশির ভাগ ক্রিয়া avoir নেয়",
     "color": "blue",
     "desc": "The default helper is {{avoir}}. The participle does **not** change for the subject. · সাধারণ সহায়ক avoir; participle কর্তার সঙ্গে বদলায় না।",
     "examples": [
      {
       "t": "J'ai parlé à Salim.",
       "tr": "I spoke to Salim. · আমি সেলিমের সঙ্গে কথা বলেছি।",
       "hl": "ai parlé"
      },
      {
       "t": "Nous avons fini le travail.",
       "tr": "We finished the work. · আমরা কাজটি শেষ করেছি।",
       "hl": "avons fini"
      },
      {
       "t": "Elle a vendu sa voiture.",
       "tr": "She sold her car. · সে তার গাড়ি বিক্রি করেছে।",
       "hl": "a vendu"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Movement verbs take être · গমনের ক্রিয়া être নেয়",
     "color": "red",
     "desc": "About fourteen verbs of coming and going use {{être}} — and then the participle **agrees** with the subject like an adjective. · যাতায়াতের প্রায় চোদ্দটি ক্রিয়া être নেয়, আর তখন participle কর্তার সঙ্গে মেলে।",
     "examples": [
      {
       "t": "Il est allé à Paris.",
       "tr": "He went to Paris. · সে প্যারিসে গিয়েছিল।",
       "hl": "est allé"
      },
      {
       "t": "Elle est allée à Paris.",
       "tr": "She went to Paris — extra e · সে প্যারিসে গিয়েছিল — বাড়তি e",
       "hl": "allée"
      },
      {
       "t": "Ils sont arrivés hier.",
       "tr": "They arrived yesterday — extra s · তারা গতকাল এসেছিল — বাড়তি s",
       "hl": "arrivés"
      },
      {
       "t": "Elles sont parties tôt.",
       "tr": "They (f.) left early — es · তারা স্ত্রীলিঙ্গে আগেই রওনা দিয়েছিল — es",
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
     "name": "Irregular participles worth memorising · মুখস্থ রাখার মতো অনিয়মিত কৃদন্ত",
     "color": "purple",
     "desc": "The commonest verbs have participles you simply have to know. · সবচেয়ে ব্যবহৃত ক্রিয়ার participle মুখস্থ করতে হয়।",
     "examples": [
      {
       "t": "avoir → eu · être → été",
       "tr": "had · been · পাওয়া · হওয়া",
       "hl": "eu"
      },
      {
       "t": "faire → fait · prendre → pris",
       "tr": "done · taken · করা · নেওয়া",
       "hl": "fait"
      },
      {
       "t": "voir → vu · boire → bu",
       "tr": "seen · drunk · দেখা · পান করা",
       "hl": "vu"
      },
      {
       "t": "écrire → écrit · dire → dit",
       "tr": "written · said · লেখা · বলা",
       "hl": "écrit"
      },
      {
       "t": "venir → venu · pouvoir → pu",
       "tr": "come · been able · আসা · পারা",
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
       "title": "Choose the helper · সহকারী ক্রিয়া বাছুন",
       "t": "avoir or être ?",
       "mean": "Movement or reflexive → être. Everything else → avoir. · যাতায়াত বা reflexive → être। বাকি সব → avoir।"
      },
      {
       "title": "Put it in the present · বর্তমান কালে বসান",
       "t": "j'ai … / je suis …",
       "mean": "Conjugate the helper for the subject. · কর্তা অনুযায়ী সহায়ক ক্রিয়ার রূপ বসান।"
      },
      {
       "title": "Add the participle · কৃদন্তপদ যোগ করুন",
       "t": "parlé / allé",
       "mean": "Regular ending, or a memorised irregular. · নিয়মিত শেষাংশ, কিংবা মুখস্থ করা অনিয়মিত রূপ।"
      },
      {
       "title": "Check agreement · মিল যাচাই করুন",
       "t": "allée, allés, allées",
       "mean": "Only with être — or with avoir when the object came first. · কেবল être-এর সঙ্গে — অথবা avoir-এর সঙ্গে যখন কর্ম আগে বসে।"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Tu as bien dormi cette nuit ?",
       "tr": "tew ah byahn dor-MEE set NWEE · ত্যু আ বীয়াঁ দর্মি সেত্ নুই",
       "mean": "Did you sleep well last night? · কাল রাতে ভালো ঘুম হয়েছে?"
      },
      {
       "who": "Salim",
       "t": "Pas très bien. Je me suis couché à minuit.",
       "tr": "pah treh BYAHN zhuh muh swee koo-SHAY ah mee-NWEE · পা ত্রে বীয়াঁ। জ়্য ম্য সুই কুশে আ মিনুই",
       "mean": "Not very well. I went to bed at midnight. · তেমন না। মাঝরাতে শুয়েছি।"
      },
      {
       "who": "Rima",
       "t": "Pourquoi ? Tu as travaillé tard ?",
       "tr": "poor-KWAH tew ah trah-vah-YAY TAHR · পুর্কোয়া? ত্যু আ ত্রাভাইয়ে তার্",
       "mean": "Why? Did you work late? · কেন? দেরি পর্যন্ত কাজ করেছ?"
      },
      {
       "who": "Salim",
       "t": "Oui, et ma sœur est arrivée à onze heures.",
       "tr": "WEE ay mah SUHR eh tah-ree-VAY ah ohn ZUHR · উই, এ মা স্যর্ এত্ আরিভে আ অঁজ়্ ্যর্",
       "mean": "Yes, and my sister arrived at eleven. · হ্যাঁ, আর আমার বোন এগারোটায় এসেছিল।"
      }
     ]
    },
    {
     "t": "Elle est arrivée et elle a pris le train.",
     "tr": "el eh tah-ree-VAY ay el ah pree luh TRAHN · এল্ এত্ আরিভে এ এল্ আ প্রি ল্য ত্রাঁ",
     "mean": "She arrived and she took the train. · সে এসে ট্রেন ধরেছিল।",
     "words": [
      {
       "t": "Elle",
       "mean": "she · সে"
      },
      {
       "t": "est",
       "mean": "is (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "arrivée",
       "mean": "arrived (feminine) · এসেছিল"
      },
      {
       "t": "et",
       "mean": "and · এবং"
      },
      {
       "t": "elle",
       "mean": "she · সে"
      },
      {
       "t": "a",
       "mean": "has (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "pris",
       "mean": "taken · ধরেছিল"
      },
      {
       "t": "le",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "train",
       "mean": "train · ট্রেন"
      }
     ],
     "note": "One sentence, two helpers. **arriver** takes **être** and agrees, so it gains an e; **prendre** takes **avoir** and does not. · একই বাক্যে দুই সহকারী — একটিতে মিল ঘটে, অন্যটিতে নয়।",
     "type": "sentence"
    },
    {
     "t": "Les lettres que j'ai écrites sont parties ce matin.",
     "tr": "lay LETR kuh zhay ay-KREET sohn pahr-TEE suh mah-TAHN · লে লেত্র্ ক্য জ়ে একিত্ সঁ পার্তি স্য মাতাঁ",
     "mean": "The letters I wrote went off this morning. · যে চিঠিগুলো লিখেছিলাম, সেগুলো আজ সকালে চলে গেছে।",
     "words": [
      {
       "t": "Les",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "lettres",
       "mean": "letters · চিঠিগুলো"
      },
      {
       "t": "que",
       "mean": "which · যা"
      },
      {
       "t": "j'ai",
       "mean": "I have (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "écrites",
       "mean": "written (agreeing) · লিখেছিলাম"
      },
      {
       "t": "sont",
       "mean": "are (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "parties",
       "mean": "gone (agreeing) · চলে গেছে"
      },
      {
       "t": "ce",
       "mean": "this · এই"
      },
      {
       "t": "matin",
       "mean": "morning · সকাল"
      }
     ],
     "note": "Both participles agree, for different reasons: **écrites** because its object came first, **parties** because **partir** takes **être**. · দুটিতেই মিল ঘটেছে, তবে কারণ দুটি আলাদা।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. Hear the helper first, then the participle: two beats, one tense. · জোরে পড়ুন; আগে সহকারী, পরে কৃদন্তপদ — দুই মাত্রা, এক কাল।",
     "lines": [
      {
       "t": "J'ai parlé à Salim hier soir.",
       "mean": "I spoke to Salim last night · গতরাতে সেলিমের সঙ্গে কথা বলেছি"
      },
      {
       "t": "Nous avons fini le travail à temps.",
       "mean": "We finished the work on time · সময়মতো কাজ শেষ করেছি"
      },
      {
       "t": "Il est allé à Paris en train.",
       "mean": "He went to Paris by train · সে ট্রেনে প্যারিস গিয়েছিল"
      },
      {
       "t": "Elle est arrivée très tôt ce matin.",
       "mean": "She arrived very early this morning · সে আজ খুব সকালে এসেছে"
      },
      {
       "t": "Ils sont partis sans rien dire.",
       "mean": "They left without saying anything · তারা কিছু না বলেই চলে গেল"
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
        "Because lettres is feminine · কারণ lettres স্ত্রীলিঙ্গ",
        "Because the helper is avoir · কারণ সহায়ক ক্রিয়া avoir",
        "It is an exception verb · এটি ব্যতিক্রমী ক্রিয়া",
        "The direct object comes before the verb · প্রত্যক্ষ কর্ম ক্রিয়ার আগে বসে"
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
     "name": "One stem, no exceptions but être · এক ধাতু, être ছাড়া ব্যতিক্রম নেই",
     "color": "green",
     "desc": "Take the **nous** form of the present, drop **-ons**, add the endings. Only {{être}} breaks this, using the stem **ét-**. · nous রূপ থেকে -ons বাদ দিন, তারপর শেষাংশ যোগ করুন।",
     "examples": [
      {
       "t": "nous parlons → je parlais",
       "tr": "I was speaking · আমি বলছিলাম",
       "hl": "parlais"
      },
      {
       "t": "nous finissons → je finissais",
       "tr": "I was finishing · আমি শেষ করছিলাম",
       "hl": "finissais"
      },
      {
       "t": "nous faisons → je faisais",
       "tr": "I was doing · আমি করছিলাম",
       "hl": "faisais"
      },
      {
       "t": "être → j'étais",
       "tr": "I was — the only irregular · আমি ছিলাম — একমাত্র অনিয়মিত",
       "hl": "étais"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Person · পুরুষ",
      "Ending · শেষাংশ",
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
     "name": "When to choose the imparfait · কখন অসমাপিকা অতীত বাছবেন",
     "color": "blue",
     "desc": "Use it for habits, descriptions, ages, weather, feelings and time of day in the past. · অভ্যাস, বর্ণনা, বয়স, আবহাওয়া ও অনুভূতির জন্য imparfait।",
     "examples": [
      {
       "t": "Quand j'étais petit, j'habitais à Sylhet.",
       "tr": "When I was small, I lived in Sylhet. · ছোটবেলায় আমি সিলেটে থাকতাম।",
       "hl": "étais"
      },
      {
       "t": "Il était huit heures.",
       "tr": "It was eight o'clock. · তখন আটটা বেজেছিল।",
       "hl": "était"
      },
      {
       "t": "Elle avait l'air fatiguée.",
       "tr": "She looked tired. · তাকে ক্লান্ত দেখাচ্ছিল।",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Grand-père",
       "t": "Quand j'étais jeune, il n'y avait pas de voitures ici.",
       "tr": "kahn zhay-teh ZHUHN eel nee ah-veh pah duh vwah-TEWR ee-SEE · কঁ জ়েতে জ়্যন্, ইল্ নি আভে পা দ্য ভোয়াত্যুর্ ইসি",
       "mean": "When I was young, there were no cars here. · আমার যৌবনে এখানে গাড়ি ছিল না।"
      },
      {
       "who": "Rima",
       "t": "Et comment alliez-vous à l'école ?",
       "tr": "ay koh-mahn tah-lyay VOO ah lay-KOL · এ কমঁ তালীয়ে-ভু আ লেকল্",
       "mean": "And how did you get to school? · তাহলে স্কুলে যেতেন কীভাবে?"
      },
      {
       "who": "Grand-père",
       "t": "Nous marchions, tous les jours, par tous les temps.",
       "tr": "noo mahr-SHYOHN too lay ZHOOR pahr too lay TAHN · নু মার্শীয়ঁ, তু লে জ়ুর্, পার্ তু লে তঁ",
       "mean": "We walked, every day, in all weathers. · রোজ হেঁটে যেতাম, যে আবহাওয়াই হোক।"
      },
      {
       "who": "Rima",
       "t": "C'était difficile, mais c'était une belle époque.",
       "tr": "say-teh dee-fee-SEEL meh say-teh tewn bel ay-POK · সেতে দিফিসিল্, মে সেতেত্ ্যুন্ বেল্ এপক্",
       "mean": "It was hard, but it was a fine time. · কঠিন ছিল, তবু সুন্দর সময় ছিল।"
      }
     ]
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
     "t": "Je lisais quand le téléphone a sonné.",
     "tr": "zhuh lee-ZEH kahn luh tay-lay-FON ah soh-NAY · জ়্য লিজ়ে কঁ ল্য তেলেফন্ আ সনে",
     "mean": "I was reading when the telephone rang. · ফোন বাজার সময় আমি পড়ছিলাম।",
     "words": [
      {
       "t": "Je",
       "mean": "I · আমি"
      },
      {
       "t": "lisais",
       "mean": "was reading · পড়ছিলাম"
      },
      {
       "t": "quand",
       "mean": "when · যখন"
      },
      {
       "t": "le",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "téléphone",
       "mean": "telephone · ফোন"
      },
      {
       "t": "a",
       "mean": "has (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "sonné",
       "mean": "rang · বাজল"
      }
     ],
     "note": "The clearest test of the two past tenses: the imparfait is the room you were in, the passé composé is what walked through the door. · imparfait হলো পটভূমি, passé composé হলো ঘটনা।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud, slowly. The imparfait has no edges: it describes, it does not report. · ধীরে পড়ুন; imparfait বর্ণনা করে, ঘটনা জানায় না।",
     "lines": [
      {
       "t": "Quand j'étais petit, j'habitais à Sylhet.",
       "mean": "When I was small, I lived in Sylhet · ছোটবেলায় সিলেটে থাকতাম"
      },
      {
       "t": "Il faisait beau et les oiseaux chantaient.",
       "mean": "The weather was fine and the birds were singing · আবহাওয়া ভালো ছিল, পাখি গাইছিল"
      },
      {
       "t": "Nous allions à l'école ensemble.",
       "mean": "We used to go to school together · আমরা একসঙ্গে স্কুলে যেতাম"
      },
      {
       "t": "Elle avait l'air fatiguée ce jour-là.",
       "mean": "She looked tired that day · সেদিন তাকে ক্লান্ত দেখাচ্ছিল"
      },
      {
       "t": "Il était huit heures du soir.",
       "mean": "It was eight in the evening · তখন রাত আটটা"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The imparfait stem comes from… · imparfait-এর মূল আসে…",
       "options": [
        "the nous form of the present · বর্তমানের nous রূপ",
        "the infinitive · ক্রিয়ামূল",
        "the je form of the present · বর্তমানের je রূপ",
        "the past participle · অতীত কৃদন্ত"
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
        "used to · আগে করত",
        "has just · এইমাত্র করেছে",
        "will have · থাকবে",
        "did once · একবার করেছিল"
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
     "name": "Futur proche: aller + infinitive · নিকট ভবিষ্যৎ: aller + ক্রিয়ামূল",
     "color": "green",
     "desc": "Exactly like English *going to*. Conjugate {{aller}}, then add the plain infinitive. · ইংরেজি going to-এর মতো।",
     "examples": [
      {
       "t": "Je vais partir.",
       "tr": "I am going to leave. · আমি রওনা দিতে যাচ্ছি।",
       "hl": "vais partir"
      },
      {
       "t": "Nous allons manger.",
       "tr": "We are going to eat. · আমরা খেতে যাচ্ছি।",
       "hl": "allons manger"
      },
      {
       "t": "Il va pleuvoir.",
       "tr": "It is going to rain. · বৃষ্টি হতে যাচ্ছে।",
       "hl": "va pleuvoir"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Futur simple: infinitive + endings · সরল ভবিষ্যৎ: ক্রিয়ামূল + শেষাংশ",
     "color": "blue",
     "desc": "Add **-ai, -as, -a, -ons, -ez, -ont** straight onto the infinitive. For -re verbs, drop the final e first. · infinitive-এর সঙ্গে শেষাংশ যোগ করুন।",
     "examples": [
      {
       "t": "parler → je parlerai",
       "tr": "I shall speak · আমি বলব",
       "hl": "parlerai"
      },
      {
       "t": "finir → tu finiras",
       "tr": "you will finish · তুমি শেষ করবে",
       "hl": "finiras"
      },
      {
       "t": "vendre → il vendra",
       "tr": "he will sell — the e is dropped · সে বিক্রি করবে — e বাদ যায়",
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
      "Verb · ক্রিয়া",
      "Future stem",
      "Example · উদাহরণ",
      "Meaning · অর্থ"
     ],
     "rows": [
      [
       "{{être}}",
       "ser-",
       "{{je serai}}",
       "I shall be · আমি হব"
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
       "I shall be able · আমি পারব"
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Salim",
       "t": "Qu'est-ce que tu vas faire demain ?",
       "tr": "kes kuh tew vah FEHR duh-MAHN · কেস্ ক্য ত্যু ভা ফের্ দ্যমাঁ",
       "mean": "What are you going to do tomorrow? · কাল কী করবে?"
      },
      {
       "who": "Rima",
       "t": "Je vais rester à la maison. Et toi ?",
       "tr": "zhuh veh res-TAY ah lah meh-ZOHN ay TWAH · জ়্য ভে রেস্তে আ লা মেজ়ঁ। এ তোয়া",
       "mean": "I am going to stay at home. And you? · বাড়িতেই থাকব। তুমি?"
      },
      {
       "who": "Salim",
       "t": "Je partirai tôt et je reviendrai dimanche.",
       "tr": "zhuh pahr-tee-RAY TOH ay zhuh ruh-vyahn-DRAY dee-MAHNSH · জ়্য পার্তিরে তো এ জ়্য র্যভীয়াঁদ্রে দিমঁশ্",
       "mean": "I shall leave early and come back on Sunday. · সকালে রওনা দেব, রবিবার ফিরব।"
      },
      {
       "who": "Rima",
       "t": "Tu verras, il fera beau.",
       "tr": "tew veh-RAH eel fuh-rah BOH · ত্যু ভেরা, ইল্ ফ্যরা বো",
       "mean": "You will see, the weather will be fine. · দেখো, আবহাওয়া ভালো থাকবে।"
      }
     ]
    },
    {
     "t": "Demain je partirai mais aujourd'hui je vais rester.",
     "tr": "duh-MAHN zhuh pahr-tee-RAY meh oh-zhoor-DWEE zhuh veh res-TAY · দ্যমাঁ জ়্য পার্তিরে মে ওজ়ুর্দুই জ়্য ভে রেস্তে",
     "mean": "Tomorrow I shall leave, but today I am going to stay. · কাল রওনা দেব, তবে আজ থাকব।",
     "words": [
      {
       "t": "Demain",
       "mean": "tomorrow · আগামীকাল"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "partirai",
       "mean": "shall leave · রওনা দেব"
      },
      {
       "t": "mais",
       "mean": "but · কিন্তু"
      },
      {
       "t": "aujourd'hui",
       "mean": "today · আজ"
      },
      {
       "t": "je",
       "mean": "I · আমি"
      },
      {
       "t": "vais",
       "mean": "am going · যাচ্ছি"
      },
      {
       "t": "rester",
       "mean": "to stay · থাকতে"
      }
     ],
     "note": "Both halves are future. **partirai** is one word; **vais rester** is two, and the second verb stays in its plain form. · দুটোই ভবিষ্যৎ; দ্বিতীয়টিতে ক্রিয়া মূল রূপেই থাকে।",
     "type": "sentence"
    },
    {
     "t": "Quand tu arriveras, nous serons déjà partis.",
     "tr": "kahn tew ah-ree-vuh-RAH noo suh-ROHN day-zhah pahr-TEE · কঁ ত্যু আরিভ্যরা, নু স্যরঁ দেজ়া পার্তি",
     "mean": "When you arrive, we shall already have left. · তুমি যখন পৌঁছবে, আমরা তখন রওনা দিয়ে ফেলেছি।",
     "words": [
      {
       "t": "Quand",
       "mean": "when · যখন"
      },
      {
       "t": "tu",
       "mean": "you · তুমি"
      },
      {
       "t": "arriveras",
       "mean": "will arrive · পৌঁছবে"
      },
      {
       "t": "nous",
       "mean": "we · আমরা"
      },
      {
       "t": "serons",
       "mean": "shall be · থাকব"
      },
      {
       "t": "déjà",
       "mean": "already · ইতিমধ্যেই"
      },
      {
       "t": "partis",
       "mean": "gone · রওনা দিয়ে"
      }
     ],
     "note": "After **quand** French uses the future where English uses the present. *When you arrive* is **quand tu arriveras**, never **quand tu arrives**. · **quand**-এর পরে ফরাসি ভবিষ্যৎ কাল নেয়, ইংরেজি বর্তমান।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each pair aloud. The near future is going to happen; the simple future simply will. · প্রতিটি জোড়া পড়ুন; একটি এখনই ঘটতে যাচ্ছে, অন্যটি ভবিষ্যতে ঘটবে।",
     "lines": [
      {
       "t": "Je vais partir dans cinq minutes.",
       "mean": "I am going to leave in five minutes · পাঁচ মিনিটে রওনা দিচ্ছি"
      },
      {
       "t": "Je partirai la semaine prochaine.",
       "mean": "I shall leave next week · আগামী সপ্তাহে রওনা দেব"
      },
      {
       "t": "Il va pleuvoir, prends ton parapluie.",
       "mean": "It is going to rain, take your umbrella · বৃষ্টি আসছে, ছাতা নাও"
      },
      {
       "t": "Nous finirons ce travail demain.",
       "mean": "We shall finish this work tomorrow · কালই কাজটা শেষ করব"
      },
      {
       "t": "Tu verras, tout ira bien.",
       "mean": "You will see, all will be well · দেখো, সব ঠিক হয়ে যাবে"
      }
     ]
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
        "future in both halves · দুই অংশেই ভবিষ্যৎ",
        "present then future · বর্তমান তারপর ভবিষ্যৎ",
        "present in both halves · দুই অংশেই বর্তমান",
        "past then future · অতীত তারপর ভবিষ্যৎ"
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
     "name": "Future stem + imparfait endings · ভবিষ্যৎ ধাতু + অসমাপিকা অতীতের শেষাংশ",
     "color": "blue",
     "desc": "If you know the future, you already know the conditional. · ভবিষ্যৎ জানলে conditionnel আপনার জানা।",
     "examples": [
      {
       "t": "je parlerai → je parlerais",
       "tr": "I would speak · আমি বলতাম",
       "hl": "parlerais"
      },
      {
       "t": "j'aurai → j'aurais",
       "tr": "I would have · আমার থাকত",
       "hl": "aurais"
      },
      {
       "t": "je serai → je serais",
       "tr": "I would be · আমি হতাম",
       "hl": "serais"
      },
      {
       "t": "je viendrai → je viendrais",
       "tr": "I would come · আমি আসতাম",
       "hl": "viendrais"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Politeness, the French way · ভদ্রতা, ফরাসি রীতিতে",
     "color": "green",
     "desc": "A request in the present sounds blunt. The conditional turns an order into an offer. · বর্তমান কালে অনুরোধ রূক্ষ শোনায়; conditionnel তাকে ভদ্র করে।",
     "examples": [
      {
       "t": "Je veux un café. → Je voudrais un café.",
       "tr": "I want → I would like · আমি চাই → আমি চাইছি, নম্র রূপ",
       "hl": "voudrais"
      },
      {
       "t": "Pouvez-vous m'aider ? → Pourriez-vous m'aider ?",
       "tr": "Can you → Could you · আপনি পারেন → আপনি কি পারবেন",
       "hl": "Pourriez"
      },
      {
       "t": "Vous devez partir. → Vous devriez partir.",
       "tr": "You must → You should · আপনাকে করতেই হবে → আপনার করা উচিত",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Pourriez-vous m'aider un instant ?",
       "tr": "poo-ryay VOO meh-day uhn nahn-STAHN · পুরীয়ে-ভু মেদে আঁন্ আঁস্তঁ",
       "mean": "Could you help me a moment? · একটু সাহায্য করবেন?"
      },
      {
       "who": "Employé",
       "t": "Bien sûr. Que voudriez-vous faire ?",
       "tr": "byahn SEWR kuh voo-dryay VOO FEHR · বীয়াঁ স্যুর্। ক্য ভুদ্রীয়ে-ভু ফের্",
       "mean": "Of course. What would you like to do? · নিশ্চয়ই। কী করতে চান?"
      },
      {
       "who": "Rima",
       "t": "J'aimerais ouvrir un compte.",
       "tr": "zheh-muh-REH oo-VREER uhn KOHNT · জ়েম্যরে উভ্রির্ আঁ কঁত্",
       "mean": "I would like to open an account. · একটি হিসাব খুলতে চাই।"
      },
      {
       "who": "Employé",
       "t": "Vous devriez apporter votre passeport.",
       "tr": "voo duh-vryay tah-por-TAY votr pahs-POR · ভু দ্যভ্রীয়ে আপর্তে ভত্র্ পাস্পর্",
       "mean": "You should bring your passport. · আপনার পাসপোর্ট আনা উচিত।"
      }
     ]
    },
    {
     "t": "Je voudrais vous poser une question.",
     "tr": "zhuh voo-DREH voo poh-ZAY ewn kes-TYOHN · জ়্য ভুদ্রে ভু পোজ়ে ্যুন্ কেস্তীয়ঁ",
     "mean": "I would like to ask you a question. · আমি আপনাকে একটি প্রশ্ন করতে চাই।",
     "words": [
      {
       "t": "Je",
       "mean": "I · আমি"
      },
      {
       "t": "voudrais",
       "mean": "would like · চাইব"
      },
      {
       "t": "vous",
       "mean": "you · আপনাকে"
      },
      {
       "t": "poser",
       "mean": "to ask · করতে"
      },
      {
       "t": "une",
       "mean": "a · একটি"
      },
      {
       "t": "question",
       "mean": "question · প্রশ্ন"
      }
     ],
     "note": "**je veux** would be blunt to the point of rudeness. One letter of tense turns a demand into a request. · **je veux** বললে রূঢ় শোনাত; কালের বদলেই দাবি হয়ে যায় অনুরোধ।",
     "type": "sentence"
    },
    {
     "t": "Si j'étais riche, j'achèterais une maison au bord de la mer.",
     "tr": "see zhay-teh REESH zhah-sheh-tuh-REH ewn meh-ZOHN oh bor duh lah MEHR · সি জ়েতে রিশ্, জ়াশেত্যরে ্যুন্ মেজ়ঁ ও বর্ দ্য লা মের্",
     "mean": "If I were rich, I would buy a house by the sea. · ধনী হলে সমুদ্রের ধারে একটা বাড়ি কিনতাম।",
     "words": [
      {
       "t": "Si",
       "mean": "if · যদি"
      },
      {
       "t": "j'étais",
       "mean": "I were · আমি হতাম"
      },
      {
       "t": "riche",
       "mean": "rich · ধনী"
      },
      {
       "t": "j'achèterais",
       "mean": "I would buy · কিনতাম"
      },
      {
       "t": "une",
       "mean": "a · একটি"
      },
      {
       "t": "maison",
       "mean": "house · বাড়ি"
      },
      {
       "t": "au",
       "mean": "at the · -এ"
      },
      {
       "t": "bord",
       "mean": "edge · ধার"
      },
      {
       "t": "de",
       "mean": "of · -এর"
      },
      {
       "t": "la",
       "mean": "the · (নির্দেশক)"
      },
      {
       "t": "mer",
       "mean": "sea · সমুদ্র"
      }
     ],
     "note": "The **si** half takes the imparfait and the other half the conditional. Never two conditionals; that is the commonest mistake of all. · **si**-অংশে imparfait, অন্য অংশে conditionnel।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. This is the tense of good manners: it softens everything it touches. · জোরে পড়ুন; এটি ভদ্রতার কাল, যা ছোঁয় তাকেই নরম করে।",
     "lines": [
      {
       "t": "Je voudrais un café, s'il vous plaît.",
       "mean": "I would like a coffee, please · একটি কফি দিন, দয়া করে"
      },
      {
       "t": "Pourriez-vous m'aider un instant ?",
       "mean": "Could you help me a moment? · একটু সাহায্য করবেন?"
      },
      {
       "t": "Vous devriez partir plus tôt.",
       "mean": "You should leave earlier · আপনার আগেই রওনা দেওয়া উচিত"
      },
      {
       "t": "J'aimerais vous poser une question.",
       "mean": "I would like to ask you a question · একটি প্রশ্ন করতে চাই"
      },
      {
       "t": "Ce serait avec grand plaisir.",
       "mean": "That would be a great pleasure · খুব আনন্দের সঙ্গেই"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The conditional uses… · conditionnel ব্যবহার করে…",
       "options": [
        "the nous stem with future endings · nous ধাতু + ভবিষ্যতের শেষাংশ",
        "the participle with imparfait endings · কৃদন্ত + অসমাপিকা অতীতের শেষাংশ",
        "the future stem with imparfait endings · ভবিষ্যৎ ধাতু + অসমাপিকা অতীতের শেষাংশ",
        "the infinitive with future endings · ক্রিয়ামূল + ভবিষ্যতের শেষাংশ"
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
        "Nothing at all · কিছুই না",
        "A silent s · একটি নীরব s",
        "An accent · একটি উচ্চারণচিহ্ন",
        "A different stem · অন্য একটি ধাতু"
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
     "name": "Building it · এটি গড়া",
     "color": "blue",
     "desc": "Take the **ils** form of the present, drop **-ent**, add **-e, -es, -e, -ions, -iez, -ent**. · ils রূপ থেকে -ent বাদ দিয়ে নতুন শেষাংশ যোগ করুন।",
     "examples": [
      {
       "t": "ils parlent → que je parle",
       "tr": "that I speak · যেন আমি বলি",
       "hl": "parle"
      },
      {
       "t": "ils finissent → que je finisse",
       "tr": "that I finish · যেন আমি শেষ করি",
       "hl": "finisse"
      },
      {
       "t": "ils vendent → que je vende",
       "tr": "that I sell · যেন আমি বিক্রি করি",
       "hl": "vende"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Verb · ক্রিয়া",
      "Subjunctive · সম্ভাবনাসূচক",
      "Verb · ক্রিয়া",
      "Subjunctive · সম্ভাবনাসূচক"
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
     "name": "What triggers it · কী এটি ডেকে আনে",
     "color": "purple",
     "desc": "Necessity, wish, emotion and doubt. Learn the trigger phrases, not the theory. · প্রয়োজন, ইচ্ছা, আবেগ ও সন্দেহ। নিয়ম নয়, সূচক বাক্যাংশ শিখুন।",
     "examples": [
      {
       "t": "Il faut que tu viennes.",
       "tr": "You must come. (necessity) · তোমাকে আসতেই হবে। (আবশ্যকতা)",
       "hl": "viennes"
      },
      {
       "t": "Je veux que vous partiez.",
       "tr": "I want you to leave. (wish) · আমি চাই আপনি চলে যান। (ইচ্ছা)",
       "hl": "partiez"
      },
      {
       "t": "Je suis content que tu sois là.",
       "tr": "I am glad you are here. (emotion) · তুমি এখানে আছ বলে আমি খুশি। (আবেগ)",
       "hl": "sois"
      },
      {
       "t": "Je doute qu'il ait raison.",
       "tr": "I doubt he is right. (doubt) · সে ঠিক কিনা আমার সন্দেহ। (সন্দেহ)",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Mère",
       "t": "Il faut que tu sois à la gare avant huit heures.",
       "tr": "eel foh kuh tew swah ah lah GAHR ah-vahn wee TUHR · ইল্ ফো ক্য ত্যু সোয়া আ লা গার্ আভঁ উইত্ ্যর্",
       "mean": "You must be at the station before eight. · আটটার আগে স্টেশনে থাকতে হবে।"
      },
      {
       "who": "Salim",
       "t": "Je veux bien, mais je doute que le bus arrive à temps.",
       "tr": "zhuh vuh BYAHN meh zhuh doot kuh luh bews ah-REEV ah TAHN · জ়্য ভ্য বীয়াঁ, মে জ়্য দুত্ ক্য ল্য ব্যুস্ আরিভ্ আ তঁ",
       "mean": "Willingly, but I doubt the bus will arrive in time. · ঠিক আছে, তবে বাস সময়মতো আসবে কিনা সন্দেহ।"
      },
      {
       "who": "Mère",
       "t": "Bien qu'il soit souvent en retard, pars tôt.",
       "tr": "byahn keel swah soo-vahn tahn ruh-TAHR pahr TOH · বীয়াঁ কিল্ সোয়া সুভঁত্ অঁ র্যতার্, পার্ তো",
       "mean": "Although it is often late, leave early. · যদিও প্রায়ই দেরি করে, তবু আগে বেরিয়ো।"
      },
      {
       "who": "Salim",
       "t": "D'accord. Je suis content que tu me le rappelles.",
       "tr": "dah-KOR zhuh swee kohn-TAHN kuh tew muh luh rah-PEL · দাকর্। জ়্য সুই কঁতঁ ক্য ত্যু ম্য ল্য রাপেল্",
       "mean": "All right. I am glad you remind me. · ঠিক আছে। মনে করিয়ে দিলে বলে ভালো হলো।"
      }
     ]
    },
    {
     "t": "Il faut que tu sois là avant huit heures.",
     "tr": "eel foh kuh tew swah lah ah-vahn wee TUHR · ইল্ ফো ক্য ত্যু সোয়া লা আভঁ উইত্ ্যর্",
     "mean": "You must be there before eight o'clock. · তোমাকে আটটার আগে সেখানে থাকতে হবে।",
     "words": [
      {
       "t": "Il",
       "mean": "it (impersonal) · (ভাববাচক)"
      },
      {
       "t": "faut",
       "mean": "is necessary · দরকার"
      },
      {
       "t": "que",
       "mean": "that · যে"
      },
      {
       "t": "tu",
       "mean": "you · তুমি"
      },
      {
       "t": "sois",
       "mean": "be (subjunctive) · থাকো"
      },
      {
       "t": "là",
       "mean": "there · সেখানে"
      },
      {
       "t": "avant",
       "mean": "before · আগে"
      },
      {
       "t": "huit",
       "mean": "eight · আট"
      },
      {
       "t": "heures",
       "mean": "o'clock · টা"
      }
     ],
     "note": "**sois**, not **es**. Necessity bends the verb out of its ordinary shape; that bent form is the subjunctive. · **es** নয়, **sois** — আবশ্যকতা ক্রিয়াকে বাঁকিয়ে দেয়।",
     "type": "sentence"
    },
    {
     "t": "Je ne pense pas qu'il puisse venir avant samedi.",
     "tr": "zhuh nuh pahns pah keel pwees vuh-NEER ah-vahn sahm-DEE · জ়্য ন্য পঁস্ পা কিল্ পুইস্ ভ্যনির্ আভঁ সাম্দি",
     "mean": "I do not think he can come before Saturday. · আমার মনে হয় না সে শনিবারের আগে আসতে পারবে।",
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
       "t": "pense",
       "mean": "think · মনে করি"
      },
      {
       "t": "pas",
       "mean": "not (part 2) · না (দ্বিতীয় অংশ)"
      },
      {
       "t": "qu'il",
       "mean": "that he · যে সে"
      },
      {
       "t": "puisse",
       "mean": "can (subjunctive) · পারবে"
      },
      {
       "t": "venir",
       "mean": "to come · আসতে"
      },
      {
       "t": "avant",
       "mean": "before · আগে"
      },
      {
       "t": "samedi",
       "mean": "Saturday · শনিবার"
      }
     ],
     "note": "**je pense qu'il peut** is ordinary, but **je ne pense pas qu'il puisse** takes the subjunctive: doubt bends the verb. · হ্যাঁ-বাচকে **peut**, না-বাচকে **puisse** — সন্দেহই ক্রিয়া বাঁকায়।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. Everything after que is wished for, not reported. · জোরে পড়ুন; que-এর পরে যা আসে তা কামনা, খবর নয়।",
     "lines": [
      {
       "t": "Il faut que tu viennes avec nous.",
       "mean": "You must come with us · তোমাকে আমাদের সঙ্গে আসতে হবে"
      },
      {
       "t": "Je veux que vous partiez maintenant.",
       "mean": "I want you to leave now · চাই আপনি এখনই যান"
      },
      {
       "t": "Je suis content que tu sois là.",
       "mean": "I am glad you are here · তুমি আছ বলে খুশি"
      },
      {
       "t": "Je doute qu'il ait raison.",
       "mean": "I doubt he is right · সে ঠিক কিনা সন্দেহ"
      },
      {
       "t": "Bien qu'il soit fatigué, il travaille.",
       "mean": "Although he is tired, he works · ক্লান্ত হলেও সে কাজ করে"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "The subjunctive stem comes from… · subjonctif-এর মূল আসে…",
       "options": [
        "the infinitive · ক্রিয়ামূল",
        "the nous form · nous রূপ",
        "the future stem · ভবিষ্যৎ ধাতু",
        "the ils form of the present · বর্তমানের ils রূপ"
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
       "explain": "the subjunctive form of être · {{que je sois}} — এটিই subjonctif রূপ।"
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
        "The negative turns it into doubt · নঞর্থক এটিকে সন্দেহে বদলে দেয়",
        "penser always takes it · penser সবসময় এটি নেয়",
        "là requires it",
        "It is a question · এটি একটি প্রশ্ন"
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
      "Person · পুরুষ",
      "Pronoun · সর্বনাম",
      "se lever (get up) · se lever (ওঠা)",
      "Meaning · অর্থ"
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
       "you get up · তুমি ওঠো"
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
       "you get up · তুমি ওঠো"
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
     "name": "In the past, always être · অতীতে সবসময় être",
     "color": "red",
     "desc": "Every reflexive verb takes {{être}} in the passé composé, and the participle usually agrees with the subject. · সব reflexive ক্রিয়া অতীতে être নেয়।",
     "examples": [
      {
       "t": "Je me suis levé.",
       "tr": "I got up (male speaker) · আমি উঠলাম (পুরুষ বক্তা)",
       "hl": "suis levé"
      },
      {
       "t": "Elle s'est levée.",
       "tr": "She got up · সে উঠল",
       "hl": "levée"
      },
      {
       "t": "Ils se sont dépêchés.",
       "tr": "They hurried · তারা তাড়াহুড়ো করল",
       "hl": "dépêchés"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Some verbs change meaning · কিছু ক্রিয়ার অর্থ বদলায়",
     "color": "orange",
     "desc": "Adding the reflexive pronoun can shift the sense completely. · reflexive হলে কিছু ক্রিয়ার অর্থ বদলে যায়।",
     "examples": [
      {
       "t": "passer → se passer",
       "tr": "to pass → to happen · পার হওয়া → ঘটা",
       "hl": "se passer"
      },
      {
       "t": "tromper → se tromper",
       "tr": "to deceive → to be mistaken · ঠকানো → ভুল করা",
       "hl": "se tromper"
      },
      {
       "t": "entendre → s'entendre",
       "tr": "to hear → to get on with · শোনা → বনিবনা হওয়া",
       "hl": "s'entendre"
      },
      {
       "t": "rendre → se rendre",
       "tr": "to give back → to go to · ফেরত দেওয়া → যাওয়া",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "À quelle heure tu te lèves d'habitude ?",
       "tr": "ah kel UHR tew tuh LEV dah-bee-TEWD · আ কেল্ ্যর্ ত্যু ত্য লেভ্ দাবিত্যুদ্",
       "mean": "What time do you usually get up? · সাধারণত কখন ওঠ?"
      },
      {
       "who": "Salim",
       "t": "Je me lève à six heures et je me dépêche.",
       "tr": "zhuh muh LEV ah see ZUHR ay zhuh muh day-PESH · জ়্য ম্য লেভ্ আ সিজ়্ ্যর্ এ জ়্য ম্য দেপেশ্",
       "mean": "I get up at six and I hurry. · ছটায় উঠি, তারপর তাড়াহুড়ো।"
      },
      {
       "who": "Rima",
       "t": "Et hier ? Tu t'es levé tôt aussi ?",
       "tr": "ay YEHR tew teh luh-VAY toh oh-SEE · এ ইয়ের্? ত্যু তে ল্যভে তো অসি",
       "mean": "And yesterday? Did you get up early too? · আর গতকাল? তখনো আগে উঠেছিলে?"
      },
      {
       "who": "Salim",
       "t": "Non, je me suis trompé d'heure.",
       "tr": "nohn zhuh muh swee trohn-PAY DUHR · নঁ, জ়্য ম্য সুই ত্রঁপে দ্যর্",
       "mean": "No, I got the time wrong. · না, সময় ভুল করেছিলাম।"
      }
     ]
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
     "t": "Ils se sont rencontrés et ils se sont parlé longtemps.",
     "tr": "eel suh sohn rahn-kohn-TRAY ay eel suh sohn pahr-LAY lohn-TAHN · ইল্ স্য সঁ রঁকঁত্রে এ ইল্ স্য সঁ পার্লে লঁতঁ",
     "mean": "They met and they talked to each other for a long time. · তারা দেখা করল এবং অনেকক্ষণ কথা বলল।",
     "words": [
      {
       "t": "Ils",
       "mean": "they · তারা"
      },
      {
       "t": "se",
       "mean": "each other · পরস্পর"
      },
      {
       "t": "sont",
       "mean": "are (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "rencontrés",
       "mean": "met (agreeing) · দেখা করল"
      },
      {
       "t": "et",
       "mean": "and · এবং"
      },
      {
       "t": "ils",
       "mean": "they · তারা"
      },
      {
       "t": "se",
       "mean": "to each other · পরস্পরকে"
      },
      {
       "t": "sont",
       "mean": "are (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "parlé",
       "mean": "talked (no agreement) · কথা বলল"
      },
      {
       "t": "longtemps",
       "mean": "a long time · অনেকক্ষণ"
      }
     ],
     "note": "**rencontrés** agrees but **parlé** does not, because you say **parler à** — the pronoun is an indirect object there. · **parler à** বলে বলেই **parlé**-তে মিল ঘটে না।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. The little pronoun belongs to the verb; never leave it behind. · জোরে পড়ুন; ছোট সর্বনামটি ক্রিয়ারই অংশ, বাদ দেবেন না।",
     "lines": [
      {
       "t": "Je me lève à six heures.",
       "mean": "I get up at six · আমি ছটায় উঠি"
      },
      {
       "t": "Elle s'est levée très tôt.",
       "mean": "She got up very early · সে খুব সকালে উঠেছিল"
      },
      {
       "t": "Nous nous dépêchons toujours le matin.",
       "mean": "We always hurry in the morning · সকালে আমরা সবসময় তাড়াহুড়ো করি"
      },
      {
       "t": "Comment vous appelez-vous ?",
       "mean": "What is your name? · আপনার নাম কী?"
      },
      {
       "t": "Ne te trompe pas de rue.",
       "mean": "Don't take the wrong street · ভুল রাস্তায় যেও না"
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
        "to trumpet · শিঙা বাজানো",
        "to stumble · হোঁচট খাওয়া",
        "to be mistaken · ভুল করা",
        "to deceive someone · কাউকে ঠকানো"
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
      "In the other half · অন্য অর্ধে",
      "Example · উদাহরণ",
      "Meaning · অর্থ"
     ],
     "rows": [
      [
       "présent",
       "futur",
       "{{Si tu cherches, tu trouveras.}}",
       "If you look, you will find. · খুঁজলে পাবে।"
      ],
      [
       "imparfait",
       "conditionnel",
       "{{Si j'avais le temps, je viendrais.}}",
       "If I had time, I would come. · সময় থাকলে আসতাম।"
      ],
      [
       "plus-que-parfait",
       "conditionnel passé",
       "{{Si j'avais su, je vous l'aurais dit.}}",
       "If I had known, I would have told you. · জানলে তোমাকে বলতাম।"
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
     "name": "The passive · কর্মবাচ্য",
     "color": "blue",
     "desc": "Built with {{être}} plus the past participle, which **agrees** with the subject. The doer follows {{par}}. · être + past participle, আর participle কর্তার সঙ্গে মেলে।",
     "examples": [
      {
       "t": "Le bangla est parlé au Bangladesh.",
       "tr": "Bangla is spoken in Bangladesh. · বাংলাদেশে বাংলা বলা হয়।",
       "hl": "est parlé"
      },
      {
       "t": "La lettre a été écrite par Rana.",
       "tr": "The letter was written by Rana. · চিঠিটি রানা লিখেছিল।",
       "hl": "a été écrite"
      },
      {
       "t": "Les maisons sont construites ici.",
       "tr": "The houses are built here. · এখানে বাড়িগুলো তৈরি হয়।",
       "hl": "construites"
      }
     ]
    },
    {
     "type": "rule",
     "name": "on is the French shortcut · on হলো ফরাসি সংক্ষিপ্ত পথ",
     "color": "green",
     "desc": "Where English reaches for the passive, French often uses **on** with an active verb. It is shorter and far more natural. · ইংরেজি passive ব্যবহার করলেও ফরাসি প্রায়ই on দিয়ে active বাক্য বানায়।",
     "examples": [
      {
       "t": "On parle français ici.",
       "tr": "French is spoken here. · এখানে ফরাসি বলা হয়।",
       "hl": "On"
      },
      {
       "t": "On m'a dit que…",
       "tr": "I was told that… · আমাকে বলা হয়েছিল যে…",
       "hl": "On m'a dit"
      },
      {
       "t": "On a volé ma voiture.",
       "tr": "My car has been stolen. · আমার গাড়ি চুরি হয়ে গেছে।",
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
     "type": "dialogue",
     "lines": [
      {
       "who": "Rima",
       "t": "Si tu as le temps, tu viendras avec nous ?",
       "tr": "see tew ah luh TAHN tew vyahn-DRAH ah-vek NOO · সি ত্যু আ ল্য তঁ, ত্যু ভীয়াঁদ্রা আভেক্ নু",
       "mean": "If you have time, will you come with us? · সময় থাকলে আমাদের সঙ্গে আসবে?"
      },
      {
       "who": "Salim",
       "t": "Si j'avais le temps, je viendrais tout de suite.",
       "tr": "see zhah-veh luh TAHN zhuh vyahn-DREH too duh SWEET · সি জ়াভে ল্য তঁ, জ়্য ভীয়াঁদ্রে তু দ্য সুইত্",
       "mean": "If I had time, I would come at once. · সময় থাকলে এখনই আসতাম।"
      },
      {
       "who": "Rima",
       "t": "On m'a dit que le bureau fermait à cinq heures.",
       "tr": "ohn mah DEE kuh luh bew-ROH fehr-MEH ah sahn KUHR · ঁ মা দি ক্য ল্য ব্যুরো ফের্মে আ সাঁক্ ্যর্",
       "mean": "I was told the office closed at five. · শুনেছি অফিস পাঁচটায় বন্ধ হতো।"
      },
      {
       "who": "Salim",
       "t": "Alors tout sera fini avant six heures.",
       "tr": "ah-LOR too suh-rah fee-NEE ah-vahn see ZUHR · আলর্ তু স্যরা ফিনি আভঁ সিজ়্ ্যর্",
       "mean": "Then everything will be finished before six. · তাহলে ছটার আগেই সব শেষ হবে।"
      }
     ]
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
     "t": "Si vous aviez demandé, on vous aurait aidé.",
     "tr": "see voo zah-vyay duh-mahn-DAY ohn voo zoh-reh ay-DAY · সি ভুজ়্ আভীয়ে দ্যমঁদে, ঁ ভুজ়্ ওরেত্ এদে",
     "mean": "If you had asked, you would have been helped. · আপনি চাইলে আপনাকে সাহায্য করা হতো।",
     "words": [
      {
       "t": "Si",
       "mean": "if · যদি"
      },
      {
       "t": "vous",
       "mean": "you · আপনি"
      },
      {
       "t": "aviez",
       "mean": "had (helper) · (সহকারী ক্রিয়া)"
      },
      {
       "t": "demandé",
       "mean": "asked · চাইতেন"
      },
      {
       "t": "on",
       "mean": "one, people · কেউ"
      },
      {
       "t": "vous",
       "mean": "you · আপনাকে"
      },
      {
       "t": "aurait",
       "mean": "would have · করত"
      },
      {
       "t": "aidé",
       "mean": "helped · সাহায্য"
      }
     ],
     "note": "The third kind of **si** sentence, about what did not happen, and **on** doing the work of an English passive. · এটি তৃতীয় ধরনের **si** বাক্য; **on** এখানে কর্মবাচ্যের কাজ করছে।",
     "type": "sentence"
    },
    {
     "type": "practice",
     "text": "Read each line aloud. Never put a conditional straight after si; the si clause stays plain. · জোরে পড়ুন; si-এর ঠিক পরে conditionnel বসে না।",
     "lines": [
      {
       "t": "Si j'ai le temps, je viendrai.",
       "mean": "If I have time, I will come · সময় পেলে আসব"
      },
      {
       "t": "Si j'avais le temps, je viendrais.",
       "mean": "If I had time, I would come · সময় থাকলে আসতাম"
      },
      {
       "t": "Le bangla est parlé au Bangladesh.",
       "mean": "Bangla is spoken in Bangladesh · বাংলাদেশে বাংলা বলা হয়"
      },
      {
       "t": "On m'a dit que le bureau était fermé.",
       "mean": "I was told the office was closed · শুনলাম অফিস বন্ধ ছিল"
      },
      {
       "t": "Cette lettre a été écrite par Rana.",
       "mean": "This letter was written by Rana · চিঠিটি রানা লিখেছিল"
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
        "the present · বর্তমান",
        "the imparfait · অসমাপিকা অতীত",
        "the plus-que-parfait · পুরাঘটিত অতীত",
        "the conditional · শর্তবাচক কাল"
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
        "Past participles always do · অতীত কৃদন্ত সবসময় করে",
        "It agrees with the feminine subject · এটি স্ত্রীবাচক কর্তার সঙ্গে মেলে",
        "The helper is avoir · সহায়ক ক্রিয়া avoir",
        "It is an irregular verb · এটি অনিয়মিত ক্রিয়া"
       ],
       "answer": 1,
       "explain": "In the passive, the participle agrees with the subject. · passive-এ participle কর্তার সঙ্গে মেলে।"
      },
      {
       "q": "*If you look, you will find* uses… · *If you look, you will find*-এ বসে…",
       "options": [
        "future then future · ভবিষ্যৎ তারপর ভবিষ্যৎ",
        "present then present · বর্তমান তারপর বর্তমান",
        "present then future · বর্তমান তারপর ভবিষ্যৎ",
        "imparfait then conditional · অসমাপিকা অতীত তারপর শর্তবাচক"
       ],
       "answer": 2,
       "explain": "si + présent pairs with the futur. · si + présent জোড়া বাঁধে futur-এর সঙ্গে।"
      },
      {
       "q": "In conversation, {{On y va ?}} usually means… · কথ্য ভাষায় {{On y va ?}} সাধারণত মানে…",
       "options": [
        "Is someone going? · কেউ কি যাচ্ছে?",
        "One goes there. · সেখানে যাওয়া হয়।",
        "Did they go? · তারা কি গিয়েছিল?",
        "Shall we go? · আমরা কি যাব?"
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
