import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {

                    const {id, name, category, image, description} = curElem;

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">
                                            {id}
                                        </span>
                                        <span className="card-author subtle">{name}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis repellendus quam
                                            suscipit. Velit, cum iusto, accusantium fugit hic debitis architecto et animi, asperiores ratione
                                            quibusdam ab odit voluptatem? Ipsam?
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media"/>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard