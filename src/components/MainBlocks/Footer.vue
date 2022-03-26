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
            footerPropClasses: `${!this.invertColor ? "primary" : "secondary"}`,
        }
    }
}
</script>

<template>
    <div class="footer" :class="footerPropClasses">
        <div class="left-side">
            <div class="column">
                <h2 class="section-title brand"><span class="title">project</span><span class="subtitle">Dema</span></h2>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt 
                    molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam 
                    quis recusandae.
                </p>
                <p class="bottom">
                    Made with <i class="fa-solid fa-heart"></i>
                     - 
                    All rights reserved <i class="fa-regular fa-copyright"></i> {{ new Date().getFullYear() }}
                    </p>
            </div>
        </div>
        <div class="right-side">
            <div class="column">
                <h2 class="section-title">Social</h2>
                <ul class="box">
                    <li><a href="https://github.com/projectdema" target="_blank"><span class="icon"><i class="fa-brands fa-github"></i></span> <span>Github</span></a></li>
                    <li><a href="https://discord.gg/GtaxXxNYaD"><span class="icon"><i class="fa-brands fa-discord"></i></span> <span>Discord</span></a></li>
                </ul>
            </div>
            <div class="column">
                <h2 class="section-title">Information</h2>
                <ul class="box">
                    <li><a href="https://github.com/projectdema/website" target="_blank"><span class="icon"><i class="fa-solid fa-code"></i></span> <span>Source code</span></a></li>
                    <li><a href="https://github.com/projectdema/website/releases" target="_blank"><span class="icon"><i class="fa-solid fa-sitemap"></i></span> <span>Releases</span></a></li>
                    <li><router-link to="/"><span class="icon"><i class="fa-solid fa-user-group"></i></span> <span>Team</span></router-link></li>
                </ul>
            </div>
            <div class="column">
                <h2 class="section-title">Legal</h2>
                <ul class="box">
                    <li><router-link to="/"><span class="icon"><i class="fa-solid fa-gavel"></i></span> <span>Privacy Policy</span></router-link></li>
                    <li><router-link to="/"><span class="icon"><i class="fa-solid fa-book-open"></i></span> <span>Terms of Use</span></router-link></li>
                    <li><router-link to="/"><span class="icon"><i class="fa-solid fa-folder"></i></span> <span>Credits</span></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>