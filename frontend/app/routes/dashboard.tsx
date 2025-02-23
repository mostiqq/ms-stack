import type { Route } from './+types/home'
import { DashboardPage } from '~/components/pages/dashboard/DashboardPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'MS Stack | Dashboard' },
		{ name: 'description', content: 'MS Stack | Dashboard' },
	]
}

export default function Dashboard() {
	return <DashboardPage />
}
