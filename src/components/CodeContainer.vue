<script setup lang="ts"></script>

<template>
  <pre class="demo-container">
			<code>
				<slot />
			</code>
		</pre>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem;
  overflow-x: auto;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  border: 1px;
  border-style: solid;
}
code {
  color: white;
}
.demo-container:hover {
  color: #ff2c8b;
}
.demo-container:hover code {
  color: #ff2c8b;
}
</style>
