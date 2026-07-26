import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://109548c152aa0155786fb874156efbdc@o4510550975250432.ingest.us.sentry.io/4511800535154688',
  tracesSampleRate: 1,
  enabled: process.env.NODE_ENV === 'production',
});
