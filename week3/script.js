/* ***************************************************
   This is for SocialHackersAcademy
   Exercise for week 3 of JavaSript module 1
   This is heavily commented. Many things will seem
   obvious for a lot of people but it doesn't matter
*************************************************** */

/*   We execute the JavaScript code after the document finishes
   loading, to be able to access all the elements (ie. nodes
   specified in the HTML file and being part of the DOM from
   JavaScript).
     We include everything inside an anonymous function so all this
   code will exist in the function's local scope (ie. NOT in the
   global scope).
     When the document has loaded, the onload event gets triggered
   and this anonymous function gets executed. So we don't have to
   call the function in the code explicitly.
   
   Note: The first 3 parts of the exercise are not visible to
   the user, because the rest of the exercise executes and changes
   the webpage. This could be avoided if the user had to click
   a button or a timer used but I don't want to add anything
   not related to the code. If everything after part 3 gets
   commented then the first part will be shown to user.
*/
document.getElementsByTagName("body")[0].onload = function() {
/* Part 1 of the exercise
   Declare an array that contains 10 strings. These strings should
   be of book titles you have read (or made up) and be lowercase
   without spaces or special characters so that you can use these
   later as Id's.  */
  let booksIds = ["the_beos_bible",
                  "beos_porting_unix_applications",
                  "programming_the_be_operating_system",
                  "practical_file_system_design_the_be_file_system",
                  "inside_os2_warp_version_3",
                  "os2_warp_unleashed",
                  "the_art_of_os2_warp_programming",
                  "write_great_code_1",
                  "write_great_code_2",
                  "practical_malware_analysis"];
/* Part 3 of the exercise
   We want to make a function (or functions) that generate a ul
   with li elements for each book ID in the array using a for loop.
   The generated list items will show the book ids */
   
/* We keep a reference to the node of the UL element for performance
   reasons. For example, we don't need to search for the node each time
   we want to access it, using getElementsByTagName. We do it only this
   time */
  let ulElement = document.createElement("ul");
/* ... and then we add it to the document */
  document.getElementsByTagName("body")[0].appendChild(ulElement);

/* We declare the function that takes the array containing the bookids
   and creates the nodes and adds them to the document. Then we execute
   this function */
  let displayBookIds = function(bookIdsArray) {
    for (let i = 0; i < bookIdsArray.length; i++ ) {
	  // Step 1 - Create the LI element
      let element = document.createElement("li");
      // Step 2 - Add the book's id as the content of the element
      element.innerHTML = bookIdsArray[i];
      // Step 3 - Add the element to the UL in the document
      ulElement.appendChild(element);
    }
  };	// **** End of function displayBookIds
  displayBookIds(booksIds);

/* Part 4 of the exercise
   Make an object containing information for each book. Each
   item (object) in this object should have the book ID you
   thought up in point 1 as a key, and it should have at least
   the following fields: title, language and author. */
  let books = {
	"the_beos_bible": {
	  title: "The BeOS Bible",
	  language: "English",
	  author: ["Scot Hacker", "Chris Herborth", " Henry Bartman"]
	},
	"beos_porting_unix_applications": {
	  title: "BeOS: Porting UNIX Applications",
	  language: "English",
	  author: ["Martin C. Brown"]
	},
	"programming_the_be_operating_system": {
	  title: "Programming the Be Operating System",
	  language: "English",
	  author: ["Dan Parks Sydow"]
	},
	"practical_file_system_design_the_be_file_system": {
	  title: "Practical File System Design with the Be File System",
	  language: "English",
	  author: ["Dominic Giampaolo"]
	},
	"inside_os2_warp_version_3": {
	  title: "Inside OS/2 Warp, Version 3",
	  language: "English",
	  author: ["Mark Minasi, Bill Camarda, Bruce Hallberg, Cynthia Ross-Pedersen"]
	},
	"os2_warp_unleashed": {
	  title: "OS/2 Warp Unleashed",
	  language: "English",
	  author: ["David Kerr", "David Moskowitz"]
	},
	"the_art_of_os2_warp_programming": {
	  title: "The Art of OS/2 Warp Programming",
	  language: "English",
	  author: ["Kathleen Panov", "Larry Salomon, Jr", "Arthur Panov"]
	},
	"write_great_code_1": {
	  title: "Write Great Code: Volume 1: Understanding the Machine",
	  language: "English",
	  author: ["Randall Hyde"]
	},
	"write_great_code_2": {
	  title: "Write Great Code, Volume 2: Thinking Low-Level, Writing High-Level",
	  language: "English",
	  author: ["Randall Hyde"]
	},
	"practical_malware_analysis": {
	  title: "Practical Malware Analysis: A Hands-On Guide to Dissecting Malicious Software",
	  language: "English",
	  author: ["Michael Sikorski", "Andrew Honig"]
	}
  };
 
/* Part 5 of the exercise
     Change the function you used to display the book ID's in a list
   to take the actual information about the book from the object and
   display that. Make sure you choose the right html elements for
   each piece of info, for instance, a heading for the title.
     We make this a new function displayBooks instead of displayBookIds.
	 Because objects are not ordered (like arrays), but we have the
   id as a key (variable name), we access the list items and return from
   them the content (which is the id) and then access the object.
     We also add an id attribute to each li element. This is for
	 part 7 of the exercise */
  let displayBooks = function(booksObject) {
    /* Have a reference to the array(-like) object that contains the
	   li elements. I say array-like because technically it is not
	   an array, it is a collection */
    let liElements = ulElement.getElementsByTagName("li");
	for (let i = 0; i < liElements.length; i++) {
	  /* For each element:
	     1. Find the id
		 2. Go to the books object. Using the id return a book object
		 3. From the book object extract the information we need
		 4. Create the elements. */
	  let id = liElements[i].innerHTML;
	  let book = booksObject[id];		// This is an object
	  let title = book["title"];		// This is a string
	  let language = book["language"];	// This is a string
	  let author = book["author"];		// This is an array of strings
	  let titleElement = document.createElement("h2");
	  titleElement.innerHTML = title;
	  titleElement.setAttribute("class", "title");
	  let languageElement = document.createElement("p");
	  languageElement.innerHTML = "Language: " + language;
	  languageElement.setAttribute("class", "language");
	  let authorElement = document.createElement("p");
	  authorElement.setAttribute("class", "author");
	  authorElement.innerHTML = "by " + author.join(", ");

	  // Reset the li element. Then add the elements
	  liElements[i].innerHTML = "";
	  liElements[i].appendChild(titleElement);
	  liElements[i].appendChild(languageElement);
	  liElements[i].appendChild(authorElement);
	  
	  // Now add the id attribute on the li element
	  liElements[i].setAttribute("id", id);
	}
  };	// **** End of function displayBooks
  displayBooks(books);

/* Part 7 of the exercise
   Download book covers for each book, construct a new Object
   which has as keys the bookId's again, and as value the path
   to the image source. Write a function which places an image
   at the corresponding li element. */
  let imagePaths = {
    "the_beos_bible": "./images/the_beos_bible.jpg",
    "beos_porting_unix_applications": "./images/beos_porting_unix_applications.jpg",
    "programming_the_be_operating_system": "./images/programming_the_be_operating_system.jpg",
    "practical_file_system_design_the_be_file_system": "./images/practical_file_system_design_the_be_file_system.jpg",
    "inside_os2_warp_version_3": "./images/inside_os2_warp_version_3.jpg",
    "os2_warp_unleashed": "./images/os2_warp_unleashed.jpg",
    "the_art_of_os2_warp_programming": "./images/the_art_of_os2_warp_programming.jpg",
    "write_great_code_1": "./images/write_great_code_1.jpg",
    "write_great_code_2": "./images/write_great_code_2.jpg",
    "practical_malware_analysis": "./images/practical_malware_analysis.jpg"  
  };
  let addImagePaths = function(paths) {
    let liElements = ulElement.getElementsByTagName("li");
	for (let i = 0; i < liElements.length; i++) {
	  let id = liElements[i].getAttribute("id");
	  let imageElement = document.createElement("img");
	  imageElement.setAttribute("src", paths[id]);
	  imageElement.setAttribute("alt", "book cover");
	  imageElement.setAttribute("class", "cover");
	  liElements[i].appendChild(imageElement);
	}
  };	// **** End of function addImagePaths
  addImagePaths(imagePaths);
};