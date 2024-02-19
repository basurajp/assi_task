import React, { useState } from "react";

const AddTextButton = ({ onAddText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newText, setNewText] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewText("");
  };

  const handleAddText = () => {
    onAddText(newText);
    handleCloseModal();
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenModal}
      >
        Add Text
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded z-10">
            <label className="block mb-2 text-lg font-semibold">
              Enter New Text:
            </label>
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <div className="mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                onClick={handleAddText}
              >
                Add
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTextButton;
