import styles from './Logo.module.scss'

export function Logo() {
	return (
		<div className={styles.logo}>
			<span className={styles.left}>MS</span>
			<span className={styles.right}>Stack</span>
		</div>
	)
}
