// questions.js

/**
 * @typedef {Object} Question
 * @property {number} id - Unique identifier for the question.
 * @property {string} question - The text of the question.
 * @property {string[]} options - An array of possible answer options.
 * @property {string} correctAnswers - The correct answer string.
 * @property {string} domain - The CompTIA Security+ domain the question belongs to (e.g., "1.0 Attacks, Threats, and Vulnerabilities").
 * @property {string} difficulty - The difficulty level of the question ("Easy", "Medium", "Hard").
 * @property {string} explanation - A detailed explanation of the correct answer.
 * @property {string} hint - A short hint to guide the user to the correct answer.
 */

/**
 * @type {Question[]}
 */
const questionsPool = [
  // --- Domain 1.0: Attacks, Threats, and Vulnerabilities ---
  {
    id: 101,
    question: ["Which type of malware typically disguises itself as legitimate software?"],
    options: ["Virus", "Worm", "Trojan Horse", "Spyware"],
    correctAnswers: "Trojan Horse",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A Trojan horse is a type of malware that disguises itself as legitimate software or files to trick users into installing it.",
    hint: "Think about the ancient story of a wooden horse used to deceive the city of Troy."
  },
  {
    id: 102,
    question: "What is the primary goal of a Denial of Service (DoS) attack?",
    options: ["Data theft", "System disruption", "Privilege escalation", "Malware propagation"],
    correctAnswers: ["System disruption"],
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A DoS attack aims to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services.",
    hint: "The name itself gives a clue: it denies a service to its users."
  },
  {
    id: 103,
    question: "A user receives an email that appears to be from their bank, asking them to verify their account details by clicking a link. This is an example of what type of attack?",
    options: ["Vishing", "Smishing", "Phishing", "Whaling"],
    correctAnswers: "Phishing",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Phishing is a type of social engineering where an attacker attempts to trick individuals into revealing sensitive information, often via email, by impersonating a trustworthy entity.",
    hint: "This type of attack is a play on the word 'fishing'—trying to bait victims."
  },
  {
    id: 104,
    question: "Which vulnerability scanning tool is commonly used for identifying open ports and services on a network?",
    options: ["Wireshark", "Nmap", "Metasploit", "Burp Suite"],
    correctAnswers: "Nmap",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Nmap (Network Mapper) is a free and open-source utility for network discovery and security auditing. It's often used for port scanning.",
    hint: "This tool's name is an acronym for Network Mapper."
  },
  {
    id: 105,
    question: "What is the term for an attack that exploits a previously unknown vulnerability in software for which no patch is available?",
    options: ["Zero-day exploit", "Buffer overflow", "SQL injection", "Cross-site scripting (XSS)"],
    correctAnswers: "Zero-day exploit",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A zero-day exploit is an attack that occurs on the same day a vulnerability is discovered, before a patch or fix is available.",
    hint: "The name refers to the amount of time developers have had to fix the vulnerability."
  },
  {
    id: 106,
    question: "Which attack involves an attacker placing themselves between two communicating parties to intercept or alter messages?",
    options: ["Replay attack", "Man-in-the-middle (MitM) attack", "Brute-force attack", "Denial of Service (DoS)"],
    correctAnswers: "Man-in-the-middle (MitM) attack",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A Man-in-the-Middle (MitM) attack is when an attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.",
    hint: "Imagine a person literally standing in the middle of a conversation."
  },
  {
    id: 107,
    question: "Which of the following is an example of an opportunistic threat actor?",
    options: ["A nation-state attacker targeting critical infrastructure", "A hactivist launching a targeted DoS attack against a political organization", "A script kiddie running an automated spam campaign", "A disgruntled employee exfiltrating company data"],
    correctAnswers: "A script kiddie running an automated spam campaign",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Opportunistic threat actors, such as script kiddies, are typically less sophisticated and exploit easy-to-find vulnerabilities on a wide, non-targeted scale.",
    hint: "Think about an attacker who is just looking for an easy target without a specific goal."
  },
  {
    id: 108,
    question: "What is the primary motivation for a hacktivist?",
    options: ["Financial gain", "Personal fame", "Political or social change", "Intellectual challenge"],
    correctAnswers: "Political or social change",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Hacktivists use hacking techniques to promote a political or social agenda, often by defacing websites or leaking confidential information to the public.",
    hint: "The name is a combination of 'hacker' and 'activist'."
  },
  {
    id: 109,
    question: "Which attack vector involves a threat actor submitting a request to a web server for a file located outside the server's root directory?",
    options: ["Cross-site scripting (XSS)", "SQL injection", "Directory traversal", "Buffer overflow"],
    correctAnswers: "Directory traversal",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A directory traversal attack exploits a vulnerability that allows an attacker to navigate to a parent directory (../) to access unauthorized files or directories on the web server.",
    hint: "The attack name is self-explanatory, as it involves moving through the directory structure."
  },
  {
    id: 110,
    question: "What is the difference between a threat and a vulnerability?",
    options: ["A threat is a weakness, while a vulnerability is a potential event.", "A threat is a potential harm, while a vulnerability is a weakness that a threat can exploit.", "They are the same concept.", "A threat is an internal risk, while a vulnerability is an external one."],
    correctAnswers: "A threat is a potential harm, while a vulnerability is a weakness that a threat can exploit.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A vulnerability is a weakness in a system or process. A threat is a potential event that can cause harm. A threat exploits a vulnerability to create a risk.",
    hint: "Think of a locked door (control), a flimsy lock (vulnerability), and a burglar (threat)."
  },
  {
    id: 111,
    question: "Which of the following describes the difference between a virus and a worm?",
    options: ["A virus requires a host file to spread, while a worm can replicate on its own.", "A worm requires a host file to spread, while a virus can replicate on its own.", "A virus is a type of social engineering, while a worm is not.", "A worm is a type of rootkit, while a virus is not."],
    correctAnswers: "A virus requires a host file to spread, while a worm can replicate on its own.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Viruses attach to legitimate files (hosts) to spread, while worms are standalone malware that can self-replicate and spread independently across a network.",
    hint: "Think about how a biological virus needs a cell to replicate, but a worm can move on its own."
  },
  {
    id: 112,
    question: "An attacker uses a password-cracking tool that tries every possible combination of characters until the correct password is found. What type of attack is this?",
    options: ["Dictionary attack", "Rainbow table attack", "Brute-force attack", "Hybrid attack"],
    correctAnswers: "Brute-force attack",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A brute-force attack is a trial-and-error method used to crack passwords or encryption keys by trying every possible combination of characters.",
    hint: "The name implies using 'force' to break through security by trying every option."
  },
  {
    id: 113,
    question: "Which term is used to describe a targeted phishing attack against a specific, high-profile individual, such as a CEO?",
    options: ["Spear phishing", "Whaling", "Vishing", "Smishing"],
    correctAnswers: "Whaling",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Whaling is a highly targeted phishing attack that focuses on senior executives and other high-profile individuals within an organization.",
    hint: "This attack targets the 'big fish' in the company."
  },
  {
    id: 114,
    question: "An attacker modifies a URL parameter to gain unauthorized access to data in a database. What type of attack is this?",
    options: ["Cross-site scripting (XSS)", "SQL injection", "Directory traversal", "Buffer overflow"],
    correctAnswers: "SQL injection",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "SQL injection (SQLi) is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.",
    hint: "The attack targets the Structured Query Language (SQL) used to manage databases."
  },
  {
    id: 115,
    question: "What is the main purpose of a **honeypot**?",
    options: ["To provide a secure area for storing sensitive data", "To attract and trap attackers to learn about their methods", "To encrypt network traffic to prevent eavesdropping", "To monitor and analyze user behavior for anomalies"],
    correctAnswers: "To attract and trap attackers to learn about their methods",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A honeypot is a decoy system or network designed to attract cyber attackers, allowing an organization to observe their tactics and gather intelligence without risking real systems.",
    hint: "It's a sweet trap designed to lure in bears... or in this case, attackers."
  },
  {
    id: 116,
    question: "Which type of attack exploits the trust a user has in a website by forcing them to execute unwanted actions on a web application?",
    options: ["Cross-site scripting (XSS)", "Cross-site request forgery (CSRF)", "SQL injection", "Directory traversal"],
    correctAnswers: "Cross-site request forgery (CSRF)",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Cross-site request forgery (CSRF) is an attack that tricks a victim's browser into sending a malicious request to a trusted site, often exploiting a user's authenticated session.",
    hint: "This attack 'forges' a request from a trusted source."
  },
  {
    id: 117,
    question: "What is **credential stuffing**?",
    options: ["The act of physically stealing a user's credentials", "A type of brute-force attack", "Using a list of compromised user credentials to attempt to log into other online services", "The process of storing user credentials in plain text"],
    correctAnswers: "Using a list of compromised user credentials to attempt to log into other online services",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Credential stuffing is an attack in which an attacker takes a list of stolen usernames and passwords from a data breach and 'stuffs' them into login forms of other websites, betting that the user reuses the same credentials.",
    hint: "This attack 'stuffs' stolen credentials into new login fields."
  },
  {
    id: 118,
    question: "An attacker sends a malicious link to a user that, when clicked, executes a script in the user's browser, stealing their session cookie. What is this an example of?",
    options: ["SQL injection", "Cross-site scripting (XSS)", "CSRF", "Directory traversal"],
    correctAnswers: "Cross-site scripting (XSS)",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Cross-site scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. An attacker can use XSS to bypass access controls.",
    hint: "This attack 'scripts' a site from a 'cross' domain."
  },
  {
    id: 119,
    question: "What is the primary characteristic of an **insider threat**?",
    options: ["An attack originating from outside the organization's network.", "An attack carried out by a nation-state.", "An attack initiated by an employee, contractor, or partner.", "An attack that uses social engineering to gain access."],
    correctAnswers: "An attack initiated by an employee, contractor, or partner.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "An insider threat is a security risk that originates from within the organization, such as a malicious employee, a disgruntled former employee, or a contractor with privileged access.",
    hint: "The threat comes from a person who is already 'inside'."
  },
  {
    id: 120,
    question: "What is **pretexting** in the context of social engineering?",
    options: ["Creating a fabricated scenario to persuade a victim to give up information.", "Sending a mass email with a malicious link.", "Using an automated system to guess a password.", "Physically following an employee into a secure area."],
    correctAnswers: "Creating a fabricated scenario to persuade a victim to give up information.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Pretexting is a form of social engineering where an attacker creates a convincing but fake story (a pretext) to obtain information or access from a target.",
    hint: "The attacker is providing a 'pretext' for their actions."
  },
  {
    id: 121,
    question: "Which of the following is a symptom of a **buffer overflow** attack?",
    options: ["Slow network performance", "Repeated application crashes or unexpected behavior", "Unauthorized data modification", "Increased CPU usage"],
    correctAnswers: "Repeated application crashes or unexpected behavior",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A buffer overflow attack involves an attacker sending more data to a program's buffer than it can handle, which can cause the program to crash, execute malicious code, or behave erratically.",
    hint: "This is a memory-based attack that causes an application's 'buffer' to 'overflow'."
  },
  {
    id: 122,
    question: "What is a **logic bomb**?",
    options: ["A type of physical explosive device", "A malicious piece of code that activates when a specific condition is met", "A type of ransomware that locks a user out of their system", "A virus that infects boot sectors"],
    correctAnswers: "A malicious piece of code that activates when a specific condition is met",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A logic bomb is a piece of code intentionally inserted into a software system that will set off a malicious function when specified conditions are met, such as a specific date and time or a user's termination.",
    hint: "This malware is 'triggered' by a logical condition."
  },
  {
    id: 123,
    question: "Which of the following is an example of an **advanced persistent threat (APT)**?",
    options: ["A mass phishing campaign", "A quick, untargeted DoS attack", "A highly coordinated, long-term attack by a nation-state actor", "A single-use malware infection"],
    correctAnswers: "A highly coordinated, long-term attack by a nation-state actor",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "An APT is a prolonged, targeted attack in which an intruder gains access to a network and remains undetected for an extended period, often sponsored by a nation-state or well-funded group.",
    hint: "Think about a sophisticated, 'persistent' group that is 'advanced' in its methods."
  },
  {
    id: 124,
    question: "What is the primary difference between a **vulnerability scan** and a **penetration test**?",
    options: ["A vulnerability scan is automated, while a penetration test is manual.", "A vulnerability scan identifies weaknesses, while a penetration test exploits them.", "A vulnerability scan is only for networks, while a penetration test is for applications.", "A vulnerability scan is more expensive than a penetration test."],
    correctAnswers: "A vulnerability scan identifies weaknesses, while a penetration test exploits them.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A vulnerability scan is a passive process that uses automated tools to identify known weaknesses. A penetration test is a more active, hands-on process that simulates an attack to see if and how a vulnerability can be exploited.",
    hint: "A 'pen test' 'penetrates' the defenses."
  },
  {
    id: 125,
    question: "A company's email server is flooded with millions of requests from a botnet, causing it to become unresponsive. This is an example of a:",
    options: ["Denial of Service (DoS) attack", "Distributed Denial of Service (DDoS) attack", "Phishing attack", "SQL injection attack"],
    correctAnswers: "Distributed Denial of Service (DDoS) attack",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A DDoS attack is a DoS attack that uses multiple compromised computer systems (a botnet) to launch a flood of traffic from many different sources, making it harder to block.",
    hint: "The key word is 'distributed'—coming from multiple sources."
  },
  {
    id: 126,
    question: "What is **tailgating** in the context of physical security?",
    options: ["An attack where a person follows an authorized individual into a secure area without authorization.", "A type of malware that hides in a system's boot sector.", "A social engineering attack conducted via a telephone call.", "The process of a server being overloaded by too many requests."],
    correctAnswers: "An attack where a person follows an authorized individual into a secure area without authorization.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Tailgating is a physical security breach where an unauthorized person follows an authorized person through a secured entry point.",
    hint: "Think of a car following closely behind another car to get through a gate."
  },
  {
    id: 127,
    question: "Which of the following is a type of **vishing** attack?",
    options: ["An attacker sending a malicious text message to a user.", "An attacker creating a fake website to steal credentials.", "An attacker calling a user and impersonating a bank representative.", "An attacker physically planting a device on a network."],
    correctAnswers: "An attacker calling a user and impersonating a bank representative.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Vishing (voice phishing) is a social engineering attack conducted over the phone to trick individuals into revealing personal information.",
    hint: "The 'v' stands for 'voice'."
  },
  {
    id: 128,
    question: "A user notices that their web browser's home page has been changed, new toolbars have been installed, and pop-up ads are constantly appearing. What type of malware is likely responsible?",
    options: ["Ransomware", "Spyware", "Adware", "Worm"],
    correctAnswers: "Adware",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Adware is software that automatically displays or downloads unwanted advertisements when a user is online. It often comes bundled with free software.",
    hint: "The name implies that it's software that deals with 'ads'."
  },
  {
    id: 129,
    question: "What is **smishing**?",
    options: ["A phishing attack conducted via email.", "A phishing attack conducted via a phone call.", "A phishing attack conducted via SMS text messages.", "A phishing attack that targets high-profile individuals."],
    correctAnswers: "A phishing attack conducted via SMS text messages.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Smishing is a type of phishing attack that uses SMS (text messages) to trick victims into giving up personal information or clicking on malicious links.",
    hint: "The 'sm' stands for 'SMS'."
  },
  {
    id: 130,
    question: "Which of the following is a common symptom of a **botnet** infection?",
    options: ["The computer's hard drive space is rapidly decreasing.", "The computer is running at a very high CPU usage when idle.", "The computer is sending out large volumes of spam or malicious traffic.", "The user is unable to access certain websites."],
    correctAnswers: "The computer is sending out large volumes of spam or malicious traffic.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A botnet is a network of compromised computers (bots) controlled by a single attacker (bot-herder) to perform malicious tasks, such as sending spam, launching DDoS attacks, or mining cryptocurrency.",
    hint: "The compromised computer is a 'zombie' that is part of a larger network of bots."
  },
  {
    id: 131,
    question: "What is the primary purpose of a **security incident response team (SIRT)**?",
    options: ["To develop new security policies and procedures.", "To manage and configure security hardware.", "To respond to and manage cybersecurity incidents.", "To conduct regular vulnerability scans."],
    correctAnswers: "To respond to and manage cybersecurity incidents.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A SIRT is a dedicated team responsible for handling security incidents, from initial detection to final resolution.",
    hint: "The 'IR' in SIRT stands for 'Incident Response'."
  },
  {
    id: 132,
    question: "Which of the following is an example of an **evil twin** attack?",
    options: ["An attacker creating a fake website that looks like a legitimate one.", "An attacker creating a fake Wi-Fi access point with a name similar to a legitimate one.", "An attacker sending a text message impersonating a known contact.", "An attacker physically planting a rogue device on a network."],
    correctAnswers: "An attacker creating a fake Wi-Fi access point with a name similar to a legitimate one.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "An evil twin is a fraudulent Wi-Fi access point that mimics a legitimate one to trick users into connecting to it, allowing the attacker to intercept their traffic.",
    hint: "It's a malicious 'twin' of a legitimate access point."
  },
  {
    id: 133,
    question: "What is **session hijacking**?",
    options: ["A user's session token is stolen, allowing an attacker to impersonate the user.", "A DoS attack that floods a server with session requests.", "An attacker physically taking control of a user's computer.", "A malware that records a user's keyboard strokes."],
    correctAnswers: "A user's session token is stolen, allowing an attacker to impersonate the user.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Session hijacking is an attack where an attacker takes over a user's session, gaining unauthorized access to their account or a network, often by stealing a session cookie.",
    hint: "The attacker 'hijacks' the user's session."
  },
  {
    id: 134,
    question: "Which of the following describes a **waterhole attack**?",
    options: ["An attacker targets a specific group of users by infecting a website they are known to visit.", "An attacker floods a network with water, causing physical damage.", "An attacker gains access to a network by guessing the password to a watercooler.", "An attacker places a USB drive with malware on the ground in a public place."],
    correctAnswers: "An attacker targets a specific group of users by infecting a website they are known to visit.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A waterhole attack is a targeted attack where an attacker compromises a website that is frequently visited by a specific group of users to infect them with malware.",
    hint: "Think of an animal waiting at a 'watering hole' to ambush its prey."
  },
  {
    id: 135,
    question: "What is the primary goal of a **keylogger**?",
    options: ["To encrypt a user's data", "To record a user's keystrokes", "To monitor network traffic", "To delete files from a user's computer"],
    correctAnswers: "To record a user's keystrokes",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A keylogger is a type of spyware that records the keys struck on a keyboard, typically without the user's knowledge, to steal sensitive information such as passwords and credit card numbers.",
    hint: "This malware 'logs' the 'keys' you press."
  },
  {
    id: 136,
    question: "A user downloads a free game that appears legitimate, but in the background, it is secretly collecting their personal data. This is an example of what?",
    options: ["Ransomware", "Spyware", "Adware", "Virus"],
    correctAnswers: "Spyware",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Spyware is a type of malware that is installed on a computer without the user's knowledge and collects information about the user's activities.",
    hint: "This software is 'spying' on you."
  },
  {
    id: 137,
    question: "What is the primary purpose of a **rainbow table**?",
    options: ["To store plain text passwords", "To speed up the process of cracking password hashes", "To encrypt data at rest", "To generate random passwords"],
    correctAnswers: "To speed up the process of cracking password hashes",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes.",
    hint: "This table is used in conjunction with hashing to quickly reverse a password."
  },
  {
    id: 138,
    question: "Which of the following is a key characteristic of **ransomware**?",
    options: ["It steals user credentials.", "It encrypts a user's data and demands a ransom for its release.", "It secretly mines cryptocurrency on a user's computer.", "It changes the user's home page and displays unwanted ads."],
    correctAnswers: "It encrypts a user's data and demands a ransom for its release.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Ransomware is a type of malicious software that encrypts a user's files and demands a ransom payment in exchange for the decryption key.",
    hint: "The name implies a 'ransom' for your data."
  },
  {
    id: 139,
    question: "What is a **logic bomb**?",
    options: ["A type of physical explosive device", "A malicious piece of code that activates when a specific condition is met", "A type of ransomware that locks a user out of their system", "A virus that infects boot sectors"],
    correctAnswers: "A malicious piece of code that activates when a specific condition is met",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A logic bomb is a piece of code intentionally inserted into a software system that will set off a malicious function when specified conditions are met, such as a specific date and time or a user's termination.",
    hint: "This malware is 'triggered' by a logical condition."
  },
  {
    id: 140,
    question: "What is **pharming**?",
    options: ["A type of attack that redirects users from a legitimate website to a fake one without their consent.", "An attack that uses phone calls to steal information.", "A type of social engineering that uses mass email campaigns.", "A type of attack that exploits a zero-day vulnerability."],
    correctAnswers: "A type of attack that redirects users from a legitimate website to a fake one without their consent.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Pharming is a type of attack that redirects a user's legitimate website request to a fake, fraudulent website. This is often done by altering a host's file or through DNS poisoning.",
    hint: "It's like 'farming' for victims, but with a 'ph' sound."
  },
  {
    id: 141,
    question: "Which of the following is a type of **shoulder surfing** attack?",
    options: ["An attacker secretly watching a user enter a password or PIN.", "An attacker using a pair of binoculars to read a user's screen from a distance.", "An attacker using a camera to record a user's keyboard input.", "All of the above."],
    correctAnswers: "All of the above.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Shoulder surfing is a social engineering technique where an attacker observes a victim's personal or confidential information by looking over their shoulder.",
    hint: "The attacker is literally 'surfing' over your 'shoulder' to see information."
  },
  {
    id: 142,
    question: "What is a **buffer overflow** attack?",
    options: ["An attack that floods a network with traffic.", "An attack that exploits a vulnerability in a program by sending more data to a buffer than it can handle.", "An attack that redirects users to a malicious website.", "An attack that uses social engineering to steal information."],
    correctAnswers: "An attack that exploits a vulnerability in a program by sending more data to a buffer than it can handle.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A buffer overflow attack is a type of attack that overwrites a buffer's adjacent memory locations, which can cause the program to crash, execute malicious code, or behave erratically.",
    hint: "The attack causes an application's 'buffer' to 'overflow' with data."
  },
  {
    id: 143,
    question: "Which of the following is the most common motivation for a **hactivist** group?",
    options: ["Financial gain", "Espionage", "Political or social change", "Vandalism"],
    correctAnswers: "Political or social change",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Hacktivism is the use of hacking techniques to promote a political or social agenda, often by defacing websites, launching DoS attacks, or leaking confidential information.",
    hint: "The name combines 'hacker' and 'activist'."
  },
  {
    id: 144,
    question: "What is **typosquatting**?",
    options: ["Creating a fake website that looks like a legitimate one.", "Registering a domain name that is a common misspelling of a legitimate website.", "Sending a text message with a malicious link.", "Using a brute-force attack to guess a password."],
    correctAnswers: "Registering a domain name that is a common misspelling of a legitimate website.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Typosquatting, also known as URL hijacking, is a form of social engineering that targets users who make typographical errors when entering a website address into a web browser.",
    hint: "This attack takes advantage of a 'typo' in a web address."
  },
  {
    id: 145,
    question: "Which of the following is an example of an **on-path attack** (formerly known as a man-in-the-middle attack)?",
    options: ["An attacker intercepts a user's network traffic to steal their data.", "An attacker plants a physical device on a network.", "An attacker uses a brute-force attack to guess a password.", "An attacker sends a mass email with a malicious link."],
    correctAnswers: "An attacker intercepts a user's network traffic to steal their data.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "An on-path attack involves an attacker secretly relaying and altering communication between two parties who believe they are communicating directly with each other.",
    hint: "The attacker is on the 'path' of the communication."
  },
  {
    id: 146,
    question: "What is the primary characteristic of **pretexting**?",
    options: ["Creating a convincing but fake story to obtain information.", "Sending a mass email with a malicious link.", "Using an automated system to guess a password.", "Physically following an employee into a secure area."],
    correctAnswers: "Creating a convincing but fake story to obtain information.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Pretexting is a social engineering technique where an attacker creates a fake scenario to obtain private information. The 'pretext' is the fabricated scenario.",
    hint: "The attacker provides a 'pretext' for their actions."
  },
  {
    id: 147,
    question: "What is **credential stuffing**?",
    options: ["Using a list of stolen credentials to log into other services.", "The process of physically stealing a user's credentials.", "A type of brute-force attack that tries every possible password.", "A type of malware that steals credentials."],
    correctAnswers: "Using a list of stolen credentials to log into other services.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Credential stuffing is an attack where an attacker takes a list of usernames and passwords from a data breach and attempts to log in to other services, assuming users reuse credentials.",
    hint: "The attacker 'stuffs' stolen credentials into new login forms."
  },
  {
    id: 148,
    question: "Which of the following is a type of **SQL injection** attack?",
    options: ["An attacker submitting a request to a web server for a file outside the root directory.", "An attacker inserting malicious SQL statements into a web application's input field.", "An attacker running a script in a user's browser to steal session cookies.", "An attacker flooding a network with traffic to cause a denial of service."],
    correctAnswers: "An attacker inserting malicious SQL statements into a web application's input field.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "SQL injection (SQLi) is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.",
    hint: "The attack targets the Structured Query Language (SQL) used to manage databases."
  },
  {
    id: 149,
    question: "What is the primary goal of a **rainbow table** attack?",
    options: ["To crack Wi-Fi passwords.", "To reverse password hashes more quickly than a brute-force attack.", "To steal data from a database.", "To conduct a denial of service attack."],
    correctAnswers: "To reverse password hashes more quickly than a brute-force attack.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes. It saves time by not having to calculate hashes for every possible password.",
    hint: "This table is used to speed up the cracking of 'hashed' passwords."
  },
  {
    id: 150,
    question: "Which of the following is a type of **social engineering** attack?",
    options: ["Phishing", "Vishing", "Smishing", "All of the above."],
    correctAnswers: "All of the above.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Phishing, vishing, and smishing are all forms of social engineering, which is the psychological manipulation of people into performing actions or divulging confidential information.",
    hint: "Social engineering is a broad category of attacks that rely on human psychology."
  },
  {
    id: 151,
    question: "What is the primary function of a **honeypot**?",
    options: ["To attract and trap attackers to learn about their methods.", "To provide a secure area for storing sensitive data.", "To encrypt network traffic to prevent eavesdropping.", "To monitor and analyze user behavior for anomalies."],
    correctAnswers: "To attract and trap attackers to learn about their methods.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A honeypot is a decoy system or network designed to attract and observe attackers to gather intelligence on their tactics, techniques, and procedures.",
    hint: "It's a sweet trap designed to lure in bears... or in this case, attackers."
  },
  {
    id: 152,
    question: "What is **ransomware**?",
    options: ["Malware that displays unwanted ads.", "Malware that records keystrokes.", "Malware that encrypts a user's data and demands a ransom.", "Malware that disguises itself as legitimate software."],
    correctAnswers: "Malware that encrypts a user's data and demands a ransom.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Ransomware is a type of malicious software that encrypts a user's files and demands a payment in exchange for the decryption key.",
    hint: "The name implies a 'ransom' for your data."
  },
  {
    id: 153,
    question: "Which of the following is a symptom of a **buffer overflow** attack?",
    options: ["Slow network performance", "Repeated application crashes or unexpected behavior", "Unauthorized data modification", "Increased CPU usage"],
    correctAnswers: "Repeated application crashes or unexpected behavior",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A buffer overflow attack involves an attacker sending more data to a program's buffer than it can handle, which can cause the program to crash, execute malicious code, or behave erratically.",
    hint: "This is a memory-based attack that causes an application's 'buffer' to 'overflow'."
  },
  {
    id: 154,
    question: "What is the primary difference between a **vulnerability scan** and a **penetration test**?",
    options: ["A vulnerability scan is automated, while a penetration test is manual.", "A vulnerability scan identifies weaknesses, while a penetration test exploits them.", "A vulnerability scan is only for networks, while a penetration test is for applications.", "A vulnerability scan is more expensive than a penetration test."],
    correctAnswers: "A vulnerability scan identifies weaknesses, while a penetration test exploits them.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A vulnerability scan is a passive process that uses automated tools to identify known weaknesses. A penetration test is a more active, hands-on process that simulates an attack to see if and how a vulnerability can be exploited.",
    hint: "A 'pen test' 'penetrates' the defenses."
  },
  {
    id: 155,
    question: "What is the primary characteristic of an **insider threat**?",
    options: ["An attack originating from outside the organization's network.", "An attack carried out by a nation-state.", "An attack initiated by an employee, contractor, or partner.", "An attack that uses social engineering to gain access."],
    correctAnswers: "An attack initiated by an employee, contractor, or partner.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "An insider threat is a security risk that originates from within the organization, such as a malicious employee, a disgruntled former employee, or a contractor with privileged access.",
    hint: "The threat comes from a person who is already 'inside'."
  },
  {
    id: 156,
    question: "What is **pharming**?",
    options: ["A type of attack that redirects users from a legitimate website to a fake one without their consent.", "An attack that uses phone calls to steal information.", "A type of social engineering that uses mass email campaigns.", "A type of attack that exploits a zero-day vulnerability."],
    correctAnswers: "A type of attack that redirects users from a legitimate website to a fake one without their consent.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Pharming is a type of attack that redirects a user's legitimate website request to a fake, fraudulent website. This is often done by altering a host's file or through DNS poisoning.",
    hint: "It's like 'farming' for victims, but with a 'ph' sound."
  },
  {
    id: 157,
    question: "Which of the following is a type of **vishing** attack?",
    options: ["An attacker sending a malicious text message to a user.", "An attacker creating a fake website to steal credentials.", "An attacker calling a user and impersonating a bank representative.", "An attacker physically planting a device on a network."],
    correctAnswers: "An attacker calling a user and impersonating a bank representative.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Vishing (voice phishing) is a social engineering attack conducted over the phone to trick individuals into revealing personal information.",
    hint: "The 'v' stands for 'voice'."
  },
  {
    id: 158,
    question: "What is the purpose of a **security incident response team (SIRT)**?",
    options: ["To develop new security policies and procedures.", "To manage and configure security hardware.", "To respond to and manage cybersecurity incidents.", "To conduct regular vulnerability scans."],
    correctAnswers: "To respond to and manage cybersecurity incidents.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A SIRT is a dedicated team responsible for handling security incidents, from initial detection to final resolution.",
    hint: "The 'IR' in SIRT stands for 'Incident Response'."
  },
  {
    id: 159,
    question: "What is **session hijacking**?",
    options: ["A user's session token is stolen, allowing an attacker to impersonate the user.", "A DoS attack that floods a server with session requests.", "An attacker physically taking control of a user's computer.", "A malware that records a user's keyboard strokes."],
    correctAnswers: "A user's session token is stolen, allowing an attacker to impersonate the user.",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Session hijacking is an attack where an attacker takes over a user's session, gaining unauthorized access to their account or a network, often by stealing a session cookie.",
    hint: "The attacker 'hijacks' the user's session."
  },
  {
    id: 160,
    question: "Which of the following is an example of an **advanced persistent threat (APT)**?",
    options: ["A mass phishing campaign", "A quick, untargeted DoS attack", "A highly coordinated, long-term attack by a nation-state actor", "A single-use malware infection"],
    correctAnswers: "A highly coordinated, long-term attack by a nation-state actor",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "An APT is a prolonged, targeted attack in which an intruder gains access to a network and remains undetected for an extended period, often sponsored by a nation-state or well-funded group.",
    hint: "Think about a sophisticated, 'persistent' group that is 'advanced' in its methods."
  },

  // --- Domain 2.0: Architecture and Design ---
  {
    id: 201,
    question: "What is the purpose of a Security Operations Center (SOC)?",
    options: ["To develop new security software for an organization", "To act as a central hub for monitoring and protecting critical information assets", "To manage and configure all network devices", "To provide training to new employees on security policies"],
    correctAnswers: "To act as a central hub for monitoring and protecting critical information assets",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A SOC is a centralized facility where security professionals monitor and protect an organization's critical information assets across all business functions.",
    hint: "The 'C' in SOC stands for 'Center'."
  },
  {
    id: 202,
    question: "In the NIST Cybersecurity Framework, which function is responsible for performing ongoing proactive monitoring to ensure that security controls are effective?",
    options: ["Identify", "Protect", "Detect", "Respond"],
    correctAnswers: "Detect",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "The 'Detect' function of the NIST framework focuses on identifying the occurrence of a cybersecurity event through continuous monitoring and analysis.",
    hint: "This function is about actively looking for signs of an attack."
  },
  {
    id: 203,
    question: "Which of the following is a physical security control?",
    options: ["Firewall", "Biometric scanner", "Intrusion detection system (IDS)", "Data encryption"],
    correctAnswers: "Biometric scanner",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Physical security controls are used to deter or prevent physical access to premises and hardware. A biometric scanner controls physical entry based on a person's unique biological traits.",
    hint: "This type of control deals with tangible security measures."
  },
  {
    id: 204,
    question: "What is the principle of 'defense-in-depth'?",
    options: ["Implementing a single, strong security control", "Using a variety of security controls from a single vendor", "Deploying multiple, overlapping layers of diverse controls", "Focusing all security efforts on the network perimeter"],
    correctAnswers: "Deploying multiple, overlapping layers of diverse controls",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Defense-in-depth is a strategy that uses multiple, independent layers of security controls to protect against a variety of threats and to ensure that if one control fails, others are in place to provide protection.",
    hint: "Think about multiple barriers a castle would have to protect against an invasion."
  },
  {
    id: 205,
    question: "Which of the following is an example of a Managerial security control?",
    options: ["Security awareness training", "Antivirus software", "A firewall", "An Access Control List (ACL)"],
    correctAnswers: "Security awareness training",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Managerial controls provide oversight of the information system. Security awareness training is a managerial control implemented by people to influence the security behavior of others.",
    hint: "This type of control deals with policies, procedures, and guidance."
  },
  {
    id: 206,
    question: "What is the purpose of a **demilitarized zone (DMZ)**?",
    options: ["To isolate internal networks from external networks.", "To provide a secure area for storing sensitive data.", "To create a buffer zone between an organization's internal network and the internet.", "To encrypt all network traffic."],
    correctAnswers: "To create a buffer zone between an organization's internal network and the internet.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A DMZ is a sub-network that contains an organization's exposed, outward-facing services to a larger and untrusted network, such as the internet. It acts as a buffer zone to protect the internal network.",
    hint: "Think of a 'no-man's-land' between two opposing forces."
  },
  {
    id: 207,
    question: "In network security, what is the principle of **least functionality**?",
    options: ["Ensuring all systems have as many functions as possible.", "Configuring systems to have only the necessary services and applications enabled.", "Using the least expensive hardware to save costs.", "Providing the least amount of access to a user."],
    correctAnswers: "Configuring systems to have only the necessary services and applications enabled.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "The principle of least functionality is a security practice that recommends that all systems, applications, and services should be configured to only provide the minimum functionality necessary to fulfill their purpose.",
    hint: "This is about having the 'least' number of functions to reduce the attack surface."
  },
  {
    id: 208,
    question: "What is the primary function of a **Next-Generation Firewall (NGFW)** compared to a traditional firewall?",
    options: ["It only inspects packet headers.", "It can inspect traffic at the application layer and use threat intelligence.", "It is only used for network segmentation.", "It is a physical security control."],
    correctAnswers: "It can inspect traffic at the application layer and use threat intelligence.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "An NGFW has all the capabilities of a traditional firewall but also includes deep packet inspection, intrusion prevention, and application awareness to provide more comprehensive protection.",
    hint: "This is a 'next-generation' firewall for a reason."
  },
  {
    id: 209,
    question: "Which of the following is a key tenet of **Zero Trust Architecture**?",
    options: ["Assume all network traffic is trustworthy.", "Trust internal users but not external users.", "Never trust, always verify.", "Trust all network devices by default."],
    correctAnswers: "Never trust, always verify.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Zero Trust is a security model that assumes no user, device, or application can be trusted by default, regardless of whether it's inside or outside the network perimeter. All access requests must be verified.",
    hint: "The name of the architecture itself gives the biggest clue."
  },
  {
    id: 210,
    question: "What is the purpose of a **load balancer** in a security context?",
    options: ["To prevent SQL injection attacks.", "To distribute network traffic across multiple servers to improve performance and availability.", "To encrypt network traffic.", "To monitor network traffic for malicious activity."],
    correctAnswers: "To distribute network traffic across multiple servers to improve performance and availability.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A load balancer is a device or software that distributes network traffic among multiple servers. This improves the availability and resilience of a service, which is a key security objective.",
    hint: "The device is designed to 'balance' the 'load' on the servers."
  },
  {
    id: 211,
    question: "Which of the following best describes the principle of **segmentation**?",
    options: ["Breaking a network into smaller, isolated subnets.", "Encrypting all network traffic.", "Using a firewall to block all traffic from the internet.", "Implementing a single, strong access control policy."],
    correctAnswers: "Breaking a network into smaller, isolated subnets.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Network segmentation involves dividing a larger network into smaller, distinct segments. This helps to contain a breach and limit the lateral movement of an attacker.",
    hint: "Think about 'segmenting' a larger piece of something into smaller parts."
  },
  {
    id: 212,
    question: "What is the primary function of an **Intrusion Detection System (IDS)**?",
    options: ["To block malicious traffic in real-time.", "To monitor network traffic and alert administrators to suspicious activity.", "To encrypt data in transit.", "To manage user identities and access."],
    correctAnswers: "To monitor network traffic and alert administrators to suspicious activity.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "An IDS is a security system that monitors network traffic for suspicious activity or policy violations and sends alerts when it finds something suspicious.",
    hint: "The system is designed to 'detect' intrusions."
  },
  {
    id: 213,
    question: "What is the difference between an **IDS** and an **Intrusion Prevention System (IPS)**?",
    options: ["An IDS is a software, while an IPS is a hardware device.", "An IDS only detects, while an IPS can actively block threats.", "An IDS is used for the network, while an IPS is used for a host.", "There is no difference between them."],
    correctAnswers: "An IDS only detects, while an IPS can actively block threats.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "An IDS is a passive system that only alerts on suspicious activity. An IPS is an active system that can automatically take action, such as blocking traffic, to prevent a threat from continuing.",
    hint: "The 'P' in IPS stands for 'Prevention'."
  },
  {
    id: 214,
    question: "Which of the following is a key benefit of using a **virtual private cloud (VPC)**?",
    options: ["It makes all data publicly accessible.", "It provides a private, isolated network within a public cloud environment.", "It eliminates the need for any security controls.", "It allows an organization to share its network with other companies."],
    correctAnswers: "It provides a private, isolated network within a public cloud environment.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A VPC is a logically isolated virtual network within a public cloud. It provides a more secure and controlled environment for cloud resources.",
    hint: "Think of it as a 'private' section within a public cloud."
  },
  {
    id: 215,
    question: "What is the purpose of a **sandbox** in a cybersecurity context?",
    options: ["A secure room for physical meetings.", "An isolated environment for executing untrusted code or files.", "A type of physical security control.", "A database for storing user credentials."],
    correctAnswers: "An isolated environment for executing untrusted code or files.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A sandbox is an isolated, virtual environment where untrusted code or files can be executed and analyzed without affecting the rest of the system.",
    hint: "It's like a child's sandbox, where they can play without making a mess everywhere else."
  },
  {
    id: 216,
    question: "Which security control is designed to enforce access rules based on the user's role or job function?",
    options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Rule-Based Access Control (RuBAC)"],
    correctAnswers: "Role-Based Access Control (RBAC)",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Role-Based Access Control (RBAC) is a model that grants access rights to users based on their job functions, rather than on an individual basis.",
    hint: "The access is based on the user's 'role'."
  },
  {
    id: 217,
    question: "What is the primary function of a **reverse proxy**?",
    options: ["To act as a gateway for internal clients to access the internet.", "To hide the identity of the client from the server.", "To provide an extra layer of security and load balancing for a web server.", "To encrypt all network traffic."],
    correctAnswers: "To provide an extra layer of security and load balancing for a web server.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "A reverse proxy is a server that sits in front of one or more web servers, intercepting and forwarding client requests. It can be used for load balancing, security (by hiding the web server's identity), and caching.",
    hint: "It acts as a 'proxy' for a server, but in 'reverse' from a client's perspective."
  },
  {
    id: 218,
    question: "In the context of cloud computing, what is the **shared responsibility model**?",
    options: ["The cloud provider is responsible for all security.", "The customer is responsible for all security.", "The cloud provider and the customer share security responsibilities.", "Security is not a concern in the cloud."],
    correctAnswers: "The cloud provider and the customer share security responsibilities.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "The shared responsibility model dictates that the cloud provider is responsible for the security *of* the cloud, while the customer is responsible for security *in* the cloud.",
    hint: "The responsibility is 'shared' between the provider and the customer."
  },
  {
    id: 219,
    question: "What is the main purpose of a **data loss prevention (DLP)** solution?",
    options: ["To prevent data from being accidentally deleted.", "To prevent sensitive data from leaving the organization's network.", "To encrypt data at rest.", "To manage and classify data."],
    correctAnswers: "To prevent sensitive data from leaving the organization's network.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "DLP solutions are designed to detect and prevent the unauthorized transmission of sensitive information, such as credit card numbers or social security numbers, from an organization's network.",
    hint: "This solution is designed to prevent 'data loss'."
  },
  {
    id: 220,
    question: "Which security model is based on the principle that a subject (e.g., a user) can only access an object (e.g., a file) if they have an explicit authorization to do so, often defined by a system administrator?",
    options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"],
    correctAnswers: "Mandatory Access Control (MAC)",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Mandatory Access Control (MAC) is a security model where a system administrator defines and enforces access rules. The user cannot override these rules.",
    hint: "Access is 'mandated' by a central authority."
  },
  {
    id: 221,
    question: "What is the purpose of a **service-oriented architecture (SOA)**?",
    options: ["To create a monolithic application.", "To break down an application into smaller, reusable services.", "To ensure all services are in a single location.", "To encrypt all data in an application."],
    correctAnswers: "To break down an application into smaller, reusable services.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "A service-oriented architecture (SOA) is an architectural pattern in which application components provide services to other components via a communications protocol, typically over a network. This approach can improve security by allowing for more granular control over individual services.",
    hint: "This architecture is 'oriented' around 'services'."
  },
  {
    id: 222,
    question: "Which of the following describes a **microservices architecture**?",
    options: ["An architecture where all application functions are a single, monolithic unit.", "An architecture where all application functions are broken down into small, independent services.", "An architecture where all services are in the same physical location.", "An architecture that uses a single programming language for all services."],
    correctAnswers: "An architecture where all application functions are broken down into small, independent services.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Microservices architecture is a specific type of SOA that breaks down an application into a collection of loosely coupled, independently deployable services. This allows for better scalability and security, as a breach in one service may not affect the others.",
    hint: "The services are 'micro' and independent."
  },
  {
    id: 223,
    question: "What is the primary function of a **firewall**?",
    options: ["To encrypt all network traffic.", "To monitor and control incoming and outgoing network traffic based on predefined security rules.", "To prevent malware from spreading.", "To provide a secure connection for remote users."],
    correctAnswers: "To monitor and control incoming and outgoing network traffic based on predefined security rules.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on a set of security rules. It acts as a barrier between a trusted and an untrusted network.",
    hint: "Think of a physical 'firewall' that prevents fire from spreading."
  },
  {
    id: 224,
    question: "What is **Network Access Control (NAC)**?",
    options: ["A system that restricts network access to unauthorized users.", "A policy that defines how a network should be segmented.", "A system that encrypts network traffic.", "A policy that defines how a user can access a network."],
    correctAnswers: "A system that restricts network access to unauthorized users.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Network Access Control (NAC) is a security approach that restricts the availability of network resources to endpoints that do not comply with a security policy.",
    hint: "This system 'controls' 'access' to the 'network'."
  },
  {
    id: 225,
    question: "Which of the following is a key tenet of the **principle of least privilege**?",
    options: ["Granting a user the highest level of access possible.", "Granting a user only the minimum access needed to perform their job functions.", "Granting all users the same level of access.", "Granting a user access to all network resources."],
    correctAnswers: "Granting a user only the minimum access needed to perform their job functions.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "The principle of least privilege states that a user or process should be given only the minimum level of access or permissions needed to perform its required tasks, reducing the attack surface.",
    hint: "Think about giving a person the 'least' amount of 'privilege' necessary."
  },
  {
    id: 226,
    question: "What is the purpose of **data masking**?",
    options: ["To encrypt sensitive data.", "To hide original data with a set of fabricated data.", "To delete old data.", "To backup data to an offsite location."],
    correctAnswers: "To hide original data with a set of fabricated data.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Data masking is a data sanitization technique that replaces original data with a fake, but structurally similar, set of data. This is used to protect sensitive information in non-production environments.",
    hint: "It's like putting a 'mask' over the real data."
  },
  {
    id: 227,
    question: "Which of the following is an example of an **operational security control**?",
    options: ["A firewall", "An Access Control List (ACL)", "Security awareness training", "A biometric scanner"],
    correctAnswers: "Security awareness training",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Operational controls are the procedures and practices that an organization puts in place to manage security on a daily basis. Security awareness training is a key operational control.",
    hint: "This control deals with the 'operations' and procedures of an organization."
  },
  {
    id: 228,
    question: "What is the primary function of a **SIEM (Security Information and Event Management) system**?",
    options: ["To manage physical access to a data center.", "To collect, aggregate, and analyze log data from multiple sources.", "To automatically block all network traffic from outside the organization.", "To perform network vulnerability scans."],
    correctAnswers: "To collect, aggregate, and analyze log data from multiple sources.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A SIEM system centralizes and analyzes data from various log sources to provide a comprehensive view of an organization's security posture and to help identify security incidents.",
    hint: "Think of this as the 'brain' that processes all security-related information."
  },
  {
    id: 229,
    question: "Which of the following is a key tenet of the **CIA triad**?",
    options: ["Cost, Integrity, Availability", "Confidentiality, Integrity, Auditing", "Confidentiality, Integrity, Availability", "Confidentiality, Interoperability, Accountability"],
    correctAnswers: "Confidentiality, Integrity, Availability",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "The CIA triad is a foundational security model that represents the three key security objectives: Confidentiality, Integrity, and Availability.",
    hint: "The acronym stands for the three main security goals."
  },
  {
    id: 230,
    question: "In the context of physical security, what is a **mantrap**?",
    options: ["A trap designed to capture a human.", "A security device that allows only one person to enter a secure area at a time.", "A type of physical security camera.", "A fence with a security alarm."],
    correctAnswers: "A security device that allows only one person to enter a secure area at a time.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A mantrap is a physical security device that consists of a small space with two doors. One door must close and lock before the other can open, allowing only one person to enter at a time.",
    hint: "This device is designed to 'trap' a 'man' or person."
  },
  {
    id: 231,
    question: "Which of the following is a key component of a **demilitarized zone (DMZ)**?",
    options: ["A secure area for storing sensitive data.", "A buffer zone between an organization's internal network and the internet.", "A network that is completely isolated from all other networks.", "A network that only allows authenticated users to access it."],
    correctAnswers: "A buffer zone between an organization's internal network and the internet.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A DMZ is a sub-network that contains an organization's exposed, outward-facing services. It acts as a buffer zone to protect the internal network from direct access by external threats.",
    hint: "Think of a 'no-man's-land' between two opposing forces."
  },
  {
    id: 232,
    question: "What is the principle of **least functionality**?",
    options: ["Ensuring all systems have as many functions as possible.", "Configuring systems to have only the necessary services and applications enabled.", "Using the least expensive hardware to save costs.", "Providing the least amount of access to a user."],
    correctAnswers: "Configuring systems to have only the necessary services and applications enabled.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "The principle of least functionality is a security practice that recommends that all systems, applications, and services should be configured to only provide the minimum functionality necessary to fulfill their purpose.",
    hint: "This is about having the 'least' number of functions to reduce the attack surface."
  },
  {
    id: 233,
    question: "Which of the following is a key tenet of the **Zero Trust Architecture**?",
    options: ["Assume all network traffic is trustworthy.", "Trust internal users but not external users.", "Never trust, always verify.", "Trust all network devices by default."],
    correctAnswers: "Never trust, always verify.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Zero Trust is a security model that assumes no user, device, or application can be trusted by default, regardless of whether it's inside or outside the network perimeter. All access requests must be verified.",
    hint: "The name of the architecture itself gives the biggest clue."
  },
  {
    id: 234,
    question: "What is the purpose of a **load balancer** in a security context?",
    options: ["To prevent SQL injection attacks.", "To distribute network traffic across multiple servers to improve performance and availability.", "To encrypt network traffic.", "To monitor network traffic for malicious activity."],
    correctAnswers: "To distribute network traffic across multiple servers to improve performance and availability.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A load balancer is a device or software that distributes network traffic among multiple servers. This improves the availability and resilience of a service, which is a key security objective.",
    hint: "The device is designed to 'balance' the 'load' on the servers."
  },
  {
    id: 235,
    question: "Which of the following best describes the principle of **segmentation**?",
    options: ["Breaking a network into smaller, isolated subnets.", "Encrypting all network traffic.", "Using a firewall to block all traffic from the internet.", "Implementing a single, strong access control policy."],
    correctAnswers: "Breaking a network into smaller, isolated subnets.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Network segmentation involves dividing a larger network into smaller, distinct segments. This helps to contain a breach and limit the lateral movement of an attacker.",
    hint: "Think about 'segmenting' a larger piece of something into smaller parts."
  },
  {
    id: 236,
    question: "What is the primary function of a **Next-Generation Firewall (NGFW)** compared to a traditional firewall?",
    options: ["It only inspects packet headers.", "It can inspect traffic at the application layer and use threat intelligence.", "It is only used for network segmentation.", "It is a physical security control."],
    correctAnswers: "It can inspect traffic at the application layer and use threat intelligence.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "An NGFW has all the capabilities of a traditional firewall but also includes deep packet inspection, intrusion prevention, and application awareness to provide more comprehensive protection.",
    hint: "This is a 'next-generation' firewall for a reason."
  },
  {
    id: 237,
    question: "In the context of cloud computing, what is the **shared responsibility model**?",
    options: ["The cloud provider is responsible for all security.", "The customer is responsible for all security.", "The cloud provider and the customer share security responsibilities.", "Security is not a concern in the cloud."],
    correctAnswers: "The cloud provider and the customer share security responsibilities.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "The shared responsibility model dictates that the cloud provider is responsible for the security *of* the cloud, while the customer is responsible for security *in* the cloud.",
    hint: "The responsibility is 'shared' between the provider and the customer."
  },
  {
    id: 238,
    question: "What is the main purpose of a **data loss prevention (DLP)** solution?",
    options: ["To prevent data from being accidentally deleted.", "To prevent sensitive data from leaving the organization's network.", "To encrypt data at rest.", "To manage and classify data."],
    correctAnswers: "To prevent sensitive data from leaving the organization's network.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "DLP solutions are designed to detect and prevent the unauthorized transmission of sensitive information, such as credit card numbers or social security numbers, from an organization's network.",
    hint: "This solution is designed to prevent 'data loss'."
  },
  {
    id: 239,
    question: "Which security model is based on the principle that a subject (e.g., a user) can only access an object (e.g., a file) if they have an explicit authorization to do so, often defined by a system administrator?",
    options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"],
    correctAnswers: "Mandatory Access Control (MAC)",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Mandatory Access Control (MAC) is a security model where a system administrator defines and enforces access rules. The user cannot override these rules.",
    hint: "Access is 'mandated' by a central authority."
  },
  {
    id: 240,
    question: "What is the purpose of **data masking**?",
    options: ["To encrypt sensitive data.", "To hide original data with a set of fabricated data.", "To delete old data.", "To backup data to an offsite location."],
    correctAnswers: "To hide original data with a set of fabricated data.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Data masking is a data sanitization technique that replaces original data with a fake, but structurally similar, set of data. This is used to protect sensitive information in non-production environments.",
    hint: "It's like putting a 'mask' over the real data."
  },
  {
    id: 241,
    question: "What is the primary function of a **SIEM (Security Information and Event Management) system**?",
    options: ["To manage physical access to a data center.", "To collect, aggregate, and analyze log data from multiple sources.", "To automatically block all network traffic from outside the organization.", "To perform network vulnerability scans."],
    correctAnswers: "To collect, aggregate, and analyze log data from multiple sources.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A SIEM system centralizes and analyzes data from various log sources to provide a comprehensive view of an organization's security posture and to help identify security incidents.",
    hint: "Think of this as the 'brain' that processes all security-related information."
  },
  {
    id: 242,
    question: "Which of the following is a key tenet of the **CIA triad**?",
    options: ["Cost, Integrity, Availability", "Confidentiality, Integrity, Auditing", "Confidentiality, Integrity, Availability", "Confidentiality, Interoperability, Accountability"],
    correctAnswers: "Confidentiality, Integrity, Availability",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "The CIA triad is a foundational security model that represents the three key security objectives: Confidentiality, Integrity, and Availability.",
    hint: "The acronym stands for the three main security goals."
  },
  {
    id: 243,
    question: "In the context of physical security, what is a **mantrap**?",
    options: ["A trap designed to capture a human.", "A security device that allows only one person to enter a secure area at a time.", "A type of physical security camera.", "A fence with a security alarm."],
    correctAnswers: "A security device that allows only one person to enter a secure area at a time.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A mantrap is a physical security device that consists of a small space with two doors. One door must close and lock before the other can open, allowing only one person to enter at a time.",
    hint: "This device is designed to 'trap' a 'man' or person."
  },
  {
    id: 244,
    question: "What is the purpose of **Network Access Control (NAC)**?",
    options: ["To prevent data from leaving the organization's network.", "To restrict network access to unauthorized devices and users.", "To encrypt all network traffic.", "To manage and classify data."],
    correctAnswers: "To restrict network access to unauthorized devices and users.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Network Access Control (NAC) is a security approach that restricts the availability of network resources to endpoints that do not comply with a security policy.",
    hint: "This system 'controls' 'access' to the 'network'."
  },
  {
    id: 245,
    question: "Which of the following is a key component of a **demilitarized zone (DMZ)**?",
    options: ["A secure area for storing sensitive data.", "A buffer zone between an organization's internal network and the internet.", "A network that is completely isolated from all other networks.", "A network that only allows authenticated users to access it."],
    correctAnswers: "A buffer zone between an organization's internal network and the internet.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A DMZ is a sub-network that contains an organization's exposed, outward-facing services. It acts as a buffer zone to protect the internal network from direct access by external threats.",
    hint: "Think of a 'no-man's-land' between two opposing forces."
  },
  {
    id: 246,
    question: "What is the primary function of a **sandbox** in a cybersecurity context?",
    options: ["A secure room for physical meetings.", "An isolated environment for executing untrusted code or files.", "A type of physical security control.", "A database for storing user credentials."],
    correctAnswers: "An isolated environment for executing untrusted code or files.",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A sandbox is an isolated, virtual environment where untrusted code or files can be executed and analyzed without affecting the rest of the system.",
    hint: "It's like a child's sandbox, where they can play without making a mess everywhere else."
  },
  {
    id: 247,
    question: "Which security control is designed to enforce access rules based on the user's role or job function?",
    options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Rule-Based Access Control (RuBAC)"],
    correctAnswers: "Role-Based Access Control (RBAC)",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Role-Based Access Control (RBAC) is a model that grants access rights to users based on their job functions, rather than on an individual basis.",
    hint: "The access is based on the user's 'role'."
  },
  {
    id: 248,
    question: "What is the primary function of a **reverse proxy**?",
    options: ["To act as a gateway for internal clients to access the internet.", "To hide the identity of the client from the server.", "To provide an extra layer of security and load balancing for a web server.", "To encrypt all network traffic."],
    correctAnswers: "To provide an extra layer of security and load balancing for a web server.",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "A reverse proxy is a server that sits in front of one or more web servers, intercepting and forwarding client requests. It can be used for load balancing, security (by hiding the web server's identity), and caching.",
    hint: "It acts as a 'proxy' for a server, but in 'reverse' from a client's perspective."
  },
  {
    id: 249,
    question: "What is the primary function of a **firewall**?",
    options: ["To encrypt all network traffic.", "To monitor and control incoming and outgoing network traffic based on predefined security rules.", "To prevent malware from spreading.", "To provide a secure connection for remote users."],
    correctAnswers: "To monitor and control incoming and outgoing network traffic based on predefined security rules.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on a set of security rules. It acts as a barrier between a trusted and an untrusted network.",
    hint: "Think of a physical 'firewall' that prevents fire from spreading."
  },
  {
    id: 250,
    question: "What is the primary function of an **Intrusion Detection System (IDS)**?",
    options: ["To block malicious traffic in real-time.", "To monitor network traffic and alert administrators to suspicious activity.", "To encrypt data in transit.", "To manage user identities and access."],
    correctAnswers: "To monitor network traffic and alert administrators to suspicious activity.",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "An IDS is a security system that monitors network traffic for suspicious activity or policy violations and sends alerts when it finds something suspicious.",
    hint: "The system is designed to 'detect' intrusions."
  },

  // --- Domain 3.0: Implementation ---
  {
    id: 301,
    question: "What is the primary function of a Public Key Infrastructure (PKI)?",
    options: ["To store user passwords securely", "To manage and distribute digital certificates", "To encrypt data at rest", "To monitor network traffic for malicious activity"],
    correctAnswers: "To manage and distribute digital certificates",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A PKI is a set of hardware, software, people, policies, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates.",
    hint: "The 'C' in PKI stands for 'Certificate'."
  },
  {
    id: 302,
    question: "Which cryptographic process ensures data has not been altered in transit?",
    options: ["Encryption", "Hashing", "Salting", "Key stretching"],
    correctAnswers: "Hashing",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "Hashing uses an algorithm to convert data into a fixed-length string of characters, or a hash. Even a small change in the original data will produce a completely different hash, which is used to verify data integrity.",
    hint: "This is a one-way function that creates a unique 'fingerprint' for data."
  },
  {
    id: 303,
    question: "What is a 'Symmetric' encryption algorithm?",
    options: ["An algorithm that uses a public and a private key.", "An algorithm that uses the same key for both encryption and decryption.", "An algorithm that is only used for data integrity.", "An algorithm that uses a different key for encryption and decryption."],
    correctAnswers: "An algorithm that uses the same key for both encryption and decryption.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Symmetric encryption uses a single, shared key for both encrypting plaintext and decrypting ciphertext.",
    hint: "Think of two people using the same secret code to communicate."
  },
  {
    id: 304,
    question: "Kerberos is a network authentication protocol that works on the basis of what?",
    options: ["Shared secrets", "Public key cryptography", "Tickets", "Biometrics"],
    correctAnswers: "Tickets",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Kerberos uses a ticket-granting service (TGS) to issue 'tickets' that prove a user's identity to a network service. This prevents the user from having to re-authenticate with every new service they access.",
    hint: "This protocol is often used in a Windows Active Directory environment."
  },
  {
    id: 305,
    question: "Which component of the Zero Trust architecture is responsible for generating the session-specific authentication token used to access an enterprise resource?",
    options: ["Policy Decision Point (PDP)", "Policy Enforcement Point (PEP)", "Policy Engine (PE)", "Policy Administrator (PA)"],
    correctAnswers: "Policy Administrator (PA)",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "The Policy Administrator (PA) is a logical component of the Zero Trust architecture that generates any session-specific authentication token or credential used to access an enterprise resource.",
    hint: "This component 'administers' the access token."
  },
  {
    id: 306,
    question: "What is the purpose of **salting** when hashing passwords?",
    options: ["To add a unique, random string to a password before it is hashed.", "To encrypt the password before it is hashed.", "To make the hash longer and more secure.", "To ensure the hash is unique for every user."],
    correctAnswers: "To add a unique, random string to a password before it is hashed.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Salting is the process of adding a unique, random string of characters (the salt) to a password before hashing it. This prevents attackers from using precomputed rainbow tables to crack the hashes.",
    hint: "It's like adding 'salt' to a recipe to make it unique."
  },
  {
    id: 307,
    question: "Which of the following is a common use case for **asymmetric encryption**?",
    options: ["Encrypting a large file for storage.", "Securing a database.", "Establishing a secure communication channel (e.g., in SSL/TLS).", "Hashing a password."],
    correctAnswers: "Establishing a secure communication channel (e.g., in SSL/TLS).",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Asymmetric encryption, or public key cryptography, uses a pair of keys (a public and a private key) to encrypt and decrypt data. It is primarily used for key exchange and digital signatures, such as in SSL/TLS handshakes, to establish a secure communication channel.",
    hint: "This type of encryption is also known as 'public key' cryptography."
  },
  {
    id: 308,
    question: "What is the purpose of a **Certificate Authority (CA)**?",
    options: ["To store user passwords.", "To verify the identity of a website or a user.", "To encrypt all network traffic.", "To manage and distribute digital certificates."],
    correctAnswers: "To verify the identity of a website or a user.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A Certificate Authority (CA) is a trusted entity that issues digital certificates to verify the identity of a website or a user. This is a core component of a PKI.",
    hint: "The CA 'authorizes' a certificate."
  },
  {
    id: 309,
    question: "What is **endpoint detection and response (EDR)**?",
    options: ["A tool that monitors and protects a single network endpoint from malicious activity.", "A tool that monitors and protects the entire network from malicious activity.", "A tool that only detects but does not respond to threats.", "A tool that only responds to but does not detect threats."],
    correctAnswers: "A tool that monitors and protects a single network endpoint from malicious activity.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Endpoint Detection and Response (EDR) is a solution that continuously monitors and responds to threats on an individual endpoint (e.g., a laptop or server) to protect it from advanced persistent threats (APTs) and other sophisticated attacks.",
    hint: "This tool is focused on the 'endpoint'."
  },
  {
    id: 310,
    question: "Which of the following is a key component of a **digital signature**?",
    options: ["A shared secret key.", "The sender's private key and a hash of the message.", "The sender's public key.", "The recipient's private key."],
    correctAnswers: "The sender's private key and a hash of the message.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "A digital signature is a mathematical scheme for verifying the authenticity and integrity of a message or digital document. It uses the sender's private key to sign a hash of the message, which can then be verified by the recipient using the sender's public key.",
    hint: "The signature is created by the 'private' key of the 'sender'."
  },
  {
    id: 311,
    question: "What is the purpose of **key stretching**?",
    options: ["To make a password longer.", "To make a password hash more difficult to crack by increasing the time and resources required.", "To encrypt a password.", "To salt a password."],
    correctAnswers: "To make a password hash more difficult to crack by increasing the time and resources required.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Key stretching is a technique used to make a password hash more resilient to brute-force attacks by iteratively applying a cryptographic hash function to the password and a salt, making the process computationally expensive for an attacker.",
    hint: "This process 'stretches' the time it takes to crack a hash."
  },
  {
    id: 312,
    question: "Which of the following is an example of an **on-path attack** (formerly known as a man-in-the-middle attack)?",
    options: ["An attacker intercepts a user's network traffic to steal their data.", "An attacker plants a physical device on a network.", "An attacker uses a brute-force attack to guess a password.", "An attacker sends a mass email with a malicious link."],
    correctAnswers: "An attacker intercepts a user's network traffic to steal their data.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "An on-path attack involves an attacker secretly relaying and altering communication between two parties who believe they are communicating directly with each other. This can be prevented with cryptographic controls like SSL/TLS.",
    hint: "The attacker is on the 'path' of the communication."
  },
  {
    id: 313,
    question: "What is **federated identity management**?",
    options: ["A system that requires a user to have a unique username and password for every application.", "A system that allows a user to use a single identity to access multiple, independent systems.", "A system that only allows a user to access systems within their own organization.", "A system that only allows a user to access systems within their own department."],
    correctAnswers: "A system that allows a user to use a single identity to access multiple, independent systems.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Federated identity management is a system that allows a user to use a single set of credentials to access multiple applications and services from different organizations or domains.",
    hint: "Think of a 'federation' of different systems that all trust a single identity."
  },
  {
    id: 314,
    question: "What is the primary function of a **Hardware Security Module (HSM)**?",
    options: ["To store user passwords.", "To perform cryptographic operations and store cryptographic keys securely.", "To encrypt all network traffic.", "To manage and distribute digital certificates."],
    correctAnswers: "To perform cryptographic operations and store cryptographic keys securely.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "An HSM is a physical computing device that safeguards and manages digital keys for strong authentication and provides cryptographic processing. They are used in high-security environments to protect sensitive cryptographic keys.",
    hint: "This is a 'hardware' module that deals with 'security'."
  },
  {
    id: 315,
    question: "What is the purpose of **Transport Layer Security (TLS)**?",
    options: ["To encrypt data at rest.", "To provide secure communication over a network.", "To encrypt email messages.", "To verify the identity of a website."],
    correctAnswers: "To provide secure communication over a network.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "TLS (and its predecessor, SSL) is a protocol that provides secure communication over a network. It is used to encrypt data in transit and to authenticate the server and client.",
    hint: "This protocol is used to provide 'secure' communication over the 'transport layer'."
  },
  {
    id: 316,
    question: "Which of the following is a key component of a **virtual private network (VPN)**?",
    options: ["A public, unencrypted connection.", "A private, unencrypted connection.", "A secure, encrypted tunnel over a public network.", "A network that is completely isolated from all other networks."],
    correctAnswers: "A secure, encrypted tunnel over a public network.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "A VPN creates a secure, encrypted tunnel over a public network, such as the internet, allowing remote users to securely access a private network.",
    hint: "This is a 'virtual private' network."
  },
  {
    id: 317,
    question: "What is the primary function of a **Wireless Intrusion Prevention System (WIPS)**?",
    options: ["To detect and block unauthorized wireless access points.", "To encrypt wireless traffic.", "To manage and configure wireless networks.", "To monitor wireless network traffic."],
    correctAnswers: "To detect and block unauthorized wireless access points.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A WIPS is a security system that monitors and actively blocks rogue access points, unauthorized wireless devices, and other wireless threats to a network.",
    hint: "The 'W' stands for 'wireless', and the 'P' stands for 'prevention'."
  },
  {
    id: 318,
    question: "What is **Application Programming Interface (API) security**?",
    options: ["The process of securing all applications on a network.", "The process of securing the physical access to a server.", "The process of securing APIs from threats and vulnerabilities.", "The process of securing a database."],
    correctAnswers: "The process of securing APIs from threats and vulnerabilities.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "API security is the practice of protecting APIs from threats and vulnerabilities. It involves implementing security controls to authenticate users, authorize access, and protect data in transit.",
    hint: "This is about securing the 'API'."
  },
  {
    id: 319,
    question: "Which of the following is a key tenet of **multi-factor authentication (MFA)**?",
    options: ["Using a single password for all services.", "Using a password and a PIN.", "Using two or more different factors of authentication.", "Using a biometric and a password."],
    correctAnswers: "Using two or more different factors of authentication.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "MFA requires a user to provide two or more different factors of authentication, such as something you know (password), something you have (phone), and something you are (biometric), to verify their identity.",
    hint: "The 'multi' means more than one 'factor' of authentication."
  },
  {
    id: 320,
    question: "What is the purpose of **Digital Rights Management (DRM)**?",
    options: ["To protect intellectual property by controlling access to and use of digital content.", "To manage and distribute digital certificates.", "To encrypt all data on a network.", "To prevent malware from spreading."],
    correctAnswers: "To protect intellectual property by controlling access to and use of digital content.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "DRM is a set of technologies used to control and protect digital content, such as movies, music, and software, from unauthorized use, copying, and distribution.",
    hint: "This is a way to manage the 'rights' to 'digital' content."
  },
  {
    id: 321,
    question: "Which of the following is a key tenet of **Secure Sockets Layer (SSL)** and **Transport Layer Security (TLS)**?",
    options: ["To encrypt data at rest.", "To provide secure communication over a network.", "To encrypt email messages.", "To verify the identity of a website."],
    correctAnswers: "To provide secure communication over a network.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "SSL and TLS are cryptographic protocols that provide secure communication over a network. They are used to encrypt data in transit and to authenticate the server and client.",
    hint: "These protocols are used to secure 'layers' of network communication."
  },
  {
    id: 322,
    question: "What is **endpoint detection and response (EDR)**?",
    options: ["A tool that monitors and protects a single network endpoint from malicious activity.", "A tool that monitors and protects the entire network from malicious activity.", "A tool that only detects but does not respond to threats.", "A tool that only responds to but does not detect threats."],
    correctAnswers: "A tool that monitors and protects a single network endpoint from malicious activity.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Endpoint Detection and Response (EDR) is a solution that continuously monitors and responds to threats on an individual endpoint (e.g., a laptop or server) to protect it from advanced persistent threats (APTs) and other sophisticated attacks.",
    hint: "This tool is focused on the 'endpoint'."
  },
  {
    id: 323,
    question: "Which of the following is a common use case for **asymmetric encryption**?",
    options: ["Encrypting a large file for storage.", "Securing a database.", "Establishing a secure communication channel (e.g., in SSL/TLS).", "Hashing a password."],
    correctAnswers: "Establishing a secure communication channel (e.g., in SSL/TLS).",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Asymmetric encryption, or public key cryptography, uses a pair of keys (a public and a private key) to encrypt and decrypt data. It is primarily used for key exchange and digital signatures, such as in SSL/TLS handshakes, to establish a secure communication channel.",
    hint: "This type of encryption is also known as 'public key' cryptography."
  },
  {
    id: 324,
    question: "What is the purpose of **salting** when hashing passwords?",
    options: ["To add a unique, random string to a password before it is hashed.", "To encrypt the password before it is hashed.", "To make the hash longer and more secure.", "To ensure the hash is unique for every user."],
    correctAnswers: "To add a unique, random string to a password before it is hashed.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Salting is the process of adding a unique, random string of characters (the salt) to a password before hashing it. This prevents attackers from using precomputed rainbow tables to crack the hashes.",
    hint: "It's like adding 'salt' to a recipe to make it unique."
  },
  {
    id: 325,
    question: "What is the primary function of a **Hardware Security Module (HSM)**?",
    options: ["To store user passwords.", "To perform cryptographic operations and store cryptographic keys securely.", "To encrypt all network traffic.", "To manage and distribute digital certificates."],
    correctAnswers: "To perform cryptographic operations and store cryptographic keys securely.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "An HSM is a physical computing device that safeguards and manages digital keys for strong authentication and provides cryptographic processing. They are used in high-security environments to protect sensitive cryptographic keys.",
    hint: "This is a 'hardware' module that deals with 'security'."
  },
  {
    id: 326,
    question: "What is a **virtual private network (VPN)**?",
    options: ["A public, unencrypted connection.", "A private, unencrypted connection.", "A secure, encrypted tunnel over a public network.", "A network that is completely isolated from all other networks."],
    correctAnswers: "A secure, encrypted tunnel over a public network.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "A VPN creates a secure, encrypted tunnel over a public network, such as the internet, allowing remote users to securely access a private network.",
    hint: "This is a 'virtual private' network."
  },
  {
    id: 327,
    question: "Which of the following is a key component of a **digital signature**?",
    options: ["A shared secret key.", "The sender's private key and a hash of the message.", "The sender's public key.", "The recipient's private key."],
    correctAnswers: "The sender's private key and a hash of the message.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "A digital signature is a mathematical scheme for verifying the authenticity and integrity of a message or digital document. It uses the sender's private key to sign a hash of the message, which can then be verified by the recipient using the sender's public key.",
    hint: "The signature is created by the 'private' key of the 'sender'."
  },
  {
    id: 328,
    question: "What is **Application Programming Interface (API) security**?",
    options: ["The process of securing all applications on a network.", "The process of securing the physical access to a server.", "The process of securing APIs from threats and vulnerabilities.", "The process of securing a database."],
    correctAnswers: "The process of securing APIs from threats and vulnerabilities.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "API security is the practice of protecting APIs from threats and vulnerabilities. It involves implementing security controls to authenticate users, authorize access, and protect data in transit.",
    hint: "This is about securing the 'API'."
  },
  {
    id: 329,
    question: "What is the purpose of **key stretching**?",
    options: ["To make a password longer.", "To make a password hash more difficult to crack by increasing the time and resources required.", "To encrypt a password.", "To salt a password."],
    correctAnswers: "To make a password hash more difficult to crack by increasing the time and resources required.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Key stretching is a technique used to make a password hash more resilient to brute-force attacks by iteratively applying a cryptographic hash function to the password and a salt, making the process computationally expensive for an attacker.",
    hint: "This process 'stretches' the time it takes to crack a hash."
  },
  {
    id: 330,
    question: "What is the primary function of a **Wireless Intrusion Prevention System (WIPS)**?",
    options: ["To detect and block unauthorized wireless access points.", "To encrypt wireless traffic.", "To manage and configure wireless networks.", "To monitor wireless network traffic."],
    correctAnswers: "To detect and block unauthorized wireless access points.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A WIPS is a security system that monitors and actively blocks rogue access points, unauthorized wireless devices, and other wireless threats to a network.",
    hint: "The 'W' stands for 'wireless', and the 'P' stands for 'prevention'."
  },
  {
    id: 331,
    question: "What is **federated identity management**?",
    options: ["A system that requires a user to have a unique username and password for every application.", "A system that allows a user to use a single identity to access multiple, independent systems.", "A system that only allows a user to access systems within their own organization.", "A system that only allows a user to access systems within their own department."],
    correctAnswers: "A system that allows a user to use a single identity to access multiple, independent systems.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Federated identity management is a system that allows a user to use a single set of credentials to access multiple applications and services from different organizations or domains.",
    hint: "Think of a 'federation' of different systems that all trust a single identity."
  },
  {
    id: 332,
    question: "What is the purpose of **Digital Rights Management (DRM)**?",
    options: ["To protect intellectual property by controlling access to and use of digital content.", "To manage and distribute digital certificates.", "To encrypt all data on a network.", "To prevent malware from spreading."],
    correctAnswers: "To protect intellectual property by controlling access to and use of digital content.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "DRM is a set of technologies used to control and protect digital content, such as movies, music, and software, from unauthorized use, copying, and distribution.",
    hint: "This is a way to manage the 'rights' to 'digital' content."
  },
  {
    id: 333,
    question: "What is a **Public Key Infrastructure (PKI)**?",
    options: ["A system for storing user passwords securely.", "A system for managing and distributing digital certificates.", "A system for encrypting data at rest.", "A system for monitoring network traffic for malicious activity."],
    correctAnswers: "A system for managing and distributing digital certificates.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A PKI is a set of hardware, software, people, policies, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates.",
    hint: "The 'C' in PKI stands for 'Certificate'."
  },
  {
    id: 334,
    question: "Which cryptographic process ensures data has not been altered in transit?",
    options: ["Encryption", "Hashing", "Salting", "Key stretching"],
    correctAnswers: "Hashing",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "Hashing uses an algorithm to convert data into a fixed-length string of characters, or a hash. Even a small change in the original data will produce a completely different hash, which is used to verify data integrity.",
    hint: "This is a one-way function that creates a unique 'fingerprint' for data."
  },
  {
    id: 335,
    question: "What is a 'Symmetric' encryption algorithm?",
    options: ["An algorithm that uses a public and a private key.", "An algorithm that uses the same key for both encryption and decryption.", "An algorithm that is only used for data integrity.", "An algorithm that uses a different key for encryption and decryption."],
    correctAnswers: "An algorithm that uses the same key for both encryption and decryption.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Symmetric encryption uses a single, shared key for both encrypting plaintext and decrypting ciphertext.",
    hint: "Think of two people using the same secret code to communicate."
  },
  {
    id: 336,
    question: "Kerberos is a network authentication protocol that works on the basis of what?",
    options: ["Shared secrets", "Public key cryptography", "Tickets", "Biometrics"],
    correctAnswers: "Tickets",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Kerberos uses a ticket-granting service (TGS) to issue 'tickets' that prove a user's identity to a network service. This prevents the user from having to re-authenticate with every new service they access.",
    hint: "This protocol is often used in a Windows Active Directory environment."
  },
  {
    id: 337,
    question: "Which component of the Zero Trust architecture is responsible for generating the session-specific authentication token used to access an enterprise resource?",
    options: ["Policy Decision Point (PDP)", "Policy Enforcement Point (PEP)", "Policy Engine (PE)", "Policy Administrator (PA)"],
    correctAnswers: "Policy Administrator (PA)",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "The Policy Administrator (PA) is a logical component of the Zero Trust architecture that generates any session-specific authentication token or credential used to access an enterprise resource.",
    hint: "This component 'administers' the access token."
  },
  {
    id: 338,
    question: "What is the purpose of **salting** when hashing passwords?",
    options: ["To add a unique, random string to a password before it is hashed.", "To encrypt the password before it is hashed.", "To make the hash longer and more secure.", "To ensure the hash is unique for every user."],
    correctAnswers: "To add a unique, random string to a password before it is hashed.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Salting is the process of adding a unique, random string of characters (the salt) to a password before hashing it. This prevents attackers from using precomputed rainbow tables to crack the hashes.",
    hint: "It's like adding 'salt' to a recipe to make it unique."
  },
  {
    id: 339,
    question: "Which of the following is a key tenet of **multi-factor authentication (MFA)**?",
    options: ["Using a single password for all services.", "Using a password and a PIN.", "Using two or more different factors of authentication.", "Using a biometric and a password."],
    correctAnswers: "Using two or more different factors of authentication.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "MFA requires a user to provide two or more different factors of authentication, such as something you know (password), something you have (phone), and something you are (biometric), to verify their identity.",
    hint: "The 'multi' means more than one 'factor' of authentication."
  },
  {
    id: 340,
    question: "Which of the following is a common use case for **asymmetric encryption**?",
    options: ["Encrypting a large file for storage.", "Securing a database.", "Establishing a secure communication channel (e.g., in SSL/TLS).", "Hashing a password."],
    correctAnswers: "Establishing a secure communication channel (e.g., in SSL/TLS).",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Asymmetric encryption, or public key cryptography, uses a pair of keys (a public and a private key) to encrypt and decrypt data. It is primarily used for key exchange and digital signatures, such as in SSL/TLS handshakes, to establish a secure communication channel.",
    hint: "This type of encryption is also known as 'public key' cryptography."
  },
  {
    id: 341,
    question: "What is the primary function of a **Hardware Security Module (HSM)**?",
    options: ["To store user passwords.", "To perform cryptographic operations and store cryptographic keys securely.", "To encrypt all network traffic.", "To manage and distribute digital certificates."],
    correctAnswers: "To perform cryptographic operations and store cryptographic keys securely.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "An HSM is a physical computing device that safeguards and manages digital keys for strong authentication and provides cryptographic processing. They are used in high-security environments to protect sensitive cryptographic keys.",
    hint: "This is a 'hardware' module that deals with 'security'."
  },
  {
    id: 342,
    question: "What is the purpose of **Transport Layer Security (TLS)**?",
    options: ["To encrypt data at rest.", "To provide secure communication over a network.", "To encrypt email messages.", "To verify the identity of a website."],
    correctAnswers: "To provide secure communication over a network.",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "TLS (and its predecessor, SSL) is a protocol that provides secure communication over a network. It is used to encrypt data in transit and to authenticate the server and client.",
    hint: "This protocol is used to provide 'secure' communication over the 'transport layer'."
  },
  {
    id: 343,
    question: "What is the primary function of a **Wireless Intrusion Prevention System (WIPS)**?",
    options: ["To detect and block unauthorized wireless access points.", "To encrypt wireless traffic.", "To manage and configure wireless networks.", "To monitor wireless network traffic."],
    correctAnswers: "To detect and block unauthorized wireless access points.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A WIPS is a security system that monitors and actively blocks rogue access points, unauthorized wireless devices, and other wireless threats to a network.",
    hint: "The 'W' stands for 'wireless', and the 'P' stands for 'prevention'."
  },
  {
    id: 344,
    question: "What is **Application Programming Interface (API) security**?",
    options: ["The process of securing all applications on a network.", "The process of securing the physical access to a server.", "The process of securing APIs from threats and vulnerabilities.", "The process of securing a database."],
    correctAnswers: "The process of securing APIs from threats and vulnerabilities.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "API security is the practice of protecting APIs from threats and vulnerabilities. It involves implementing security controls to authenticate users, authorize access, and protect data in transit.",
    hint: "This is about securing the 'API'."
  },
  {
    id: 345,
    question: "What is the primary function of **endpoint detection and response (EDR)**?",
    options: ["To monitor and protect a single network endpoint from malicious activity.", "To monitor and protect the entire network from malicious activity.", "To only detect but not respond to threats.", "To only respond to but not detect threats."],
    correctAnswers: "To monitor and protect a single network endpoint from malicious activity.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Endpoint Detection and Response (EDR) is a solution that continuously monitors and responds to threats on an individual endpoint (e.g., a laptop or server) to protect it from advanced persistent threats (APTs) and other sophisticated attacks.",
    hint: "This tool is focused on the 'endpoint'."
  },
  {
    id: 346,
    question: "What is **federated identity management**?",
    options: ["A system that requires a user to have a unique username and password for every application.", "A system that allows a user to use a single identity to access multiple, independent systems.", "A system that only allows a user to access systems within their own organization.", "A system that only allows a user to access systems within their own department."],
    correctAnswers: "A system that allows a user to use a single identity to access multiple, independent systems.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Federated identity management is a system that allows a user to use a single set of credentials to access multiple applications and services from different organizations or domains.",
    hint: "Think of a 'federation' of different systems that all trust a single identity."
  },
  {
    id: 347,
    question: "What is a **digital signature**?",
    options: ["A shared secret key.", "The sender's private key and a hash of the message.", "The sender's public key.", "The recipient's private key."],
    correctAnswers: "The sender's private key and a hash of the message.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "A digital signature is a mathematical scheme for verifying the authenticity and integrity of a message or digital document. It uses the sender's private key to sign a hash of the message, which can then be verified by the recipient using the sender's public key.",
    hint: "The signature is created by the 'private' key of the 'sender'."
  },
  {
    id: 348,
    question: "What is the purpose of **Digital Rights Management (DRM)**?",
    options: ["To protect intellectual property by controlling access to and use of digital content.", "To manage and distribute digital certificates.", "To encrypt all data on a network.", "To prevent malware from spreading."],
    correctAnswers: "To protect intellectual property by controlling access to and use of digital content.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "DRM is a set of technologies used to control and protect digital content, such as movies, music, and software, from unauthorized use, copying, and distribution.",
    hint: "This is a way to manage the 'rights' to 'digital' content."
  },
  {
    id: 349,
    question: "Which of the following is an example of an **on-path attack** (formerly known as a man-in-the-middle attack)?",
    options: ["An attacker intercepts a user's network traffic to steal their data.", "An attacker plants a physical device on a network.", "An attacker uses a brute-force attack to guess a password.", "An attacker sends a mass email with a malicious link."],
    correctAnswers: "An attacker intercepts a user's network traffic to steal their data.",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "An on-path attack involves an attacker secretly relaying and altering communication between two parties who believe they are communicating directly with each other. This can be prevented with cryptographic controls like SSL/TLS.",
    hint: "The attacker is on the 'path' of the communication."
  },
  {
    id: 350,
    question: "What is the purpose of **key stretching**?",
    options: ["To make a password longer.", "To make a password hash more difficult to crack by increasing the time and resources required.", "To encrypt a password.", "To salt a password."],
    correctAnswers: "To make a password hash more difficult to crack by increasing the time and resources required.",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Key stretching is a technique used to make a password hash more resilient to brute-force attacks by iteratively applying a cryptographic hash function to the password and a salt, making the process computationally expensive for an attacker.",
    hint: "This process 'stretches' the time it takes to crack a hash."
  },

  // --- Domain 4.0: Operations and Incident Response ---
  {
    id: 401,
    question: "During a cyber incident, which phase involves isolating the affected systems to prevent further damage?",
    options: ["Preparation", "Identification", "Containment", "Eradication"],
    correctAnswers: "Containment",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "The Containment phase of incident response is designed to limit the scope and magnitude of the incident by isolating affected systems.",
    hint: "Think about putting a fence around an area to stop a fire from spreading."
  },
  {
    id: 402,
    question: "What is the process of collecting and preserving digital evidence in a way that is admissible in a court of law?",
    options: ["Incident response", "Vulnerability scanning", "Digital forensics", "Threat hunting"],
    correctAnswers: "Digital forensics",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Digital forensics is the process of identifying, preserving, analyzing, and presenting digital evidence in a legally acceptable manner.",
    hint: "This is a specialized field of forensics that deals with digital data."
  },
  {
    id: 403,
    question: "Which of the following is an indicator of malicious activity that can be found in network logs?",
    options: ["Regular user logins during business hours", "A high volume of failed login attempts from a single IP address", "Normal network traffic from a known internal server", "Successful data transfers to a known destination"],
    correctAnswers: "A high volume of failed login attempts from a single IP address",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "A high number of failed login attempts from a single source is a strong indicator of a brute-force attack, which is a common form of malicious activity.",
    hint: "This is a clear sign that someone is trying to guess a password."
  },
  {
    id: 404,
    question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
    options: ["To manage physical access to a data center", "To collect, aggregate, and analyze log data from multiple sources", "To automatically block all network traffic from outside the organization", "To perform network vulnerability scans"],
    correctAnswers: "To collect, aggregate, and analyze log data from multiple sources",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIEM system centralizes and analyzes data from various log sources to provide a comprehensive view of an organization's security posture and to help identify security incidents.",
    hint: "Think of this as the 'brain' that processes all security-related information."
  },
  {
    id: 405,
    question: "What is a 'false positive' in the context of security monitoring?",
    options: ["A threat that is correctly identified as a threat.", "A normal activity that is incorrectly identified as a threat.", "A threat that is incorrectly identified as normal activity.", "A normal activity that is correctly identified as normal activity."],
    correctAnswers: "A normal activity that is incorrectly identified as a threat.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "A false positive occurs when an alert or a detection system incorrectly flags a benign or normal event as a malicious one. This can lead to 'alert fatigue' for security analysts.",
    hint: "Think of an alarm going off for no reason."
  },
  {
    id: 406,
    question: "Which incident response phase involves removing the cause of the incident from all affected systems?",
    options: ["Identification", "Containment", "Eradication", "Recovery"],
    correctAnswers: "Eradication",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "The Eradication phase focuses on removing the root cause of the incident, such as deleting a malicious file, patching a vulnerability, or changing a compromised password.",
    hint: "This phase is about 'eradicating' the threat."
  },
  {
    id: 407,
    question: "What is the primary objective of a **business continuity plan (BCP)**?",
    options: ["To recover from a disaster as quickly as possible.", "To ensure that a business can continue its operations during and after a disaster.", "To prevent all disasters from occurring.", "To manage and mitigate all risks to a business."],
    correctAnswers: "To ensure that a business can continue its operations during and after a disaster.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A BCP is a plan to ensure that a business can continue its critical operations during and after a disaster, such as a fire, flood, or cyber attack.",
    hint: "This plan is about ensuring 'business continuity'."
  },
  {
    id: 408,
    question: "In the context of incident response, what is **chain of custody**?",
    options: ["A list of all evidence collected.", "A legal document that outlines the steps for a forensic investigation.", "A documented process that tracks who has handled digital evidence and when.", "The process of a security team responding to a cyber incident."],
    correctAnswers: "A documented process that tracks who has handled digital evidence and when.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "Chain of custody is a documented, chronological record of the evidence from the time it is collected until it is presented in court. It is essential for ensuring the evidence's integrity and admissibility.",
    hint: "Think of a physical 'chain' that tracks the evidence from person to person."
  },
  {
    id: 409,
    question: "What is the purpose of **threat hunting**?",
    options: ["To wait for an alert from a security system.", "To proactively search for threats that have evaded existing security controls.", "To respond to a known cyber incident.", "To manage and analyze log data."],
    correctAnswers: "To proactively search for threats that have evaded existing security controls.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "Threat hunting is a proactive cybersecurity practice that involves a human analyst searching for signs of malicious activity in a network or system that may have gone undetected by automated tools.",
    hint: "The analyst is 'hunting' for 'threats' before they become a major problem."
  },
  {
    id: 410,
    question: "Which of the following is an example of an **acceptable use policy (AUP)** violation?",
    options: ["A user accessing a work email from a company-provided laptop.", "A user browsing a personal social media website on a company-provided laptop.", "A user accessing a company-provided website on a company-provided laptop.", "A user accessing a work email from a company-provided computer."],
    correctAnswers: "A user browsing a personal social media website on a company-provided laptop.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "An AUP is a document that outlines the acceptable uses of a company's IT assets. Browsing personal websites or social media is often a violation of an AUP.",
    hint: "The AUP defines what is 'acceptable' to do with company technology."
  },
  {
    id: 411,
    question: "What is a **runbook** in the context of incident response?",
    options: ["A book that contains all the security policies of an organization.", "A detailed guide that outlines the steps for responding to a specific type of incident.", "A list of all the security tools used by a security team.", "A document that outlines the roles and responsibilities of an incident response team."],
    correctAnswers: "A detailed guide that outlines the steps for responding to a specific type of incident.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A runbook is a detailed, step-by-step guide for performing a specific task, such as responding to a malware infection or a DDoS attack.",
    hint: "Think of a 'book' that you 'run' through to complete a task."
  },
  {
    id: 412,
    question: "What is the primary purpose of a **backup and disaster recovery plan**?",
    options: ["To prevent all disasters from occurring.", "To ensure that a business can continue its operations during a disaster.", "To recover from a disaster as quickly as possible.", "To manage and mitigate all risks to a business."],
    correctAnswers: "To recover from a disaster as quickly as possible.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A backup and disaster recovery plan focuses on the technical steps to recover data and systems after a disaster has occurred, such as restoring data from backups and bringing systems back online.",
    hint: "This plan is about 'recovering' from a 'disaster'."
  },
  {
    id: 413,
    question: "Which of the following is a key component of the **NIST Cybersecurity Framework**?",
    options: ["The CIA triad", "The incident response lifecycle", "The five core functions: Identify, Protect, Detect, Respond, Recover", "The principle of least privilege"],
    correctAnswers: "The five core functions: Identify, Protect, Detect, Respond, Recover",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "The NIST Cybersecurity Framework is a voluntary framework that consists of five core functions to help organizations manage cybersecurity risk: Identify, Protect, Detect, Respond, and Recover.",
    hint: "This framework has five key 'functions'."
  },
  {
    id: 414,
    question: "What is a **live forensic acquisition**?",
    options: ["The process of collecting digital evidence from a live, running system.", "The process of collecting digital evidence from a powered-off system.", "The process of collecting physical evidence from a crime scene.", "The process of a security team responding to a cyber incident."],
    correctAnswers: "The process of collecting digital evidence from a live, running system.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "Live forensic acquisition is the process of collecting digital evidence from a system that is still powered on and running. This is necessary because some volatile data, such as RAM, is lost when the system is powered off.",
    hint: "The acquisition is done on a 'live' system."
  },
  {
    id: 415,
    question: "What is the primary function of a **Security Information and Event Management (SIEM) system**?",
    options: ["To manage physical access to a data center.", "To collect, aggregate, and analyze log data from multiple sources.", "To automatically block all network traffic from outside the organization.", "To perform network vulnerability scans."],
    correctAnswers: "To collect, aggregate, and analyze log data from multiple sources.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIEM system centralizes and analyzes data from various log sources to provide a comprehensive view of an organization's security posture and to help identify security incidents.",
    hint: "Think of this as the 'brain' that processes all security-related information."
  },
  {
    id: 416,
    question: "What is a **false negative** in the context of security monitoring?",
    options: ["A threat that is correctly identified as a threat.", "A normal activity that is incorrectly identified as a threat.", "A threat that is incorrectly identified as normal activity.", "A normal activity that is correctly identified as normal activity."],
    correctAnswers: "A threat that is incorrectly identified as normal activity.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "A false negative occurs when a malicious event or threat is not detected by a security system. This is a more serious problem than a false positive, as it means a threat has gone unnoticed.",
    hint: "The system is 'negative' on a threat that is actually present."
  },
  {
    id: 417,
    question: "Which of the following is a key component of a **business continuity plan (BCP)**?",
    options: ["A list of all security policies.", "A detailed disaster recovery plan.", "An analysis of the financial impact of a disaster.", "A list of all the security tools used by a security team."],
    correctAnswers: "A detailed disaster recovery plan.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A BCP often includes a disaster recovery plan, which outlines the steps to recover from a disaster, as well as a business impact analysis and other components to ensure business continuity.",
    hint: "The BCP is a broader plan that includes disaster recovery."
  },
  {
    id: 418,
    question: "What is **threat intelligence**?",
    options: ["The process of proactively searching for threats.", "Information about existing and emerging threats that can be used to protect an organization.", "A type of security software that monitors network traffic.", "A legal document that outlines the steps for a forensic investigation."],
    correctAnswers: "Information about existing and emerging threats that can be used to protect an organization.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Threat intelligence is information about threats and threat actors that is collected, processed, and analyzed to help an organization make better security decisions.",
    hint: "This is 'intelligence' about 'threats'."
  },
  {
    id: 419,
    question: "Which of the following is a key component of a **security incident response team (SIRT)**?",
    options: ["A team that only responds to physical security incidents.", "A team that only responds to cyber security incidents.", "A team that manages and configures security hardware.", "A team that is responsible for handling all security incidents, both physical and cyber."],
    correctAnswers: "A team that is responsible for handling all security incidents, both physical and cyber.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIRT is a dedicated team responsible for handling security incidents, from initial detection to final resolution, regardless of whether they are physical or cyber.",
    hint: "The 'IR' in SIRT stands for 'Incident Response'."
  },
  {
    id: 420,
    question: "What is **e-discovery**?",
    options: ["The process of discovering new applications.", "The process of searching for and retrieving electronic data for use as evidence in a legal case.", "The process of discovering new security vulnerabilities.", "The process of a security team responding to a cyber incident."],
    correctAnswers: "The process of searching for and retrieving electronic data for use as evidence in a legal case.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "E-discovery (electronic discovery) is the process of identifying, collecting, and producing electronically stored information (ESI) in response to a request for production in a legal case.",
    hint: "This is the 'discovery' of 'e'lectronic evidence."
  },
  {
    id: 421,
    question: "What is the primary function of a **Security Information and Event Management (SIEM) system**?",
    options: ["To manage physical access to a data center.", "To collect, aggregate, and analyze log data from multiple sources.", "To automatically block all network traffic from outside the organization.", "To perform network vulnerability scans."],
    correctAnswers: "To collect, aggregate, and analyze log data from multiple sources.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIEM system centralizes and analyzes data from various log sources to provide a comprehensive view of an organization's security posture and to help identify security incidents.",
    hint: "Think of this as the 'brain' that processes all security-related information."
  },
  {
    id: 422,
    question: "What is a **false negative** in the context of security monitoring?",
    options: ["A threat that is correctly identified as a threat.", "A normal activity that is incorrectly identified as a threat.", "A threat that is incorrectly identified as normal activity.", "A normal activity that is correctly identified as normal activity."],
    correctAnswers: "A threat that is incorrectly identified as normal activity.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "A false negative occurs when a malicious event or threat is not detected by a security system. This is a more serious problem than a false positive, as it means a threat has gone unnoticed.",
    hint: "The system is 'negative' on a threat that is actually present."
  },
  {
    id: 423,
    question: "Which of the following is a key component of a **business continuity plan (BCP)**?",
    options: ["A list of all security policies.", "A detailed disaster recovery plan.", "An analysis of the financial impact of a disaster.", "A list of all the security tools used by a security team."],
    correctAnswers: "A detailed disaster recovery plan.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A BCP often includes a disaster recovery plan, which outlines the steps to recover from a disaster, as well as a business impact analysis and other components to ensure business continuity.",
    hint: "The BCP is a broader plan that includes disaster recovery."
  },
  {
    id: 424,
    question: "What is **threat intelligence**?",
    options: ["The process of proactively searching for threats.", "Information about existing and emerging threats that can be used to protect an organization.", "A type of security software that monitors network traffic.", "A legal document that outlines the steps for a forensic investigation."],
    correctAnswers: "Information about existing and emerging threats that can be used to protect an organization.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Threat intelligence is information about threats and threat actors that is collected, processed, and analyzed to help an organization make better security decisions.",
    hint: "This is 'intelligence' about 'threats'."
  },
  {
    id: 425,
    question: "Which of the following is a key component of a **security incident response team (SIRT)**?",
    options: ["A team that only responds to physical security incidents.", "A team that only responds to cyber security incidents.", "A team that manages and configures security hardware.", "A team that is responsible for handling all security incidents, both physical and cyber."],
    correctAnswers: "A team that is responsible for handling all security incidents, both physical and cyber.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIRT is a dedicated team responsible for handling security incidents, from initial detection to final resolution, regardless of whether they are physical or cyber.",
    hint: "The 'IR' in SIRT stands for 'Incident Response'."
  },
  {
    id: 426,
    question: "What is **e-discovery**?",
    options: ["The process of discovering new applications.", "The process of searching for and retrieving electronic data for use as evidence in a legal case.", "The process of discovering new security vulnerabilities.", "The process of a security team responding to a cyber incident."],
    correctAnswers: "The process of searching for and retrieving electronic data for use as evidence in a legal case.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "E-discovery (electronic discovery) is the process of identifying, collecting, and producing electronically stored information (ESI) in response to a request for production in a legal case.",
    hint: "This is the 'discovery' of 'e'lectronic evidence."
  },
  {
    id: 427,
    question: "What is a **runbook** in the context of incident response?",
    options: ["A book that contains all the security policies of an organization.", "A detailed guide that outlines the steps for responding to a specific type of incident.", "A list of all the security tools used by a security team.", "A document that outlines the roles and responsibilities of an incident response team."],
    correctAnswers: "A detailed guide that outlines the steps for responding to a specific type of incident.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A runbook is a detailed, step-by-step guide for performing a specific task, such as responding to a malware infection or a DDoS attack.",
    hint: "Think of a 'book' that you 'run' through to complete a task."
  },
  {
    id: 428,
    question: "What is the primary objective of a **business continuity plan (BCP)**?",
    options: ["To recover from a disaster as quickly as possible.", "To ensure that a business can continue its operations during and after a disaster.", "To prevent all disasters from occurring.", "To manage and mitigate all risks to a business."],
    correctAnswers: "To ensure that a business can continue its operations during and after a disaster.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A BCP is a plan to ensure that a business can continue its critical operations during and after a disaster, such as a fire, flood, or cyber attack.",
    hint: "This plan is about ensuring 'business continuity'."
  },
  {
    id: 429,
    question: "Which incident response phase involves removing the cause of the incident from all affected systems?",
    options: ["Identification", "Containment", "Eradication", "Recovery"],
    correctAnswers: "Eradication",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "The Eradication phase focuses on removing the root cause of the incident, such as deleting a malicious file, patching a vulnerability, or changing a compromised password.",
    hint: "This phase is about 'eradicating' the threat."
  },
  {
    id: 430,
    question: "What is the process of collecting and preserving digital evidence in a way that is admissible in a court of law?",
    options: ["Incident response", "Vulnerability scanning", "Digital forensics", "Threat hunting"],
    correctAnswers: "Digital forensics",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Digital forensics is the process of identifying, preserving, analyzing, and presenting digital evidence in a legally acceptable manner.",
    hint: "This is a specialized field of forensics that deals with digital data."
  },
  {
    id: 431,
    question: "What is the purpose of **threat hunting**?",
    options: ["To wait for an alert from a security system.", "To proactively search for threats that have evaded existing security controls.", "To respond to a known cyber incident.", "To manage and analyze log data."],
    correctAnswers: "To proactively search for threats that have evaded existing security controls.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "Threat hunting is a proactive cybersecurity practice that involves a human analyst searching for signs of malicious activity in a network or system that may have gone undetected by automated tools.",
    hint: "The analyst is 'hunting' for 'threats' before they become a major problem."
  },
  {
    id: 432,
    question: "What is the primary function of a **Security Information and Event Management (SIEM) system**?",
    options: ["To manage physical access to a data center.", "To collect, aggregate, and analyze log data from multiple sources.", "To automatically block all network traffic from outside the organization.", "To perform network vulnerability scans."],
    correctAnswers: "To collect, aggregate, and analyze log data from multiple sources.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIEM system centralizes and analyzes data from various log sources to provide a comprehensive view of an organization's security posture and to help identify security incidents.",
    hint: "Think of this as the 'brain' that processes all security-related information."
  },
  {
    id: 433,
    question: "What is a **false positive** in the context of security monitoring?",
    options: ["A threat that is correctly identified as a threat.", "A normal activity that is incorrectly identified as a threat.", "A threat that is incorrectly identified as normal activity.", "A normal activity that is correctly identified as normal activity."],
    correctAnswers: "A normal activity that is incorrectly identified as a threat.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "A false positive occurs when an alert or a detection system incorrectly flags a benign or normal event as a malicious one. This can lead to 'alert fatigue' for security analysts.",
    hint: "Think of an alarm going off for no reason."
  },
  {
    id: 434,
    question: "Which of the following is an example of an **acceptable use policy (AUP)** violation?",
    options: ["A user accessing a work email from a company-provided laptop.", "A user browsing a personal social media website on a company-provided laptop.", "A user accessing a company-provided website on a company-provided laptop.", "A user accessing a work email from a company-provided computer."],
    correctAnswers: "A user browsing a personal social media website on a company-provided laptop.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "An AUP is a document that outlines the acceptable uses of a company's IT assets. Browsing personal websites or social media is often a violation of an AUP.",
    hint: "The AUP defines what is 'acceptable' to do with company technology."
  },
  {
    id: 435,
    question: "What is the primary objective of a **business continuity plan (BCP)**?",
    options: ["To recover from a disaster as quickly as possible.", "To ensure that a business can continue its operations during and after a disaster.", "To prevent all disasters from occurring.", "To manage and mitigate all risks to a business."],
    correctAnswers: "To ensure that a business can continue its operations during and after a disaster.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A BCP is a plan to ensure that a business can continue its critical operations during and after a disaster, such as a fire, flood, or cyber attack.",
    hint: "This plan is about ensuring 'business continuity'."
  },
  {
    id: 436,
    question: "Which of the following is a key component of the **NIST Cybersecurity Framework**?",
    options: ["The CIA triad", "The incident response lifecycle", "The five core functions: Identify, Protect, Detect, Respond, Recover", "The principle of least privilege"],
    correctAnswers: "The five core functions: Identify, Protect, Detect, Respond, Recover",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "The NIST Cybersecurity Framework is a voluntary framework that consists of five core functions to help organizations manage cybersecurity risk: Identify, Protect, Detect, Respond, and Recover.",
    hint: "This framework has five key 'functions'."
  },
  {
    id: 437,
    question: "What is **e-discovery**?",
    options: ["The process of discovering new applications.", "The process of searching for and retrieving electronic data for use as evidence in a legal case.", "The process of discovering new security vulnerabilities.", "The process of a security team responding to a cyber incident."],
    correctAnswers: "The process of searching for and retrieving electronic data for use as evidence in a legal case.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "E-discovery (electronic discovery) is the process of identifying, collecting, and producing electronically stored information (ESI) in response to a request for production in a legal case.",
    hint: "This is the 'discovery' of 'e'lectronic evidence."
  },
  {
    id: 438,
    question: "What is a **runbook** in the context of incident response?",
    options: ["A book that contains all the security policies of an organization.", "A detailed guide that outlines the steps for responding to a specific type of incident.", "A list of all the security tools used by a security team.", "A document that outlines the roles and responsibilities of an incident response team."],
    correctAnswers: "A detailed guide that outlines the steps for responding to a specific type of incident.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A runbook is a detailed, step-by-step guide for performing a specific task, such as responding to a malware infection or a DDoS attack.",
    hint: "Think of a 'book' that you 'run' through to complete a task."
  },
  {
    id: 439,
    question: "What is **threat intelligence**?",
    options: ["The process of proactively searching for threats.", "Information about existing and emerging threats that can be used to protect an organization.", "A type of security software that monitors network traffic.", "A legal document that outlines the steps for a forensic investigation."],
    correctAnswers: "Information about existing and emerging threats that can be used to protect an organization.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Threat intelligence is information about threats and threat actors that is collected, processed, and analyzed to help an organization make better security decisions.",
    hint: "This is 'intelligence' about 'threats'."
  },
  {
    id: 440,
    question: "Which of the following is a key component of a **security incident response team (SIRT)**?",
    options: ["A team that only responds to physical security incidents.", "A team that only responds to cyber security incidents.", "A team that manages and configures security hardware.", "A team that is responsible for handling all security incidents, both physical and cyber."],
    correctAnswers: "A team that is responsible for handling all security incidents, both physical and cyber.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SIRT is a dedicated team responsible for handling security incidents, from initial detection to final resolution, regardless of whether they are physical or cyber.",
    hint: "The 'IR' in SIRT stands for 'Incident Response'."
  },
  {
    id: 441,
    question: "What is a **live forensic acquisition**?",
    options: ["The process of collecting digital evidence from a live, running system.", "The process of collecting digital evidence from a powered-off system.", "The process of collecting physical evidence from a crime scene.", "The process of a security team responding to a cyber incident."],
    correctAnswers: "The process of collecting digital evidence from a live, running system.",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "Live forensic acquisition is the process of collecting digital evidence from a system that is still powered on and running. This is necessary because some volatile data, such as RAM, is lost when the system is powered off.",
    hint: "The acquisition is done on a 'live' system."
  },

  // --- Domain 5.0: Governance, Risk, and Compliance ---
  {
    id: 501,
    question: "What is the purpose of a 'data classification' policy?",
    options: ["To organize data by creation date", "To categorize data based on its sensitivity and value to the organization", "To delete old data", "To encrypt all data on a network"],
    correctAnswers: "To categorize data based on its sensitivity and value to the organization",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A data classification policy is a framework for categorizing data according to its level of sensitivity, which then dictates the security controls needed to protect it.",
    hint: "This policy is about putting data into different 'classes' or categories."
  },
  {
    id: 502,
    question: "Which of the following is a key component of an 'acceptable use policy' (AUP)?",
    options: ["A list of approved software", "Guidelines for what an employee can and cannot do on company IT assets", "A list of all network devices", "A detailed disaster recovery plan"],
    correctAnswers: "Guidelines for what an employee can and cannot do on company IT assets",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An AUP is a document that outlines the acceptable uses of a company's computers, network, and internet access, and the consequences for violating the policy.",
    hint: "This policy defines what is considered 'acceptable use' of company technology."
  },
  {
    id: 503,
    question: "In the context of risk management, what is 'due diligence'?",
    options: ["The process of implementing a security policy", "The legal term for a failure to discharge duties", "The ongoing effort to maintain a security posture", "The investigation of a potential business partner's security controls"],
    correctAnswers: "The investigation of a potential business partner's security controls",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Due diligence is the reasonable steps taken by a person or company to satisfy a legal requirement, especially in the context of business mergers or partnerships.",
    hint: "This is a legal term related to being 'diligent' in an investigation."
  },
  {
    id: 504,
    question: "What is the primary objective of a 'business impact analysis' (BIA)?",
    options: ["To identify all threats to a business", "To determine the financial cost of a security breach", "To identify critical business functions and the impact of their disruption", "To create a detailed disaster recovery plan"],
    correctAnswers: "To identify critical business functions and the impact of their disruption",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A BIA is a critical part of a business continuity plan that identifies the operational and financial impacts that could result from a business function's disruption.",
    hint: "This analysis focuses on the 'impact' to the 'business'."
  },
  {
    id: 505,
    question: "Which of the following is a key component of an Acceptable Use Policy (AUP)?",
    options: ["A list of approved software", "Guidelines for what an employee can and cannot do on company IT assets", "A list of all network devices", "A detailed disaster recovery plan"],
    correctAnswers: "Guidelines for what an employee can and cannot do on company IT assets",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An AUP is a document that outlines the acceptable uses of a company's computers, network, and internet access, and the consequences for violating the policy.",
    hint: "This policy defines what is considered 'acceptable use' of company technology."
  },
  {
    id: 506,
    question: "What is the purpose of a **risk assessment**?",
    options: ["To identify, analyze, and evaluate risks to an organization's assets.", "To manage and mitigate all risks to a business.", "To create a detailed disaster recovery plan.", "To ensure that a business can continue its operations during a disaster."],
    correctAnswers: "To identify, analyze, and evaluate risks to an organization's assets.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A risk assessment is a process that identifies potential risks and threats, evaluates their likelihood and impact, and helps an organization prioritize which risks to address.",
    hint: "This process is about 'assessing' the 'risk'."
  },
  {
    id: 507,
    question: "What is the primary objective of a **Memorandum of Understanding (MOU)**?",
    options: ["A legally binding contract between two organizations.", "A formal agreement between two or more parties to outline their intentions and responsibilities.", "A document that outlines the security policies of an organization.", "A document that outlines the roles and responsibilities of an incident response team."],
    correctAnswers: "A formal agreement between two or more parties to outline their intentions and responsibilities.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "A Memorandum of Understanding (MOU) is a formal agreement between two or more parties to outline their intentions and responsibilities. It is not legally binding but is an important step in formalizing a partnership.",
    hint: "It's a 'memorandum' that outlines the parties' 'understanding'."
  },
  {
    id: 508,
    question: "Which of the following is a key component of a **data retention policy**?",
    options: ["A policy that defines how data should be deleted.", "A policy that defines how long data should be stored.", "A policy that defines how data should be classified.", "A policy that defines how data should be encrypted."],
    correctAnswers: "A policy that defines how long data should be stored.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A data retention policy defines the length of time that an organization should keep a particular type of data, as well as how to dispose of it when it is no longer needed.",
    hint: "This policy is about 'retaining' data for a certain period of time."
  },
  {
    id: 509,
    question: "What is a **Service Level Agreement (SLA)**?",
    options: ["A legally binding contract between two organizations.", "A non-legally binding agreement between two organizations.", "A document that outlines the security policies of an organization.", "A document that outlines the roles and responsibilities of a vendor."],
    correctAnswers: "A legally binding contract between two organizations.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A Service Level Agreement (SLA) is a legally binding contract between a service provider and a customer that outlines the level of service and the penalties for not meeting the agreed-upon standards.",
    hint: "This is a contract about the 'level' of 'service' provided."
  },
  {
    id: 510,
    question: "What is **due care** in the context of security?",
    options: ["The ongoing effort to maintain a security posture.", "The legal term for a failure to discharge duties.", "The investigation of a potential business partner's security controls.", "The implementation of all security controls."],
    correctAnswers: "The ongoing effort to maintain a security posture.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Due care is the reasonable care that a prudent person would exercise in a given situation. In security, it means taking all reasonable steps to protect an organization's assets and to avoid negligence.",
    hint: "This is about showing 'due' 'care' for security."
  },
  {
    id: 511,
    question: "Which of the following is a key component of a **privacy policy**?",
    options: ["A policy that defines how long data should be stored.", "A policy that defines how an organization collects, uses, and protects personal information.", "A policy that defines how data should be classified.", "A policy that defines how data should be encrypted."],
    correctAnswers: "A policy that defines how an organization collects, uses, and protects personal information.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A privacy policy is a document that explains how an organization collects, uses, and protects the personal information of its customers and employees.",
    hint: "This policy is about a person's 'privacy'."
  },
  {
    id: 512,
    question: "What is **risk acceptance**?",
    options: ["The process of implementing security controls to mitigate a risk.", "The process of transferring a risk to another party.", "The decision to accept a risk and its potential consequences.", "The decision to avoid a risk."],
    correctAnswers: "The decision to accept a risk and its potential consequences.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk acceptance is a risk management strategy in which an organization decides to accept a risk and its potential consequences without taking any action to mitigate it.",
    hint: "The organization is 'accepting' the 'risk'."
  },
  {
    id: 513,
    question: "Which of the following is an example of **risk avoidance**?",
    options: ["Implementing a firewall to mitigate a risk.", "Buying cyber insurance to transfer a risk.", "Shutting down a service to avoid a known vulnerability.", "Accepting the risk of a cyber attack."],
    correctAnswers: "Shutting down a service to avoid a known vulnerability.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk avoidance is a risk management strategy in which an organization decides to avoid a risk by not engaging in the activity that creates the risk.",
    hint: "The organization is 'avoiding' the 'risk'."
  },
  {
    id: 514,
    question: "What is a **security control framework**?",
    options: ["A document that outlines the security policies of an organization.", "A set of guidelines and best practices for implementing security controls.", "A legal document that outlines the roles and responsibilities of an incident response team.", "A document that outlines the security goals of an organization."],
    correctAnswers: "A set of guidelines and best practices for implementing security controls.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "A security control framework is a set of guidelines and best practices that helps an organization manage and reduce its cybersecurity risks. Examples include the NIST Cybersecurity Framework and ISO 27001.",
    hint: "This framework provides a 'frame' to 'work' within for security controls."
  },
  {
    id: 515,
    question: "What is the purpose of a **security awareness training** program?",
    options: ["To provide technical training to new employees.", "To educate employees on security policies and best practices.", "To manage and configure security hardware.", "To monitor network traffic for malicious activity."],
    correctAnswers: "To educate employees on security policies and best practices.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Security awareness training is a program that educates employees on security policies, best practices, and the risks of social engineering attacks.",
    hint: "This training is about 'awareness' of 'security'."
  },
  {
    id: 516,
    question: "Which of the following is an example of **risk transference**?",
    options: ["Implementing a firewall to mitigate a risk.", "Buying cyber insurance to transfer a risk.", "Shutting down a service to avoid a known vulnerability.", "Accepting the risk of a cyber attack."],
    correctAnswers: "Buying cyber insurance to transfer a risk.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk transference is a risk management strategy in which an organization transfers a risk to another party, such as by buying cyber insurance or outsourcing a service to a third party.",
    hint: "The organization is 'transferring' the 'risk' to another party."
  },
  {
    id: 517,
    question: "What is the purpose of a **business continuity plan (BCP)**?",
    options: ["To recover from a disaster as quickly as possible.", "To ensure that a business can continue its operations during and after a disaster.", "To prevent all disasters from occurring.", "To manage and mitigate all risks to a business."],
    correctAnswers: "To ensure that a business can continue its operations during and after a disaster.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A BCP is a plan to ensure that a business can continue its critical operations during and after a disaster, such as a fire, flood, or cyber attack.",
    hint: "This plan is about ensuring 'business continuity'."
  },
  {
    id: 518,
    question: "What is **due diligence**?",
    options: ["The process of implementing a security policy.", "The ongoing effort to maintain a security posture.", "The investigation of a potential business partner's security controls.", "The legal term for a failure to discharge duties."],
    correctAnswers: "The investigation of a potential business partner's security controls.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Due diligence is the reasonable steps taken by a person or company to satisfy a legal requirement, especially in the context of business mergers or partnerships.",
    hint: "This is a legal term related to being 'diligent' in an investigation."
  },
  {
    id: 519,
    question: "What is the primary objective of a **business impact analysis (BIA)**?",
    options: ["To identify all threats to a business.", "To determine the financial cost of a security breach.", "To identify critical business functions and the impact of their disruption.", "To create a detailed disaster recovery plan."],
    correctAnswers: "To identify critical business functions and the impact of their disruption.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A BIA is a critical part of a business continuity plan that identifies the operational and financial impacts that could result from a business function's disruption.",
    hint: "This analysis focuses on the 'impact' to the 'business'."
  },
  {
    id: 520,
    question: "Which of the following is a key component of an **Acceptable Use Policy (AUP)**?",
    options: ["A list of approved software.", "Guidelines for what an employee can and cannot do on company IT assets.", "A list of all network devices.", "A detailed disaster recovery plan."],
    correctAnswers: "Guidelines for what an employee can and cannot do on company IT assets.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An AUP is a document that outlines the acceptable uses of a company's computers, network, and internet access, and the consequences for violating the policy.",
    hint: "This policy defines what is considered 'acceptable use' of company technology."
  },
  {
    id: 521,
    question: "What is the purpose of a **privacy policy**?",
    options: ["To define how long data should be stored.", "To define how an organization collects, uses, and protects personal information.", "To define how data should be classified.", "To define how data should be encrypted."],
    correctAnswers: "To define how an organization collects, uses, and protects personal information.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A privacy policy is a document that explains how an organization collects, uses, and protects the personal information of its customers and employees.",
    hint: "This policy is about a person's 'privacy'."
  },
  {
    id: 522,
    question: "What is **risk acceptance**?",
    options: ["The process of implementing security controls to mitigate a risk.", "The process of transferring a risk to another party.", "The decision to accept a risk and its potential consequences.", "The decision to avoid a risk."],
    correctAnswers: "The decision to accept a risk and its potential consequences.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk acceptance is a risk management strategy in which an organization decides to accept a risk and its potential consequences without taking any action to mitigate it.",
    hint: "The organization is 'accepting' the 'risk'."
  },
  {
    id: 523,
    question: "Which of the following is an example of **risk avoidance**?",
    options: ["Implementing a firewall to mitigate a risk.", "Buying cyber insurance to transfer a risk.", "Shutting down a service to avoid a known vulnerability.", "Accepting the risk of a cyber attack."],
    correctAnswers: "Shutting down a service to avoid a known vulnerability.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk avoidance is a risk management strategy in which an organization decides to avoid a risk by not engaging in the activity that creates the risk.",
    hint: "The organization is 'avoiding' the 'risk'."
  },
  {
    id: 524,
    question: "What is a **security control framework**?",
    options: ["A document that outlines the security policies of an organization.", "A set of guidelines and best practices for implementing security controls.", "A legal document that outlines the roles and responsibilities of an incident response team.", "A document that outlines the security goals of an organization."],
    correctAnswers: "A set of guidelines and best practices for implementing security controls.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "A security control framework is a set of guidelines and best practices that helps an organization manage and reduce its cybersecurity risks. Examples include the NIST Cybersecurity Framework and ISO 27001.",
    hint: "This framework provides a 'frame' to 'work' within for security controls."
  },
  {
    id: 525,
    question: "What is the purpose of a **security awareness training** program?",
    options: ["To provide technical training to new employees.", "To educate employees on security policies and best practices.", "To manage and configure security hardware.", "To monitor network traffic for malicious activity."],
    correctAnswers: "To educate employees on security policies and best practices.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Security awareness training is a program that educates employees on security policies, best practices, and the risks of social engineering attacks.",
    hint: "This training is about 'awareness' of 'security'."
  },
  {
    id: 526,
    question: "Which of the following is an example of **risk transference**?",
    options: ["Implementing a firewall to mitigate a risk.", "Buying cyber insurance to transfer a risk.", "Shutting down a service to avoid a known vulnerability.", "Accepting the risk of a cyber attack."],
    correctAnswers: "Buying cyber insurance to transfer a risk.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk transference is a risk management strategy in which an organization transfers a risk to another party, such as by buying cyber insurance or outsourcing a service to a third party.",
    hint: "The organization is 'transferring' the 'risk' to another party."
  },
  {
    id: 527,
    question: "What is a **Service Level Agreement (SLA)**?",
    options: ["A legally binding contract between two organizations.", "A non-legally binding agreement between two organizations.", "A document that outlines the security policies of an organization.", "A document that outlines the roles and responsibilities of a vendor."],
    correctAnswers: "A legally binding contract between two organizations.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A Service Level Agreement (SLA) is a legally binding contract between a service provider and a customer that outlines the level of service and the penalties for not meeting the agreed-upon standards.",
    hint: "This is a contract about the 'level' of 'service' provided."
  },
  {
    id: 528,
    question: "What is **due care** in the context of security?",
    options: ["The ongoing effort to maintain a security posture.", "The legal term for a failure to discharge duties.", "The investigation of a potential business partner's security controls.", "The implementation of all security controls."],
    correctAnswers: "The ongoing effort to maintain a security posture.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Due care is the reasonable care that a prudent person would exercise in a given situation. In security, it means taking all reasonable steps to protect an organization's assets and to avoid negligence.",
    hint: "This is about showing 'due' 'care' for security."
  },
  {
    id: 529,
    question: "What is the primary objective of a **risk assessment**?",
    options: ["To identify, analyze, and evaluate risks to an organization's assets.", "To manage and mitigate all risks to a business.", "To create a detailed disaster recovery plan.", "To ensure that a business can continue its operations during a disaster."],
    correctAnswers: "To identify, analyze, and evaluate risks to an organization's assets.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A risk assessment is a process that identifies potential risks and threats, evaluates their likelihood and impact, and helps an organization prioritize which risks to address.",
    hint: "This process is about 'assessing' the 'risk'."
  },
  {
    id: 530,
    question: "What is the purpose of a **data classification** policy?",
    options: ["To organize data by creation date.", "To categorize data based on its sensitivity and value to the organization.", "To delete old data.", "To encrypt all data on a network."],
    correctAnswers: "To categorize data based on its sensitivity and value to the organization.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A data classification policy is a framework for categorizing data according to its level of sensitivity, which then dictates the security controls needed to protect it.",
    hint: "This policy is about putting data into different 'classes' or categories."
  },
  {
    id: 531,
    question: "Which of the following is a key component of an **Acceptable Use Policy (AUP)**?",
    options: ["A list of approved software.", "Guidelines for what an employee can and cannot do on company IT assets.", "A list of all network devices.", "A detailed disaster recovery plan."],
    correctAnswers: "Guidelines for what an employee can and cannot do on company IT assets.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An AUP is a document that outlines the acceptable uses of a company's computers, network, and internet access, and the consequences for violating the policy.",
    hint: "This policy defines what is considered 'acceptable use' of company technology."
  },
  {
    id: 532,
    question: "In the context of risk management, what is **due diligence**?",
    options: ["The process of implementing a security policy.", "The ongoing effort to maintain a security posture.", "The investigation of a potential business partner's security controls.", "The legal term for a failure to discharge duties."],
    correctAnswers: "The investigation of a potential business partner's security controls.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Due diligence is the reasonable steps taken by a person or company to satisfy a legal requirement, especially in the context of business mergers or partnerships.",
    hint: "This is a legal term related to being 'diligent' in an investigation."
  },
  {
    id: 533,
    question: "What is the primary objective of a **business impact analysis (BIA)**?",
    options: ["To identify all threats to a business.", "To determine the financial cost of a security breach.", "To identify critical business functions and the impact of their disruption.", "To create a detailed disaster recovery plan."],
    correctAnswers: "To identify critical business functions and the impact of their disruption.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A BIA is a critical part of a business continuity plan that identifies the operational and financial impacts that could result from a business function's disruption.",
    hint: "This analysis focuses on the 'impact' to the 'business'."
  },
  {
    id: 534,
    question: "Which of the following is a key component of a **data retention policy**?",
    options: ["A policy that defines how data should be deleted.", "A policy that defines how long data should be stored.", "A policy that defines how data should be classified.", "A policy that defines how data should be encrypted."],
    correctAnswers: "A policy that defines how long data should be stored.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A data retention policy defines the length of time that an organization should keep a particular type of data, as well as how to dispose of it when it is no longer needed.",
    hint: "This policy is about 'retaining' data for a certain period of time."
  },
  {
    id: 535,
    question: "What is a **Service Level Agreement (SLA)**?",
    options: ["A legally binding contract between two organizations.", "A non-legally binding agreement between two organizations.", "A document that outlines the security policies of an organization.", "A document that outlines the roles and responsibilities of a vendor."],
    correctAnswers: "A legally binding contract between two organizations.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A Service Level Agreement (SLA) is a legally binding contract between a service provider and a customer that outlines the level of service and the penalties for not meeting the agreed-upon standards.",
    hint: "This is a contract about the 'level' of 'service' provided."
  },
  {
    id: 536,
    question: "What is **due care** in the context of security?",
    options: ["The ongoing effort to maintain a security posture.", "The legal term for a failure to discharge duties.", "The investigation of a potential business partner's security controls.", "The implementation of all security controls."],
    correctAnswers: "The ongoing effort to maintain a security posture.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Due care is the reasonable care that a prudent person would exercise in a given situation. In security, it means taking all reasonable steps to protect an organization's assets and to avoid negligence.",
    hint: "This is about showing 'due' 'care' for security."
  },
  {
    id: 537,
    question: "Which of the following is an example of **risk transference**?",
    options: ["Implementing a firewall to mitigate a risk.", "Buying cyber insurance to transfer a risk.", "Shutting down a service to avoid a known vulnerability.", "Accepting the risk of a cyber attack."],
    correctAnswers: "Buying cyber insurance to transfer a risk.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Risk transference is a risk management strategy in which an organization transfers a risk to another party, such as by buying cyber insurance or outsourcing a service to a third party.",
    hint: "The organization is 'transferring' the 'risk' to another party."
  },
  {
    id: 538,
    question: "What is the primary objective of a **business continuity plan (BCP)**?",
    options: ["To recover from a disaster as quickly as possible.", "To ensure that a business can continue its operations during and after a disaster.", "To prevent all disasters from occurring.", "To manage and mitigate all risks to a business."],
    correctAnswers: "To ensure that a business can continue its operations during and after a disaster.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A BCP is a plan to ensure that a business can continue its critical operations during and after a disaster, such as a fire, flood, or cyber attack.",
    hint: "This plan is about ensuring 'business continuity'."
  },
  {
    id: 539,
    question: "What is the primary objective of a **risk assessment**?",
    options: ["To identify, analyze, and evaluate risks to an organization's assets.", "To manage and mitigate all risks to a business.", "To create a detailed disaster recovery plan.", "To ensure that a business can continue its operations during a disaster."],
    correctAnswers: "To identify, analyze, and evaluate risks to an organization's assets.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A risk assessment is a process that identifies potential risks and threats, evaluates their likelihood and impact, and helps an organization prioritize which risks to address.",
    hint: "This process is about 'assessing' the 'risk'."
  },
  {
    id: 540,
    question: "What is the purpose of a **security awareness training** program?",
    options: ["To provide technical training to new employees.", "To educate employees on security policies and best practices.", "To manage and configure security hardware.", "To monitor network traffic for malicious activity."],
    correctAnswers: "To educate employees on security policies and best practices.",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Security awareness training is a program that educates employees on security policies, best practices, and the risks of social engineering attacks.",
    hint: "This training is about 'awareness' of 'security'."
  },
];

export default questionsPool;