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
                    <li><a href="https://github.com/projectdema" target="_blank"><i class="fa-brands fa-github"></i> <span>Github</span></a></li>
                    <li><a href="https://discord.gg/GtaxXxNYaD"><i class="fa-brands fa-discord"></i> <span>Discord</span></a></li>
                </ul>
            </div>
            <div class="column">
                <h2 class="section-title">Information</h2>
                <ul class="box">
                    <li><a href="https://github.com/projectdema/website" target="_blank"><i class="fa-solid fa-code"></i> <span>Source code</span></a></li>
                    <li><a href="https://github.com/projectdema/website/releases" target="_blank"><i class="fa-solid fa-sitemap"></i> <span>Releases</span></a></li>
                    <li><router-link to="/credits"><i class="fa-solid fa-user-group"></i> <span>Team</span></router-link></li>
                </ul>
            </div>
            <div class="column">
                <h2 class="section-title">Legal</h2>
                <ul class="box">
                    <li><router-link to="/privacy"><i class="fa-solid fa-gavel"></i> <span>Privacy Policy</span></router-link></li>
                    <li><router-link to="/tos"><i class="fa-solid fa-book-open"></i> <span>Terms of Use</span></router-link></li>
                    <li><router-link to="/credits"><i class="fa-solid fa-folder"></i> <span>Credits</span></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>