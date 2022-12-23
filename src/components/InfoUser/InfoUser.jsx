import PropTypes from 'prop-types'
import css from './InfoUser.module.css'

export const InfoUser = ({ username, tag, location, avatar}) => {
    return (
        <div className="description">
            <img
             src={avatar}
             alt="User avatar"
             className="avatar"
            />

          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div> 
    );
};

InfoUser.propTypes = {
   avatar: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
};