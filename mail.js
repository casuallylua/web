const firebaseConfig = {
  apiKey: "AIzaSyC2j23SpgCFBSBfOiXSc8TJAgspNJJJ-0c",
  authDomain: "my-portfolio-e26c0.firebaseapp.com",
  projectId: "my-portfolio-e26c0",
  storageBucket: "my-portfolio-e26c0.firebasestorage.app",
  messagingSenderId: "322879771293",
  appId: "1:322879771293:web:68f1280d8783a15e927a74",
  measurementId: "G-6WW8FBX4LP"
};
// init firebase
firebase.initializeApp(firebaseConfig);

//reference
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault();
}

