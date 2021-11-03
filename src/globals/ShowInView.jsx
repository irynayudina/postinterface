
import ViewArray from './ViewArray';
function ShowInView(a){
    for(var i = 0; i < ViewArray.length; i++){
        ViewArray[i] = false;
    }
    ViewArray[a] = true;
    console.log(ViewArray);
}
export default ShowInView;