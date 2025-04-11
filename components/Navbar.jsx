import React from 'react'

const Navbar = () => {
    return (
        <nav>
             <a
                class="text-decoration-none text-capitalize rounded"
                href=""
            > <span class="link-icon">🎰</span>Contador Numérico
            </a>

            <a
                class="text-decoration-none text-capitalize rounded"
                href="https://consultaporcep.vercel.app/"
                target="_blank"
            > <span class="link-icon">📬</span>Busca Cep
            </a>

            <a
                class="text-decoration-none text-capitalize rounded"
                href="https://climagora.vercel.app/"
                target="_blank"
            > <span class="link-icon">⛅</span>Clima Agora
            </a>
    
            <a
                class="text-decoration-none text-capitalize rounded"
                href="https://numerosaleatorios-react.vercel.app/"
                target="_blank"
            > <span class="link-icon">🎲</span>Números aleatórios
            </a>
        </nav>
    )
}

export default Navbar