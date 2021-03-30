'use strict';

const {getMensajes } = require ('./utils/database')
const {lifecycles} = require ('../../api/mensajes/models/mensajes')
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */
 const { sanitizeEntity } = require('strapi-utils');
 module.exports = () => {


  
  var io = require('socket.io')(strapi.server, {
      cors: {
        origin: "http://localhost:1337",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
  });

  io.on('connection', socket=> {
        socket.on('join', ({ from, to,  room }) => {
            socket.userId = from;
          socket.broadcast.to(room).emit('message',data);
      
        })

   

    });
};