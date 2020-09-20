export class Product {
  id: number;
  model: string;
  color: string;
  photo: Photo = new Photo();
  camera: string;
  resolution: string;
  ram: string;
  status: string;
  price: number;
}

export class Photo {
  src: string;
  alt: string;
}
