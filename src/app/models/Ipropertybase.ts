export interface IPropertyBase {
  propertyId: number;
  sellRent: number;
  name: string;
  propertyType: string;
  furnishingType: string;
  price: string;
  bhk: number;
  builtArea: number;
  city: string;
  readyToMove: boolean;
  estPossessionOn: string;
  photo?: string;
}
