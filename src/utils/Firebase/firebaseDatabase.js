import firebase from 'firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

let configKorySergey = {
  apiKey: process.env.REACT_APP_WEB_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  OAuth: process.env.REACT_APP_OAUTH,
}

const app = firebase.initializeApp(configKorySergey)
const database = app.database()

const writeDataDatabase = (data, userId) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set(data)
  toast.success('Path added to database!', {
    theme: 'colored',
  })
}

const reedDataDatabase = postId => {
  const userPathRef = firebase.database().ref('users/' + postId)
  userPathRef.on('value', snapshot => {
    const data = snapshot.val()
    if (data) {
      sauntrStore.setUserPath(data)
    }
  })
}

const updateDataDatabase = (data, userId) => {
  const newPathtKey = firebase.database().ref().child('users/').push().key

  let updates = {}
  updates[`/users/${userId}/${newPathtKey}`] = data
  firebase.database().ref().update(updates)

  toast.success('Path added to database!', {
    theme: 'colored',
  })
}

const remuveDataDatabase = (data, userId) => {
  firebase
    .database()
    .ref('users/' + userId)
    .remove(data)
  toast.success('Path was remuved from database!', {
    theme: 'colored',
  })
}

export {
  writeDataDatabase,
  updateDataDatabase,
  reedDataDatabase,
  remuveDataDatabase,
}
