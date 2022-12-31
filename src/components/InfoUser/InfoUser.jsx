import PropTypes from 'prop-types'
import css from './InfoUser.module.css'

export const InfoUser = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <div className={css.profile}>
            <div className="description">
                <img
                  src={avatar}
                  alt="User avatar"
                  className={css.avatar}
                />

                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div> 

            <ul className={css.stats}>
                <li>
                  <span className={css.label}>Followers</span>
                  <span className={css.quantity}>{followers}</span>
                </li>

                <li>
                   <span className={css.label}>Views</span>
                   <span className={css.quantity}>{views}</span>
                </li>

                <li>
                   <span className={css.label}>Likes</span>
                   <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

InfoUser.propTypes = {
   avatar: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   followers: PropTypes.number.isRequired,
   views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired,
};