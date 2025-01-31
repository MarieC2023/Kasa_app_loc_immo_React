# KASA - Frontend

## 🚀 Technologies utilisées

- **React** : Composants réutilisables et gestion de l’état avec `useState` et `useEffect`.
- **React Router** : Gestion de la navigation entre les différentes pages.
- **CSS3** : Mise en page responsive et animations avec `@media queries` et transitions CSS.

## 🎯 Fonctionnalités clés

- **Page d’accueil** : Affichage de la liste des logements sous forme de cartes interactives.
- **Page logement** : Visualisation des détails d’un logement sélectionné avec description et équipements.
- **Galerie d’images** : Carrousel permettant de naviguer entre les photos d’un logement.
- **Système de collapsibles** : Sections déroulantes pour afficher dynamiquement les informations complémentaires.
- **Page 404** : Gestion des erreurs avec redirection en cas d’URL invalide.

## 📂 Structure du projet

📂 **src/**
  - 📁 **components/** → Composants réutilisables (Header, Footer, Collapse, etc.).
  - 📁 **pages/** → Pages principales (`Home.jsx`, `About.jsx`, `Error404.jsx`).
  - 📁 **assets/** → Images et icônes utilisées dans l’application.
  - 📁 **styles/** → Fichiers CSS modulaires.
  - 📄 **App.jsx** → Structure principale de l'application.
  - 📄 **index.js** → Point d'entrée de l'application React.


## 🚀 Installation et lancement du front-end

1. **Cloner le dépôt** :
   ```sh
   git clone https://github.com/MarieC2023/Kasa_app_loc_immo_React.git
   cd Kasa_app_loc_immo_React

2. **Installer les dépendances** :
   ```sh
   npm install

3. **Lancer l’application** :
   ```sh
   npm run dev


## 🌟 Fonctionnalités supplémentaires

- **Affichage dynamique** des logements en récupérant les données depuis un fichier JSON.
- **Effets de transition et animations CSS** pour une expérience utilisateur fluide.
- **Gestion des erreurs** avec une page 404 personnalisée.

## 🚀 Améliorations possibles

- 🔹 Implémentation d’une gestion d’état avancée avec Redux ou Context API pour une meilleure structure des données.
- 🔹 Optimisation des performances (lazy loading des images, meilleure gestion des états et re-renders).
- 🔹 Ajout de tests unitaires et d’intégration pour garantir la fiabilité du projet.

---

📌 *Un README dédié au backend et un README global sont également disponibles.*
