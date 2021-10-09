<script>
export default { name: 'Product' }
</script>

<template>
    <div class="ProductFrame">
        <figure class="image">
            <button class="buttonBuy">+</button>
            <img
                src="https://s3.eu-west-1.amazonaws.com/getirclone.s3bucket/Banana.png"
                width="120"
                height="120"
            />
        </figure>
    </div>
</template>

<style>
.ProductFrame {
    display: flex;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 20px;
}

.image {
    align-self: center;
}

.buttonBuy {
    position: relative;
    left: 90px;
    top: 10px;
    color: grey;
    font-size: 20px;
    border: 1px solid;
    border-style: outset;
    border-radius: 5px;
    width: 32px;
    height: 32px;
    background: inherit;
}
</style>
