// types.ts
type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

export interface Author extends Base {
  description: string;
  image: Image;
  name: string;
  slug: Slug;
}

export interface Image {
  _type: 'image';
  asset: Reference;
}

export interface Reference {
  _type: 'slug';
  current: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

export interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

export interface Category extends Base {
  description: string;
  title: string;
}

export interface Property extends Base {
  title: string;
  propertyType: string;
  propertyImage: Image;
  location: string;
  propertySize: string;
  budget: number;
  slug?: Slug;
  description: string;
}
