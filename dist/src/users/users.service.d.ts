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
    }): Promise<{
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        refreshTokenHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findByIdWithHash(id: string): Promise<{
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        refreshTokenHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        refreshTokenHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateProfile(id: string, dto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateRefreshTokenHash(id: string, hash: string | null): Promise<void>;
}
