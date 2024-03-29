export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type ContactType = {
  id: string;
  name: string;
  email: string;
  address: AddressType;
};

export type PostType = {
	id: number,
  title: string;
  body: string;
};

export type SocialsType = {
  id: number;
  icon: string;
  path: string;
};
