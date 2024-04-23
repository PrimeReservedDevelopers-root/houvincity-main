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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
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
      name: 'propertyImageOne',
      title: 'Property Image One',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'propertyImageTwo',
      title: 'Property Image Two',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'propertyImageThree',
      title: 'Property Image Three',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'legal',
      title: 'Legal',
      type: 'string',
    }),
    defineField({
      name: 'currentPropertySize',
      title: 'Current Property Size',
      type: 'string',
    }),
    defineField({
      name: 'promoVideo',
      title: 'Promo Video',
      type: 'url',
    }),
    defineField({
      name: 'virtualSiteUrl',
      title: 'Virtual Site Inspection URL',
      type: 'url',
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
