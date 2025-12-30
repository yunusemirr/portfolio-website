// Translation data for all languages
const translations = {
    tr: {
        // Navigation
        "nav.home": "Ana Sayfa",
        "nav.about": "Hakkımda",
        "nav.experience": "Deneyim",
        "nav.education": "Eğitim",
        "nav.skills": "Beceriler",
        "nav.contact": "İletişim",
        
        // Hero Section
        "hero.greeting": "Merhaba, Ben",
        "hero.title": "Bilgisayar Mühendisi",
        "hero.description": "Mobil uygulama geliştirme, yazılım geliştirme, robotik ve yapay zeka alanlarında deneyimli bir mühendis. Teknoloji eğitmenliği ve liderlik deneyimimle yenilikçi projelere katkı sağlıyorum.",
        "hero.contactBtn": "İletişime Geç",
        "hero.moreBtn": "Daha Fazla Bilgi",
        
        // Sections
        "sections.about": "Hakkımda",
        "sections.experience": "İş Deneyimi",
        "sections.education": "Eğitim",
        "sections.skills": "Beceriler",
        "sections.contact": "İletişim",
        
        // About
        "about.text1": "Ben Yunus Emir Eşkikara, 2002 Gaziantep doğumluyum. Hasan Kalyoncu Üniversitesi Bilgisayar Mühendisliği (İngilizce) bölümünden mezun oldum. Üniversite hayatım boyunca birçok öğrenci kulübünde aktif görev aldım ve Google Developer Student Clubs (GDSC) topluluğunun liderliğini yaptım.",
        "about.text2": "Kotlin, Python, C#, C++, JavaScript, Arduino ve robotik alanlarında deneyimliyim. Hem bireysel hem de ekip çalışmalarında yer alarak teknik, liderlik ve problem çözme becerilerimi geliştirdim. Hedefim yazılım ve mühendislik alanında kendimi sürekli geliştirerek yenilikçi projelere katkı sağlamaktır.",
        
        // Stats
        "stats.events": "Teknik Etkinlik",
        "stats.languages": "Programlama Dili",
        
        // Contact
        "contact.description": "Projeleriniz veya işbirliği fırsatları hakkında konuşmak isterseniz, benimle iletişime geçmekten çekinmeyin!",
        "contact.email": "E-posta",
        
        // Education
        "education.degree": "Lisans: Bilgisayar Mühendisliği",
        "education.university": "Hasan Kalyoncu Üniversitesi",
        "education.description": "Bilgisayar Mühendisliği lisans eğitimim boyunca algoritmalar, veri yapıları, yazılım geliştirme ve web teknolojileri alanlarında güçlü bir temel edindim. Akademik projeler ve teknik kulüp çalışmalarıyla pratik deneyim kazanarak takım çalışması ve problem çözme becerilerimi geliştirdim.",
        
        // Skills
        "skills.programming": "Yazılım Dilleri",
        "skills.abilities": "Yetenekler",
        "skills.languages": "Diller",
        "skills.certificates": "Sertifikalar",
        "skills.dataManagement": "Veri Yönetimi",
        "skills.mobileDev": "Mobil Uygulama Geliştirme",
        "skills.webDev": "Web Geliştirme",
        "skills.softwareDev": "Yazılım Geliştirme",
        "skills.algorithm": "Algoritma Tasarımı",
        "skills.troubleshooting": "Dijital Sorun Giderme",
        
        // Languages
        "lang.turkish": "Türkçe",
        "lang.english": "İngilizce",
        "lang.native": "Ana Dil",
        
        // Experience
        "experience.present": "Günümüz",
        "location.gaziantep": "Gaziantep, Türkiye",
        
        // Experience 1 - T3 Vakfı Technology Trainer
        "exp1.title": "Teknoloji ve Yazılım Eğitmeni (Sözleşmeli)",
        "exp1.desc1": "Yazılım Teknolojileri, Uygulamalı Yazılım Teknolojileri, İleri Robotik, Yapay Zeka ve Malzeme Bilimi & Nanoteknoloji alanlarında ilkokul ve lise gruplarına yüz yüze ve çevrim içi eğitimler veriyorum.",
        "exp1.desc2": "Ders içeriklerini yaş düzeyine uygun şekilde planlayarak uygulamalı etkinlikler, proje tabanlı öğrenme çalışmaları ve atölye uygulamaları hazırlıyorum.",
        "exp1.desc3": "Öğrencilerin teknik becerilerinin gelişimini takip ediyor, proje süreçlerinde mentorluk sağlıyor ve dönemsel değerlendirmelerle ilerlemelerini raporluyorum.",
        
        // Experience 2 - Sanko Holding Intern
        "exp2.title": "Stajyer",
        "exp2.desc1": "ERP sistemleri ve modern yazılım teknolojileri üzerine kapsamlı bir deneyim edindim.",
        "exp2.desc2": "Kurumsal iş süreçlerini analiz ederek verimliliği artırmaya yönelik çözümlerin geliştirilmesine katkı sağladım.",
        "exp2.desc3": "UiPath kullanarak RPA iş akışları tasarladım ve tekrarlayan operasyonel görevlerin otomatikleştirilmesi konusunda aktif rol üstlendim.",
        "exp2.desc4": "Uygulama geliştirme, süreç otomasyonu ve sistem entegrasyonu alanlarında ekiplerle koordineli çalışarak kurum ihtiyaçlarına uygun, sürdürülebilir ve etkili çözümler ürettim.",
        
        // Experience 3 - T3 Vakfı Material Science
        "exp3.title": "Malzeme Bilimi ve Nanoteknoloji Eğitmenliği (2 Dönem)",
        "exp3.desc1": "İki farklı dönemde (2022 ve 2024) Gaziantep Deney Atölyelerinde ilkokul ve lise öğrencilerine malzeme bilimi ve nanoteknoloji alanlarında eğitimler verdim.",
        "exp3.desc2": "İçeriklerin anlaşılır, yaş düzeyine uygun ve uygulamalı şekilde aktarılmasını sağladım.",
        "exp3.desc3": "Öğrencilerin gelişim süreçlerini düzenli olarak takip ederek velilerle etkili iletişim kurdum ve gerekli durumlarda yönlendirme ve destek sağladım.",
        
        // Experience 4 - GDSC
        "exp4.title": "Google Developer Student Clubs – Kulüp Başkanı",
        "exp4.desc1": "Kulüp başkanlığını üstlenerek yazılım ve teknoloji odaklı yaklaşık 10 teknik etkinlik ve atölye çalışmasının planlama, koordinasyon ve uygulama süreçlerini uçtan uca yönettim.",
        "exp4.desc2": "Python, JavaScript, Flutter ve web geliştirme gibi popüler teknolojilere yönelik eğitimler düzenleyerek öğrenci topluluğunun teknik gelişimine önemli katkıda bulundum.",
        "exp4.desc3": "Google teknolojileri ve geliştirici araçları konusunda farkındalık oluşturarak üniversitede aktif ve sürdürülebilir bir geliştirici topluluğu kurulmasına öncülük ettim.",
        "exp4.desc4": "İlk olarak ekip üyesi olarak başladığım süreçte, liderlik dönemimde ekip içi iletişimi ve görev dağılımını etkin yöneterek organizasyon ve iş birliği becerilerini başarıyla uyguladım.",
        
        // Certificates
        "cert1": "Malzeme Bilimi ve Nanoteknoloji Eğitmenliği",
        "cert2": "RPA Geliştirici Temel Eğitimi – UiPath",
        "cert3": "Teknofest Finalist Takım Katılım Belgesi",
        "cert4": "GDSC Lider Tamamlama Sertifikası",
        "cert5": "Udemy SAP ODATA Eğitimi",
        "cert6": "Udemy SAP ABAP İleri Düzey Eğitim",
        "cert7": "Udemy SAP ABAP CDS Eğitimi",
        
        // Footer
        "footer.rights": "Tüm hakları saklıdır."
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Hello, I'm",
        "hero.title": "Computer Engineer",
        "hero.description": "An experienced engineer in mobile application development, software development, robotics and artificial intelligence. I contribute to innovative projects with my technology training and leadership experience.",
        "hero.contactBtn": "Get In Touch",
        "hero.moreBtn": "Learn More",
        
        // Sections
        "sections.about": "About",
        "sections.experience": "Work Experience",
        "sections.education": "Education",
        "sections.skills": "Skills",
        "sections.contact": "Contact",
        
        // About
        "about.text1": "I am Yunus Emir Eşkikara, born in 2002 in Gaziantep. I graduated from Hasan Kalyoncu University Computer Engineering (English) department. Throughout my university life, I took active roles in many student clubs and led the Google Developer Student Clubs (GDSC) community.",
        "about.text2": "I am experienced in Kotlin, Python, C#, C++, JavaScript, Arduino and robotics. I have developed my technical, leadership and problem-solving skills by participating in both individual and team work. My goal is to continuously improve myself in software and engineering and contribute to innovative projects.",
        
        // Stats
        "stats.events": "Technical Events",
        "stats.languages": "Programming Languages",
        
        // Contact
        "contact.description": "If you would like to talk about your projects or collaboration opportunities, feel free to contact me!",
        "contact.email": "Email",
        
        // Education
        "education.degree": "Bachelor's: Computer Engineering",
        "education.university": "Hasan Kalyoncu University",
        "education.description": "Throughout my Computer Engineering bachelor's education, I gained a strong foundation in algorithms, data structures, software development and web technologies. I gained practical experience through academic projects and technical club work, developing my teamwork and problem-solving skills.",
        
        // Skills
        "skills.programming": "Programming Languages",
        "skills.abilities": "Abilities",
        "skills.languages": "Languages",
        "skills.certificates": "Certificates",
        "skills.dataManagement": "Data Management",
        "skills.mobileDev": "Mobile Application Development",
        "skills.webDev": "Web Development",
        "skills.softwareDev": "Software Development",
        "skills.algorithm": "Algorithm Design",
        "skills.troubleshooting": "Digital Troubleshooting",
        
        // Languages
        "lang.turkish": "Turkish",
        "lang.english": "English",
        "lang.native": "Native",
        
        // Experience
        "experience.present": "Present",
        "location.gaziantep": "Gaziantep, Turkey",
        
        // Experience 1 - T3 Vakfı Technology Trainer
        "exp1.title": "Technology and Software Trainer (Contract)",
        "exp1.desc1": "I provide face-to-face and online training to primary and high school groups in Software Technologies, Applied Software Technologies, Advanced Robotics, Artificial Intelligence and Materials Science & Nanotechnology.",
        "exp1.desc2": "I plan course content appropriate to age level and prepare practical activities, project-based learning studies and workshop applications.",
        "exp1.desc3": "I track students' technical skill development, provide mentoring in project processes and report their progress through periodic evaluations.",
        
        // Experience 2 - Sanko Holding Intern
        "exp2.title": "Intern",
        "exp2.desc1": "I gained comprehensive experience in ERP systems and modern software technologies.",
        "exp2.desc2": "I contributed to the development of solutions to increase efficiency by analyzing corporate business processes.",
        "exp2.desc3": "I designed RPA workflows using UiPath and took an active role in automating repetitive operational tasks.",
        "exp2.desc4": "I produced sustainable and effective solutions suitable for institutional needs by working in coordination with teams in application development, process automation and system integration.",
        
        // Experience 3 - T3 Vakfı Material Science
        "exp3.title": "Materials Science and Nanotechnology Training (2 Terms)",
        "exp3.desc1": "I provided training in materials science and nanotechnology to primary and high school students at Gaziantep Experience Workshops in two different terms (2022 and 2024).",
        "exp3.desc2": "I ensured that the content was conveyed in an understandable, age-appropriate and practical way.",
        "exp3.desc3": "I regularly tracked students' development processes, established effective communication with parents and provided guidance and support when necessary.",
        
        // Experience 4 - GDSC
        "exp4.title": "Google Developer Student Clubs – Club President",
        "exp4.desc1": "I managed the planning, coordination and implementation processes of approximately 10 technical events and workshops focused on software and technology by taking on the club presidency.",
        "exp4.desc2": "I made significant contributions to the technical development of the student community by organizing trainings on popular technologies such as Python, JavaScript, Flutter and web development.",
        "exp4.desc3": "I led the establishment of an active and sustainable developer community at the university by raising awareness about Google technologies and developer tools.",
        "exp4.desc4": "In the process where I started as a team member, I successfully applied organizational and collaboration skills by effectively managing team communication and task distribution during my leadership period.",
        
        // Certificates
        "cert1": "Materials Science and Nanotechnology Training",
        "cert2": "RPA Developer Basic Training – UiPath",
        "cert3": "Teknofest Finalist Team Participation Certificate",
        "cert4": "GDSC Leader Completion Certificate",
        "cert5": "Udemy SAP ODATA Training",
        "cert6": "Udemy SAP ABAP Advanced Level Training",
        "cert7": "Udemy SAP ABAP CDS Training",
        
        // Footer
        "footer.rights": "All rights reserved."
    },
    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.about": "Über mich",
        "nav.experience": "Erfahrung",
        "nav.education": "Bildung",
        "nav.skills": "Fähigkeiten",
        "nav.contact": "Kontakt",
        
        // Hero Section
        "hero.greeting": "Hallo, ich bin",
        "hero.title": "Informatikingenieur",
        "hero.description": "Ein erfahrener Ingenieur in der mobilen Anwendungsentwicklung, Softwareentwicklung, Robotik und künstlichen Intelligenz. Ich trage mit meiner Technologieausbildung und Führungserfahrung zu innovativen Projekten bei.",
        "hero.contactBtn": "Kontakt aufnehmen",
        "hero.moreBtn": "Mehr erfahren",
        
        // Sections
        "sections.about": "Über mich",
        "sections.experience": "Berufserfahrung",
        "sections.education": "Bildung",
        "sections.skills": "Fähigkeiten",
        "sections.contact": "Kontakt",
        
        // About
        "about.text1": "Ich bin Yunus Emir Eşkikara, geboren 2002 in Gaziantep. Ich habe meinen Abschluss an der Hasan Kalyoncu Universität im Fach Informatik (Englisch) gemacht. Während meines Universitätslebens habe ich in vielen Studentenclubs aktiv mitgewirkt und die Google Developer Student Clubs (GDSC) Community geleitet.",
        "about.text2": "Ich habe Erfahrung in Kotlin, Python, C#, C++, JavaScript, Arduino und Robotik. Ich habe meine technischen, Führungs- und Problemlösungsfähigkeiten durch die Teilnahme an individuellen und Teamarbeiten entwickelt. Mein Ziel ist es, mich kontinuierlich in Software und Ingenieurwesen zu verbessern und zu innovativen Projekten beizutragen.",
        
        // Stats
        "stats.events": "Technische Veranstaltungen",
        "stats.languages": "Programmiersprachen",
        
        // Contact
        "contact.description": "Wenn Sie über Ihre Projekte oder Kooperationsmöglichkeiten sprechen möchten, zögern Sie nicht, mich zu kontaktieren!",
        "contact.email": "E-Mail",
        
        // Education
        "education.degree": "Bachelor: Informatik",
        "education.university": "Hasan Kalyoncu Universität",
        "education.description": "Während meines Informatik-Bachelorstudiums habe ich eine solide Grundlage in Algorithmen, Datenstrukturen, Softwareentwicklung und Webtechnologien erworben. Durch akademische Projekte und technische Clubarbeit habe ich praktische Erfahrung gesammelt und meine Teamarbeit und Problemlösungsfähigkeiten entwickelt.",
        
        // Skills
        "skills.programming": "Programmiersprachen",
        "skills.abilities": "Fähigkeiten",
        "skills.languages": "Sprachen",
        "skills.certificates": "Zertifikate",
        "skills.dataManagement": "Datenverwaltung",
        "skills.mobileDev": "Mobile Anwendungsentwicklung",
        "skills.webDev": "Webentwicklung",
        "skills.softwareDev": "Softwareentwicklung",
        "skills.algorithm": "Algorithmusdesign",
        "skills.troubleshooting": "Digitale Fehlerbehebung",
        
        // Languages
        "lang.turkish": "Türkisch",
        "lang.english": "Englisch",
        "lang.native": "Muttersprache",
        
        // Experience
        "experience.present": "Heute",
        "location.gaziantep": "Gaziantep, Türkei",
        
        // Experience 1 - T3 Vakfı Technology Trainer
        "exp1.title": "Technologie- und Software-Trainer (Vertrag)",
        "exp1.desc1": "Ich biete Schulungen für Grund- und Oberschulgruppen in Softwaretechnologien, Angewandte Softwaretechnologien, Erweiterte Robotik, Künstliche Intelligenz und Materialwissenschaften & Nanotechnologie sowohl persönlich als auch online an.",
        "exp1.desc2": "Ich plane Kursinhalte altersgerecht und bereite praktische Aktivitäten, projektbasiertes Lernen und Workshop-Anwendungen vor.",
        "exp1.desc3": "Ich verfolge die Entwicklung der technischen Fähigkeiten der Schüler, biete Mentoring in Projektprozessen an und berichte über ihren Fortschritt durch periodische Bewertungen.",
        
        // Experience 2 - Sanko Holding Intern
        "exp2.title": "Praktikant",
        "exp2.desc1": "Ich habe umfassende Erfahrung mit ERP-Systemen und modernen Softwaretechnologien gesammelt.",
        "exp2.desc2": "Ich trug zur Entwicklung von Lösungen zur Effizienzsteigerung durch die Analyse von Unternehmensprozessen bei.",
        "exp2.desc3": "Ich entwarf RPA-Workflows mit UiPath und übernahm eine aktive Rolle bei der Automatisierung sich wiederholender operativer Aufgaben.",
        "exp2.desc4": "Ich entwickelte nachhaltige und effektive Lösungen, die den Bedürfnissen der Institution entsprechen, durch koordiniertes Arbeiten mit Teams in Anwendungsentwicklung, Prozessautomatisierung und Systemintegration.",
        
        // Experience 3 - T3 Vakfı Material Science
        "exp3.title": "Materialwissenschafts- und Nanotechnologie-Training (2 Semester)",
        "exp3.desc1": "Ich bot Schulungen in Materialwissenschaften und Nanotechnologie für Grund- und Oberschüler in den Gaziantep Experience Workshops in zwei verschiedenen Semestern (2022 und 2024) an.",
        "exp3.desc2": "Ich stellte sicher, dass die Inhalte verständlich, altersgerecht und praxisnah vermittelt wurden.",
        "exp3.desc3": "Ich verfolgte regelmäßig die Entwicklungsprozesse der Schüler, pflegte eine effektive Kommunikation mit den Eltern und bot bei Bedarf Anleitung und Unterstützung.",
        
        // Experience 4 - GDSC
        "exp4.title": "Google Developer Student Clubs – Club-Präsident",
        "exp4.desc1": "Ich leitete die Planungs-, Koordinations- und Umsetzungsprozesse von etwa 10 technischen Veranstaltungen und Workshops, die sich auf Software und Technologie konzentrierten, indem ich die Club-Präsidentschaft übernahm.",
        "exp4.desc2": "Ich trug erheblich zur technischen Entwicklung der Studentengemeinschaft bei, indem ich Schulungen zu beliebten Technologien wie Python, JavaScript, Flutter und Webentwicklung organisierte.",
        "exp4.desc3": "Ich führte die Gründung einer aktiven und nachhaltigen Entwicklergemeinschaft an der Universität an, indem ich das Bewusstsein für Google-Technologien und Entwicklertools schärfte.",
        "exp4.desc4": "In dem Prozess, in dem ich als Teammitglied begann, wandte ich organisatorische und Kooperationsfähigkeiten erfolgreich an, indem ich die Teamkommunikation und Aufgabenverteilung während meiner Führungszeit effektiv verwaltete.",
        
        // Certificates
        "cert1": "Materialwissenschafts- und Nanotechnologie-Training",
        "cert2": "RPA-Entwickler Grundausbildung – UiPath",
        "cert3": "Teknofest Finalist Team Teilnahmezertifikat",
        "cert4": "GDSC Leader Abschlusszertifikat",
        "cert5": "Udemy SAP ODATA Schulung",
        "cert6": "Udemy SAP ABAP Fortgeschrittenes Level Training",
        "cert7": "Udemy SAP ABAP CDS Schulung",
        
        // Footer
        "footer.rights": "Alle Rechte vorbehalten."
    }
};

