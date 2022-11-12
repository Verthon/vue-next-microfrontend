# vue-next-microfrontend

Next.js POC will be added later on - for now it will be:
* host as React SPA
* remote as Vue 2 SPA on Vue CLI v5

## Tech part

* `host/config-overrides` handles the Module Federation configuration for the host
* vueRemote is a Vue 2 application which currently doesn't work as a micro-frontend
* remote 2 is an Vue 3 application which will be mounted in React app
