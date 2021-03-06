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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Provider = /** @class */ (function () {
    function Provider() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Provider.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "escola", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "school_category", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Provider.prototype, "categoria_escola_id", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Provider.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Provider.prototype, "active", void 0);
    Provider = __decorate([
        typeorm_1.Entity("en_escola")
    ], Provider);
    return Provider;
}());
exports.default = Provider;
