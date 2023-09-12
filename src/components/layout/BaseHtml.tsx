import { Component, PropsWithChildren } from "@elysiajs/html";

export const BaseHtml: Component<{title?: string}> = ({ children, title }) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title ?? 'Info Display'}</title>
  <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
  <link href="/public/tw-styles.css" rel="stylesheet">
  <script src="/public/live-reload.js"></script>
</head>

${children}
`;
