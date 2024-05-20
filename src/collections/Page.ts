import type { CollectionConfig } from 'payload/types';

import meta from '../fields/meta';
import slug from '../fields/slug';

// import HeroBentoPrimary from 'blocks/HeroBentoPrimary';
import Content from 'blocks/Content';
import Spacer from 'blocks/Spacer';

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
				// HeroBentoPrimary,
				Content,
				Spacer
			]
		},
		meta,
		slug
  ],
  
};

export default Page;
