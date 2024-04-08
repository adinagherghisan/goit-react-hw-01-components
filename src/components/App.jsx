import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json"
import TransactionHistory from "./TransactionHistory/Transaction";
import transactions from "./TransactionHistory/transactions.json";
import FriendsList from "./Friends/FriendsList";
import friends from "./Friends/friends.json"
export const App = () => {
  return (
    <>
      <Profile
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
      <FriendsList friends={friends} />
      
    </>
  );
};
