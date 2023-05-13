compose := docker compose
run := $(compose) run --rm -T

node_modules/time:
	$(run) node yarn
	touch node_modules/time

.PHONY: serve
serve: node_modules/time
	$(compose) up -d

.PHONY: test
test: node_modules/time
	$(run) node yarn test

.PHONY: test_watch
test_watch: node_modules/time
	$(run) node yarn test:watch

.PHONY: shell
shell: node_modules/time
	$(run) node /bin/bash

.PHONY: build
build: node_modules/time
	$(run) node yarn build-storybook

.PHONY: clean
clean:
	$(compose) down --volumes