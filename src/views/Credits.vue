<script lang="ts">


export default {
    components: {
    
    },
    data() {
        return {
            categories: [
                {
                    type: "Development",
                    icon: "fa-solid fa-code",
                    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ex deleniti autem cupiditate ad! Harum dolore, saepe voluptatum, tempora quos, 
                        libero sint facere debitis ab dicta illum? Nisi asperiores voluptates adipisci.`,
                    people: [
                        {
                            img: "https://www.w3schools.com/w3images/team2.jpg",
                            name: "José",
                            email: ""
                        },
                        {
                            img: "https://www.w3schools.com/w3images/team1.jpg",
                            name: "Clara",
                            email: ""
                        },
                        {
                            img: "https://www.w3schools.com/w3images/team3.jpg",
                            name: "Carlos",
                            email: ""
                        },
                        {
                            img: "https://www.w3schools.com/w3images/team4.jpg",
                            name: "Pedro",
                            email: ""
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<template>
    <div class="page credits">
        <div class="page-header">
            <div class="header-left">
                <img src="/svgs/people_credits.svg" class="header-banner">
            </div>
            <div class="center-y header-right">
                <div class="text-box center-it">
                    <PageTitle subtitle="CREDITS"></PageTitle>
                    <p class="page-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ex deleniti autem cupiditate ad! Harum dolore, saepe voluptatum, tempora quos, 
                        libero sint facere debitis ab dicta illum? Nisi asperiores voluptates adipisci.
                    </p>
                </div>
            </div>
        </div>
        <div class="page-body secondary">
            <div class="personel">
                <section class="personel-category" v-for="(cat, c) in categories" :key="c">
                    <h1 class="personel-category-title">
                        {{ cat.type.toUpperCase() }} <i :class="cat.icon" class="icon"></i>
                    </h1>
                    <p class="personel-category-description">
                        {{ cat.description }}
                    </p>
                    <div class="person" v-for="(person, p) in cat.people" :key="p">
                        <div class="inner">
                            <img class="avatar" :src="person.img" :alt="person.name" style="width:100%">
                            <h2 class="name">{{ person.name }}</h2>
                            <p class="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>

                            <a class="sm" href="#"><i class="fa fa-github"></i></a>
                            <a class="sm" href="#"><i class="fa fa-twitter"></i></a>
                            <a class="sm" href="#"><i class="fa fa-linkedin"></i></a>
                            <a class="sm" href="#"><i class="fa fa-facebook"></i></a>
                            
                            <button class="btn solid pastel">
                                Contact
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <Footer/>
</template>