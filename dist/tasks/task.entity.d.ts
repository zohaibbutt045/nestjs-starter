import { BaseEntity } from 'typeorm';
import { TaskStatus } from './task.model';
import { User } from '../auth/auth.entity';
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
