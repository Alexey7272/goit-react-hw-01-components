import PropTypes from 'prop-types'
import css from './FriendsList.module.css'

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {friends.map(friend => 
                <li key={friend.id} className={css.friends__item}>
                  <span className={`${css.span} ${css[friend.isOnline]}`}>{friend.isOnline}</span>
                  <img className={css.friends__avatar} src={friend.avatar} alt="User avatar" width="48" />
                  <p className={css.friends__name}>{friend.name}</p>
                </li>
            )}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.array
};