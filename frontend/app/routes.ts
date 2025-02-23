import { type RouteConfig, index } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'), // Главная страница ("/")
	{ path: 'dashboard', file: 'routes/dashboard.tsx' }, // "/about"
] satisfies RouteConfig
