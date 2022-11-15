"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const role_schema_1 = require("./schemas/role.schema");
const user_schema_1 = require("./schemas/user.schema");
let AuthService = class AuthService {
    constructor(roleModel, userModel, jwtService) {
        this.roleModel = roleModel;
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser({ firstName, lastName, email, password }) {
        try {
            const candidate = await this.userModel.findOne({ email });
            if (candidate) {
                throw new Error('This user already exists');
            }
            const hashPassword = bcrypt.hashSync(password, 8);
            const userRole = await this.roleModel.findOne({ value: 'STUDENT' });
            lastName = lastName ? lastName : '';
            await this.userModel.create({
                firstName,
                lastName,
                email,
                password: hashPassword,
                roles: [userRole.value],
            });
            const payload = { email, roles: userRole };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.userModel.findOne({ email });
            if (!user) {
                throw new Error(`User not found`);
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                throw new Error('Incorrect password');
            }
            const payload = { email: user.email, roles: user.roles };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getAllUsers() {
        try {
            const users = this.userModel.find();
            return users;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map