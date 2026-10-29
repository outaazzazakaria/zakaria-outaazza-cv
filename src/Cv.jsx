import React from "react";
import ZakariaOu from "./img/Zakaria.Ou.png";
import "./Cv.css";

const infos = {
  nom: "Zakaria Outaazza",
  poste: "Développeur Full Stack",
  contacts: [
    "Tamessna, Rabat, Maroc",
    "+212 7 14 37 80 42",
    "outaazzazakaria@gmail.com",
  ],
  liens: ["linkedin.com/in/zakaria-outaazza", "github.com/outaazzazakaria"],
  profil:
    "Étudiant en 2e année de Développement Digital - Full Stack au CMC Rabat-Salé-Kénitra, passionné par le développement web et la conception d'applications. Je maîtrise les fondamentaux du développement Front-End et Back-End, de la programmation orientée objet, des bases de données. Rigoureux, autonome et motivé, je réalise régulièrement des projets personnels et académiques pour mettre en pratique mes compétences techniques et ma capacité à résoudre des problèmes. Je recherche un stage PFE en développement informatique afin de contribuer à des projets concrets, d'évoluer en milieu professionnel et de mettre mes compétences au service d'une équipe.",
  disponibilite: "Disponible selon les besoins de l'entreprise.",
};

const formations = [
  {
    id: 1,
    titre: "Technicien Spécialisé en Développement Digital",
    lieu: "Cité des Métiers et des Compétences de Rabat-Salé-Kénitra, Tamessna",
    periode: "2025-2027",
  },
  {
    id: 2,
    titre: "Baccalauréat, Sciences Physiques",
    lieu: "Lycée Moulay Ismail, Tamessna",
    periode: "2024-2025",
  },
];

const experiences = [
  {
    id: 1,
    titre:
      "Stagiaire en Développement Web — Projet de gestion des pannes — ALSA MAROC (Stage volontaire)",
    lieu: "Tamessna",
    periode: "Septembre 2026 — Présent",
    taches: [
      "Observation des processus et identification des problèmes liés à la maintenance et au suivi des pannes.",
      "Analyse des besoins pour proposer une solution informatique adaptée aux problèmes identifiés.",
      {
        debut:
          "Conception et développement d'une application web de gestion des pannes et des interventions de maintenance (",
        gras: "React, Laravel, MySQL",
        fin: ").",
      },
      "Fonctionnalités : authentification, déclaration de pannes, historique des interventions, tableau de bord et gestion des rôles.",
      "Application destinée aux techniciens, au responsable maintenance et aux employés.",
      "Mise en pratique des compétences Full Stack à travers la conception, le développement et les tests de l'application.",
    ],
  },
  {
    id: 2,
    titre: "Employé Polyvalent — Burger King",
    lieu: "Témara",
    periode: "Mars 2026 - Juillet 2026",
    taches: [
      "Accueil et service des clients.",
      "Travail en équipe dans un environnement dynamique.",
      "Respect des normes de qualité et gestion des périodes de forte affluence.",
    ],
  },
];

const projets = [
  {
    id: 1,
    nom: "E-commerce Website",
    type: "Projet personnel",
    technos: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    taches: [
      "Développement d'un site web e-commerce.",
      "Création d'interfaces utilisateur responsives.",
    ],
  },
  {
    id: 2,
    nom: "Restaurant Management System",
    type: "Projet personnel",
    technos: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    taches: [
      "Développement d'une application de gestion de restaurant.",
      "Gestion des commandes et organisation des données.",
    ],
  },
];

const competences = [
  {
    id: 1,
    categorie: "Technique",
    liste: [
      "Algorithmique", "Python", "POO", "HTML5", "CSS3", "Bootstrap",
      "JavaScript", "React", "SQL", "MySQL", "PHP", "Laravel", "API REST",
      "Langage C", "Git", "GitHub", "Postman", "Docker", "Figma", "VS Code",
    ],
  },
  {
    id: 2,
    categorie: "Bureautique",
    liste: ["Pack Office (Word, Excel, PowerPoint)"],
  },
  {
    id: 3,
    categorie: "Savoir-être",
    liste: [
      "Rigueur", "Sens de l'organisation", "Esprit d'équipe",
      "Capacité d'adaptation", "Résolution de problèmes", "Esprit d'analyse",
      "Sens des responsabilités", "Gestion du temps",
    ],
  },
];

const langues = [
  { id: 1, langue: "Français", niveau: "B2 (Intermédiaire avancé)" },
  { id: 2, langue: "Anglais", niveau: "B1" },
  { id: 3, langue: "Arabe", niveau: "Courant" },
  { id: 4, langue: "Tamazight", niveau: "Langue maternelle" },
];

const certifications = [
  { id: 1, nom: "Python", detail: "Cisco Networking Academy" },
  { id: 2, nom: "JavaScript", detail: "Cisco Networking Academy" },
  {
    id: 3,
    nom: "Robotique",
    detail: "Attestations de participation (dont Concours National de Robotique)",
  },
];

function Cv() {
  return (
    <>
      <a
        className="download-button"
        href="/Zakaria_Outaazza_CV.pdf"
        download="Zakaria_Outaazza_CV.pdf"
        aria-label="Télécharger mon CV"
      >
        <div className="docs">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          CV
        </div>
        <div className="download">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </div>
      </a>
      <div className="cv-page">
        <header className="cv-header d-flex justify-content-between align-items-start">
          <div>
            <h1 className="cv-nom">{infos.nom}</h1>
            <h2 className="cv-poste">{infos.poste}</h2>
            <p className="cv-contact">
              {infos.contacts.join(" | ")}
              <br />
              {infos.liens.join(" | ")}
            </p>
          </div>
          <img className="cv-photo" src={ZakariaOu} alt={infos.nom} />
        </header>
        <section className="cv-section">
          <h3 className="cv-titre">PROFIL</h3>
          <p className="cv-texte">{infos.profil}</p>
        </section>
        <section className="cv-section">
          <h3 className="cv-titre">FORMATION</h3>
          {formations.map((f) => (
            <div className="cv-bloc" key={f.id}>
              <p className="cv-intitule">{f.titre}</p>
              <p className="cv-sous-titre">
                {f.lieu} — {f.periode}
              </p>
            </div>
          ))}
        </section>
        <section className="cv-section">
          <h3 className="cv-titre">EXPÉRIENCE</h3>
          {experiences.map((exp) => (
            <div className="cv-bloc" key={exp.id}>
              <p className="cv-intitule">{exp.titre}</p>
              <p className="cv-sous-titre">
                {exp.lieu} — {exp.periode}
              </p>
              <ul className="cv-liste">
                {exp.taches.map((t, i) => (
                  <li key={i}>
                    {typeof t === "string" ? (
                      t
                    ) : (
                      <>
                        {t.debut}
                        <strong>{t.gras}</strong>
                        {t.fin}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="cv-section">
          <h3 className="cv-titre">PROJETS</h3>
          {projets.map((p) => (
            <div className="cv-bloc" key={p.id}>
              <p className="cv-intitule">
                {p.nom}
                <span className="cv-techno">
                  {" "}
                  — {p.type} · {p.technos.join(", ")}
                </span>
              </p>
              <ul className="cv-liste">
                {p.taches.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="cv-section">
          <h3 className="cv-titre">COMPÉTENCES</h3>
          {competences.map((c) => (
            <p className="cv-texte" key={c.id}>
              <strong>{c.categorie} :</strong> {c.liste.join(" - ")}
            </p>
          ))}
        </section>
        <div className="row cv-deux-colonnes">
          <div className="col-6">
            <h3 className="cv-titre">LANGUES</h3>
            {langues.map((l) => (
              <p className="cv-ligne" key={l.id}>
                <strong>{l.langue} :</strong> {l.niveau}
              </p>
            ))}
          </div>
          <div className="col-6">
            <h3 className="cv-titre">CERTIFICATIONS</h3>
            {certifications.map((c) => (
              <p className="cv-ligne" key={c.id}>
                <strong>{c.nom}</strong> — {c.detail}
              </p>
            ))}
          </div>
        </div>
        <section className="cv-section">
          <h3 className="cv-titre">DISPONIBILITÉ</h3>
          <p className="cv-texte">{infos.disponibilite}</p>
        </section>
      </div>
    </>
  );
}

export default Cv;