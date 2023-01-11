import React from "react";
import Container from "./Components/Container";
import ImageCard from "./Components/ImageCard";
import Title from "./Components/Title";
import ExpandedCard from "./Components/ExpandedCard";
import Header from "./Components/Header";
import TextGrid from "./Components/TextGrid";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className=" ">
      <Header />
      <div className="" style={{ marginLeft: "40px", marginRight: "40px" }}>
        <Container
          picture={true}
          style={{ border: "none", borderRadius: "30px", marginTop: "30px" }}
          cold={true}
        />

        <Title name="Discover the world's top mentors" />
        <div className="">
          <ImageCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBY4bTjQVsvOWNspD4g887V2GQxmORPn0KA&usqp=CAU"
            name="Product Manager"
            content="Sed ut perspiciatis unde omnis iste natus error sit"
          />
          {/* <ImageCard
          img="https://s7ap1.scene7.com/is/image/rmit/student-homepage-bowen-st-1920px?wid=1440&hei=450&scl=1"
          name="Product Manager"
          content="they very beginning of the nation iis one we can cant comprehend"
        />
        <ImageCard
          img="https://s7ap1.scene7.com/is/image/rmit/student-homepage-bowen-st-1920px?wid=1440&hei=450&scl=1"
          name="Product Manager"
          content="Sed ut perspiciatis unde omnis iste natus error sit"
        />
        <ImageCard
          img="https://s7ap1.scene7.com/is/image/rmit/student-homepage-bowen-st-1920px?wid=1440&hei=450&scl=1"
          name="Product Manager"
          content="they very beginning of the nation iis one we can cant comprehend"
        /> */}
        </div>
        <Title name="Mentors best tips on Product Design" />
        <div
          className=""
          // style={{ marginTop: "30px", marginBottom: "30px", gap: "10px" }}
        >
          <ExpandedCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEzelEEwOa6TNECHZri1jW9NE46XEmB4NIQ&usqp=CAU"
            head="The side hustle of the famous"
            content="Your side Hustle most likely died a quick death cause youre are
              dead"
            content2="thread this new path careflly so as not to questions who has
              bestowed this authority on you"
            content3="2 days ago"
            pass={true}
            style={{ marginTop: "50px", marginBottom: "40px" }}
          />

          {/* <ExpandedCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZcDgjim8snEHvymCvxt7_4NxEe9NV_mwMw&usqp=CAU"
          head="The side hustle of the famous"
          content="Your side Hustle most likely died a quick death cause youre are
              dead"
          content2="thread this new path careflly so as not to questions who has
              bestowed this authority on you"
          content3="2 days ago"
          pass={true}
        /> */}
        </div>

        <Container style={{ height: "400px", border: "none" }} />
        <TextGrid />
        <div className="" style={{ marginTop: "40px", marginBottom: "40px" }}>
          <ImageCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGaQZekZABEuuoFWrm5IaDOxxHk1xWoDhlg&usqp=CAU"
            name="kawbskfjninje"
            content="yjbakfj eup898rreb ygvdsbhuua yvfdn ubdsfbhk"
            cards3={true}
          />
          {/* <ImageCard
          img=""
          name="kawbskfjninje"
          content="yjbakfj eup898rreb ygvdsbhuua yvfdn ubdsfbhk"
        />
        <ImageCard
          img=""
          name="kawbskfjninje"
          content="yjbakfj eup898rreb ygvdsbhuua yvfdn ubdsfbhk"
        /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
