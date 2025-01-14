import router from './router/index.js'
import Component from './core/Component.js'
import createPages from './pages/index.js'

export default class App extends Component {
  constructor($target) {
    super($target)
    this.render()
  }

  template() {
    return `
      <nav>
        <a href="/signin" data-link>로그인</a>
        <a href="/signup" data-link>회원가입</a>
        <a href="/boards" data-link>Board List</a>
        <a href="/boards/456" data-link>Board Details</a>
        <a href="/users/123" data-link>User Details</a>
        <a href="/users/123/edit" data-link>User Edit</a>
      </nav>
      <main></main>
    `
  }

  mounted() {
    const $main = this.$target.querySelector('main')
    const pages = createPages($main)

    //router.addRoute('/', pages.home) // TODO

    // Authentication
    router.addRoute('/signin', pages.signin)
    router.addRoute('/signup', pages.signup)

    // User
    router.addRoute('/users/:id', pages.userDetails)
    router.addRoute('/users/:userid/edit', pages.userEdit)

    // Board
    router.addRoute('/boards', pages.boardList)
    router.addRoute('/boards/:id', pages.boardEdit)
    router.addRoute('/boards/:id/edit', pages.boardDetails)

    router.addRoute('404', pages.notFound)

    router.start()
  }
}
