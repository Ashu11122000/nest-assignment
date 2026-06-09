import { UserRole } from '../../modules/users/entities/user.entity';

export interface JwtPayload {
  sub: number;
  email: string;
  role: UserRole;
}
