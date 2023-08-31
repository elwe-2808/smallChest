<template>
	<div class="feature-card flex flex-col items-center relative z-0">
        <div class="intro">
            <div class="flex justify-center w-80 rounded-2xl">
                <img src="src/assets/img_1.png" class="w-full rounded-2xl"/>
            </div>
            <div class="w-full middle flex justify-center">
                <div class="w-64 rounded-2xl py-3 px-4 data flex justify-evenly">
                    <span>Java</span>
                    <span>System</span>

                </div>
            </div>
        </div>
		<div class="w-80 rounded-2xl p-5 desc">
            <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget tempor risus, quis mollis leo. Praesent ut erat varius, mollis neque eu, mollis diam. Quisque non ullamcorper leo, eget lobortis ante. Suspendisse velit urna, luctus sed ex eu, viverra consectetur tellus. Phasellus volutpat consequat urna, congue aliquet lacus.
            </p>
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
        &>img{

        }
        position: relative;
        .middle {
            position: absolute;
            bottom: -15px;
            z-index: 3;
            .data {
                background-color: rgb(102, 70, 150);
                color: white;
            }
        }
    }
	.desc {
        background-color: rgba(30, 59, 122, 1);
        color: white;
        margin-top: -15px;
        z-index: 2;
	}
}
</style>
