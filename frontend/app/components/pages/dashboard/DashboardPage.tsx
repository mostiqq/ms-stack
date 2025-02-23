import { Sidebar } from '~/components/sidebar/Sidebar'
import styles from './DashboardPage.module.scss'

export function DashboardPage() {
	return (
		<div className={styles.main}>
			<Sidebar />
			<div className={styles.right}>Dashboard</div>
		</div>
	)
}
