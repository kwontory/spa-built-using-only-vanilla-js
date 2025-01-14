import Component from '../core/Component'

export default class NotFound extends Component {
  template() {
    document.title = '404 Not Found'
    return `
      <h1>404 Not Found</h1>
    `
  }
}
