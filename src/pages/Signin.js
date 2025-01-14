import Component from '../core/Component'

export default class Signin extends Component {
  template() {
    document.title = '로그인'
    return `
      <h1>Signin Page</h1>
    `
  }
}
