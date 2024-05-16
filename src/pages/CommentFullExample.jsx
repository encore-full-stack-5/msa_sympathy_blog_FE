import React, { useState } from "react";

import Avatar from "@atlaskit/avatar";

import Comment, {
  CommentAction,
  CommentTime,
  CommentAuthor,
} from "@atlaskit/comment";
import sampleAvatar from "../images/avatar_400x400.jpg";

const CommentFullExample = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };
  return (
    <Comment
      avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
      author={<CommentAuthor>소성민</CommentAuthor>}
      time={<CommentTime>Mar 14, 2024</CommentTime>}
      content={<p>송송송송송밍 송송민</p>}
      actions={[
        <CommentAction key="like" onClick={toggleLike}>
          {liked ? "Unlike" : "Like"} ({likes})
        </CommentAction>,
      ]}
    />
  );
};

export default CommentFullExample;
