# Kasa - Backend

📚 **Description**  
Le backend de Kasa est une API simulée utilisée pour servir les données des logements à l'application frontend. Il est possible de l'utiliser soit via Docker pour un déploiement rapide, soit via Node.js pour un démarrage classique.  

---

## 🚀 **Prérequis**

- **Docker** : pour exécuter l'application via des conteneurs Docker.  
- **Node.js** : si vous préférez exécuter l'application sans Docker.  

---

## 📂 **Structure du projet**

    📁 backend/
        📄 data.json → Contient les données des logements simulées.
        📄 server.js → Fichier principal du serveur simulé.

---

## 🚀 **Lancer le backend**

### 1️⃣ **Avec Docker**  

1. Assurez-vous d'avoir Docker installé sur votre système.  
2. Dans le dossier `backend`, exécutez la commande suivante pour démarrer le service :  
   ```bash
   docker-compose up -d
3. Pour arrêter le service, utilisez :
   ```bash
   docker-compose down

### 2️⃣ **Avec Node.js**  

1. Installez Node.js sur votre système.  
2. Naviguez dans le dossier `backend` :  
   ```bash
   cd backend
3. Installez les dépendances :  
   ```bash
   npm install
4. Lancez le serveur :  
   ```bash
   npm start
  Le backend sera accessible à l’adresse suivante :  
**http://localhost:3000**  

---

## 📌 **Fonctionnalités**  

- Fournit des données de logements simulées via un fichier JSON.  
- API simple et rapide à utiliser pour le développement front-end.  

---

## ℹ️ **Contexte**  

Cette API est fournie dans le cadre d'un projet d'étude. Elle a été conçue pour simuler un backend minimal afin de faciliter le développement et les tests de l'application frontend. Elle n'est pas destinée à un usage en production.

---

## 🌟 **Améliorations possibles**

- **Ajout d'une base de données** : Intégration d'une vraie base de données (par exemple, MongoDB ou MySQL) pour gérer les données dynamiquement.  
- **Endpoints RESTful** : Ajouter des endpoints CRUD pour permettre des modifications des données.  
- **Authentification** : Ajouter un système de gestion des utilisateurs avec JWT ou OAuth.  
- **Tests unitaires** : Ajouter des tests pour garantir la fiabilité et la performance de l'API.  

---

## 📌 **Liens connexes**

- [README global du projet](../README.md)  
- [README du frontend](../frontend/README.md)  
