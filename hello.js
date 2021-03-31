function handleRequest(request) {

  return new Response(
    `<body
      align="center"
      style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 15rem; height: 100%;"
    >
      <h1>
        <a href="https://twitter.com/ivgtr target="_blank" rel="noopener noreferrer"">
          iVgtr
        </a>
      </h1>
    </body>`,
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    },
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
