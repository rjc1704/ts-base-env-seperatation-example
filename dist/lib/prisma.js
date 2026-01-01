"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const dotenv_1 = require("dotenv");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
// NODE_ENV에 따라 다른 .env 파일 로드
const envFile = process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
(0, dotenv_1.config)({ path: envFile });
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prisma = new client_1.PrismaClient({ adapter });
exports.prisma = prisma;
//# sourceMappingURL=prisma.js.map