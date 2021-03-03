import { Link } from 'react-router-dom';

const UserCard = (props) => {
    const { user } = props;
    console.log(user);

    return(
        <li>
            <Link to={`${user.login}`}>
                <h1 style={{fontSize:25, marginTop:40}}>{user.name}</h1>
                <img style={{borderRadius:300, marginTop:5}} src={user.avatar_url} alt="user headshot"></img>
                <p>{user.bio}</p>
            </Link>
        </li>
    )
}

export default UserCard;