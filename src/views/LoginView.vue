<template>
  <div class="login page-container">
    <div class="header">
      <h1>Acesso para estudantes</h1>
      <p>
        Aqui os estudantes participantes do projeto podem acessar os seus
        relatórios e informações.
      </p>
    </div>

    <form action="/" method="post" autocomplete="off">
      <div class="container">
        <label for="uname">Identificação</label>
        <input
          type="text"
          placeholder="Insira sua identificação. Exemplo: 1234@dema"
          name="uname"
          required
        />

        <label for="psw">Senha</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          name="psw"
          required
        />

        <div class="btn-cont">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "Login",
};
</script>
