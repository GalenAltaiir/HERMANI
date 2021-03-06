<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HERMANI</title>
    <link rel="stylesheet" href="css/base.css">

    <script src="https://kit.fontawesome.com/9880171930.js" crossorigin="anonymous"></script>
    <script src="js/menu.js"></script>
</head>

<body>
    <header id="topNav">

        <div class="logo">
            <h1><a href="index.html">HERMANI</a></h1>
        </div>

        <nav>
            <a href="products.html"><i id="cart" class="fa-solid fa-bag-shopping"></i></a>
            <a href="products.html"><i id="heart" class="fa-solid fa-heart"></i></a>
            <a onclick="menu()"><i class="fa-solid fa-bars"></i></a>
        </nav>
    </header>

    <main>
        <div class="overlay" id="overlay"></div>

        <div class="nav-container">
            <nav id="menu">
                <a id="close" onclick="menu()">X</a>
                <a href="products.html">SPRING 2022 <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">HOME <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">WOMEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="categories.php?for=men">MEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">KIDS <i class="fa-solid fa-angle-right"></i></a>
            </nav>
        </div>

        <section class="categories">
            <div class="logoAnim">

                <h2>
                    <div class="logoText" id="H">H</div>
                    <div class="logoText" id="E">E</div>
                    <div class="logoText" id="R">R</div>
                    <div class="logoText" id="M">M</div>
                    <div class="logoText" id="A">A</div>
                    <div class="logoText" id="N">N</div>
                    <div class="logoText" id="I">I</div>
                    <div class="underline">SPRING 2022</div>
                </h2>
            </div>

            <div class="bigButton fadeIn" id="shopWomen">
                <div class="overlay"></div>
                <a href="products.html">WOMEN</a>
            </div>

            <div class="bigButton fadeIn" id="shopMen">
                <div class="overlay"></div>
                <a href="categories.php?for=men">MEN</a>
            </div>
        </section>

        <section class="seasonal fadeIn">
            <div class="mediumButton" id="season">
                <div class="overlay"></div>
                <a href="products.html">SPRING COLLECTION</a>
            </div>
        </section>

        <section class="subCategories">

            <div class="smallButton" id="clothing">
                <div class="overlay"></div>
                <a href="products.html">CLOTHING</a>
            </div>

            <div class="smallButton" id="shoes">
                <div class="overlay"></div>
                <a href="products.html">SHOES</a>
            </div>

            <div class="smallButton" id="bags">
                <div class="overlay"></div>
                <a href="products.html">BAGS</a>
            </div>

            <div class="smallButton" id="home">
                <div class="overlay"></div>
                <a href="products.html">HOME</a>
            </div>

        </section>

        <section class="kids">
            <div class="bigButton">
                <div class="overlay"></div>
                <a href="products.html">KIDS</a>
            </div>
        </section>

    </main>

    <footer>
        <nav>
            <div class="top-nav">

                <a href="#">HOMEPAGE</a> |
                <a href="#">HOME</a> |
                <a href="#">WOMEN</a> |
                <a href="#">MEN</a> |
                <a href="#">KIDS</a> |
                <a href="#">SALE</a>
            </div>
            <div class="bot-nav">
                <a href="#">LOGIN</a> |
                <a href="#">REGISTER</a>
            </div>
        </nav>
        <br>
        (C) HERMANI 2022 ALL RIGHTS RESERVED.
    </footer>
</body>

</html>