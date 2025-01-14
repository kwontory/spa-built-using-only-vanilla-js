import Component from '../core/Component'

export default class Signup extends Component {
  template() {
    document.title = '회원 가입'
    return `
      <h1>Signup Page</h1>
    `
  }
}
