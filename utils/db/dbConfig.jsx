// postgresql://wasteManagement_owner:jonR9HZzTM8V@ep-gentle-surf-a1gqij63.ap-southeast-1.aws.neon.tech/wasteManagement?sslmode=require

import {neon} from '@neondatabase/serverless'

import {drizzle} from 'drizzle-orm/neon-http'

import * as schema from './schema'

// const sql=neon("postgresql://wasteManagement_owner:jonR9HZzTM8V@ep-gentle-surf-a1gqij63.ap-southeast-1.aws.neon.tech/wasteManagement?sslmode=require")

const sql=neon(process.env.NEXT_PUBLIC_DATABASE_URL)

export const db=drizzle(sql,{schema})