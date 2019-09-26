        
        var card = document.getElementById("hobbycard");
        console.log(card);
        var cards = document.getElementsByClassName("card");
        var motorcycle = card.getElementsByClassName("fa-motorcycle");
        var dragon = card.getElementsByClassName("fa-dragon");
        var drum = card.getElementsByClassName("fa-drum");
        var mountain = card.getElementsByClassName("fa-mountain");
        var text = card.getElementsByTagName("p");

        for (i = 0; i < cards.length; i++) {

            cards[i].addEventListener("mouseenter", function () {
                let cardText = this.getElementsByTagName("p")[0];
                this.classList.add("shadow-lg");
                cardText.style.height = "100px";

            });

            cards[i].addEventListener("mouseleave", function () {
                let cardText = this.getElementsByTagName("p")[0];
                let icons = this.getElementsByTagName("i");
                for (i = 0; i < icons.length; i++) {
                    icons[i].style.color = "#000";
                }
                this.classList.remove("shadow-lg");
                cardText.style.height = "0px";
            });
        }
        card.onmouseenter = function () {
            motorcycle[0].style.color = "#7ad708";
            mountain[0].style.color = "#34495e";
            dragon[0].style.color = "#e74c3c";
            drum[0].style.color = "#bdc3c7";
        }