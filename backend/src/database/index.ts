import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    console.log(defaultOptions);

    return createConnection(defaultOptions);
};
