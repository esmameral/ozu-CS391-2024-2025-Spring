import SayName from "./SayName";

const Hello = (props) => {
    const {myName}=props;
    return <div> My Web Application  - {myName}

        <SayName/>
    </div>
    }
export default Hello;
    