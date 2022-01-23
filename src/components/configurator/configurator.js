import './configurator.css'
import { useState, useEffect } from 'react'

function Configurator() {

    const [items, setItems] = useState([]);
    const [sliceOne, setSliceOne] = useState([]);
    const [sliceTwo, setSliceTwo] = useState([]);

    useEffect(() => {
        // Fecth page-2 data
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
        .then((res) => res.json())
        .then((data) => {
            setItems(data.calculator);
            setSliceOne(data.calculator.title.slice(0, 14))
            setSliceTwo(data.calculator.title.slice(15, 28))
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    // console.log('Calc data title', items);
    // console.log('Slice one: ', sliceOne);
    // console.log('Slice two: ', sliceTwo);

    return (
        <div className='main-conf'>

            <section className='conf-flex'>

                {/* Save more section */}
                <div className='container-conf'>
                    <span className='rectangle conf'>
                        {/* {items.title} */}
                        {sliceOne}<br /><br />
                        {sliceTwo}
                    </span>
                    <p className='description-conf'>{items.description}</p>
                </div>

                <div className='cont-flex-row'>

                    {/* Pricing section */}
                    <div className='pricing'>
                        <section className='monthly-section'>
                            <p className='monthly-spending'>Monthly <br /> Ingredient spending</p>
                            <span className='box-monthly'>
                                <span className='icon'>$</span>
                                <span className='number'>36.211</span>
                            </span>
                        </section>
                    </div>
                    <div className='half-progress'></div>
                    <div className='full-progress'></div>
                    <div className='circle'></div>

                    {/* Invoice section */}
                    <div className='invoices'>
                        <section className='monthly-section'>
                            <p className='full-time'>Full-time employees that process invoices</p>
                            <span className='box-invoice'>
                                <span className='number-invoice'>8</span>
                            </span>
                        </section>
                    </div>
                    <div className='half-progress-invoice'></div>
                    <div className='full-progress-invoice'></div>
                    <div className='circle-invoice'></div>

                </div>

            </section>

            <section className='estimations'>
                <div className='food-savings'>
                    <div>
                        <span className='icon-fs'>$</span>
                        <span className='number-fs'>8.611</span>
                    </div>  
                    <span className='text-fs'>Estimated cost food savings</span>
                </div>

                <div className='annual-saviings'>
                    <div>
                        <span className='icon-as'>$</span>
                        <span className='number-as'>36.211</span>
                    </div>
                    <span className='text-as'>Your estimated annual savings</span>
                </div>
            </section>

        </div>
    );
}

export default Configurator;