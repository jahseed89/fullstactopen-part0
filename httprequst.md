```mermaid

sequenceDiagram
    participant B as Browser
    participant S as Server
    B->>S: POST: https://studies.cs.helsinki.fi/exampleapp/notes
    S-->>B: GET: HTML document
    B->>S: https://studies.cs.helsinki.fi/exampleapp/main.css
    S-->>B: css file
    B->>S: https://studies.cs.helsinki.fi/exampleapp/main.js
    S-->>B: Javascript code including ...,
    B->>S: Form submit input: My name is Samson
    S-->>B: data.json including contents: "My name is Samson" date: "2023-06-30T01:59:36.528Z" 
