import SayName from "./SayName";

const Hello = (props) => {
    const {myName}=props;
    return <div> 
        <p>My Web Application  - {myName}</p>

        <SayName/>
    </div>
    }
export default Hello;
    