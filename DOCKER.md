# Documentation Docker - DARAJA

## 📋 Prérequis

- Docker (version 20.10+)

## 🚀 Démarrage rapide

### Déploiement avec Dokploy

Le projet est configuré pour être déployé avec Dokploy. Le Dockerfile gère toute la configuration nécessaire.

**Configuration des ports :**
- Port externe : 5000
- Port interne : 3000

### Avec Docker

```bash
# Construire l'image
docker build -t daraja .

# Lancer le conteneur (port 5000 externe -> 3000 interne)
docker run -p 5000:3000 daraja

# L'application sera disponible sur http://localhost:5000
```

## 🛠️ Commandes utiles

### Avec Docker

```bash
# Lister les images
docker images

# Lister les conteneurs en cours
docker ps

# Lister tous les conteneurs
docker ps -a

# Voir les logs d'un conteneur
docker logs daraja

# Entrer dans le conteneur
docker exec -it daraja sh

# Arrêter un conteneur
docker stop daraja

# Supprimer un conteneur
docker rm daraja

# Supprimer une image
docker rmi daraja
```

## 🏗️ Architecture du Dockerfile

Le Dockerfile utilise une approche multi-stage pour optimiser la taille de l'image :

1. **Stage deps** : Installation des dépendances Node.js
2. **Stage builder** : Build de l'application Next.js
3. **Stage runner** : Image de production légère avec uniquement les fichiers nécessaires

### Avantages

- ✅ Image finale légère (~150MB)
- ✅ Sécurité : utilisateur non-root
- ✅ Performance : mode standalone de Next.js
- ✅ Cache optimisé pour des builds rapides

## 🔧 Configuration

### Variables d'environnement

Variables disponibles :
- `NODE_ENV` : Environnement (production/development)
- `PORT` : Port d'écoute interne (3000)
- `HOSTNAME` : Hostname (0.0.0.0)
- `NEXT_TELEMETRY_DISABLED` : Désactiver la télémétrie Next.js

### Changer le port

Pour modifier le port externe, utilisez la commande `docker run` :
```bash
docker run -p 8080:3000 daraja  # Port externe:Port interne
```

## 🐛 Dépannage

### Le conteneur ne démarre pas

```bash
# Vérifier les logs
docker logs daraja

# Vérifier l'état
docker ps
```

### Reconstruire complètement

```bash
# Arrêter et supprimer le conteneur
docker stop daraja && docker rm daraja

# Reconstruire sans cache
docker build --no-cache -t daraja .

# Relancer
docker run -p 5000:3000 daraja
```

### Problème de permissions

```bash
# L'application utilise un utilisateur non-root (nextjs:nodejs)
# Si vous avez des problèmes de permissions, vérifiez les volumes montés
```

### Libérer de l'espace

```bash
# Nettoyer les images non utilisées
docker system prune -a

# Nettoyer tout (attention: supprime TOUS les conteneurs/images)
docker system prune -a --volumes
```

## 📦 Déploiement en production

### Avec Dokploy

Le projet est optimisé pour Dokploy. Il suffit de :
1. Connecter votre repository GitHub à Dokploy
2. Dokploy détectera automatiquement le Dockerfile
3. Configurer le port externe sur 5000 (le port interne 3000 est déjà configuré)

### Sur un serveur

```bash
git clone <repository-url>
cd daraja-basic-landing-page
docker build -t daraja .
docker run -d -p 5000:3000 --name daraja daraja
```

### Avec un reverse proxy (Nginx)

Exemple de configuration Nginx :

```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔒 Sécurité

- ✅ Utilisateur non-root dans le conteneur
- ✅ .dockerignore pour exclure les fichiers sensibles
- ✅ Multi-stage build pour réduire la surface d'attaque
- ✅ Image Alpine Linux légère et sécurisée

## 📊 Performance

- Image finale : ~150MB
- Temps de démarrage : ~2-3 secondes
- Mode standalone Next.js pour des performances optimales
- Utilisation du cache Docker pour des builds rapides

## 🔄 Mises à jour

```bash
# Pull les dernières modifications
git pull

# Arrêter le conteneur actuel
docker stop daraja && docker rm daraja

# Reconstruire l'image
docker build -t daraja .

# Relancer
docker run -d -p 5000:3000 --name daraja daraja
```

## 📝 Notes

- L'application utilise le mode `standalone` de Next.js pour un bundle optimisé
- Les images statiques sont servies directement depuis le conteneur
- Le hot-reload n'est pas disponible en mode Docker (utiliser `npm run dev` localement)
