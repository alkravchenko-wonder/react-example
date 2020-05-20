import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {withTrackingService} from '../../hoc'
import {connect} from 'react-redux'
import {fetchTodos} from '../../actions'
import TodoItem from '../../components/todoItem'
import './todosPage.css'

const TodosPage = ({fetchTodos, todos}) => {
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <Link to='/'>
        <h1>Go to main page</h1>
      </Link>
      <TodoItem todos={todos}/>
    </>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { trackingService } = ownProps
  return bindActionCreators({
    fetchTodos: fetchTodos(trackingService),
  }, dispatch)
}
const mapStateToProps = state => {
  if(state){
    return{
      todos: state.todos,
      loading: state.loading
    }
  }
  return {state}
}

export default withTrackingService()(
  connect(mapStateToProps, mapDispatchToProps)(TodosPage))
