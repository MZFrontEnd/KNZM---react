import React, { Component } from "react";

// const images = ['partnerImg.jpg', 'work.jpg','people.jpg', 'work.jpg','people.jpg','partnerImg.jpg']
// const titles = ['zostań partnerem', 'dołącz do nas', 'konferencja','o nas','nasz dzialalnosc','zarząd']
const Panel = (props) => (
  <div className="category__item category__item--1">
      <div className="category__item--img" style = {{backgroundImage: `url(img/${props.img} )`}}></div>
      <h1 className="category__item--title">{props.title}</h1>
      <div className="category__item--line"></div>
      <button className="category__item--btn">Czytaj</button>   
  </div>
)

const CategoryPanels = () => {
  const panelsList = [
    {id: 1, img: 'partnerImg.jpg', title: 'zostań partnerem'},
    {id: 2, img: 'work.jpg', title: 'dołącz do nas'},
    {id: 3, img: 'people.jpg', title:  'konferencja'},
    {id: 4, img: 'people.jpg', title:  'o nas'},
    {id: 5, img: 'people.jpg', title: 'nasza działalność'},
    {id: 6, img: 'work.jpg', title: 'zarząd'}
    
  ]
  
  const panelsFirstRow = panelsList.map(panel => (
    <Panel
      key={panel.id}
      id={panel.id}
      img={panel.img}
      title={panel.title}
    />
  ))
 
  console.log(panelsFirstRow)
  return (
   <div>
      <section className="mainHeader__photo slider">
        <img className="sliderImg" src="./img/slides/img1.jpg" alt=""></img>
        <h1 className="sliderH1">Pierwszy tekst</h1>
        <p className="sliderTxt">Pierwszy tekst</p>
        <div className="dots">
          <span id="one" className="active"></span>
          <span id="two"></span>
          <span id="three"></span>
        </div>
    </section>
    <section className="categorySection">
      <div className="categorySection__row categorySection__firstRow">
      
        {panelsFirstRow.filter(panel => panel.props.id <= 3)}
        
      </div>
      <div className="categorySection__row categorySection__secondRow">

        {panelsFirstRow.filter(panel => panel.props.id > 3)}

      </div>
      
    </section>
  </div>
  )
}

export default CategoryPanels;