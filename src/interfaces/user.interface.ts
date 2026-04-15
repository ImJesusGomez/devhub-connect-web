import type { Role } from "./role.interface";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
}
