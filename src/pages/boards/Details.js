import Component from '../../core/Component'

export default class BoardDetails extends Component {
  template() {
    document.title = '스토리'
    return `
      <h1>Board Details Page</h1>
    `
  }
}
