export type UserRole = "admin" | "master" | null;

export interface User {
    name: string;
    role: UserRole;
}