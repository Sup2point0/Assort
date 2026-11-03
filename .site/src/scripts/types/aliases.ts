/** A root-relative path, for internal links. */
export type route = string & { readonly __brand: unique symbol };
