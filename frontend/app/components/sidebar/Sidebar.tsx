import { observer } from 'mobx-react-lite'
import { Logo } from './logo/Logo'
import styles from './Sidebar.module.scss'
import menuStore from '~/store/sidebar-store'
import { Menu } from './menu/Menu'
import { MenuItem } from './menu/MenuItem'
import { useLocation } from 'react-router'

export const Sidebar = observer(() => {
	const location = useLocation()
	const { menu } = menuStore
	return (
		<div className={styles.sidebar}>
			<Logo />
			<Menu menu={menu} />
			<MenuItem
				link='/settings'
				title='Settings'
				isActive={location.pathname === '/settings'}
			/>
			<button className={styles.logout}>Logout</button>
		</div>
	)
})
