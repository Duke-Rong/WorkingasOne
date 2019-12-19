import Rebase from 're-base';
import { initializeApp } from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDdTIUm1Pvad0fOfrJ2pB216WAU_X4lhOc",
    authDomain: "workingasone-d281f.firebaseapp.com",
    databaseURL: "https://workingasone-d281f.firebaseio.com",
    projectId: "workingasone-d281f",
    storageBucket: "workingasone-d281f.appspot.com",
    messagingSenderId: "446625486724",
    appId: "1:446625486724:web:ab410060b703d32ea8efd1",
    measurementId: "G-Y0CMED9VP3"
}

const app = initializeApp(config);
export const base = Rebase.createClass(app.database());

// // firebase本体
// export const db = app.database()
// // 共分为三层：groups, members, cards
// // 此处为最外层: groups
// export const groupsDB = db.ref('/groups')
// // 使用者
// export const authService = app.auth()
