import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const launchVue3App = () => {
  //@ts-ignore
  import("@zx-mfe/vue3Remote")
  .then((mountVue3App) => {
    mountVue3App.default("#vue");
  })
  .catch((error) => {
    console.log("error", error)
  })
};

export const Vue3AppLoader = () => {
	return (
		<ErrorBoundary fallback={<h2>Failed to load Vue Application</h2>}>
			<button onClick={launchVue3App}>Load dynamically Vue 3 app</button>
		</ErrorBoundary>
	);
};
