import axios from 'axios'

const url = `${process.env.REACT_APP_URL_API}`

export default class TrackingService {
  wrapperGetRequest(url) {
    return axios({
      method: 'get',
      url
    }).catch(err => {
      console.log(err)
    })
  }
  getTodos() {
    return this.wrapperGetRequest(`${url}posts`)
      .then(res => res.data)
      .catch(err => console.log(err))
  }
}