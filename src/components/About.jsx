import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div id="about-page">
      <div className="about">
        <h1>About Us</h1>
        <p>
          Niyə ilk addımı bizimlə atmalısınız? Matrix-İT sektorunda təcrübəli
          mütəxəssislər yetişdirən tədris mərkəzidir.Bugünədək yüzlərlə gəncə
          təhsil vermiş və onların uğurlarının bir parçası olmağı
          bacarmışıq.Məqsədimiz Matrix adının da ifadə etdiyi məna kimi
          tələbələrimizin "İnkişaf edən mühit" də addımlayaraq,İT sektoru üçün
          savadlı kadr kimi formalaşmasını təmin etmək və bu istiqamətdə
          təcrübəli mütəxəssislər yetişdirməkdir.Matrix Təlim Mərkəzində
          təhsilini uğurla başa vuran hər bir tələbə sertifikatla təmin edilir.
        </p>
      </div>
      <div className="flexbox">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078.918142525964!2d49.83867234004887!3d40.376517053351435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e0!3m2!1sen!2saz!4v1729074108446!5m2!1sen!2saz"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact">
          <h1>Contact Us</h1>
          <div className="cart">
            <div>
              <span>
                <FaPhoneAlt />
              </span>
            </div>
            <div>
              <h4>Phone</h4>
              <span> +994(70)5840310</span>
            </div>
          </div>
          <div className="cart">
            <div>
              <span>
                <MdEmail />
              </span>
            </div>
            <div>
              <h4>Mail</h4>
              <span>anar.584@mail.ru</span>
            </div>
          </div>
          <div className="cart">
            <div>
              <span>
                <FaLocationDot />
              </span>
            </div>
            <div>
              <h4>Location</h4>
              <span>
                {" "}
                AF Mall, <br />
                34 Samad Vurgun, street 1000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
