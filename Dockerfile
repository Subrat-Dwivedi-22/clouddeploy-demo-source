FROM node:22-alpine
WORKDIR /app
COPY server.mjs .
USER 101:101
EXPOSE 8080
CMD ["node", "server.mjs"]
