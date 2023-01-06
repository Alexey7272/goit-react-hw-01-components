import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import FriendListItem from './FriendListItem';

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {friends.map( ({id, avatar, name, isOnline}) =>
               <FriendListItem
               key={id}
               avatar={avatar}
               name={name}
               isOnline={isOnline}
               />
            )}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};