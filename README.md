Introduction
This document serves as a proposal for an e-commerce site specialising in selling
luxury clothing for men, women and children. With the possibility of further
expansion into homeware and furniture, which won’t be available during this
preview.
This project will be primarily written in JavaScript. However, the use of backend
technology will also be present in order to aid the development cycle, and showcase
the possibilities of such a project.
I will begin by outlining the general project idea, alongside some early wireframes
and design elements. The motivation and inspiration behind this project and its style
will also be explained, going into detail in regards to the design process.
While the scope of the project is limited, I will outline additional features that may be
added later on which would complete the site as a whole. So while they may not be
present, they will be discussed.
About This Project
Hermani is a luxury retailer, they sell a variety of clothing products and apparel,
ranging from shoes, shirts, bags and trousers, all the way to homeware and furniture.
The goal of this site is to create a high-end luxury experience for the user while
shopping on the site, while providing easy to navigate menus and a great browsing
experience.
The site is fully responsive starting from mobile devices all the way to 1080p, 2K and
4K screens. It will offer a mostly monochromatic colour theme to aid in accessibility
with high contrast colours, and readable fonts, which will also in turn further aid the
luxury aspect and simplicity of modern day retailers such as Gucci, Chanel or
BrownsFashion.
Features Overview
The site will feature a number of elements usually found in an e-commerce site, as
well as any additional features required in the assessment brief.
Planned features are ones I intend on implementing throughout the duration of the
project, while other, or static features may or may not be present depending on the
time remaining for the submission.
Not all planned features might be implemented in the assessment version.
Search
Intended for the search page, once the user navigates to the desired category,
they will be able to filter out the product by its name to show relevant results.
Image Gallery
An image gallery will be present for every product. A product consists of a
display image, and a gallery. The user will be able to flick through each image
available in the gallery. They will be able to go back or forward, and see which
image is currently displayed by highlighting the gallery preview.
Navigation
The site will come with a slide out navigation system broken into 2 parts. The
first part will slide out the main navigation, giving the user access to return to
the homepage by pressing the site iron, the ability to go to their “favourite”
tab, go to their basker, or open the page navigation.
The second part is the site navigation, which will contain hyperlinks to all
major areas of the site, these being the categories (current collection, women,
men and kids), returning to the homepage, as well the ability to “login”.
Pages
Landing Page (Static):
This is where the user will be directed upon visiting the website. The goal of
this page is to catch and maintain the user's attention. The use of animated
elements and visual hierarchy will be used in order to try and achieve that
goal. This page will contain a number of hyperlinks embedded within images
and buttons that will redirect the user to various product categories that they
might be interested in. The overall design of this page will be simple, with
large images for better accessibility.
Categories Page
The categories is a dynamic page, it’s broken down into the 3 major sections,
with the possibility of adding more in the future - those categories are
Women, Men and Kids.
Each category will present the user with additional subcategories where they
can specify what kind of item they are looking for, i.e. shoes, shirts, etc. This
element of the page will load data from a JSON file via an API and fetch call
where the data will state which subcategories are available. This allows the
page to be adjusted with what subcategories each category can have, and
provides dynamic links to pages to display those subcategories.
Collection Page
This page is reserved for the current collection. For the purposes of this
assignment there will be only one collection, “SPRING 2022”, which will show
the user all the items in that collection, with no further filtering options with
the current scope. The idea is that the collection items will be limited in time,
and much smaller in variety compared to the potential of other categories and
subcategories, warranting no need for further filtering.
This page will load data from a JSON file using AJAX to call the api and load all
the data from the backend server.
Products Page
This is where the user will be directed when searching for various products. In
order to maintain the scope of the project, this page may be limited to one or
two products. However, more products depending on the progress. That being
said, a minimum of one or two products will be present to showcase the
behaviour and functionality of a website.
Basket Page (Static)
Accessible from any page on the website, through the top navbar. The user
will be able to navigate to a static basket page, showcasing what a dynamic
version which can store all the information could look like. It will present the
items in a list on the left, while presenting the summary and checkout on the
right side of the page.
Login Page (Disabled)
A simple login page, which will allow the user to “login” into their account. It will
contain a username, and a password field. It will also allow the user to click create
new accounts which will direct them to a separate page.
Creating a full account system would be out of the scope for this project, and such
the user won’t be actually able to login or register.
Register Page (JS Validation Form):
This is a page that will allow the user to enter their personal details, such as name,
address, email, etcetera in order to create an account.
The page will be a validation form which will check and determine the following
aspects while creating a new account.
● Are all the required fields not empty?
● Is the username longer than 4 characters?
● Does the password contain at least 12 characters, a number, and a special
character?
● Is the email a real email address?
Pages / Features For Future
Checkout Page
This page would simulate the check out experience, which would allow the user to
enter the personal details, credit details and shipping details.
Favourites
This feature would allow logged in users to save their favourite items, and check on
them later on. In a full-scale project this could include email notifications once the
item is back in stock or has gone on sale. If the user isn’t logged while trying to add
an item, they would be prompted to login or create an account.
Design
The site is going to be fully responsive, taking a mobile-first approach using the
atomic design. This will ensure a consistent experience across all platforms, a
mobile-first approach will additionally aid in the development phase, requiring less
styling to be written for the entire site.
In terms of other ecommerce sites and design style, there are multiple approaches.
Apple’s website opts for a simple, yet intuitive design, where at a quick glance you
can select what type of product you’re looking for. Upon clicking, more options are
shown to you below the navigation in order to show you the individual products
within that category.
I enjoy the simplicity of this design, and I wanted to see if I could apply it to a clothing
brand, so looking a bit deeper I created a moodboard (shown below) which shows
how different fashion brands (Gucci, Browns, Chanel) stylize themselves and create a
brand identity with their websites.
As we can see, all of those sites contain a very simple and minimalistic approach to
their design. I intend to create a similar visual style using a grid system, while
maintaining a monochromatic colour approach. Below you can see some early
wireframes of what I imagine the site could look like.
As can be seen in the image, the site’s landing page will be composed of a standard
horizontal navigation, at the top of the page. This nav will include the different
categories (or a shop) as well as your basket, and a login button.
Both the left and the right side will be primarily used to whitespace, this will give the
site some space to breathe, and focus the user’s attention on the centre of the
screen. The central part of the website will be focused on one featured project (which
could be plugged into a CMS in order to select a featured product) and then
recommended products. These could be products that are on sale, or generally
popular.
In terms of the basket itself, I plan to have an overlay, which will provide the user with
information about what’s currently in their basket. I’m not sure how much of this will
be doable in JS itself, but at the very least the overlay will be present. This will have
items currently in the basket, their cost (individual and total), the ability to close the
basket, checkout, or view the basket fully. A simple mockup can be seen below.
.
In terms of the product page, I will likely implement a list style view similar to one
that can be found on amazon’s website. This will be either when searching for a
product, clicking on a category or both. The alternative to this would be a card style
design, where the list of products is presented in square or rectangular fashion.
A simple mockup can be seen below.
Lastly, the page will also offer a register and login pages, where the user can enter
their information to either login, or register an account. This will be a simple card in
the centre type of form.
A mockup of some pages can be seen as follows. Starting with the landing page for
desktop and mobile, followed up by a product page, and buying a product mockup.

The mockup can be found here for further inspection:
<https://xd.adobe.com/view/93d53879-847c-46dc-a847-9c8d181c8bbc-c686/?fullscreen>
While these are some early concepts, the final product may differ in its final design.
However, these are showing and representing the overall feel of the website.
Timeline & Approach
Timeline (Week) 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
Meeting & Proposal
Planning
Design
(Non-Functional
Prototype)
Implementation
(Front & Back End)
Testing &
Verification
Delivery &
Deployment
Description Tech Stack
Front-End HTML, CSS, JavaScript
Back-End PHP >7.1
DBMS JSON/API
CMS / Framework Cockpit CMS / None
Server Apache
End Of Documen
