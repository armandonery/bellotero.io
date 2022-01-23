import { useState, useEffect } from 'react'
import './menu.css'
import Bello from '../assets/bellotero.svg'
import { Link } from 'react-router-dom'

function Menu () {

    const [items, setItems] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [fourth, setFourth] = useState([]);

    useEffect(() => {
        // Fetch global data
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
        .then((res) => res.json())
        .then((data) => {
            setItems(data.menu.items.slice(0, 1));
            setSecond(data.menu.items.slice(1, 2));
            setThird(data.menu.items.slice(2, 3));
            setFourth(data.menu.items.slice(3, 4));
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    // console.log('Fits valueof navbar', items);
    // console.log('Second value of navbar', second);
    // console.log('Third', third);
    // console.log('Fourth', fourth);

    return (
        
        <div>
        <nav className='Rectangle'>
            <Link to="/">
                <img src={Bello} alt='bello' />
            </Link>
            <ul>
                <span className='line'></span>
                
                {items.map((item) => (
                    <strong>
                        <Link to="/page-1" style={{ textDecoration: 'none' }}>
                            <li key={item.id} className='list'>{item.text}</li>
                        </Link>      
                    </strong>
                ))}

                {second.map((item) => (
                    <strong>
                        <Link to="/page-2" style={{ textDecoration: 'none' }}>
                            <li key={item.id} className='list'>{item.text}</li>
                        </Link>
                    </strong>
                ))}
                
                {third.map((item) => (
                    <strong>
                        <Link to={`/${items.route}`} style={{ textDecoration: 'none' }}>
                            <li key={item.id} className='list'>{item.text}</li>
                        </Link>     
                    </strong>
                ))}

                {fourth.map((item) => (
                    <strong>
                        <Link to={`/${items.route}`} style={{ textDecoration: 'none' }}>
                            <li key={item.id} className='list'>{item.text}</li>
                        </Link>
                    </strong>
                ))}
            </ul>

        </nav>
        </div>
    );
}

export default Menu;