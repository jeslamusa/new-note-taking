import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      setNotes(response.data);
    } catch (error) {
      setError('Failed to fetch notes. Please try again.');
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    setDeletingId(id);
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      await fetchNotes();
    } catch (error) {
      setError('Failed to delete note. Please try again.');
      console.error('Error deleting note:', error);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading && notes.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white rounded-lg shadow-md p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-20 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-6 p-4 text-red-700 bg-red-100 rounded-lg">
          {error}
          <button
            onClick={fetchNotes}
            className="ml-4 text-sm underline hover:no-underline"
          >
            Try again
          </button>
        </div>
      )}

      {notes.length === 0 && !loading ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No notes yet</h3>
          <p className="text-gray-500 mb-6">Create your first note to get started!</p>
          <Link
            to="/new"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Create Note
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
                <div className="flex space-x-2">
                  <Link
                    to={`/note/${note._id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className={`text-red-500 hover:text-red-700 ${
                      deletingId === note._id ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={deletingId === note._id}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-3">{note.content}</p>
              <div className="mt-4 text-sm text-gray-500">
                Last updated: {new Date(note.updatedAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteList; 