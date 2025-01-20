export interface ICar {
	id: number
	image: string
	name: string
	price: string
}

export interface iCarData extends Omit<ICar, 'id'> {
	
}