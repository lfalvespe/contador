import React from 'react'

const Display = ({ countArray, setCount }) => {
    return (

        <>
            <div className="display">

                {countArray.length === 5 &&
                    <span className="digit">
                        {
                            countArray.length >= 5
                                ? countArray[0]
                                : '0'
                        }
                    </span>
                }

                <span className="digit">
                    {
                        countArray.length >= 4
                            ? countArray[countArray.length - 4]
                            : '0'
                    }
                </span>

                <span className="digit">
                    {
                        countArray.length >= 3
                            ? countArray[countArray.length - 3]
                            : '0'
                    }
                </span>
                <span className="digit">
                    {
                        countArray.length >= 2
                            ? (countArray[countArray.length - 2])
                            : ('0')
                    }
                </span>
                <span className="digit">
                    {countArray[countArray.length - 1]}
                </span>

            </div>

            <br />
            {countArray.length > 5
                && <p onClick={() => setCount(0)}>
                    <span>LIMITE MÁXIMO ATINGIDO❗❗❗</span>
                    <br /><br />
                    <span className='blink' style={{ color: 'lightblue' }}>Clique para reiniciar</span>
                </p>
            }

        </>
    )
}

export default Display