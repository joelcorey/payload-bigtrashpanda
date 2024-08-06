// This migration file is technically unwanted since we're using monbodb and not postgres
// Leaving in for posterity

import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  //@ts-ignore

  await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric
);

CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  //@ts-ignore

  await payload.db.drizzle.execute(sql`

DROP TABLE "media";`)
}
