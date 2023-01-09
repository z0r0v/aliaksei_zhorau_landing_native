
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set} from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://aliakseizhorau.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


/**
 *
 * @param {String} path
 */
function getData(path){
    const dbRef = ref(getDatabase());

    get(child(dbRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
           return snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}



/**
 *
 * @param {String} path
 * @param {Object} data
 */
function setData(path, data) {
    const db = getDatabase();
    set(ref(db, path), data);
}

setData('user/', {cvxvxc:'asdfasd'});