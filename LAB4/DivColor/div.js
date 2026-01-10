        function cloneAndColor(element) {
           
            let copy = element.cloneNode(true);

            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

            copy.style.backgroundColor = randomColor;

            document.body.appendChild(copy);
        
        }