import React, { useState } from "react";

export default function BookManager() {
  // ----- Initial Data -----
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  // ----- State for Search & New Book -----
  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // ----- Handlers -----
  const addBook = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAuthor.trim()) return;

    setBooks([
      ...books,
      { id: Date.now(), title: newTitle.trim(), author: newAuthor.trim() },
    ]);
    setNewTitle("");
    setNewAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Filtered list based on search term
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ----- UI -----
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author..."
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add Book Form */}
      <form onSubmit={addBook} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Book Title"
          className="p-2 border rounded"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="p-2 border rounded"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>

      {/* Book List */}
      <ul className="space-y-2">
        {filteredBooks.length === 0 && (
          <li className="text-gray-500">No books found.</li>
        )}
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
            <button
              onClick={() => removeBook(book.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
