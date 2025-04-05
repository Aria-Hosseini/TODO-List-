export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, taskText }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ease-in-out">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-xl max-w-md w-full mx-4 border border-gray-200 transition-all duration-300 ease-in-out transform scale-100 hover:scale-105">
        <h3 dir="rtl" className="text-lg font-bold mb-4">تأیید حذف</h3>
        <p dir="rtl" className="mb-6">آیا مطمئن هستید که می‌خواهید تسک "{taskText}" را حذف کنید؟</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 bg-gray-200 bg-opacity-80 text-gray-800 rounded hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            انصراف
          </button>
          <button
            onClick={onConfirm}
            className="cursor-pointer px-4 py-2 bg-red-500 bg-opacity-80 text-white rounded hover:bg-red-600 transition-all duration-300 ease-in-out"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
} 