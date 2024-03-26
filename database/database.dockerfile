FROM postgres:13.1-alpine
LABEL mainainer="Henrique M. Hartwig <henrique2805@gmail.com>"
ENV POSTGRES_DB=
ENV POSTGRES_USER=
ENV POSTGRES_PASSWORD=
EXPOSE 5432


FROM --platform=linux/amd64 python:3

ENV FLYWAY_VERSION=6.0.6

RUN wget -qO- https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/${FLYWAY_VERSION}/flyway-commandline-${FLYWAY_VERSION}-linux-x64.tar.gz | tar xvz && mv flyway-${FLYWAY_VERSION} flyway && ln -s `pwd`/flyway/flyway /usr/local/bin

RUN pip install pystrich
RUN pip install psycopg2

