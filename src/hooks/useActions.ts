import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActionCreators from '../store/actionCreators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(taskActionCreators, dispatch)
}