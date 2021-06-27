import { Pool } from 'pg';
import fs from 'fs';
import Debug from 'debug';
import config from '../config';
import { toCamelcase, sanitizeCSVInjection } from './utils';

const debug = Debug('server');

const connectionString = config.database.url;
const { env } = config.common;
const isInsertOrUpdateRegex = new RegExp(/(UPDATE(.|\n)*SET)|(INSERT INTO)/i);

let __pool;
if (env === 'production') {
  __pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
} else {
  __pool = new Pool({ connectionString });
}

const pool = __pool;

const query = async (text, _params) => {
  let params = _params;
  const isInsertOrUpdate = isInsertOrUpdateRegex.test(text);

  if (isInsertOrUpdate) {
    params = sanitizeCSVInjection(_params);
  }

  const res = await pool.query(text, params);

  if (res && res.rows) {
    const rows = toCamelcase(res.rows);
    res.rows = rows;
  }
  return res;
};

const readSqlFile = async (filePath) => {
  const sql = fs.readFileSync(filePath).toString();
  await pool.query(sql);
  debug(`done: ${filePath.split('/').slice(-1)}`);
};

export { query, readSqlFile, pool };
