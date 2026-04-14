export interface ICourse {
  id: string;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  imgUrl: string;
  catId: number | string;
}
