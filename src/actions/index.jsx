const todosRequest = todos => {
  return {type: 'FETCH_TODOS_SUCCESS', payload: todos}
}
const loaderOn = () => {
  return {type: 'FETCH_LOADER_ON'}
}
const loaderOff = () => {
  return {type: 'FETCH_LOADER_OFF'}
}
const fetchTodos = trackingService => () => dispatch => {
  console.log(trackingService)
  return trackingService.getTodos().then(todos => dispatch(todosRequest(todos)))
}
const fetchLoaderOn = () => () => dispatch => {
  return dispatch(loaderOn())
}
const fetchLoaderOff = () => () => dispatch => {
  return dispatch(loaderOff())
}
export {
  fetchTodos,
  fetchLoaderOn,
  fetchLoaderOff
}