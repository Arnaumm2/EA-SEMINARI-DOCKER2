import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import path from 'path';
import { config } from './config/config';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend EA',
      version: '1.0.0',
      description: 'Documentación del Backend EA para la gestión de Organizaciones y Usuarios',
    },
    servers: [
      {
        // IMPORTANTE: Quitamos el puerto 1337 porque el proxy usa HTTPS (443) y el backend se comunica internamente sin puerto. Además, usamos el dominio que definimos en config.ts para que funcione tanto localmente como en producción.
        url: `https://${config.server.domain}`, 
        description: 'Servidor UPC con HTTPS'
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http', //http es el estándar de OpenAPI para autenticación basada en tokens
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },

  // IMPORTANTE: leer los .js compilados en build/routes
  apis: [path.join(__dirname, 'routes', '*.js')],
};

export const swaggerSpec = swaggerJSDoc(options);