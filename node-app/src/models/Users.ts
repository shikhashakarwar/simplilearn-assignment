import { Sequelize, Model, BuildOptions, Instance, INTEGER, STRING } from 'sequelize';
import { v1 } from "uuid";

export interface UserModel {
    readonly userID?: number;
    fname:string;
    lname: string;
    password:string;
    email: string;
    UserGUID: string;
  }
  
  export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
  };
  
  export interface UserInstance extends Instance<UserModel>, UserModel {}
  
  export const userTable = {
    userID: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fname: {
    type: STRING,
    allowNull: false,
  },
  lname: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  UserGUID: {
    type: STRING,
    defaultValue: v1(),
    allowNull: true,
  },
};

  export function build(sequelize: Sequelize): any {
    const user = sequelize.define<UserInstance, UserModel>('Users', userTable, {
      freezeTableName: true,
      timestamps: false,
      tableName: 'Users'
    }) as UserStatic;
  
    return user;
  };