import PropTypes from 'prop-types'
import css from './StatsUser.module.css'

export const StatsUser = ({ stats }) => {
    return ( 
        <ul  className="stats">
            {stats.map(stat => (
            <li>
                <span  className="label">Followers</span>
                <span  className="quantity">{stats.followers}</span>
            </li>
        ))}
        </ul>
    );
};

StatsUser.protoTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
























// {/* <ul  className="stats">
//             <li>
//              <span  className="label">Followers</span>
//              <span  className="quantity">{followers}</span>
//             </li>

//             <li>
//               <span  className="label">Views</span>
//               <span className="quantity">{views}</span>
//             </li>

//             <li>
//               <span  className="label">Likes</span>
//               <span  className="quantity">{likes}</span>
//             </li>
//         </ul> */}