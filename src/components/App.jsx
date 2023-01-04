// TASK 1
import userInfo from './Profile/user.json'
import {InfoUser} from 'components/Profile/Profile'

// TASK 2
import data from './Statistics/data.json'
import {Data} from 'components/Statistics/Statistics.jsx'

// TASK 3
import FriendsListItem from './FriendList/friends.json'
import {FriendsList} from './FriendList/FriendList'

// TASK 4
import TransactionsList from './TransactionHistory/transactions.json'
import { Transaction } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div>
      <InfoUser
      username={userInfo.username}
      tag={userInfo.tag}
      location={userInfo.location}
      avatar={userInfo.avatar}
      stats={userInfo.stats}
      />
      <Data
      stats={data}
      title={'Upload stats'}
      />
      <FriendsList
      friends={FriendsListItem}
      />
      <Transaction
      transactions={TransactionsList}
      />
    </div>
  );
};