import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'

import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

// import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import Media from './collections/Media'
import Page from './collections/Page';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const tokenString = process.env.BLOB_READ_WRITE_TOKEN

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
		Media,
		Page
  ],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
	plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        [Media.slug]: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: tokenString!
    }),
  ],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  sharp,
})
