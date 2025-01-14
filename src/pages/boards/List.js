import Component from '../../core/Component'

export default class BoardList extends Component {
  template() {
    document.title = '스토리'
    return `
      <h1>Board List Page</h1>
    `
  }
}
