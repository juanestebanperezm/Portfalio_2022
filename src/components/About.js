import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/pr.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Algo sobre mi? pues 🤠</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contacto</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span><a href="https://wa.me/573008607992" target="_blank">{resumeData.website}</a></span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}