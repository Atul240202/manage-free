export default {
    name: 'Product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'slug',
            options: {
                source:'name',
                maxLength: 90,
            }
        },
        {
            name: 'Price',
            title: 'Price',
            type: 'number',

        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]  
}