/* Setting for dataset */

//  Menu Section

c_navMenu = document.querySelector('.nav-menu');

nav_menu(c_navMenu);

function nav_menu(selector) {

  section_keys = Object.keys(section);

  xhtml = "";
  section_keys.forEach(element => {
    template = "<li><a href=" + section[element].href + ">" + section[element].text + "</a></li>"
    xhtml += template;
  });

  selector.innerHTML = xhtml;
  selector.children[0].setAttribute('class', 'menu-active');
}

// End Menu Section

// Intro

c_carouselInner = document.querySelector(".carousel-inner");

xhtml = "";

section.home.content.intro.forEach(el => {

  xhtml = "";
  section.home.content.social.forEach(el => {
    template = `<a href="` + el.target + `" class="` + el.platform + `"><i class="fa fa-` + el.platform + ` "></i><span> ` + el.username + `</span></a>`;
    xhtml += template;
  })

  template = `<div class="carousel-item active">
            <div class="carousel-background"><img src="`+ el.background + `" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
              <h2>`+ el.title + `</h2>
              
              <div class="social-links home-social">
              `+ xhtml + `
                </div>
              </div>
            </div>
          </div>`;
  xhtml = template;
})

c_carouselInner.innerHTML = xhtml;

// End Intro

// Featured-services

c_featuredServiceHeader = document.querySelector('.featured-services-header');

make_featured_service_content(c_featuredServiceHeader);

function make_featured_service_content(selector) {

  xhtml = "";

  Object.keys(section.spesial.content).forEach(el => {


    template = `<div class="col-sm-4 box">
            <i class="`+ section.spesial.content[el].icon + `"></i>
            <h4 class="title"><a href="`+ section.spesial.content[el].target + `">` + section.spesial.content[el].title + `</a></h4>
          </div>`;

    xhtml += template;

  })

  selector.innerHTML = xhtml;

}

// End Featured-services

// About
c_sectionHeader = document.querySelector(".about-section-header");

make_section_header(c_sectionHeader);

function make_section_header(selector) {

  template = `<h3>` + section.about.content.title + `</h3>
            <p>`+ section.about.content.description + `</p>
    `
  selector.innerHTML = template;
}

c_aboutCols = document.querySelector('.about-cols');

make_about_featured(c_aboutCols);

function make_about_featured(selector) {

  featured = Object.keys(section.about.content.featured);

  xhtml = "";
  featured.forEach(el => {

    xfhtml = "";
    function make_about_feature_list(el) {
      section.about.content.featured[el].feature.forEach(el => {

        template = `<li>` + el + `</li>`;
        xfhtml += template;
      })
    }

    make_about_feature_list(el);

    template = `<div class="col-md-4">
                <div class="about-col">
                <div class="img">
                    <img src="`+ section.about.content.featured[el].thumbnail + `" alt="" class="img-fluid">
                        <div class="icon"><i class="`+ section.about.content.featured[el].icon + `"></i></div>
                        </div>
                    <h2 class="title"><p>`+ section.about.content.featured[el].title + `</p></h2>
                    <p>
                    `+ section.about.content.featured[el].description + `
                    </p>
                    <ul class="about-feature-list">`+ xfhtml + `
                    </ul>
                </div>
                </div>`;

    xhtml += template;
  })
  selector.innerHTML = xhtml;
}

// End About

// Portfolio

c_portfolio_header = document.querySelector('.portfolio-header');

make_portfolio_header(c_portfolio_header);

function make_portfolio_header(selector) {
  template = ` <h3 class="section-title">` + section.portfolio.content.title + `</h3>
          <p>`+ section.portfolio.content.description + `</p>`;

  selector.innerHTML = template;
}

c_portfolioFilters = document.querySelector('#portfolio-flters');

make_portfolio_filter(c_portfolioFilters);

function make_portfolio_filter(selector) {

  xhtml = `<li data-filter="*" class="filter-active">All</li>`;

  section.portfolio.content.services.forEach(el => {
    template = `<li data-filter=".filter-` + el + `">` + el + `</li>`
    xhtml += template;
  })

  selector.innerHTML = xhtml;
}

c_portfolioContainer = document.querySelector('.portfolio-container');

make_portfolio_content(c_portfolioContainer);

function make_portfolio_content(selector) {

  xhtml = "";

  client_content = Object.keys(section.portfolio.content.clients);

  client_content.forEach(el => {

    template = `<div class="col-lg-4 col-md-6 portfolio-item filter-` + section.portfolio.content.clients[el].service + `">
            <div class="portfolio-wrap">
              <figure>
                <img src="`+ section.portfolio.content.clients[el].image + `" class="img-fluid" alt="">
                <p class="link-details" title="More Details">`+ section.portfolio.content.clients[el].service + `</p>
              </figure>

              <div class="portfolio-info">
              <a href="`+ section.portfolio.content.clients[el].image + `" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"> <h4>` + section.portfolio.content.clients[el].name + `</h4></a>
                
                <p> `+ section.portfolio.content.clients[el].service + `</p>
              </div>
            </div>
          </div>`;

    xhtml += template;

  })
  selector.innerHTML = xhtml;
}

c_clientsCorousel = document.querySelector('.clients-carousel');

make_portfolio_clients(c_clientsCorousel);

function make_portfolio_clients(selector) {

  client = Object.keys(section.portfolio.content.clients);

  xhtml = "";
  client.forEach(el => {

    logo = section.portfolio.content.clients[el].logo;

    if (!logo == "") {

      template = `<img src="` + section.portfolio.content.clients[el].logo + `" alt="">`;

      xhtml += template;
    }

  })

  selector.innerHTML = xhtml;

}

// End Portfolio

// Client

c_clientsHeader = document.querySelector('.clients-header');

make_clients_header(c_clientsHeader);

function make_clients_header(selector) {
  template = `<h3>` + section.clients.content.title + `</h3>
              <p>`+ section.clients.content.description + `</p>`;

  selector.innerHTML = template;
}

// End Client

// Team

c_teamHeader = document.querySelector(".team-header");

make_team_header(c_teamHeader);

function make_team_header(selector) {

  template = `<h3>` + section.team.content.title + `</h3>
                <p>`+ section.team.content.description + `</p>`;

  selector.innerHTML = template;
}

c_teamMember = document.querySelector(".team-member");

make_team_member(c_teamMember);

function make_team_member(selector) {

  xhtml = "";

  section.team.content.member.forEach(el => {

    empty_twitter = el.social.twitter == "" ? "style='display:none'" : el.social.twitter;
    empty_facebook = el.social.facebook == "" ? "style='display:none'" : el.social.facebook;
    empty_instagram = el.social.instagram == "" ? "style='display:none'" : el.social.instagram;
    empty_github = el.social.github == "" ? "style='display:none'" : el.social.github;
    template = `<div class="col-lg-3 col-md-6">
            <div class="member">
              <img src="`+ el.avatar + `" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>`+ el.name + `</h4>
                  <span>`+ el.position + `</span>
                  <div class="social">
                    <a href="`+ el.social.twitter + `" ` + empty_twitter + ` ><i class="fa fa-twitter"></i></a>
                    <a href="`+ el.social.facebook + `"` + empty_facebook + `><i class="fa fa-facebook"></i></a>
                    <a href="`+ el.social.instagram + `"` + empty_instagram + `><i class="fa fa-instagram"></i></a>
                    <a href="`+ el.social.github + `"` + empty_github + `><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

    xhtml += template;
  })

  selector.innerHTML = xhtml;
}

// End Team

// Contact

c_contactHeader = document.querySelector('.contact-header');

make_contact_header(c_contactHeader);

function make_contact_header(selector) {
  template = `<h3>` + section.contact.content.title + `</h3>
              <p>`+ section.contact.content.description + `</p>`;
  selector.innerHTML = template;
}

c_contactInfo = document.querySelector('.contact-info');

make_contact_content(c_contactInfo);

function make_contact_content(selector) {
  xhtml = "";

  section.contact.content.contact.forEach(el => {

    template = `<div class="col-md-4">
                <div class="contact-address">
                  <i class="`+ el.icon + `"></i>
                  <h3>`+ el.type + `</h3>
                  <p>`+ el.value + `</p>
                </div>
              </div>`;

    xhtml += template;

  })

  selector.innerHTML = xhtml;
}

// End Contact