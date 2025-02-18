<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PharmaEase</title>
    <link rel="stylesheet" href="style.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Days+One&family=Lexend:wght@100..900&family=Teko:wght@300..700&display=swap');
    </style>
</head>

<body>
    <section id="homebg">
        <nav class="navbar">
            <div class="navbar-container">
                <a href="#" class="navbar-brand">
                    <img src="Frame 6.png" alt="PharmaEase Logo">
                    <span>PharmaEase</span> </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="index.php" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Cart</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">User</a>
                    </li>
                </ul>
            </div>
        </nav>
        <section id="welcome">
            <h1>Welcome to PharmaEase <br>
                A service you can trust</h1>
        </section>
        <section id="whitespace">
            <br><br><br><br><br><br><br><br>

        </section>
    </section>

    <section id="mycart">
        <h1>My Cart</h1>

        <div id="cart1">
            <div class="cart-list">
                <img class="frame-13" src="Frame 14.png" />
            </div>
            <div class="cart-desc">
                <div id="cart-title">
                    <div class="medtitle">Medicol Ibuprofen</div>
                    <div class="medprice">₱24.00</div>
                </div>

                <div id="cart-quantity">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="decrementQuantity()">-</button>
                        <input type="number" id="quantity" value="1" min="1">
                        <button class="quantity-btn" onclick="incrementQuantity()">+</button>
                    </div>
                </div>

            </div>
        </div>

    </section>


    <script src="script.js"></script>
</body>

</html>