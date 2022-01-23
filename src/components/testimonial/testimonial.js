import { useState, useEffect } from 'react'
import './testimonial.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function Testimonial () {
    
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        // Fetch page-1 data
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
        .then((res) => res.json())
        .then((data) => {
            setTitle(data.slider);
            setItems(data.slider.reviews.slice(0, 1));
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    // console.log('Page 1 first position[0]', items);
    // console.log('Slider title', title);

    return (
        <>
        {<ul className='data'>
            {items.map((item) => (
                    <li key={item.id}>
                        <span className='rectangle'>
                            {title.title}
                        </span>
                        <section className='container'>
                            <div className='message-flex'>
                                <div>
                                    <p className='name'>{item.name}</p> <br />
                                    <p className='position'>{item.position}</p>
                                </div>
                                <p className='comment'>"{item.comment}"</p>
                            </div>
                        </section>
                        <div className='buttons'>
                                <span className='quarter'>
                                    1/4
                                </span>
                                <span className='arrow-left'>
                                    <AiOutlineArrowLeft className='arrow-icons' />
                                </span>
                                <span className='arrow-right'>
                                    <AiOutlineArrowRight className='arrow-icons' />
                                </span>
                        </div>
                    </li>     
            ))}
        </ul>}
        </>
    );
}

export default Testimonial;