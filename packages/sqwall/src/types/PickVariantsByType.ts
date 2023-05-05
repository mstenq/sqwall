import { VariantType } from "./VariantType";

export type PickVariantsByType<T, U extends VariantType> = keyof {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};
