import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: ['House', 'Land'],
      },
    }),
    defineField({
      name: 'propertyImage',
      title: 'Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['Port Harcourt', 'Lagos', 'Abuja'],
      },
    }),
    defineField({
      name: 'propertySize',
      title: 'Property Size',
      type: 'string',
      options: {
        list: ['500m² - 5,000m²', '5000m² - 10,000m²', '10,000m² - 20,000m²'],
      },
    }),
    defineField({
      name: 'budget',
      title: 'Budget',
      type: 'string',
      options: {
        list: [
          '₦(10 Million to 50 Million)',
          '₦(50 Million to 100 Million)',
          '₦(100 Million to 200 Million)',
        ],
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});
