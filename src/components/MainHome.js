import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import { useEffect } from "react";
import Footer from "./Footer";

const MainHome = () => {
  const [loaders, setLoaders] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaders(false);
    }, 2000);
    Aos.init();
    Aos.refresh();
  }, []);

  // if (loaders) {
  //   return (
  //     <ClipLoader
  //       className="text-center fw-bolder"
  //       color={"#ef0e0e"}
  //       loading={loaders}
  //       cssOverride={300}
  //       size={100}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //   );
  // }

  return (
    <div>
        <Navbar/>
      {/* //////////Banner////////////////// */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/Assets/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone.jpg"
            className="d-block w-100"
            width={100}
            height={620}
          />
        </div>
      </div>
      {/* ///////////////////////////// */}
      <h1>Categories</h1>
      <div className="Container  my-5">
        <div className="row">
          {/* //////Mens////// */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row ">
              <div className="col-12 " data-aos="fade-out">
                <div className="card mx-auto me-5" style={{ width: "20rem" }}>
                  <img
                    src="/Assets/images (6).jpg"
                    className="card-img-top "
                    height={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">Mens Category</h5>
                    <p className="card-text fw-bolder">
                      Casual menswear embraces a spectrum ranging from laid-back
                      street style to refined smart-casual looks. T-shirts,
                      jeans, and sneakers represent the epitome of relaxed urban
                      fashion.
                    </p>
                    <br />
                    <a href="/mens" className="btn btn-primary">
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //////////Categories END////////////// */}

          {/* /////Womens///////// */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12" data-aos="fade-out">
                <div className="card mx-auto" style={{ width: "20rem" }}>
                  <img
                    src="/Assets/images (7).jpg"
                    className="card-img-top"
                    height={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">Womens Category</h5>

                    <p className="card-text fw-bolder">
                      <span>
                        Women's fashion is a vibrant and ever-evolving
                        expression of creativity, embracing a wide spectrum of
                        styles that cater to the diverse tastes and lifestyles
                        of women around the world.
                      </span>
                    </p>
                    <br />
                    <a href="/womens" className="btn btn-primary">
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //////////END//////////// */}
          {/* //////////////shoes///////////// */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12" data-aos="fade-out">
                <div className="card " style={{ width: "20rem" }}>
                  <img
                    src="/Assets/7-best-sneakers-for-men-under-2000-for-ultimate-comfort-and-style.webp"
                    className="card-img-top"
                    height={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">Shoes Category</h5>

                    <p className="card-text fw-bolder">
                      Sneakers, a versatile and iconic footwear choice, have
                      transcended their athletic origins to become a cultural
                      phenomenon. Known for their comfort, functionality, and
                      style
                    </p>
                    <br />
                    <a href="/shoes" className="btn btn-primary">
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////END////////// */}
      {/* //////tech and mobiles */}
      <div className="Container  my-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row ">
              <div className="col-12 " data-aos="fade-out">
                <div className="card mx-auto me-5 mt-3" style={{ width: "20rem" }}>
                  <img
                    src="/Assets/laptop-computer-repair-technician-mobile-phones-png-favpng-eMpZBrmYDVzzYihtPNy5kt0xX.jpg"
                    className="card-img-top "
                    height={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3 ">labtops accessories</h5>
                    <p className="card-text fw-bolder">
                      Casual menswear embraces a spectrum ranging from laid-back
                      street style to refined smart-casual looks. T-shirts,
                      jeans, and sneakers represent the epitome of relaxed urban
                      fashion.
                    </p>
                    <br />
                    <a href="/tech" className="btn btn-primary">
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////END/////////// */}
          {/* ///////////////mobile accessories//////////// */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12" data-aos="fade-out">
                <div className="card mx-auto mt-3" style={{ width: "20rem" }}>
                  <img
                    src="/Assets/smartphone-balancing-with-pink-background_23-2150271746.avif"
                    className="card-img-top"
                    height={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">mobile accessories</h5>

                    <p className="card-text fw-bolder">
                      <span>
                        Women's fashion is a vibrant and ever-evolving
                        expression of creativity, embracing a wide spectrum of
                        styles that cater to the diverse tastes and lifestyles
                        of women around the world.
                      </span>
                    </p>
                    <br />
                    <a href="/tech" className="btn btn-primary">
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //////////END//////////// */}

          {/* electronic accessories/////////////////// */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12" data-aos="fade-out">
                <div className="card" style={{ width: "20rem" }}>
                  <img
                    src="/Assets/image.jpg"
                    className="card-img-top"
                    height={360}
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">electronic accessories</h5>

                    <p className="card-text fw-bolder">
                      <span>
                        The electronic products line is diverse and encompasses
                        a wide range of items. Here are examples of electronic
                        products that can make up a product line Discover a
                        world of culinary possibilities with our exquisite line
                        of kitchen products.
                      </span>
                    </p>
                    <br />
                    <a href="/electronics" className="btn btn-primary">
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////END//////////// */}
      {/* /////////About us///////// */}
      <h1>About Us</h1>
      <div className="container-fluid  text-center mt-2">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
            <div className="row">
              <div className="col-12 my-4" data-aos="fade-out">
                <video
                className="banner"
                  src="/Assets/2582511640.mp4"
                  autoPlay
                  muted
                  width="100%"
                  
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="row ">
              <div className="col-12 mt-2" data-aos="fade-out">
                <p className="paragraph  fs-4">
                  Our products empower more than 3 billion people around the
                  world to share ideas and offer support. "E-commerce, a
                  transformative force in the business landscape, has not only
                  redefined the way we shop but has become a cornerstone of
                  global commerce. In the virtual marketplace, businesses
                  transcend physical boundaries, and transactions unfold with a
                  click. E-commerce is not merely a platform; it is an ecosystem
                  of innovation, convenience, and endless possibilities. With a
                  few taps on a screen, customers enter a world where choice
                  knows no limits. E-commerce seamlessly blends technology and
                  commerce, offering a curated experience tailored to individual
                  preferences. The digital storefronts are not just places to
                  shop; they are gateways to a universe of products, services,
                  and trends at the fingertips of a diverse and discerning
                  consumer base. In the e-commerce arena, entrepreneurs are the
                  architects of online storefronts, crafting digital spaces
                  where imagination meets commerce. Start-ups and established
                  giants alike navigate the virtual aisles, constantly pushing
                  boundaries, and embracing technological advancements. The
                  e-commerce journey is marked by agility, adaptability, and the
                  pursuit of customer-centric solutions. As logistics weave the
                  threads of the e-commerce tapestry, swift and efficient supply
                  chains ensure that the desired product reaches the customer's
                  doorstep with unparalleled speed. The e-commerce logistics
                  network is a symphony of precision, linking warehouses to
                  delivery hubs, creating a seamless flow that defines the
                  heartbeat of online retail. Reviews and ratings echo in the
                  digital realm, shaping the narrative of trust and reliability.
                  E-commerce platforms are not just transactional; they are
                  communal spaces where customer experiences are shared,
                  influencing decisions and fostering a sense of virtual
                  camaraderie. E-commerce is more than a business model; it is a
                  dynamic force that has democratized entrepreneurship, allowing
                  businesses of all sizes to thrive in the digital age. The
                  ability to pivot swiftly, harness data insights, and create
                  personalized shopping experiences propels e-commerce into a
                  realm of continuous evolution and innovation. In the vast
                  expanse of the online marketplace, every click represents a
                  connection, every purchase a testament to the seamless fusion
                  of technology and commerce. E-commerce is not merely a
                  transaction; it is a journey, an experience, and a testament
                  to the boundless potential of the digital age."
                </p>
              </div>
            </div>
          </div>
          <hr />
          {/* ////////////END/////////////// */}
        </div>
      </div>
      {/* //////////////meet our leaderships/////////////// */}
      <div className="Container">
        <div className="row">
          <h1 className="text-center "><u>meet our leaderships</u></h1>
          <div className="radius container mt-5">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/untitled-design-1.webp" height={200} />
                  </div>
                  <p className="fw-bolder">
                    I am privileged to lead a team of dedicated professionals in
                    shaping the future of E-commerce industry. With a wealth of
                    experience, strategic vision, and a profound understanding
                    of our industry
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/25-MAY-NEWS-4-edited.jpg" height={200} />
                  </div>
                  <p className="fw-bolder">
                    As the Senior CEO steering the helm at Easy-shop, my journey
                    in the world of business spans decades. With a wealth of
                    experience, strategic vision, and a profound understanding
                    of our industry, I am privileged to lead a seasoned team of
                    professionals.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_1258-59171.jpg"
                      height={200}
                    />
                  </div>

                  <p className="fw-bolder">
                    My journey as a woman CEO is fueled by a passion for
                    empowering teams, championing innovation, and creating
                    opportunities for excellence in the ever-evolving landscape
                    of E-commerce industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////// Management team/////////////// */}
      <h1 className="mt-2"><u>Management team</u></h1>
      <div className="Container">
        <div className="row">
          <div className="radius1 container mt-5">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/confident-latin-business-leader-portrait-young-businesswoman-suit-glasses-posing-with-arms-folded-looking-camera-smiling-female-leadership-concept_74855-14232.avif"
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/images (9).jpg" height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/istockphoto-1416048929-170667a.webp"
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/istockphoto-1147525564-612x612.jpg"
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Container-fluid">
            <p className="fw-bolder mt-3">
              "Guiding the helm with unwavering expertise and a collective
              vision, our management team embodies a dynamic synergy of
              leadership, innovation, and strategic prowess. Their commitment to
              excellence fuels the engine that propels our organization forward,
              navigating challenges with precision and turning aspirations into
              achievements. United by a shared dedication to fostering growth
              and cultivating a culture of success, each member brings a unique
              blend of experience, insight, and determination, steering our ship
              towards new horizons and ensuring that every journey is marked by
              triumph and resilience."
            </p>
          </div>
        </div>
      </div>
      {/*////////////END/////////////////  */}
      <h1 className="mt-2"><u>Marketing and Sales team</u></h1>
      <div className="Container">
        <div className="row">
          <div className="radius1 container mt-5">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/1692441926014.jpg" height={200} />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/1526477860763.jpg" height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/1599048608507.jpg" height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/images (10).jpg" height={200} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Container-fluid">
          <p className="fw-bolder mt-3">
            "At the forefront of creativity and market insight, our marketing
            team orchestrates a symphony of innovation, turning concepts into
            captivating campaigns and transforming visions into market
            realities. A dynamic ensemble of strategic thinkers, storytellers,
            and trendsetters, our marketing professionals blend expertise with
            imagination. With a finger on the pulse of consumer behavior and an
            unwavering commitment to brand elevation, they craft narratives that
            resonate, strategies that captivate, and experiences that leave an
            indelible mark. Like visionary architects of perception, our
            marketing team shapes and amplifies our brand's identity, ensuring
            it not only stays relevant but sets the pace in a dynamic and
            ever-evolving marketplace."
          </p>
        </div>
      </div>
      {/* //////////////////////////// */}
      <h1><u>finance team</u></h1>
      <div className="Container">
        <div className="row">
          <div className="radius1 container mt-5">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/portrait-serious-man-model-standing-looking-serious_144627-62010.avif"
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/girl-black-clothes-giving-professional-neutral-poses-without-reaction_144627-48347.jpg"
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img src="/Assets/images (11).jpg" height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-12" data-aos="fade-out">
                    <img
                      src="/Assets/bossy-displeased-suspicious-good-looking-stylish-jewish-guy-with-curly-hair-moustache-brown-t-shirt-holding-hands-crossed-chest-smirking-frowning-doubtful-gray-wall_176420-27649.avif"
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Container-fluid">
          <p className="fw-bolder  mt-3">
            "At the financial helm, our finance team epitomizes precision and
            stewardship, weaving an intricate tapestry of fiscal responsibility
            and strategic acumen. Meticulous number crunchers, insightful
            analysts, and guardians of economic health, our finance
            professionals navigate the complex terrain of budgets and forecasts
            with finesse. Fueled by a commitment to fiscal integrity, they not
            only safeguard our financial foundations but also architect pathways
            for sustainable growth. Their astute financial management not only
            ensures stability in the present but paves the way for future
            prosperity, making them the unsung heroes behind the scenes,
            orchestrating a symphony of economic resilience and strategic
            investments."
          </p>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default MainHome;
