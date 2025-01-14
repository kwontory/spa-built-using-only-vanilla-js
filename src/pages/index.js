import Signin from './Signin'
import Signup from './Signup'

import UserDetails from './users/Details.js'
import UserEdit from './users/Edit.js'

import BoardList from './boards/List.js'
import BoardDetails from './boards/Details.js'
import BoardEdit from './boards/Edit.js'

import NotFound from './404.js'

export default main => {
  // pages component export
  const signin = new Signin(main)
  const signup = new Signup(main)

  const userDetails = new UserDetails(main)
  const userEdit = new UserEdit(main)

  const boardList = new BoardList(main)
  const boardDetails = new BoardDetails(main)
  const boardEdit = new BoardEdit(main)

  const notFound = new NotFound(main)

  return {
    signin,
    signup,
    userDetails,
    userEdit,
    boardList,
    boardDetails,
    boardEdit,
    notFound,
  }
}
