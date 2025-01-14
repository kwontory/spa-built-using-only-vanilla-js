export default class Router {
  constructor($target) {
    this.routes = {}
    this.$target = $target
    this.params = {}

    window.addEventListener('popstate', this.handlePopState.bind(this))

    // 이벤트 위임을 활용 a[data-link] 클릭 이벤트 처리
    document.body.addEventListener('click', e => {
      const $link = e.target.closest('a[data-link]')
      if (!$link) return

      e.preventDefault()
      const path = $link.getAttribute('href')
      this.navigateTo(path)
    })
  }

  // 라우터 추가
  addRoute(path, page) {
    this.routes[path] = page // 각 path 별 페이지 객체
  }

  // 경로 변경 시 네비게이션
  navigateTo(path) {
    history.pushState(null, null, path)
    this.handleRoute(path)
  }

  // popstate 발생 시 경로 처리
  handlePopState() {
    this.handleRoute(window.location.pathname)
  }
  // 경로에 맞는 컴포넌트 렌더링
  handleRoute(path) {
    const matchingRoute = Object.keys(this.routes).find(route => {
      return this.isRouteMatch(route, path) // 라우터 매칭 확인
    })

    const page = this.routes[matchingRoute]

    if (matchingRoute && page) {
      const params = this.extractParams(matchingRoute, path)
      this.params[matchingRoute] = { ...this.params[matchingRoute], ...params } // 파라미터 할당
      page.render() // 페이지 렌더링
    } else {
      this.routes['404'].render()
    }
  }

  isRouteMatch(route, path) {
    const routeParts = route.split('/').filter(Boolean)
    const pathParts = path.split('/').filter(Boolean)

    // 경로 길이가 다르면 매칭되지 않음
    if (routeParts.length !== pathParts.length) {
      return false
    }

    // 경로 부분별로 비교
    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i]
      const pathPart = pathParts[i]

      if (routePart.startsWith(':')) {
        // :param은 무엇이든 매칭
        continue
      } else if (routePart !== pathPart) {
        // :param이 아닌 부분은 정확히 일치해야 매칭
        return false
      }
    }

    return true
  }

  findMatchRoute(path) {
    return (
      Object.keys(this.routes).find(route => this.isRouteMatch(route, path)) ||
      null
    )
  }

  extractParams(route, path) {
    const routeParts = route.split('/').filter(Boolean) // 경로 분리
    const pathParts = path.split('/').filter(Boolean)

    const params = {}
    routeParts.forEach((part, index) => {
      if (part.startsWith(':')) {
        // :param 형식의 부분은 동적 파라미터로 추출
        const paramName = part.slice(1)
        params[paramName] = pathParts[index]
      }
    })
    return params
  }

  start() {
    this.handlePopState(window.location.pathname)
  }
}
