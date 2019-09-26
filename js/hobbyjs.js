var myNav = document.querySelector(".navbar");
        window.onscroll = function () {
            const el = document.querySelector("html")
            if (el.scrollTop >= 140) {
                myNav.classList.add("bg-dark");
                myNav.classList.remove("bg-transparent");
            }
            else {
                myNav.classList.add("bg-transparent");
                myNav.classList.remove("bg-dark");
            }
        }

        

        function showHobbyContent(event)
        {
            let toShow = event.currentTarget.parentNode.parentNode.nextSibling.nextSibling;
            toShow.style.overflowY = "scroll";
            toShow.style.height = (window.outerHeight).toString() + "px";
        }
        function hideHobbyContent(event)
        {
            let toShow = event.currentTarget.parentNode;
            toShow.style.overflowY = "hidden";
            toShow.style.height = "0px";
        }