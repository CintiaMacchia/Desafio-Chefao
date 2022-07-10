"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./shared/infrastructure/database"));
const hendleMiddleware_1 = __importDefault(require("./shared/middlewares/hendleMiddleware"));
const index_1 = __importDefault(require("./shared/routes/index"));
const upload_1 = __importDefault(require("./shared/infrastructure/config/upload"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(upload_1.default.any());
app.use(express_1.default.static('./src/public'));
database_1.default.hasConection();
app.use(index_1.default);
app.use(hendleMiddleware_1.default);
exports.default = app;
