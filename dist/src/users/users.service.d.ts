import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare const userSelect: {
    readonly id: true;
    readonly email: true;
    readonly firstName: true;
    readonly lastName: true;
    readonly createdAt: true;
    readonly updatedAt: true;
};
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<any>;
    findById(id: string): Promise<any>;
    findByIdWithHash(id: string): Promise<any>;
    findByEmail(email: string): Promise<any>;
    updateProfile(id: string, dto: UpdateUserDto): Promise<any>;
    updateRefreshTokenHash(id: string, hash: string | null): Promise<void>;
}
