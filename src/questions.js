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
 */

/**
 * @type {Question[]}
 */
const questionsPool = [
  // --- Domain 1.0: Attacks, Threats, and Vulnerabilities ---
  {
    id: 101,
    question: "Which type of malware typically disguises itself as legitimate software?",
    options: ["Virus", "Worm", "Trojan Horse", "Spyware"],
    correctAnswers: "Trojan Horse",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A Trojan horse is a type of malware that disguises itself as legitimate software or files to trick users into installing it."
  },
  {
    id: 102,
    question: "What is the primary goal of a Denial of Service (DoS) attack?",
    options: ["Data theft", "System disruption", "Privilege escalation", "Malware propagation"],
    correctAnswers: "System disruption",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A DoS attack aims to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services."
  },
  {
    id: 103,
    question: "A user receives an email that appears to be from their bank, asking them to verify their account details by clicking a link. This is an example of what type of attack?",
    options: ["Vishing", "Smishing", "Phishing", "Whaling"],
    correctAnswers: "Phishing",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Phishing is a type of social engineering where an attacker attempts to trick individuals into revealing sensitive information, often via email, by impersonating a trustworthy entity."
  },
  {
    id: 104,
    question: "Which vulnerability scanning tool is commonly used for identifying open ports and services on a network?",
    options: ["Wireshark", "Nmap", "Metasploit", "Burp Suite"],
    correctAnswers: "Nmap",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Nmap (Network Mapper) is a free and open-source utility for network discovery and security auditing. It's often used for port scanning."
  },
  {
    id: 105,
    question: "What is the term for an attack that exploits a previously unknown vulnerability in software for which no patch is available?",
    options: ["Zero-day exploit", "Buffer overflow", "SQL injection", "Cross-site scripting (XSS)"],
    correctAnswers: "Zero-day exploit",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A zero-day exploit is an attack that occurs on the same day a vulnerability is discovered, before a patch or fix is available."
  },
  {
    id: 106,
    question: "Which attack involves an attacker placing themselves between two communicating parties to intercept or alter messages?",
    options: ["Replay attack", "Man-in-the-middle (MitM) attack", "Brute-force attack", "Denial of Service (DoS)"],
    correctAnswers: "Man-in-the-middle (MitM) attack",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A Man-in-the-Middle (MitM) attack is when an attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other."
  },
  {
    id: 107,
    question: "What is the term for a malicious program that replicates itself and spreads to other computers without human interaction?",
    options: ["Virus", "Worm", "Rootkit", "Spyware"],
    correctAnswers: "Worm",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A worm is a standalone malware computer program that replicates itself in order to spread to other computers."
  },
  {
    id: 108,
    question: "Which social engineering technique relies on creating a sense of urgency or fear to manipulate victims?",
    options: ["Impersonation", "Tailgating", "Scarcity", "Urgency/Intimidation"],
    correctAnswers: "Urgency/Intimidation",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Urgency or intimidation tactics are commonly used in social engineering to pressure victims into making quick, uninformed decisions."
  },
  {
    id: 109,
    question: "What is a 'rainbow table' primarily used for in cybersecurity?",
    options: ["Cracking encrypted files", "Decrypting network traffic", "Cracking password hashes", "Analyzing malware behavior"],
    correctAnswers: "Cracking password hashes",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes."
  },
  {
    id: 110,
    question: "Which type of attack involves an attacker attempting to guess a password by trying every possible combination of characters?",
    options: ["Dictionary attack", "Brute-force attack", "Rainbow table attack", "Hybrid attack"],
    correctAnswers: "Brute-force attack",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "A brute-force attack is a trial-and-error method used to obtain information such as user passwords or decryption keys by trying many combinations."
  },

  // --- Domain 2.0: Architecture and Design ---
  {
    id: 201,
    question: "What is the primary purpose of a firewall in a network architecture?",
    options: ["Encrypting data", "Filtering network traffic", "Detecting intrusions", "Managing user accounts"],
    correctAnswers: "Filtering network traffic",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "A firewall acts as a barrier between a trusted internal network and untrusted external networks, filtering traffic based on a set of security rules."
  },
  {
    id: 202,
    question: "Which security concept involves separating network segments to limit the impact of a breach?",
    options: ["Load balancing", "Network segmentation", "Failover clustering", "High availability"],
    correctAnswers: "Network segmentation",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Network segmentation divides a computer network into multiple smaller segments or subnets, improving security by limiting lateral movement in case of a breach."
  },
  {
    id: 203,
    question: "What is the benefit of implementing a demilitarized zone (DMZ) in a network?",
    options: ["To encrypt all internal traffic", "To isolate public-facing servers from the internal network", "To provide redundant internet connections", "To centralize user authentication"],
    correctAnswers: "To isolate public-facing servers from the internal network",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A DMZ is a perimeter network that protects an organization's internal local area network (LAN) from untrusted traffic, typically hosting public-facing services like web servers."
  },
  {
    id: 204,
    question: "Which cloud deployment model offers the highest level of control and security for an organization, but also requires the most management effort?",
    options: ["Public cloud", "Hybrid cloud", "Private cloud", "Community cloud"],
    correctAnswers: "Private cloud",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "A private cloud is a cloud computing environment dedicated to a single organization. It offers greater control and security but requires the organization to manage the infrastructure."
  },
  {
    id: 205,
    question: "What is the principle of 'least privilege' in security architecture?",
    options: ["Giving users maximum permissions for convenience", "Granting users only the minimum permissions necessary to perform their job functions", "Allowing all users to access all resources", "Restricting network access to only administrators"],
    correctAnswers: "Granting users only the minimum permissions necessary to perform their job functions",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "The principle of least privilege states that a user should be given only the minimum level of access necessary to perform their job duties."
  },
  {
    id: 206,
    question: "Which security control is designed to detect malicious activity within a network rather than just blocking it?",
    options: ["Firewall", "Intrusion Prevention System (IPS)", "Intrusion Detection System (IDS)", "Proxy server"],
    correctAnswers: "Intrusion Detection System (IDS)",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "An IDS monitors network or system activities for malicious activity or policy violations and alerts when such activity is detected. An IPS, on the other hand, can also prevent the activity."
  },
  {
    id: 207,
    question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
    options: ["To manage physical security access", "To collect, analyze, and correlate security event data from various sources", "To perform vulnerability assessments", "To encrypt data at rest"],
    correctAnswers: "To collect, analyze, and correlate security event data from various sources",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A SIEM system provides real-time analysis of security alerts generated by network hardware and applications, centralizing security event management."
  },
  {
    id: 208,
    question: "Which of the following is a key characteristic of a secure software development lifecycle (SSDLC)?",
    options: ["Security is addressed only during the testing phase", "Security is integrated into every phase of development", "Security is handled by a separate team after deployment", "Security is primarily focused on patching after vulnerabilities are found"],
    correctAnswers: "Security is integrated into every phase of development",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "An SSDLC integrates security practices and considerations into every phase of the software development process, from requirements gathering to deployment and maintenance."
  },
  {
    id: 209,
    question: "What is the primary function of a Hardware Security Module (HSM)?",
    options: ["To store user passwords", "To perform cryptographic operations and store cryptographic keys securely", "To provide network intrusion detection", "To manage physical access to servers"],
    correctAnswers: "To perform cryptographic operations and store cryptographic keys securely",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "An HSM is a physical computing device that safeguards and manages digital keys for strong authentication and provides cryptoprocessing."
  },
  {
    id: 210,
    question: "Which network device operates at Layer 2 (Data Link Layer) of the OSI model and forwards frames based on MAC addresses?",
    options: ["Router", "Hub", "Switch", "Firewall"],
    correctAnswers: "Switch",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "A switch is a network device that connects devices on a computer network by using packet switching to receive, process, and forward data to the destination device."
  },

  // --- Domain 3.0: Implementation ---
  {
    id: 301,
    question: "Which protocol is used to secure web traffic with encryption?",
    options: ["HTTP", "FTP", "SMTP", "HTTPS"],
    correctAnswers: "HTTPS",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, which uses SSL/TLS for encryption and authentication."
  },
  {
    id: 302,
    question: "What is the purpose of a Virtual Private Network (VPN)?",
    options: ["To speed up internet browsing", "To create a secure, encrypted connection over a public network", "To block unwanted emails", "To manage local network devices"],
    correctAnswers: "To create a secure, encrypted connection over a public network",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "A VPN extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network."
  },
  {
    id: 303,
    question: "Which authentication factor relies on 'something you are'?",
    options: ["Password", "Smart card", "Fingerprint", "PIN"],
    correctAnswers: "Fingerprint",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Biometrics like fingerprints, facial recognition, or iris scans fall under the 'something you are' authentication factor."
  },
  {
    id: 304,
    question: "What is the primary benefit of using a password manager?",
    options: ["It makes passwords easier to remember", "It generates and securely stores strong, unique passwords", "It encrypts all user data on a computer", "It prevents all malware infections"],
    correctAnswers: "It generates and securely stores strong, unique passwords",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Password managers help users create and store complex, unique passwords for different accounts, reducing the risk of credential reuse attacks."
  },
  {
    id: 305,
    question: "Which of the following is a best practice for securing a wireless network?",
    options: ["Using WEP encryption", "Disabling SSID broadcast", "Using WPA3 encryption with strong passwords", "Using default router credentials"],
    correctAnswers: "Using WPA3 encryption with strong passwords",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "WPA3 is the latest and most secure encryption standard for Wi-Fi networks, offering stronger protection against brute-force attacks compared to WEP or WPA2."
  },
  {
    id: 306,
    question: "What is the purpose of a patch management system?",
    options: ["To monitor network traffic", "To manage and apply software updates and security patches", "To create system backups", "To detect intrusion attempts"],
    correctAnswers: "To manage and apply software updates and security patches",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "Patch management is the process of distributing and applying updates to software. These patches are often critical for fixing security vulnerabilities."
  },
  {
    id: 307,
    question: "Which access control model is based on the idea that access decisions are made by the owner of the resource?",
    options: ["Role-Based Access Control (RBAC)", "Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Attribute-Based Access Control (ABAC)"],
    correctAnswers: "Discretionary Access Control (DAC)",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "DAC allows the owner of a resource to determine who can access it and what permissions they have. This is common in many operating systems."
  },
  {
    id: 308,
    question: "What is the primary function of a DNSSEC (Domain Name System Security Extensions)?",
    options: ["To encrypt DNS queries", "To prevent DNS spoofing and cache poisoning attacks", "To speed up DNS resolution", "To manage DNS records"],
    correctAnswers: "To prevent DNS spoofing and cache poisoning attacks",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "DNSSEC adds cryptographic signatures to DNS records, allowing DNS resolvers to verify the authenticity and integrity of DNS responses, thus preventing spoofing."
  },
  {
    id: 309,
    question: "Which protocol is commonly used for secure remote administration of network devices?",
    options: ["Telnet", "FTP", "SSH", "HTTP"],
    correctAnswers: "SSH",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "SSH (Secure Shell) is a cryptographic network protocol for operating network services securely over an unsecured network. It provides a secure channel over an unsecured network by using strong cryptography."
  },
  {
    id: 310,
    question: "What is the purpose of a digital certificate?",
    options: ["To encrypt all data on a hard drive", "To verify the identity of a user or website and establish trust", "To store user passwords securely", "To block malicious websites"],
    correctAnswers: "To verify the identity of a user or website and establish trust",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "Digital certificates are used to cryptographically link an identity to a public key, verifying the authenticity of a website or user."
  },

  // --- Domain 4.0: Operations and Incident Response ---
  {
    id: 401,
    question: "What is the first phase of the incident response process?",
    options: ["Containment", "Eradication", "Preparation", "Recovery"],
    correctAnswers: "Preparation",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "The incident response lifecycle typically starts with Preparation, which involves setting up policies, procedures, and tools before an incident occurs."
  },
  {
    id: 402,
    question: "During an incident, which step focuses on limiting the scope and impact of the security breach?",
    options: ["Identification", "Containment", "Analysis", "Post-incident activity"],
    correctAnswers: "Containment",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Containment aims to stop the spread of the incident and prevent further damage to systems and data."
  },
  {
    id: 403,
    question: "What is the primary goal of forensic analysis in incident response?",
    options: ["To restore systems to normal operation", "To identify the root cause of an incident and gather evidence", "To implement new security controls", "To notify affected parties"],
    correctAnswers: "To identify the root cause of an incident and gather evidence",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Forensic analysis involves systematically examining digital evidence to determine what happened, how it happened, and who was responsible."
  },
  {
    id: 404,
    question: "Which type of backup strategy involves backing up only the data that has changed since the last full backup?",
    options: ["Full backup", "Differential backup", "Incremental backup", "Snapshot backup"],
    correctAnswers: "Incremental backup",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "An incremental backup copies only the files that have changed since the last backup (full or incremental). Restoring requires the last full backup and all subsequent incremental backups."
  },
  {
    id: 405,
    question: "What is a 'hot site' in the context of disaster recovery?",
    options: ["A remote office with basic infrastructure", "A fully equipped alternative facility that can be operational almost immediately", "A facility that requires significant time and effort to set up", "A data center used for testing purposes only"],
    correctAnswers: "A fully equipped alternative facility that can be operational almost immediately",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A hot site is a fully functional alternative data center that has all the necessary hardware, software, and data to resume operations with minimal downtime."
  },
  {
    id: 406,
    question: "Which of the following is a common metric used to measure the effectiveness of an incident response plan?",
    options: ["Mean Time To Recovery (MTTR)", "Return on Investment (ROI)", "Total Cost of Ownership (TCO)", "Customer Satisfaction Score (CSS)"],
    correctAnswers: "Mean Time To Recovery (MTTR)",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "MTTR measures the average time it takes to recover from a product or system failure, indicating the efficiency of recovery efforts."
  },
  {
    id: 407,
    question: "What is the purpose of a Business Continuity Plan (BCP)?",
    options: ["To outline steps for recovering from a specific IT disaster", "To ensure that critical business functions can continue during and after a disaster", "To manage daily IT operations", "To develop new software applications"],
    correctAnswers: "To ensure that critical business functions can continue during and after a disaster",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "A BCP focuses on maintaining business operations during and after a disruptive event, ensuring the organization can continue to function."
  },
  {
    id: 408,
    question: "Which type of test simulates a real-world attack to identify vulnerabilities in a system or network?",
    options: ["Vulnerability scan", "Penetration test", "Security audit", "Compliance check"],
    correctAnswers: "Penetration test",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A penetration test (pen test) is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system."
  },
  {
    id: 409,
    question: "What is the chain of custody in digital forensics?",
    options: ["The network path an attack took", "A chronological documentation of evidence handling to maintain its integrity", "The sequence of events during an incident", "The hierarchy of security personnel"],
    correctAnswers: "A chronological documentation of evidence handling to maintain its integrity",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "The chain of custody is a critical process in digital forensics that tracks the handling and storage of evidence to ensure its admissibility in legal proceedings."
  },
  {
    id: 410,
    question: "Which phase of incident response focuses on removing the threat and restoring affected systems?",
    options: ["Identification", "Containment", "Eradication and Recovery", "Lessons Learned"],
    correctAnswers: "Eradication and Recovery",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "Eradication involves removing the cause of the incident (e.g., malware), and Recovery focuses on restoring affected systems and services to normal operation."
  },

  // --- Domain 5.0: Governance, Risk, and Compliance ---
  {
    id: 501,
    question: "What is the primary purpose of a Service Level Agreement (SLA) in cybersecurity?",
    options: ["To define the scope of a penetration test", "To outline the expected level of service and responsibilities between a provider and a customer", "To document network topology", "To specify software licensing terms"],
    correctAnswers: "To outline the expected level of service and responsibilities between a provider and a customer",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An SLA is a contract between a service provider and a customer that defines the level of service expected from the service provider."
  },
  {
    id: 502,
    question: "Which of the following is an example of a 'quantitative risk assessment'?",
    options: ["Identifying high, medium, and low risks", "Assigning monetary values to assets and potential losses", "Creating a risk matrix", "Listing potential threats"],
    correctAnswers: "Assigning monetary values to assets and potential losses",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Quantitative risk assessment attempts to assign objective numerical values (e.g., monetary) to the components of a risk assessment."
  },
  {
    id: 503,
    question: "What is the goal of a security awareness training program?",
    options: ["To teach employees how to code securely", "To make employees aware of security risks and their role in protecting organizational assets", "To train IT staff on new security tools", "To certify employees in cybersecurity practices"],
    correctAnswers: "To make employees aware of security risks and their role in protecting organizational assets",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Security awareness training educates employees about common threats, best practices, and their responsibilities in maintaining organizational security."
  },
  {
    id: 504,
    question: "Which regulatory compliance standard focuses on protecting the privacy and security of patient health information?",
    options: ["PCI DSS", "GDPR", "HIPAA", "SOX"],
    correctAnswers: "HIPAA",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) is a US law designed to provide privacy standards to protect patients' medical records and other health information."
  },
  {
    id: 505,
    question: "What is the primary purpose of a 'risk register'?",
    options: ["To list all employees in an organization", "To document identified risks, their potential impact, likelihood, and mitigation strategies", "To record daily security incidents", "To track software licenses"],
    correctAnswers: "To document identified risks, their potential impact, likelihood, and mitigation strategies",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "A risk register is a tool used in risk management and project management to identify potential risks, analyze their impact, and plan responses."
  },
  {
    id: 506,
    question: "Which of the following describes the concept of 'data minimization'?",
    options: ["Collecting as much data as possible for future use", "Collecting only the data that is necessary for a specific purpose", "Storing data indefinitely", "Sharing data with as many third parties as possible"],
    correctAnswers: "Collecting only the data that is necessary for a specific purpose",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Data minimization is a principle of data protection that states that an organization should only collect, process, and store the minimum amount of personal data required for its purposes."
  },
  {
    id: 507,
    question: "What is the role of a Data Protection Officer (DPO) under GDPR?",
    options: ["To manage IT infrastructure", "To advise on data protection compliance and oversee related activities", "To develop new software applications", "To conduct penetration tests"],
    correctAnswers: "To advise on data protection compliance and oversee related activities",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Under GDPR, a DPO is responsible for overseeing an organization's data protection strategy and ensuring compliance with GDPR requirements."
  },
  {
    id: 508,
    question: "Which framework provides a set of guidelines for managing cybersecurity risk, developed by NIST?",
    options: ["ISO 27001", "ITIL", "NIST Cybersecurity Framework (CSF)", "COBIT"],
    correctAnswers: "NIST Cybersecurity Framework (CSF)",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "The NIST Cybersecurity Framework is a voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk."
  },
  {
    id: 509,
    question: "What is the purpose of a 'privacy impact assessment' (PIA)?",
    options: ["To assess the performance of a new application", "To identify and mitigate privacy risks associated with a new project or system", "To evaluate network security controls", "To measure employee productivity"],
    correctAnswers: "To identify and mitigate privacy risks associated with a new project or system",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "A PIA is a process that helps organizations identify and minimize the privacy risks of new projects or policies."
  },
  {
    id: 510,
    question: "Which term describes the process of formally accepting the consequences of a particular risk?",
    options: ["Risk mitigation", "Risk transfer", "Risk avoidance", "Risk acceptance"],
    correctAnswers: "Risk acceptance",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Risk acceptance is a strategy where an organization acknowledges a risk and decides to take no action to mitigate or transfer it."
  },
  // Adding more questions to reach a substantial pool
  {
    id: 111,
    question: "What is 'credential stuffing'?",
    options: ["An attack where attackers use stolen credentials from one service to try and log into other services", "An attack that floods a system with login attempts", "A method of creating strong passwords", "A way to store credentials securely"],
    correctAnswers: "An attack where attackers use stolen credentials from one service to try and log into other services",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Credential stuffing is an attack where attackers use lists of stolen usernames and passwords (credentials) from data breaches to try and gain unauthorized access to other online services."
  },
  {
    id: 112,
    question: "Which type of attack targets the DNS cache on a server, leading to users being redirected to malicious websites?",
    options: ["DNS poisoning", "ARP poisoning", "IP spoofing", "MAC flooding"],
    correctAnswers: "DNS poisoning",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "DNS poisoning (or cache poisoning) is a type of attack that introduces corrupt Domain Name System (DNS) data into a DNS resolver's cache, causing the server to return an incorrect IP address."
  },
  {
    id: 113,
    question: "What is the purpose of 'fuzzing' in security testing?",
    options: ["To encrypt data in transit", "To detect vulnerabilities by feeding invalid, unexpected, or random data to a computer program", "To analyze network traffic patterns", "To manage access control lists"],
    correctAnswers: "To detect vulnerabilities by feeding invalid, unexpected, or random data to a computer program",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "Fuzzing is an automated software testing technique that involves providing invalid, unexpected, or random data as inputs to a computer program to expose software bugs and security vulnerabilities."
  },
  {
    id: 114,
    question: "Which of the following is a common indicator of a phishing attempt?",
    options: ["A personalized greeting", "A legitimate sender email address", "Grammatical errors and urgent requests", "Links to well-known websites"],
    correctAnswers: "Grammatical errors and urgent requests",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Phishing emails often contain poor grammar, spelling mistakes, and create a sense of urgency or threat to pressure the recipient into acting quickly without thinking."
  },
  {
    id: 115,
    question: "What is a 'logic bomb'?",
    options: ["A type of explosive device", "Malicious code intentionally inserted into a software system that will set off a malicious function when specified conditions are met", "A software bug that causes a system to crash", "A program that encrypts files for ransomware"],
    correctAnswers: "Malicious code intentionally inserted into a software system that will set off a malicious function when specified conditions are met",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A logic bomb is a piece of code intentionally inserted into a software system that executes a malicious function when specific conditions are met, such as a particular date or user action."
  },

  {
    id: 211,
    question: "What is the primary security benefit of using virtualization?",
    options: ["It reduces hardware costs", "It allows for isolation of virtual machines, limiting the impact of a compromise on one VM", "It speeds up network performance", "It simplifies software installation"],
    correctAnswers: "It allows for isolation of virtual machines, limiting the impact of a compromise on one VM",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Virtualization provides isolation between virtual machines (VMs). If one VM is compromised, the attacker's access is typically limited to that VM, preventing lateral movement to other VMs or the host."
  },
  {
    id: 212,
    question: "Which security architecture principle suggests that multiple layers of security controls should be used?",
    options: ["Least privilege", "Separation of duties", "Defense in depth", "Implicit deny"],
    correctAnswers: "Defense in depth",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Defense in depth is a security strategy where multiple layers of security controls are placed throughout an IT system to protect against various threats."
  },
  {
    id: 213,
    question: "What is the main advantage of a 'microservices architecture' from a security perspective?",
    options: ["It makes applications monolithic and easier to manage", "It allows for smaller, isolated components, limiting the attack surface and impact of a breach", "It eliminates the need for firewalls", "It simplifies database management"],
    correctAnswers: "It allows for smaller, isolated components, limiting the attack surface and impact of a breach",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "In a microservices architecture, applications are built as collections of small, independent services. This isolation means a vulnerability in one service is less likely to affect the entire application."
  },
  {
    id: 214,
    question: "Which security control is designed to enforce security policies for cloud-based resources?",
    options: ["Cloud Access Security Broker (CASB)", "Intrusion Detection System (IDS)", "Data Loss Prevention (DLP)", "Security Information and Event Management (SIEM)"],
    correctAnswers: "Cloud Access Security Broker (CASB)",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "A CASB is a security policy enforcement point placed between cloud service consumers and cloud service providers to combine and interject enterprise security policies as the cloud-based resources are accessed."
  },
  {
    id: 215,
    question: "What is the concept of 'fail-secure' in system design?",
    options: ["A system that continues to operate normally even after a failure", "A system that fails to a secure state, denying access rather than allowing unauthorized access", "A system that automatically recovers from attacks", "A system that stores backups securely"],
    correctAnswers: "A system that fails to a secure state, denying access rather than allowing unauthorized access",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Fail-secure (or fail-safe) means that in the event of a system failure, the system defaults to a state that denies access or operations, prioritizing security over availability."
  },

  {
    id: 311,
    question: "Which of the following is a symmetric encryption algorithm?",
    options: ["RSA", "ECC", "AES", "Diffie-Hellman"],
    correctAnswers: "AES",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "AES (Advanced Encryption Standard) is a symmetric block cipher, meaning the same key is used for both encryption and decryption."
  },
  {
    id: 312,
    question: "What is the purpose of salting a password hash?",
    options: ["To make the password longer", "To make rainbow table attacks more difficult by adding unique data to each password before hashing", "To encrypt the password before hashing", "To store the password in plain text"],
    correctAnswers: "To make rainbow table attacks more difficult by adding unique data to each password before hashing",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Salting involves adding a unique, random string of data (the 'salt') to a password before hashing it. This makes precomputed rainbow tables ineffective against password hashes."
  },
  {
    id: 313,
    question: "Which type of certificate is used to secure multiple subdomains under a single domain?",
    options: ["Domain Validation (DV) certificate", "Organization Validation (OV) certificate", "Extended Validation (EV) certificate", "Wildcard certificate"],
    correctAnswers: "Wildcard certificate",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "A wildcard certificate allows you to secure a primary domain and an unlimited number of its subdomains with a single certificate."
  },
  {
    id: 314,
    question: "What is the primary function of a Network Access Control (NAC) system?",
    options: ["To encrypt all network traffic", "To authenticate and authorize devices attempting to connect to a network", "To monitor network performance", "To block malicious websites"],
    correctAnswers: "To authenticate and authorize devices attempting to connect to a network",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "NAC solutions enforce security policies on devices attempting to access a network, ensuring they meet certain criteria (e.g., up-to-date antivirus) before granting access."
  },
  {
    id: 315,
    question: "Which secure coding practice helps prevent SQL injection attacks?",
    options: ["Using client-side validation only", "Using parameterized queries or prepared statements", "Storing credentials in plain text", "Disabling error messages"],
    correctAnswers: "Using parameterized queries or prepared statements",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Parameterized queries separate the SQL code from user-supplied input, preventing malicious input from being interpreted as executable SQL commands."
  },

  {
    id: 411,
    question: "What is the purpose of a 'lessons learned' meeting after an incident?",
    options: ["To assign blame for the incident", "To identify what went well, what went wrong, and how to improve future incident response", "To calculate the financial impact of the incident", "To notify legal counsel"],
    correctAnswers: "To identify what went well, what went wrong, and how to improve future incident response",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "A lessons learned meeting is a critical post-incident activity to review the incident response process, identify areas for improvement, and update policies and procedures."
  },
  {
    id: 412,
    question: "Which type of backup copies all data that has changed since the last full backup, but does not mark files as backed up?",
    options: ["Full backup", "Differential backup", "Incremental backup", "Snapshot backup"],
    correctAnswers: "Differential backup",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "A differential backup copies all data that has changed since the last full backup. Restoring requires only the last full backup and the latest differential backup."
  },
  {
    id: 413,
    question: "What is the primary goal of a 'tabletop exercise' in incident response planning?",
    options: ["To physically test the disaster recovery site", "To simulate an incident in a discussion-based format to test plans and procedures", "To conduct a live penetration test", "To train new security analysts on tools"],
    correctAnswers: "To simulate an incident in a discussion-based format to test plans and procedures",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Tabletop exercises are discussion-based sessions where participants talk through their roles and responsibilities during an incident, without actual systems being affected."
  },
  {
    id: 414,
    question: "Which security operation center (SOC) function involves continuous monitoring of systems for security events?",
    options: ["Vulnerability management", "Threat intelligence", "Security monitoring", "Incident response"],
    correctAnswers: "Security monitoring",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Security monitoring is the continuous process of collecting and analyzing security-related data from various sources to detect suspicious activity and potential threats."
  },
  {
    id: 415,
    question: "What is the purpose of a 'rollback' plan in operations?",
    options: ["To encrypt data before deployment", "To revert a system or application to a previous stable state in case of issues with a new deployment or change", "To create a backup of a system", "To analyze system logs"],
    correctAnswers: "To revert a system or application to a previous stable state in case of issues with a new deployment or change",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "A rollback plan outlines the steps to revert a system or application to a known good state if a new change or deployment introduces problems."
  },

  {
    id: 511,
    question: "What is the purpose of 'due diligence' in risk management?",
    options: ["To avoid all risks completely", "To take reasonable steps to protect an organization's assets and comply with regulations", "To transfer all risks to third parties", "To only address risks after an incident occurs"],
    correctAnswers: "To take reasonable steps to protect an organization's assets and comply with regulations",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Due diligence involves performing reasonable research and investigation to ensure that an organization is taking appropriate measures to manage risks and comply with legal and regulatory requirements."
  },
  {
    id: 512,
    question: "Which compliance standard specifically addresses the security of credit card data?",
    options: ["HIPAA", "GDPR", "PCI DSS", "SOX"],
    correctAnswers: "PCI DSS",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) is a set of security standards designed to ensure that all companies that process, store, or transmit credit card information maintain a secure environment."
  },
  {
    id: 513,
    question: "What is the main difference between a policy and a standard in security governance?",
    options: ["Policies are optional, standards are mandatory", "Policies are high-level statements, standards provide specific, mandatory requirements", "Standards are created by external bodies, policies are internal", "There is no difference"],
    correctAnswers: "Policies are high-level statements, standards provide specific, mandatory requirements",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "A policy is a high-level statement of management's intent regarding security. A standard is a mandatory rule or requirement that supports a policy by specifying how to achieve it."
  },
  {
    id: 514,
    question: "Which of the following is an example of a 'qualitative risk assessment'?",
    options: ["Calculating Annualized Loss Expectancy (ALE)", "Assigning risk levels like 'High', 'Medium', 'Low'", "Determining the monetary value of an asset", "Calculating the Single Loss Expectancy (SLE)"],
    correctAnswers: "Assigning risk levels like 'High', 'Medium', 'Low'",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Qualitative risk assessment uses subjective judgment to categorize risks, often using descriptive terms like high, medium, or low, rather than numerical values."
  },
  {
    id: 515,
    question: "What is the purpose of a 'data retention policy'?",
    options: ["To encrypt all data", "To define how long specific types of data should be kept and how they should be disposed of", "To prevent data loss", "To share data with third parties"],
    correctAnswers: "To define how long specific types of data should be kept and how they should be disposed of",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A data retention policy specifies how long certain types of data must be kept, often to comply with legal or regulatory requirements, and how they should be securely destroyed."
  },
  {
    id: 116,
    question: "Which type of malware modifies the operating system to hide its presence?",
    options: ["Spyware", "Adware", "Rootkit", "Ransomware"],
    correctAnswers: "Rootkit",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A rootkit is a collection of computer software, typically malicious, designed to enable access to a computer or areas of its software that are otherwise not allowed while actively hiding its existence."
  },
  {
    id: 117,
    question: "What is a 'watering hole' attack?",
    options: ["An attack targeting a specific individual with a personalized email", "An attack where a hacker infects a website frequently visited by a target group", "An attack that exploits a vulnerability in a web browser", "An attack that uses a fake Wi-Fi hotspot"],
    correctAnswers: "An attack where a hacker infects a website frequently visited by a target group",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A watering hole attack is a targeted attack where the attacker compromises a website that a specific group of users is known to frequent, hoping to infect the users when they visit the site."
  },
  {
    id: 118,
    question: "Which security assessment technique involves reviewing system configurations and security settings against a baseline?",
    options: ["Vulnerability scanning", "Penetration testing", "Security auditing", "Social engineering"],
    correctAnswers: "Security auditing",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "Security auditing involves systematically reviewing security controls, configurations, and logs to ensure compliance with policies and identify weaknesses."
  },
  {
    id: 119,
    question: "What is 'typo squatting'?",
    options: ["Registering domain names that are common misspellings of legitimate websites to trick users", "An attack that floods a website with traffic", "A method of encrypting website traffic", "A technique for securing DNS records"],
    correctAnswers: "Registering domain names that are common misspellings of legitimate websites to trick users",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Typo squatting (or URL hijacking) is a form of cybersquatting that relies on mistakes such as typos made by Internet users when inputting a website address into a web browser."
  },
  {
    id: 120,
    question: "Which type of attack uses a precomputed table of all possible password hashes?",
    options: ["Brute-force attack", "Dictionary attack", "Rainbow table attack", "Hybrid attack"],
    correctAnswers: "Rainbow table attack",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "A rainbow table is a precomputed table used to reverse cryptographic hash functions, commonly used to crack password hashes without needing to compute each hash individually."
  },
  {
    id: 216,
    question: "What is the concept of 'separation of duties' in security architecture?",
    options: ["Dividing a network into multiple segments", "Ensuring that no single individual has complete control over a critical process or system", "Separating development and production environments", "Separating physical and logical security controls"],
    correctAnswers: "Ensuring that no single individual has complete control over a critical process or system",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Separation of duties is a principle designed to prevent fraud and error by requiring that no single individual can complete a critical task without the involvement of another person."
  },
  {
    id: 217,
    question: "Which network topology offers the highest fault tolerance due to redundant paths?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    correctAnswers: "Mesh",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "A mesh topology provides multiple paths for data to travel between devices, making it highly fault-tolerant as a failure of one link does not disrupt the entire network."
  },
  {
    id: 218,
    question: "What is the primary security concern with 'Shadow IT'?",
    options: ["It increases hardware costs", "It introduces unmanaged and potentially insecure systems and applications into the enterprise environment", "It slows down network performance", "It makes software updates easier"],
    correctAnswers: "It introduces unmanaged and potentially insecure systems and applications into the enterprise environment",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Shadow IT refers to IT systems and solutions built and used inside organizations without explicit organizational approval. This can lead to security vulnerabilities and compliance issues."
  },
  {
    id: 219,
    question: "Which secure design principle suggests that all access should be denied by default unless explicitly allowed?",
    options: ["Least privilege", "Implicit deny", "Defense in depth", "Separation of duties"],
    correctAnswers: "Implicit deny",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "Implicit deny is a security principle stating that if a specific permission is not explicitly granted, then it is denied. This is a fundamental concept in firewall rules and access control lists."
  },
  {
    id: 220,
    question: "What is the purpose of a 'sandbox' environment in application security?",
    options: ["To store application backups", "To provide an isolated environment for running untrusted code or testing applications without affecting the main system", "To encrypt application data", "To monitor application performance"],
    correctAnswers: "To provide an isolated environment for running untrusted code or testing applications without affecting the main system",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A sandbox is a security mechanism for separating running programs, usually to execute untested code or untrusted programs from unverified third parties, without risking harm to the host machine."
  },
  {
    id: 316,
    question: "Which authentication protocol uses tickets to grant access to network resources?",
    options: ["RADIUS", "TACACS+", "Kerberos", "SAML"],
    correctAnswers: "Kerberos",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Kerberos is a network authentication protocol that works on the basis of 'tickets' to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner."
  },
  {
    id: 317,
    question: "What is the purpose of a 'Guest Network' on a Wi-Fi router?",
    options: ["To provide faster internet access", "To isolate guest devices from the main internal network for security", "To allow guests to access all internal resources", "To encrypt all guest traffic"],
    correctAnswers: "To isolate guest devices from the main internal network for security",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "A guest network provides internet access to visitors while keeping their devices separate from your primary network, enhancing security by preventing unauthorized access to internal resources."
  },
  {
    id: 318,
    question: "Which cryptographic primitive is primarily used for ensuring data integrity?",
    options: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Digital signatures"],
    correctAnswers: "Hashing",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "Hashing algorithms produce a fixed-size string of characters (a hash) from input data. Any change to the input data will result in a different hash, thus verifying data integrity."
  },
  {
    id: 319,
    question: "What is the benefit of using 'multi-factor authentication' (MFA)?",
    options: ["It makes passwords easier to remember", "It eliminates the need for passwords", "It adds multiple layers of security by requiring more than one verification method", "It encrypts user data automatically"],
    correctAnswers: "It adds multiple layers of security by requiring more than one verification method",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "MFA requires users to provide two or more verification factors to gain access to a resource, significantly increasing security by making it harder for unauthorized users to gain access."
  },
  {
    id: 320,
    question: "Which type of firewall inspects the entire communication session and maintains state information?",
    options: ["Packet-filtering firewall", "Proxy firewall", "Stateful firewall", "Next-generation firewall"],
    correctAnswers: "Stateful firewall",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "A stateful firewall monitors the state of active connections and uses this information to determine which network packets to allow through the firewall."
  },
  {
    id: 416,
    question: "What is the primary purpose of a 'cold site' in disaster recovery?",
    options: ["A fully equipped facility ready for immediate use", "A basic facility with infrastructure but no equipment or data, requiring significant setup time", "A remote office for daily operations", "A site for testing new systems"],
    correctAnswers: "A basic facility with infrastructure but no equipment or data, requiring significant setup time",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A cold site is a disaster recovery site that has the necessary space and infrastructure (power, cooling) but lacks equipment and data, requiring significant time to become operational."
  },
  {
    id: 417,
    question: "Which type of security assessment involves an authorized ethical hacker attempting to breach a system or network?",
    options: ["Vulnerability scan", "Security audit", "Penetration test", "Risk assessment"],
    correctAnswers: "Penetration test",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "A penetration test is a simulated cyberattack against your computer system to check for exploitable vulnerabilities."
  },
  {
    id: 418,
    question: "What is the significance of 'evidence integrity' in digital forensics?",
    options: ["Ensuring evidence is easy to access", "Ensuring evidence is relevant to the case", "Ensuring evidence has not been altered or tampered with since its collection", "Ensuring evidence is stored in a public location"],
    correctAnswers: "Ensuring evidence has not been altered or tampered with since its collection",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "Maintaining evidence integrity is crucial in forensics to ensure that the collected digital evidence is admissible in legal proceedings and accurately reflects the state of the system at the time of collection."
  },
  {
    id: 419,
    question: "Which of the following describes the 'Recovery Point Objective' (RPO)?",
    options: ["The maximum tolerable time to restore business functions after a disaster", "The maximum tolerable amount of data loss measured in time", "The point in time when the system was last backed up", "The cost of recovering from a disaster"],
    correctAnswers: "The maximum tolerable amount of data loss measured in time",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "RPO defines the maximum amount of data that can be lost from an IT service due to a major incident. It's measured in time (e.g., 4 hours of data loss)."
  },
  {
    id: 420,
    question: "What is the main role of a Security Operations Center (SOC)?",
    options: ["To develop new software applications", "To manage physical security of buildings", "To continuously monitor, detect, analyze, and respond to cybersecurity incidents", "To handle human resources functions"],
    correctAnswers: "To continuously monitor, detect, analyze, and respond to cybersecurity incidents",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A SOC is a centralized unit within an organization that deals with security issues on an organizational and technical level. It focuses on monitoring, detecting, analyzing, and responding to cybersecurity incidents."
  },
  {
    id: 516,
    question: "Which type of risk response involves implementing controls to reduce the likelihood or impact of a risk?",
    options: ["Risk acceptance", "Risk avoidance", "Risk mitigation", "Risk transfer"],
    correctAnswers: "Risk mitigation",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Risk mitigation involves taking steps to reduce the probability or impact of a risk event."
  },
  {
    id: 517,
    question: "What is the purpose of an 'Acceptable Use Policy' (AUP)?",
    options: ["To define how IT equipment should be purchased", "To outline the proper and improper ways employees can use organizational IT resources", "To specify software development guidelines", "To manage customer data"],
    correctAnswers: "To outline the proper and improper ways employees can use organizational IT resources",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An AUP is a document that outlines the rules and guidelines for how employees or users are permitted to use an organization's IT systems, networks, and resources."
  },
  {
    id: 518,
    question: "Which framework provides a common language for describing cybersecurity activities and outcomes, often used for risk management?",
    options: ["ITIL", "COBIT", "NIST Cybersecurity Framework (CSF)", "ISO 9001"],
    correctAnswers: "NIST Cybersecurity Framework (CSF)",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "The NIST CSF provides a flexible and voluntary framework to help organizations manage and reduce cybersecurity risks, built around five core functions: Identify, Protect, Detect, Respond, and Recover."
  },
  {
    id: 519,
    question: "What is 'due care' in the context of cybersecurity?",
    options: ["Taking every possible measure to eliminate all risks", "Acting responsibly and prudently to protect information assets", "Ignoring security risks until an incident occurs", "Delegating all security responsibilities to a third party"],
    correctAnswers: "Acting responsibly and prudently to protect information assets",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "Due care refers to the level of care that a reasonable and prudent person would exercise in a given situation. In cybersecurity, it means taking reasonable steps to protect information assets."
  },
  {
    id: 520,
    question: "Which of the following is an example of 'risk transfer'?",
    options: ["Implementing a firewall", "Purchasing cybersecurity insurance", "Avoiding a risky business activity", "Accepting the potential loss from a risk"],
    correctAnswers: "Purchasing cybersecurity insurance",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Risk transfer involves shifting the financial burden or responsibility of a risk to another party, often through insurance or outsourcing."
  },
  {
    id: 121,
    question: "What is the primary characteristic of a 'polymorphic virus'?",
    options: ["It spreads through email attachments", "It changes its code to avoid detection by antivirus software", "It encrypts user files for ransom", "It creates a backdoor in the system"],
    correctAnswers: "It changes its code to avoid detection by antivirus software",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "A polymorphic virus is a type of malware that constantly changes its identifiable code (signature) to evade detection by signature-based antivirus programs."
  },
  {
    id: 122,
    question: "Which attack exploits vulnerabilities in web applications by injecting malicious scripts into web pages viewed by other users?",
    options: ["SQL Injection", "Cross-Site Scripting (XSS)", "Buffer Overflow", "Denial of Service"],
    correctAnswers: "Cross-Site Scripting (XSS)",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Medium",
    explanation: "XSS attacks occur when an attacker injects malicious client-side scripts into web pages viewed by other users. This allows attackers to bypass access controls and impersonate users."
  },
  {
    id: 123,
    question: "What is 'smishing'?",
    options: ["Phishing conducted via email", "Phishing conducted via voice calls", "Phishing conducted via SMS text messages", "Phishing targeting high-profile individuals"],
    correctAnswers: "Phishing conducted via SMS text messages",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Smishing is a form of phishing that uses text messages (SMS) to trick victims into revealing personal information or clicking malicious links."
  },
  {
    id: 124,
    question: "Which vulnerability allows an attacker to execute arbitrary commands on a database server?",
    options: ["Cross-Site Request Forgery (CSRF)", "SQL Injection", "Directory Traversal", "XML External Entity (XXE)"],
    correctAnswers: "SQL Injection",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Hard",
    explanation: "SQL injection is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g., to dump database contents to the attacker)."
  },
  {
    id: 125,
    question: "What is the term for an attacker physically following an authorized person into a restricted area?",
    options: ["Impersonation", "Shoulder surfing", "Tailgating", "Dumpster diving"],
    correctAnswers: "Tailgating",
    domain: "1.0 Attacks, Threats, and Vulnerabilities",
    difficulty: "Easy",
    explanation: "Tailgating (or piggybacking) is a social engineering technique where an unauthorized person follows an authorized person into a restricted area."
  },
  {
    id: 221,
    question: "Which architectural concept focuses on designing systems to be resilient to failures and attacks?",
    options: ["Scalability", "Availability", "Resilience", "Performance"],
    correctAnswers: "Resilience",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "Resilience in system design refers to the ability of a system to recover from failures and maintain functionality even when components fail or are under attack."
  },
  {
    id: 222,
    question: "What is the primary benefit of using a 'security baseline'?",
    options: ["To detect all zero-day exploits", "To establish a minimum level of security for systems and applications", "To encrypt all data at rest", "To automate incident response"],
    correctAnswers: "To establish a minimum level of security for systems and applications",
    domain: "2.0 Architecture and Design",
    difficulty: "Easy",
    explanation: "A security baseline is a documented set of security configurations and practices that are considered the minimum acceptable level of security for systems and applications."
  },
  {
    id: 223,
    question: "In cloud computing, who is typically responsible for the security 'of' the cloud (e.g., physical infrastructure, hypervisor)?",
    options: ["The customer", "The cloud service provider", "A third-party auditor", "The government"],
    correctAnswers: "The cloud service provider",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "In the shared responsibility model of cloud security, the cloud provider is responsible for the security *of* the cloud (the underlying infrastructure), while the customer is responsible for security *in* the cloud (their data, applications, configurations)."
  },
  {
    id: 224,
    question: "Which type of network device acts as an intermediary for requests from clients seeking resources from other servers, often used for content filtering and caching?",
    options: ["Router", "Switch", "Proxy server", "Load balancer"],
    correctAnswers: "Proxy server",
    domain: "2.0 Architecture and Design",
    difficulty: "Medium",
    explanation: "A proxy server acts as an intermediary for requests from clients seeking resources from other servers. It can be used for security (filtering), performance (caching), and anonymity."
  },
  {
    id: 225,
    question: "What is the purpose of 'Immutable Infrastructure' in modern architecture?",
    options: ["To prevent any changes to deployed systems, requiring new deployments for updates", "To make infrastructure highly flexible and easily changeable", "To encrypt all infrastructure components", "To reduce the number of servers needed"],
    correctAnswers: "To prevent any changes to deployed systems, requiring new deployments for updates",
    domain: "2.0 Architecture and Design",
    difficulty: "Hard",
    explanation: "Immutable infrastructure means that once a server or component is deployed, it is never modified. Any changes or updates require building and deploying a new instance, which enhances consistency and security."
  },
  {
    id: 321,
    question: "Which standard is used for securely transmitting email over the internet?",
    options: ["POP3", "IMAP", "SMTP", "S/MIME"],
    correctAnswers: "S/MIME",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "S/MIME (Secure/Multipurpose Internet Mail Extensions) provides cryptographic security services for electronic messaging, such as authentication, message integrity, non-repudiation of origin, and data confidentiality."
  },
  {
    id: 322,
    question: "What is the purpose of a 'Trusted Platform Module' (TPM)?",
    options: ["To store user passwords securely", "To provide hardware-based security functions, including cryptographic operations and secure storage of keys", "To manage network traffic", "To detect malware infections"],
    correctAnswers: "To provide hardware-based security functions, including cryptographic operations and secure storage of keys",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "A TPM is a secure cryptoprocessor that is designed to secure hardware by integrating cryptographic keys into devices. It is used for secure boot, disk encryption, and other security features."
  },
  {
    id: 323,
    question: "Which of the following describes 'Federated Identity Management'?",
    options: ["Managing identities within a single organization", "Allowing users to authenticate once and gain access to multiple independent systems or applications across different organizations", "Using multiple factors for authentication", "Centralizing all user accounts in one database"],
    correctAnswers: "Allowing users to authenticate once and gain access to multiple independent systems or applications across different organizations",
    domain: "3.0 Implementation",
    difficulty: "Hard",
    explanation: "Federated identity management allows a user to log in once to a trusted identity provider and then access multiple service providers without re-authenticating, even across different organizations."
  },
  {
    id: 324,
    question: "What is the primary function of a 'Web Application Firewall' (WAF)?",
    options: ["To protect against network-level attacks", "To protect web applications from common web-based attacks like SQL injection and XSS", "To encrypt all web traffic", "To manage web server configurations"],
    correctAnswers: "To protect web applications from common web-based attacks like SQL injection and XSS",
    domain: "3.0 Implementation",
    difficulty: "Medium",
    explanation: "A WAF is a specific type of firewall that monitors, filters, or blocks HTTP traffic to and from a web application. It protects web applications from attacks like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF)."
  },
  {
    id: 325,
    question: "Which secure protocol is used for directory services authentication and authorization?",
    options: ["FTP", "LDAP", "Kerberos", "DNS"],
    correctAnswers: "LDAP",
    domain: "3.0 Implementation",
    difficulty: "Easy",
    explanation: "LDAP (Lightweight Directory Access Protocol) is an application protocol for accessing and maintaining distributed directory information services. It's commonly used for authentication and authorization against directories like Active Directory."
  },
  {
    id: 421,
    question: "What is 'e-discovery' in the context of digital forensics?",
    options: ["A tool for finding new vulnerabilities", "The process of identifying, collecting, and producing electronically stored information (ESI) for legal purposes", "A method for encrypting data", "A technique for recovering deleted files"],
    correctAnswers: "The process of identifying, collecting, and producing electronically stored information (ESI) for legal purposes",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "E-discovery refers to the process of identifying, preserving, collecting, processing, reviewing, and producing electronically stored information (ESI) that is relevant to a legal case or investigation."
  },
  {
    id: 422,
    question: "Which type of incident response team focuses on proactive hunting for threats within a network?",
    options: ["Help Desk", "Security Operations Center (SOC)", "Threat Hunting Team", "Disaster Recovery Team"],
    correctAnswers: "Threat Hunting Team",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "A threat hunting team actively and iteratively searches for unknown or ongoing threats that have evaded existing security solutions."
  },
  {
    id: 423,
    question: "What is the purpose of 'system hardening'?",
    options: ["To make systems physically stronger", "To reduce a system's attack surface by configuring it securely, removing unnecessary services, and applying patches", "To increase system performance", "To install new software"],
    correctAnswers: "To reduce a system's attack surface by configuring it securely, removing unnecessary services, and applying patches",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Easy",
    explanation: "System hardening involves configuring a system to reduce its attack surface and improve its security posture by disabling unnecessary services, closing unused ports, and applying security patches."
  },
  {
    id: 424,
    question: "Which logging level would typically provide the most detailed information for forensic analysis?",
    options: ["Critical", "Error", "Warning", "Debug/Verbose"],
    correctAnswers: "Debug/Verbose",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Medium",
    explanation: "Debug or verbose logging levels capture the most granular details of system operations, which is invaluable for forensic analysis to reconstruct events leading to an incident."
  },
  {
    id: 425,
    question: "What is the primary goal of a 'Business Impact Analysis' (BIA)?",
    options: ["To calculate the cost of new IT projects", "To identify critical business functions and the impact of their disruption", "To assess employee performance", "To determine market trends"],
    correctAnswers: "To identify critical business functions and the impact of their disruption",
    domain: "4.0 Operations and Incident Response",
    difficulty: "Hard",
    explanation: "A BIA identifies and evaluates the potential effects of an interruption to critical business operations as a result of a disaster, accident, or emergency."
  },
  {
    id: 521,
    question: "Which type of control is a firewall?",
    options: ["Physical", "Administrative", "Technical", "Compensating"],
    correctAnswers: "Technical",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "Technical controls are security measures that are implemented through technology, such as firewalls, intrusion detection systems, and encryption."
  },
  {
    id: 522,
    question: "What is the purpose of a 'Memorandum of Understanding' (MOU) in security?",
    options: ["To legally bind parties to a contract", "To outline an agreement between two or more parties that is not legally binding but signifies a common intent", "To define technical specifications for a system", "To document a security incident"],
    correctAnswers: "To outline an agreement between two or more parties that is not legally binding but signifies a common intent",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "An MOU is a non-binding agreement between two or more parties, outlining the terms and details of an understanding, often used in security to define cooperation or shared responsibilities."
  },
  {
    id: 523,
    question: "Which of the following is a key component of a 'security policy framework'?",
    options: ["Only technical controls", "A hierarchical structure of policies, standards, guidelines, and procedures", "A list of all employees and their roles", "A detailed network diagram"],
    correctAnswers: "A hierarchical structure of policies, standards, guidelines, and procedures",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Hard",
    explanation: "A security policy framework provides a structured approach to managing information security, typically including policies (high-level), standards (mandatory rules), guidelines (recommendations), and procedures (step-by-step instructions)."
  },
  {
    id: 524,
    question: "What is the primary difference between 'threat' and 'vulnerability'?",
    options: ["They are interchangeable terms", "A threat is a weakness, a vulnerability is an action", "A threat is a potential danger, a vulnerability is a weakness that can be exploited", "A threat is internal, a vulnerability is external"],
    correctAnswers: "A threat is a potential danger, a vulnerability is a weakness that can be exploited",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Easy",
    explanation: "A threat is a potential cause of an unwanted incident that may result in harm to a system or organization. A vulnerability is a weakness in a system or design that can be exploited by a threat."
  },
  {
    id: 525,
    question: "Which of the following would be considered an 'administrative control'?",
    options: ["Firewall rules", "Encryption", "Security awareness training", "Intrusion detection system"],
    correctAnswers: "Security awareness training",
    domain: "5.0 Governance, Risk, and Compliance",
    difficulty: "Medium",
    explanation: "Administrative controls (or procedural controls) are policies, procedures, and guidelines implemented to manage and enforce security, such as security awareness training, hiring practices, and incident response plans."
  },
];

export default questionsPool;
