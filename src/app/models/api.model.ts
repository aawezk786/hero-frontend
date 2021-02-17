import { HttpHeaders } from '@angular/common/http'

export const API_URL = "http://localhost:5000/"
// export const API_LIVE = "https://booksbyweight.herokuapp.com/api"
export const API_LIVE = "http://localhost:5000/api"


export const httpOptions = {

    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }