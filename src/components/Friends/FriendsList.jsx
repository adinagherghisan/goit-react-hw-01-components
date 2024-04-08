import PropTypes from "prop-types";
import styles from './FriendsList.module.css';
import FriendListItem from "./FriendListItem";
function FriendsList({ friends }) {
   
           return (
    <ul className={styles.friendslist}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>)
     
}
 FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ...FriendListItem.propTypes
    }).isRequired
  ).isRequired
 }
export default FriendsList