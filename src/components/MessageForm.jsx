import { useState } from "react";
import supabase from "../../api/db";

function MessageForm() {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handle_submit = async (e) => {
    console.log("Submit");
    e.preventDefault();

    if (author.length < 1) {
      console.log("Author does not exist");
      return;
    }
    if (message.length < 1) {
      console.log("Message does not exist");
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.from("messages").insert([
        {
          author: author,
          message: message,
        },
      ]);
      if (error) {
        console.error(error.message);
        return;
      }
      console.log("Message sent successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handle_submit}>
        <input
          type="text"
          name="author"
          placeholder="What's your name?"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="What's your message?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{submitting ? "Submitting.." : ""}</h3>
    </>
  );
}

export default MessageForm;
