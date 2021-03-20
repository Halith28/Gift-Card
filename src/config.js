/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2021-03-20
 * @modify date 2021-03-20
 * @desc All the environment variables are taken from process.env and exported
 * via Config variable.
 */

import dotenv from "dotenv";
dotenv.config();

let Config = {};

Config.api_url = process.env.REACT_APP_API_ENDPOINT;
Config.graphql = process.env.REACT_APP_GQL_ENDPOINT;
Config.socket = process.env.REACT_APP_SOCKET;

export default Config;
