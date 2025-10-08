import { useState } from "react";
import { Button } from "./Button";

// 💸 Form to split a bill between user and selected friend
export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(""); // total bill amount
  const [paidByUser, setPaidByUser] = useState(""); // user's contribution
  const paidByFriend = bill ? bill - paidByUser : ""; // friend’s share
  const [whoIsPaying, setWhoIsPaying] = useState("user"); // who paid the bill

  // When form is submitted, calculate new balance
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    // If you paid more than your share, friend owes you (positive value)
    // If friend paid, you owe them (negative value)
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    // Reset fields
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍 Your expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser // Prevent user expense > bill
                : Number(e.target.value)
            )
          }
        />

        <label>👫 {selectedFriend.name}'s expense</label>
        <input type="text" disabled placeholder={paidByFriend} />

        <label>🧾 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
      </form>
    </>
  );
}
