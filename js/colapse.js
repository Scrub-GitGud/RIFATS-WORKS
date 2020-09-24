var coll = document.getElementsByClassName("collapsible");
var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;

//     if (content.classList.contains("rise")) {
//         content.classList.remove("rise")
//     } else {
//         content.classList.add("rise")
//     }
//   });
// }

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     var content = this.nextElementSibling;

//     if (content.classList.contains("rise")) {
//         content.classList.remove("rise")
//         this.classList.remove("active")
//         return
//     }

//     for(j = 0; j < coll.length; j++) {
//         coll[j].nextElementSibling.classList.remove("rise")
//         coll[j].classList.remove("active")
//     }

//     this.classList.toggle("active");
//     content.classList.add("rise")
//   });
// }

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;

    if (content.classList.contains("rise")) {
        content.classList.remove("rise")
        this.classList.remove("active")
        this.childNodes[1].classList.remove("fa-minus")
        this.childNodes[1].classList.add("fa-plus")
        return
    }

    for(j = 0; j < coll.length; j++) {
        coll[j].nextElementSibling.classList.remove("rise")
        coll[j].classList.remove("active")
        coll[j].childNodes[1].classList.remove("fa-minus")
        coll[j].childNodes[1].classList.add("fa-plus")
    }

    this.classList.toggle("active");
    content.classList.add("rise")
    this.childNodes[1].classList.remove("fa-plus")
    this.childNodes[1].classList.add("fa-minus")
  });
}