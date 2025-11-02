# Documentation Docker - DARAJA

## 📋 Prérequis

- Docker (version 20.10+)
- Docker Compose (version 2.0+)

## 🚀 Démarrage rapide

### Déploiement avec Dokploy

Le projet est configuré pour être déployé avec Dokploy en utilisant Docker Compose.

**Configuration des ports :**
- Port externe : 5000
- Port interne : 3000

### Avec Docker Compose (Recommandé)

```bash
# Construire et démarrer
docker-compose up -d

# L'application sera disponible sur http://localhost:5000
```

### Avec Docker uniquement

```bash
# Construire l'image
docker build -t daraja .

# Lancer le conteneur
docker run -p 5000:3000 daraja
```

## 🛠️ Commandes utiles

### Avec Makefile

```bash
make help        # Afficher toutes les commandes disponibles
make build       # Construire l'image Docker
make up          # Démarrer les conteneurs
make down        # Arrêter les conteneurs
make logs        # Afficher les logs en temps réel
make restart     # Redémarrer les conteneurs
make clean       # Nettoyer complètement (conteneurs, images, volumes)
```

### Avec Docker Compose

```bash
# Construire l'image
docker-compose build

# Démarrer en mode détaché
docker-compose up -d

# Démarrer avec logs visibles
docker-compose up

# Arrêter les conteneurs
docker-compose down

# Voir les logs
docker-compose logs -f

# Redémarrer un service
docker-compose restart daraja-app

# Voir l'état des conteneurs
docker-compose ps
```

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

Copiez `.env.example` vers `.env` et ajustez les valeurs si nécessaire :

```bash
cp .env.example .env
```

Variables disponibles :
- `NODE_ENV` : Environnement (production/development)
- `PORT` : Port d'écoute interne (3000)
- `HOSTNAME` : Hostname (0.0.0.0)
- `NEXT_TELEMETRY_DISABLED` : Désactiver la télémétrie Next.js

### Changer le port

Dans `docker-compose.yml` :
```yaml
ports:
  - "8080:3000"  # Port externe:Port interne
```

## 🐛 Dépannage

### Le conteneur ne démarre pas

```bash
# Vérifier les logs
docker-compose logs daraja-app

# Vérifier l'état
docker-compose ps
```

### Reconstruire complètement

```bash
# Supprimer et reconstruire
docker-compose down
docker-compose build --no-cache
docker-compose up -d
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
2. Dokploy détectera automatiquement le docker-compose.yml
3. Le port externe 5000 est déjà configuré (mappé vers le port interne 3000)

### Sur un serveur

1. Cloner le repository
2. Construire l'image
3. Lancer avec docker-compose

```bash
git clone <repository-url>
cd daraja-basic-landing-page
docker-compose up -d
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

# Reconstruire et relancer
docker-compose down
docker-compose build
docker-compose up -d
```

## 📝 Notes

- L'application utilise le mode `standalone` de Next.js pour un bundle optimisé
- Les images statiques sont servies directement depuis le conteneur
- Le hot-reload n'est pas disponible en mode Docker (utiliser `npm run dev` localement)
