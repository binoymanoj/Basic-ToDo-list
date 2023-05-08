import { useState } from "react";

function Todo() {
    const [singleTodo, setSingleTodo] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <>
            <section className='max-w-4xl mx-auto'>
                <h1 className='text-center text-gray-700 px-8 py-4 border mt-4 mb-2 rounded-md bg-blue-100 text-3xl font-medium tracking-wider'>
                    Basic Todo
                </h1>
                <div className='flex justify-between border p-8 rounded-md shadow-sm bg-blue-50'>
                    <form action='' className='flex'>
                        <div className='mt-2'>
                            <label className='mr-2 text-lg text-gray-600 font-medium' htmlFor="">
                                Create Todo
                            </label>
                            <input
                                type='text'
                                className='border border-gray-200 py-2 px-2 rounded-md text-black focus:outline-none'
                                onChange={(e) => {
                                    setSingleTodo(e.target.value);
                                }}
                                value={singleTodo}
                            />
                        </div>

                        <div className='ml-2'>
                            <button
                                className='mt-2 border px-3 py-2 rounded-xl bg-yellow-200 focus:outline-none hover:bg-yellow-300'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setTodos([...todos, singleTodo]);
                                    setSingleTodo("");
                                }}>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
                                </svg>
                            </button>
                        </div>
                    </form>

                    <TodoList todos={todos} setTodos={setTodos} />
                </div>
            </section>
        </>
    );
}

function TodoList({ todos, setTodos }) {
    return (
        <ul className='mt-2'>
            {todos.map((tod, i) => (
                <li className='text-lg mt-1'>
                    {tod} -
                    <button
                        onClick={() => {
                            todos.splice(todos.indexOf(i), 1);
                            setTodos([...todos]);
                        }}
                        className='border text-sm border-gray-200 bg-yellow-200 px-3 py-1 rounded-full hover:bg-blue-300 focus:outline-none'>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Todo;