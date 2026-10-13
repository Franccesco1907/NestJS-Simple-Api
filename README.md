# NestJS task API

Learning project with in-memory task CRUD at `/api/v1/task`; tasks reset when the process restarts.

- Install with `npm ci`, then run `npm run start:dev` (port 3000).
- Create/update payload: `{"description":"Example task description","isDone":false}`; descriptions require at least 10 characters.
- Build and run: `npm run build`, then `npm run start:prod`.
- Checks: `npm test -- --runInBand`, `npm run test:e2e -- --runInBand`, `npm run test:cov`.
