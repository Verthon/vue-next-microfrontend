import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

//@ts-ignore
const VueApp = React.lazy(() => import("@zx-mfe/vueRemote")
.then((res) => {
  console.log('res', res)
})
.catch((error) => {
  console.log('error', error)
}));

export const VueAppLoader = () => {
  return (
    <React.Suspense fallback="loading">
      <ErrorBoundary fallback={<h2>Failed to load Vue Application</h2>}>
        <VueApp />
      </ErrorBoundary>
    </React.Suspense>
  )
}