module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '952495d854a736f5d52815c1758ea2a7'),
  },
});
