// Shape of the object returned by webpack's `require.context`, used by
// lib/brands.ts and lib/subBrands.ts to auto-discover the per-brand /
// per-sub-brand modules in content/. (Ambient global — no imports/exports.)
interface WebpackRequireContext {
  keys(): string[];
  <T = unknown>(id: string): T;
  (id: string): unknown;
}

// `require.context` is a webpack build-time API; the ambient `require` type does
// not declare it. Cast `require` to this at the call site.
interface WebpackRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
  ): WebpackRequireContext;
}
