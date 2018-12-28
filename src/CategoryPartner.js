import React, { Component } from "react";

const CategoryPartner = () => {
  return(
    <section id='subSection--partnersID' data-section='mainSection__subSection--partners' className="mainSection__subSection mainSection__subSection--partners">
    <div className="subSection__partners--left">
        <h1 className="subSection__title subSection__title--partners">Zostań partnerem</h1>
        <p className="subSection__txt--partners">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae quisquam possimus corrupti inventore facere minima aperiam exercitationem enim, iure
            totam? Tempora eaque harum impedit eum facilis alias adipisci consequuntur quaerat
            perferendis. Inventore tempore ratione qui impedit obcaecati minus, ullam est culpa
            veritatis nemo sequi. Quae iste temporibus similique nobis neque id magnam debitis,
            sit fugiat, labore culpa ipsa dolorum odit cum natus repellendus sapiente esse ratione
            cumque unde veniam voluptatem aspernatur hic exercitationem. </p>
        <div className="subSection__partners--btns">
            <button className="partners__btns--readMore">
                <a className='linkWhite' href="index.html?txt=partnersShowMore">Poznaj
                    szczegóły</a></button>
            <a href="#siteMap__section--contactID">
                <button className="partners__btns--readMore">Kontakt</button></a>
        </div>
    </div>
    <div className="subSection__partners--right">

    </div>
</section>
  )
}

export default CategoryPartner;