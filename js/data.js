/**
 * THE MODI FILES - Comprehensive Evidentiary Data Store
 * Structured according to the Tripartite Journalism Standard:
 * Claim • Evidence • Official Rebuttal & Legal Status
 */

const MODI_FILES_DATA = {
  meta: {
    projectTitle: "The Modi Files",
    projectId: "16658439764360021550",
    subtitle: "A Chapter-by-Chapter Evidentiary & Historical Dossier",
    timeframe: "1950 — Present",
    methodology: "For every contested claim, this archive presents (1) the claim, (2) the verified evidence/facts, and (3) the official response or legal status, maintaining strict evidentiary neutrality.",
    lastUpdated: "2026",
    totalArcs: 11,
    totalScreens: 12
  },

  screens: [
    {
      screenId: "ae8961cda17b4fa1ba703e763575dc24",
      screenNumber: 1,
      title: "The Modi Files - Home Timeline",
      slug: "home-timeline",
      type: "overview",
      description: "Interactive master chronological timeline and evidentiary explorer across all 11 arcs of Narendra Modi's life, political rise, policy shifts, and judicial outcomes."
    },
    {
      screenId: "36468ccd77fe4e90b27cba53a71d834d",
      screenNumber: 2,
      arcNumber: 1,
      title: "Arc 1 - Origins (1950–1967)",
      period: "1950–1967",
      subtitle: "Vadnagar, Childhood, and the RSS Shakha Induction",
      slug: "origins-vadnagar",
      theme: "Ideological & Personal Roots"
    },
    {
      screenId: "5d4d3083e2b5417ab875d0d96c17c4ef",
      screenNumber: 3,
      arcNumber: 2,
      title: "Arc 2 - Marriage & RSS Years (1968–1987)",
      period: "1968–1987",
      subtitle: "Jashodaben, Pracharak Wandering, Emergency Underground & Entry into BJP",
      slug: "marriage-rss-years",
      theme: "Personal Life & Political Formation"
    },
    {
      screenId: "4b4dff00e03c43ceb4209a5ba2bc6b43",
      screenNumber: 5,
      arcNumber: 3,
      title: "Arc 3 - Education & Degree Dispute (1967–1983)",
      period: "1967–1983",
      subtitle: "Academic Record, RTI Challenges & Ongoing Defamation Litigation",
      slug: "education-degree-dispute",
      theme: "Transparency & Legal Scrutiny"
    },
    {
      screenId: "5058c903b0bc4e30947864891a6e04bb",
      screenNumber: 4,
      arcNumber: 4,
      title: "Arc 4 - 2002 Riots & Legal Outcomes (2001–2004)",
      period: "2001–2004",
      subtitle: "Godhra, Gujarat Riots, Supreme Court SIT Clean Chit & US Visa Ban",
      slug: "2002-riots-legal-outcomes",
      theme: "Governance & Judicial Verdicts"
    },
    {
      screenId: "0aeae0fd64b543c3b6f08df46ece23b3",
      screenNumber: 6,
      arcNumber: 5,
      title: "Arc 5 - The Vibrant Gujarat Era (2004–2014)",
      period: "2004–2014",
      subtitle: "The 'Gujarat Model', Industrial Expansion, 3 Assembly Victories & HDI Debates",
      slug: "vibrant-gujarat-era",
      theme: "Economic Development & Governance"
    },
    {
      screenId: "43c71f778377460cabbee3c2eb10b759",
      screenNumber: 7,
      arcNumber: 6,
      title: "Arc 6 - National Ascension (2014–2019)",
      period: "2014–2019",
      subtitle: "2014 Landslide, Demonetization, GST, Surgical Strikes & Article 370",
      slug: "national-ascension",
      theme: "National Leadership & Economic Shockwaves"
    },
    {
      screenId: "eade49c5777e492a9bb32a2aac847503",
      screenNumber: 8,
      arcNumber: 7,
      title: "Arc 7 - Policy & Protests (2019–2021)",
      period: "2019–2021",
      subtitle: "CAA-NRC Agitation, Farm Laws, Historic 2021 Apology & Governing Style",
      slug: "policy-and-protests",
      theme: "Mass Agitations & Policy Reversals"
    },
    {
      screenId: "c0c2d5e754024da08ec69dc767542966",
      screenNumber: 9,
      arcNumber: 8,
      title: "Arc 8 - The Adani Relationship",
      period: "1990s–Ongoing",
      subtitle: "Corporate Proximity, Hindenburg Report, SEBI Probe & US Indictment",
      slug: "adani-relationship",
      theme: "Corporate Ties & Financial Scrutiny"
    },
    {
      screenId: "6b396e7ba36843f3aed9f9b4a1059d37",
      screenNumber: 10,
      arcNumber: 9,
      title: "Arc 9 - Press Freedom & Media Environment",
      period: "2014–Ongoing",
      subtitle: "Press Freedom Index (140 to 157), Media Ownership Consolidation & Digital Laws",
      slug: "press-freedom-media",
      theme: "Fourth Estate & Information Flow"
    },
    {
      screenId: "e8552f73793048629012bd68b93bff73",
      screenNumber: 11,
      arcNumber: 10,
      title: "Arc 10 - Hindutva & The Secular Question",
      period: "Decades–Ongoing",
      subtitle: "Ideological History, Ram Mandir (2024), Majoritarianism vs. De-colonization",
      slug: "hindutva-secular-question",
      theme: "Ideology, Religion & Statehood"
    },
    {
      screenId: "ea27bb022d3048ed94e0798910ff42d2",
      screenNumber: 12,
      arcNumber: 11,
      title: "Arc 11 - The Third Term & Beyond (2024–Present)",
      period: "2024–Present",
      subtitle: "Nehru-Equaling 3rd Term, Coalition Governance, Electoral Bonds Verdict & Viksit Bharat",
      slug: "third-term-and-beyond",
      theme: "Coalition Realities & Future Trajectory"
    },
    {
      screenId: "cjp2026protests77fe4e90b27cba53a71d",
      screenNumber: 13,
      arcNumber: 12,
      title: "Arc 12 - The Cockroach Janta Party (CJP) Protests (May–July 2026)",
      period: "May–July 2026",
      subtitle: "CJI Kant's Remark, NEET Paper Leaks, Street Mobilization & Pradhan Resignation",
      slug: "cjp-protests-2026",
      theme: "Youth Movement & Policy Retreat"
    }
  ],

  arcs: [
    {
      id: 1,
      screenId: "36468ccd77fe4e90b27cba53a71d834d",
      title: "Origins: Vadnagar",
      period: "1950–1967",
      location: "Vadnagar, Mehsana District, Gujarat",
      summary: "Born September 17, 1950 into a Ghanchi (OBC) family in Vadnagar. Raised in modest circumstances by parents Damodardas Mulchand Modi and Heeraben Modi. Formative exposure to the RSS began at age 8.",
      quotes: [
        {
          quote: "I was not born into a royal family. I was born into a very poor family in a small town of Gujarat. My mother washed utensils in other people's homes to raise us.",
          speaker: "Narendra Modi",
          context: "Public Address & Madison Square Garden Speech (2014)"
        }
      ],
      primaryDocuments: [
        {
          title: "Vadnagar Railway Station Tea Stall Municipal Record",
          date: "1950s–1960s",
          archiveRef: "VAD-MUN-REC-1958",
          summary: "Municipal registry confirming stall allocation to Damodardas Mulchand Modi near platform 1."
        },
        {
          title: "Bhagavatacharya High School Register",
          date: "1967",
          archiveRef: "GSEB-SSC-1967-VAD",
          summary: "Secondary School Certificate graduation record showing debate society commendations."
        }
      ],
      primaryImages: [
        {
          url: "assets/images/arc1_childhood_vadnagar.jpeg",
          caption: "Narendra Modi as a schoolboy in Vadnagar, Gujarat (circa early 1960s).",
          tag: "Archival / Primary School"
        },
        {
          url: "assets/images/arc1_ncc_scout.jpeg",
          caption: "Modi in National Cadet Corps (NCC) uniform during his school years in Vadnagar.",
          tag: "Youth Cadet / Vadnagar"
        }
      ],
      keyEvents: [
        {
          year: "1950",
          date: "September 17, 1950",
          headline: "Birth in Vadnagar",
          text: "Born as the third of six children to Damodardas Mulchand Modi and Heeraben Modi in Vadnagar, Mehsana district, Gujarat, into the traditional oil-pressing Modh Ghanchi community (classified under Other Backward Classes - OBC)."
        },
        {
          year: "1958",
          date: "Circa 1958",
          headline: "Induction into RSS Junior Shakha",
          text: "Joined the local Rashtriya Swayamsevak Sangh (RSS) shakha as a junior volunteer (swayamsevak) under local organizer Lakshmanrao Inamdar (known as 'Vakil Saheb'), who became his primary mentor."
        },
        {
          year: "1967",
          date: "1967",
          headline: "Higher Secondary Completion (SSC)",
          text: "Completed higher secondary education at Bhagavatacharya Narayancharya High School in Vadnagar. Described by teachers and peers as an active debater, avid reader of Swami Vivekananda, and swimmer in Sharmistha Lake."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "The Tea-Stall Narrative (Chaiwala Claim)",
          claim: {
            title: "Opposition & Critics' Perspective",
            content: "Critics argue the 'Chaiwala' narrative is an exaggerated campaign device used for populist political marketing to project extreme destitution, when the family was lower-middle class with stable shop premises."
          },
          evidence: {
            title: "Documented Facts & Childhood Accounts",
            content: "Damodardas Modi ran a registered tea stall near Vadnagar railway station. Narendra and his brother Parmod helped at the stall before school. Independent journalistic biographies (Andy Marino, Nilanjan Mukhopadhyay) confirm the existence and role of the stall."
          },
          response: {
            title: "Official Framing & Historical Synthesis",
            content: "Supporters cite this as definitive evidence of meritocratic rise from grassroots India without dynastic privilege. Objective synthesis: the tea stall is a documented historical fact; its rhetorical packaging as 'rags-to-riches' is political communication."
          }
        },
        {
          topic: "Understanding the RSS Formation",
          claim: {
            title: "Ideological Scrutiny",
            content: "Critics characterize the RSS as a paramilitary, majoritarian organization with rigid cadre discipline that undermines constitutional pluralism."
          },
          evidence: {
            title: "Organizational History",
            content: "Founded in 1925 by Dr. K.B. Hedgewar in Nagpur, the RSS is a Hindu nationalist volunteer organization that emphasizes cultural revivalism, discipline (shakhas), social work, and character building."
          },
          response: {
            title: "RSS Perspective & Modi's Position",
            content: "Modi credits the RSS with instilling selfless service (Seva), nationalism, and unyielding organizational discipline that shaped his entire administrative approach."
          }
        }
      ],
      sources: [
        { title: "PM India Official Biography: Personal Life Story", url: "https://www.pmindia.gov.in", type: "Official" },
        { title: "Narendra Modi: A Political Biography (Andy Marino, HarperCollins)", type: "Biographical Book" },
        { title: "Narendra Modi: The Man, The Times (Nilanjan Mukhopadhyay, Westland)", type: "Biographical Book" },
        { title: "Vadnagar Municipal & School Board Records (1950–1967)", type: "Archival" }
      ]
    },

    {
      id: 2,
      screenId: "5d4d3083e2b5417ab875d0d96c17c4ef",
      title: "Marriage & RSS Years",
      period: "1968–1987",
      location: "Gujarat, Belur Math, Himalayas, New Delhi",
      summary: "Arranged marriage to Jashodaben in 1968, followed by separation in 1971 to enter full-time RSS pracharak life. Years of ascetic travel, underground activity during the Emergency (1975–77), and transition into the BJP in 1987.",
      quotes: [
        {
          quote: "During the Emergency, our struggle was not for power, but for the restoration of democracy and fundamental rights of every Indian citizen.",
          speaker: "Narendra Modi",
          context: "Emergency 40th Anniversary Retrospective Address"
        }
      ],
      primaryDocuments: [
        {
          title: "Election Commission Affidavit (Vadodara Lok Sabha, 2014)",
          date: "April 2014",
          archiveRef: "ECI-AFF-2014-VAD-MODI",
          summary: "First sworn affidavit declaring 'Jashodaben' in the marital status column under oath."
        },
        {
          title: "Gujarat Lok Sangharsh Samiti Underground Bulletin",
          date: "1975–1976",
          archiveRef: "GLSS-EMERGENCY-DOC-75",
          summary: "Covert resistance publication coordinated under the alias 'Prakash'."
        }
      ],
      primaryImages: [
        {
          url: "assets/images/arc2_emergency_disguise.jpeg",
          caption: "Modi in disguise (wearing a turban and spectacles) to evade police arrest during Indira Gandhi's Emergency (1975–1977).",
          tag: "Underground / Emergency Era"
        },
        {
          url: "assets/images/arc2_sadhana_himalayas.jpeg",
          caption: "Modi during his spiritual wanderings in the Himalayas in ascetic saffron robes (late 1960s/early 1970s).",
          tag: "Ascetic Period / Himalayas"
        },
        {
          url: "assets/images/arc2_rss_address.jpeg",
          caption: "Modi addressing an RSS gathering in traditional khaki shorts uniform as a full-time pracharak.",
          tag: "RSS Shakha / Gujarat"
        },
        {
          url: "assets/images/arc2_rss_pracharak_meal.jpeg",
          caption: "Modi as an RSS pracharak in Ahmedabad headquarters, Hedgewar Bhavan.",
          tag: "Pracharak Life / Ahmedabad"
        },
        {
          url: "assets/images/arc2_rss_uniform_walk.jpeg",
          caption: "Modi walking during an RSS camp in Sangh Ganavesh.",
          tag: "RSS Sangha Camp"
        }
      ],
      keyEvents: [
        {
          year: "1968",
          date: "1968",
          headline: "Childhood Arranged Marriage",
          text: "Arranged marriage was solemnized with Jashodaben Chimanlal Modi according to caste customs when he was 18 and she was 16–17. The couple separated by mutual agreement in 1971 after brief cohabitation."
        },
        {
          year: "1968–71",
          date: "1968–1971",
          headline: "Wandering and Sadhana",
          text: "Traveled across northern India, visiting Swami Vivekananda's Belur Math in Kolkata, Advaita Ashrama in Mayavati (Uttarakhand), and Himalayan hermitages before returning to Gujarat."
        },
        {
          year: "1971",
          date: "1971",
          headline: "Full-Time RSS Pracharak",
          text: "Moved to Hedgewar Bhavan in Ahmedabad, dedicating himself as a full-time pracharak (celibate ascetic organizer). Assigned to the canteen, cleaning, and administrative tasks under Lakshmanrao Inamdar."
        },
        {
          year: "1975–77",
          date: "June 1975 – March 1977",
          headline: "The Emergency Underground Network",
          text: "When Indira Gandhi declared the Emergency and banned the RSS, Modi went underground under the alias 'Prakash'. He coordinated the Gujarat Lok Sangharsh Samiti, distributed banned literature disguised as a Sikh/scholar, and ferried opposition leaders to safe houses."
        },
        {
          year: "1987",
          date: "1987",
          headline: "Formal Deputation to the BJP",
          text: "The RSS leadership deputed Modi to the Bharatiya Janata Party (BJP) as Organizing Secretary of the Gujarat unit, marking his formal entry into electoral party politics."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "The Decades-Long Marriage Non-Disclosure",
          claim: {
            title: "Opposition Critique (Congress Party)",
            content: "Congress and critics questioned his moral credibility, pointing out that from 2002 to 2012, Modi left the marital status column blank in all state election affidavits, alleging intentional deception of the electorate to maintain a celibate Hindu nationalist image."
          },
          evidence: {
            title: "Affidavit Records & Jashodaben's Statements",
            content: "State election filings in 2002, 2007, and 2012 left marital status unstated. In April 2014, in his Vadodara Lok Sabha affidavit, Modi formally named 'Jashodaben' as his wife for the first time following revised Election Commission guidelines. Jashodaben, a retired schoolteacher, stated they parted amicably and that she consistently prays for his success."
          },
          response: {
            title: "Modi's Position & Fair Synthesis",
            content: "Modi and the BJP maintained this was a child-marriage arranged by families that was never consummated in a modern sense, rendered moot by his vow of renunciation for national service. The facts of the marriage and non-disclosure are settled; the moral interpretation remains contested between private renunciation vs. public disclosure standards."
          }
        }
      ],
      sources: [
        { title: "Vadodara Lok Sabha Nomination Affidavit (Election Commission of India, 2014)", type: "Official Affidavit" },
        { title: "BBC News Profile: Who is Jashodaben, Modi's Wife? (2014)", url: "https://www.bbc.com", type: "News Archive" },
        { title: "Indian Express: Emergency Archives & Gujarat Resistance (1975–1977)", type: "Historical Record" },
        { title: "Deccan Herald Archives: Election Affidavits Comparison (2002–2014)", type: "Investigative" }
      ]
    },

    {
      id: 3,
      screenId: "4b4dff00e03c43ceb4209a5ba2bc6b43",
      title: "Education & Degree Dispute",
      period: "1967–1983",
      location: "Delhi University, Gujarat University, Ahmedabad",
      summary: "SSC completed in 1967. Modi claims a Bachelor of Arts in Political Science from Delhi University (1978) and an MA in Political Science from Gujarat University (1983, External). This triggered high-profile RTI demands and active criminal defamation lawsuits.",
      quotes: [
        {
          quote: "I never studied in a big college. I passed my MA exam as an external student through Gujarat University while working as an RSS pracharak.",
          speaker: "Narendra Modi",
          context: "Television Interview (Aap Ki Adalat)"
        }
      ],
      primaryDocuments: [
        {
          title: "Delhi University Examination Roll 16535 Verification",
          date: "May 2016",
          archiveRef: "DU-REG-VERIF-2016",
          summary: "Official statement from the Registrar of Delhi University authenticating the 1978 BA in Political Science degree."
        },
        {
          title: "Gujarat High Court Order in C/SCA/18485/2016",
          date: "March 31, 2023",
          archiveRef: "GHC-J-2023-CIC-KEJRIWAL",
          summary: "Order setting aside Central Information Commission's disclosure directive and imposing ₹25,000 fine on petitioner."
        }
      ],
      primaryImages: [
        {
          url: "assets/images/arc3_education_young_portrait.jpeg",
          caption: "Narendra Modi during his academic years in the 1970s.",
          tag: "Academic Era / 1970s"
        },
        {
          url: "assets/images/arc3_gujarat_univ_era.jpeg",
          caption: "Modi during his post-graduate studies and Gujarat University external coursework (1980s).",
          tag: "Gujarat University Period"
        }
      ],
      keyEvents: [
        {
          year: "1967",
          date: "1967",
          headline: "SSC Certification",
          text: "Passed Secondary School Certificate (SSC) examination from the Gujarat Secondary Education Board."
        },
        {
          year: "1978",
          date: "1978",
          headline: "BA in Political Science (Delhi University)",
          text: "Completed external coursework for Bachelor of Arts from the School of Correspondence Courses and Continuing Education, Delhi University (awarded 1979)."
        },
        {
          year: "1983",
          date: "1983",
          headline: "MA in Political Science (Gujarat University)",
          text: "Awarded Master of Arts in Political Science as an external student with First Class (~62.3% marks, 499/800)."
        },
        {
          year: "2016",
          date: "May 2016",
          headline: "RTI Dispute & DU Registrar Statement",
          text: "AAP chief Arvind Kejriwal demanded disclosure of academic degrees. Delhi University Registrar authenticated the records, confirming Modi enrolled in 1974 and passed in 1978."
        },
        {
          year: "2023–24",
          date: "March 2023 – October 2024",
          headline: "Gujarat HC Order & Defamation Case",
          text: "Gujarat High Court quashed the CIC order seeking disclosure of Modi's MA degree and fined Kejriwal ₹25,000. Gujarat University Registrar filed a criminal defamation suit against Kejriwal and Sanjay Singh. In October 2024, the Supreme Court refused to quash the defamation summons."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "The Degree Authenticity Controversy",
          claim: {
            title: "AAP / Arvind Kejriwal Allegations",
            content: "Alleged that Modi's BA and MA degrees were fabricated or non-existent, citing discrepancies in font styles on the marksheets and demanding complete university register inspection under the RTI Act."
          },
          evidence: {
            title: "University Verifications & Court Actions",
            content: "Delhi University Registrar formally stated that the BA degree is genuine (Roll number 16535, Enrolment number CC 5970/74). Gujarat University placed the MA degree on its website. However, the Gujarat High Court set aside the CIC order directing public inspection of records."
          },
          response: {
            title: "Criminal Defamation Lawsuit & Judicial Status",
            content: "Gujarat University filed a criminal defamation suit asserting that Kejriwal's press conferences tarnished the university's reputation. Important legal distinction: the ongoing trial adjudicates whether statements were defamatory, not conducting an independent forensic audit of the certificate."
          }
        }
      ],
      sources: [
        { title: "Gujarat High Court Judgment (C/SCA/18485/2016 - Gujarat University vs. CIC)", type: "Judicial Order" },
        { title: "Supreme Court Order Dismissing Kejriwal's Quashing Petition (Oct 2024)", type: "Supreme Court Ruling" },
        { title: "Delhi University Registrar Press Notification on 1978 BA Records (2016)", type: "Official Statement" },
        { title: "LiveLaw & Scroll.in Legal Dossier on the Degree Defamation Trial (2023–2025)", type: "Legal Reporting" }
      ]
    },

    {
      id: 4,
      screenId: "5058c903b0bc4e30947864891a6e04bb",
      title: "2002 Riots & Legal Outcomes",
      period: "2001–2004",
      location: "Godhra, Ahmedabad, Gandhinagar, Washington D.C.",
      summary: "Appointed Gujarat CM in October 2001. The Godhra train burning on Feb 27, 2002 was followed by statewide communal riots. A Supreme Court-appointed SIT investigated Modi for conspiracy and issued a clean chit in 2012, upheld by the Supreme Court in 2022.",
      primaryImages: [
        {
          url: "assets/images/arc4_early_political_leadership.jpeg",
          caption: "Modi in the early 2000s during his first term as Chief Minister of Gujarat.",
          tag: "Chief Minister / Gandhinagar"
        },
        {
          url: "assets/images/arc4_usa_tour_1993.jpeg",
          caption: "Modi on an official visit to the United States in 1993, prior to the 2005 visa revocation.",
          tag: "International Travel / US 1993"
        },
        {
          url: "assets/images/arc4_paris_travel.jpeg",
          caption: "Modi at the Eiffel Tower in Paris during European political outreach in the 1990s.",
          tag: "European Tour / 1990s"
        }
      ],
      keyEvents: [
        {
          year: "2001",
          date: "October 7, 2001",
          headline: "Sworn in as Gujarat Chief Minister",
          text: "Appointed Chief Minister by the BJP central command replacing Keshubhai Patel following the Jan 2001 Bhuj earthquake and administrative dissatisfaction."
        },
        {
          year: "2002",
          date: "February 27, 2002",
          headline: "Godhra Sabarmati Express Carnage",
          text: "Coach S-6 of the Sabarmati Express carrying Hindu pilgrims (*kar sevaks*) was set on fire at Godhra station, killing 59 people (including 27 women and 10 children)."
        },
        {
          year: "2002",
          date: "Feb 28 – March 2002",
          headline: "Statewide Communal Violence",
          text: "Large-scale communal riots erupted across Gujarat. Official government records state 1,044 people were killed (790 Muslims, 254 Hindus), with 223 missing and 2,500 injured. Major massacres occurred at Gulberg Society and Naroda Patiya."
        },
        {
          year: "2005",
          date: "March 18, 2005",
          headline: "US Visa Revocation under IRFA",
          text: "US State Department revoked Modi's tourist/business visa and denied a diplomatic visa under Section 212(a)(2)(G) of the Immigration and Nationality Act / International Religious Freedom Act of 1998, making him the only foreign official ever denied a visa under that provision."
        },
        {
          year: "2012",
          date: "February 8, 2012",
          headline: "Supreme Court SIT Closure Report (Clean Chit)",
          text: "The Supreme Court-appointed Special Investigation Team (SIT), headed by former CBI Director R.K. Raghavan, filed a 541-page closure report stating there was no prosecutable evidence against Narendra Modi or 63 other senior officials."
        },
        {
          year: "2022",
          date: "June 24, 2022",
          headline: "Supreme Court Zakia Jafri Judgment",
          text: "A three-judge Supreme Court bench (Justice A.M. Khanwilkar, Justice Dinesh Maheshwari, Justice C.T. Ravikumar) dismissed Zakia Jafri's challenge to the SIT report, upholding the clean chit and concluding there was no evidence of a high-level state-sponsored conspiracy."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "State Complicity Allegations & Administrative Inaction",
          claim: {
            title: "Human Rights Groups & Zakia Jafri Petition",
            content: "Human Rights Watch, Amnesty International, and the National Human Rights Commission (NHRC) alleged that the state government actively delayed police deployment, permitted retaliatory bandhs, and was complicit in the violence."
          },
          evidence: {
            title: "SIT Probe & Army Deployment Records",
            content: "The SIT questioned Modi for over 9 hours. Official records demonstrated that the Gujarat government requested Indian Army deployment within 24 hours of violence (Army arrived Feb 28 midnight, deployed March 1). Curfews were imposed across 27 cities, and over 34,000 preventative arrests were made."
          },
          response: {
            title: "Supreme Court 2022 Final Judgment",
            content: "The Supreme Court of India conclusively upheld the SIT findings in June 2022, ruling that allegations of a criminal conspiracy at the highest levels were 'devoid of merits and ought to be rejected'. Legal status: Case formally and definitively closed in Indian jurisprudence."
          }
        },
        {
          topic: "US Visa Reversal & Diplomatic Rehabilitation",
          claim: {
            title: "Diplomatic Sanction vs. Realpolitik",
            content: "Critics argue the US visa ban reversal in 2013–2014 was a pragmatic sacrifice of human rights principles for geopolitical and economic leverage with India."
          },
          evidence: {
            title: "State Department Timeline",
            content: "US Ambassador Nancy Powell met Modi in Gandhinagar in February 2014. Following Modi's election victory in May 2014, President Barack Obama telephoned to congratulate him and formally invited him to the White House."
          },
          response: {
            title: "Supporters' Framing",
            content: "Supporters view the US diplomatic restoration as natural vindication once Indian legal institutions cleared him of all charges through due process."
          }
        }
      ],
      sources: [
        { title: "Supreme Court Judgment: Zakia Ahsan Jafri vs. State of Gujarat (SLP Crl. No. 3777/2020)", type: "Supreme Court Ruling" },
        { title: "SIT Closure Report on 2002 Gujarat Riots (Metropolitan Magistrate, Ahmedabad, 2012)", type: "Official Investigation" },
        { title: "National Human Rights Commission (NHRC) Report on Gujarat (2002)", type: "Human Rights Document" },
        { title: "US Congressional Research Service (CRS) Report on Narendra Modi and US-India Relations", type: "Congressional Record" }
      ]
    },

    {
      id: 5,
      screenId: "0aeae0fd64b543c3b6f08df46ece23b3",
      title: "The Vibrant Gujarat Era",
      period: "2004–2014",
      location: "Gandhinagar, Sanand, Mundra, Ahmedabad",
      summary: "Modi rebranded Gujarat as India's premier investment destination through 'Vibrant Gujarat' summits. Achieved three consecutive assembly election victories (2002, 2007, 2012). The era saw rapid infrastructure growth, the Tata Nano relocation, and intense debate over Human Development Indicators.",
      primaryImages: [
        {
          url: "assets/images/arc5_modi_amitshah_kutch.jpeg",
          caption: "Modi and Home Minister Amit Shah visiting the Rann of Kutch development initiative (Gujarat CM era).",
          tag: "Gujarat Governance / Kutch"
        },
        {
          url: "assets/images/arc5_safari_suit_boat.jpeg",
          caption: "Modi reviewing coastal and maritime development in Gujarat (circa late 2000s).",
          tag: "Infrastructure Review"
        }
      ],
      keyEvents: [
        {
          year: "2003",
          date: "October 2003",
          headline: "Inaugural Vibrant Gujarat Global Summit",
          text: "Launched biennial summits to attract global direct investment, introducing single-window environmental and industrial clearances."
        },
        {
          year: "2007",
          date: "December 2007",
          headline: "Second Term Re-election",
          text: "Won a decisive majority (117 of 182 seats) on a governance and economic development platform."
        },
        {
          year: "2008",
          date: "October 2008",
          headline: "Tata Nano Sanand Deal",
          text: "Following farmer protests against Tata in Singur, West Bengal, Modi sent Ratan Tata a one-word SMS: 'Welcome'. Gujarat allocated 1,100 acres in Sanand within days, cementing Gujarat's reputation as pro-industry."
        },
        {
          year: "2012",
          date: "December 2012",
          headline: "Third Term Re-election",
          text: "Secured 115 seats, positioning himself as the undisputed prime ministerial candidate for the 2014 national elections."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "The 'Gujarat Model' vs. Human Development Indicators (HDI)",
          claim: {
            title: "Economists & Opposition Critique (Amartya Sen, Dreze)",
            content: "Argued the 'Gujarat Model' was an unbalanced corporate-led growth model that neglected public health, malnutrition (Gujarat ranked behind several poorer states in child stunting), and secondary education spending."
          },
          evidence: {
            title: "Macroeconomic & Social Data (2001–2012)",
            content: "Gujarat recorded an average annual GSDP growth of 10.1% (compared to India's 7.6%), turned around the state power board into an electricity surplus state (Jyotigram Yojana), and achieved 9.6% agricultural growth. However, NFHS-3 data showed 44.6% child malnutrition."
          },
          response: {
            title: "Government Defense (Bhagwati & Panagariya)",
            content: "Economists Jagdish Bhagwati and Arvind Panagariya defended the model, demonstrating that rapid economic growth generated fiscal revenue for long-term poverty alleviation, rural electrification, and road connectivity across all 18,000 villages."
          }
        }
      ],
      sources: [
        { title: "Gujarat State Planning Board Economic Survey Reports (2004–2014)", type: "Government Data" },
        { title: "India's Tryst with Destiny (Jagdish Bhagwati & Arvind Panagariya, 2013)", type: "Academic Analysis" },
        { title: "An Uncertain Glory: India and its Contrad contradictions (Jean Drèze & Amartya Sen, 2013)", type: "Academic Analysis" },
        { title: "RBI Handbook of Statistics on the Indian Economy (State-wise Growth Data)", type: "Central Bank Data" }
      ]
    },

    {
      id: 6,
      screenId: "43c71f778377460cabbee3c2eb10b759",
      title: "National Ascension",
      period: "2014–2019",
      location: "New Delhi, Varanasi, Srinagar, Nationwide",
      summary: "First single-party Lok Sabha majority in 30 years (282 seats). First term was marked by transformative structural changes: Jan Dhan financial inclusion, Demonetization (2016), Goods and Services Tax (GST 2017), and the Balakot air strikes.",
      primaryImages: [
        {
          url: "assets/images/arc6_stadium_crowd_hero.jpeg",
          caption: "Prime Minister Narendra Modi addressing a monumental rally crowd.",
          tag: "National Ascension / Mass Rally"
        },
        {
          url: "assets/images/arc6_modi_doval_security.jpeg",
          caption: "Modi and National Security Advisor Ajit Doval strategizing behind curtains during high-level security deliberations.",
          tag: "National Security / Doval"
        }
      ],
      keyEvents: [
        {
          year: "2014",
          date: "May 26, 2014",
          headline: "Sworn in as 14th Prime Minister of India",
          text: "BJP won 282 seats (NDA: 336), the first single-party parliamentary majority since 1984. SAARC leaders attended the historic swearing-in ceremony at Rashtrapati Bhavan."
        },
        {
          year: "2016",
          date: "November 8, 2016",
          headline: "Demonetization of ₹500 & ₹1000 Notes",
          text: "Announced the sudden invalidation of 86% of circulating currency to combat black money, counterfeit currency, and terror financing. Led to temporary economic disruption, cash queues, and rapid acceleration of the UPI digital payments ecosystem."
        },
        {
          year: "2017",
          date: "July 1, 2017",
          headline: "Goods and Services Tax (GST) Enactment",
          text: "Unified dozens of central and state indirect taxes into a single nationwide tax regime at a midnight parliamentary session."
        },
        {
          year: "2019",
          date: "February 26, 2019",
          headline: "Balakot Air Strikes",
          text: "Following the Pulwama terror attack in J&K that killed 40 CRPF personnel, the Indian Air Force conducted airstrikes against a Jaish-e-Mohammed camp in Balakot, Pakistan."
        },
        {
          year: "2019",
          date: "August 5, 2019",
          headline: "Abrogation of Article 370",
          text: "Parliament revoked Jammu and Kashmir's special autonomous constitutional status and bifurcated the state into two Union Territories: Jammu & Kashmir, and Ladakh."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "Demonetization Outcomes: Economic Shock vs. Formalization",
          claim: {
            title: "Opposition & Economic Critiques",
            content: "Former PM Manmohan Singh described it as 'monumental mismanagement and organized loot'. The RBI reported that over 99.3% of banned notes returned to banks, indicating black money was not eliminated while informal small businesses suffered severely."
          },
          evidence: {
            title: "RBI Annual Reports & Digital Growth Data",
            content: "₹15.31 lakh crore out of ₹15.41 lakh crore demonetized notes were returned. GDP growth dipped by ~1.5% in subsequent quarters. Simultaneously, digital payments through UPI expanded exponentially from ~2 million monthly transactions in 2016 to billions, and personal income tax filers increased by 25%."
          },
          response: {
            title: "Government Stance & Supreme Court 2023 Ruling",
            content: "In January 2023, a 4:1 Constitution Bench of the Supreme Court upheld the legality of the demonetization decision-making process. The government maintained the primary goal was digitizing the economy, widening the direct tax base, and curbing hawala networks."
          }
        },
        {
          topic: "Article 370 Abrogation & Security Lockdown",
          claim: {
            title: "Human Rights & J&K Regional Parties",
            content: "Critiqued the move as unilateral and unconstitutional, citing the preventive detention of three former Chief Ministers (Farooq Abdullah, Omar Abdullah, Mehbooba Mufti) and a 17-month high-speed mobile internet shutdown."
          },
          evidence: {
            title: "Constitutional Procedure & Security Records",
            content: "Executed via Presidential Order C.O. 272/273 and statutory resolutions in Parliament. In December 2023, a 5-judge Supreme Court Constitution Bench unanimously upheld the abrogation as constitutionally valid, while directing elections by September 2024."
          },
          response: {
            title: "Official Government Position",
            content: "Argued that Article 370 was temporary, fueled separatism, and deprived women and underprivileged Dalits of central Indian rights (such as RTI and reservations). Post-2019 recorded significant drops in stone-pelting incidents and tourist arrivals surged above 20 million."
          }
        }
      ],
      sources: [
        { title: "Supreme Court Constitution Bench Judgment on Demonetization (WP Civil No. 906/2016)", type: "Supreme Court Ruling" },
        { title: "Supreme Court Constitution Bench Judgment on Article 370 (Dec 11, 2023)", type: "Supreme Court Ruling" },
        { title: "Reserve Bank of India (RBI) Annual Report (2017–2018)", type: "Official Data" },
        { title: "Election Commission of India: 2014 Lok Sabha General Election Results", type: "Official Record" }
      ]
    },

    {
      id: 7,
      screenId: "eade49c5777e492a9bb32a2aac847503",
      title: "Policy & Protests",
      period: "2019–2021",
      location: "New Delhi, Shaheen Bagh, Singhu Border, Nationwide",
      summary: "Massive popular mobilizations over the Citizenship Amendment Act (CAA) and the Three Farm Laws. Marked the historic November 19, 2021 repeal of the Farm Laws and a rare televised prime ministerial apology.",
      primaryImages: [],
      keyEvents: [
        {
          year: "2019",
          date: "December 11, 2019",
          headline: "Citizenship Amendment Act (CAA) Passed",
          text: "Fast-tracked Indian citizenship for non-Muslim persecuted minorities (Hindu, Sikh, Buddhist, Jain, Parsi, Christian) who entered India before Dec 31, 2014 from Pakistan, Bangladesh, and Afghanistan."
        },
        {
          year: "2019–20",
          date: "Dec 2019 – March 2020",
          headline: "Nationwide Anti-CAA / NRC Protests",
          text: "Protests erupted across major universities and at Shaheen Bagh in Delhi. In February 2020, communal riots in North-East Delhi resulted in 53 deaths."
        },
        {
          year: "2020",
          date: "September 20, 2020",
          headline: "Passage of Three Agricultural Reform Laws",
          text: "Parliament passed three agricultural deregulation bills intended to permit private grain procurement outside state APMC mandis and facilitate contract farming."
        },
        {
          year: "2020–21",
          date: "Nov 2020 – Nov 2021",
          headline: "Year-Long Farmers' Encampment",
          text: "Tens of thousands of farmers from Punjab, Haryana, and Western UP set up permanent encampments at Delhi's borders (Singhu, Tikri, Ghazipur) demanding total repeal."
        },
        {
          year: "2021",
          date: "November 19, 2021",
          headline: "Farm Laws Repeal & Public Apology",
          text: "On Guru Nanak Jayanti, Modi announced the total withdrawal of the farm laws in a national address, stating: 'Perhaps there could have been shortcomings in our penance that we were unable to convince the farmer brothers of the truth.'"
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "The Farm Laws Repeal: Analysis of the 'No Retreat' Style",
          claim: {
            title: "Opposition & Farmer Union Framing",
            content: "Farmer unions hailed the repeal as a historic victory of mass democracy against executive unilateralism. Critics noted the reversal broke his signature 'no retreat, no compromise' governing posture, prompted by looming elections in Uttar Pradesh and Punjab."
          },
          evidence: {
            title: "Protest Timeline & Formal Repeal Act",
            content: "The agitation lasted 378 days with over 11 rounds of government-union talks. On Nov 29, 2021, Parliament passed the Farm Laws Repeal Act without debate."
          },
          response: {
            title: "Official Government Rationale",
            content: "The government maintained the reforms were progressive and favored small farmers, but were repealed in the interest of national social harmony and preventing external destabilization along sensitive border states."
          }
        },
        {
          topic: "Citizenship Amendment Act (CAA) Controversy",
          claim: {
            title: "Critics & International Scrutiny",
            content: "Critics and the UN High Commissioner for Human Rights argued that making religion a specific criterion for naturalization violated Article 14 (Equality) and the secular foundation of India's Constitution."
          },
          evidence: {
            title: "Legislative Text & Ministry Notifications",
            content: "The CAA applies strictly to refugees who fled 3 designated Islamic republics due to religious persecution prior to 2014. It does not alter or strip the citizenship status of any existing Indian citizen."
          },
          response: {
            title: "Government Position (MHA)",
            content: "The Ministry of Home Affairs reiterated that the law is an affirmative humanitarian measure for persecuted minorities in neighboring theocratic states, not an anti-minority domestic statute. Operational rules were notified in March 2024."
          }
        }
      ],
      sources: [
        { title: "The Farm Laws Repeal Act, 2021 (Act No. 40 of 2021, Ministry of Law and Justice)", type: "Statutory Law" },
        { title: "The Citizenship (Amendment) Act, 2019 (Gazette of India, Dec 12, 2019)", type: "Statutory Law" },
        { title: "Supreme Court Record of Proceedings on Farm Law Petitions (2021)", type: "Court Record" },
        { title: "Special Address to the Nation by PM Narendra Modi (Nov 19, 2021 Transcript)", type: "Official Speech" }
      ]
    },

    {
      id: 8,
      screenId: "c0c2d5e754024da08ec69dc767542966",
      title: "The Adani Relationship",
      period: "1990s–Ongoing",
      location: "Ahmedabad, Mundra, New Delhi, New York",
      summary: "A decades-long relationship dating back to Gujarat. Adani Group expanded into critical national infrastructure (ports, airports, green energy, mining, NDTV). The relationship faced intense scrutiny following the Hindenburg Research report (2023) and US federal indictment (2024).",
      primaryImages: [
        {
          url: "assets/images/modi_adani_jet.jpeg",
          caption: "Narendra Modi and Gautam Adani traveling together in a private aircraft (circa early 2010s).",
          tag: "Archival / Business Proximity"
        }
      ],
      keyEvents: [
        {
          year: "2002–03",
          date: "2002–2003",
          headline: "Origins of Alliance in Gujarat",
          text: "Following the 2002 riots when business lobby CII criticized Gujarat, Gautam Adani rallied local industrialists to form the Resurgent Gujarat group and helped fund the first Vibrant Gujarat Summit."
        },
        {
          year: "2014–22",
          date: "2014–2022",
          headline: "Conglomerate Expansion into Strategic Infrastructure",
          text: "Adani Group won privatized management concessions for 6 major airports, became India's largest private port operator (Mundra), and acquired ACC and Ambuja Cements, expanding conglomerate revenue tenfold."
        },
        {
          year: "2023",
          date: "January 24, 2023",
          headline: "Hindenburg Research Short-Seller Report",
          text: "US short-seller Hindenburg Research published a report alleging stock manipulation, accounting fraud, and offshore shell entities, wiping ~$90 billion in group market capitalization."
        },
        {
          year: "2024",
          date: "January 2024",
          headline: "Supreme Court Ruling on SEBI Probe",
          text: "Supreme Court rejected petitions demanding a CBI or SIT probe into Adani, directing market regulator SEBI to conclude its investigation and noting that third-party short-seller reports cannot override regulatory due process."
        },
        {
          year: "2024",
          date: "November 20, 2024",
          headline: "US Federal Court Indictment",
          text: "US DOJ and SEC indicted Gautam Adani and seven executives in the Eastern District of New York over alleged $250M bribery schemes to state electricity officials to secure solar power contracts."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "Crony Capitalism Allegations vs. National Champion Model",
          claim: {
            title: "Opposition & Investigative Allegations",
            content: "Opposition parties led by Rahul Gandhi alleged 'Modani' crony capitalism, asserting that tender rules (such as airport privatization criteria) were altered to favor Adani, and alleging offshore shell linkages."
          },
          evidence: {
            title: "Tender Records, Rebuttal & Regulatory Filings",
            content: "Adani Group issued a detailed 413-page rebuttal denying fraud and affirming full compliance with Indian securities laws. SEBI completed 22 of 24 regulatory inquiries. Unproven claim warning: The allegation that Modi personally holds private financial assets in Adani entities has never been supported by documentary evidence."
          },
          response: {
            title: "Government & Adani Stance",
            content: "Modi and the PMO denied favoring any single corporate house, noting that Adani also won multi-billion dollar projects in opposition-ruled states (e.g. Telangana, Rajasthan, Kerala, West Bengal). The government frames infrastructure conglomerates as essential 'National Champions' capable of matching Chinese state-backed infrastructure overseas."
          }
        }
      ],
      sources: [
        { title: "Supreme Court Judgment on Adani-Hindenburg PILs (WP Civil No. 162/2023)", type: "Supreme Court Ruling" },
        { title: "United States District Court, Eastern District of New York: Indictment against Gautam Adani et al. (1:24-cr-00433)", type: "US Federal Indictment" },
        { title: "Hindenburg Research Report: Adani Group - How The World's 3rd Richest Man Is Pulling The Largest Con (Jan 2023)", type: "Short-Seller Report" },
        { title: "Adani Group 413-Page Comprehensive Rebuttal (Jan 29, 2023)", type: "Corporate Response" }
      ]
    },

    {
      id: 9,
      screenId: "6b396e7ba36843f3aed9f9b4a1059d37",
      title: "Press Freedom & Media Environment",
      period: "2014–Ongoing",
      location: "New Delhi, Mumbai, Paris (RSF Headquarters)",
      summary: "India's ranking on the World Press Freedom Index slipped from 140th in 2014 to 157th in recent indices. Concentrated corporate ownership, IT rules, tax raids on independent outlets, and government rebuttal regarding vibrant multilingual media.",
      primaryImages: [],
      keyEvents: [
        {
          year: "2014",
          date: "2014",
          headline: "Press Index Baseline: 140th Rank",
          text: "India ranked 140 out of 180 countries on the Reporters Without Borders (RSF) World Press Freedom Index."
        },
        {
          year: "2021",
          date: "February 2021",
          headline: "IT Rules for Digital Media & Intermediaries",
          text: "Ministry of Electronics and IT introduced Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, creating a three-tier grievance mechanism."
        },
        {
          year: "2022",
          date: "August–Dec 2022",
          headline: "Adani Acquisition of NDTV",
          text: "Adani Group acquired a controlling majority stake in New Delhi Television (NDTV), leading to high-profile resignations of prominent critical journalists (Ravish Kumar, Prannoy Roy)."
        },
        {
          year: "2023",
          date: "February 2023",
          headline: "Income Tax Surveys at BBC India Offices",
          text: "Income Tax department conducted multi-day 'survey operations' at BBC offices in Delhi and Mumbai shortly after BBC released a two-part documentary examining the 2002 Gujarat riots."
        },
        {
          year: "2024–26",
          date: "2024–2026",
          headline: "Index Decline to 157th Rank",
          text: "India slipped to 157th on the RSF index, with RSF citing media consolidation, state advertising leverage, and legal harassment of independent journalists under UAPA."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "Media Consolidation & Freedom Index Rankings",
          claim: {
            title: "RSF & Press Freedom Advocates",
            content: "Reporters Without Borders and CPJ characterize India's mainstream news environment as 'Godi Media' (lapdog media), citing concentrated media ownership by Reliance (Network18) and Adani (NDTV), self-censorship, and aggressive tax/police probes against critical independent newsrooms (NewsClick, Dainik Bhaskar)."
          },
          evidence: {
            title: "Ownership Metrics & Judicial Stays",
            content: "Reliance Network18 reaches ~800 million Indians across 70+ channels. Multiple High Courts (Bombay, Madras) stayed key provisions of the 2021/2023 IT Rules Fact-Check Unit as violative of Article 19(1)(a) freedom of speech."
          },
          response: {
            title: "Government Counter-Rebuttal & Nuance",
            content: "The Ministry of Information & Broadcasting officially rejected RSF rankings as opaque, biased, and methodologically flawed, pointing out that India possesses over 140,000 registered newspapers, 900+ television channels in 22 languages, and a hyper-critical digital YouTube news ecosystem."
          }
        }
      ],
      sources: [
        { title: "Reporters Sans Frontières (RSF): World Press Freedom Index Country Dossier: India", type: "Index Data" },
        { title: "Bombay High Court Judgment on IT Rules Fact Check Unit (Kunil Kamra vs. UOI, 2024)", type: "Judicial Stay" },
        { title: "Ministry of Information & Broadcasting Parliamentary Response on Media Rankings (Lok Sabha)", type: "Official Statement" },
        { title: "Committee to Protect Journalists (CPJ) Annual Prison Census & Impunity Index", type: "Journalistic Data" }
      ]
    },

    {
      id: 10,
      screenId: "e8552f73793048629012bd68b93bff73",
      title: "Hindutva & The Secular Question",
      period: "Decades–Ongoing",
      location: "Ayodhya, Varanasi, New Delhi, Nationwide",
      summary: "Examining Hindutva as a political philosophy (Savarkar 1923, Integral Humanism). The Ayodhya Ram Mandir consecration (Jan 2024), Uniform Civil Code, and competing values: majoritarianism vs. civilizational de-colonization and non-discriminatory welfarism.",
      primaryImages: [
        {
          url: "assets/images/arc10_modi_yogi_rammandir.jpeg",
          caption: "Modi with Uttar Pradesh Chief Minister Yogi Adityanath at the consecration of the Ram Janmabhoomi Mandir in Ayodhya (Jan 22, 2024).",
          tag: "Ram Mandir / Ayodhya 2024"
        },
        {
          url: "assets/images/arc10_modi_bjp_anime_art.jpeg",
          caption: "Modern political iconography & anime-style artistic representations of Modi-era leadership and the lotus symbol.",
          tag: "Cultural Iconography"
        },
        {
          url: "assets/images/arc10_modi_pop_edit1.jpeg",
          caption: "Viral internet subcultures and Gen Z political meme edits capturing contemporary political discourse.",
          tag: "Digital Subculture / Meme Art"
        },
        {
          url: "assets/images/arc10_modi_pop_edit2.jpeg",
          caption: "Cult pop-culture aesthetic edit reflecting youth political discourse and social media saturation.",
          tag: "Pop-Culture Political Edit"
        }
      ],
      keyEvents: [
        {
          year: "1923",
          date: "1923",
          headline: "Savarkar's Treatise on Hindutva",
          text: "V.D. Savarkar published 'Essentials of Hindutva', conceptualizing Hindutva as a cultural and civilizational identity rooted in pitribhumi (fatherland) and punyabhumi (holy land)."
        },
        {
          year: "1989–92",
          date: "1989–1992",
          headline: "Ram Janmabhoomi Movement & Rath Yatra",
          text: "L.K. Advani's Somnath-to-Ayodhya Rath Yatra (coordinated by Modi in Gujarat) transformed the Ayodhya movement into the defining national political catalyst for the BJP."
        },
        {
          year: "2019",
          date: "November 9, 2019",
          headline: "Unanimous Supreme Court Ayodhya Verdict",
          text: "A 5-judge Supreme Court bench unanimously awarded the disputed Ayodhya site to a Hindu trust for construction of the Ram Mandir, while ordering 5 acres of alternative land for a mosque."
        },
        {
          year: "2024",
          date: "January 22, 2024",
          headline: "Ram Mandir Consecration (Pran Pratishtha)",
          text: "Modi presided as the chief yajman over the consecration of the newly constructed Ram Mandir in Ayodhya, describing it as the dawn of a 'new civilizational era' (Nav Yug)."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "Civilizational Renaissance vs. Majoritarian Concerns",
          claim: {
            title: "Secular & Minority Critiques",
            content: "Critics and opposition parties argue that the state-sponsored consecration of religious monuments, anti-conversion laws, Uniform Civil Code pushes, and communal rhetoric fundamentally erode India's constitutional secular fabric and marginalize minority populations."
          },
          evidence: {
            title: "Constitutional Bench Verdict & Welfare Delivery Data",
            content: "The Supreme Court in S.R. Bommai (1994) affirmed secularism as part of the basic structure. Simultaneously, government welfare schemes (PM Awas, Ayushman Bharat, Ujjwala) are distributed across all communities without religious criteria."
          },
          response: {
            title: "Government Position & 'Sabka Saath, Sabka Vikas'",
            content: "Modi and the BJP contend that their ideology represents cultural decolonization and genuine secularism ('justice for all, appeasement of none'), emphasizing that cultural reclamation coexists with rapid economic modernization."
          }
        }
      ],
      sources: [
        { title: "Supreme Court of India: Ayodhya Title Dispute Judgment (M. Siddiq vs. Mahant Suresh Das, Nov 2019)", type: "Supreme Court Verdict" },
        { title: "National Family Health Survey (NFHS-5): Social Group Beneficiary Analysis", type: "Statistical Survey" },
        { title: "Archaeological Survey of India (ASI) Report on Ayodhya Excavations (2003)", type: "Archaeological Record" }
      ]
    },

    {
      id: 11,
      screenId: "ea27bb022d3048ed94e0798910ff42d2",
      title: "The Third Term & Beyond",
      period: "2024–Present",
      location: "New Delhi, Varanasi, Global Diplomatic Forums",
      summary: "In June 2024, Modi matched Jawaharlal Nehru's 1962 record by winning a third consecutive term as Prime Minister. Governs as the head of an NDA coalition government (293 seats, BJP 240). Focuses on Viksit Bharat 2047, Supreme Court Electoral Bonds verdict, and complex geopolitical positioning.",
      primaryImages: [
        {
          url: "assets/images/arc11_modi_night_rally.jpeg",
          caption: "Prime Minister Modi addressing a sea of supporters at a massive national campaign rally (2024).",
          tag: "National Mandate / 2024"
        }
      ],
      keyEvents: [
        {
          year: "2024",
          date: "February 15, 2024",
          headline: "Supreme Court Electoral Bonds Invalidation",
          text: "A 5-judge Supreme Court Constitution bench unanimously struck down the 2018 Electoral Bonds scheme as unconstitutional and violative of voters' right to information."
        },
        {
          year: "2024",
          date: "June 4, 2024",
          headline: "2024 General Election Results (NDA Coalition 3.0)",
          text: "BJP won 240 seats (falling short of 272 majority on its own), while the NDA coalition secured 293 seats with critical support from TDP (Chandrababu Naidu) and JD(U) (Nitish Kumar). Opposition INDIA bloc secured 234 seats."
        },
        {
          year: "2024",
          date: "June 9, 2024",
          headline: "Historic 3rd Swearing-in as Prime Minister",
          text: "Sworn in for a historic third consecutive term, equalling founding Prime Minister Jawaharlal Nehru's achievement in 1962."
        },
        {
          year: "2024–26",
          date: "2024–2026",
          headline: "Viksit Bharat 2047 Roadmap & Parliamentary Realities",
          text: "Advancing the 'Viksit Bharat 2047' developed-nation economic roadmap, navigating consensus-based coalition policymaking, and pursuing major reforms in green energy and semiconductor manufacturing."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "Coalition Restraint vs. Electoral Bonds Transparency",
          claim: {
            title: "Opposition & Civil Society View",
            content: "The 2024 verdict and election result are seen as a vital democratic correction: the unconstitutionality of Electoral Bonds exposed deep corporate-political funding nexus, and loss of single-party majority restored checks and balances to Parliament."
          },
          evidence: {
            title: "SBI Bond Disclosures & Parliamentary Numbers",
            content: "SBI disclosed ₹16,518 crore in electoral bonds from 2018 to 2024 (BJP received ~₹8,251 crore or ~50%). In the 18th Lok Sabha, key policy measures require mandatory consultation with coalition partners (TDP, JD(U), Shiv Sena)."
          },
          response: {
            title: "Government Stance & Viksit Bharat Vision",
            content: "Modi embraced the coalition mandate as 'NDA 3.0 for stability and economic momentum', asserting that democratic institutions remain fully resilient and that India is on track to become the world's 3rd largest economy before 2028."
          }
        }
      ],
      sources: [
        { title: "Supreme Court Constitution Bench Judgment on Electoral Bonds (Association for Democratic Reforms vs. UOI, Feb 2024)", type: "Supreme Court Ruling" },
        { title: "Election Commission of India: 18th General Election 2024 Detailed Seat Distribution", type: "Official Record" },
        { title: "NITI Aayog: Vision Document for Viksit Bharat @ 2047", type: "Policy Document" },
        { title: "State Bank of India (SBI) Submissions on Electoral Bonds Redemptions (Supreme Court Registry)", type: "Financial Registry" }
      ]
    },

    {
      id: 12,
      screenId: "cjp2026protests77fe4e90b27cba53a71d",
      title: "The Cockroach Janta Party (CJP) Protests",
      period: "May–July 2026",
      location: "New Delhi, Jantar Mantar, Parliament Street, Nationwide",
      summary: "Triggered by a viral judicial remark by CJI Surya Kant on May 15, 2026 and national outrage over medical entrance exam (NEET) paper leaks. Founded by Abhijeet Dipke, the Cockroach Janta Party (CJP) mobilized hundreds of thousands of Gen Z youth, leading to massive street clashes in Delhi and the unprecedented resignation of Education Minister Dharmendra Pradhan on July 25, 2026.",
      quotes: [
        {
          quote: "Kids, women, old men, they hit everyone with batons. We just wanted an exam system that isn't rigged for corrupt paper leak mafias.",
          speaker: "Student Protester to CNN",
          context: "Parliament Street March Crackdown (July 20, 2026)"
        },
        {
          quote: "There are youngsters like cockroaches, who don't get any employment... Some of them become media, RTI activists, and start attacking everyone.",
          speaker: "Chief Justice of India Surya Kant",
          context: "Supreme Court Credential Hearing (May 15, 2026 — Later Clarified)"
        }
      ],
      primaryDocuments: [
        {
          title: "Ministry of Education Resignation Communiqué",
          date: "July 25, 2026",
          archiveRef: "MOE-COMM-PRADHAN-RESIGN-2026",
          summary: "Formal resignation tendered by Union Education Minister Dharmendra Pradhan to the Prime Minister's Office."
        },
        {
          title: "Supreme Court Transcript (CJI Surya Kant Hearing)",
          date: "May 15, 2026",
          archiveRef: "SCI-TR-CP-2026-MAY15",
          summary: "Official court transcript containing the contested credential remark and subsequent judicial clarification."
        }
      ],
      primaryImages: [
        {
          url: "assets/images/arc12_cjp_delhi_police_clashes.jpeg",
          caption: "Police firing tear gas as student protesters march towards Parliament in New Delhi (July 20, 2026).",
          tag: "Street Clash / New Delhi"
        },
        {
          url: "assets/images/arc12_cjp_poster_dipke.jpeg",
          caption: "Cockroach Janta Party (CJP) visual campaign led by founder Abhijeet Dipke.",
          tag: "CJP Movement Visual"
        },
        {
          url: "assets/images/arc12_cjp_genz_crowd_protest.jpeg",
          caption: "Thousands of Gen Z students surrounding barricades at Jantar Mantar demanding education minister resignation.",
          tag: "Mass Demonstration / Jantar Mantar"
        }
      ],
      keyEvents: [
        {
          year: "2026",
          date: "May 15, 2026",
          headline: "CJI Surya Kant's 'Cockroach' Remark",
          text: "During a Supreme Court hearing on fraudulent degrees, Chief Justice Surya Kant remarked: 'There are youngsters like cockroaches, who don't get any employment... start attacking everyone.' Though clarified as applying only to fraudulent degree holders, the quote went viral across social media."
        },
        {
          year: "2026",
          date: "May 16, 2026",
          headline: "Founding of Cockroach Janta Party (CJP)",
          text: "Boston University alumnus and political strategist Abhijeet Dipke launched the satirical 'Cockroach Janta Party'. Driven by youth frustration over unemployment and paper leaks, the movement crossed 350,000 registered members within weeks, backed by opposition MPs Mahua Moitra and Kirti Azad."
        },
        {
          year: "2026",
          date: "June 6, 2026",
          headline: "NEET Paper Leaks Trigger Street Dissent",
          text: "National Medical Entrance Exam (NEET) paper leaks forced millions of students into cancellations. CJP launched nationwide protests demanding Education Minister Dharmendra Pradhan's resignation and compensation for affected student suicide families."
        },
        {
          year: "2026",
          date: "July 20, 2026",
          headline: "Parliament Street Police Crackdown",
          text: "Delhi Police deployed water cannons, tear gas, and lathicharge against peaceful student demonstrators marching towards Parliament, drawing widespread international condemnation."
        },
        {
          year: "2026",
          date: "July 22, 2026",
          headline: "Rahul Gandhi Detained at PM Residence Sit-in",
          text: "Opposition leader Rahul Gandhi staged a high-profile sit-in outside the Prime Minister's official 7 Lok Kalyan Marg residence and was briefly detained by Delhi Police."
        },
        {
          year: "2026",
          date: "July 25, 2026",
          headline: "Dharmendra Pradhan Resigns (Historic Policy Retreat)",
          text: "Following sustained nationwide protests and Modi's pledge of fast-track courts for paper-leak syndicates, Education Minister Dharmendra Pradhan formally resigned, marking a rare government retreat in the Modi era."
        }
      ],
      tripartiteAnalysis: [
        {
          topic: "NEET Paper Leaks & Accountability vs. Systemic Defense",
          claim: {
            title: "CJP & Student Protest Demands",
            content: "Protesters and opposition parties alleged pervasive institutional failure, government cronyism, and corrupt paper leak syndicates compromising the careers of 2.4 million medical aspirants, demanding ministerial accountability and judicial compensation."
          },
          evidence: {
            title: "Exam Cancellation Records & Police FIRs",
            content: "CBI arrests and state police FIRs in Bihar, Gujarat, and Maharashtra confirmed organized cheating cartels obtaining answer keys ahead of the examination. Millions of candidates were forced to appear for re-tests under Supreme Court supervision."
          },
          response: {
            title: "Government Rebuttal, Fast-Track Courts & Resignation",
            content: "Officials initially dismissed the protests, with Pradhan labeling CJP a 'B-team of disruptive elements'. However, following massive demonstrations, Prime Minister Modi announced fast-track anti-paper-leak tribunals, and on July 25, 2026, Minister Dharmendra Pradhan submitted his formal resignation. Parallel to the 2021 Farm Laws repeal, this constitutes one of the few instances of direct policy concession to street mobilization."
          }
        }
      ],
      sources: [
        { title: "CNN International: Students Clash with Delhi Police over Exam Leaks (July 2026)", type: "International Reporting" },
        { title: "Al Jazeera: India's Gen Z Cockroach Party Protests & Education Crisis", type: "Investigative News" },
        { title: "Ministry of Education Gazette Notification on National Anti-Paper-Leak Fast Track Tribunals (2026)", type: "Government Gazette" },
        { title: "Britannica Record: 2026 NEET Paper Leak Agitation and Resignation", type: "Encyclopedic Archive" }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MODI_FILES_DATA;
}
