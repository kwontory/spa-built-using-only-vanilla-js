import Component from '../../core/Component'
import { useParams } from '../../router/useParams'

export default class UserEdit extends Component {
  template() {
    document.title = '회원 정보'

    let { userid } = useParams()
    return `
      <h1>User Edit Page</h1>
      <p>User id: ${userid}</p>
    `
  }
}
