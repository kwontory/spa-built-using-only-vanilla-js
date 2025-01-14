import Component from '../../core/Component'
import { useParams } from '../../router/useParams'

export default class UserDetails extends Component {
  template() {
    document.title = '회원 정보'

    let { id } = useParams()

    return `
      <h1>User Details Page</h1>
      <p>User id : ${id}</p>
    `
  }
}
