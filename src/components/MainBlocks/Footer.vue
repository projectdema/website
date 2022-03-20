<script lang="ts">
export default {
    name: "Footer",
    props: {
        retracted: {
            type: Boolean,
            required: false,
        },
        invertColor: {
            type: Boolean,
            required: false,
        },
    },
    data(): any {
        return {
            //@ts-ignore
            footerPropClasses: `${!this.invertColor ? "primary" : "secondary"} ${!this.retracted ? 'extended' : 'retracted'}`,
        }
    }
}
</script>

<template>
    <div class="footer" :class="footerPropClasses">
        <ul class="left-footer">
            <li class="column">
                <h2 class="section-title"><span class="title">project</span><span class="subtitle">DEMA</span></h2>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt 
                    molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam 
                    quis recusandae.
                </p>
                <p class="bottom">All rights reserved © {{ new Date().getFullYear() }} </p>
            </li>
        </ul>
        <ul class="right-footer">
            <li class="column">
                <h2 class="section-title">Social</h2>
                <ul class="box">
                    <li><a href="#"><i class="fa-brands fa-github"></i> Github</a></li>
                    <li><a href="#"><i class="fa-brands fa-discord"></i> Discord</a></li>
                </ul>
            </li>
            <li class="column">
                <h2 class="section-title">Information</h2>
                <ul class="box">
                    <li><a href="#"><i class="fa-solid fa-code"></i> Source code</a></li>
                    <li><a href="#"><i class="fa-solid fa-sitemap"></i> Releases</a></li>
                </ul>
            </li>
            <li class="column">
                <h2 class="section-title">Legal</h2>
                <ul class="box">
                    <li><a href="#"><i class="fa-solid fa-bookmark"></i> Privacy Policy</a></li>
                    <li><a href="#"><i class="fa-solid fa-file"></i> Terms of Use</a></li>
                    <li><a href="#"><i class="fa-solid fa-file"></i> Credits</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>