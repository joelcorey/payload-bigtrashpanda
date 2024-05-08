export const HeroBentoPrimary = {
	slug: 'heroBentoPrimary',
	labels: {
		singular: 'Hero Bento Primary Block',
		plural: 'Hero Bento Primary Blocks'
	},
	fields: [
		{
			name: 'heading',
			label: 'Heading',
			type: 'text'
		},
		{
			name: 'subHeading',
			label: 'Sub Heading',
			type: 'text'
		},
		{
			name: 'backgroundImage',
			label: 'Background Image',
			type: 'upload',
			relationTo: 'media'
		},
		{
			name: 'slider',
			label: 'Image Slider',
			type: 'array',
			minRows: 2,
			maxRows: 10,
			labels: {
				singular: 'Slide',
				plural: 'Slides'
			},
			fields: [
				{
					name: 'title',
					type: 'text',
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media'
				},
				{
					name: 'slideHref',
					label: 'Slide Href',
					type: 'text'
				},
				{
					name: 'slideHrefTitle',
					label: 'Slide Href Title',
					type: 'text'
				}
			]
		},
		{
			name: 'buttonLinks',
			label: 'Button Links',
			type: 'array',
			minRows: 2,
			maxRows: 4,
			labels: {
				singular: 'Button',
				plural: 'Buttons'
			},
			fields: [
				{
					name: 'title',
					label: 'Title',
					type: 'text',
				},
				{
					name: 'icon',
					type: 'text',
				},
				{
					name: 'header',
					label: 'Header',
					type: 'text'
				},
				{
					name: 'href',
					label: 'Href',
					type: 'text'
				},
				{
					name: 'HrefTitle',
					label: 'Href Title',
					type: 'text'
				}
			]
		}
	]
}