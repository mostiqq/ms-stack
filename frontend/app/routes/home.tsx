import type { Route } from './+types/home'
import { DashboardPage } from '~/components/pages/dashboard/DashboardPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'MS Stack | Dashboard' },
		{ name: 'description', content: 'Welcome to React Router!' },
	]
}

export default function Home() {
	return <DashboardPage />
}
