import PropTypes from 'prop-types'
import css from './FriendList.module.css'

export default function FriendListItem ( { avatar, name, isOnline }) {
    return (
        <li className={css.friends__item}>
            <span className={`${css.span} ${css[isOnline]}`}></span>
            <img className={css.friends__avatar} src={avatar} alt="User avatar" width="48"/>
            <p className={css.friends__name}>{name}</p>
        </li>
    );
};

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}