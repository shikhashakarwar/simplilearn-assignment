
import {UserStatic} from '../models/Users';
import { Sequelize } from 'sequelize';

export interface database {
    conn: Sequelize;
    user: UserStatic;
}