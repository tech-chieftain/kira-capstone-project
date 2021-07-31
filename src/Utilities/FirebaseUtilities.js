import Firebase from "../Firebase";
import Servicediscription from "src/components/Servicediscription/Servicediscription";
// Add the functions used in firebase here.

export const getFreelancers=()=>{
var citiesRef = Firebase.firestore().collection("Freelancers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
       
       
    });
});
}
