import { Sequelize, Op, QueryTypes } from 'sequelize';
import { UserModel, build, UserStatic } from '../models/Users';
import { database } from '../core/types';


export const createConnection = async (): Promise<Sequelize> => {
    const sequelize = new Sequelize('simplilearn_db', 'root', 'root' , {
        dialect: 'mysql',
        logging: true,
        pool: {
          max: 10,
          min: 0,
          acquire: 60000,
          idle: 60000,
          evict: 5000,
        },
        dialectOptions: {
          requestTimeout: 120000,
          multiSubnetFailover: true,
        }, 
    });

    await sequelize.authenticate();
  console.log(`DB Connection has been established successfully.`);
  return sequelize;
}

export const getDBConnection =  async (): Promise<Sequelize> => {
    return await createConnection();
}


export const getDBInstanceById = async (): Promise<any> => {
  try {
    const conn = await getDBConnection();
    return getDBInstanceByConnection(conn);
  } catch (err) {
    return Promise.reject(err);
  }
};

const getDBInstanceByConnection = (conn: Sequelize): any => {
  const db: database = {
    conn,
    user: build(conn)
  };
  return db;
};