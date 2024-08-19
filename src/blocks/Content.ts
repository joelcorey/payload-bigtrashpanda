export type ColumnWidth = 'oneThird' | 'half' | 'twoThirds' | 'full';

export type Alignment = 'left' | 'center' | 'right';

export type AccentLineAlignment = 'left' | 'right'

export type PaddingSize = 'none' | 'small' | 'medium' | 'large'

export type Block = any

export type Column = {
  content: unknown
  width: ColumnWidth
  alignment: Alignment
}

export type Type = {
  blockType: 'content'
  blockName?: string
  columns: Column[]
  accentLine: boolean
  accentLineAlignment: AccentLineAlignment
  paddingTop: PaddingSize
  paddingBottom: PaddingSize
}

const Content: Block = {
	slug: 'content',
	labels: {
		singular: 'Content Block',
		plural: 'Content Blocks'
	},
	fields: [
		{
			name: 'columns',
			label: 'Columns',
			type: 'array',
			minRows: 1,
			fields: [
				{
					type: 'row',
					fields: [
						{
							name: 'width',
							label: 'Column Width',
							type: 'select',
							defaultValue: 'full',
							required: true,
							options: [
								{
									label: 'One Third',
									value: 'oneThird'
								},
								{
									label: 'Half',
									value: 'half'
								},
								{
									label: 'Two Thirds',
									value: 'twoThirds'
								},
								{
									label: 'Full',
									value: 'full'
								},
							],
							admin: {
								width: '50%'
							}
						},
						{
							name: 'alignment',
							label: 'Alignment',
							type: 'select',
							defaultValue: 'left',
							required: true,
							options: [
								{
									label: 'Left',
									value: 'left'
								},
								{
									label: 'Center',
									value: 'center'
								},
								{
									label: 'Right',
									value: 'right'
								},
							],
							admin: {
								width: '50%'
							}
						},
					]
				},
				{
					name: 'content',
					type: 'richText',
					required: true,

				},
				
			]
		},
		{
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            width: '50%',
          },
        },
      ],
    },
	]
}

export default Content;