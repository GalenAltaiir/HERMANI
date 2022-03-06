<?php

if (isset($_GET['for'])) {
    $gender = "men";
}

echo $gender;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HERMANI | MEN</title>
    <link rel="stylesheet" href="css/cat.css">
    <link rel="stylesheet" href="css/base.css">

    <script src="https://kit.fontawesome.com/9880171930.js" crossorigin="anonymous"></script>
    <script src="js/menu-alt.js"></script>
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
                <a href="index.php">HOMEPAGE <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">SPRING 2022 <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">HOME <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">WOMEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="categories.php?for=men">MEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">KIDS <i class="fa-solid fa-angle-right"></i></a>
            </nav>
        </div>
        <section class="heading-section">
            <h1>Men's Section</h1>
            <img src="img/man-cat.jpg" alt="">
            <p>
                Browse our selection of men's apparel, whether you're looking for
                a casual outfit, or trying to impress someone, you're sure to find
                what you need in here.
            </p>
        </section>

        <section class="men-subcat">
            <div class="product-type">
                <a class="prod-name" href='#'>SHIRTS</a>
                <img src="img/clothing.jpg" alt="">
            </div>

            <div class="product-type">
                <a class="prod-name" href='#'>SUITS</a>
                <img src="img/clothing.jpg" alt="">
            </div>

            <div class="product-type">
                <a class="prod-name" href='#'>TROUSERS</a>
                <img src="img/clothing.jpg" alt="">
            </div>

            <div class="product-type">
                <a class="prod-name" href='#'>SHOES</a>
                <img src="img/clothing.jpg" alt="">
            </div>

            <div class="product-type">
                <a class="prod-name" href='#'>BAGS</a>
                <img src="img/clothing.jpg" alt="">
            </div>

            <div class="product-type">
                <a class="prod-name" href='#'>ACCESSORIES</a>
                <img src="img/clothing.jpg" alt="">
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