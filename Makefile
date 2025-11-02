.PHONY: help build up down logs restart clean dev

help: ## Afficher l'aide
	@echo "Commandes disponibles:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Construire l'image Docker
	docker build -t daraja .

up: ## Démarrer le conteneur (port 5000:3000)
	docker run -d -p 5000:3000 --name daraja daraja

down: ## Arrêter et supprimer le conteneur
	docker stop daraja || true
	docker rm daraja || true

logs: ## Afficher les logs
	docker logs -f daraja

restart: ## Redémarrer le conteneur
	docker restart daraja

clean: ## Supprimer le conteneur et l'image
	docker stop daraja || true
	docker rm daraja || true
	docker rmi daraja || true

dev: ## Démarrer en mode développement local
	npm run dev

install: ## Installer les dépendances
	npm install

build-prod: ## Build de production local
	npm run build

start-prod: ## Démarrer en mode production local
	npm run start
