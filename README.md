# ipfs

> A public IPFS node & gateway.
> [ipfs.kretschmann.io](https://ipfs.kretschmann.io)

[![CI](https://github.com/kremalicious/ipfs/actions/workflows/ci.yml/badge.svg)](https://github.com/kremalicious/ipfs/actions/workflows/ci.yml)

This repo holds a React app built with [Next.js](https://nextjs.org) serving as the frontpage of [ipfs.kretschmann.io](https://ipfs.kretschmann.io) from where you can add files to IPFS via drag and drop.

---

- [Development](#development)
- [Production](#production)
- [Deployment](#deployment)

---

## Development

```bash
npm i
cp .env.sample .env
npm start
```

Will start a live-reloading local server, reachable under [localhost:3000](http://localhost:3000).

## Production

To create a production build:

```bash
npm run build
```

Outputs to `./public`.

## Deployment

Every branch is automatically deployed to [Vercel](https://vercel.com) with their GitHub integration. A link to a deployment will appear under each Pull Request.

The latest deployment of the `main` branch is automatically aliased to `ipfs.vercel.app` which itself is proxied to via Nginx running under `ipfs.kretschmann.io`.
