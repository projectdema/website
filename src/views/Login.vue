<template>
  <div class="page login">
    <div class="page-header" id="page-header">
      <div class="header-left">
        <img class="header-banner" src="@/assets/svgs/join.svg" style="transform: scaleX(-1);"/>
      </div>
      <div class="header-right center-y">
        <div class="text-box center-it">
          <PageTitle subtitle="LOGIN"></PageTitle>
          <p class="page-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia laborum, error eligendi reprehenderit a, repellendus eum blanditiis, necessitatibus vitae modi. Sequi repudiandae nostrum error!
          </p>
        </div>
      </div>
    </div>

    <div class="page-body secondary">
      <div class="formulary half75" style="">
        <form action="/" method="post" autocomplete="off">
          <label for="uname" class="label">Identification</label>
          <input
            type="text"
            placeholder="example@dema"
            name="uname"
            required
          />

          <label for="psw" class="label">Password</label>
          <input
            type="password"
            placeholder="Your password"
            name="psw"
            required
          />

          <div class="btn-line">
            <button class="btn solid pastel" type="submit">Login</button>
            <a class="btn ghost violet-blue">Signup</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer :invertColor="false"/>
</template>

<script lang="ts">
export default {
  
};
</script>
