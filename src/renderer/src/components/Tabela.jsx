import { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Tabela = ({ data }) => {
    return (
        <div className='w-full max-w-6xl mx-auto'>

            <table className="table-auto border-collapsed border-spacing-0 w-full">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key} className="border border-gray-400 px-1 py-1">{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} >
                            {Object.values(item).map((value, idx) => (
                                    <td key={idx} className="text-center border border-gray-400 py-1">{value}</td>
                            ))} 
                            <td>
                                <div className="flex justify-evenly">
                                    <Link to="/estoque">
                                        <MdEdit />
                                    </Link>
                                    <Link to="/estoque">
                                        <FaTrash />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;