import React, { Suspense, lazy } from 'react';
const LazySearch = lazy(() => import('./SeriesSearch'));

export default function AsyncHeavy() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazySearch />
      </Suspense>
    </div>
  );
}
