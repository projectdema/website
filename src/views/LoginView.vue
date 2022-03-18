<template>
  <div class="login page">
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

        <div class="btn-con">
          <button class="btn pastel" type="submit">Login</button>
          <a class="btn disabled">Inscrever-se</a>
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
