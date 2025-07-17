import React, { useEffect, useRef, useState } from "react";

const data = [];

const PushAndDelete = () => {
    const [customers, setCustomers] = useState(data);
    const [name, setName] = useState('');

    const handleOnClick = () => {
        if (name) {
            setCustomers(prevCustomers => [
                ...prevCustomers,
                { id: prevCustomers.length + 1, name }
            ]);

            setName('');
        }
    };

    const handleDelete = (id) => {
        setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== id));
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleOnClick();
        }
    };

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const vPlaceholder = "INPUT.placeholder"

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                placeholder={vPlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleOnClick} > Add </button>
            <ul>
                {
                    customers.map((customer) => (
                        <li key={customer.id} >
                            {customer.name} < button onClick={() => handleDelete(customer.id)}> Delete </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default PushAndDelete;
