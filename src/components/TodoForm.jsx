import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function TodoForm({addTask}){
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === ""){
          alert(" لطفا فیلد را پر کنید!");
          return;
        }
        addTask(task, date, priority);
        setTask("");
        setDate("");
        setPriority("");
    };
    
    return(
      <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
        dir="rtl"
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className="border p-2 rounded w-full outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="تسک جدید را وارد کنید..."
      />
      <select 
        dir="rtl"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded w-20 outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">اولویت</option>
        <option value="کم">کم</option>
        <option value="متوسط">متوسط</option>
        <option value="زیاد">زیاد</option>
      </select>
      <div className="flex items-center gap-1">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-left"
          onChange={setDate}
          value={date}
          inputClass="border p-3 rounded w-28 outline-none focus:ring-2 focus:ring-blue-400"
          containerClassName="w-28"
        />
        <span>تاریخ</span>
      </div>

      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition cursor-pointer"
      >
        +
      </button>
      </form>
    )
}