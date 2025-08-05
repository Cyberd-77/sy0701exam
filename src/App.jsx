import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, ChevronUp, CheckCircle2, XCircle, SkipForward, ArrowLeft, ArrowRight, Flag, RefreshCw, Play, Pause, ExternalLink
} from 'lucide-react';
// Removed: import { useMediaQuery } from 'react-responsive';

// Tailwind CSS is assumed to be configured in a modern React project.
// The icons are from lucide-react. You can install it with:
// npm install lucide-react

// Custom hook to detect mobile view, replacing react-responsive
const useIsMobile = (maxWidth) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return isMobile;
};


const questionsPool = [
  // --- Domain 1.0: General Security Concepts ---
  {
    id: 'q1-1',
    domain: '1.0 General Security Concepts',
    question: "What is the primary purpose of a compensating control?",
    options: ["To prevent an incident from occurring.", "To recover from an incident.", "To provide an alternative to a primary control that is not feasible.", "To deter potential attackers."],
    correctAnswers: ["To provide an alternative to a primary control that is not feasible."],
    difficulty: "Easy",
    hint: "Think about a situation where you can't implement the ideal security measure. What do you do instead?"
  },
  {
    id: 'q1-2',
    domain: '1.0 General Security Concepts',
    question: "Which of the following describes the 'Integrity' principle of the CIA triad? Relevance to SY0-701: Understanding core security principles.",
    options: ["Ensuring data is accessible to authorized users when needed.", "Ensuring data is not altered or destroyed in an unauthorized manner.", "Ensuring data is not disclosed to unauthorized individuals.", "Ensuring the origin of the data is authentic."],
    correctAnswers: ["Ensuring data is not altered or destroyed in an unauthorized manner."],
    difficulty: "Easy",
    hint: "Integrity is about maintaining the accuracy and consistency of data."
  },
  {
    id: 'q1-3',
    domain: '1.0 General Security Concepts',
    question: "What is the purpose of a mantrap in physical security? Relevance to SY0-701: Physical security controls.",
    options: ["To provide a single entry and exit point.", "To provide a secure waiting area for visitors.", "To create a buffer zone with two sets of interlocking doors.", "To detect unauthorized access attempts."],
    correctAnswers: ["To create a buffer zone with two sets of interlocking doors."],
    difficulty: "Medium",
    hint: "A mantrap is designed to control access to a secure area by permitting only one person at a time."
  },
  {
    id: 'q1-4',
    domain: '1.0 General Security Concepts',
    question: "Which type of security control uses physical barriers, such as fences or locks, to prevent unauthorized access? Relevance to SY0-701: Types of security controls.",
    options: ["Administrative", "Technical", "Compensating", "Physical"],
    correctAnswers: ["Physical"],
    difficulty: "Easy",
    hint: "Physical controls are tangible items that you can see and touch."
  },
  {
    id: 'q1-5',
    domain: '1.0 General Security Concepts',
    question: "A security analyst is investigating an incident and needs to know who accessed a particular file. Which security principle is being addressed? Relevance to SY0-701: Accountability and non-repudiation.",
    options: ["Confidentiality", "Integrity", "Availability", "Accountability"],
    correctAnswers: ["Accountability"],
    difficulty: "Medium",
    hint: "Accountability ensures that actions can be traced back to an individual."
  },
  {
    id: 'q1-6',
    domain: '1.0 General Security Concepts',
    question: "What is the key characteristic of a zero-trust network model? Relevance to SY0-701: Modern security models.",
    options: ["All traffic from inside the network is trusted by default.", "Trust is granted to all authenticated users.", "No user, device, or application is trusted by default, regardless of its location.", "Access is granted based on the user's role."],
    correctAnswers: ["No user, device, or application is trusted by default, regardless of its location."],
    difficulty: "Medium",
    hint: "The core idea is 'never trust, always verify'."
  },
  {
    id: 'q1-7',
    domain: '1.0 General Security Concepts',
    question: "Which of the following is a key component of a defense-in-depth strategy? Relevance to SY0-701: Layered security.",
    options: ["Implementing a single, strong firewall at the network perimeter.", "Relying on a single security tool for protection.", "Using multiple, overlapping security controls.", "Assuming that the network is completely secure."],
    correctAnswers: ["Using multiple, overlapping security controls."],
    difficulty: "Easy",
    hint: "Defense-in-depth is about layering security."
  },
  {
    id: 'q1-8',
    domain: '1.0 General Security Concepts',
    question: "What is the purpose of a Memorandum of Understanding (MOU)? Relevance to SY0-701: Inter-organizational agreements.",
    options: ["A legally binding contract between two parties.", "A document outlining a formal agreement between two organizations.", "A detailed technical specification for a system.", "A document that authorizes a specific project."],
    correctAnswers: ["A document outlining a formal agreement between two organizations."],
    difficulty: "Medium",
    hint: "An MOU is a non-legally binding agreement that expresses mutual intent."
  },
  {
    id: 'q1-9',
    domain: '1.0 General Security Concepts',
    question: "Which security principle focuses on ensuring that data and systems are available to authorized users when needed? Relevance to SY0-701: CIA triad.",
    options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
    correctAnswers: ["Availability"],
    difficulty: "Easy",
    hint: "Think about system uptime and accessibility."
  },
  {
    id: 'q1-10',
    domain: '1.0 General Security Concepts',
    question: "What is the primary objective of a Business Impact Analysis (BIA)? Relevance to SY0-701: Business continuity planning.",
    options: ["To identify and assess all potential threats to an organization.", "To determine the financial and operational impact of a business disruption.", "To create a detailed disaster recovery plan.", "To establish the security requirements for a new system."],
    correctAnswers: ["To determine the financial and operational impact of a business disruption."],
    difficulty: "Hard",
    hint: "A BIA helps prioritize business functions based on their criticality."
  },
  {
    id: 'q1-11',
    domain: '1.0 General Security Concepts',
    question: "What is the purpose of a Service Level Agreement (SLA)? Relevance to SY0-701: Vendor management and agreements.",
    options: ["To define the roles and responsibilities of the parties in a partnership.", "To outline the technical specifications of a service.", "To specify the quality, availability, and responsibilities of a service.", "To provide a detailed report on security incidents."],
    correctAnswers: ["To specify the quality, availability, and responsibilities of a service."],
    difficulty: "Medium",
    hint: "An SLA is a contract between a service provider and a customer."
  },
  {
    id: 'q1-12',
    domain: '1.0 General Security Concepts',
    question: "Which of the following is a physical control designed to protect against environmental hazards? Relevance to SY0-701: Environmental controls.",
    options: ["Firewall", "HVAC system", "Access badge", "Security guard"],
    correctAnswers: ["HVAC system"],
    difficulty: "Medium",
    hint: "An HVAC system controls temperature and humidity, which can be critical for server rooms."
  },
  {
    id: 'q1-13',
    domain: '1.0 General Security Concepts',
    question: "What is the main objective of a vulnerability scan? Relevance to SY0-701: Vulnerability management.",
    options: ["To actively exploit known vulnerabilities.", "To identify potential weaknesses in a system.", "To passively monitor network traffic for threats.", "To simulate a real-world attack."],
    correctAnswers: ["To identify potential weaknesses in a system."],
    difficulty: "Easy",
    hint: "A vulnerability scan is a passive assessment, not an active attack."
  },
  {
    id: 'q1-14',
    domain: '1.0 General Security Concepts',
    question: "What is the primary goal of the Principle of Least Privilege? Relevance to SY0-701: Access control principles.",
    options: ["To give users maximum access to resources.", "To assign users the minimum level of access required to perform their job duties.", "To limit the number of users on a network.", "To ensure all users have the same level of access."],
    correctAnswers: ["To assign users the minimum level of access required to perform their job duties."],
    difficulty: "Easy",
    hint: "Think about giving someone only what they absolutely need to do their job."
  },
  {
    id: 'q1-15',
    domain: '1.0 General Security Concepts',
    question: "Which of the following is a technical control? Relevance to SY0-701: Types of security controls.",
    options: ["Security policy", "Security awareness training", "Firewall", "Physical lock"],
    correctAnswers: ["Firewall"],
    difficulty: "Easy",
    hint: "Technical controls use technology to protect systems and data."
  },
  {
    id: 'q1-16',
    domain: '1.0 General Security Concepts',
    question: "What is the primary purpose of a data classification policy? Relevance to SY0-701: Data handling and privacy.",
    options: ["To define who can access specific data.", "To categorize data based on its sensitivity.", "To encrypt all data on a network.", "To archive old data."],
    correctAnswers: ["To categorize data based on its sensitivity."],
    difficulty: "Medium",
    hint: "Data classification helps an organization determine the appropriate security controls for different types of data."
  },
  {
    id: 'q1-17',
    domain: '1.0 General Security Concepts',
    question: "Which security principle is most concerned with proving that a user did, in fact, perform a specific action? Relevance to SY0-701: Non-repudiation.",
    options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
    correctAnswers: ["Non-repudiation"],
    difficulty: "Medium",
    hint: "Non-repudiation prevents a person from denying they performed an action."
  },
  {
    id: 'q1-18',
    domain: '1.0 General Security Concepts',
    question: "What is a single point of failure (SPOF)? Relevance to SY0-701: Resiliency and redundancy.",
    options: ["A device that has no redundancies and can cause an entire system to fail if it goes down.", "A network device that is protected by multiple firewalls.", "A server that can handle multiple tasks.", "A security control that is easily bypassed."],
    correctAnswers: ["A device that has no redundancies and can cause an entire system to fail if it goes down."],
    difficulty: "Medium",
    hint: "An SPOF is a part of a system that, if it fails, will stop the entire system from working."
  },
  {
    id: 'q1-19',
    domain: '1.0 General Security Concepts',
    question: "What is the goal of an `Acceptable Use Policy` (AUP)? Relevance to SY0-701: Organizational policies.",
    options: ["To define the specific hardware and software used in an organization.", "To outline what employees can and cannot do with company resources.", "To detail the steps for a business continuity plan.", "To document all security incidents."],
    correctAnswers: ["To outline what employees can and cannot do with company resources."],
    difficulty: "Easy",
    hint: "An AUP sets the rules for how to use an organization's assets."
  },
  {
    id: 'q1-20',
    domain: '1.0 General Security Concepts',
    question: "Which of the following is an example of an administrative control? Relevance to SY0-701: Types of security controls.",
    options: ["Firewall rules", "Intrusion Detection System (IDS)", "Physical lock", "Security policy"],
    correctAnswers: ["Security policy"],
    difficulty: "Easy",
    hint: "Administrative controls are policies, procedures, and guidelines."
  },
  {
    id: 'q1-21',
    domain: '1.0 General Security Concepts',
    question: "What is the purpose of a `Disaster Recovery Plan` (DRP)? Relevance to SY0-701: Business continuity and disaster recovery.",
    options: ["To recover from a natural or man-made disaster.", "To ensure business operations continue during a disruption.", "To identify critical business functions.", "To mitigate the impact of a security incident."],
    correctAnswers: ["To recover from a natural or man-made disaster."],
    difficulty: "Medium",
    hint: "A DRP focuses on restoring systems and data after a major event."
  },
  // --- Domain 2.0: Threats, Vulnerabilities, and Mitigations ---
  {
    id: 'q2-1',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is a 'Zero-day' exploit? Relevance to SY0-701: Advanced persistent threats.",
    options: ["A vulnerability that has been publicly disclosed and patched.", "A type of ransomware attack.", "A previously unknown software vulnerability that is being actively exploited.", "An attack that occurs on the first day a new system is installed."],
    correctAnswers: ["A previously unknown software vulnerability that is being actively exploited."],
    difficulty: "Medium",
    hint: "The name refers to the fact that developers have had 'zero days' to patch it."
  },
  {
    id: 'q2-2',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following describes a 'Phishing' attack? Relevance to SY0-701: Social engineering attacks.",
    options: ["An attack that targets specific high-value individuals.", "An attack that uses malware to lock a user's files.", "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in an electronic communication.", "An attack that floods a server with traffic."],
    correctAnswers: ["A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in an electronic communication."],
    difficulty: "Easy",
    hint: "Phishing uses deception to trick a user into revealing information."
  },
  {
    id: 'q2-3',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the primary goal of a 'Denial-of-Service' (DoS) attack? Relevance to SY0-701: Availability attacks.",
    options: ["To steal sensitive data from a server.", "To gain unauthorized access to a network.", "To make a system or network unavailable to its intended users.", "To plant malware on a user's computer."],
    correctAnswers: ["To make a system or network unavailable to its intended users."],
    difficulty: "Easy",
    hint: "DoS attacks prevent legitimate users from accessing a service."
  },
  {
    id: 'q2-4',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which type of malware can replicate itself and spread to other systems without user intervention? Relevance to SY0-701: Malware types.",
    options: ["Trojan horse", "Adware", "Worm", "Ransomware"],
    correctAnswers: ["Worm"],
    difficulty: "Medium",
    hint: "Worms are self-replicating and often spread through network vulnerabilities."
  },
  {
    id: 'q2-5',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "An attacker places a wireless access point in a public place with the same SSID as a legitimate network to intercept traffic. What type of attack is this? Relevance to SY0-701: Wireless attacks.",
    options: ["Evil twin", "Bluejacking", "Bluesnarfing", "Man-in-the-middle"],
    correctAnswers: ["Evil twin"],
    difficulty: "Hard",
    hint: "An evil twin is a rogue access point that mimics a legitimate one."
  },
  {
    id: 'q2-6',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is a common mitigation technique for SQL injection attacks? Relevance to SY0-701: Web application attacks.",
    options: ["Using parameterized queries.", "Disabling all SQL queries.", "Implementing a strong password policy.", "Using a firewall."],
    correctAnswers: ["Using parameterized queries."],
    difficulty: "Medium",
    hint: "Parameterized queries separate the SQL code from the user input."
  },
  {
    id: 'q2-7',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is 'Tailgating' in the context of physical security? Relevance to SY0-701: Social engineering.",
    options: ["Following a vehicle too closely.", "Following an authorized person into a restricted area without a badge.", "Breaking a security lock.", "Social engineering a security guard."],
    correctAnswers: ["Following an authorized person into a restricted area without a badge."],
    difficulty: "Easy",
    hint: "Tailgating is a form of piggybacking on someone else's access."
  },
  {
    id: 'q2-8',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is a type of social engineering attack? Relevance to SY0-701: Social engineering.",
    options: ["Buffer overflow", "Cross-site scripting (XSS)", "Phishing", "Man-in-the-middle"],
    correctAnswers: ["Phishing"],
    difficulty: "Easy",
    hint: "Social engineering relies on human psychology and deception."
  },
  {
    id: 'q2-9',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the goal of a 'Dictionary' attack? Relevance to SY0-701: Password attacks.",
    options: ["To use a pre-computed table to crack passwords.", "To try every possible character combination to guess a password.", "To use a list of common words and phrases to guess a password.", "To guess a user's password based on personal information."],
    correctAnswers: ["To use a list of common words and phrases to guess a password."],
    difficulty: "Medium",
    hint: "A dictionary attack uses a list of common words, names, and phrases."
  },
  {
    id: 'q2-10',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is a 'Transitive Trust' vulnerability? Relevance to SY0-701: Trust relationships.",
    options: ["A trust relationship that extends to other parties without explicit authorization.", "A vulnerability in a DNS server.", "A type of man-in-the-middle attack.", "A vulnerability in a public key infrastructure."],
    correctAnswers: ["A trust relationship that extends to other parties without explicit authorization."],
    difficulty: "Hard",
    hint: "Transitive trust is when A trusts B, and B trusts C, so A implicitly trusts C."
  },
  {
    id: 'q2-11',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is a form of malware that requires a user to manually execute it? Relevance to SY0-701: Malware types.",
    options: ["Worm", "Trojan horse", "Adware", "Rootkit"],
    correctAnswers: ["Trojan horse"],
    difficulty: "Medium",
    hint: "A Trojan horse disguises itself as a legitimate program."
  },
  {
    id: 'q2-12',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "A user receives an email from their CEO asking for an urgent wire transfer to a new account. The CEO's email address is slightly misspelled. What type of attack is this? Relevance to SY0-701: Social engineering.",
    options: ["Whaling", "Spear phishing", "Smishing", "Vishing"],
    correctAnswers: ["Whaling"],
    difficulty: "Hard",
    hint: "Whaling is a spear phishing attack that targets high-profile individuals."
  },
  {
    id: 'q2-13',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is a 'Buffer Overflow' attack? Relevance to SY0-701: Application attacks.",
    options: ["An attack that floods a server with more traffic than it can handle.", "An attack that uses a buffer to store malicious code.", "An attack where an attacker sends more data to a program than its buffer can hold, overwriting adjacent memory.", "An attack that takes advantage of a buffer in a wireless network."],
    correctAnswers: ["An attack where an attacker sends more data to a program than its buffer can hold, overwriting adjacent memory."],
    difficulty: "Hard",
    hint: "Buffer overflow exploits a programming error."
  },
  {
    id: 'q2-14',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the primary difference between a virus and a worm? Relevance to SY0-701: Malware types.",
    options: ["A virus requires a host program to spread, while a worm can self-replicate.", "A worm requires a host program to spread, while a virus can self-replicate.", "A virus is malicious, while a worm is not.", "They are the same thing."],
    correctAnswers: ["A virus requires a host program to spread, while a worm can self-replicate."],
    difficulty: "Medium",
    hint: "Viruses attach themselves to files, while worms are standalone programs."
  },
  {
    id: 'q2-15',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is a threat actor motivated by ideological or political goals? Relevance to SY0-701: Threat actors.",
    options: ["Insider threat", "Script kiddie", "Hacktivist", "Nation-state actor"],
    correctAnswers: ["Hacktivist"],
    difficulty: "Medium",
    hint: "Hacktivists use hacking to promote a cause."
  },
  {
    id: 'q2-16',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is a 'Man-in-the-Middle' (MitM) attack? Relevance to SY0-701: Network attacks.",
    options: ["An attack that takes advantage of a buffer overflow.", "An attack where an attacker secretly relays and alters the communication between two parties who believe they are directly communicating.", "An attack that uses a compromised email server to send phishing emails.", "An attack that floods a server with traffic."],
    correctAnswers: ["An attack where an attacker secretly relays and alters the communication between two parties who believe they are directly communicating."],
    difficulty: "Medium",
    hint: "The attacker intercepts and controls the communication channel."
  },
  {
    id: 'q2-17',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the main purpose of a 'Honeypot'? Relevance to SY0-701: Security tools and techniques.",
    options: ["To trick attackers into attacking a decoy system, diverting them from real systems and allowing for the study of their techniques.", "To provide a secure environment for testing new software.", "To provide a secure storage area for sensitive data.", "To scan for vulnerabilities in a network."],
    correctAnswers: ["To trick attackers into attacking a decoy system, diverting them from real systems and allowing for the study of their techniques."],
    difficulty: "Medium",
    hint: "A honeypot is a trap."
  },
  {
    id: 'q2-18',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is a common attack vector for 'Cross-site Scripting' (XSS)? Relevance to SY0-701: Web application attacks.",
    options: ["Sending malicious SQL queries to a database.", "Injecting malicious scripts into a trusted website.", "Flooding a server with a large amount of traffic.", "Guessing a user's password."],
    correctAnswers: ["Injecting malicious scripts into a trusted website."],
    difficulty: "Hard",
    hint: "XSS attacks involve a user's browser executing malicious code from a trusted site."
  },
  {
    id: 'q2-19',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is 'Bluesnarfing'? Relevance to SY0-701: Wireless attacks.",
    options: ["An attack where an attacker sends spam messages to a Bluetooth device.", "An attack where an attacker gains unauthorized access to a Bluetooth-enabled device to steal data.", "An attack that floods a Bluetooth device with connection requests.", "An attack that uses Bluetooth to launch a DoS attack."],
    correctAnswers: ["An attack where an attacker gains unauthorized access to a Bluetooth-enabled device to steal data."],
    difficulty: "Medium",
    hint: "Bluesnarfing is about data theft over Bluetooth."
  },
  {
    id: 'q2-20',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is an example of an 'insider threat'? Relevance to SY0-701: Threat actors.",
    options: ["An attacker from an external network.", "A disgruntled employee who intentionally deletes sensitive data.", "A hacker who gains access to a network through a phishing email.", "A nation-state actor who exploits a zero-day vulnerability."],
    correctAnswers: ["A disgruntled employee who intentionally deletes sensitive data."],
    difficulty: "Easy",
    hint: "An insider threat comes from within the organization."
  },
  {
    id: 'q2-21',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the primary purpose of a 'pen testing' or 'penetration test'? Relevance to SY0-701: Penetration testing.",
    options: ["To identify vulnerabilities in a system.", "To simulate an attack against a system to find exploitable vulnerabilities.", "To passively monitor a network for threats.", "To create a detailed security policy."],
    correctAnswers: ["To simulate an attack against a system to find exploitable vulnerabilities."],
    difficulty: "Easy",
    hint: "Penetration testing is an active, authorized attack."
  },
  {
    id: 'q2-22',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the purpose of a `vulnerability assessment`? Relevance to SY0-701: Vulnerability management.",
    options: ["To actively exploit vulnerabilities.", "To identify, quantify, and prioritize the vulnerabilities in a system.", "To simulate a real-world attack.", "To recover from a security incident."],
    correctAnswers: ["To identify, quantify, and prioritize the vulnerabilities in a system."],
    difficulty: "Medium",
    hint: "Vulnerability assessments are proactive and help you prioritize your security efforts."
  },
  // --- Domain 3.0: Security Architecture ---
  {
    id: 'q3-1',
    domain: '3.0 Security Architecture',
    question: "What is the main function of a `firewall`? Relevance to SY0-701: Network security devices.",
    options: ["To encrypt all network traffic.", "To monitor and control incoming and outgoing network traffic based on a set of security rules.", "To prevent a denial-of-service attack.", "To detect and prevent malware."],
    correctAnswers: ["To monitor and control incoming and outgoing network traffic based on a set of security rules."],
    difficulty: "Easy",
    hint: "A firewall acts as a barrier between a trusted and an untrusted network."
  },
  {
    id: 'q3-2',
    domain: '3.0 Security Architecture',
    question: "Which type of firewall inspects the entire communication session, including the context of the data? Relevance to SY0-701: Firewall types.",
    options: ["Packet-filtering firewall", "Stateless firewall", "Stateful firewall", "Next-generation firewall"],
    correctAnswers: ["Stateful firewall"],
    difficulty: "Medium",
    hint: "A stateful firewall keeps track of the 'state' of the network connection."
  },
  {
    id: 'q3-3',
    domain: '3.0 Security Architecture',
    question: "What is a `Demilitarized Zone` (DMZ)? Relevance to SY0-701: Network segmentation.",
    options: ["A network segment for internal servers.", "A secure area for storing sensitive data.", "A subnetwork that contains an organization's exposed, internet-facing services.", "A virtual private network (VPN)."],
    correctAnswers: ["A subnetwork that contains an organization's exposed, internet-facing services."],
    difficulty: "Medium",
    hint: "The DMZ is a buffer zone between an internal network and the internet."
  },
  {
    id: 'q3-4',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a `Virtual Private Network` (VPN)? Relevance to SY0-701: Secure communication.",
    options: ["To create a private network within an organization.", "To encrypt all traffic on a local network.", "To provide a secure, encrypted tunnel over an unsecure network.", "To monitor network traffic for malicious activity."],
    correctAnswers: ["To provide a secure, encrypted tunnel over an unsecure network."],
    difficulty: "Easy",
    hint: "A VPN is used to securely connect to a private network over the internet."
  },
  {
    id: 'q3-5',
    domain: '3.0 Security Architecture',
    question: "What is the difference between an `Intrusion Detection System` (IDS) and an `Intrusion Prevention System` (IPS)? Relevance to SY0-701: Security monitoring.",
    options: ["An IDS only detects threats, while an IPS can also block them.", "An IDS and IPS are the same thing.", "An IPS only detects threats, while an IDS can also block them.", "An IDS is a hardware device, while an IPS is software."],
    correctAnswers: ["An IDS only detects threats, while an IPS can also block them."],
    difficulty: "Easy",
    hint: "Detection vs. Prevention."
  },
  {
    id: 'q3-6',
    domain: '3.0 Security Architecture',
    question: "Which of the following is a secure protocol for remote administration? Relevance to SY0-701: Secure protocols.",
    options: ["Telnet", "SSH", "FTP", "HTTP"],
    correctAnswers: ["SSH"],
    difficulty: "Easy",
    hint: "SSH stands for Secure Shell and provides an encrypted connection."
  },
  {
    id: 'q3-7',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of `load balancing`? Relevance to SY0-701: High availability and performance.",
    options: ["To balance the load on a server.", "To distribute network traffic across multiple servers to improve performance and reliability.", "To balance the load on a database.", "To distribute network traffic to a single server."],
    correctAnswers: ["To distribute network traffic across multiple servers to improve performance and reliability."],
    difficulty: "Medium",
    hint: "Load balancing prevents a single server from being overwhelmed."
  },
  {
    id: 'q3-8',
    domain: '3.0 Security Architecture',
    question: "Which of the following describes a `host-based firewall`? Relevance to SY0-701: Firewall types.",
    options: ["A firewall that protects an entire network.", "A firewall that is implemented as software on a single computer.", "A firewall that is implemented as a physical device.", "A firewall that protects a web server."],
    correctAnswers: ["A firewall that is implemented as software on a single computer."],
    difficulty: "Easy",
    hint: "A host-based firewall protects the 'host' computer."
  },
  {
    id: 'q3-9',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a `Security Information and Event Management` (SIEM) system? Relevance to SY0-701: Security monitoring and analysis.",
    options: ["To monitor network traffic for threats.", "To manage all security policies and procedures.", "To centralize the collection and analysis of security event logs.", "To detect and prevent intrusions."],
    correctAnswers: ["To centralize the collection and analysis of security event logs."],
    difficulty: "Medium",
    hint: "SIEM systems help organizations analyze a large volume of security data."
  },
  {
    id: 'q3-10',
    domain: '3.0 Security Architecture',
    question: "What is `network segmentation`? Relevance to SY0-701: Network design.",
    options: ["The process of dividing a network into smaller subnetworks.", "The process of connecting multiple networks together.", "The process of encrypting all network traffic.", "The process of monitoring a network for threats."],
    correctAnswers: ["The process of dividing a network into smaller subnetworks."],
    difficulty: "Medium",
    hint: "Segmentation improves security by limiting the scope of a potential attack."
  },
  {
    id: 'q3-11',
    domain: '3.0 Security Architecture',
    question: "Which of the following is a benefit of using a `hardware security module` (HSM)? Relevance to SY0-701: Cryptographic hardware.",
    options: ["It provides a secure way to store and manage cryptographic keys.", "It encrypts all data on a hard drive.", "It protects a network from malware.", "It provides a secure way to store passwords."],
    correctAnswers: ["It provides a secure way to store and manage cryptographic keys."],
    difficulty: "Hard",
    hint: "An HSM is a dedicated physical device for cryptographic operations."
  },
  {
    id: 'q3-12',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a `Unified Threat Management` (UTM) device? Relevance to SY0-701: Network security devices.",
    options: ["To provide a single management interface for a security team.", "To combine multiple security functions into a single appliance.", "To manage multiple firewalls.", "To manage a large number of user accounts."],
    correctAnswers: ["To combine multiple security functions into a single appliance."],
    difficulty: "Medium",
    hint: "A UTM typically includes a firewall, IDS/IPS, antivirus, and other features."
  },
  {
    id: 'q3-13',
    domain: '3.0 Security Architecture',
    question: "Which of the following is an example of an `endpoint security` solution? Relevance to SY0-701: Endpoint protection.",
    options: ["Firewall", "Router", "Antivirus software on a laptop", "IDS"],
    correctAnswers: ["Antivirus software on a laptop"],
    difficulty: "Easy",
    hint: "Endpoint security protects the end devices on a network."
  },
  {
    id: 'q3-14',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a `proxy server`? Relevance to SY0-701: Network services.",
    options: ["To act as an intermediary for requests from clients seeking resources from other servers.", "To protect a network from malware.", "To encrypt all network traffic.", "To monitor network traffic for malicious activity."],
    correctAnswers: ["To act as an intermediary for requests from clients seeking resources from other servers."],
    difficulty: "Medium",
    hint: "A proxy server acts on behalf of the client."
  },
  {
    id: 'q3-15',
    domain: '3.0 Security Architecture',
    question: "Which of the following is a benefit of using a `Security Orchestration, Automation, and Response` (SOAR) platform? Relevance to SY0-701: Security operations.",
    options: ["It provides a single management interface for a security team.", "It automates security incident response workflows.", "It centralizes the collection and analysis of security event logs.", "It detects and prevents intrusions."],
    correctAnswers: ["It automates security incident response workflows."],
    difficulty: "Hard",
    hint: "SOAR platforms help security teams respond to threats more quickly and efficiently."
  },
  {
    id: 'q3-16',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of `Data Loss Prevention` (DLP)? Relevance to SY0-701: Data security.",
    options: ["To prevent a denial-of-service attack.", "To protect a network from malware.", "To monitor and prevent unauthorized transmission of sensitive information.", "To encrypt all data on a hard drive."],
    correctAnswers: ["To monitor and prevent unauthorized transmission of sensitive information."],
    difficulty: "Medium",
    hint: "DLP solutions prevent sensitive data from leaving the organization's network."
  },
  {
    id: 'q3-17',
    domain: '3.0 Security Architecture',
    question: "Which of the following is a component of a `web application firewall` (WAF)? Relevance to SY0-701: Web security.",
    options: ["Packet-filtering rules", "Signature-based detection", "SQL injection protection", "IPsec"],
    correctAnswers: ["SQL injection protection"],
    difficulty: "Medium",
    hint: "A WAF protects web applications from common attacks like SQL injection and XSS."
  },
  {
    id: 'q3-18',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of `microsegmentation`? Relevance to SY0-701: Network design.",
    options: ["To divide a network into smaller subnetworks.", "To create fine-grained security policies for individual workloads.", "To encrypt all network traffic.", "To monitor network traffic for malicious activity."],
    correctAnswers: ["To create fine-grained security policies for individual workloads."],
    difficulty: "Hard",
    hint: "Microsegmentation takes network segmentation to a much more granular level."
  },
  {
    id: 'q3-19',
    domain: '3.0 Security Architecture',
    question: "What is `software-defined networking` (SDN)? Relevance to SY0-701: Network architecture.",
    options: ["A network architecture that decouples the network control and forwarding planes.", "A network that is entirely virtual.", "A network that uses a single physical device for all functions.", "A network that is managed by a single security policy."],
    correctAnswers: ["A network architecture that decouples the network control and forwarding planes."],
    difficulty: "Hard",
    hint: "SDN gives network administrators centralized control over network resources."
  },
  {
    id: 'q3-20',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a `hardware token` in multi-factor authentication? Relevance to SY0-701: Authentication methods.",
    options: ["To provide a user with a unique, one-time password.", "To store a user's password.", "To encrypt a user's data.", "To protect a user's computer from malware."],
    correctAnswers: ["To provide a user with a unique, one-time password."],
    difficulty: "Easy",
    hint: "A hardware token is a physical device that generates a one-time password."
  },
  // --- Domain 4.0: Identity and Access Management ---
  {
    id: 'q4-1',
    domain: '4.0 Identity and Access Management',
    question: "What is the primary purpose of `multi-factor authentication` (MFA)? Relevance to SY0-701: Authentication methods.",
    options: ["To increase the number of passwords a user must remember.", "To require a user to use at least two different authentication factors.", "To prevent a user from sharing their password.", "To encrypt a user's data."],
    correctAnswers: ["To require a user to use at least two different authentication factors."],
    difficulty: "Easy",
    hint: "MFA requires something you know, something you have, or something you are."
  },
  {
    id: 'q4-2',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following is an example of an authentication factor based on 'something you are'? Relevance to SY0-701: Biometric authentication.",
    options: ["Password", "PIN", "Fingerprint scan", "Smart card"],
    correctAnswers: ["Fingerprint scan"],
    difficulty: "Easy",
    hint: "This refers to biometric authentication."
  },
  {
    id: 'q4-3',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of a `federated identity`? Relevance to SY0-701: Identity management.",
    options: ["To provide a single identity for a user across multiple security domains.", "To manage a user's password.", "To encrypt a user's data.", "To protect a user's computer from malware."],
    correctAnswers: ["To provide a single identity for a user across multiple security domains."],
    difficulty: "Medium",
    hint: "Federated identity allows a user to log in once and access multiple services."
  },
  {
    id: 'q4-4',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following is a key component of an `identity and access management` (IAM) system? Relevance to SY0-701: IAM components.",
    options: ["Firewall", "Router", "User provisioning", "Intrusion detection system"],
    correctAnswers: ["User provisioning"],
    difficulty: "Medium",
    hint: "IAM systems manage the lifecycle of user accounts."
  },
  {
    id: 'q4-5',
    domain: '4.0 Identity and Access Management',
    question: "What is `role-based access control` (RBAC)? Relevance to SY0-701: Access control models.",
    options: ["A method of controlling access based on a user's role within an organization.", "A method of controlling access based on a user's physical location.", "A method of controlling access based on a user's individual permissions.", "A method of controlling access based on a user's department."],
    correctAnswers: ["A method of controlling access based on a user's role within an organization."],
    difficulty: "Easy",
    hint: "RBAC simplifies access control by assigning permissions to roles, not individuals."
  },
  {
    id: 'q4-6',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of `Single Sign-On` (SSO)? Relevance to SY0-701: Authentication methods.",
    options: ["To require a user to log in to multiple services.", "To allow a user to log in once and access multiple services without re-entering credentials.", "To encrypt a user's data.", "To protect a user's computer from malware."],
    correctAnswers: ["To allow a user to log in once and access multiple services without re-entering credentials."],
    difficulty: "Easy",
    hint: "SSO improves user experience and security."
  },
  {
    id: 'q4-7',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following is a type of biometric authentication? Relevance to SY0-701: Biometric authentication.",
    options: ["PIN", "Password", "Iris scan", "Smart card"],
    correctAnswers: ["Iris scan"],
    difficulty: "Easy",
    hint: "Biometrics use unique physical or behavioral characteristics."
  },
  {
    id: 'q4-8',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of an `access control list` (ACL)? Relevance to SY0-701: Access control mechanisms.",
    options: ["To list all users in an organization.", "To define which users or groups can access specific resources.", "To define the security policies for an organization.", "To list all network devices."],
    correctAnswers: ["To define which users or groups can access specific resources."],
    difficulty: "Medium",
    hint: "An ACL specifies permissions for a resource."
  },
  {
    id: 'q4-9',
    domain: '4.0 Identity and Access Management',
    question: "What is the primary benefit of using a `password manager`? Relevance to SY0-701: Password security.",
    options: ["It prevents a user from sharing their password.", "It allows a user to use strong, unique passwords for all their accounts.", "It encrypts a user's data.", "It protects a user's computer from malware."],
    correctAnswers: ["It allows a user to use strong, unique passwords for all their accounts."],
    difficulty: "Easy",
    hint: "Password managers eliminate the need to remember multiple complex passwords."
  },
  {
    id: 'q4-10',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following is a common access control model? Relevance to SY0-701: Access control models.",
    options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "All of the above"],
    correctAnswers: ["All of the above"],
    difficulty: "Medium",
    hint: "These are the three main access control models."
  },
  {
    id: 'q4-11',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of `account disablement`? Relevance to SY0-701: Account management.",
    options: ["To delete a user's account.", "To temporarily suspend a user's account.", "To permanently suspend a user's account.", "To reset a user's password."],
    correctAnswers: ["To temporarily suspend a user's account."],
    difficulty: "Medium",
    hint: "Account disablement is often used when an employee is on leave or a temporary worker's contract has ended."
  },
  {
    id: 'q4-12',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following describes the `principle of separation of duties`? Relevance to SY0-701: Security best practices.",
    options: ["A single user is responsible for all security tasks.", "No single person should have control over all parts of a sensitive process.", "All users have the same level of access to resources.", "Users are assigned roles based on their job duties."],
    correctAnswers: ["No single person should have control over all parts of a sensitive process."],
    difficulty: "Medium",
    hint: "Separation of duties prevents fraud and errors."
  },
  {
    id: 'q4-13',
    domain: '4.0 Identity and Access Management',
    question: "What is a `time-based one-time password` (TOTP)? Relevance to SY0-701: Multi-factor authentication.",
    options: ["A password that expires after a certain period of time.", "A password that can only be used once.", "A password that is generated based on a timestamp.", "A password that is sent via text message."],
    correctAnswers: ["A password that is generated based on a timestamp."],
    difficulty: "Medium",
    hint: "TOTP is a common method for two-factor authentication."
  },
  {
    id: 'q4-14',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of a `password history` policy? Relevance to SY0-701: Password policies.",
    options: ["To prevent a user from reusing old passwords.", "To store a user's password in a log file.", "To ensure a user's password is a certain length.", "To force a user to change their password every 90 days."],
    correctAnswers: ["To prevent a user from reusing old passwords."],
    difficulty: "Easy",
    hint: "A password history policy prevents users from cycling through a few common passwords."
  },
  {
    id: 'q4-15',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following is a benefit of using a `smart card` for authentication? Relevance to SY0-701: Authentication methods.",
    options: ["It is a form of biometric authentication.", "It is a form of something you know.", "It is a form of something you have.", "It is a form of something you are."],
    correctAnswers: ["It is a form of something you have."],
    difficulty: "Medium",
    hint: "A smart card is a physical token."
  },
  {
    id: 'q4-16',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of `credential management`? Relevance to SY0-701: IAM concepts.",
    options: ["To store a user's passwords.", "To manage the creation, storage, and use of user credentials.", "To encrypt a user's data.", "To protect a user's computer from malware."],
    correctAnswers: ["To manage the creation, storage, and use of user credentials."],
    difficulty: "Medium",
    hint: "Credential management is a key part of IAM."
  },
  {
    id: 'q4-17',
    domain: '4.0 Identity and Access Management',
    question: "Which of the following is a type of access control model that is based on rules or policies? Relevance to SY0-701: Access control models.",
    options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Rule-Based Access Control (RBAC)"],
    correctAnswers: ["Mandatory Access Control (MAC)"],
    difficulty: "Hard",
    hint: "MAC is often used in environments where security is the highest priority, like military or government."
  },
  {
    id: 'q4-18',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of `account review`? Relevance to SY0-701: Account management.",
    options: ["To create new user accounts.", "To ensure that user accounts have the correct level of access and are still required.", "To delete old user accounts.", "To reset user passwords."],
    correctAnswers: ["To ensure that user accounts have the correct level of access and are still required."],
    difficulty: "Medium",
    hint: "Account reviews help prevent privilege creep and ensure security policies are being followed."
  },
  {
    id: 'q4-19',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of `Password-Based Authentication` (PBA)? Relevance to SY0-701: Authentication methods.",
    options: ["To use a password to authenticate a user.", "To use a password to encrypt a user's data.", "To use a password to protect a user's computer from malware.", "To use a password to log in to a network."],
    correctAnswers: ["To use a password to authenticate a user."],
    difficulty: "Easy",
    hint: "This is the most common form of authentication."
  },
  {
    id: 'q4-20',
    domain: '4.0 Identity and Access Management',
    question: "What is the purpose of `Biometric Authentication` (BA)? Relevance to SY0-701: Authentication methods.",
    options: ["To use a physical or behavioral characteristic to authenticate a user.", "To use a password to authenticate a user.", "To use a smart card to authenticate a user.", "To use a token to authenticate a user."],
    correctAnswers: ["To use a physical or behavioral characteristic to authenticate a user."],
    difficulty: "Easy",
    hint: "Biometrics include things like fingerprints, iris scans, and voice recognition."
  },
  // --- Domain 5.0: Risk Management and Governance ---
  {
    id: 'q5-1',
    domain: '5.0 Risk Management and Governance',
    question: "Which of the following is the first step in the risk management process? Relevance to SY0-701: Risk management process.",
    options: ["Risk mitigation", "Risk assessment", "Risk acceptance", "Risk avoidance"],
    correctAnswers: ["Risk assessment"],
    difficulty: "Medium",
    hint: "You must first identify and analyze the risks before you can decide how to handle them."
  },
  {
    id: 'q5-2',
    domain: '5.0 Risk Management and Governance',
    question: "What is `threat modeling`? Relevance to SY0-701: Risk assessment techniques.",
    options: ["The process of identifying and analyzing potential threats to a system.", "The process of creating a model of a threat actor.", "The process of simulating an attack against a system.", "The process of identifying all security vulnerabilities."],
    correctAnswers: ["The process of identifying and analyzing potential threats to a system."],
    difficulty: "Hard",
    hint: "Threat modeling helps you understand where and how a system might be attacked."
  },
  {
    id: 'q5-3',
    domain: '5.0 Risk Management and Governance',
    question: "Which of the following describes a `security policy`? Relevance to SY0-701: Organizational policies.",
    options: ["A document that outlines the technical specifications for a system.", "A document that provides a detailed report on security incidents.", "A high-level statement of management's intent and expectations regarding security.", "A document that provides a detailed list of security controls."],
    correctAnswers: ["A high-level statement of management's intent and expectations regarding security."],
    difficulty: "Easy",
    hint: "A policy is a foundational document that guides an organization's security efforts."
  },
  {
    id: 'q5-4',
    domain: '5.0 Risk Management and Governance',
    question: "What is `risk acceptance`? Relevance to SY0-701: Risk responses.",
    options: ["The process of implementing a control to reduce a risk.", "The process of deciding to take no action against a risk.", "The process of transferring a risk to another party.", "The process of avoiding a risk altogether."],
    correctAnswers: ["The process of deciding to take no action against a risk."],
    difficulty: "Medium",
    hint: "Risk acceptance is a conscious decision to live with the risk."
  },
  {
    id: 'q5-5',
    domain: '5.0 Risk Management and Governance',
    question: "Which of the following is an example of `risk transference`? Relevance to SY0-701: Risk responses.",
    options: ["Implementing a firewall to reduce a risk.", "Deciding to accept a risk because the cost of mitigation is too high.", "Purchasing cyber insurance to cover the financial impact of a breach.", "Avoiding a project because the risks are too high."],
    correctAnswers: ["Purchasing cyber insurance to cover the financial impact of a breach."],
    difficulty: "Medium",
    hint: "Transference involves shifting the risk to another party."
  },
  {
    id: 'q5-6',
    domain: '5.0 Risk Management and Governance',
    question: "What is `vendor management` in the context of security? Relevance to SY0-701: Third-party risk.",
    options: ["The process of managing all vendors for an organization.", "The process of ensuring that third-party vendors meet an organization's security requirements.", "The process of creating a security policy for vendors.", "The process of managing vendor contracts."],
    correctAnswers: ["The process of ensuring that third-party vendors meet an organization's security requirements."],
    difficulty: "Medium",
    hint: "Vendor management helps mitigate the risks associated with third-party suppliers."
  },
  {
    id: 'q5-7',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of a `Privacy Impact Assessment` (PIA)? Relevance to SY0-701: Privacy regulations.",
    options: ["To identify and mitigate the privacy risks of a system or project.", "To ensure a system is compliant with all security regulations.", "To create a detailed report on security incidents.", "To manage vendor contracts."],
    correctAnswers: ["To identify and mitigate the privacy risks of a system or project."],
    difficulty: "Hard",
    hint: "A PIA focuses specifically on privacy risks, not just security risks."
  },
  {
    id: 'q5-8',
    domain: '5.0 Risk Management and Governance',
    question: "Which of the following is a key component of a `business continuity plan` (BCP)? Relevance to SY0-701: Business continuity.",
    options: ["Disaster recovery plan", "Incident response plan", "Risk assessment", "Security policy"],
    correctAnswers: ["Disaster recovery plan"],
    difficulty: "Medium",
    hint: "A BCP is the overarching plan for keeping business functions running, and the DRP is a part of it."
  },
  {
    id: 'q5-9',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of `governance` in a security context? Relevance to SY0-701: Security governance.",
    options: ["To manage all security incidents.", "To ensure that security policies are being followed.", "To provide a framework for managing security and risk.", "To create a detailed security policy."],
    correctAnswers: ["To provide a framework for managing security and risk."],
    difficulty: "Medium",
    hint: "Governance sets the direction and ensures accountability for security."
  },
  {
    id: 'q5-10',
    domain: '5.0 Risk Management and Governance',
    question: "What is a `threat hunting`? Relevance to SY0-701: Security operations.",
    options: ["The process of actively searching for threats in a network that have bypassed existing security controls.", "The process of passively monitoring a network for threats.", "The process of simulating an attack against a system.", "The process of identifying all security vulnerabilities."],
    correctAnswers: ["The process of actively searching for threats in a network that have bypassed existing security controls."],
    difficulty: "Hard",
    hint: "Threat hunting is a proactive and iterative process."
  },
  {
    id: 'q5-11',
    domain: '5.0 Risk Management and Governance',
    question: "What is `risk avoidance`? Relevance to SY0-701: Risk responses.",
    options: ["The process of implementing a control to reduce a risk.", "The process of deciding to take no action against a risk.", "The process of transferring a risk to another party.", "The process of avoiding an activity that would create a risk."],
    correctAnswers: ["The process of avoiding an activity that would create a risk."],
    difficulty: "Medium",
    hint: "Risk avoidance is about choosing not to take on a risk in the first place."
  },
  {
    id: 'q5-12',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of an `incident response plan`? Relevance to SY0-701: Incident response.",
    options: ["To recover from a natural or man-made disaster.", "To ensure business operations continue during a disruption.", "To provide a detailed guide for how to respond to a security incident.", "To identify critical business functions."],
    correctAnswers: ["To provide a detailed guide for how to respond to a security incident."],
    difficulty: "Easy",
    hint: "An incident response plan is a step-by-step guide for handling security incidents."
  },
  {
    id: 'q5-13',
    domain: '5.0 Risk Management and Governance',
    question: "What is `risk mitigation`? Relevance to SY0-701: Risk responses.",
    options: ["The process of implementing a control to reduce a risk.", "The process of deciding to take no action against a risk.", "The process of transferring a risk to another party.", "The process of avoiding a risk altogether."],
    correctAnswers: ["The process of implementing a control to reduce a risk."],
    difficulty: "Easy",
    hint: "Mitigation is about reducing the likelihood or impact of a risk."
  },
  {
    id: 'q5-14',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of a `regulatory compliance audit`? Relevance to SY0-701: Compliance.",
    options: ["To ensure an organization is compliant with all security regulations.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To ensure an organization is compliant with all security regulations."],
    difficulty: "Medium",
    hint: "A compliance audit checks whether an organization is meeting its legal and regulatory obligations."
  },
  {
    id: 'q5-15',
    domain: '5.0 Risk Management and Governance',
    question: "Which of the following is a key component of `data lifecycle management`? Relevance to SY0-701: Data handling.",
    options: ["Data creation", "Data storage", "Data destruction", "All of the above"],
    correctAnswers: ["All of the above"],
    difficulty: "Medium",
    hint: "Data lifecycle management covers the entire life of data, from creation to destruction."
  },
  {
    id: 'q5-16',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of `continuous monitoring`? Relevance to SY0-701: Security operations.",
    options: ["To monitor network traffic for malicious activity.", "To continuously monitor the security posture of a system or network.", "To monitor all user activity on a network.", "To monitor all security incidents."],
    correctAnswers: ["To continuously monitor the security posture of a system or network."],
    difficulty: "Medium",
    hint: "Continuous monitoring is an ongoing process, not a one-time event."
  },
  {
    id: 'q5-17',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of a `security control assessment`? Relevance to SY0-701: Security auditing.",
    options: ["To evaluate the effectiveness of security controls.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To evaluate the effectiveness of security controls."],
    difficulty: "Medium",
    hint: "A security control assessment helps you determine if your controls are working as intended."
  },
  {
    id: 'q5-18',
    domain: '5.0 Risk Management and Governance',
    question: "What is the purpose of `third-party risk management`? Relevance to SY0-701: Vendor management.",
    options: ["To manage all vendors for an organization.", "To ensure that third-party vendors meet an organization's security requirements.", "To create a security policy for vendors.", "To manage vendor contracts."],
    correctAnswers: ["To ensure that third-party vendors meet an organization's security requirements."],
    difficulty: "Medium",
    hint: "This is a key part of vendor management."
  },
  {
    id: 'q5-19',
    domain: '5.0 Risk Management and Governance',
    question: "What is a `security audit`? Relevance to SY0-701: Security auditing.",
    options: ["A systematic evaluation of the security of a system or network.", "A process of actively searching for threats.", "A process of simulating an attack.", "A process of recovering from an incident."],
    correctAnswers: ["A systematic evaluation of the security of a system or network."],
    difficulty: "Easy",
    hint: "An audit is a formal check of security controls and policies."
  },
  {
    id: 'q5-20',
    domain: '5.0 Risk Management and Governance',
    question: "What is the primary goal of `security governance`? Relevance to SY0-701: Security governance.",
    options: ["To manage all security incidents.", "To align security with business objectives.", "To create a detailed security policy.", "To ensure security policies are being followed."],
    correctAnswers: ["To align security with business objectives."],
    difficulty: "Medium",
    hint: "Governance ensures that security is a strategic part of the business."
  },
  // --- Domain 6.0: Cryptography and PKI ---
  {
    id: 'q6-1',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of `hashing`? Relevance to SY0-701: Cryptographic concepts.",
    options: ["To encrypt data so it can be decrypted later.", "To create a fixed-size, unique representation of data.", "To securely exchange a symmetric key.", "To verify the identity of a user."],
    correctAnswers: ["To create a fixed-size, unique representation of data."],
    difficulty: "Easy",
    hint: "Hashing is a one-way function, used for integrity checking."
  },
  {
    id: 'q6-2',
    domain: '6.0 Cryptography and PKI',
    question: "Which of the following is a common hashing algorithm? Relevance to SY0-701: Hashing algorithms.",
    options: ["AES", "RSA", "SHA-256", "3DES"],
    correctAnswers: ["SHA-256"],
    difficulty: "Easy",
    hint: "SHA stands for Secure Hash Algorithm."
  },
  {
    id: 'q6-3',
    domain: '6.0 Cryptography and PKI',
    question: "What is `symmetric encryption`? Relevance to SY0-701: Encryption types.",
    options: ["An encryption method that uses two different keys.", "An encryption method that uses the same key for encryption and decryption.", "An encryption method that uses a public and private key pair.", "An encryption method that uses a one-time pad."],
    correctAnswers: ["An encryption method that uses the same key for encryption and decryption."],
    difficulty: "Easy",
    hint: "Symmetric encryption is fast and efficient."
  },
  {
    id: 'q6-4',
    domain: '6.0 Cryptography and PKI',
    question: "What is `asymmetric encryption`? Relevance to SY0-701: Encryption types.",
    options: ["An encryption method that uses the same key for encryption and decryption.", "An encryption method that uses a public and private key pair.", "An encryption method that uses a one-time pad.", "An encryption method that uses a shared secret."],
    correctAnswers: ["An encryption method that uses a public and private key pair."],
    difficulty: "Easy",
    hint: "Asymmetric encryption is also known as public key cryptography."
  },
  {
    id: 'q6-5',
    domain: '6.0 Cryptography and PKI',
    question: "Which of the following is a key component of a `Public Key Infrastructure` (PKI)? Relevance to SY0-701: PKI components.",
    options: ["A firewall", "A router", "A Certificate Authority (CA)", "An intrusion detection system"],
    correctAnswers: ["A Certificate Authority (CA)"],
    difficulty: "Medium",
    hint: "The CA issues and manages digital certificates."
  },
  {
    id: 'q6-6',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of a `digital signature`? Relevance to SY0-701: Cryptographic applications.",
    options: ["To encrypt a document.", "To verify the integrity and authenticity of a message or document.", "To verify the confidentiality of a document.", "To create a digital copy of a signature."],
    correctAnswers: ["To verify the integrity and authenticity of a message or document."],
    difficulty: "Medium",
    hint: "A digital signature provides non-repudiation."
  },
  {
    id: 'q6-7',
    domain: '6.0 Cryptography and PKI',
    question: "What is `Elliptic Curve Cryptography` (ECC)? Relevance to SY0-701: Advanced cryptography.",
    options: ["A type of symmetric encryption.", "A type of asymmetric encryption that uses elliptic curves.", "A type of hashing algorithm.", "A type of key exchange protocol."],
    correctAnswers: ["A type of asymmetric encryption that uses elliptic curves."],
    difficulty: "Hard",
    hint: "ECC is more efficient than RSA for the same level of security."
  },
  {
    id: 'q6-8',
    domain: '6.0 Cryptography and PKI',
    question: "What is `salting` in the context of password security? Relevance to SY0-701: Password security.",
    options: ["The process of encrypting a password.", "The process of adding random data to a password before hashing it.", "The process of creating a strong password.", "The process of hashing a password with a secret key."],
    correctAnswers: ["The process of adding random data to a password before hashing it."],
    difficulty: "Medium",
    hint: "Salting makes rainbow table attacks much more difficult."
  },
  {
    id: 'q6-9',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of a `certificate revocation list` (CRL)? Relevance to SY0-701: PKI management.",
    options: ["A list of all valid certificates.", "A list of all revoked or invalid certificates.", "A list of all users in an organization.", "A list of all security incidents."],
    correctAnswers: ["A list of all revoked or invalid certificates."],
    difficulty: "Medium",
    hint: "The CRL is used to check if a certificate is still trusted."
  },
  {
    id: 'q6-10',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of `digital certificates`? Relevance to SY0-701: PKI concepts.",
    options: ["To encrypt a document.", "To verify the identity of a user or device.", "To create a digital signature.", "To store a user's password."],
    correctAnswers: ["To verify the identity of a user or device."],
    difficulty: "Easy",
    hint: "A digital certificate binds a public key to a subject's identity."
  },
  {
    id: 'q6-11',
    domain: '6.0 Cryptography and PKI',
    question: "Which of the following is a key component of `Transport Layer Security` (TLS)? Relevance to SY0-701: Secure protocols.",
    options: ["A symmetric encryption algorithm.", "An asymmetric encryption algorithm.", "A key exchange protocol.", "All of the above."],
    correctAnswers: ["All of the above."],
    difficulty: "Medium",
    hint: "TLS uses a combination of symmetric and asymmetric cryptography, as well as a key exchange protocol."
  },
  {
    id: 'q6-12',
    domain: '6.0 Cryptography and PKI',
    question: "What is `Perfect Forward Secrecy` (PFS)? Relevance to SY0-701: Cryptographic properties.",
    options: ["A property of a cryptographic system that ensures a compromised key does not compromise past sessions.", "A property of a cryptographic system that ensures a compromised key does not compromise future sessions.", "A property of a cryptographic system that ensures a compromised key compromises all sessions.", "A property of a cryptographic system that ensures all sessions are encrypted."],
    correctAnswers: ["A property of a cryptographic system that ensures a compromised key does not compromise past sessions."],
    difficulty: "Hard",
    hint: "PFS is a key benefit of Diffie-Hellman key exchange."
  },
  {
    id: 'q6-13',
    domain: '6.0 Cryptography and PKI',
    question: "Which of the following is a type of `cipher`? Relevance to SY0-701: Encryption algorithms.",
    options: ["Stream cipher", "Block cipher", "Both A and B", "None of the above"],
    correctAnswers: ["Both A and B"],
    difficulty: "Medium",
    hint: "A stream cipher encrypts data one bit or byte at a time, while a block cipher encrypts data in blocks."
  },
  {
    id: 'q6-14',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of a `Hash-based Message Authentication Code` (HMAC)? Relevance to SY0-701: Message authentication.",
    options: ["To provide confidentiality and integrity.", "To provide integrity and authenticity.", "To provide confidentiality and authenticity.", "To provide confidentiality, integrity, and authenticity."],
    correctAnswers: ["To provide integrity and authenticity."],
    difficulty: "Hard",
    hint: "HMAC uses a secret key in conjunction with a hash function."
  },
  {
    id: 'q6-15',
    domain: '6.0 Cryptography and PKI',
    question: "Which of the following is a key characteristic of `quantum computing` that poses a threat to current cryptography? Relevance to SY0-701: Emerging technologies.",
    options: ["Its ability to break symmetric encryption.", "Its ability to break asymmetric encryption.", "Its ability to break hashing algorithms.", "Its ability to break all cryptographic algorithms."],
    correctAnswers: ["Its ability to break asymmetric encryption."],
    difficulty: "Hard",
    hint: "Quantum computers can efficiently solve the integer factorization problem, which is the basis for RSA."
  },
  {
    id: 'q6-16',
    domain: '6.0 Cryptography and PKI',
    question: "What is `steganography`? Relevance to SY0-701: Obfuscation techniques.",
    options: ["The process of encrypting a message.", "The process of hiding a message within another message or object.", "The process of creating a digital signature.", "The process of creating a hash."],
    correctAnswers: ["The process of hiding a message within another message or object."],
    difficulty: "Medium",
    hint: "Steganography is about hiding the existence of a message."
  },
  {
    id: 'q6-17',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of `cryptographic keys`? Relevance to SY0-701: Cryptographic concepts.",
    options: ["To lock a computer.", "To encrypt and decrypt data.", "To create a digital signature.", "To verify the authenticity of a message."],
    correctAnswers: ["To encrypt and decrypt data."],
    difficulty: "Easy",
    hint: "Keys are essential for cryptographic operations."
  },
  {
    id: 'q6-18',
    domain: '6.0 Cryptography and PKI',
    question: "What is the purpose of `key escrow`? Relevance to SY0-701: Key management.",
    options: ["The process of securely storing and managing cryptographic keys.", "The process of creating a new cryptographic key.", "The process of destroying a cryptographic key.", "The process of encrypting a cryptographic key."],
    correctAnswers: ["The process of securely storing and managing cryptographic keys."],
    difficulty: "Medium",
    hint: "Key escrow allows a third party to access a key under certain circumstances."
  },
  {
    id: 'q6-19',
    domain: '6.0 Cryptography and PKI',
    question: "What is a `digital certificate`? Relevance to SY0-701: PKI concepts.",
    options: ["A physical document that proves a person's identity.", "A digital document that binds a public key to a subject's identity.", "A digital signature.", "A cryptographic key."],
    correctAnswers: ["A digital document that binds a public key to a subject's identity."],
    difficulty: "Easy",
    hint: "Digital certificates are used in PKI."
  },
  {
    id: 'q6-20',
    domain: '6.0 Cryptography and PKI',
    question: "What is `key stretching`? Relevance to SY0-701: Password security.",
    options: ["The process of making a key longer.", "The process of making a key shorter.", "The process of increasing the computational effort required to crack a password.", "The process of encrypting a key."],
    correctAnswers: ["The process of increasing the computational effort required to crack a password."],
    difficulty: "Hard",
    hint: "Key stretching uses a slow hashing algorithm to make brute-force attacks more difficult."
  },
  // --- Domain 7.0: Security Operations ---
  {
    id: 'q7-1',
    domain: '7.0 Security Operations',
    question: "What is the purpose of an `incident response plan`? Relevance to SY0-701: Incident response.",
    options: ["To recover from a natural or man-made disaster.", "To ensure business operations continue during a disruption.", "To provide a detailed guide for how to respond to a security incident.", "To identify critical business functions."],
    correctAnswers: ["To provide a detailed guide for how to respond to a security incident."],
    difficulty: "Easy",
    hint: "An incident response plan is a step-by-step guide for handling security incidents."
  },
  {
    id: 'q7-2',
    domain: '7.0 Security Operations',
    question: "What is `forensics` in a security context? Relevance to SY0-701: Digital forensics.",
    options: ["The process of collecting and analyzing evidence after a security incident.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The process of collecting and analyzing evidence after a security incident."],
    difficulty: "Medium",
    hint: "Forensics is about finding out what happened after a breach."
  },
  {
    id: 'q7-3',
    domain: '7.0 Security Operations',
    question: "What is the purpose of `chain of custody`? Relevance to SY0-701: Digital forensics.",
    options: ["To ensure that evidence is properly stored.", "To ensure that evidence is not tampered with.", "To ensure that evidence is properly documented.", "All of the above."],
    correctAnswers: ["All of the above."],
    difficulty: "Medium",
    hint: "Chain of custody is critical for ensuring that evidence is admissible in court."
  },
  {
    id: 'q7-4',
    domain: '7.0 Security Operations',
    question: "Which of the following is a key component of `data sanitization`? Relevance to SY0-701: Data destruction.",
    options: ["Data encryption", "Data backup", "Data destruction", "Data recovery"],
    correctAnswers: ["Data destruction"],
    difficulty: "Medium",
    hint: "Sanitization is about making sure data is unreadable and cannot be recovered."
  },
  {
    id: 'q7-5',
    domain: '7.0 Security Operations',
    question: "What is the purpose of `continuous monitoring`? Relevance to SY0-701: Security monitoring.",
    options: ["To monitor network traffic for malicious activity.", "To continuously monitor the security posture of a system or network.", "To monitor all user activity on a network.", "To monitor all security incidents."],
    correctAnswers: ["To continuously monitor the security posture of a system or network."],
    difficulty: "Medium",
    hint: "Continuous monitoring is an ongoing process, not a one-time event."
  },
  {
    id: 'q7-6',
    domain: '7.0 Security Operations',
    question: "What is `vulnerability management`? Relevance to SY0-701: Vulnerability management.",
    options: ["The process of identifying, prioritizing, and remediating vulnerabilities.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The process of identifying, prioritizing, and remediating vulnerabilities."],
    difficulty: "Easy",
    hint: "Vulnerability management is a proactive process."
  },
  {
    id: 'q7-7',
    domain: '7.0 Security Operations',
    question: "Which of the following is a common tool for `log analysis`? Relevance to SY0-701: Security tools.",
    options: ["Firewall", "Intrusion detection system", "Security Information and Event Management (SIEM) system", "Antivirus software"],
    correctAnswers: ["Security Information and Event Management (SIEM) system"],
    difficulty: "Medium",
    hint: "SIEM systems are designed to collect and analyze a large volume of logs."
  },
  {
    id: 'q7-8',
    domain: '7.0 Security Operations',
    question: "What is the purpose of `eDiscovery`? Relevance to SY0-701: Legal and compliance.",
    options: ["The process of collecting and analyzing evidence in a legal case.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The process of collecting and analyzing evidence in a legal case."],
    difficulty: "Hard",
    hint: "eDiscovery is a legal process."
  },
  {
    id: 'q7-9',
    domain: '7.0 Security Operations',
    question: "What is the purpose of `patch management`? Relevance to SY0-701: System hardening.",
    options: ["To apply security patches to a system.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To apply security patches to a system."],
    difficulty: "Easy",
    hint: "Patch management is the process of keeping software up to date."
  },
  {
    id: 'q7-10',
    domain: '7.0 Security Operations',
    question: "Which of the following is a key component of `business continuity planning`? Relevance to SY0-701: Business continuity.",
    options: ["Disaster recovery plan", "Incident response plan", "Risk assessment", "All of the above"],
    correctAnswers: ["All of the above"],
    difficulty: "Medium",
    hint: "BCP is the overarching plan that includes many different components."
  },
  {
    id: 'q7-11',
    domain: '7.0 Security Operations',
    question: "What is the purpose of a `system audit`? Relevance to SY0-701: Security auditing.",
    options: ["To identify all security vulnerabilities.", "To ensure that a system is compliant with all security regulations.", "To recover from a security incident.", "To simulate an attack against a system."],
    correctAnswers: ["To ensure that a system is compliant with all security regulations."],
    difficulty: "Medium",
    hint: "A system audit is a formal check of a system's security controls."
  },
  {
    id: 'q7-12',
    domain: '7.0 Security Operations',
    question: "What is `Digital Forensics`? Relevance to SY0-701: Digital forensics.",
    options: ["The process of collecting and analyzing evidence from digital devices.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The process of collecting and analyzing evidence from digital devices."],
    difficulty: "Medium",
    hint: "Digital forensics is a specialized form of forensics."
  },
  {
    id: 'q7-13',
    domain: '7.0 Security Operations',
    question: "What is the purpose of an `incident response team`? Relevance to SY0-701: Incident response.",
    options: ["To manage all security incidents.", "To respond to a security incident.", "To create a security policy.", "To manage vendor contracts."],
    correctAnswers: ["To respond to a security incident."],
    difficulty: "Easy",
    hint: "The incident response team is responsible for handling security incidents."
  },
  {
    id: 'q7-14',
    domain: '7.0 Security Operations',
    question: "What is `data retention`? Relevance to SY0-701: Data handling.",
    options: ["The process of storing data for a specific period of time.", "The process of encrypting data.", "The process of destroying data.", "The process of recovering data."],
    correctAnswers: ["The process of storing data for a specific period of time."],
    difficulty: "Medium",
    hint: "Data retention policies are often driven by legal or regulatory requirements."
  },
  {
    id: 'q7-15',
    domain: '7.0 Security Operations',
    question: "What is the purpose of `data backup`? Relevance to SY0-701: Data protection.",
    options: ["To prevent a denial-of-service attack.", "To protect a network from malware.", "To create a copy of data that can be used to restore it in case of loss or corruption.", "To encrypt all data on a hard drive."],
    correctAnswers: ["To create a copy of data that can be used to restore it in case of loss or corruption."],
    difficulty: "Easy",
    hint: "Backups are essential for business continuity."
  },
  {
    id: 'q7-16',
    domain: '7.0 Security Operations',
    question: "What is the purpose of a `hot site`? Relevance to SY0-701: Disaster recovery sites.",
    options: ["A backup facility that is fully functional and ready to be used immediately.", "A backup facility that is ready to be used after some setup.", "A backup facility that is a physical location with no equipment.", "A backup facility that is a virtual location with no equipment."],
    correctAnswers: ["A backup facility that is fully functional and ready to be used immediately."],
    difficulty: "Hard",
    hint: "A hot site has all the necessary hardware, software, and data to resume operations."
  },
  {
    id: 'q7-17',
    domain: '7.0 Security Operations',
    question: "What is the purpose of a `cold site`? Relevance to SY0-701: Disaster recovery sites.",
    options: ["A backup facility that is fully functional and ready to be used immediately.", "A backup facility that is ready to be used after some setup.", "A backup facility that is a physical location with no equipment.", "A backup facility that is a virtual location with no equipment."],
    correctAnswers: ["A backup facility that is a physical location with no equipment."],
    difficulty: "Hard",
    hint: "A cold site is the cheapest option but takes the longest to get up and running."
  },
  {
    id: 'q7-18',
    domain: '7.0 Security Operations',
    question: "What is the purpose of a `warm site`? Relevance to SY0-701: Disaster recovery sites.",
    options: ["A backup facility that is fully functional and ready to be used immediately.", "A backup facility that is ready to be used after some setup.", "A backup facility that is a physical location with no equipment.", "A backup facility that is a virtual location with no equipment."],
    correctAnswers: ["A backup facility that is ready to be used after some setup."],
    difficulty: "Hard",
    hint: "A warm site is a compromise between a hot site and a cold site."
  },
  {
    id: 'q7-19',
    domain: '7.0 Security Operations',
    question: "What is `data archiving`? Relevance to SY0-701: Data handling.",
    options: ["The process of moving old data to a separate storage location.", "The process of encrypting data.", "The process of destroying data.", "The process of recovering data."],
    correctAnswers: ["The process of moving old data to a separate storage location."],
    difficulty: "Medium",
    hint: "Archiving is for data that is no longer in active use but must be retained."
  },
  {
    id: 'q7-20',
    domain: '7.0 Security Operations',
    question: "What is the purpose of a `forensic workstation`? Relevance to SY0-701: Digital forensics tools.",
    options: ["A computer used for digital forensics.", "A computer used for penetration testing.", "A computer used for software development.", "A computer used for data backup."],
    correctAnswers: ["A computer used for digital forensics."],
    difficulty: "Medium",
    hint: "A forensic workstation is a secure environment for analyzing digital evidence."
  },
  {
    id: 'q7-21',
    domain: '7.0 Security Operations',
    question: "What is a `security playbook`? Relevance to SY0-701: Incident response.",
    options: ["A document that outlines a security policy.", "A document that provides a detailed report on security incidents.", "A detailed guide for how to respond to a specific type of security incident.", "A list of all security controls."],
    correctAnswers: ["A detailed guide for how to respond to a specific type of security incident."],
    difficulty: "Medium",
    hint: "A playbook provides step-by-step instructions for responding to common threats."
  },
  {
    id: 'q7-22',
    domain: '7.0 Security Operations',
    question: "What is the purpose of `tabletop exercises`? Relevance to SY0-701: Incident response testing.",
    options: ["To test the effectiveness of a disaster recovery plan.", "To test the effectiveness of an incident response plan.", "To test the effectiveness of a security policy.", "To test the effectiveness of a security audit."],
    correctAnswers: ["To test the effectiveness of an incident response plan."],
    difficulty: "Medium",
    hint: "Tabletop exercises are discussion-based simulations."
  },
  // --- Domain 8.0: Security Governance and Compliance ---
  {
    id: 'q8-1',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of `governance`? Relevance to SY0-701: Security governance.",
    options: ["To manage all security incidents.", "To ensure that security policies are being followed.", "To provide a framework for managing security and risk.", "To create a detailed security policy."],
    correctAnswers: ["To provide a framework for managing security and risk."],
    difficulty: "Medium",
    hint: "Governance sets the direction and ensures accountability for security."
  },
  {
    id: 'q8-2',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `compliance`? Relevance to SY0-701: Compliance.",
    options: ["The process of ensuring that an organization meets all security regulations.", "The process of managing all security incidents.", "The process of creating a security policy.", "The process of actively searching for threats."],
    correctAnswers: ["The process of ensuring that an organization meets all security regulations."],
    difficulty: "Easy",
    hint: "Compliance is about following the rules."
  },
  {
    id: 'q8-3',
    domain: '8.0 Security Governance and Compliance',
    question: "Which of the following is a common security framework? Relevance to SY0-701: Security frameworks.",
    options: ["NIST", "ISO 27001", "CIS", "All of the above"],
    correctAnswers: ["All of the above"],
    difficulty: "Medium",
    hint: "These are all well-known security frameworks."
  },
  {
    id: 'q8-4',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `PCI DSS`? Relevance to SY0-701: Regulatory compliance.",
    options: ["A security standard for protecting credit card data.", "A security standard for protecting healthcare data.", "A security standard for protecting government data.", "A security standard for protecting all data."],
    correctAnswers: ["A security standard for protecting credit card data."],
    difficulty: "Easy",
    hint: "PCI DSS stands for Payment Card Industry Data Security Standard."
  },
  {
    id: 'q8-5',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `HIPAA`? Relevance to SY0-701: Regulatory compliance.",
    options: ["A security standard for protecting credit card data.", "A security standard for protecting healthcare data.", "A security standard for protecting government data.", "A security standard for protecting all data."],
    correctAnswers: ["A security standard for protecting healthcare data."],
    difficulty: "Easy",
    hint: "HIPAA stands for Health Insurance Portability and Accountability Act."
  },
  {
    id: 'q8-6',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `SOX`? Relevance to SY0-701: Regulatory compliance.",
    options: ["A security standard for protecting credit card data.", "A security standard for protecting healthcare data.", "A security standard for protecting financial data.", "A security standard for protecting government data."],
    correctAnswers: ["A security standard for protecting financial data."],
    difficulty: "Medium",
    hint: "SOX stands for Sarbanes-Oxley Act."
  },
  {
    id: 'q8-7',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of a `privacy policy`? Relevance to SY0-701: Privacy regulations.",
    options: ["To outline how an organization collects, uses, and protects user data.", "To outline how an organization protects its network.", "To outline how an organization responds to security incidents.", "To outline how an organization manages its employees."],
    correctAnswers: ["To outline how an organization collects, uses, and protects user data."],
    difficulty: "Easy",
    hint: "A privacy policy is about how an organization handles personal information."
  },
  {
    id: 'q8-8',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `GDPR`? Relevance to SY0-701: Regulatory compliance.",
    options: ["A security standard for protecting credit card data.", "A security standard for protecting healthcare data.", "A security standard for protecting financial data.", "A data protection and privacy regulation in the European Union."],
    correctAnswers: ["A data protection and privacy regulation in the European Union."],
    difficulty: "Medium",
    hint: "GDPR stands for General Data Protection Regulation."
  },
  {
    id: 'q8-9',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of `supply chain risk management`? Relevance to SY0-701: Third-party risk.",
    options: ["To manage all vendors for an organization.", "To ensure that third-party vendors meet an organization's security requirements.", "To manage the risks associated with the supply chain of products and services.", "To manage vendor contracts."],
    correctAnswers: ["To manage the risks associated with the supply chain of products and services."],
    difficulty: "Medium",
    hint: "Supply chain risk management is about the entire lifecycle of a product, from raw materials to end-of-life."
  },
  {
    id: 'q8-10',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of a `Code of Conduct`? Relevance to SY0-701: Organizational policies.",
    options: ["To outline how an organization manages its employees.", "To outline the ethical principles and expected behavior of employees.", "To outline how an organization responds to security incidents.", "To outline how an organization protects its network."],
    correctAnswers: ["To outline the ethical principles and expected behavior of employees."],
    difficulty: "Easy",
    hint: "A code of conduct sets the ethical standard for an organization."
  },
  {
    id: 'q8-11',
    domain: '8.0 Security Governance and Compliance',
    question: "What is a `security framework`? Relevance to SY0-701: Security frameworks.",
    options: ["A document that outlines a security policy.", "A set of guidelines that help organizations manage and reduce cybersecurity risk.", "A detailed report on security incidents.", "A list of all security controls."],
    correctAnswers: ["A set of guidelines that help organizations manage and reduce cybersecurity risk."],
    difficulty: "Medium",
    hint: "A framework is a set of best practices and standards."
  },
  {
    id: 'q8-12',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of `security governance`? Relevance to SY0-701: Security governance.",
    options: ["To manage all security incidents.", "To align security with business objectives.", "To create a detailed security policy.", "To ensure security policies are being followed."],
    correctAnswers: ["To align security with business objectives."],
    difficulty: "Medium",
    hint: "Governance ensures that security is a strategic part of the business."
  },
  {
    id: 'q8-13',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `due care`? Relevance to SY0-701: Legal concepts.",
    options: ["The degree of care that a reasonable person would exercise in a given situation.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The degree of care that a reasonable person would exercise in a given situation."],
    difficulty: "Hard",
    hint: "Due care is a legal term."
  },
  {
    id: 'q8-14',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `due diligence`? Relevance to SY0-701: Legal concepts.",
    options: ["The degree of care that a reasonable person would exercise in a given situation.", "The process of actively searching for threats.", "The process of investigating and understanding a risk.", "The process of recovering from an incident."],
    correctAnswers: ["The process of investigating and understanding a risk."],
    difficulty: "Hard",
    hint: "Due diligence is about doing your homework."
  },
  {
    id: 'q8-15',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of a `regulatory compliance audit`? Relevance to SY0-701: Compliance.",
    options: ["To ensure an organization is compliant with all security regulations.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To ensure an organization is compliant with all security regulations."],
    difficulty: "Medium",
    hint: "A compliance audit checks whether an organization is meeting its legal and regulatory obligations."
  },
  {
    id: 'q8-16',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of `risk management`? Relevance to SY0-701: Risk management.",
    options: ["To identify, assess, and control risks.", "To actively search for threats.", "To simulate an attack.", "To recover from an incident."],
    correctAnswers: ["To identify, assess, and control risks."],
    difficulty: "Easy",
    hint: "Risk management is a systematic process."
  },
  {
    id: 'q8-17',
    domain: '8.0 Security Governance and Compliance',
    question: "Which of the following is a key component of `data lifecycle management`? Relevance to SY0-701: Data handling.",
    options: ["Data creation", "Data storage", "Data destruction", "All of the above"],
    correctAnswers: ["All of the above"],
    difficulty: "Medium",
    hint: "Data lifecycle management covers the entire life of data, from creation to destruction."
  },
  {
    id: 'q8-18',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `continuous monitoring`? Relevance to SY0-701: Security operations.",
    options: ["To monitor network traffic for malicious activity.", "To continuously monitor the security posture of a system or network.", "To monitor all user activity on a network.", "To monitor all security incidents."],
    correctAnswers: ["To continuously monitor the security posture of a system or network."],
    difficulty: "Medium",
    hint: "Continuous monitoring is an ongoing process, not a one-time event."
  },
  {
    id: 'q8-19',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of `security control assessment`? Relevance to SY0-701: Security auditing.",
    options: ["To evaluate the effectiveness of security controls.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To evaluate the effectiveness of security controls."],
    difficulty: "Medium",
    hint: "A security control assessment helps you determine if your controls are working as intended."
  },
  {
    id: 'q8-20',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of a `privacy policy`? Relevance to SY0-701: Privacy regulations.",
    options: ["To outline how an organization collects, uses, and protects user data.", "To outline how an organization protects its network.", "To outline how an organization responds to security incidents.", "To outline how an organization manages its employees."],
    correctAnswers: ["To outline how an organization collects, uses, and protects user data."],
    difficulty: "Easy",
    hint: "A privacy policy is about how an organization handles personal information."
  },
  {
    id: 'q8-21',
    domain: '8.0 Security Governance and Compliance',
    question: "What is `GDPR`? Relevance to SY0-701: Regulatory compliance.",
    options: ["A security standard for protecting credit card data.", "A security standard for protecting healthcare data.", "A security standard for protecting financial data.", "A data protection and privacy regulation in the European Union."],
    correctAnswers: ["A data protection and privacy regulation in the European Union."],
    difficulty: "Medium",
    hint: "GDPR stands for General Data Protection Regulation."
  },
  {
    id: 'q8-22',
    domain: '8.0 Security Governance and Compliance',
    question: "What is the purpose of `supply chain risk management`? Relevance to SY0-701: Third-party risk.",
    options: ["To manage all vendors for an organization.", "To ensure that third-party vendors meet an organization's security requirements.", "To manage the risks associated with the supply chain of products and services.", "To manage vendor contracts."],
    correctAnswers: ["To manage the risks associated with the supply chain of products and services."],
    difficulty: "Medium",
    hint: "Supply chain risk management is about the entire lifecycle of a product, from raw materials to end-of-life."
  },
  // --- Domain 9.0: Emerging Technologies ---
  {
    id: 'q9-1',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of `DevSecOps`? Relevance to SY0-701: Software development security.",
    options: ["To integrate security into the software development lifecycle.", "To automate the software development process.", "To manage a team of developers and security professionals.", "To secure a DevOps environment."],
    correctAnswers: ["To integrate security into the software development lifecycle."],
    difficulty: "Medium",
    hint: "DevSecOps is about making security an integral part of the development process, not an afterthought."
  },
  {
    id: 'q9-2',
    domain: '9.0 Emerging Technologies',
    question: "What is `serverless computing`? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the servers.", "A cloud computing model where the user manages the servers.", "A cloud computing model where there are no servers.", "A cloud computing model where the provider manages the database."],
    correctAnswers: ["A cloud computing model where the provider manages the servers."],
    difficulty: "Medium",
    hint: "Serverless computing means you don't have to worry about provisioning or managing servers."
  },
  {
    id: 'q9-3',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of `containerization`? Relevance to SY0-701: Cloud technologies.",
    options: ["To create a virtual machine.", "To package an application with all its dependencies into a single, portable unit.", "To encrypt a file system.", "To protect a network from malware."],
    correctAnswers: ["To package an application with all its dependencies into a single, portable unit."],
    difficulty: "Medium",
    hint: "Containerization is a lightweight alternative to virtualization."
  },
  {
    id: 'q9-4',
    domain: '9.0 Emerging Technologies',
    question: "What is `microservices architecture`? Relevance to SY0-701: Application architecture.",
    options: ["A monolithic application architecture.", "An application architecture that is composed of a collection of small, independent services.", "A serverless computing model.", "A cloud computing model."],
    correctAnswers: ["An application architecture that is composed of a collection of small, independent services."],
    difficulty: "Hard",
    hint: "Microservices are a way to build a large application out of small, loosely coupled services."
  },
  {
    id: 'q9-5',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of `cloud access security broker` (CASB)? Relevance to SY0-701: Cloud security tools.",
    options: ["A security tool that helps organizations enforce security policies in the cloud.", "A security tool that helps organizations manage their on-premises security.", "A security tool that helps organizations manage their network.", "A security tool that helps organizations manage their firewalls."],
    correctAnswers: ["A security tool that helps organizations enforce security policies in the cloud."],
    difficulty: "Hard",
    hint: "A CASB acts as a gatekeeper for cloud services."
  },
  {
    id: 'q9-6',
    domain: '9.0 Emerging Technologies',
    question: "What is `Software-as-a-Service` (SaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the user manages the software.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the software."],
    difficulty: "Easy",
    hint: "SaaS is a common model for cloud-based applications like Gmail and Salesforce."
  },
  {
    id: 'q9-7',
    domain: '9.0 Emerging Technologies',
    question: "What is `Platform-as-a-Service` (PaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the platform and the user manages the application.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the platform and the user manages the application."],
    difficulty: "Medium",
    hint: "PaaS gives developers a platform to build and run applications without worrying about the underlying infrastructure."
  },
  {
    id: 'q9-8',
    domain: '9.0 Emerging Technologies',
    question: "What is `Infrastructure-as-a-Service` (IaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the platform and the user manages the application.", "A cloud computing model where the provider manages the infrastructure and the user manages the operating system and applications.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the infrastructure and the user manages the operating system and applications."],
    difficulty: "Medium",
    hint: "IaaS gives users control over the operating system and applications, but the provider manages the servers and storage."
  },
  {
    id: 'q9-9',
    domain: '9.0 Emerging Technologies',
    question: "What is `Serverless Architecture`? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the servers.", "A cloud computing model where the user manages the servers.", "A cloud computing model where there are no servers.", "A cloud computing model where the provider manages the database."],
    correctAnswers: ["A cloud computing model where the provider manages the servers."],
    difficulty: "Medium",
    hint: "Serverless computing means you don't have to worry about provisioning or managing servers."
  },
  {
    id: 'q9-10',
    domain: '9.0 Emerging Technologies',
    question: "What is `container orchestration`? Relevance to SY0-701: Cloud technologies.",
    options: ["The process of managing a single container.", "The process of managing multiple containers.", "The process of managing a single virtual machine.", "The process of managing multiple virtual machines."],
    correctAnswers: ["The process of managing multiple containers."],
    difficulty: "Hard",
    hint: "Container orchestration tools like Kubernetes automate the deployment, scaling, and management of containers."
  },
  {
    id: 'q9-11',
    domain: '9.0 Emerging Technologies',
    question: "What is `edge computing`? Relevance to SY0-701: Distributed computing.",
    options: ["The practice of processing data at the edge of the network, near the source of the data.", "The practice of processing data in the cloud.", "The practice of processing data in a data center.", "The practice of processing data on a single computer."],
    correctAnswers: ["The practice of processing data at the edge of the network, near the source of the data."],
    difficulty: "Hard",
    hint: "Edge computing reduces latency and bandwidth usage."
  },
  {
    id: 'q9-12',
    domain: '9.0 Emerging Technologies',
    question: "What is `Internet of Things` (IoT)? Relevance to SY0-701: Emerging technologies.",
    options: ["A network of physical devices that are embedded with sensors and software.", "A network of virtual machines.", "A network of servers.", "A network of databases."],
    correctAnswers: ["A network of physical devices that are embedded with sensors and software."],
    difficulty: "Easy",
    hint: "IoT devices are typically a network of everyday objects that can connect to the internet."
  },
  {
    id: 'q9-13',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of `Cloud Security Posture Management` (CSPM)? Relevance to SY0-701: Cloud security tools.",
    options: ["To secure a cloud environment.", "To identify misconfigurations and security risks in a cloud environment.", "To manage a cloud environment.", "To monitor a cloud environment."],
    correctAnswers: ["To identify misconfigurations and security risks in a cloud environment."],
    difficulty: "Hard",
    hint: "CSPM tools help organizations enforce security policies in the cloud."
  },
  {
    id: 'q9-14',
    domain: '9.0 Emerging Technologies',
    question: "What is a `security as a service` (SaaS)? Relevance to SY0-701: Cloud security models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the security.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the security."],
    difficulty: "Medium",
    hint: "Security as a Service provides security services to an organization from the cloud."
  },
  {
    id: 'q9-15',
    domain: '9.0 Emerging Technologies',
    question: "What is `blockchain`? Relevance to SY0-701: Distributed ledger technologies.",
    options: ["A distributed ledger technology.", "A centralized database.", "A type of encryption.", "A type of security protocol."],
    correctAnswers: ["A distributed ledger technology."],
    difficulty: "Hard",
    hint: "Blockchain is a decentralized and immutable ledger."
  },
  {
    id: 'q9-16',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of `machine learning` in cybersecurity? Relevance to SY0-701: AI and security.",
    options: ["To automate security incident response.", "To detect anomalies and threats that are not easily identified by traditional methods.", "To create new security policies.", "To manage a security team."],
    correctAnswers: ["To detect anomalies and threats that are not easily identified by traditional methods."],
    difficulty: "Medium",
    hint: "Machine learning can be used to identify zero-day attacks."
  },
  {
    id: 'q9-17',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of a `virtual machine` (VM)? Relevance to SY0-701: Virtualization.",
    options: ["To create a virtual server.", "To create a virtual network.", "To create a virtual computer.", "To create a virtual file system."],
    correctAnswers: ["To create a virtual computer."],
    difficulty: "Easy",
    hint: "A VM is a virtualized computer that can run its own operating system and applications."
  },
  {
    id: 'q9-18',
    domain: '9.0 Emerging Technologies',
    question: "What is `cloud computing`? Relevance to SY0-701: Cloud concepts.",
    options: ["The delivery of on-demand computing services—from applications to storage and processing power—over the internet.", "The delivery of on-premises computing services.", "The delivery of on-demand computing services over a local network.", "The delivery of on-demand computing services on a single computer."],
    correctAnswers: ["The delivery of on-demand computing services—from applications to storage and processing power—over the internet."],
    difficulty: "Easy",
    hint: "Cloud computing allows you to access computing resources over the internet."
  },
  {
    id: 'q9-19',
    domain: '9.0 Emerging Technologies',
    question: "What is the purpose of a `container image`? Relevance to SY0-701: Cloud technologies.",
    options: ["A virtual machine.", "A file system.", "A template for creating a container.", "A security policy."],
    correctAnswers: ["A template for creating a container."],
    difficulty: "Medium",
    hint: "A container image is a lightweight, standalone, executable package of software that includes everything needed to run an application."
  },
  {
    id: 'q9-20',
    domain: '9.0 Emerging Technologies',
    question: "What is `serverless architecture`? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the servers.", "A cloud computing model where the user manages the servers.", "A cloud computing model where there are no servers.", "A cloud computing model where the provider manages the database."],
    correctAnswers: ["A cloud computing model where the provider manages the servers."],
    difficulty: "Medium",
    hint: "Serverless computing means you don't have to worry about provisioning or managing servers."
  },
  {
    id: 'q9-21',
    domain: '9.0 Emerging Technologies',
    question: "What is `quantum computing`? Relevance to SY0-701: Emerging technologies.",
    options: ["A type of computing that uses quantum-mechanical phenomena.", "A type of computing that uses classical physics.", "A type of computing that uses a single processor.", "A type of computing that uses multiple processors."],
    correctAnswers: ["A type of computing that uses quantum-mechanical phenomena."],
    difficulty: "Hard",
    hint: "Quantum computing is a new type of computing that can solve problems that are intractable for classical computers."
  },
  // --- Domain 10.0: Vulnerability Management and Penetration Testing ---
  {
    id: 'q10-1',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the primary goal of a `vulnerability scan`? Relevance to SY0-701: Vulnerability management.",
    options: ["To actively exploit known vulnerabilities.", "To identify potential weaknesses in a system.", "To passively monitor network traffic for threats.", "To simulate a real-world attack."],
    correctAnswers: ["To identify potential weaknesses in a system."],
    difficulty: "Easy",
    hint: "A vulnerability scan is a passive assessment, not an active attack."
  },
  {
    id: 'q10-2',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `penetration testing`? Relevance to SY0-701: Penetration testing.",
    options: ["To identify all security vulnerabilities.", "To simulate an attack against a system to find exploitable vulnerabilities.", "To passively monitor a network for threats.", "To create a detailed security policy."],
    correctAnswers: ["To simulate an attack against a system to find exploitable vulnerabilities."],
    difficulty: "Medium",
    hint: "Penetration testing is an active, authorized attack."
  },
  {
    id: 'q10-3',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is a `white box` penetration test? Relevance to SY0-701: Penetration testing types.",
    options: ["A test where the tester has no prior knowledge of the target system.", "A test where the tester has some knowledge of the target system.", "A test where the tester has full knowledge of the target system.", "A test where the tester has no knowledge of the target system."],
    correctAnswers: ["A test where the tester has full knowledge of the target system."],
    difficulty: "Medium",
    hint: "A white box test is also known as a 'clear box' test."
  },
  {
    id: 'q10-4',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is a `black box` penetration test? Relevance to SY0-701: Penetration testing types.",
    options: ["A test where the tester has no prior knowledge of the target system.", "A test where the tester has some knowledge of the target system.", "A test where the tester has full knowledge of the target system.", "A test where the tester has no knowledge of the target system."],
    correctAnswers: ["A test where the tester has no prior knowledge of the target system."],
    difficulty: "Medium",
    hint: "A black box test simulates an external attacker."
  },
  {
    id: 'q10-5',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is a `gray box` penetration test? Relevance to SY0-701: Penetration testing types.",
    options: ["A test where the tester has no prior knowledge of the target system.", "A test where the tester has some knowledge of the target system.", "A test where the tester has full knowledge of the target system.", "A test where the tester has no knowledge of the target system."],
    correctAnswers: ["A test where the tester has some knowledge of the target system."],
    difficulty: "Medium",
    hint: "A gray box test is a hybrid of white box and black box testing."
  },
  {
    id: 'q10-6',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of a `vulnerability assessment`? Relevance to SY0-701: Vulnerability management.",
    options: ["To actively exploit vulnerabilities.", "To identify, quantify, and prioritize the vulnerabilities in a system.", "To simulate a real-world attack.", "To recover from a security incident."],
    correctAnswers: ["To identify, quantify, and prioritize the vulnerabilities in a system."],
    difficulty: "Medium",
    hint: "Vulnerability assessments are proactive and help you prioritize your security efforts."
  },
  {
    id: 'q10-7',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `vulnerability scanning`? Relevance to SY0-701: Vulnerability management tools.",
    options: ["A tool that actively exploits vulnerabilities.", "A tool that identifies potential weaknesses in a system.", "A tool that passively monitors network traffic for threats.", "A tool that simulates a real-world attack."],
    correctAnswers: ["A tool that identifies potential weaknesses in a system."],
    difficulty: "Easy",
    hint: "Vulnerability scanning is a common practice."
  },
  {
    id: 'q10-8',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `patch management`? Relevance to SY0-701: System hardening.",
    options: ["To apply security patches to a system.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To apply security patches to a system."],
    difficulty: "Easy",
    hint: "Patch management is the process of keeping software up to date."
  },
  {
    id: 'q10-9',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of a `threat modeling`? Relevance to SY0-701: Risk assessment techniques.",
    options: ["The process of identifying and analyzing potential threats to a system.", "The process of creating a model of a threat actor.", "The process of simulating an attack against a system.", "The process of identifying all security vulnerabilities."],
    correctAnswers: ["The process of identifying and analyzing potential threats to a system."],
    difficulty: "Hard",
    hint: "Threat modeling helps you understand where and how a system might be attacked."
  },
  {
    id: 'q10-10',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of a `security audit`? Relevance to SY0-701: Security auditing.",
    options: ["A systematic evaluation of the security of a system or network.", "A process of actively searching for threats.", "A process of simulating an attack.", "A process of recovering from an incident."],
    correctAnswers: ["A systematic evaluation of the security of a system or network."],
    difficulty: "Easy",
    hint: "An audit is a formal check of security controls and policies."
  },
  {
    id: 'q10-11',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `vulnerability management`? Relevance to SY0-701: Vulnerability management.",
    options: ["The process of identifying, prioritizing, and remediating vulnerabilities.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The process of identifying, prioritizing, and remediating vulnerabilities."],
    difficulty: "Easy",
    hint: "Vulnerability management is a proactive process."
  },
  {
    id: 'q10-12',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of a `security control assessment`? Relevance to SY0-701: Security auditing.",
    options: ["To evaluate the effectiveness of security controls.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To evaluate the effectiveness of security controls."],
    difficulty: "Medium",
    hint: "A security control assessment helps you determine if your controls are working as intended."
  },
  {
    id: 'q10-13',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `threat hunting`? Relevance to SY0-701: Security operations.",
    options: ["The process of actively searching for threats in a network that have bypassed existing security controls.", "The process of passively monitoring a network for threats.", "The process of simulating an attack against a system.", "The process of identifying all security vulnerabilities."],
    correctAnswers: ["The process of actively searching for threats in a network that have bypassed existing security controls."],
    difficulty: "Hard",
    hint: "Threat hunting is a proactive and iterative process."
  },
  {
    id: 'q10-14',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `continuous monitoring`? Relevance to SY0-701: Security monitoring.",
    options: ["To monitor network traffic for malicious activity.", "To continuously monitor the security posture of a system or network.", "To monitor all user activity on a network.", "To monitor all security incidents."],
    correctAnswers: ["To continuously monitor the security posture of a system or network."],
    difficulty: "Medium",
    hint: "Continuous monitoring is an ongoing process, not a one-time event."
  },
  {
    id: 'q10-15',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `patch management`? Relevance to SY0-701: System hardening.",
    options: ["To apply security patches to a system.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To apply security patches to a system."],
    difficulty: "Easy",
    hint: "Patch management is the process of keeping software up to date."
  },
  {
    id: 'q10-16',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of a `regulatory compliance audit`? Relevance to SY0-701: Compliance.",
    options: ["To ensure an organization is compliant with all security regulations.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To ensure an organization is compliant with all security regulations."],
    difficulty: "Medium",
    hint: "A compliance audit checks whether an organization is meeting its legal and regulatory obligations."
  },
  {
    id: 'q10-17',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `due care`? Relevance to SY0-701: Legal concepts.",
    options: ["The degree of care that a reasonable person would exercise in a given situation.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The degree of care that a reasonable person would exercise in a given situation."],
    difficulty: "Hard",
    hint: "Due care is a legal term."
  },
  {
    id: 'q10-18',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `due diligence`? Relevance to SY0-701: Legal concepts.",
    options: ["The degree of care that a reasonable person would exercise in a given situation.", "The process of actively searching for threats.", "The process of investigating and understanding a risk.", "The process of recovering from an incident."],
    correctAnswers: ["The process of investigating and understanding a risk."],
    difficulty: "Hard",
    hint: "Due diligence is about doing your homework."
  },
  {
    id: 'q10-19',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `threat modeling`? Relevance to SY0-701: Risk assessment techniques.",
    options: ["The process of identifying and analyzing potential threats to a system.", "The process of creating a model of a threat actor.", "The process of simulating an attack against a system.", "The process of identifying all security vulnerabilities."],
    correctAnswers: ["The process of identifying and analyzing potential threats to a system."],
    difficulty: "Hard",
    hint: "Threat modeling helps you understand where and how a system might be attacked."
  },
  {
    id: 'q10-20',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of a `security playbook`? Relevance to SY0-701: Incident response.",
    options: ["A document that outlines a security policy.", "A document that provides a detailed report on security incidents.", "A detailed guide for how to respond to a specific type of security incident.", "A list of all security controls."],
    correctAnswers: ["A detailed guide for how to respond to a specific type of security incident."],
    difficulty: "Medium",
    hint: "A playbook provides step-by-step instructions for responding to common threats."
  },
  {
    id: 'q10-21',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `tabletop exercises`? Relevance to SY0-701: Incident response testing.",
    options: ["To test the effectiveness of a disaster recovery plan.", "To test the effectiveness of an incident response plan.", "To test the effectiveness of a security policy.", "To test the effectiveness of a security audit."],
    correctAnswers: ["To test the effectiveness of an incident response plan."],
    difficulty: "Medium",
    hint: "Tabletop exercises are discussion-based simulations."
  },
  {
    id: 'q10-22',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is `threat hunting`? Relevance to SY0-701: Security operations.",
    options: ["The process of actively searching for threats in a network that have bypassed existing security controls.", "The process of passively monitoring a network for threats.", "The process of simulating an attack against a system.", "The process of identifying all security vulnerabilities."],
    correctAnswers: ["The process of actively searching for threats in a network that have bypassed existing security controls."],
    difficulty: "Hard",
    hint: "Threat hunting is a proactive and iterative process."
  },
  {
    id: 'q10-23',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `vulnerability management`? Relevance to SY0-701: Vulnerability management.",
    options: ["The process of identifying, prioritizing, and remediating vulnerabilities.", "The process of actively searching for threats.", "The process of simulating an attack.", "The process of recovering from an incident."],
    correctAnswers: ["The process of identifying, prioritizing, and remediating vulnerabilities."],
    difficulty: "Easy",
    hint: "Vulnerability management is a proactive process."
  },
  {
    id: 'q10-24',
    domain: '10.0 Vulnerability Management and Penetration Testing',
    question: "What is the purpose of `security control assessment`? Relevance to SY0-701: Security auditing.",
    options: ["To evaluate the effectiveness of security controls.", "To identify all security vulnerabilities.", "To simulate an attack against a system.", "To recover from a security incident."],
    correctAnswers: ["To evaluate the effectiveness of security controls."],
    difficulty: "Medium",
    hint: "A security control assessment helps you determine if your controls are working as intended."
  },
  // --- Domain 11.0: Cloud Security ---
  {
    id: 'q11-1',
    domain: '11.0 Cloud Security',
    question: "What is `cloud access security broker` (CASB)? Relevance to SY0-701: Cloud security tools.",
    options: ["A security tool that helps organizations enforce security policies in the cloud.", "A security tool that helps organizations manage their on-premises security.", "A security tool that helps organizations manage their network.", "A security tool that helps organizations manage their firewalls."],
    correctAnswers: ["A security tool that helps organizations enforce security policies in the cloud."],
    difficulty: "Hard",
    hint: "A CASB acts as a gatekeeper for cloud services."
  },
  {
    id: 'q11-2',
    domain: '11.0 Cloud Security',
    question: "What is `Software-as-a-Service` (SaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the user manages the software.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the software."],
    difficulty: "Easy",
    hint: "SaaS is a common model for cloud-based applications like Gmail and Salesforce."
  },
  {
    id: 'q11-3',
    domain: '11.0 Cloud Security',
    question: "What is `Platform-as-a-Service` (PaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the platform and the user manages the application.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the platform and the user manages the application."],
    difficulty: "Medium",
    hint: "PaaS gives developers a platform to build and run applications without worrying about the underlying infrastructure."
  },
  {
    id: 'q11-4',
    domain: '11.0 Cloud Security',
    question: "What is `Infrastructure-as-a-Service` (IaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the platform and the user manages the application.", "A cloud computing model where the provider manages the infrastructure and the user manages the operating system and applications.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the infrastructure and the user manages the operating system and applications."],
    difficulty: "Medium",
    hint: "IaaS gives users control over the operating system and applications, but the provider manages the servers and storage."
  },
  {
    id: 'q11-5',
    domain: '11.0 Cloud Security',
    question: "What is `serverless computing`? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the servers.", "A cloud computing model where the user manages the servers.", "A cloud computing model where there are no servers.", "A cloud computing model where the provider manages the database."],
    correctAnswers: ["A cloud computing model where the provider manages the servers."],
    difficulty: "Medium",
    hint: "Serverless computing means you don't have to worry about provisioning or managing servers."
  },
  {
    id: 'q11-6',
    domain: '11.0 Cloud Security',
    question: "What is the purpose of `cloud access security broker` (CASB)? Relevance to SY0-701: Cloud security tools.",
    options: ["A security tool that helps organizations enforce security policies in the cloud.", "A security tool that helps organizations manage their on-premises security.", "A security tool that helps organizations manage their network.", "A security tool that helps organizations manage their firewalls."],
    correctAnswers: ["A security tool that helps organizations enforce security policies in the cloud."],
    difficulty: "Hard",
    hint: "A CASB acts as a gatekeeper for cloud services."
  },
  {
    id: 'q11-7',
    domain: '11.0 Cloud Security',
    question: "What is `containerization`? Relevance to SY0-701: Cloud technologies.",
    options: ["To create a virtual machine.", "To package an application with all its dependencies into a single, portable unit.", "To encrypt a file system.", "To protect a network from malware."],
    correctAnswers: ["To package an application with all its dependencies into a single, portable unit."],
    difficulty: "Medium",
    hint: "Containerization is a lightweight alternative to virtualization."
  },
  {
    id: 'q11-8',
    domain: '11.0 Cloud Security',
    question: "What is `microservices architecture`? Relevance to SY0-701: Application architecture.",
    options: ["A monolithic application architecture.", "An application architecture that is composed of a collection of small, independent services.", "A serverless computing model.", "A cloud computing model."],
    correctAnswers: ["An application architecture that is composed of a collection of small, independent services."],
    difficulty: "Hard",
    hint: "Microservices are a way to build a large application out of small, loosely coupled services."
  },
  {
    id: 'q11-9',
    domain: '11.0 Cloud Security',
    question: "What is the purpose of a `virtual machine` (VM)? Relevance to SY0-701: Virtualization.",
    options: ["To create a virtual server.", "To create a virtual network.", "To create a virtual computer.", "To create a virtual file system."],
    correctAnswers: ["To create a virtual computer."],
    difficulty: "Easy",
    hint: "A VM is a virtualized computer that can run its own operating system and applications."
  },
  {
    id: 'q11-10',
    domain: '11.0 Cloud Security',
    question: "What is the purpose of `cloud computing`? Relevance to SY0-701: Cloud concepts.",
    options: ["The delivery of on-demand computing services—from applications to storage and processing power—over the internet.", "The delivery of on-premises computing services.", "The delivery of on-demand computing services over a local network.", "The delivery of on-demand computing services on a single computer."],
    correctAnswers: ["The delivery of on-demand computing services—from applications to storage and processing power—over the internet."],
    difficulty: "Easy",
    hint: "Cloud computing allows you to access computing resources over the internet."
  },
  {
    id: 'q11-11',
    domain: '11.0 Cloud Security',
    question: "What is `serverless computing`? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the servers.", "A cloud computing model where the user manages the servers.", "A cloud computing model where there are no servers.", "A cloud computing model where the provider manages the database."],
    correctAnswers: ["A cloud computing model where the provider manages the servers."],
    difficulty: "Medium",
    hint: "Serverless computing means you don't have to worry about provisioning or managing servers."
  },
  {
    id: 'q11-12',
    domain: '11.0 Cloud Security',
    question: "What is the purpose of `cloud access security broker` (CASB)? Relevance to SY0-701: Cloud security tools.",
    options: ["A security tool that helps organizations enforce security policies in the cloud.", "A security tool that helps organizations manage their on-premises security.", "A security tool that helps organizations manage their network.", "A security tool that helps organizations manage their firewalls."],
    correctAnswers: ["A security tool that helps organizations enforce security policies in the cloud."],
    difficulty: "Hard",
    hint: "A CASB acts as a gatekeeper for cloud services."
  },
  {
    id: 'q11-13',
    domain: '11.0 Cloud Security',
    question: "What is `containerization`? Relevance to SY0-701: Cloud technologies.",
    options: ["To create a virtual machine.", "To package an application with all its dependencies into a single, portable unit.", "To encrypt a file system.", "To protect a network from malware."],
    correctAnswers: ["To package an application with all its dependencies into a single, portable unit."],
    difficulty: "Medium",
    hint: "Containerization is a lightweight alternative to virtualization."
  },
  {
    id: 'q11-14',
    domain: '11.0 Cloud Security',
    question: "What is `microservices architecture`? Relevance to SY0-701: Application architecture.",
    options: ["A monolithic application architecture.", "An application architecture that is composed of a collection of small, independent services.", "A serverless computing model.", "A cloud computing model."],
    correctAnswers: ["An application architecture that is composed of a collection of small, independent services."],
    difficulty: "Hard",
    hint: "Microservices are a way to build a large application out of small, loosely coupled services."
  },
  {
    id: 'q11-15',
    domain: '11.0 Cloud Security',
    question: "What is the purpose of `cloud access security broker` (CASB)? Relevance to SY0-701: Cloud security tools.",
    options: ["A security tool that helps organizations enforce security policies in the cloud.", "A security tool that helps organizations manage their on-premises security.", "A security tool that helps organizations manage their network.", "A security tool that helps organizations manage their firewalls."],
    correctAnswers: ["A security tool that helps organizations enforce security policies in the cloud."],
    difficulty: "Hard",
    hint: "A CASB acts as a gatekeeper for cloud services."
  },
  {
    id: 'q11-16',
    domain: '11.0 Cloud Security',
    question: "What is `Software-as-a-Service` (SaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the user manages the software.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the software."],
    difficulty: "Easy",
    hint: "SaaS is a common model for cloud-based applications like Gmail and Salesforce."
  },
  {
    id: 'q11-17',
    domain: '11.0 Cloud Security',
    question: "What is `Platform-as-a-Service` (PaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the platform and the user manages the application.", "A cloud computing model where the user manages the servers.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the platform and the user manages the application."],
    difficulty: "Medium",
    hint: "PaaS gives developers a platform to build and run applications without worrying about the underlying infrastructure."
  },
  {
    id: 'q11-18',
    domain: '11.0 Cloud Security',
    question: "What is `Infrastructure-as-a-Service` (IaaS)? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the software.", "A cloud computing model where the provider manages the platform and the user manages the application.", "A cloud computing model where the provider manages the infrastructure and the user manages the operating system and applications.", "A cloud computing model where the provider manages the infrastructure."],
    correctAnswers: ["A cloud computing model where the provider manages the infrastructure and the user manages the operating system and applications."],
    difficulty: "Medium",
    hint: "IaaS gives users control over the operating system and applications, but the provider manages the servers and storage."
  },
  {
    id: 'q11-19',
    domain: '11.0 Cloud Security',
    question: "What is `serverless computing`? Relevance to SY0-701: Cloud computing models.",
    options: ["A cloud computing model where the provider manages the servers.", "A cloud computing model where the user manages the servers.", "A cloud computing model where there are no servers.", "A cloud computing model where the provider manages the database."],
    correctAnswers: ["A cloud computing model where the provider manages the servers."],
    difficulty: "Medium",
    hint: "Serverless computing means you don't have to worry about provisioning or managing servers."
  },
  {
    id: 'q11-20',
    domain: '11.0 Cloud Security',
    question: "What is the purpose of `cloud access security broker` (CASB)? Relevance to SY0-701: Cloud security tools.",
    options: ["A security tool that helps organizations enforce security policies in the cloud.", "A security tool that helps organizations manage their on-premises security.", "A security tool that helps organizations manage their network.", "A security tool that helps organizations manage their firewalls."],
    correctAnswers: ["A security tool that helps organizations enforce security policies in the cloud."],
    difficulty: "Hard",
    hint: "A CASB acts as a gatekeeper for cloud services."
  },
];

const QuizApp = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(75 * 60); // 75 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());

  const isMobile = useIsMobile(768); // Using the custom hook
  const timerRef = useRef();

  useEffect(() => {
    // This effect handles the countdown timer
    if (examStarted && !isPaused && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && examStarted) {
      handleFinishExam();
    }
    return () => clearInterval(timerRef.current);
  }, [examStarted, isPaused, timeRemaining]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startNewExam = () => {
    // Shuffle the entire pool of 200 questions and select the first 100 for the exam.
    const shuffledQuestions = shuffleArray(questionsPool);
    const selectedQuestions = shuffledQuestions.slice(0, 100);
    setCurrentQuestions(selectedQuestions);
    setUserAnswers(new Array(selectedQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setExamStarted(true);
    setExamFinished(false);
    setShowResults(false);
    setShowHint(false);
    setReviewMode(false);
    setFlaggedQuestions(new Set());
    setTimeRemaining(75 * 60);
    setIsPaused(false);
    setShowNavigation(false);
  };

  const handleAnswerChange = (option) => {
    const newAnswers = [...userAnswers];
    if (newAnswers[currentQuestionIndex] === option) {
      newAnswers[currentQuestionIndex] = null; // Deselect if already selected
    } else {
      newAnswers[currentQuestionIndex] = option;
    }
    setUserAnswers(newAnswers);
  };

  const handleFinishExam = () => {
    clearInterval(timerRef.current);
    setExamFinished(true);
    setShowResults(true);
    setReviewMode(true);
  };

  const calculateScore = () => {
    let score = 0;
    currentQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (question.correctAnswers.includes(userAnswer)) {
        score++;
      }
    });
    return score;
  };

  const handleToggleFlag = () => {
    const newFlags = new Set(flaggedQuestions);
    if (newFlags.has(currentQuestionIndex)) {
      newFlags.delete(currentQuestionIndex);
    } else {
      newFlags.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlags);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    const question = currentQuestions[currentQuestionIndex];
    if (!question) return null;

    const isCorrect = question.correctAnswers.includes(userAnswers[currentQuestionIndex]);
    const isAnswered = userAnswers[currentQuestionIndex] !== null;

    return (
      <div className="flex flex-col flex-grow p-4 md:p-8 bg-gray-800 rounded-lg shadow-2xl space-y-6 overflow-y-auto max-h-[80vh]">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
          <span className="text-xl font-bold text-blue-400">
            Question {currentQuestionIndex + 1} of {currentQuestions.length}
          </span>
          <span className="text-sm text-gray-400 font-mono">Domain: {question.domain}</span>
          <div className="flex space-x-2">
            {!showResults && (
              <button
                onClick={handleToggleFlag}
                className={`p-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  flaggedQuestions.has(currentQuestionIndex)
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                <Flag size={18} />
                <span>{flaggedQuestions.has(currentQuestionIndex) ? 'Unflag' : 'Flag'}</span>
              </button>
            )}
            <button
              onClick={() => setShowHint(!showHint)}
              className={`p-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                showHint ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>
        </div>

        <p className="text-xl text-gray-200 leading-relaxed font-semibold">
          {question.question}
        </p>

        {showHint && (
          <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
            <h4 className="text-lg text-indigo-300 font-bold mb-2">Hint:</h4>
            <p className="text-gray-300">{question.hint}</p>
          </div>
        )}

        <div className="space-y-4 flex-grow">
          {question.options.map((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === option;
            let className = `p-4 rounded-lg cursor-pointer transition-all duration-200 border-2`;
            let icon = null;

            if (reviewMode) {
              if (question.correctAnswers.includes(option)) {
                className += ` bg-green-900 border-green-500 text-green-300 font-semibold`;
                icon = <CheckCircle2 size={20} className="text-green-400" />;
              } else if (isSelected) {
                className += ` bg-red-900 border-red-500 text-red-300 font-semibold`;
                icon = <XCircle size={20} className="text-red-400" />;
              } else {
                className += ` bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600`;
              }
            } else {
              className += ` ${isSelected ? 'bg-blue-600 border-blue-400 text-white font-bold' : 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600'}`;
            }

            return (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={className}
                  onClick={() => !reviewMode && handleAnswerChange(option)}
                >
                  <span className="flex items-center space-x-3">
                    {icon}
                    <span className="flex-1">{option}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNavigation = () => (
    <div className={`p-4 bg-gray-800 rounded-lg shadow-2xl overflow-y-auto ${isMobile ? '' : 'h-[80vh] w-64'}`}>
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-700">
        <h3 className="text-lg font-bold text-gray-200">Questions</h3>
        <button
          onClick={() => setShowNavigation(false)}
          className="md:hidden p-1 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600"
        >
          <XCircle size={20} />
        </button>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-4 gap-2">
        {currentQuestions.map((q, index) => {
          const isAnswered = userAnswers[index] !== null;
          const isCurrent = index === currentQuestionIndex;
          const isFlagged = flaggedQuestions.has(index);

          let buttonClass = 'w-8 h-8 flex items-center justify-center rounded-md font-bold text-sm transition-all duration-200';
          if (isCurrent) {
            buttonClass += ' bg-blue-500 text-white ring-2 ring-blue-300';
          } else if (isFlagged) {
            buttonClass += ' bg-red-500 text-white';
          } else if (isAnswered) {
            buttonClass += ' bg-green-600 text-white hover:bg-green-700';
          } else {
            buttonClass += ' bg-gray-600 text-gray-300 hover:bg-gray-500';
          }

          return (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(index)}
              className={buttonClass}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Legend:</h4>
        <div className="flex items-center space-x-2 mb-1">
          <span className="w-4 h-4 bg-blue-500 rounded-sm"></span>
          <span className="text-sm text-gray-300">Current Question</span>
        </div>
        <div className="flex items-center space-x-2 mb-1">
          <span className="w-4 h-4 bg-green-600 rounded-sm"></span>
          <span className="text-sm text-gray-300">Answered</span>
        </div>
        <div className="flex items-center space-x-2 mb-1">
          <span className="w-4 h-4 bg-red-500 rounded-sm"></span>
          <span className="text-sm text-gray-300">Flagged</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-gray-600 rounded-sm"></span>
          <span className="text-sm text-gray-300">Unanswered</span>
        </div>
      </div>
    </div>
  );

  const renderResults = () => {
    const score = calculateScore();
    const totalQuestions = currentQuestions.length;
    const scorePercentage = (score / totalQuestions) * 100;
    const isPassing = scorePercentage >= 85; // A common passing score for such exams
    const isAnswered = userAnswers.filter(answer => answer !== null).length;
    const unanswered = totalQuestions - isAnswered;

    return (
      <div className="flex flex-col items-center justify-center flex-grow p-8 bg-gray-800 rounded-lg shadow-2xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4">Exam Results</h1>
        <p className={`text-6xl font-extrabold mb-4 ${isPassing ? 'text-green-400' : 'text-red-400'}`}>
          {scorePercentage.toFixed(0)}%
        </p>
        <p className="text-2xl text-gray-200 mb-6">
          You answered {score} out of {totalQuestions} questions correctly.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <p className="text-xl font-bold text-green-400">{score}</p>
            <p className="text-sm text-gray-400">Correct</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <p className="text-xl font-bold text-red-400">{totalQuestions - score - unanswered}</p>
            <p className="text-sm text-gray-400">Incorrect</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <p className="text-xl font-bold text-yellow-400">{unanswered}</p>
            <p className="text-sm text-gray-400">Unanswered</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => {
              setReviewMode(true);
              setShowResults(false);
              setCurrentQuestionIndex(0);
            }}
            className="p-4 rounded-lg bg-indigo-600 text-white text-xl font-bold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <RefreshCw size={24} />
            <span>Review Exam</span>
          </button>
          <button
            onClick={() => startNewExam()}
            className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Play size={24} />
            <span>Start New Exam</span>
          </button>
        </div>
      </div>
    );
  };

  if (!examStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 text-center">
          CompTIA Security+ SY0-701 Practice Exam
        </h1>
        <p className="text-lg text-center mb-6 max-w-md">
          This practice exam consists of 100 questions pulled from a pool of 200,
          covering all the key objectives for the SY0-701 certification. You will have 75 minutes to complete the test.
        </p>
        <button
          onClick={startNewExam}
          className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200"
        >
          Start Exam
        </button>
      </div>
    );
  }

  if (examFinished && showResults) {
    return renderResults();
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 p-4">
        {showNavigation ? (
          renderNavigation()
        ) : (
          <>
            <div className="flex justify-between items-center p-2 bg-gray-800 rounded-lg shadow-lg mb-4">
              <button
                onClick={() => setShowNavigation(true)}
                className="p-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600"
              >
                <ChevronDown size={24} />
              </button>
              <div className="text-xl font-mono">{formatTime(timeRemaining)}</div>
              {isPaused ? (
                <button
                  onClick={() => setIsPaused(false)}
                  className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  <Play size={24} />
                </button>
              ) : (
                <button
                  onClick={() => setIsPaused(true)}
                  className="p-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700"
                >
                  <Pause size={24} />
                </button>
              )}
            </div>
            <div className="flex-grow flex flex-col space-y-4">
              {renderQuestion()}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="p-4 rounded-lg bg-gray-700 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
              >
                <ArrowLeft size={24} />
                <span>Prev</span>
              </button>
              {isLastQuestion ? (
                <button
                  onClick={handleFinishExam}
                  className="p-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Finish Exam</span>
                  <CheckCircle2 size={24} />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="p-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight size={24} />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  // Desktop view
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 p-8 space-x-8">
      <div className="flex flex-col flex-grow w-3/4 space-y-8">
        <div className="flex justify-between items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-2xl font-bold">
            {reviewMode ? "Review Mode" : "Exam in Progress"}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-mono text-blue-300">{formatTime(timeRemaining)}</span>
            {reviewMode ? (
              <button
                onClick={() => startNewExam()}
                className="p-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Play size={24} />
                <span>Start New Exam</span>
              </button>
            ) : (
              isPaused ? (
                <>
                  <button
                    onClick={() => setIsPaused(false)}
                    className="p-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Play size={24} />
                    <span>Resume Exam</span>
                  </button>
                  <button
                    onClick={handleFinishExam}
                    className="p-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <XCircle size={24} />
                    <span>End Exam</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsPaused(true)}
                  className="p-3 rounded-lg bg-yellow-600 text-white font-bold hover:bg-yellow-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Pause size={24} />
                  <span>Pause Exam</span>
                </button>
              )
            )}
            <button
              onClick={handleFinishExam}
              className="p-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <CheckCircle2 size={24} />
              <span>Finish Exam</span>
            </button>
          </div>
        </div>
        {renderQuestion()}
        <div className="flex justify-between items-center mt-auto p-4 bg-gray-800 rounded-lg shadow-lg">
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className="p-4 rounded-lg bg-gray-700 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
          >
            <ArrowLeft size={24} />
            <span>Previous</span>
          </button>
          <span className="text-xl font-bold text-gray-300">
            {currentQuestionIndex + 1} / {currentQuestions.length}
          </span>
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.min(currentQuestions.length - 1, prev + 1))}
            disabled={isLastQuestion}
            className="p-4 rounded-lg bg-blue-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <span>Next</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="w-1/4">
        {renderNavigation()}
      </div>
    </div>
  );
};

export default QuizApp;