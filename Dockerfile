FROM microsoft/aspnet

COPY ./AsiduaChatHack/src/AsiduaChatHack/ /app
WORKDIR /app
RUN ["kpm", "restore"]

EXPOSE 5000
ENTRYPOINT ["k", "kestrel"]