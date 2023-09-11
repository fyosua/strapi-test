module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_YCj2pbQfQLWfguxrgxSFmWQedtmB/TXIUeHXOls",
        apiToken: "BAIRfybSOisjphgwXtpJ0d4Y",
        appFilter: "strapi-test",
        teamFilter: "team_wPPmxU80dnM9Ts19adeD7Bzq",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });