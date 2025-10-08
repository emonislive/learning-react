import { useState } from "react";
import "./index.css";
import { FormSplitBill } from "./FormSplitBill";
import { FormAddFriend } from "./FormAddFriend";
import { FriendsList } from "./FriendsList";
import { Button } from "./Button";

// 🧱 Initial list of friends with balances
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7, // You owe Clark $7
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20, // Sarah owes you $20
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0, // Even
  },
];

// 🧩 Main App component
export default function App() {
  // Manage state for friends, add-friend form, and selected friend
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Toggle the Add Friend form visibility
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(false); // close any open friend selection
  }

  // Add a new friend to the list
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); // hide form after adding
  }

  // Select a friend (or deselect if already selected)
  function handleSelection(friend) {
    setSelectedFriend((e) => (e?.id === friend.id ? null : friend));
    setShowAddFriend(false); // close add form when selecting friend
  }

  // Update a friend's balance when a bill is split
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value } // update selected friend's balance
          : friend
      )
    );
  }

  // 🎨 Render the full UI
  return (
    <div className="app">
      <div className="sidebar">
        {/* Friend list on the left */}
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {/* Add friend form (only visible when toggled) */}
        {showAddFriend && <FormAddFriend onAddFriends={handleAddFriend} />}

        {/* Toggle button for Add Friend form */}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {/* Split bill form on the right (only visible when friend is selected) */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
