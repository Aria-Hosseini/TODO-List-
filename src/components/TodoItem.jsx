import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';

export default function TodoItem({ task, toggleComplete, deleteTask }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setIsDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div 
        ref={setNodeRef} 
        style={style} 
        className="flex flex-row-reverse justify-between items-center border p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-center gap-2" {...attributes} {...listeners}>
          <span className="cursor-move text-gray-400">⋮⋮</span>
          <span 
            className={`cursor-pointer text-lg ${task.completed ? "line-through text-gray-400" : ""}`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleDeleteClick} 
            className="text-red-500 hover:text-red-700 transition cursor-pointer"
          >
            🗑️
          </button>
          <span className="text-sm text-gray-500">{task.date ? task.date.format("YYYY/MM/DD") : ""}</span>
          <span className="text-sm text-gray-500">{task.priority}</span>
        </div>
      </div>
      
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        taskText={task.text}
      />
    </>
  );
}