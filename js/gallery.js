let images = []
let index = 0;

    async function setImage(){
                const response = await fetch(api)
                const data = await response.json()
                const {entries} = data
                let entry = entries[0]
                let gallery = entry.itemGallery;
                currentImg.setAttribute("src", gallery[0].path)
                

                
                for(let i = 0; i <= entry.itemGallery.length - 1; i++){
                    images.push(gallery[i].path)
                }
            }

    setImage();

    let img = document.getElementsByClassName("gallery-img")

            function next(){
                if(index < 3 ){
                    img[index].removeAttribute("style", "opacity: 0.6")
                    index++;
                    currentImg.setAttribute("src", images[index])
                    img[index].setAttribute("style", "opacity: 0.6")
                } else {
                    img[index].removeAttribute("style", "opacity: 0.6")
                    index = 0
                    currentImg.setAttribute("src", images[index])
                    img[index].setAttribute("style", "opacity: 0.6")
                }
            }
            
            function prev(){

                
                if(index > 0 ){
                    img[index].removeAttribute("style", "opacity: 0.6")
                    index--;
                    currentImg.setAttribute("src", images[index])
                    img[index].setAttribute("style", "opacity: 0.6")
                } else {
                    img[index].removeAttribute("style", "opacity: 0.6")
                    index = 3
                    currentImg.setAttribute("src", images[index])
                    img[index].setAttribute("style", "opacity: 0.6")
                }
            }   
