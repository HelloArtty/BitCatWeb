import Footer from "../components/Footer";
import "../css/About.css";

const About = () => {
    return (
        <>
            <div className="section1 bg-cat2 bg-cover bg-center">
                <div className="content">
                    <h1 class="text-7xl md:text-9xl text-slate-1000 font-bold text-center">About Us</h1>
                </div>
            </div>
            <div className="row-home">
                <div className="imgWrapper">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="contentWrapper">
                    <div className="content-img">
                        <h2>
                            About Us
                        </h2>
                        <p> BitCat was founded with a simple yet profound goal – to be the bridge that brings together cats in search of a forever home and individuals seeking the joy and companionship that only a cat can provide.
                            As avid cat lovers ourselves, we understand the unique bond that forms between humans and felines, and we are committed to fostering these connections.
                        </p>
                        <p>
                            Our vision is to create a world where every cat has a warm and loving home.
                            We believe that every cat deserves a chance to experience the comfort and security of a forever family.
                            By facilitating adoptions and providing a platform for cat enthusiasts,
                            we hope to make a positive impact on the lives of both cats and their new human companions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="content">
                    <h1 className="Head font-semibold">Members</h1>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="member">
                            <img src="https://media.discordapp.net/attachments/988168701989765160/1186637376643158026/410528324_1335352380432016_3246775920249158811_n.png?ex=6593f92d&is=6581842d&hm=7c1bfb161d01fa25acb4f3f4147e7663ab87a934e3354c85c98334082f0f4f7b&=&format=webp&quality=lossless&width=702&height=702" alt="" />
                            <p className="font-semibold">Teekamon Chaiwongwutthikul</p>
                            <p>65090500409</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="member">
                            <img src="https://media.discordapp.net/attachments/806864849488707587/1186639416509341806/3B4B0951-A9E0-451E-ABF5-ED2B091C557D.jpg?ex=6593fb13&is=65818613&hm=7b393327cab1ca693d62e44585197b7e8fbd725e70d1df5c6d57facd99822674&=&format=webp" alt="" />
                            <p className="font-semibold">Chaithawat Saklang</p>
                            <p>65090500432</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
