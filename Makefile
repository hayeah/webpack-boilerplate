
bundle:
	webpack --progress --colors
.PHONY: bundle

watch:
	webpack --progress --colors --watch
.PHONY: watch

server:
	webpack-dev-server --progress --colors
.PHONY: server
