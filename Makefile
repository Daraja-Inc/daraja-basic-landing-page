.PHONY: help build up down logs restart clean dev

help: ## Afficher l'aide
	@echo "Commandes disponibles:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Construire l'image Docker
	docker-compose build

up: ## Démarrer les conteneurs
	docker-compose up -d

down: ## Arrêter les conteneurs
	docker-compose down

logs: ## Afficher les logs
	docker-compose logs -f

restart: ## Redémarrer les conteneurs
	docker-compose restart

clean: ## Supprimer les conteneurs, images et volumes
	docker-compose down -v
	docker rmi daraja || true

dev: ## Démarrer en mode développement local
	npm run dev

install: ## Installer les dépendances
	npm install

build-prod: ## Build de production local
	npm run build

start-prod: ## Démarrer en mode production local
	npm run start
