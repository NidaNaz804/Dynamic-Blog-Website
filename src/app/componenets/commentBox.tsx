'use client'
import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComment = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  // Function to remove a comment
  const removeComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold text-purple-600 text-center">Comment Box</h1>
      <div className="mt-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="border border-purple-500 w-full p-2 rounded-md"
        />
        <button
          className="bg-purple-500 text-white w-full py-2 mt-3 rounded-md hover:bg-purple-600 transition"
          onClick={addComment}
        >
          Add Comment
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">All Comments:</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Add your comment!</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {comments.map((data, index) => (
              <li
                key={index}
                className="bg-gray-100 p-2 rounded-md flex justify-between items-center"
              >
                <span>{data}</span>
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => removeComment(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
