import styles from './Menu.module.scss'

interface Props {
	link: string
	title: string
	isActive?: boolean
}

export function MenuItem({ link, title, isActive = false }: Props) {
	return (
		<a
			style={{
				backgroundColor: isActive ? '#4880ff' : 'transparent',
			}}
			href={link}
			className={styles.link}
		>
			{title}
		</a>
	)
}
