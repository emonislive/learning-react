import { useState } from "react";
import { Button } from "./Button";

// ➕ Form for adding a new friend
export function FormAddFriend({ onAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!image || !name) return;

    // Create new friend object
    const id = Math.floor(Math.random() * 100);
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`, // generate unique avatar
      balance: 0,
    };

    // Add friend to list
    onAddFriends(newFriend);

    // Reset form fields
    setName("");
    setImage("https://i.pravatar.cc/48/");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧱 Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>👤 DP URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
