import {User} from './User';
export interface Nft {
  owner: User;
  creator: User;
  addr: string;
  price: string;
}