export interface IInitialState {
  currentCategory: number | string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: 2001;
  name: string;
  category_id: number;
  description: string;
}

export interface IProductVariation {
  id: number;
  product_id: number;
  price: number;
  stock: number;
}

export interface IProductImage {
  id: number;
  image_name: string;
  product_id: number;
  image_url: string;
}

export interface IProductVariationProperty {
  id: number;
  name: string;
  type: number;
}

export interface IProductVariationPropertyListValue {
  id: number;
  product_variation_property_id: number;
  title: string;
  value: string;
}

export interface IProductVariationPropertyValue {
  id: number;
  product_variation_id: number;
  product_variation_property_id: number;
  value_string: string;
  value_int: number | null;
  value_float: number | null;
  product_variation_property_list_value_id: number | null;
}
