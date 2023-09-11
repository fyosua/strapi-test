module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_YCj2pbQfQLWfguxrgxSFmWQedtmB/TXIUeHXOls",
        apiToken: "IPg0nk50XtEGNfJ5xBs86G7y",
        appFilter: "strapi-test-sage.vercel.app",
        // teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin"],
      },
    },
  });