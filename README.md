# Fake Store

## Live Preview

https://fake-store-eta.vercel.app/

## Project Description

This was one of my first projects using React and the first one using React Router, which was a challenge. Early on this project the repository was called "shopping-cart" because it's what better describes this project, but that ended up causing problems with my routing, as the route "/shopping-cart" conflicted with how GitHub pages rendered my project, so once you opened this project you were thrown straight into /shopping-cart and if you clicked in HOME you'll go nowhere, as the <Link> component sent you to "/" but GitHub thought home was "/shopping-cart", finally breaking the app.

I ended up renaming this project as "fake-store" and hosting it in Vercel.

## What I used

1. HTML
2. CSS
3. JavaScript
4. React
5. React Router

## Features

1. Navbar
    - You can travel through HOME, STORE and SHOPPING-CART
2. HOME
    - You can click a button and go straight to store
3. STORE
    - You can add items to the shopping cart (and the amount of items shown in the icon on the navbar will update)
    - I considered making the phones clickable and making an individual page for each item with a description, but at the end I decided against it, as it was fairly easy to do and my ability to use Router was better proven with my Instagram Clone in the end, as the concept applied to user profiles in that project and item descriptions in this one are the same. I thought that was going to be the most efficient way to use my time.
4. SHOPPING-CART
    - You can add and remove items from the cart
    - The checkout button alerts you if your cart is empty or thanks you for buying in my store

## What I learned

1. JavaScript
    - Gained further understanding of array.prototype.reduce
2. React
    - Gained further understanding of hooks
3. React Router
    - Learned how react-router-dom works
