import Home from "./components/home_pg/Home";
import About from "./components/about_pg/About";
import Blog from "./components/blog_pg/Blog";
import { Route,Routes } from "react-router-dom";
import Contact from "./components/contact_pg/Contact";
import { useState, createContext} from "react";
import img1 from "./assest/images/carouselImages/img-1.jpeg";
// import img2 from "./assest/images/carouselImages/img-2.jpeg";
import img3 from "./assest/images/carouselImages/img-3.jpeg";
// import img4 from "./assest/images/carouselImages/img-4.jpeg";
// import img5 from "./assest/images/carouselImages/img-5.jpeg";
// import img6 from "./assest/images/carouselImages/img-6.jpeg";
import img7 from "./assest/images/carouselImages/img-7.jpeg";
import PostDetails from "./components/postDetalis/PostDetails";
import Counter from "./components/Counter";
// import img8 from "./assest/images/carouselImages/img-8.jpeg";
// import img9 from "./assest/images/carouselImages/img-9.jpeg";


export const CarouselItemsContext = createContext();
export const InfoAboutPage = createContext();

function App() {
  //information carousel and posts
  const [carouselItems, setCarouselItems] = useState(
    [
      {
        id: 1,img: img1 , title: "What is Lorem Ipsum?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", details: { wroteBy: "admin", date: "20-01-2023",qtyComments: "12"},category:  "lifestyle",tags: "beauty, nature"
      },
      {
        id: 2,img: img7,title: "Why do we use it?",desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",details: {wroteBy: "admin",date: "20-01-2023",qtyComments: "12"},category: "programers",tags: "best templates, templateMo"
      },
      {
        id: 3,img: img3,title: "Where can I get some?",desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",details: {wroteBy: "admin", date: "20-01-2023",qtyComments: "12"},category: "beauity",tags: "HTML CSS, photoshop"
      }
    ]
    );

  return (
    <CarouselItemsContext.Provider value={carouselItems}>
      <Routes className="App">
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Blog" exact element={<Blog />} />
        <Route path="/PostDetalis" exact element={<PostDetails />} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="/Counter" exact element={<Counter />} />
      </Routes>
    </CarouselItemsContext.Provider>
  );
}

export default App;
