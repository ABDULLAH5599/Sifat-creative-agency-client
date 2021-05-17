import React from 'react';

const Footer = () => {
    return (
       
             <footer>
        <div class="footer-top bg-dark">

              <div class="container ">
                   <div class="row pt-5 pb-5">
                     <div class="col-md-3 col-sm-6 col-xs-12 footer-one">
                          <h3 class='text-white'>Creative Agency</h3>
                          <p class='text-white' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eum ipsum blanditiis obcaecati atque perferendis necessitatibus dicta qui repudiandae vitae.</p>
                        
                   </div>
                   <div class="col-md-3 col-sm-6 col-xs-12 footer-two">
                   <h2 class='text-white'>Creative Agency</h2>
                   <ul>
                     <li class='text-white'><a  href=""></a>Event</li>
                     <li class='text-white'><a  href=""></a>Support</li>
                     <li class='text-white'><a  href=""></a>Support</li>
                     <li class='text-white'><a class='text-white' href=""></a>Support</li>
                   </ul>
                 </div>

                 <div class='text-white' class="col-md-3 col-sm-6 col-xs-12 footer-three">
                       <h2 class='text-white'>Follow</h2>
                       <p class='text-white'>Please follow us to our social media profile in oder to keep update. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, totam.</p>
                       <a class='text-white' href=""><i class="fa fa-facebook"></i></a>
                       <a class='text-white' href=""><i class="fa fa-twitter"></i></a>
                       <a class='text-white' href=""><i class="fa fa-linked-in"></i></a>
                       <a class='text-white' href=""><i class="fa fa-pinterest"></i></a>
                 </div>
                 <div class='text-white' class="col-md-3 col-sm-6 col-xs-12 footer-four">
                     <h2 class='text-white'>Our Newsletter</h2>
                     <p class='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero neque eius debitis est iste?</p>
                     <form action="">
                       <input type="Email"/>
                       <input type="Submit" value="Subscribe"/>
                     </form>
                 </div>
            </div>
            <div className="footer text-center">
                <small class='text-white'>copyright sifat adnan 2021</small>
            </div>
          </div>
         </div>
      </footer>

      
    );
};

export default Footer;