import type { MenuItemType } from '~/store/sidebar-store'
import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { useLocation } from 'react-router'

interface Props {
	menu: MenuItemType[]
}

export function Menu({ menu }: Props) {
	const location = useLocation()
	return (
		<div className={styles.menu}>
			{menu.map(item => (
				<MenuItem
					link={item.path}
					key={item.id}
					title={item.title}
					isActive={location.pathname === item.path}
				/>
			))}
		</div>
	)
}
