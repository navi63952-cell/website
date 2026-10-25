document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATION DICTIONARY ---
    const translations = {
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_solutions: "Solutions",
            nav_contact: "Contact",
            hero_tag: "COGNITIVE ARCHITECTS",
            hero_subtitle: "AI AUTOMATION & INTELLIGENT AGENTS",
            hero_scroll: "SCROLL",
            title_capabilities: "CAPABILITIES",
            cap_cost_lbl: "Monthly Cost",
            cap_savings_lbl: "Min. Savings",
            cap_savings_val_500: "€500/mo",
            cap_savings_val_200: "€200/mo",
            cap_savings_val_300: "€300/mo",
            cap_savings_val_1000: "€1,000/mo",
            title_solutions: "SOLUTIONS",
            sol_action_btn: "EXPLORE IMPLEMENTATION",
            sol_tag_1: "FINANCIAL AUTOMATION",
            sol_desc_1: "An autonomous AI compliance and data synthesis engine designed to reconcile thousands of international invoices against shifting regulations in real-time.",
            sol_tag_2: "HEALTHCARE WORKFLOWS",
            sol_desc_2: "A secure agentic framework that extracts clinical records from legacy EHR structures, synthesizes patient histories, and alerts staff to key indicators.",
            sol_tag_3: "LOGISTICS & SYSTEMS",
            sol_desc_3: "An autonomous route planning and supply network AI system reacting dynamically to climate anomalies, shipping rates, and warehouse capacity feeds.",
            sync_text: "Syncing",
            stat_lbl_eff: "Efficiency",
            stat_lbl_acc: "Accuracy",
            stat_lbl_time: "Audit Time",
            stat_lbl_sec: "Security",
            stat_lbl_savings: "Fuel Savings",
            stat_lbl_risk: "Delay Risk",
            anon_active: "Anonymization Active",
            title_engage: "ENGAGE",
            contact_sub: "Let's build intelligent agency systems together.",
            contact_hq_lbl: "HEADQUARTERS",
            contact_talk_lbl: "TALK TO US",
            contact_sec_lbl: "SECURE ENCRYPTION",
            contact_sec_val: "PGP Key available upon request",
            contact_form_title: "INITIATE INQUIRY",
            lbl_name: "Your Name",
            lbl_email: "Corporate Email",
            lbl_org: "Organization / Agency",
            lbl_msg: "Define the Challenge / Objective",
            btn_submit: "TRANSMIT REQUISITION",
            msg_sending: "ESTABLISHING CHANNEL...",
            msg_sent: "SECURE CHANNEL ESTABLISHED. INQUIRY TRANSMITTED SUCCESSFULLY.",
            cap_title_1: "AI Receptionist",
            cap_use_1: "Useful for automated call answering, routing, and answering front-desk FAQs instantly 24/7.",
            cap_title_2: "AI Customer Support",
            cap_use_2: "Useful for handling high-volume customer inquiries, resolving tickets, and processing returns instantly.",
            cap_title_3: "AI Appointment Booking",
            cap_use_3: "Useful for syncing calendars, scheduling meetings, sending reminders, and reducing booking drop-offs.",
            cap_title_4: "AI Email Assistant",
            cap_use_4: "Useful for drafting professional replies, triaging inbox overflow, and auto-categorizing client requests.",
            cap_title_5: "AI Lead Gen Agent",
            cap_use_5: "Useful for crawling web sources, qualifying inbound leads, and building qualified marketing lists.",
            cap_title_6: "AI Sales Assistant",
            cap_use_6: "Useful for executing follow-ups, presenting pitch documents, and handling objections.",
            cap_title_7: "AI Data Entry",
            cap_use_7: "Useful for extracting text from paperwork, importing records, and syncing databases.",
            cap_title_8: "AI Invoice Processing",
            cap_use_8: "Useful for parsing bills, matching line items, verifying totals, and marking anomalies.",
            cap_title_9: "AI Social Media",
            cap_use_9: "Useful for writing creative captions, scheduling posts, and tracking audience engagement.",
            cap_title_10: "AI Review Management",
            cap_use_10: "Useful for monitoring reviews, drafting responses, and auto-flagging negative feedback.",
            cap_title_11: "AI Meeting Notes",
            cap_use_11: "Useful for transcribing calls, extracting key action items, and summarizing decisions.",
            cap_title_12: "AI HR Screening",
            cap_use_12: "Useful for parsing resumes, checking candidate requirements, and scheduling interviews.",
            cap_title_13: "AI Document Assistant",
            cap_use_13: "Useful for summarizing PDFs, generating contracts, and searching guidelines.",
            cap_title_14: "AI Knowledge Base",
            cap_use_14: "Useful for answering employee questions using internal manuals and documentation.",
            cap_title_15: "AI WhatsApp Agent",
            cap_use_15: "Useful for instant messaging, sending shipping updates, and taking orders on mobile devices.",
            cap_title_16: "AI Follow-Up Agent",
            cap_use_16: "Useful for maintaining contact with cold leads, sending check-ins, and recovering checkouts.",
            cap_title_17: "AI Analytics Assistant",
            cap_use_17: "Useful for interpreting spreadsheets, highlighting sales trends, and generating reports.",
            cap_title_18: "AI Inventory Assistant",
            cap_use_18: "Useful for forecasting stock demands, alerting restocks, and optimizing supply lines."
        },
        it: {
            nav_home: "Home",
            nav_services: "Servizi",
            nav_solutions: "Soluzioni",
            nav_contact: "Contatti",
            hero_tag: "ARCHITETTI COGNITIVI",
            hero_subtitle: "AUTOMAZIONE AI E AGENTI INTELLIGENTI",
            hero_scroll: "SCORRI",
            title_capabilities: "POTENZIALITÀ",
            cap_cost_lbl: "Costo Mensile",
            cap_savings_lbl: "Risparmio Minimo",
            cap_savings_val_500: "€500/mese",
            cap_savings_val_200: "€200/mese",
            cap_savings_val_300: "€300/mese",
            cap_savings_val_1000: "€1.000/mese",
            title_solutions: "SOLUZIONI",
            sol_action_btn: "ESPLORA INTEGRAZIONE",
            sol_tag_1: "AUTOMAZIONE FINANZIARIA",
            sol_desc_1: "Un motore autonomo di conformità e sintesi dati progettato per riconciliare migliaia di fatture internazionali rispetto a regolamenti mutevoli in tempo reale.",
            sol_tag_2: "FLUSSI DI LAVORO SANITARI",
            sol_desc_2: "Una struttura sicura ad agenti che estrae record clinici da EHR legacy, sintetizza storie dei pazienti e allerta lo staff.",
            sol_tag_3: "LOGISTICA & SISTEMI",
            sol_desc_3: "Sistema AI autonomo per la pianificazione delle rotte e la rete di fornitura che reagisce alle anomalie climatiche.",
            sync_text: "Sincronizzazione",
            stat_lbl_eff: "Efficienza",
            stat_lbl_acc: "Accuratezza",
            stat_lbl_time: "Tempo Audit",
            stat_lbl_sec: "Sicurezza",
            stat_lbl_savings: "Risparmio Carburante",
            stat_lbl_risk: "Rischio Ritardo",
            anon_active: "Anonimizzazione Attiva",
            title_engage: "COLLABORA",
            contact_sub: "Costruiamo insieme sistemi di agenzia intelligenti.",
            contact_hq_lbl: "SEDE CENTRALE",
            contact_talk_lbl: "PARLA CON NOI",
            contact_sec_lbl: "CRITTOGRAFIA SICURA",
            contact_sec_val: "Chiave PGP disponibile su richiesta",
            contact_form_title: "INVIA RICHIESTA",
            lbl_name: "Tuo Nome",
            lbl_email: "Email Aziendale",
            lbl_org: "Organizzazione / Agenzia",
            lbl_msg: "Definisci la Sfida / Obiettivo",
            btn_submit: "TRASMETTI RICHIESTA",
            msg_sending: "CONNESSIONE CANALE...",
            msg_sent: "CANALE SICURO ATTIVATO. INCHIESTA INVIATA CON SUCCESSO.",
            cap_title_1: "Receptionist AI",
            cap_use_1: "Utile per la risposta automatica alle chiamate, l'instradamento e le FAQ del front-desk 24/7.",
            cap_title_2: "Agente Supporto Clienti AI",
            cap_use_2: "Utile per gestire grandi volumi di richieste clienti, risolvere ticket e resi istantaneamente.",
            cap_title_3: "Prenotazione Appuntamenti AI",
            cap_use_3: "Utile per sincronizzare calendari, pianificare riunioni, inviare promemoria e ridurre i drop-off.",
            cap_title_4: "Assistente Email AI",
            cap_use_4: "Utile per redigere risposte professionali, gestire la posta e smistare richieste clienti.",
            cap_title_5: "Agente Lead Generation AI",
            cap_use_5: "Utile per scansionare fonti web, qualificare lead in entrata e creare elenchi di marketing.",
            cap_title_6: "Assistente Vendite AI",
            cap_use_6: "Utile per gestire follow-up, presentare documenti di vendita e superare obiezioni.",
            cap_title_7: "Assistente Inserimento Dati AI",
            cap_use_7: "Utile per estrarre testi da moduli cartacei, importare record e allineare database.",
            cap_title_8: "Gestione Fatture AI",
            cap_use_8: "Utile per analizzare bollette, verificare totali, associare articoli e segnalare anomalie.",
            cap_title_9: "Assistente Social Media AI",
            cap_use_9: "Utile per creare testi per post, pianificare calendari editoriali e monitorare l'engagement.",
            cap_title_10: "Gestione Recensioni AI",
            cap_use_10: "Utile per monitorare feedback, formulare risposte educate e segnalare recensioni negative.",
            cap_title_11: "Verbali Riunioni AI",
            cap_use_11: "Utile per trascrivere chiamate, estrarre punti d'azione e riassumere decisioni.",
            cap_title_12: "Screening Candidati AI",
            cap_use_12: "Utile per analizzare curriculum, verificare requisiti e pianificare primi colloqui.",
            cap_title_13: "Assistente Documenti AI",
            cap_use_13: "Utile per sintetizzare PDF, generare bozze contrattuali e cercare tra le linee guida.",
            cap_title_14: "Assistente Knowledge Base AI",
            cap_use_14: "Utile per rispondere alle domande dei dipendenti usando manuali interni dell'azienda.",
            cap_title_15: "Assistente WhatsApp AI",
            cap_use_15: "Utile per messaggistica istantanea, invio di aggiornamenti spedizioni e ordini via mobile.",
            cap_title_16: "Agente Follow-Up AI",
            cap_use_16: "Utile per mantenere i contatti con lead freddi, inviare check-in e recuperare carrelli.",
            cap_title_17: "Assistente Analisi AI",
            cap_use_17: "Utile per interpretare fogli di calcolo, identificare trend e generare report visivi.",
            cap_title_18: "Gestione Inventario AI",
            cap_use_18: "Utile per prevedere la domanda, notificare i riassortimenti e ottimizzare gli approvvigionamenti."
        },
        de: {
            nav_home: "Startseite",
            nav_services: "Leistungen",
            nav_solutions: "Lösungen",
            nav_contact: "Kontakt",
            hero_tag: "KOGNITIVE ARCHITEKTEN",
            hero_subtitle: "KI-AUTOMATISIERUNG & INTELLIGENTE AGENTEN",
            hero_scroll: "SCROLLEN",
            title_capabilities: "KAPAZITÄTEN",
            cap_cost_lbl: "Monatliche Kosten",
            cap_savings_lbl: "Min. Ersparnis",
            cap_savings_val_500: "€500/Monat",
            cap_savings_val_200: "€200/Monat",
            cap_savings_val_300: "€300/Monat",
            cap_savings_val_1000: "€1.000/Monat",
            title_solutions: "LÖSUNGEN",
            sol_action_btn: "INTEGRATION ERFORSCHEN",
            sol_tag_1: "FINANZAUTOMATISIERUNG",
            sol_desc_1: "Ein autonomes KI-Compliance-System zur Echtzeit-Abstimmung tausender internationaler Rechnungen gegen wechselnde Gesetze.",
            sol_tag_2: "MEDIZINISCHE WORKFLOWS",
            sol_desc_2: "Ein sicheres agentisches Framework, das klinische Daten extrahiert, Patientenhistorien synthetisiert und warnt.",
            sol_tag_3: "LOGISTIK & SYSTEME",
            sol_desc_3: "Ein autonomes Routenplanungs- und Liefernetz-KI-System, das auf Klimaanomalien reagiert.",
            sync_text: "Synchronisieren",
            stat_lbl_eff: "Effizienz",
            stat_lbl_acc: "Genauigkeit",
            stat_lbl_time: "Prüfzeit",
            stat_lbl_sec: "Sicherheit",
            stat_lbl_savings: "Kraftstoffersparnis",
            stat_lbl_risk: "Verzögerungsrisiko",
            anon_active: "Anonymisierung Aktiv",
            title_engage: "ENGAGIEREN",
            contact_sub: "Lassen Sie uns gemeinsam intelligente Agentensysteme bauen.",
            contact_hq_lbl: "HAUPTSITZ",
            contact_talk_lbl: "KONTAKTIEREN SIE UNS",
            contact_sec_lbl: "SICHERE VERSCHLÜSSELUNG",
            contact_sec_val: "PGP-Schlüssel auf Anfrage erhältlich",
            contact_form_title: "ANFRAGE STARTEN",
            lbl_name: "Ihr Name",
            lbl_email: "Firmen-E-Mail",
            lbl_org: "Organisation / Agentur",
            lbl_msg: "Definieren Sie die Aufgabe / das Ziel",
            btn_submit: "ANFRAGE ÜBERMITTELN",
            msg_sending: "VERBINDUNG WIRD HERGESTELLT...",
            msg_sent: "SICHERER KANAL AKTIVIERT. ANFRAGE ERFOLGREICH ÜBERMITTELT.",
            cap_title_1: "KI-Empfangsmitarbeiter",
            cap_use_1: "Nützlich für die automatische Beantwortung von Anrufen, Weiterleitung und FAQs rund um die Uhr.",
            cap_title_2: "KI-Kundensupport-Agent",
            cap_use_2: "Nützlich für die Bewältigung großer Support-Volumina, Ticketlösung und Retourenbearbeitung.",
            cap_title_3: "KI-Terminbuchung",
            cap_use_3: "Nützlich zur Synchronisierung von Kalendern, Terminplanung und Reduzierung von Ausfällen.",
            cap_title_4: "KI-E-Mail-Assistent",
            cap_use_4: "Nützlich für professionelle Antworten, Posteingangs-Triage und Kategorisierung von Anfragen.",
            cap_title_5: "KI-Leadgenerierungs-Agent",
            cap_use_5: "Nützlich zum Durchsuchen von Webquellen, Qualifizieren von Leads und Erstellen von Listen.",
            cap_title_6: "KI-Vertriebsassistent",
            cap_use_6: "Nützlich für die Durchführung von Follow-ups, Präsentation und Einwandbehandlung.",
            cap_title_7: "KI-Datenerfassung",
            cap_use_7: "Nützlich zur Textextraktion aus Formularen, Datenimport und Abgleich von Systemen.",
            cap_title_8: "KI-Rechnungsverarbeitung",
            cap_use_8: "Nützlich zum Auslesen von Rechnungen, Abgleichen von Positionen und Erkennen von Anomalien.",
            cap_title_9: "KI-Social-Media-Assistent",
            cap_use_9: "Nützlich für kreative Bildunterschriften, Posting-Planung und Interaktionsanalyse.",
            cap_title_10: "KI-Bewertungsmanagement",
            cap_use_10: "Nützlich für das Monitoring von Bewertungen, Entwerfen von Antworten und Melden von Kritik.",
            cap_title_11: "KI-Protokollassistent",
            cap_use_11: "Nützlich zur Transkription von Gesprächen, Extrahieren von Aufgaben und Zusammenfassen.",
            cap_title_12: "KI-Bewerber-Vorauswahl",
            cap_use_12: "Nützlich für das Filtern von Lebensläufen, Abgleich von Profilen und Einladung zum Gespräch.",
            cap_title_13: "KI-Dokumentenassistent",
            cap_use_13: "Nützlich zum Zusammenfassen von PDFs, Vertragserstellung und Durchsuchen von Richtlinien.",
            cap_title_14: "KI-Wissensdatenbank",
            cap_use_14: "Nützlich zur Beantwortung von Mitarbeiterfragen auf Basis interner Dokumente.",
            cap_title_15: "KI-WhatsApp-Assistent",
            cap_use_15: "Nützlich für Direktnachrichten, Versand von Statusupdates und Bestellungen über Mobile.",
            cap_title_16: "KI-Follow-Up-Agent",
            cap_use_16: "Nützlich zur Pflege kalter Leads, Versenden von Check-ins und Warenkorbretretung.",
            cap_title_17: "KI-Analyseassistent",
            cap_use_17: "Nützlich zur Tabellenkalkulations-Auswertung, Aufzeigen von Trends und Berichtserstellung.",
            cap_title_18: "KI-Inventarassistent",
            cap_use_18: "Nützlich zur Nachfrageprognose, Benachrichtigung bei Engpässen und Optimierung von Lieferketten."
        },
        fr: {
            nav_home: "Accueil",
            nav_services: "Services",
            nav_solutions: "Solutions",
            nav_contact: "Contact",
            hero_tag: "ARCHITECTES COGNITIFS",
            hero_subtitle: "AUTOMATISATION IA & AGENTS INTELLIGENTS",
            hero_scroll: "DEFILER",
            title_capabilities: "COMPÉTENCES",
            cap_cost_lbl: "Coût Mensuel",
            cap_savings_lbl: "Économie Min.",
            cap_savings_val_500: "€500/mois",
            cap_savings_val_200: "€200/mois",
            cap_savings_val_300: "€300/mois",
            cap_savings_val_1000: "€1 000/mois",
            title_solutions: "SOLUTIONS",
            sol_action_btn: "EXPLORER L'INTÉGRATION",
            sol_tag_1: "AUTOMATISATION FINANCIÈRE",
            sol_desc_1: "Un moteur autonome de conformité et synthèse des données pour rapprocher les factures internationales en temps réel.",
            sol_tag_2: "FLUX DE TRAVAIL SANTÉ",
            sol_desc_2: "Un framework d'agents sécurisé qui extrait les dossiers cliniques EHR, synthétise l'historique et alerte.",
            sol_tag_3: "LOGISTIQUE & SYSTÈMES",
            sol_desc_3: "Un système d'IA autonome pour la planification des itinéraires réagissant aux changements climatiques.",
            sync_text: "Synchronisation",
            stat_lbl_eff: "Efficacité",
            stat_lbl_acc: "Précision",
            stat_lbl_time: "Temps d'Audit",
            stat_lbl_sec: "Sécurité",
            stat_lbl_savings: "Économie Carburant",
            stat_lbl_risk: "Risque de Retard",
            anon_active: "Anonymisation Active",
            title_engage: "COLLABORER",
            contact_sub: "Construisons ensemble des systèmes d'agents intelligents.",
            contact_hq_lbl: "SIÈGE SOCIAL",
            contact_talk_lbl: "CONTACTEZ-NOUS",
            contact_sec_lbl: "CHIFFREMENT SÉCURISÉ",
            contact_sec_val: "Clé PGP disponible sur demande",
            contact_form_title: "LANCER UNE DEMANDE",
            lbl_name: "Votre Nom",
            lbl_email: "E-mail Professionnel",
            lbl_org: "Organisation / Agence",
            lbl_msg: "Définissez le Défi / l'Objectif",
            btn_submit: "TRANSMETTRE LA DEMANDE",
            msg_sending: "ÉTABLISSEMENT DU CANAL...",
            msg_sent: "CANAL SÉCURISÉ ÉTABLI. REQUÊTE TRANSMISE AVEC SUCCÈS.",
            cap_title_1: "Réceptionniste IA",
            cap_use_1: "Utile pour répondre aux appels, rediriger les demandes et gérer la FAQ d'accueil 24h/24 et 7j/7.",
            cap_title_2: "Agent Support Client IA",
            cap_use_2: "Utile pour gérer d'importants volumes de requêtes clients et résoudre les tickets de retour.",
            cap_title_3: "Réservation Rendez-Vous IA",
            cap_use_3: "Utile pour synchroniser les agendas, planifier les réunions et envoyer des rappels.",
            cap_title_4: "Assistant E-mail IA",
            cap_use_4: "Utile pour rédiger des réponses, trier la boîte de réception et catégoriser les demandes client.",
            cap_title_5: "Agent Lead Gen IA",
            cap_use_5: "Utile pour analyser le Web, qualifier les leads entrants et créer des listes marketing.",
            cap_title_6: "Assistant Ventes IA",
            cap_use_6: "Utile pour assurer les suivis, présenter des offres et répondre aux objections de vente.",
            cap_title_7: "Saisie de Données IA",
            cap_use_7: "Utile pour extraire les textes des formulaires, importer les fiches et synchroniser les bases de données.",
            cap_title_8: "Traitement Factures IA",
            cap_use_8: "Utile pour analyser les factures, valider les totaux et détecter les anomalies.",
            cap_title_9: "Assistant Réseaux Sociaux IA",
            cap_use_9: "Utile pour rédiger des légendes, planifier des posts et analyser l'engagement de l'audience.",
            cap_title_10: "Gestion Avis Client IA",
            cap_use_10: "Utile pour suivre les avis en ligne, rédiger les réponses et signaler les avis malveillants.",
            cap_title_11: "Comptes Rendus Réunion IA",
            cap_use_11: "Utile pour transcrire les appels, synthétiser les décisions et lister les actions requises.",
            cap_title_12: "Sélection Recrutement IA",
            cap_use_12: "Utile pour analyser les CV, vérifier les prérequis candidats et planifier les entretiens.",
            cap_title_13: "Assistant Documents IA",
            cap_use_13: "Utile pour résumer les PDF, rédiger des contrats et chercher dans les guides de procédures.",
            cap_title_14: "Assistant Base Connaissances IA",
            cap_use_14: "Utile pour répondre aux questions des employés via les manuels internes de l'entreprise.",
            cap_title_15: "Assistant WhatsApp IA",
            cap_use_15: "Utile pour envoyer des messages, informer du statut d'expédition et prendre des commandes sur mobile.",
            cap_title_16: "Agent Relance IA",
            cap_use_16: "Utile pour réchauffer les leads froids, envoyer des check-ins et relancer les paniers abandonnés.",
            cap_title_17: "Assistant Analyses IA",
            cap_use_17: "Utile pour décrypter les classeurs, dégager des tendances et concevoir des rapports visuels.",
            cap_title_18: "Gestion Inventaire IA",
            cap_use_18: "Utile pour anticiper la demande, signaler les ruptures et optimiser la chaîne d'approvisionnement."
        }
    };

    // Active language state (default: English)
    let currentLang = localStorage.getItem('preferredLanguage') || '';

    const applyTranslations = (lang) => {
        const dictionary = translations[lang] || translations.en;
        
        // Translate elements with [data-translate]
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (dictionary[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Placeholder translation
                    el.placeholder = dictionary[key];
                } else {
                    el.textContent = dictionary[key];
                }
            }
        });

        // Update dropdown button label
        const switchBtn = document.getElementById('langSwitchBtn');
        if (switchBtn) {
            switchBtn.textContent = lang.toUpperCase();
        }
    };

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        applyTranslations(lang);
        
        // Hide Language Overlay
        const overlay = document.getElementById('langOverlay');
        if (overlay) {
            overlay.classList.add('hidden-overlay');
        }

        // Re-trigger typing scramble title in chosen language if needed
        const scrambleTitle = document.getElementById('scramble-title');
        if (scrambleTitle) {
            scrambleTitle.innerText = "ARENCLOUD";
        }
    };

    // Initialize translations overlay or skip if already chosen
    const langOverlay = document.getElementById('langOverlay');
    if (langOverlay) {
        if (currentLang) {
            langOverlay.classList.add('hidden-overlay');
            applyTranslations(currentLang);
        } else {
            // Show selection overlay
            langOverlay.classList.remove('hidden-overlay');
        }
    }

    // Bind overlay buttons click
    document.querySelectorAll('.lang-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Bind dropdown options click
    document.querySelectorAll('.lang-dropdown span').forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // --- CURSOR GLOW EFFECT ---
    const cursorGlow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    // --- TEXT SCRAMBLE / DECRYPT ANIMATION ---
    class TextScrambler {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="d-char" style="opacity: 0.65;">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // Initialize scramble effect on titles
    const scrambleTitle = document.getElementById('scramble-title');
    if (scrambleTitle) {
        const scrambler = new TextScrambler(scrambleTitle);
        setTimeout(() => {
            scrambler.setText('ARENCLOUD');
        }, 800);
    }

    // --- INTERSECTION OBSERVER FOR SECTIONS ---
    const sections = document.querySelectorAll('.section-panel');
    const navLinks = document.querySelectorAll('.nav-link');
    const trackerDots = document.querySelectorAll('.tracker-dot');
    const activeNumberEl = document.querySelector('.active-number');

    const updateActiveUI = (index) => {
        // Update bg number text in sidepanel
        if (activeNumberEl) {
            activeNumberEl.textContent = `.0${index + 1}`;
        }
        
        // Update Navigation Links
        navLinks.forEach((link, idx) => {
            if (idx === index) link.classList.add('active');
            else link.classList.remove('active');
        });

        // Update Tracker Dots
        trackerDots.forEach((dot, idx) => {
            if (idx === index) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    };

    const observerOptions = {
        root: null,
        threshold: 0.45 // Activate when nearly 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-index'), 10);
                entry.target.classList.add('active-section');
                updateActiveUI(index);
            }
        });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));

    // --- DOTS & NAV CLICKS NAVIGATION ---
    const navigateToSection = (index) => {
        const targetSection = document.querySelector(`.section-panel[data-index="${index}"]`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const index = parseInt(link.getAttribute('data-index'), 10);
            navigateToSection(index);
        });
    });

    trackerDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            navigateToSection(index);
        });
    });

    // --- CASE STUDIES / SOLUTIONS SLIDER ---
    const slides = document.querySelectorAll('.solution-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    if (prevBtn && nextBtn && slides.length > 0) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }

    // --- CAPABILITIES HORIZONTAL CAROUSEL MOTION & DRAG ---
    const track = document.getElementById('capabilitiesCarousel');
    const progressFill = document.querySelector('.carousel-progress-fill');
    
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Drag to scroll logic
        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.classList.add('dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.classList.remove('dragging');
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.classList.remove('dragging');
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5; // scroll speed multiplier
            track.scrollLeft = scrollLeft - walk;
        });

        // Convert vertical scroll to horizontal scroll when hovering
        track.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                track.scrollLeft += e.deltaY;
            }
        }, { passive: false });

        // Update progress bar and apply 3D motion effect
        const updateCarouselMotion = () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            const currentScroll = track.scrollLeft;
            
            // Progress bar
            if (progressFill && maxScroll > 0) {
                const percentage = (currentScroll / maxScroll) * 100;
                progressFill.style.width = `${percentage}%`;
            }

            // 3D Motion (Scale and Rotation based on viewport center offset)
            const cards = track.querySelectorAll('.capability-card');
            const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;

            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const offsetFromCenter = cardCenter - trackCenter;
                const normalizedOffset = offsetFromCenter / (track.clientWidth / 2); // -1 to 1 range within track viewport

                // Clamp normalizedOffset between -1.5 and 1.5
                const clampedOffset = Math.max(-1.5, Math.min(1.5, normalizedOffset));

                // 3D Transforms (Voyager2 perspective curve)
                const scale = 1 - Math.abs(clampedOffset) * 0.12; // scales down towards edges
                const rotateY = -clampedOffset * 15; // tilts card relative to center
                const translateZ = -Math.abs(clampedOffset) * 50; // pushes card back in 3D space

                card.style.transform = `scale(${scale}) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
                
                // Adjust opacity slightly for outer cards
                const opacity = 1 - Math.abs(clampedOffset) * 0.25;
                card.style.opacity = Math.max(0.5, opacity);
            });
        };

        // Scroll listener triggers motion update
        track.addEventListener('scroll', updateCarouselMotion);
        
        // Initial call and observer trigger to update state on load
        setTimeout(updateCarouselMotion, 100);
        window.addEventListener('resize', updateCarouselMotion);
    }

    // --- CONTACT FORM INQUIRY SUBMISSION ---
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.textContent;
            
            // Loading State
            btnText.textContent = "ESTABLISHING CHANNEL...";
            submitBtn.disabled = true;
            formFeedback.className = "form-feedback-message";
            formFeedback.textContent = "";

            // Simulate AI agency communication
            setTimeout(() => {
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show Success Feedback
                formFeedback.className = "form-feedback-message success";
                formFeedback.textContent = "SECURE CHANNEL ESTABLISHED. INQUIRY TRANSMITTED SUCCESSFULLY.";
                
                // Reset form
                contactForm.reset();
            }, 1800);
        });
    }
});
