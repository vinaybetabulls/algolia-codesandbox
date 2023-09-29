const generateBuildId = function (code = false) {
  const buildNum = code
    ? process.env["CODE_BUILD_NUM"]
    : process.env["SSG_BUILD_NUM"];
  const buildEnv = process.env["BUILD_ENV"];
  // If we have a valid build num and env, use that for the buildID - otherwise fallback to
  // using a randomly generated nanoID which is what next.js uses by default
  let buildId = `${buildEnv}_${buildNum}`;
  if (!buildNum || !buildEnv) {
    buildId = "dsfgbl3523bjwsd@#141";
  }

  return buildId;
};

module.exports = {
  env: {
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
    NEXT_PUBLIC_ADDRESS_LOOKUP_URL: process.env.NEXT_PUBLIC_ADDRESS_LOOKUP_URL,
    NEXT_PUBLIC_ADDRESS_AUTH_TOKEN: process.env.NEXT_PUBLIC_ADDRESS_AUTH_TOKEN,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    buildNum: process.env.SSG_BUILD_NUM || "",
    buildDate: process.env.BUILD_DATE || new Date().toISOString(),
    refreshTtlSecs: process.env.SSG_REFRESH_TTL_SECS || 600,
  },
  serverRuntimeConfig: {
    buildNum: process.env.SSG_BUILD_NUM || "",
    buildEnv: process.env.BUILD_ENV || "local",
    buildDate: process.env.BUILD_DATE || new Date().toISOString(),
    siteLocale: process.env.SITE_LOCALE || "en",
  },
  // Include JS and CSS sourcemaps
  productionBrowserSourceMaps: true,
  // Asset prefix to use for the _next folder and all of the generated chunks - allows cachebusting with the build ID
  assetPrefix:
    process.env.SSG_PREFIX_ASSETS === "true"
      ? `/assets/${generateBuildId(true)}`
      : undefined,
  // Function to provide the buildID to next.js - used within the generated folder structure
  generateBuildId,
};
