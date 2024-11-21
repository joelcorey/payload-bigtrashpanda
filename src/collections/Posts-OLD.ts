// Pasted in from old Payload 2.0, this collection will change dramatically. It was important to pull this code snippet forward for future blog/media posts automation.
// import payload from "payload";
import { CollectionConfig } from 'payload';
import socialMediaPost from '../hooks/socialMediaPost'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    // {
    //   name: 'mediaCollection',
    //   type: 'relationship',
    //   relationTo: 'mediaCollection'
    // },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories'
    },
    // {
    //   name: 'tags',
    //   type: 'relationship',
    //   relationTo: 'tags',
    //   hasMany: true,
    // },
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
    
  ],
  hooks: {
    beforeChange: 
      [
        // async (data) => {
        //   // Available: data, req, operation, originalDoc
        //   let collectionId = data.data.mediaCollection
        //   const mediaCollection = await payload.findByID({
        //     collection: "mediaCollection",
        //     id: collectionId
        //   })
        //   console.log(mediaCollection.name)
        //   console.log(mediaCollection.createdAt)
        //   console.log(mediaCollection.updatedAt)
        //   console.log(mediaCollection.images[0].image.url)
          
        //   // socialMediaPost(mediaCollection.images[0].image.url)
        // },
        // socialMediaPost
      ],
   
  },
}

export default Posts;