import { Link } from 'react-router-dom';
import Tabela from '../components/Tabela';
import { useState } from 'react';

const data = [
    {id: 1, nome: 'produto a', quantidade: 10, peso: 25, tipo: "cereal"},
    {id: 2, nome: 'produto b', quantidade: 5, peso: 12, tipo: "medicamento"},
    {id: 3, nome: 'produto etwetwtewtwtc', quantidade: 20, peso: 30, tipo: "racao"},
    {id: 4, nome: 'produto d', quantidade: 15, peso: 18, tipo: "cereal"},
    {id: 5, nome: 'produto e', quantidade: 8, peso: 22, tipo: "medicamento"},
    {id: 6, nome: 'produto f', quantidade: 12, peso: 28, tipo: "racao"},
    {id: 7, nome: 'produto g', quantidade: 7, peso: 16, tipo: "cereal"},
    {id: 8, nome: 'produto h', quantidade: 18, peso: 24, tipo: "medicamento"},
    {id: 9, nome: 'produto i', quantidade: 9, peso: 20, tipo: "racao"},
    {id: 10, nome: 'produto j', quantidade: 14, peso: 26, tipo: "cereal"},
    {id: 11, nome: 'produto k', quantidade: 11, peso: 19, tipo: "medicamento"},
    {id: 12, nome: 'produto l', quantidade: 6, peso: 21, tipo: "racao"},
    {id: 13, nome: 'produto m', quantidade: 13, peso: 27, tipo: "cereal"},
    {id: 14, nome: 'produto n', quantidade: 16, peso: 23, tipo: "medicamento"},
    {id: 15, nome: 'produto o', quantidade: 4, peso: 17, tipo: "racao"},
    {id: 16, nome: 'produto p', quantidade: 17, peso: 29, tipo: "cereal"},
    {id: 17, nome: 'produto q', quantidade: 3, peso: 15, tipo: "medicamento"},
    {id: 18, nome: 'produto r', quantidade: 19, peso: 31, tipo: "racao"},
    {id: 19, nome: 'produto s', quantidade: 2, peso: 14, tipo: "cereal"},
    {id: 20, nome: 'produto t', quantidade: 21, peso: 32, tipo: "medicamento"}
]

export default function TableFiltered() {
    let inputs=[
        {name: "nome", type: "text", placeholder: "Nome do produto"},
        {name: "quantidade", type: "number", placeholder: "Quantidade"},
        {name: "peso", type: "number", placeholder: "Peso"},
        {name: "tipo", type: "text", placeholder: "Tipo"}
    ]
    
    const [filters, setFilters] = useState({
        nome: '',
        quantidade: '',
        peso: '',
        tipo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    // Função para filtrar os dados
    const filteredData = data.filter((item) => {
        return (
            (filters.nome === '' || (item.nome ?? '').toLowerCase().includes(filters.nome.toLowerCase())) &&
            (filters.quantidade === '' || String(item.quantidade ?? '').includes(filters.quantidade)) &&
            (filters.peso === '' || String(item.peso ?? '').includes(filters.peso)) &&
            (filters.tipo === '' || (item.tipo ?? '').toLowerCase().includes(filters.tipo.toLowerCase()))
        );
    });

    return (
        <>
            <h1 className="font-bold">Filtros:</h1>
            <div className="grid grid-flow-col grid-rows-2 gap-2">
                {inputs.map((element, idx) => (
                    <input
                        key={idx}
                        type={element.type}
                        placeholder={element.placeholder}
                        name={element.name}
                        value={filters[element.name]}
                        onChange={handleChange}
                        className="border border-gray-500 px-4 py-2 rounded"
                    />
                ))}
                <button className="w-2/3 focus:outline-none text-white bg-green-700 hover:bg-green-800 rounded px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">
                    <Link to="/" >
                        Criar registro
                    </Link>
                </button>
                <button className="w-2/3 focus:outline-none text-white bg-green-700 hover:bg-green-800 rounded px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">
                    <Link to="/" >
                        Exportar
                    </Link>
                </button>
            </div>
        
            <h1 className="font-bold">Tabela de Estoque:</h1>    
            <Tabela data={filteredData} />
        </>
    );
}
