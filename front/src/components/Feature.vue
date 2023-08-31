<template>
	<div class="feature-card flex flex-col items-center relative z-0 cursor-pointer">
        <div class="intro">
            <div class="flex justify-center rounded-2xl">
                <img src="src/assets/img_3.png" class="rounded-2xl"/>
            </div>
        </div>
        <div class="desc-container">
            <div class="w-full middle flex justify-center">
                <div class="w-64 rounded-2xl data flex  bg-red-300">
                    <div class="bg-red-100 w-1/2 rounded-l-xl p-2 text-center font-bold language">Java</div>
                    <div class="bg-sky-200 w-1/2 rounded-r-xl p-2 text-center font-bold category">System</div>
                </div>
            </div>
            <div class="w-80 rounded-2xl p-5 pb-1 desc">
                <h2 class="text-center p-0 m-0 mt-3">Selectbox</h2>
                <p class="mt-3">
                    Composant permettant de choisir parmis plusieurs object.
                </p>
            </div>
        </div>
	</div>

</template>

<script>
export default {
	name: 'Feature'
}
</script>

<style scoped lang="scss">
.feature-card {
    .intro{
        img{
            width:25rem;
            height: 20rem;
            object-fit: cover;
            filter : brightness(85%);
        }
    }
    .desc-container {
        margin-top: -20%;

        transition: margin-top 250ms;
        transition-timing-function: ease-out;

        position: relative;
        .middle {
            position: absolute;
            top: -15px;
            z-index: 3;
            .data {
                color: white;
                .language {
                    background-color: rgb(102, 70, 150);
                }
                .category {
                    background-color: rgb(70, 83, 150);
                }
            }
        }
        .desc {
            background-color: rgb(30, 56, 122);
            color: white;
            z-index: 2;

            p{

            }
        }
    }
    &:hover{
        .desc-container{
            margin-top: -1rem;
        }
    }
}
</style>
