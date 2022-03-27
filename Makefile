#!/usr/bin/env bash
SHELL := /bin/bash

.PHONY: default
default: menu

.PHONY: install
install: ## Installs dependencies
	npm install

.PHONY: clear
clear: ## Clear the cache
	npm run clear

.PHONY: purge
purge: ## Clear the cache and node_modules
	npm run purge

.PHONY: reset
reset: ## Clear the cache, node_modules and reinstall dependencies
	npm run reset

.PHONY: build/all
build/all: ## Build all projects in parallel
	npm run build:all

.PHONY: lint/all
lint/all: ## Linters all projects in parallel
	npm run lint:all

.PHONY: test/all
test/all: ## Installs  dependencies
	npm run test:all

.PHONY: help
help: ## Show all available tasks
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-20s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/://

.PHONY: menu
menu:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-20s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/:// | fzf --cycle | cut -d ' ' -f1 | xargs -r make
