import { makeAutoObservable } from 'mobx'

export interface MenuItemType {
	id: number
	title: string
	path: string
}

class MenuStore {
	menu: MenuItemType[] = [
		{ id: 1, title: 'Dashboard', path: '/' },
		{ id: 2, title: 'Products', path: '/products' },
		{ id: 3, title: 'Favorites', path: '/favorites' },
		{ id: 4, title: 'Inbox', path: '/inbox' },
		{ id: 5, title: 'Order Lists', path: '/order-lists' },
		{ id: 6, title: 'Product Stock', path: '/product-stock' },
		{ id: 7, title: 'Pricing', path: '/pricing' },
		{ id: 8, title: 'Calendar', path: '/calendar' },
		{ id: 9, title: 'Invoice', path: '/invoice' },
		{ id: 10, title: 'UI Elements', path: '/ui-elements' },
		{ id: 11, title: 'Team', path: '/team' },
		{ id: 12, title: 'Table', path: '/table' },
	]

	constructor() {
		makeAutoObservable(this)
	}

	setMenu(menu: MenuItemType[]): void {
		this.menu = menu
	}
}

const menuStore = new MenuStore()
export default menuStore
