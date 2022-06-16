import React from "react";

function Home(){
    return(
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xeD8J6ueZpMkv3CicKE8ZgHaEo%26pid%3DApi&f=1"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Home</h1>
                        <p>
                            This will be the text on the home page of my website which will contain spicy facts, links, and other information.
                            It is sure to be absolute pure volcanic molten fire. Check back soon for more!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;