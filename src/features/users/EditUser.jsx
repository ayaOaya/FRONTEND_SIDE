import { userParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'

const EditUser = () => {
  const { id } = userParams()

  const user = useSelector(state => selectUserById(state, id))

  const content = user ? <EditUserForm user={user} /> : <p>Loading...</p>
  
  return content
}

export default EditUser