import path from 'path'
import { 
	lexicalEditor 
} from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Page from './collections/Page';
import Category from './collections/Category';
import Color from './collections/Color'

// The new way of doing it that does not work??
//https://github.com/payloadcms/payload/tree/beta/packages/storage-s3
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
		Users, 
		Media,
		Page,
		Category,
		Color,
	],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  sharp,

	plugins: [
	  //@ts-ignore
    s3Storage({
      collections: {
				['media']: true
      },
			//@ts-ignore
      bucket: process.env.S3_BUCKET,
      config: {
				credentials: {
					//@ts-ignore
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
					//@ts-ignore
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
				endpoint: process.env.S3_ENDPOINT,
				region: process.env.S3_REGION,
        forcePathStyle: true
      },
    }),
  ],

})
