import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import FriendListItem from './FriendListItem';

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {friends.map( (friendItem) =>
               <FriendListItem
               key={friendItem.id}
               avatar={friendItem.avatar}
               name={friendItem.name}
               isOnline={friendItem.isOnline}
               />
            )};
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};