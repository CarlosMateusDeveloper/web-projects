import Navbar from '../../componentes/navbar/navbar.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'
import './chat.css'
export default function Chat() {
    return (
        <>
            
            <main className='ia'>
                <Navbar />
                
                <form className='d-flex flex-column justify-content-center align-items-center' action="#">
                    <label htmlFor="text" className='text-white label mb-4'>Quer me conhecer melhor?</label>
                    <input
                        className="form-control rounded-5 mb-5 py-4"
                        type="text"
                        placeholder="Pergunte alguma coisa"
                        aria-label="input exemplo"
                        />

                </form>
            </main>
        </>
    )
        
        
}