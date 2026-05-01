import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   BILINGUAL CONTENT
───────────────────────────────────────────── */
const CONTENT = {
  en: {
    nav: { about: "About", experience: "Experience", skills: "Skills", education: "Education", contact: "Contact" },
    langToggle: "FR",
    hero: {
      greeting: "Hello, I'm",
      name: "Nalamaharadjan DOURE",
      roles: ["Head of Quality Engineering", "QA Transformation Leader", "AI Quality Strategist", "Engineering Excellence Catalyst"],
      tagline: "I turn Quality into a",
      taglineAccent: "strategic advantage",
      description: "15+ years building high-velocity quality cultures across Travel, FinTech and B2B SaaS. Founder of QEnabler. ISTQB certified. INSEAD AI alumnus.",
      cta: "Let's Connect",
      ctaSecondary: "View Experience",
    },
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "0→8", label: "Team Built from Scratch" },
      { value: "−40%", label: "QA Sign-off Dependency" },
      { value: "−25%", label: "Critical Defects" },
      { value: "300+", label: "E2E Test Scenarios" },
      { value: "€365M", label: "Series C Company Scaled" },
    ],
    about: {
      title: "About Me",
      subtitle: "Quality Engineering Leader & AI Innovator",
      bio: "Quality Engineering Manager with 15+ years building high-velocity test cultures across Travel (Expedia/Egencia), FinTech and B2B SaaS (Ankorstore, Wakeo). Currently founder of QEnabler — an AI-driven engineering quality platform helping teams track quality maturity and surface actionable insights from test execution signals.",
      bio2: "Expert in shift-left testing, end-to-end automation (Cypress, Playwright, Selenium) and BDD/Gherkin at scale. Track record of building QA functions from scratch, scaling teams to 8 engineers, and embedding quality mindset across multi-squad organisations. Experienced in LLM evaluation (RAGAS), CI/CD integration and DORA-aligned quality metrics connecting engineering health to business outcomes.",
      pillars: [
        { icon: "🏗️", title: "Build Quality Systems", desc: "Design scalable QA strategies, test pyramids and robust automation frameworks from the ground up." },
        { icon: "🚀", title: "Scale Teams & Culture", desc: "Embed quality mindset across squads, eliminate silos and build high-performing QA functions that last." },
        { icon: "🤖", title: "Leverage AI & Data", desc: "Use LLMs, RAGAS and DORA metrics to generate actionable quality insights and predict defect-prone areas before release." },
      ],
    },
    experience: {
      title: "Proven Impact",
      subtitle: "A track record of transforming quality engineering across industries",
      present: "Present",
      jobs: [
        {
          role: "Founder",
          company: "VIDYANS — QEnabler",
          type: "AI-Driven Engineering Quality Platform · SaaS",
          period: "November 2025 – Present",
          location: "Paris, France",
          badge: "Now",
          color: "#A855F7",
          highlights: [
            "Founded QEnabler to solve a critical market gap: engineering teams lack a unified view of quality maturity across squads, making it hard to prioritise improvements or communicate quality health to leadership.",
            "Designing an AI-assisted SaaS platform that aggregates test execution data, CI/CD signals and defect trends to generate actionable quality maturity scorecards — targeting mid-size to large engineering organisations.",
            "Integrating LLM-based analysis to auto-surface root-cause patterns from test failures and predict defect-prone areas before release.",
            "Building a multi-tenant architecture with role-based dashboards for QA leads, VPs and C-level stakeholders.",
          ],
          tech: ["SaaS", "AI/LLM", "Product Design & Development"],
        },
        {
          role: "QA Lead",
          company: "Wakeo",
          type: "Supply-chain Visibility SaaS",
          period: "January 2024 – October 2025",
          location: "Paris, France",
          duration: "1 year 10 months",
          badge: "2024–25",
          color: "#3B82F6",
          highlights: [
            "Defined and executed Wakeo's QA strategy from the ground up for a fast-growing supply chain visibility SaaS product.",
            "Built the End-to-End testing framework from scratch using Cypress and Gherkin, integrated into the CI/CD pipeline — reducing regression cycle time and enabling continuous delivery across multiple squads.",
            "Designed and implemented 6 quality KPIs (defect density, escape rate, automation coverage, test effectiveness, MTTD, flakiness rate) used in quarterly product health reviews.",
            "Set up QA roadmap and OKRs aligned with product and engineering squad goals; mentored squads on shift-left testing and E2E architecture best practices.",
            "Embedded a Quality Assistance culture across 3 tribes, reducing dependency on dedicated QA sign-off for low-risk releases by 40%.",
            "Led market evaluation of automation frameworks (Playwright vs Cypress vs custom tooling), driving a cost-effective and maintainable technology choice.",
          ],
          tech: ["Playwright", "Cypress", "Gherkin (Cucumber)", "GCP", "Docker", "GitHub Actions", "Linear", "New Relic", "Notion"],
        },
        {
          role: "QA Manager",
          company: "Ankorstore",
          type: "B2B Marketplace · Series C · €365M raised",
          period: "June 2021 – June 2023",
          location: "Paris, France",
          duration: "2 years 1 month",
          badge: "2021–23",
          color: "#10B981",
          highlights: [
            "Built the QA function from scratch at a high-growth B2B marketplace (Series C, €365M raised) — hired and scaled the team from 0 to 8 engineers in under 18 months.",
            "Drafted and owned Ankorstore's QA strategy, establishing quality gates across 5+ product squads and defining career frameworks for the growing QA team.",
            "Delivered the Cypress + Gherkin E2E framework from zero; grew the test suite to 300+ scenarios integrated into CircleCI, cutting post-release critical defects by ~25%.",
            "Defined quality metrics and dashboards used by engineering leadership to monitor test effectiveness, defect escape rate and automation coverage per squad.",
            "Embedded a Quality Assistance model across tribes, shifting QA responsibility left and reducing reliance on late-stage manual testing.",
          ],
          tech: ["Cypress", "Gherkin (Cucumber)", "AWS", "JavaScript", "Docker", "GitHub Actions", "Jira", "DataDog", "Notion"],
        },
        {
          role: "Quality Engineering Manager",
          company: "Egencia (Expedia Group)",
          type: "Enterprise Corporate Travel",
          period: "March 2017 – June 2021",
          location: "Île-de-France, France",
          duration: "4 years 4 months",
          badge: "2017–21",
          color: "#F59E0B",
          highlights: [
            "Led end-to-end quality for Egencia's corporate travel platform (Expedia Group company serving millions of business travellers), overseeing release quality across multiple product teams.",
            "Managed release cycles across 3+ product lines; introduced shift-left practices and TDD that reduced regression time by ~30% via CI/CD pipeline automation (Jenkins + AWS).",
            "Defined and maintained quality metrics dashboards for engineering leadership, tracking defect escape rates, test effectiveness and automation coverage on a weekly cadence.",
            "Managed distributed outsourcing QA teams across multiple geographies, coordinating test execution, bug triage and daily reporting.",
            "Collaborated directly with Expedia parent company stakeholders on cross-platform quality standards and third-party vendor integrations.",
            "Drove product inception involvement to proactively surface quality risks early, reducing late-stage defect discovery and shortening overall release cycles.",
          ],
          tech: ["Selenium", "Cucumber", "AWS", "JavaScript", "Java", "Docker", "GitHub Actions", "Jira", "DataDog", "Confluence"],
        },
        {
          role: "Senior Software Engineer in Test",
          company: "Egencia",
          type: "Enterprise Corporate Travel",
          period: "October 2014 – March 2017",
          location: "Île-de-France, France",
          duration: "2 years 6 months",
          badge: "2014–17",
          color: "#6366F1",
          highlights: [
            "Designed and delivered a visual UI regression testing tool subsequently adopted into the core automation framework — eliminating an entire category of undetected UI regressions.",
            "Led the full migration of C# tests to Cucumber Java Selenium (BDD) framework; built and mentored a team of 3 engineers, completed on time.",
            "Upgraded the legacy automation framework to Cucumber Java Selenium, adding daily automated runs triggered on every service deployment.",
            "Built automated reporting and alerting giving the team real-time visibility into test run health without manual intervention.",
          ],
          tech: ["Selenium", "Java", "C#", "BDD", "Cucumber"],
        },
        {
          role: "Quality Engineer",
          company: "Vision IT Group (@ Egencia)",
          type: "QA Consulting",
          period: "July 2013 – September 2014",
          location: "France",
          duration: "1 year 3 months",
          badge: "2013–14",
          color: "#94A3B8",
          highlights: ["QA consultant embedded at Egencia; contributed to test plan execution and release quality for the corporate travel platform."],
          tech: [],
        },
        {
          role: "Consultant — Drupal Developer",
          company: "Capgemini Consulting",
          type: "IT Consulting · Voyages SNCF project",
          period: "September 2011 – May 2013",
          location: "France",
          duration: "1 year 9 months",
          badge: "2011–13",
          color: "#94A3B8",
          highlights: ["Front-end developer (Drupal) on the Voyages SNCF project; responsible for theme development, UAT validation and non-regression testing."],
          tech: ["Drupal", "PHP", "JavaScript"],
        },
      ],
    },
    skills: {
      title: "Core Expertise",
      subtitle: "A comprehensive toolkit for engineering quality excellence",
      categories: [
        { name: "Test Automation", icon: "⚡", color: "#3B82F6", skills: ["Cypress", "Playwright", "Selenium", "Gherkin / BDD", "Cucumber", "Visual UI Testing", "C#", "Java", "JavaScript", "Python"] },
        { name: "AI & Data Quality", icon: "🤖", color: "#A855F7", skills: ["AI Strategy", "LLM Evaluation (RAGAS)", "DORA Metrics", "Quality Analytics", "Defect Prediction", "Root-cause Analysis"] },
        { name: "Leadership & People", icon: "👑", color: "#F59E0B", skills: ["QA Strategy", "Team Building (0→8)", "Outsourcing Management", "Quality Mindset Coaching", "OKR Setting", "Career Frameworks", "Mentoring"] },
        { name: "Methodologies", icon: "📐", color: "#10B981", skills: ["Shift-Left Testing", "Risk-Based Testing", "TDD / BDD", "Agile / Scrum", "Quality Assistance", "Release Management", "Test Plan & Strategy"] },
        { name: "Cloud & DevOps", icon: "☁️", color: "#06B6D4", skills: ["AWS", "GCP", "Docker", "GitHub Actions", "Jenkins", "CircleCI", "DataDog", "New Relic"] },
        { name: "Product & Design", icon: "🎨", color: "#EC4899", skills: ["SaaS Product Development", "UI/UX Design", "Information Architecture", "Web Design Strategy", "User Interface Design"] },
      ],
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic foundation and continuous professional development",
      degree: { school: "CY Cergy Paris Université", degree: "Master (M2) — IUP SIGE", field: "Electrical Engineering & Industrial Computing", year: "2009–2010" },
      certs: [
        { name: "ISTQB", org: "International Software Testing Qualifications Board", icon: "🏆" },
        { name: "Transforming Your Business with AI", org: "INSEAD", icon: "🤖" },
        { name: "Visual Elements of User Interface Design", org: "California Institute of the Arts", icon: "🎨" },
        { name: "Web Design: Strategy & Information Architecture", org: "California Institute of the Arts", icon: "🌐" },
        { name: "UI/UX Design Specialization — Level I", org: "California Institute of the Arts", icon: "✏️" },
        { name: "UI/UX Design Specialization — Level II", org: "California Institute of the Arts", icon: "✏️" },
      ],
    },
    contact: {
      title: "Let's build quality together",
      subtitle: "Whether you're scaling your engineering team, improving quality practices, or exploring AI-driven QA — I'd love to connect and exchange ideas.",
      email: "nalanraj@gmail.com",
      linkedin: "Connect on LinkedIn",
    },
    footer: { rights: "All rights reserved", openTo: "Open to opportunities in France and internationally", languages: "French · English · Tamil" },
  },

  /* ─── FRENCH ─── */
  fr: {
    nav: { about: "À propos", experience: "Expérience", skills: "Compétences", education: "Formation", contact: "Contact" },
    langToggle: "EN",
    hero: {
      greeting: "Bonjour, je suis",
      name: "Nalamaharadjan DOURE",
      roles: ["Responsable Quality Engineering", "Leader Transformation QA", "Stratège IA & Qualité", "Catalyseur d'Excellence Engineering"],
      tagline: "Je transforme la Qualité en",
      taglineAccent: "avantage stratégique",
      description: "15+ ans à bâtir des cultures qualité haute performance dans le Voyage, la FinTech et le B2B SaaS. Fondateur de QEnabler. Certifié ISTQB. Alumnus INSEAD AI.",
      cta: "Me contacter",
      ctaSecondary: "Voir mon parcours",
    },
    stats: [
      { value: "15+", label: "Ans d'expérience" },
      { value: "0→8", label: "Équipe construite de zéro" },
      { value: "−40%", label: "Dépendance sign-off QA" },
      { value: "−25%", label: "Défauts critiques" },
      { value: "300+", label: "Scénarios E2E" },
      { value: "€365M", label: "Series C accompagné" },
    ],
    about: {
      title: "À propos",
      subtitle: "Leader en Quality Engineering & Innovateur IA",
      bio: "Quality Engineering Manager avec 15+ ans à construire des cultures de test haute performance dans le Voyage (Expedia/Egencia), la FinTech et le B2B SaaS (Ankorstore, Wakeo). Actuellement fondateur de QEnabler — une plateforme de qualité d'ingénierie pilotée par l'IA aidant les équipes à suivre leur maturité qualité et à extraire des insights actionnables depuis les signaux de test.",
      bio2: "Expert en shift-left testing, automatisation end-to-end (Cypress, Playwright, Selenium) et BDD/Gherkin à grande échelle. Expérience de construction de fonctions QA from scratch, montée en puissance d'équipes jusqu'à 8 ingénieurs, et embedding de la culture qualité dans des organisations multi-squads. Expérimenté en évaluation LLM (RAGAS), intégration CI/CD et métriques DORA connectant la santé engineering aux résultats business.",
      pillars: [
        { icon: "🏗️", title: "Construire des systèmes qualité", desc: "Concevoir des stratégies QA scalables, des pyramides de test et des frameworks d'automatisation robustes dès le départ." },
        { icon: "🚀", title: "Scaler équipes & culture", desc: "Intégrer la culture qualité dans les squads, éliminer les silos et construire des fonctions QA performantes et durables." },
        { icon: "🤖", title: "Tirer parti de l'IA & des données", desc: "Utiliser LLMs, RAGAS et métriques DORA pour générer des insights qualité actionnables et prédire les zones à risque avant release." },
      ],
    },
    experience: {
      title: "Impact Prouvé",
      subtitle: "Un parcours de transformation du quality engineering dans différents secteurs",
      present: "Présent",
      jobs: [
        {
          role: "Fondateur",
          company: "VIDYANS — QEnabler",
          type: "Plateforme IA de Qualité Engineering · SaaS",
          period: "Novembre 2025 – Présent",
          location: "Paris, France",
          badge: "Maintenant",
          color: "#A855F7",
          highlights: [
            "Fondé QEnabler pour résoudre un manque critique du marché : les équipes engineering n'ont pas de vue unifiée de leur maturité qualité, rendant difficile la priorisation des améliorations.",
            "Conception d'une plateforme SaaS IA agrégeant données d'exécution de tests, signaux CI/CD et tendances de défauts pour générer des scorecards de maturité qualité.",
            "Intégration d'analyse LLM pour identifier automatiquement les patterns de causes racines et prédire les zones à risque avant release.",
            "Architecture multi-tenant avec dashboards basés sur les rôles pour QA leads, VPs et C-level.",
          ],
          tech: ["SaaS", "IA/LLM", "Product Design & Development"],
        },
        {
          role: "QA Lead",
          company: "Wakeo",
          type: "SaaS de Visibilité Supply-chain",
          period: "Janvier 2024 – Octobre 2025",
          location: "Paris, France",
          duration: "1 an 10 mois",
          badge: "2024–25",
          color: "#3B82F6",
          highlights: [
            "Défini et exécuté la stratégie QA de Wakeo from scratch pour un produit SaaS de visibilité supply chain en forte croissance.",
            "Construit le framework de tests End-to-End from scratch avec Cypress et Gherkin, intégré dans CI/CD — réduisant le temps de cycle de régression et permettant la livraison continue.",
            "Conçu et implémenté 6 KPIs qualité (densité de défauts, taux d'échappement, couverture d'automatisation, efficacité des tests, MTTD, taux de flakiness) pour les revues produit trimestrielles.",
            "Mis en place la roadmap QA et OKRs alignés avec les objectifs produit et engineering ; mentoré les squads sur les meilleures pratiques.",
            "Intégré une culture Quality Assistance dans 3 tribus, réduisant la dépendance au sign-off QA dédié pour les releases à faible risque de 40%.",
          ],
          tech: ["Playwright", "Cypress", "Gherkin (Cucumber)", "GCP", "Docker", "GitHub Actions", "Linear", "New Relic", "Notion"],
        },
        {
          role: "QA Manager",
          company: "Ankorstore",
          type: "Marketplace B2B · Series C · €365M levés",
          period: "Juin 2021 – Juin 2023",
          location: "Paris, France",
          duration: "2 ans 1 mois",
          badge: "2021–23",
          color: "#10B981",
          highlights: [
            "Construit la fonction QA from scratch dans une marketplace B2B en forte croissance (Series C, €365M levés) — embauché et scalé l'équipe de 0 à 8 ingénieurs en moins de 18 mois.",
            "Rédigé et piloté la stratégie QA d'Ankorstore, établissant des quality gates sur 5+ squads produit et définissant des career frameworks pour l'équipe QA.",
            "Livré le framework E2E Cypress + Gherkin from zero ; suite portée à 300+ scénarios intégrés dans CircleCI, réduisant les défauts critiques post-release de ~25%.",
            "Défini métriques qualité et dashboards utilisés par le leadership engineering pour monitorer l'efficacité des tests et la couverture d'automatisation par squad.",
            "Intégré un modèle Quality Assistance dans les tribus, déplaçant la responsabilité QA en amont et réduisant les tests manuels tardifs.",
          ],
          tech: ["Cypress", "Gherkin (Cucumber)", "AWS", "JavaScript", "Docker", "GitHub Actions", "Jira", "DataDog", "Notion"],
        },
        {
          role: "Quality Engineering Manager",
          company: "Egencia (Groupe Expedia)",
          type: "Voyage d'Affaires Corporate",
          period: "Mars 2017 – Juin 2021",
          location: "Île-de-France, France",
          duration: "4 ans 4 mois",
          badge: "2017–21",
          color: "#F59E0B",
          highlights: [
            "Piloté la qualité end-to-end de la plateforme de voyage corporate d'Egencia (Groupe Expedia, millions de voyageurs d'affaires), supervisant la qualité des releases sur plusieurs équipes produit.",
            "Géré les cycles de release sur 3+ lignes produit ; introduit les pratiques shift-left et TDD réduisant le temps de régression de ~30% via l'automatisation CI/CD (Jenkins + AWS).",
            "Défini et maintenu des dashboards de métriques qualité pour le leadership engineering, suivant les taux d'échappement de défauts et la couverture d'automatisation.",
            "Géré des équipes QA distribuées en outsourcing sur plusieurs zones géographiques, coordonnant l'exécution des tests et le reporting quotidien.",
            "Collaboré directement avec les parties prenantes d'Expedia sur les standards qualité cross-platform et les intégrations fournisseurs tiers.",
          ],
          tech: ["Selenium", "Cucumber", "AWS", "JavaScript", "Java", "Docker", "GitHub Actions", "Jira", "DataDog", "Confluence"],
        },
        {
          role: "Senior Software Engineer in Test",
          company: "Egencia",
          type: "Voyage d'Affaires Corporate",
          period: "Octobre 2014 – Mars 2017",
          location: "Île-de-France, France",
          duration: "2 ans 6 mois",
          badge: "2014–17",
          color: "#6366F1",
          highlights: [
            "Conçu et livré un outil de test de régression visuelle UI adopté dans le framework d'automatisation principal — éliminant une catégorie entière de régressions UI non détectées.",
            "Piloté la migration complète des tests C# vers Cucumber Java Selenium (BDD) ; construit et mentoré une équipe de 3 ingénieurs, projet livré dans les délais.",
            "Mis à niveau le framework d'automatisation legacy avec des runs quotidiens déclenchés à chaque déploiement de service.",
          ],
          tech: ["Selenium", "Java", "C#", "BDD", "Cucumber"],
        },
        {
          role: "Quality Engineer",
          company: "Vision IT Group (@ Egencia)",
          type: "Consulting QA",
          period: "Juillet 2013 – Septembre 2014",
          location: "France",
          duration: "1 an 3 mois",
          badge: "2013–14",
          color: "#94A3B8",
          highlights: ["Consultant QA intégré chez Egencia ; contribution à l'exécution des plans de test et à la qualité des releases de la plateforme de voyage corporate."],
          tech: [],
        },
        {
          role: "Consultant — Développeur Drupal",
          company: "Capgemini Consulting",
          type: "Conseil IT · Projet Voyages SNCF",
          period: "Septembre 2011 – Mai 2013",
          location: "France",
          duration: "1 an 9 mois",
          badge: "2011–13",
          color: "#94A3B8",
          highlights: ["Développeur front-end (Drupal) sur le projet Voyages SNCF ; développement de thèmes, validation UAT et tests de non-régression."],
          tech: ["Drupal", "PHP", "JavaScript"],
        },
      ],
    },
    skills: {
      title: "Expertise Principale",
      subtitle: "Une boîte à outils complète pour l'excellence du quality engineering",
      categories: [
        { name: "Automatisation des Tests", icon: "⚡", color: "#3B82F6", skills: ["Cypress", "Playwright", "Selenium", "Gherkin / BDD", "Cucumber", "Tests de Régression Visuelle", "C#", "Java", "JavaScript", "Python"] },
        { name: "IA & Données Qualité", icon: "🤖", color: "#A855F7", skills: ["Stratégie IA", "Évaluation LLM (RAGAS)", "Métriques DORA", "Analytics Qualité", "Prédiction de Défauts", "Analyse des Causes Racines"] },
        { name: "Leadership & Personnes", icon: "👑", color: "#F59E0B", skills: ["Stratégie QA", "Construction d'Équipe (0→8)", "Management Outsourcing", "Quality Mindset Coaching", "OKRs", "Career Frameworks", "Mentorat"] },
        { name: "Méthodologies", icon: "📐", color: "#10B981", skills: ["Shift-Left Testing", "Test Basé sur les Risques", "TDD / BDD", "Agile / Scrum", "Quality Assistance", "Gestion des Releases", "Plans de Test"] },
        { name: "Cloud & DevOps", icon: "☁️", color: "#06B6D4", skills: ["AWS", "GCP", "Docker", "GitHub Actions", "Jenkins", "CircleCI", "DataDog", "New Relic"] },
        { name: "Produit & Design", icon: "🎨", color: "#EC4899", skills: ["Développement SaaS", "UI/UX Design", "Architecture de l'Information", "Stratégie Web Design", "Design d'Interface"] },
      ],
    },
    education: {
      title: "Formation & Certifications",
      subtitle: "Socle académique et développement professionnel continu",
      degree: { school: "CY Cergy Paris Université", degree: "Master (M2) — IUP SIGE", field: "Génie électrique et informatique industrielle", year: "2009–2010" },
      certs: [
        { name: "ISTQB", org: "International Software Testing Qualifications Board", icon: "🏆" },
        { name: "Transforming Your Business with AI", org: "INSEAD", icon: "🤖" },
        { name: "Visual Elements of User Interface Design", org: "California Institute of the Arts", icon: "🎨" },
        { name: "Web Design : Stratégie et Architecture de l'Information", org: "California Institute of the Arts", icon: "🌐" },
        { name: "UI/UX Design Specialization — Niveau I", org: "California Institute of the Arts", icon: "✏️" },
        { name: "UI/UX Design Specialization — Niveau II", org: "California Institute of the Arts", icon: "✏️" },
      ],
    },
    contact: {
      title: "Construisons la qualité ensemble",
      subtitle: "Que vous souhaitiez scaler votre équipe engineering, améliorer vos pratiques qualité ou explorer le QA piloté par l'IA — je serais ravi d'échanger.",
      email: "nalanraj@gmail.com",
      linkedin: "Me rejoindre sur LinkedIn",
    },
    footer: { rights: "Tous droits réservés", openTo: "Ouvert aux opportunités en France et à l'international", languages: "Français · Anglais · Tamoul" },
  },
};

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ─────────────────────────────────────────────
   HELPER — ANIMATED SECTION WRAPPER
───────────────────────────────────────────── */
function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─────────────────────────────────────────────
   HELPER — TYPED ROLE ANIMATION
───────────────────────────────────────────── */
function TypedRole({ roles }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, roles]);

  return (
    <span style={{ color: "#A855F7" }}>
      {displayed}
      <span style={{ animation: "blink 1s step-end infinite", borderRight: "2px solid #A855F7", marginLeft: 2 }}>&nbsp;</span>
    </span>
  );
}

/* ─────────────────────────────────────────────
   HELPER — STAT CARD
───────────────────────────────────────────── */
function StatCard({ value, label }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.03 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "24px 20px",
        textAlign: "center",
        backdropFilter: "blur(12px)",
        flex: "1 1 140px",
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg,#3B82F6,#A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {value}
      </div>
      <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 6, lineHeight: 1.4 }}>{label}</div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HELPER — EXPERIENCE CARD
───────────────────────────────────────────── */
function ExperienceCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,0.07)`,
        borderLeft: `3px solid ${job.color}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "box-shadow 0.3s",
      }}
      whileHover={{ boxShadow: `0 0 32px ${job.color}22` }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "24px 28px" }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
              <span style={{
                background: job.color + "22",
                color: job.color,
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 20,
                border: `1px solid ${job.color}44`,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>{job.badge}</span>
              {job.duration && <span style={{ fontSize: 12, color: "#64748B" }}>{job.duration}</span>}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#F1F5F9", margin: 0 }}>{job.role}</h3>
            <div style={{ fontSize: 15, color: job.color, fontWeight: 600, marginTop: 2 }}>{job.company}</div>
            <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{job.type} · {job.location}</div>
            <div style={{ fontSize: 12, color: "#475569", marginTop: 4 }}>{job.period}</div>
          </div>
          <div style={{ color: "#475569", fontSize: 20, flexShrink: 0, marginTop: 4, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
            ▾
          </div>
        </div>
        {/* Tech tags always visible */}
        {job.tech && job.tech.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
            {job.tech.map((t, i) => (
              <span key={i} style={{
                fontSize: 11, background: "rgba(255,255,255,0.06)", color: "#94A3B8",
                padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)"
              }}>{t}</span>
            ))}
          </div>
        )}
      </button>

      {/* Expandable highlights */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 28px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {job.highlights.map((h, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: job.color, marginTop: 5, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.7 }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PORTFOLIO COMPONENT
───────────────────────────────────────────── */
export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const C = CONTENT[lang];

  // Smooth scroll polyfill helper
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "#08081a", color: "#F1F5F9", fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px #3B82F644 } 50% { box-shadow: 0 0 40px #A855F766 } }
        ::-webkit-scrollbar { width: 6px }
        ::-webkit-scrollbar-track { background: #0f0f24 }
        ::-webkit-scrollbar-thumb { background: #3B82F6; border-radius: 3px }
        .nav-link { color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; padding: 6px 0 }
        .nav-link:hover { color: #F1F5F9 }
        .glow-btn { background: linear-gradient(135deg, #3B82F6, #A855F7); color: white; border: none; padding: 14px 32px; border-radius: 50px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 24px #3B82F644; text-decoration: none; display: inline-block; }
        .glow-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px #A855F766 }
        .outline-btn { background: transparent; color: #F1F5F9; border: 1px solid rgba(255,255,255,0.2); padding: 14px 32px; border-radius: 50px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block; }
        .outline-btn:hover { border-color: #3B82F6; color: #3B82F6; background: rgba(59,130,246,0.08) }
        .section-title { font-size: 40px; font-weight: 800; color: #F1F5F9; margin: 0 0 8px }
        .section-subtitle { font-size: 16px; color: #64748B; margin: 0 0 56px; max-width: 600px }
        @media (max-width: 768px) {
          .section-title { font-size: 28px }
          .hero-title { font-size: 36px !important }
          .stats-grid { flex-wrap: wrap }
          .two-col { flex-direction: column }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(8,8,26,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontWeight: 800, fontSize: 16, background: "linear-gradient(135deg,#3B82F6,#A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Nalan DOURE
          </span>
          <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {Object.entries(C.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo(key); }}>{label}</a>
            ))}
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#F1F5F9", padding: "5px 14px", borderRadius: 20, cursor: "pointer",
                fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", transition: "all 0.2s",
              }}
            >
              {C.langToggle}
            </button>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Background gradient blobs */}
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", top: "10%", left: "-10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", bottom: "10%", right: "-10%", pointerEvents: "none" }} />

        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5 }} style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
          {/* Name */}
          <h1
            className="hero-title"
            style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#F8FAFC" }}
          >
            Nalamaharadjan{" "}
            <span style={{ background: "linear-gradient(135deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              DOURE
            </span>
          </h1>

          {/* Typed role */}
          <div style={{ fontSize: 22, fontWeight: 600, minHeight: 36, marginBottom: 24 }}>
            <TypedRole roles={C.hero.roles} />
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 20, color: "#94A3B8", maxWidth: 680, margin: "0 auto 16px", lineHeight: 1.6 }}>
            {C.hero.description}
          </p>

          {/* Badges */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {["🏆 ISTQB Certified", "🤖 INSEAD AI Alumnus", "🚀 Founder @ QEnabler", "🌍 FR · EN · Tamil"].map((badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  fontSize: 12, fontWeight: 600,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 20, padding: "6px 16px", color: "#CBD5E1",
                }}
              >{badge}</motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="glow-btn" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>{C.hero.cta}</a>
            <a href="#experience" className="outline-btn" onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}>{C.hero.ctaSecondary}</a>
          </div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <Section id="_stats" style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="stats-grid"
            style={{
              display: "flex", gap: 16, flexWrap: "wrap",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 24, padding: 32,
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          >
            {C.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </Section>

      {/* ── ABOUT ── */}
      <Section id="about" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div variants={fadeUp}>
            <h2 className="section-title">{C.about.subtitle}</h2>
          </motion.div>

          <div className="two-col" style={{ display: "flex", gap: 64, alignItems: "flex-start", marginTop: 0 }}>
            {/* Bio */}
            <motion.div variants={fadeUp} style={{ flex: 2 }}>
              <p style={{ fontSize: 16, color: "#CBD5E1", lineHeight: 1.85, marginBottom: 20 }}>{C.about.bio}</p>
              <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.85 }}>{C.about.bio2}</p>
            </motion.div>

            {/* Pillars */}
            <motion.div variants={stagger} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, minWidth: 280 }}>
              {C.about.pillars.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16, padding: "20px 22px",
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9", marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{p.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
            <h2 className="section-title">{C.experience.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>{C.experience.subtitle}</p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {C.experience.jobs.map((job, i) => (
              <ExperienceCard key={i} job={job} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
            <h2 className="section-title">{C.skills.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>{C.skills.subtitle}</p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {C.skills.categories.map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: `0 8px 32px ${cat.color}22` }}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "24px 24px",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 24, background: cat.color + "22", padding: "8px", borderRadius: 12 }}>{cat.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: cat.color }}>{cat.name}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.07, background: cat.color + "33" }}
                      style={{
                        fontSize: 12, fontWeight: 500,
                        background: "rgba(255,255,255,0.05)",
                        color: "#CBD5E1",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 20, padding: "5px 14px",
                        cursor: "default", transition: "background 0.2s",
                      }}
                    >{skill}</motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── EDUCATION & CERTIFICATIONS ── */}
      <Section id="education" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
            <h2 className="section-title">{C.education.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>{C.education.subtitle}</p>
          </motion.div>

          <div className="two-col" style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {/* Degree */}
            <motion.div
              variants={fadeUp}
              style={{
                flex: "1 1 300px",
                background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(168,85,247,0.08))",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 20, padding: "32px",
                display: "flex", flexDirection: "column", gap: 8,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>🎓</div>
              <div style={{ fontSize: 11, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Education</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#F1F5F9" }}>{C.education.degree.school}</div>
              <div style={{ fontSize: 15, color: "#A855F7", fontWeight: 600 }}>{C.education.degree.degree}</div>
              <div style={{ fontSize: 14, color: "#94A3B8" }}>{C.education.degree.field}</div>
              <div style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>{C.education.degree.year}</div>
            </motion.div>

            {/* Certifications */}
            <div style={{ flex: "2 1 400px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
              {C.education.certs.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -3, borderColor: "rgba(245,158,11,0.4)" }}
                  style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16, padding: "18px 20px",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{cert.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F1F5F9", lineHeight: 1.4, marginBottom: 4 }}>{cert.name}</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>{cert.org}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" style={{ padding: "80px 24px 100px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div variants={fadeUp}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>👋</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#F1F5F9", margin: "0 0 16px" }}>{C.contact.title}</h2>
            <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>{C.contact.subtitle}</p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <a
              href={`mailto:${C.contact.email}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                background: "linear-gradient(135deg,#3B82F6,#A855F7)",
                color: "white", textDecoration: "none",
                padding: "18px 40px", borderRadius: 50,
                fontSize: 18, fontWeight: 700,
                boxShadow: "0 8px 32px rgba(59,130,246,0.35)",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              📩 {C.contact.email}
            </a>

            <a
              href="https://www.linkedin.com/in/nalamaharadjan-doure-97721727/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                color: "#94A3B8", textDecoration: "none", fontSize: 16, fontWeight: 500,
                padding: "12px 24px", borderRadius: 50,
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#3B82F6"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              🔗 {C.contact.linkedin}
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px",
        textAlign: "center",
        background: "#06061a",
      }}>
        <p style={{ color: "#334155", fontSize: 13, margin: "0 0 6px" }}>
          © {new Date().getFullYear()} Nalamaharadjan DOURE · {C.footer.rights} ·{" "}
          <a href="https://www.linkedin.com/in/nalamaharadjan-doure-97721727/" target="_blank" rel="noopener noreferrer" style={{ color: "#3B82F6", textDecoration: "none" }}>LinkedIn</a>
        </p>
        <p style={{ color: "#1e293b", fontSize: 12, margin: 0 }}>{C.footer.openTo} · {C.footer.languages}</p>
      </footer>
    </div>
  );
}
