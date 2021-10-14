FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
RUN pip install django-allauth
RUN pip install channels
RUN pip install channels_redis
ADD . /code/
EXPOSE 8000