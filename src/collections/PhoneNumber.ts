// src/collections/PhoneNumber.ts

import { CollectionConfig } from 'payload/types';

const PhoneNumber: CollectionConfig = {
  slug: 'phoneNumbers',
  fields: [
    {
      name: 'number',
      label: 'Phone Number',
      type: 'text',
      required: true,
      validate: (value) => {
        const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (!phoneRegex.test(value)) {
          return 'Please enter a valid phone number';
        }
        return true;
      }
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        {
          label: 'Mobile',
          value: 'mobile',
        },
        {
          label: 'Home',
          value: 'home',
        },
        {
          label: 'Work',
          value: 'work',
        },
      ],
      required: true,
    },
    {
      name: 'owner',
      label: 'Owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
		{
			name: 'countryCode',
			label: 'Country Code',
			type: 'number',
			required: true,
			min: 1,
			max: 999
		},
		{
      name: 'isActive',
      label: 'Is Active',
      type: 'checkbox',
      required: true,
      defaultValue: true,
    },
		{
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
		{
      name: 'priority',
      label: 'Priority',
      type: 'radio',
      options: [
        {
          label: 'High',
          value: 'high',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Low',
          value: 'low',
        },
      ],
      required: true,
    },
		{
      name: 'attachment',
      label: 'Attachment',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
};

export default PhoneNumber;
