FROM python:3.11.9

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

RUN apt-get update && apt-get install -y postgresql-client

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=123
ENV POSTGRES_DB=mydatabase

RUN echo "grant all privileges on database $POSTGRES_DB to $POSTGRES_USER;" > /docker-entrypoint-initdb.d/init.sql

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]