import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

class Actor {
    constructor(fName, lName, bday, imgUrl, imdbLink){
        this.fName = fName;
        this.lName = lName;
        this.bday = moment(bday);
        this.imgUrl = imgUrl;
        this.imdbLink = imdbLink;
        this.id = uuidv4();;
    } 
    getAge = () => {
        const now = moment();
        return now.diff(this.bday, 'years');
    }
}

export default Actor; 