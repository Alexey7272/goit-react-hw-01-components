import userInfo from 'user.json'
import {InfoUser} from 'components/InfoUser/InfoUser'

export const App = () => {
  return (
    <div>
      <InfoUser
      // key={userInfo.username}
      username={userInfo.username}
      tag={userInfo.tag}
      location={userInfo.location}
      avatar={userInfo.avatar} 
      />
    </div>
  );
};