import router from './index'

export function useParams() {
  const matchRoute = router.findMatchRoute(window.location.pathname)
  return matchRoute ? router.params[matchRoute] || {} : {}
}
