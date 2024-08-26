import type { CollectionConfig } from 'payload';

import meta, { Type as MetaType } from '../fields/meta';
import slug from '../fields/slug';

import HeroFlexBento from '@/blocks/HeroFlexBento';
import Content from '@/blocks/Content';
import Spacer from '@/blocks/Spacer';

const Page: CollectionConfig = {
  slug: 'pages',
	labels: {
		singular: 'Page',
		plural: 'Pages'
	},
	access: {
		read: () => true
	},
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
			label: 'Page Title',
      type: 'text',
			required: true
    },
		{
			name: 'layout',
			label: 'Page Layout',
			type: 'blocks',
			minRows: 1,
			blocks: [
				HeroFlexBento,
				Content,
				Spacer
			]
		},
		meta,
		slug
  ],
  
};

export default Page;
