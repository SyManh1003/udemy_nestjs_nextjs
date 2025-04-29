/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthError } from "next-auth";

export class CustomAuthError extends AuthError {
    static type: string;

    constructor(message?: any) {
        super();

        this.type = message;
    }
}

export class InvalidEmailPasswordError extends AuthError {
    static type = "Email/Password khong hop le"
}

export class InactiveAccountError extends AuthError {
    static type = "Tai khoan chua duoc kich hoat"
}