Frontend:

-Login
    -User
    -Password
    -Dashboard
-Dashboard
    -Chatrooms
-Messages
    -Array of messages
-Enter Messages
    -Input
-Websockets
    -Emit when message is sent
    -Listen to when response comes back from server

Backend:

Server
    -getMessages
    -postMessages
Database
    -users
    -chatrooms
Websockets
    -Listen to when messages are sent from client
        -Save to database
        -Emit back to client