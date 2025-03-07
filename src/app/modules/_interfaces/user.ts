import {Account} from './account';

export interface User {
   id: number;
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   accounts: Account[];

}
