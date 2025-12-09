
// example route: src/routes/yourRoute.js
const express = require('express');
const router = express.Router();

router.get('/ping', (req,res) => res.json({pong:true}));

module.exports = router;

docs/SECURITY.md (shared)

# Security Guidelines

- Do not check in secrets.
- Store secrets in repo secrets or vault (AWS Secrets Manager, HashiCorp Vault).
- Run security scans in CI.
- Responsible disclosure: security@gitdigitalproducts.com

DevOps snippet: basic Dockerfile (copyable)

(Already provided per-repo.)