import type { CollectionConfig } from 'payload/types';

export type Type = {
  filename: string
  alt: string
  sizes: {
    card?: {
      filename: string
      width: number
      height: number
    }
    feature?: {
      filename: string
      width: number
      height: number
    }
  }
}

const Media: CollectionConfig = {
  slug: 'media',
	labels: {
		singular: 'Media',
		plural: 'Media'
	},
	access: {
		read: () => true
	},
  admin: {
    // useAsTitle: 'alt',
    // defaultColumns: [
    //   'id',
    //   'alt'
    // ],
    // group: 'Icons'
  },
  // upload: {
  //   disableLocalStorage: true,
  //   // Specify the size name that you'd like to use as admin thumbnail
  //   adminThumbnail: 'thumbnail',
  //   imageSizes: [
  //     {
  //       height: 300,
  //       width: 400,
  //       crop: 'center',
  //       name: 'thumbnail', 
  //     },
  //     {
  //       width: 900,
  //       height: 450,
  //       crop: 'center',
  //       name: 'sixteenByNineMedium',
  //     },
  //   ],
  // },
	upload: true,
  fields: [
    {
      name: 'alt',
			label: 'Alt',
      type: 'text',
			required: true
    }
  ],
   
  
};

export default Media;