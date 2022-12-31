// TASK 1
import userInfo from './InfoUser/user.json'
import {InfoUser} from 'components/InfoUser/InfoUser'

// TASK 2
import {Data} from 'components/Data/Data.jsx'

// TASK 3
import FriendsListItem from './FriendsList/friends.json'
import {FriendsList} from './FriendsList/FriendsList'

export const App = () => {
  return (
    <div>
      <InfoUser
      username={userInfo.username}
      tag={userInfo.tag}
      location={userInfo.location}
      avatar={userInfo.avatar}
      followers={userInfo.stats.followers}
      views={userInfo.stats.views}
      likes={userInfo.stats.likes}
      />
      <Data
      title={'Upload stats'}
      />
      <FriendsList
      friends={FriendsListItem}
      />
    </div>
  );
};