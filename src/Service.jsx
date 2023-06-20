import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
// import web from "../src/images/services.jpg"

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((value,index) =>{
                  return <Card key={index} imgsrc= {value.imgsrc} cardTitle={value.cardTitle} cardText={value.cardText}/>
                })
              }

              {/* <Card imgsrc={web} cardTitle="Web Development" cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content."/>
              <Card imgsrc={web} cardTitle="App Development" cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content."/>
              <Card imgsrc={web} cardTitle="IOS" cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content."/>
              <Card imgsrc={web} cardTitle="UI/UX Design" cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content."/>
              <Card imgsrc={web} cardTitle="Software Testing" cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content."/>
              <Card imgsrc={web} cardTitle="Consultancy" cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content."/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
