# ShowMeShows - Concert Locator

### Description

ShowMeShows uses several API's to locate a user and display concert information about the artist they have inputted as well as provide the option to send text reminders about user selected concerts. With access to concert specifics, links to tickets, links to ride-sharing websites, and a page dedicated to looking up festivals in several states across the US, it gives the user an easy way to plan and expand their concert experiences.

Components:
1. UIKit API
 - Navbar with two tabs, a logo, and logo animation
 - Grid with divs, images, and cards
 - Images with parallax effect
 - Form with search icon to retrieve user inputted artist
 - Overlay
 - List navigation
2. Songkick API
 - Ajax call that retrieves instances of artist's concerts
 - Venue, date, and time displayed on site with jQuery
3. Google Maps API
 - Retrieve user's location to match with artist's concerts and display on live map on site
4. Ticketmaster API
- Ajax call to retrieve instances of artist's concerts
- Link to ticket sites displayed on site with jQuery
5. Nexmo API
- Uses user-inputted phone number to send a text reminder for user-chosen concert
6. jQuery generated elements, filled with ajax response data
7. Google Fonts
8. FontAwesome icons 
- Lyft and Uber, embedded in a tags with links to respective websites


### Links to Project

https://github.com/Jeretc79/project1

### User Experience

![Top Home Page](https://i.imgur.com/QCySLCM.jpg)

The user is greeted with the top portion of the home page which includes a navbar, a concert image, and a input form. The navbar contains an animated logo, a "home" tab, and a "festivals" tab. The image is that of a concert which, uplon scrolling, has a parallax effect. The form is where the user enters an artist's name to search for a concert.

![Main Content Home](filler.jpg)

Below the search form is a map on the left, displaying the user's current location, and an overlaying message which states "Showing results for your current location, here." To the right of the map are black cards over a black background. The results of the search print onto the cards. The contents of the search results are: name of artist, photo of artist/artist logo, venue, city, date of show, time of show, a link to a ticket hosting website with the text "We found tickets here," and a link with the text "Sign up for a text reminder." 

![Sign Up Page](filler.jpg)

This second link takes the user to another page where they can input their phone number to receive a reminder about the concert that was displayed. The page is similar to the home page, but simplified, with an image at the bottom.

![Bottom Home](https://i.imgur.com/NEpfEa0.jpg)

Below the map and search results is another parallax image with Lyft and Uber icons that can be clicked to be directed to each company's website in a new tab. The messages, "Need a ride?", "They've got you." are displayed above and below the linked icons. Below the transportation icons is a div with the ShowMeShows logo and copyright symbol.

![Festivals Page](https://i.imgur.com/gYRJKbB.jpg)

When the user navigates to the "Festivals" page via the navbar, they are taken to a page with the same navbar, another parralax image, and a list navigation displayed below.

![Festivals List Nav](https://i.imgur.com/p5e2nVs.png)

The festivals list navigation is sorted by state, with most states listed. Clicking on a state open's up a list of festivals that take place in that state yearly. Clicking on each festival directs the user to that festival's website in a new tab.

![Bottom Festivals Page](https://i.imgur.com/TzCpGx7.jpg)

The bottom of the page contains a static image and a div containing the ShowMeShows logo and copyright symbol.

### Developer Experience

Code Summary:

Unresolved:
- When pages first load, formatting is off and default fonts are shown briefly

Plans for Future Development:
 - List more than one concert, ideally concerts in nearby cities as well as user-located city
 - Provide suggestions for concerts based on user location

Team's Experience:





