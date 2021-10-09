<script>
import Product from '@/components/Product.vue'

export default {
    name: 'Product List',
    components: {
        Product,
    },
}
</script>

<template>
    <div class="MainContainer">
        <div class="nav">
            <button class="buttonGetir">Getir</button>
            <button class="buttonRegister">Kayıt Ol</button>
            <button class="buttonLogin">Giriş Yap</button>
        </div>
        <div class="banner">
            <div class="bannerImage">
                <img
                    src="https://s3.eu-west-1.amazonaws.com/getirclone.s3bucket/Banner.jpeg"
                    alt="Banner"
                />
            </div>
        </div>
        <section class="ProductCategorySection">
            <h4 class="CategoryText">Kategoriler</h4>
            <section class="ProductCategory">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </section>
        </section>
    </div>
</template>

<style>
.MainContainer {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-gray-background);
}
.nav {
    column-gap: 25px;
    padding-right: 250px;
    padding-left: 150px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #4c3398;
    font-size: 14px;
    height: 60px;
}

.nav .buttonGetir {
    color: var(--color-brand-yellow);
    background-color: var(--color-secondary);
    font-weight: bold;
    font-size: 18px;
    padding: 7px 50px 7px 50px;
    border: none;
    align-self: flex-end;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.nav .buttonRegister {
    height: 70%;
    align-self: center;
    margin-left: auto;
    color: var(--color-brand-yellow);
    background-color: var(--color-primary);
    font-weight: bold;
    font-size: 15px;
    padding: 7px 20px;
    border: none;
    border-radius: 10px;
}

.nav .buttonRegister:hover {
    transition: 1s;
    background-color: var(--color-secondary);
}

.nav .buttonRegister:active {
    transition: 0.07s;
    color: var(--color-gray-dark);
}
.nav .buttonLogin {
    height: 70%;
    align-self: center;
    color: var(--color-brand-yellow);
    background-color: #4c3398;
    font-weight: bold;
    font-size: 15px;
    padding: 7px 20px;
    border: none;
    border-radius: 10px;
}
.nav .buttonLogin:hover {
    transition: 1s;
    background-color: var(--color-secondary);
}

.nav .buttonLogin:active {
    transition: 0.07s;
    color: var(--color-gray-dark);
}

.banner {
    display: flex;
    justify-content: center;
    background-color: var(--color-secondary);
    width: 100vw;
    height: 562px;
}

.bannerImage {
    align-self: center;
    opacity: 0.8;
}

.ProductCategorySection {
    margin-left: 100px;
    margin-right: 100px;
    height: 35vh;
    background-color: var(--color-gray-light);
}
.CategoryText {
    align-self: top;
    color: var(--color-gray-mid);
    font-size: 24px;
    margin: 5px;
}
.ProductCategory {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 100px;
    margin-right: 100px;
    height: 25vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}
</style>
